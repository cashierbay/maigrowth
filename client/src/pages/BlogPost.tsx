import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { fadeUp, stagger } from "@/lib/animations";
import SEO from "@/components/SEO";
import { CheckCircle2, ArrowLeft } from "lucide-react";

function categoryStyles(color: string) {
  switch (color) {
    case "orange":
      return { backgroundColor: "#FFF0EB", color: "#FF6B35" };
    case "navy":
      return { backgroundColor: "rgba(18,21,61,0.08)", color: "#12153D" };
    case "green":
      return { backgroundColor: "#F0FDF4", color: "#15803d" };
    case "purple":
      return { backgroundColor: "#F5F3FF", color: "#7C3AED" };
    default:
      return { backgroundColor: "#EFEFED", color: "#767676" };
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function extractHeadings(content: string): { id: string; text: string }[] {
  const lines = content.split("\n");
  const headings: { id: string; text: string }[] = [];
  for (const line of lines) {
    const match = line.match(/^##\s+(.+)$/);
    if (match) {
      const text = match[1].trim();
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");
      headings.push({ id, text });
    }
  }
  return headings;
}

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: JSX.Element[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      const text = line.slice(3);
      const id = text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");
      elements.push(
        <h2
          key={i}
          id={id}
          style={{
            fontFamily: "Syne, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(20px, 2.5vw, 28px)",
            color: "#0F0F0F",
            marginTop: 40,
            marginBottom: 16,
            lineHeight: 1.3,
          }}
        >
          {text}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={i}
          style={{
            fontFamily: "Syne, sans-serif",
            fontWeight: 700,
            fontSize: 20,
            color: "#0F0F0F",
            marginTop: 28,
            marginBottom: 12,
          }}
        >
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("> ")) {
      elements.push(
        <blockquote
          key={i}
          style={{
            borderLeft: "4px solid #FF6B35",
            backgroundColor: "#FFF0EB",
            borderRadius: "0 12px 12px 0",
            padding: "16px 24px",
            marginTop: 24,
            marginBottom: 24,
            fontFamily: "DM Sans, sans-serif",
            fontSize: 16,
            color: "#3D3D3D",
            lineHeight: 1.7,
          }}
        >
          <strong>{line.slice(2)}</strong>
        </blockquote>
      );
    } else if (line.startsWith("| ")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      const rows = tableLines.filter((l) => !l.match(/^\|[-\s|]+\|$/));
      elements.push(
        <div key={`table-${i}`} className="overflow-x-auto my-6">
          <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "DM Sans, sans-serif" }}>
            {rows.map((row, ri) => {
              const cells = row.split("|").filter((c) => c.trim() !== "");
              return (
                <tr
                  key={ri}
                  style={{ backgroundColor: ri === 0 ? "#EFEFED" : ri % 2 === 0 ? "#F7F6F4" : "#FFFFFF", borderBottom: "1px solid #E2E0DC" }}
                >
                  {cells.map((cell, ci) => {
                    const El = ri === 0 ? "th" : "td";
                    return (
                      <El
                        key={ci}
                        style={{
                          padding: "10px 16px",
                          textAlign: "left",
                          fontSize: 14,
                          color: ri === 0 ? "#0F0F0F" : "#3D3D3D",
                          fontWeight: ri === 0 ? 700 : 400,
                          fontFamily: ri === 0 ? "Syne, sans-serif" : "DM Sans, sans-serif",
                        }}
                      >
                        {cell.trim()}
                      </El>
                    );
                  })}
                </tr>
              );
            })}
          </table>
        </div>
      );
      continue;
    } else if (line.startsWith("- ") || line.startsWith("* ")) {
      const items: string[] = [];
      while (i < lines.length && (lines[i].startsWith("- ") || lines[i].startsWith("* "))) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} style={{ margin: "16px 0", paddingLeft: 0, listStyle: "none" }}>
          {items.map((item, idx) => (
            <li
              key={idx}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
                marginBottom: 8,
                fontFamily: "DM Sans, sans-serif",
                fontSize: 16,
                color: "#3D3D3D",
                lineHeight: 1.7,
              }}
            >
              <span style={{ color: "#FF6B35", marginTop: 5, flexShrink: 0 }}>•</span>
              <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/_(.*?)_/g, "<em>$1</em>") }} />
            </li>
          ))}
        </ul>
      );
      continue;
    } else if (line.startsWith("**Step ") || (line.startsWith("**") && line.endsWith("**"))) {
      const text = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      elements.push(
        <p
          key={i}
          style={{ fontFamily: "DM Sans, sans-serif", fontSize: 16, color: "#3D3D3D", lineHeight: 1.75, marginBottom: 12, marginTop: 8 }}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      );
    } else if (line.trim() === "") {
      // skip empty lines
    } else {
      const htmlLine = line
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/_(.*?)_/g, "<em>$1</em>")
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "<span style='color:#FF6B35'>$1</span>");
      elements.push(
        <p
          key={i}
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: 16,
            color: "#3D3D3D",
            lineHeight: 1.75,
            marginBottom: 16,
          }}
          dangerouslySetInnerHTML={{ __html: htmlLine }}
        />
      );
    }

    i++;
  }

  return elements;
}

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const post = getPostBySlug(params.slug);
  const allPosts = getAllPosts();

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#F7F6F4" }}>
        <div className="text-center">
          <h1 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 32, color: "#0F0F0F" }}>
            Post Not Found
          </h1>
          <Link href="/blog">
            <span className="btn-primary mt-6 inline-block">Back to Blog</span>
          </Link>
        </div>
      </div>
    );
  }

  const catStyle = categoryStyles(post.categoryColor);
  const headings = extractHeadings(post.content);
  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
      />

      <section
        className="relative"
        style={{
          backgroundColor: "#12153D",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          padding: "clamp(80px, 12vw, 160px) clamp(16px, 4vw, 24px) clamp(40px, 8vw, 80px)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4"
          >
            <Link href="/blog">
              <span
                className="flex items-center gap-2 text-sm cursor-pointer transition-colors mb-6 inline-flex"
                style={{ color: "rgba(255,255,255,0.5)", fontFamily: "DM Sans, sans-serif" }}
              >
                <ArrowLeft size={14} />
                Back to Blog
              </span>
            </Link>
            <span
              className="text-[12px] font-semibold px-3 py-1 rounded-full inline-block"
              style={{ fontFamily: "DM Sans, sans-serif", ...catStyle }}
            >
              {post.category}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white mt-4"
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(26px, 4vw, 52px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            {post.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-sm"
            style={{ color: "rgba(255,255,255,0.5)", fontFamily: "DM Sans, sans-serif" }}
          >
            By MaiGrowth Team · {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} · {post.readTime}
          </motion.p>
        </div>
      </section>

      <div style={{ height: 64, background: "linear-gradient(to bottom, #12153D, #F7F6F4)" }} />

      <section style={{ backgroundColor: "#F7F6F4", padding: "clamp(32px, 6vw, 64px) 0 clamp(40px, 8vw, 96px)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {renderMarkdown(post.content)}
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {headings.length > 0 && (
                  <div className="mg-card">
                    <h4
                      className="text-sm mb-4"
                      style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, color: "#0F0F0F" }}
                    >
                      In This Article
                    </h4>
                    <div className="space-y-2">
                      {headings.map((h) => (
                        <a
                          key={h.id}
                          href={`#${h.id}`}
                          className="block text-sm transition-colors leading-snug"
                          style={{
                            color: "#767676",
                            fontFamily: "DM Sans, sans-serif",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "#0F0F0F")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "#767676")}
                        >
                          {h.text}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                <div
                  className="mg-card"
                  style={{ borderTopWidth: 3, borderTopColor: "#FF6B35" }}
                >
                  <h3
                    className="text-lg mb-2"
                    style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, color: "#0F0F0F" }}
                  >
                    Want these results for your brand?
                  </h3>
                  <p
                    className="text-[14px] leading-relaxed mb-5"
                    style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}
                  >
                    Book a free strategy consultation — no pressure, just expert analysis.
                  </p>
                  <Link href="/contact">
                    <span className="btn-primary w-full justify-center">
                      Book Free Consultation →
                    </span>
                  </Link>
                </div>

                <div className="mg-card">
                  <h4
                    className="text-sm mb-4"
                    style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, color: "#0F0F0F" }}
                  >
                    Related Articles
                  </h4>
                  <div className="space-y-4">
                    {relatedPosts.map((rp) => {
                      const rCatStyle = categoryStyles(rp.categoryColor);
                      return (
                        <Link key={rp.slug} href={`/blog/${rp.slug}`}>
                          <div className="cursor-pointer group">
                            <span
                              className="text-[11px] font-semibold px-2 py-0.5 rounded-full inline-block mb-1"
                              style={{ fontFamily: "DM Sans, sans-serif", ...rCatStyle }}
                            >
                              {rp.category}
                            </span>
                            <p
                              className="text-[13px] leading-snug"
                              style={{
                                fontFamily: "Syne, sans-serif",
                                fontWeight: 700,
                                color: "#0F0F0F",
                                transition: "color 0.2s",
                              }}
                              onMouseEnter={(e) => (e.currentTarget.style.color = "#FF6B35")}
                              onMouseLeave={(e) => (e.currentTarget.style.color = "#0F0F0F")}
                            >
                              {rp.title}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
