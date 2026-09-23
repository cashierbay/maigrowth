/**
 * Build-time prerenderer.
 *
 * Vercel serves this app as static files, so AI crawlers that don't execute
 * JavaScript (GPTBot, ClaudeBot, PerplexityBot) previously received an empty
 * `<div id="root"></div>`. This script loads each route in headless Chrome
 * after `vite build`, waits for the app to settle, and writes the fully
 * rendered HTML back to disk as `<route>/index.html`.
 *
 * Two details matter and are easy to get wrong:
 *   1. Sections animate in via framer-motion `useInView`, so the page must be
 *      scrolled top-to-bottom before capture or the snapshot bakes in
 *      `opacity: 0` and the stat counters freeze at their start value.
 *   2. react-helmet-async writes <title>, canonical and JSON-LD into <head>
 *      at runtime, so capturing the live DOM is what makes those per-route
 *      tags visible to crawlers.
 *
 * The client still boots normally afterwards (main.tsx uses createRoot, which
 * replaces this markup), so the prerendered HTML is purely additive.
 */
import { createServer } from "node:http";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, extname, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "dist", "public");
const PORT = 45678;

// Keep in sync with client/public/sitemap.xml. /admin is intentionally absent:
// it is disallowed in robots.txt and renders behind an auth gate.
const ROUTES = [
  "/",
  "/about",
  "/guest-posts",
  "/link-insertions",
  "/packages",
  "/blog",
  "/contact",
  "/submit-testimonial",
  "/privacy-policy",
  "/terms-and-conditions",
  "/refund-policy",
];

/**
 * Enumerate individual blog post routes from the single source of truth
 * (client/src/lib/posts.ts). Without this, every /blog/<slug> falls through
 * the SPA fallback and gets the homepage HTML written to it, so crawlers see
 * the homepage (title, h1, canonical=/) instead of the article — the articles
 * are effectively invisible to AI and self-canonicalize to the homepage.
 */
async function getBlogRoutes() {
  const postsFile = join(ROOT, "client", "src", "lib", "posts.ts");
  const src = await readFile(postsFile, "utf-8");
  const slugs = [...src.matchAll(/slug:\s*["'`]([^"'`]+)["'`]/g)].map((m) => m[1]);
  return [...new Set(slugs)].map((slug) => `/blog/${slug}`);
}

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".ico": "image/x-icon",
};

/** Static server with SPA fallback, mirroring how Vercel serves the build. */
function startServer() {
  const server = createServer(async (req, res) => {
    const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
    let filePath = join(DIST, urlPath);

    if (!extname(urlPath) || !existsSync(filePath)) {
      filePath = join(DIST, "index.html");
    }

    try {
      const body = await readFile(filePath);
      res.writeHead(200, {
        "Content-Type": MIME[extname(filePath)] ?? "application/octet-stream",
      });
      res.end(body);
    } catch {
      res.writeHead(404).end("Not found");
    }
  });

  return new Promise((ok) => server.listen(PORT, () => ok(server)));
}

/**
 * Scroll the full page so every `useInView` section animates in, then return
 * to the top so the captured scroll position matches a fresh visit.
 *
 * Two passes: lazy-loaded sections (React.lazy + Suspense) can mount after the
 * first pass has already scrolled past them, which leaves them stuck at
 * `opacity: 0` because their in-view trigger never fired.
 */
async function revealAllSections(page) {
  for (let pass = 0; pass < 2; pass++) {
    await page.evaluate(async () => {
      const step = Math.max(200, Math.floor(window.innerHeight * 0.6));
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 120));
      }
      window.scrollTo(0, document.body.scrollHeight);
      await new Promise((r) => setTimeout(r, 600));
    });
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  // Longest CountUp duration is 2200ms; give animations room to land on their
  // final values before the snapshot.
  await new Promise((r) => setTimeout(r, 2500));
}

/**
 * Launch a headless browser that works both on Vercel and locally.
 *
 * On Vercel the build runs on Amazon Linux, whose image is missing the shared
 * libraries a normal Chromium needs (libnss3, libnspr4, ...), so puppeteer's
 * bundled Chrome dies at launch with "error while loading shared libraries"
 * (exit 127). @sparticuz/chromium ships a Chromium compiled to run in exactly
 * that environment with those libraries included — that is the whole reason it
 * exists. Locally we point at an installed Chrome/Edge via CHROME_PATH (or one
 * of the usual install locations), avoiding the Linux-only binary entirely.
 */
async function launchBrowser() {
  const args = ["--no-sandbox", "--disable-dev-shm-usage", "--disable-gpu"];

  const local = process.env.CHROME_PATH || findLocalChrome();
  if (local) {
    return puppeteer.launch({ headless: true, executablePath: local, args });
  }

  // No local browser: assume a Linux serverless build (Vercel) and use the
  // bundled Chromium built for it.
  const chromium = (await import("@sparticuz/chromium")).default;
  return puppeteer.launch({
    headless: true,
    executablePath: await chromium.executablePath(),
    args: [...chromium.args, "--disable-dev-shm-usage"],
  });
}

/** Common Chrome/Edge locations, so a local `build:static` works with no env. */
function findLocalChrome() {
  const candidates =
    process.platform === "win32"
      ? [
          "C:/Program Files/Google/Chrome/Application/chrome.exe",
          "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
          "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
        ]
      : process.platform === "darwin"
        ? [
            "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
            "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
          ]
        : [];
  return candidates.find((p) => existsSync(p));
}

async function main() {
  if (!existsSync(join(DIST, "index.html"))) {
    throw new Error(`No build found at ${DIST}. Run "vite build" first.`);
  }

  const server = await startServer();
  const browser = await launchBrowser();

  const blogRoutes = await getBlogRoutes();
  const routes = [...ROUTES, ...blogRoutes];

  let failures = 0;

  try {
    for (const route of routes) {
      const page = await browser.newPage();
      await page.setViewport({ width: 1440, height: 900 });

      try {
        await page.goto(`http://127.0.0.1:${PORT}${route}`, {
          waitUntil: "networkidle2",
          timeout: 45000,
        });
        // Wait for React to mount before scrolling, otherwise there is nothing
        // to reveal.
        await page.waitForFunction(
          () => document.querySelector("#root")?.children.length > 0,
          { timeout: 20000 },
        );
        await revealAllSections(page);

        const html = await page.evaluate(
          () => "<!DOCTYPE html>\n" + document.documentElement.outerHTML,
        );

        const outDir = route === "/" ? DIST : join(DIST, route);
        await mkdir(outDir, { recursive: true });
        await writeFile(join(outDir, "index.html"), html, "utf-8");

        const words = await page.evaluate(
          () => (document.body.innerText.match(/\S+/g) || []).length,
        );
        console.log(
          `  ok  ${route.padEnd(24)} ${String(words).padStart(5)} words  ${(html.length / 1024).toFixed(0)} KB`,
        );
      } catch (err) {
        failures++;
        console.error(`  FAIL ${route}: ${err.message}`);
      } finally {
        await page.close();
      }
    }
  } finally {
    await browser.close();
    server.close();
  }

  if (failures > 0) {
    // Fail the build rather than shipping a half-prerendered site, which would
    // leave some routes invisible to crawlers with no obvious symptom.
    throw new Error(`${failures} route(s) failed to prerender`);
  }
  console.log(
    `\nPrerendered ${routes.length} routes (${blogRoutes.length} blog posts).`,
  );
}

main().catch((err) => {
  console.error(`\nPrerender failed: ${err.message}`);
  process.exit(1);
});
