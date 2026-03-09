# MaiGrowth — Replit Agent Master Prompt
### Optimized for: Replit Core Plan
### Framework: Next.js 14 + Tailwind CSS + Markdown Blog System
### Design: Light Mode Dominant | Clean Corporate Tech | Competitor-Informed Palette
### Version: Final v2 — March 2025

---

# HOW TO USE THIS IN REPLIT

1. Go to replit.com → click "Create Repl"
2. Choose "Next.js" as your template
3. Once open, click the "AI" button (Replit Agent)
4. Copy EVERYTHING between === MASTER PROMPT START === and === MASTER PROMPT END ===
5. Paste it as your FIRST message — do not split it
6. Let it build completely before sending any follow-up messages
7. Use the FOLLOW-UP PROMPTS at the bottom of this document one at a time to refine
8. When done → click "Deploy" in Replit to go live

---

# DESIGN RATIONALE
*(For your reference only — do NOT paste this section)*

Competitor GetMeLinks uses:
- #ff8f60 warm orange, #131313 near-black, #f2f1ef warm off-white, #ffffff white
- Aeonik font — corporate, clean
- Light mode dominant, minimalist, high-contrast, professional

MaiGrowth design strategy — same aesthetic family, clearly distinct execution:
- Slightly cooler, crisper backgrounds vs their warm off-white → feels more precise
- Sharper orange #FF6B35 vs their soft #ff8f60 → more confident and bold
- Deep navy #12153D as a secondary dark color → adds AI-era depth without going full dark mode
- Syne + DM Sans typography → bolder and more modern than their Aeonik
- Stronger typographic hierarchy → headlines hit harder, sections feel more structured
- Same professional light-mode world — but MaiGrowth feels sharper, more forward-thinking

---

---

# === MASTER PROMPT START ===

## YOUR ROLE

You are a senior full-stack developer and UI/UX designer. Build a complete, production-ready website for MaiGrowth — a global link building and AI search optimization agency. Every page must be fully coded with real professional copy, polished design, mobile responsive, and ready to deploy on Replit. Do not use any placeholder lorem ipsum text — all copy must be real and professional.

---

## ABOUT MAIGROWTH

MaiGrowth is a global agency offering three services to business owners worldwide:

**Service 1 — Premium Link Building**
High-authority backlinks from real websites with genuine organic traffic. White-hat outreach only. Permanent placements — not rental links, no recurring link fees.

**Service 2 — AEO (Answer Engine Optimization)**
Optimizing content and brand authority so AI tools like Google AI Overviews and Bing Copilot automatically select the client's brand as the trusted answer to user queries.

**Service 3 — GEO (Generative Engine Optimization)**
Building brand entity authority so ChatGPT, Perplexity, Claude, and Gemini cite the client's brand when users ask questions in their niche.

**The core message to repeat everywhere on the site:**
Every other link building agency only targets Google rankings. MaiGrowth builds links that ALSO get brands cited in AI-generated answers — the channel that now influences millions of buying decisions daily. This is not a future trend. It is happening now, and MaiGrowth is built for it.

**Target audience:** Business owners globally who have a website. Any industry. Worldwide service.
**Brand tone:** Confident, expert, results-focused, forward-thinking. Educate first, then convert. Never pushy or salesy.

---

## TECH STACK

- Framework: Next.js 14 with App Router
- Styling: Tailwind CSS with custom config
- Animations: Framer Motion
- Icons: Lucide React
- Fonts: next/font/google — load Syne (700, 800) + DM Sans (400, 500, 600)
- Blog system: Markdown files + gray-matter + next-mdx-remote
- No backend — contact form uses JavaScript success state only

Install these packages at the start:
```
npm install framer-motion lucide-react gray-matter next-mdx-remote
```

---

## BRAND DESIGN SYSTEM

### Philosophy
Light mode dominant. Clean, professional, corporate tech aesthetic — similar in spirit to the GetMeLinks design family but sharper, bolder, and more forward-thinking. Think: premium agency meets AI-era tech brand. White and off-white backgrounds dominate. The accent orange is the primary energy color. A deep navy is used sparingly for hero sections and the footer to add depth and gravitas.

### Color Palette

Add to tailwind.config.js under extend.colors as "mg":

```javascript
mg: {
  // Backgrounds
  bg:       '#F7F6F4',   // Primary page background — cool crisp off-white (vs competitor's warmer #f2f1ef)
  surface:  '#FFFFFF',   // Cards, panels, elevated surfaces
  surfaceAlt:'#EFEFED',  // Alternate section background for rhythm
  
  // Dark surfaces — used for hero sections, footer, special callouts
  dark:     '#12153D',   // Deep navy — AI-era depth without full black
  darkAlt:  '#1C2050',   // Slightly lighter navy for dark cards/surfaces
  darkBorder:'#2A2F6A',  // Border color on dark sections
  
  // Text
  ink:      '#0F0F0F',   // Primary text — richer than pure black
  body:     '#3D3D3D',   // Body text — comfortable reading gray
  muted:    '#767676',   // Secondary/caption text
  ghost:    '#A8A8A8',   // Placeholder, disabled text
  
  // Accent — the primary brand energy
  orange:   '#FF6B35',   // Sharper, bolder orange (vs competitor's softer #ff8f60)
  orangeHov:'#E85A25',   // Hover state — deeper orange
  orangeGlow:'rgba(255, 107, 53, 0.15)', // Glow/tint for backgrounds
  orangeLight:'#FFF0EB', // Very light orange tint for tag backgrounds
  
  // Borders
  border:   '#E2E0DC',   // Standard border — slightly cool
  borderDark:'#C8C5BF',  // Stronger border for emphasis
  
  // Semantic
  success:  '#1A7F5A',   // Success green
  navy:     '#12153D',   // Alias for dark (use in prose)
}
```

### Why These Colors Are Better Than the Competitor

The competitor's orange (#ff8f60) is warm and gentle — approachable but not commanding.
MaiGrowth's orange (#FF6B35) is sharper and more saturated — it says "we get results."
The competitor's off-white (#f2f1ef) is warm and cozy — MaiGrowth's (#F7F6F4) is cooler and crisper — feels more precise and data-driven.
The deep navy (#12153D) gives MaiGrowth's hero sections a premium, AI-era feel without breaking the light mode identity. The competitor has no equivalent — this is MaiGrowth's unique visual signature.

### Typography

Fonts: Syne (700, 800) for all headings and buttons. DM Sans (400, 500, 600) for body, nav, labels.

```
Display / Hero H1:    Syne 800, clamp(44px, 6vw, 84px), line-height 1.05, letter-spacing -0.02em, color mg-ink
Section H2:           Syne 700, clamp(30px, 4vw, 52px), line-height 1.1, letter-spacing -0.01em, color mg-ink  
H3 subheadings:       Syne 700, 20-24px, color mg-ink
Body text:            DM Sans 400, 16-18px, line-height 1.75, color mg-body
Section labels:       DM Sans 600, 11px, UPPERCASE, letter-spacing 0.14em, color mg-orange
Buttons:              Syne 700, 15-16px
Nav links:            DM Sans 500, 14px
Captions/meta:        DM Sans 400, 13px, color mg-muted
```

### Reusable Component Styles (add to globals.css as @layer components)

```css
/* Small label above section headlines */
.section-label {
  @apply text-[11px] font-semibold uppercase tracking-[0.14em] 
         text-mg-orange font-dm-sans block mb-3;
}

/* Primary CTA button — orange filled */
.btn-primary {
  @apply inline-flex items-center gap-2 px-7 py-3.5 rounded-full
         bg-mg-orange text-white font-syne font-bold text-[15px]
         transition-all duration-200
         hover:bg-mg-orangeHov hover:shadow-lg
         active:scale-[0.98];
}

/* Secondary button — outlined */
.btn-secondary {
  @apply inline-flex items-center gap-2 px-7 py-3.5 rounded-full
         border-2 border-mg-ink text-mg-ink font-syne font-bold text-[15px]
         transition-all duration-200
         hover:bg-mg-ink hover:text-white
         active:scale-[0.98];
}

/* Ghost button — for dark sections */
.btn-ghost {
  @apply inline-flex items-center gap-2 px-7 py-3.5 rounded-full
         border-2 border-white text-white font-syne font-bold text-[15px]
         transition-all duration-200
         hover:bg-white hover:text-mg-dark
         active:scale-[0.98];
}

/* Standard content card — light surface */
.card {
  @apply bg-mg-surface border border-mg-border rounded-2xl p-8
         transition-all duration-200
         hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]
         hover:border-mg-borderDark;
}

/* Dark card — for navy sections */
.card-dark {
  @apply bg-mg-darkAlt border border-mg-darkBorder rounded-2xl p-8
         transition-all duration-200
         hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)];
}

/* Tag / feature pill — light */
.tag {
  @apply inline-flex items-center px-3 py-1 rounded-full
         bg-mg-orangeLight text-mg-orange
         text-[12px] font-semibold font-dm-sans;
}

/* Tag — neutral */
.tag-neutral {
  @apply inline-flex items-center px-3 py-1 rounded-full
         bg-mg-surfaceAlt text-mg-muted border border-mg-border
         text-[12px] font-semibold font-dm-sans;
}
```

### Animation Config (add to lib/animations.ts)

```typescript
export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, y: 0, 
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
  }
}

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } }
}
```

All scroll-triggered animations use:
`whileInView="visible" initial="hidden" viewport={{ once: true, amount: 0.15 }}`

---

## PROJECT FILE STRUCTURE

```
maigrowth/
├── app/
│   ├── layout.tsx               ← Root layout: Navbar + Footer on all pages
│   ├── globals.css              ← Global styles, @layer components
│   ├── page.tsx                 ← Home
│   ├── about/page.tsx           ← About
│   ├── services/page.tsx        ← Services
│   ├── contact/page.tsx         ← Contact
│   ├── blog/page.tsx            ← Blog listing
│   └── blog/[slug]/page.tsx     ← Individual blog post
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── ProblemSection.tsx
│   │   ├── ServicesOverview.tsx
│   │   ├── ComparisonTable.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── TrustSection.tsx
│   │   ├── Testimonials.tsx
│   │   ├── HomeFAQ.tsx
│   │   └── CTABanner.tsx
│   └── shared/
│       ├── AnimatedSection.tsx
│       └── CountUp.tsx
├── posts/                       ← Blog posts live here as .md files
│   ├── what-is-aeo-guide-2025.md
│   ├── geo-vs-seo-future-of-search.md
│   ├── get-brand-cited-chatgpt-perplexity.md
│   ├── link-building-ai-era.md
│   ├── google-ai-overviews-guide.md
│   └── citation-economy-brand-authority.md
├── lib/
│   ├── posts.ts                 ← Markdown reader functions
│   └── animations.ts            ← Framer Motion variants
├── HOW-TO-ADD-BLOG-POSTS.md    ← Plain-English guide for adding new posts
├── tailwind.config.js
└── next.config.js
```

---

## MARKDOWN BLOG SYSTEM

### lib/posts.ts — Create this file exactly

```typescript
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export interface PostMeta {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  categoryColor: string
}

export interface Post extends PostMeta {
  content: string
}

export function getAllPosts(): PostMeta[] {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter(f => f.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const { data } = matter(fs.readFileSync(fullPath, 'utf8'))
      return { slug, ...data } as PostMeta
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const { data, content } = matter(fs.readFileSync(fullPath, 'utf8'))
  return { slug, content, ...data } as Post
}
```

### Create all 6 blog post .md files in /posts/

Every file must begin with this frontmatter format:
```
---
title: "Post Title Here"
excerpt: "One or two sentence summary shown on blog listing."
date: "2025-03-05"
readTime: "8 min read"
category: "AEO"
categoryColor: "orange"
---
```

categoryColor options: "orange" | "navy" | "green" | "purple" | "gray"

**File 1: what-is-aeo-guide-2025.md**
category: AEO | categoryColor: orange
Write a full 800-word article covering: what AEO is, why it emerged (AI Overviews, Bing Copilot), how AI tools choose which brands to cite, AEO vs traditional SEO, 5 implementation steps (schema markup, FAQ content, E-E-A-T signals, structured data, topical depth), and how MaiGrowth's AEO service works. Use proper H2 and H3 headings throughout. Include one blockquote callout with a key insight.

**File 2: geo-vs-seo-future-of-search.md**
category: GEO | categoryColor: navy
Write a full 800-word article covering: what GEO is, how ChatGPT and Perplexity select sources differently from Google, why Google SEO skills don't automatically translate to AI citations, the concept of brand entity authority, and a practical 4-step GEO implementation framework. Conclude with how MaiGrowth approaches GEO.

**File 3: get-brand-cited-chatgpt-perplexity.md**
category: AI Search | categoryColor: green
Write a full 800-word article covering: why most brands are invisible in AI tools today, how ChatGPT and Perplexity decide which sources to cite, what "brand entity optimization" means, building topical authority for LLM recognition, and a step-by-step citation acquisition strategy.

**File 4: link-building-ai-era.md**
category: Link Building | categoryColor: orange
Write a full 800-word article covering: what has changed in link building since AI search emerged, which old tactics are dead (PBNs, low-DR directories, exact-match anchor spam), which still work and why (high-DR editorial links, topical relevance, real traffic), and how links now serve double duty for both Google and AI authority.

**File 5: google-ai-overviews-guide.md**
category: AI Search | categoryColor: green
Write a full 800-word article covering: what Google AI Overviews are, how Google decides which sources to feature in them, traffic impact data on pages that get featured vs those that don't, the five key optimization signals, and a practical guide to appearing in AI Overviews.

**File 6: citation-economy-brand-authority.md**
category: Strategy | categoryColor: gray
Write a full 800-word article covering: the concept of the "citation economy" in AI search, why brand mentions and citations are the new link equity, how to build the kind of brand authority that AI tools trust, the difference between link authority and citation authority, and what this means for marketing strategy in 2025.

### HOW-TO-ADD-BLOG-POSTS.md — Create in project root

Content of this file:
```
# How to Add a New Blog Post to MaiGrowth

No developer needed. Follow these 5 steps:

STEP 1: Open your Replit project
Go to replit.com, open your MaiGrowth project.

STEP 2: Go to the /posts/ folder
Find the "posts" folder in the left file panel.

STEP 3: Create a new file
Click the + icon next to the posts folder.
Name it: your-post-title-here.md
Use lowercase letters and hyphens only. No spaces.
Example: how-to-build-backlinks-2025.md

STEP 4: Add the frontmatter at the very top
Copy and paste this exactly, then fill in your details:

---
title: "Your Full Post Title Here"
excerpt: "One or two sentences summarizing the post. This shows on the blog listing page."
date: "2025-04-01"
readTime: "6 min read"
category: "Link Building"
categoryColor: "orange"
---

Category options: AEO, GEO, Link Building, AI Search, Strategy
Color options: orange, navy, green, purple, gray

STEP 5: Write your article below the frontmatter

Use standard Markdown formatting:
## This is a Heading 2
### This is a Heading 3
Normal paragraph text goes here.
**Bold text** like this.
- Bullet point item
> This creates a styled callout box

Save the file. Your post is now live on the blog automatically.
No code changes needed. No rebuilding required.
```

---

## NAVBAR

File: components/layout/Navbar.tsx
Fixed top, full width, z-50.

Background behavior:
- At top of page: `bg-transparent`
- After scrolling 60px: `bg-mg-surface/95 backdrop-blur-sm border-b border-mg-border shadow-sm`
- Transition: all 300ms ease

Height: h-18 (72px) desktop, h-16 (64px) mobile

LEFT — Logo using Next.js Link to "/":
- Text "Mai" in `text-mg-ink font-syne font-extrabold text-2xl tracking-tight`
- Text "Growth" in `text-mg-orange font-syne font-extrabold text-2xl tracking-tight`
- No space between them — they read as one word "MaiGrowth"

CENTER (hidden on mobile, visible md and up) — Nav links:
Home | About | Services | Blog | Contact
- Style: `text-mg-body hover:text-mg-ink text-[14px] font-medium font-dm-sans transition-colors`
- Active page (usePathname hook): `text-mg-orange font-semibold`

RIGHT:
- Desktop: "Get Free Consultation" → btn-primary → /contact
- Mobile: Menu icon (Lucide) in text-mg-ink

Mobile menu (full screen overlay when open):
- Background: `bg-mg-surface` full screen fixed z-50
- Framer Motion AnimatePresence — slide in from right (x: '100%' → x: 0)
- X icon top right to close
- Nav links stacked, large: Syne 700 28px, text-mg-ink
- Stagger each link with 0.08s delay
- "Get Free Consultation" btn-primary at bottom
- Social icons row (LinkedIn, Twitter) above button

---

## FOOTER

File: components/layout/Footer.tsx

Background: `bg-mg-dark` (deep navy — this is MaiGrowth's visual signature vs the competitor)
Text on dark: use white and light versions of colors

Top section: py-20
4-column grid — grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12

Column 1 — Brand:
- Logo: "Mai" white + "Growth" in mg-orange, Syne extrabold
- Tagline below: "Rank on Google. Get Cited by AI." — text-white/60 text-sm mt-3
- Description: "Premium link building and AEO/GEO optimization for the AI search era. Global service, fully remote." — text-white/50 text-sm mt-2 leading-relaxed
- Social icons mt-6: LinkedIn, Twitter, Facebook — Lucide icons, text-white/40 hover:text-white transition

Column 2 — Quick Links:
- Heading: "Navigation" — text-white/40 text-[11px] uppercase tracking-widest mb-4
- Links: Home, About, Services, Blog, Contact — text-white/70 hover:text-white text-sm

Column 3 — Services:
- Heading: "Services"
- Items: Link Building, AEO Optimization, GEO Optimization, Free Consultation

Column 4 — Contact:
- Heading: "Contact"
- Email row: Mail icon + "hello@maigrowth.com" — text-white/70 text-sm
- Location: Globe icon + "Remote · Global · Worldwide"
- Response: Clock icon + "Reply within 24 hours"

Bottom bar: border-t border-white/10 pt-6 flex justify-between items-center
- Left: "© 2025 MaiGrowth. All Rights Reserved." — text-white/30 text-xs
- Right: "Built for the AI Search Era" — text-white/30 text-xs

---

## HOME PAGE (app/page.tsx)

### HERO SECTION

Background: `bg-mg-dark` (deep navy) — this is the one dark section on an otherwise light site. It creates strong visual contrast and sets a premium, serious tone.

Full viewport height min-h-screen. Center content max-w-5xl mx-auto px-6.

Subtle background texture: very faint grid lines using CSS —
`background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 60px 60px;`

Content (all centered, text-center):

Section label above H1:
"LINK BUILDING · AEO · GEO"
Style: text-mg-orange text-[11px] font-semibold uppercase tracking-[0.16em] font-dm-sans

H1 (animate word by word with Framer Motion stagger 0.05s):
Line 1: "Rank on Google."
Line 2: "Get Cited by AI."
Style: font-syne font-extrabold text-white leading-[1.05] tracking-tight
"AI." in text-mg-orange

Sub-headline (fade up 0.3s delay):
"Most agencies stop at Google rankings. MaiGrowth builds links that also get your brand mentioned in ChatGPT, Perplexity, and Google AI Overviews — where the next generation of buying decisions happens every day."
Style: text-white/65 text-lg md:text-xl max-w-2xl mx-auto mt-6 leading-relaxed font-dm-sans

CTA row (fade up 0.5s delay, mt-10, gap-4 flex-wrap justify-center):
- "Start Growing Today →" → btn-primary
- "See Our Services" → btn-ghost (white outlined, for dark bg)

Trust bar (fade up 0.7s delay, mt-12, border-t border-white/10 pt-8):
Three items: ✓ White-Hat Only · ✓ AEO + GEO Ready · ✓ Global Service
Style: text-white/50 text-sm font-dm-sans, ✓ in text-mg-orange

Transition from hero to next section:
Add a bottom edge that transitions from mg-dark to mg-bg using a gradient div:
`<div className="h-16 bg-gradient-to-b from-mg-dark to-mg-bg" />`

---

### THE PROBLEM SECTION

Background: `bg-mg-bg`. py-28.

Section label: "WHY TRADITIONAL SEO ISN'T ENOUGH"
H2: "The Search Landscape Has Changed. Has Your Strategy?"
Sub text (DM Sans, text-mg-body, max-w-2xl mt-4): "Over 700 million people now get answers directly from AI tools every week. Is your brand showing up in those answers — or invisible?"

Two cards side by side (grid-cols-1 md:grid-cols-2 gap-6 mt-16):

LEFT CARD — "The Old Way":
- Use .card class
- Top border: `border-t-[3px] border-red-400`
- Small badge: "OUTDATED" — bg-red-50 text-red-500 text-[10px] font-bold px-2 py-0.5 rounded-full
- Icon: XCircle from Lucide, text-red-400, size 24, mt-4
- H3: "Links Built for Google Only"
- Body: "Traditional agencies build links exclusively to chase Google rankings. But hundreds of millions of people now get answers directly from ChatGPT, Perplexity, and AI Overviews — and brands without AI visibility are completely invisible to them."
- Tags row at bottom: 3 .tag-neutral pills: "Google Only" | "Limited Reach" | "Old Playbook"

RIGHT CARD — "The MaiGrowth Way":
- Use .card class
- Top border: `border-t-[3px] border-mg-orange`
- Small badge: "AI-ERA READY" — bg-mg-orangeLight text-mg-orange text-[10px] font-bold px-2 py-0.5 rounded-full
- Icon: CheckCircle2 from Lucide, text-mg-orange, size 24, mt-4
- H3: "Links Built for Google AND AI"
- Body: "MaiGrowth builds high-authority backlinks that boost your Google rankings AND optimizes your brand's authority so AI engines recognize and cite you as the trusted source in your niche."
- Tags: 4 .tag pills: "Google ✓" | "ChatGPT ✓" | "Perplexity ✓" | "AI Overviews ✓"

Stats row (3 stats, grid-cols-3, mt-20, pt-16 border-t border-mg-border):
- "700M+" / "Weekly AI Search Users"
- "357%" / "AI Referral Traffic Growth in 2024"
- "20%+" / "Google Searches Show AI Overviews"

Stat number: CountUp animation on viewport entry, font-syne font-extrabold text-5xl text-mg-orange
Label: text-mg-muted text-sm mt-1 font-dm-sans

---

### SERVICES OVERVIEW SECTION

Background: `bg-mg-surfaceAlt`. py-28.

Section label: "WHAT WE DO"
H2: "Three Services. One Unified Visibility Strategy."
Sub: "While others focus on a single channel, MaiGrowth makes you visible on all three simultaneously."

3 cards (grid-cols-1 md:grid-cols-3 gap-6 mt-16):

CARD 1 — Premium Link Building:
.card class
- Icon: Link2 (Lucide), text-mg-orange, size 28
- H3: "Premium Link Building"
- Body: "High-authority backlinks from real, traffic-verified websites. White-hat outreach, guest posts, contextual insertions. Permanent — not rental."
- Tags (flex-wrap gap-2 mt-4): 3 .tag-neutral pills: "White-Hat" | "Real Sites" | "DR 40+"
- Bottom (mt-6): "Learn More →" — text-mg-orange font-semibold text-sm hover:underline → /services

CARD 2 — AEO (make this card stand out):
.card class + `border-mg-orange shadow-[0_4px_24px_rgba(255,107,53,0.1)]`
- Small badge top right: "NEW ERA" — .tag class (orange pill)
- Icon: BrainCircuit, text-mg-orange, size 28
- H3: "AEO Optimization"
- Body: "Get selected as the answer. Optimize your content structure and authority so Google AI Overviews and Bing Copilot cite your brand as the definitive source."
- Tags: "AI Overviews" | "Featured Snippets" | "Schema"
- Bottom: "Learn More →" → /services

CARD 3 — GEO:
.card class
- Icon: Globe2, text-mg-orange, size 28
- H3: "GEO Optimization"
- Body: "Build recognition inside AI engines. Make ChatGPT, Perplexity, Claude, and Gemini cite your brand when users ask questions in your niche."
- Tags: "ChatGPT" | "Perplexity" | "Gemini" | "Claude"
- Bottom: "Learn More →" → /services

Centered below cards (mt-14):
btn-secondary "View All Services →" → /services

---

### WHY MAIGROWTH SECTION

Background: `bg-mg-surface`. py-28.

This is a two-column trust section. Left side has the headline and body text. Right side has a 2×3 grid of feature boxes with circular orange icons — closely modelled after a proven layout used by top link building agencies.

Left column (50% width, pr-12):
Section label: "WHY MAIGROWTH"
H2: "Your Trusted Partner for High-Quality Link Building + AI Visibility"
Body paragraphs (text-mg-body text-[15px] leading-relaxed, space-y-4):
  Paragraph 1: "MaiGrowth has spent years refining its approach to link building and AI search optimization — learning exactly what it takes to build backlinks that genuinely improve rankings AND get brands cited in AI-generated answers."
  Paragraph 2: "The core of our process is expert, scalable outreach to secure backlinks from high-authority, relevant publications that carry real SEO weight and build real brand recognition."
  Paragraph 3: "We handle every detail of the link building and AEO/GEO process. You step back and focus on your business while MaiGrowth delivers consistent, measurable visibility results."

Right column (50% width):
2×3 grid of feature boxes (grid-cols-2 gap-4):

Each feature box style:
- bg-mg-bg border border-mg-border rounded-2xl px-5 py-4
- flex items-center gap-4
- hover:border-mg-orange hover:shadow-md transition-all duration-200
- Left: circular icon container — bg-mg-orange rounded-full w-12 h-12 flex items-center justify-center (white Lucide icon inside, size 20)
- Right: feature label in font-syne font-bold text-mg-ink text-[14px]

6 feature boxes with these Lucide icons and labels:
1. BarChart2 icon — "Ahrefs DR Verified"
2. ShieldCheck icon — "Spam Checked"
3. MessageCircle icon — "SEO Support Included"
4. Globe2 icon — "All Real Websites"
5. Clock icon — "21-Day Turnaround"
6. Layers icon — "Large Site Inventory"

---

### FEATURES OF OUR SERVICE SECTION

Background: `bg-mg-surfaceAlt`. py-28.

Section label (centered): "WHAT MAKES US DIFFERENT"
H2 (centered): "Features of Our Link Building + AEO/GEO Service"
Sub (centered, text-mg-body max-w-2xl mx-auto mt-4): "Everything you need to dominate both traditional search and AI-powered answers — handled end to end by our team."

3 feature cards (grid-cols-1 md:grid-cols-3 gap-6 mt-16):

Each card style (.card class, text-center):
- Top center: circular icon container — bg-mg-orange rounded-full w-16 h-16 flex items-center justify-center mx-auto (white Lucide icon inside, size 28)
- H3: font-syne font-bold text-mg-ink text-xl mt-6
- Body: text-mg-body text-[14px] leading-relaxed mt-3

Card 1 — Award icon — "Guaranteed Quality":
"We deliver only the highest-quality, most thoroughly vetted backlinks. Every link we build comes from a real website with genuine organic traffic — no PBNs, no fake sites, no shortcuts."

Card 2 — CreditCard icon — "One-Time Payments":
"Quality backlinks should be permanent assets, not recurring fees. Every link secured through MaiGrowth requires only a single flat-rate payment — yours to keep with no monthly charges."

Card 3 — Settings icon — "Fully Managed Campaigns":
"We handle every detail of your link building and AEO/GEO campaign — from strategy and outreach to content writing and reporting. You get powerful results without the additional workload."

---

### COMPARISON TABLE SECTION

Background: `bg-mg-surface`. py-28.

Section label: "THE DIFFERENCE"
H2: "Why MaiGrowth vs. Every Other Link Building Agency"
Sub: "The agency landscape hasn't kept up with how search actually works in 2025. We have."

Custom table (mt-16, w-full, overflow-x-auto wrapper for mobile):

3 column headers: "Feature" | "Other Agencies" | "MaiGrowth"
Header row style: bg-mg-surfaceAlt, text-mg-ink font-syne font-bold
"MaiGrowth" header: bg-mg-orangeLight text-mg-orange, border-b-2 border-mg-orange

8 rows:
1. Google Ranking Backlinks | ✅ Yes | ✅ Yes
2. AI Answer Citations (AEO) | ❌ No | ✅ Yes
3. ChatGPT / Perplexity Visibility (GEO) | ❌ No | ✅ Yes
4. Real Website Placements Only | ⚠️ Sometimes | ✅ Always
5. White-Hat Guaranteed | ⚠️ Sometimes | ✅ Always
6. Topical Authority Building | ⚠️ Rarely | ✅ Yes
7. AI Citation Tracking & Reporting | ❌ No | ✅ Yes
8. Global Service, Fully Remote | ⚠️ Sometimes | ✅ Yes

Styling:
- ✅ in MaiGrowth column: CheckCircle2 Lucide icon, text-mg-orange font-bold
- ❌ in Others column: XCircle Lucide icon, text-red-400
- ⚠️ "Sometimes"/"Rarely": text-mg-muted italic text-sm
- Alternating rows: bg-white / bg-mg-bg
- Row hover: border-l-4 border-mg-orange transition-all
- Cells: px-6 py-4 text-[14px] font-dm-sans
- Table border: border border-mg-border rounded-2xl overflow-hidden

---

### HOW IT WORKS SECTION

Background: `bg-mg-bg`. py-28.

Section label: "THE PROCESS"
H2: "Simple Process. Measurable Results."

4-step layout (grid-cols-1 md:grid-cols-4 gap-8 mt-16):

Each step has:
- Step number: "01" "02" "03" "04" — font-syne font-extrabold text-[72px] leading-none text-mg-orange/15 (large faint background number)
- Layered over it: step icon (Lucide icon) in text-mg-orange
- Title: font-syne font-bold text-xl text-mg-ink mt-3
- Body: DM Sans text-mg-body text-sm leading-relaxed mt-2

Step 1 — Search icon — "Discovery & Audit":
"We audit your backlink profile, current rankings, and AI search visibility to find exactly where your biggest opportunities are."

Step 2 — BarChart icon — "Custom Strategy":
"We build a tailored plan — link targets, AEO content gaps, and GEO entity tactics — specific to your niche and competitors."

Step 3 — Zap icon — "Links + Optimization":
"We execute — securing high-authority backlinks through ethical outreach while optimizing your content for AI engine citation."

Step 4 — TrendingUp icon — "Reporting & Growth":
"You receive a transparent report every month showing every link, ranking movement, and AI citation improvement. No fluff."

Dashed connecting line between steps on desktop:
`<div className="hidden md:block border-t border-dashed border-mg-border absolute top-8 left-1/2 w-full" />`
Wrap the 4-step grid in `relative` div and use absolute positioning for the line.

---

### TRUST SIGNALS SECTION

Background: `bg-mg-surfaceAlt`. py-24.

Section label: "WHY TRUST US"
H2: "Built on Transparency. Delivered with Proof."

3 cards (.card class, grid-cols-1 md:grid-cols-3 gap-6 mt-14):

Card 1 — ShieldCheck icon + "White-Hat Only":
"We never use PBNs, link farms, or manipulative tactics. Every link is ethically acquired, Google-compliant, and built to last. Your domain's safety is non-negotiable."

Card 2 — Globe2 icon + "Real Websites Only":
"Every backlink comes from genuine websites with real organic traffic, real editorial standards, and real audiences. Zero fake sites. Zero shortcuts."

Card 3 — Sparkles icon + "AI-Era Specialists":
"We're among the first agencies combining traditional link building with AEO and GEO — purpose-built for how search works in 2025 and beyond."

All icons: text-mg-orange, size 28
Card hover: border-mg-orange (overrides default .card hover border)

---

### TESTIMONIALS SECTION — ANIMATED INFINITE CAROUSEL

Background: `bg-mg-surface`. py-28.

Section label: "CLIENT RESULTS"
H2: "What Happens When Links Meet AI Visibility"
Sub (text-mg-body text-center max-w-xl mx-auto mt-4): "Real results from real business owners who made the switch to AI-era visibility."

Build this as a fully animated auto-scrolling testimonial carousel using Framer Motion. It must:
- Auto-scroll continuously left (like a ticker/conveyor belt) with NO pause gaps
- Loop infinitely — when cards reach the end, they seamlessly restart
- On hover over any card: pause the scroll
- On mouse leave: resume scrolling
- Show 3 cards visible at once on desktop, 2 on tablet, 1 on mobile
- Cards do NOT have dots or arrows — pure auto-scroll only

**Implementation — Create components/home/Testimonials.tsx:**

```tsx
'use client'
import { useRef, useEffect, useState } from 'react'
import { motion, useAnimationControls } from 'framer-motion'

const testimonials = [
  {
    quote: "MaiGrowth didn't just improve our Google rankings — our brand started appearing in ChatGPT answers within 90 days. I had no idea this level of visibility was even achievable.",
    name: "Sarah K.",
    role: "SaaS Founder",
    stars: 5,
    metric: "+312% organic traffic"
  },
  {
    quote: "I've worked with four agencies before MaiGrowth. They're the first to actually understand AI search AND deliver real, trackable results in it. The difference is night and day.",
    name: "Marcus T.",
    role: "E-commerce Owner",
    stars: 5,
    metric: "Featured in 3 AI tools"
  },
  {
    quote: "Transparent reporting, white-hat links, and AEO/GEO results that actually show in the data. This is what modern SEO looks like in 2025.",
    name: "Priya M.",
    role: "Marketing Consultant",
    stars: 5,
    metric: "2x AI brand citations"
  },
  {
    quote: "Within 60 days of starting with MaiGrowth, our brand showed up in a Perplexity answer for our main keyword. We'd been invisible in AI search before. Not anymore.",
    name: "James L.",
    role: "Agency Owner",
    stars: 5,
    metric: "Top 3 AI citations"
  },
  {
    quote: "The AEO strategy alone was worth the investment. Our featured snippet appearances doubled in the first month and we started showing in Google AI Overviews consistently.",
    name: "Aisha R.",
    role: "B2B SaaS Marketer",
    stars: 5,
    metric: "+180% featured snippets"
  },
  {
    quote: "Finally an agency that speaks the language of 2025 SEO. The GEO work they did for our brand means we're now cited by ChatGPT when people ask about our niche.",
    name: "Tom B.",
    role: "Online Course Creator",
    stars: 5,
    metric: "ChatGPT citations secured"
  }
]
```

**Carousel behavior (implement precisely):**
- Duplicate the testimonials array twice: `[...testimonials, ...testimonials]` — this creates the seamless infinite loop
- Wrap all cards in a `motion.div` with `animate={{ x: [0, -50%] }}` (moves left by exactly half the total width)
- Use `transition={{ duration: 30, ease: 'linear', repeat: Infinity, repeatType: 'loop' }}`
- Duration: 30 seconds for one full cycle (adjust if it feels too fast or slow)
- Wrap the scrolling div in an `overflow-hidden` container
- On hover: use `controls.stop()` to pause
- On mouse leave: use `controls.start(...)` to resume from current position

**Fade edges effect:**
Add CSS mask on the wrapper to fade cards in/out at left and right edges:
`style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}`

**Each testimonial card styling:**
```
- bg-mg-bg border border-mg-border rounded-2xl p-8
- min-w-[360px] max-w-[360px] mx-3 (fixed width, horizontal scroll)
- flex flex-col justify-between h-full
- hover:border-mg-orange hover:shadow-lg transition-all duration-300
- cursor-default (not clickable)
```

Card internal layout:
- Top section:
  - Stars: render {stars} filled star characters "★" in text-yellow-400 text-sm
  - Quote text: text-mg-body text-[15px] leading-relaxed italic mt-3
  - Large decorative opening quote mark: absolute top-6 right-6, font-syne font-extrabold text-6xl text-mg-orange/10 leading-none select-none

- Bottom section (mt-6 pt-5 border-t border-mg-border flex items-center justify-between):
  - Left: Name in font-syne font-bold text-mg-ink text-[14px] + Role in text-mg-muted text-xs mt-0.5
  - Right: Metric badge — .tag class (orange pill, text-[11px])

**Section wrapper structure:**
```tsx
<section className="py-28 bg-mg-surface overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 text-center mb-16">
    {/* label + H2 + sub */}
  </div>
  <div 
    className="relative"
    style={{ maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' }}
    onMouseEnter={() => controls.stop()}
    onMouseLeave={() => controls.start(...)}
  >
    <motion.div
      className="flex"
      animate={controls}
    >
      {[...testimonials, ...testimonials].map((t, i) => (
        <TestimonialCard key={i} {...t} />
      ))}
    </motion.div>
  </div>
</section>
```

**IMPORTANT:** The carousel must work on first render without any click or interaction needed. It starts scrolling automatically when the section loads into view.

---

### FAQ SECTION

Background: `bg-mg-bg`. py-28.

Section label: "QUICK ANSWERS"
H2: "Common Questions"

5 accordion items using Framer Motion AnimatePresence.
Each item: border-b border-mg-border
Question row: flex justify-between items-center py-5 cursor-pointer hover:text-mg-orange transition-colors
ChevronDown icon: rotates 180° when open, transition-transform duration-300
Answer: text-mg-body text-[15px] leading-relaxed pb-5

Q1: "What is AEO and why does it matter in 2025?"
A: "AEO stands for Answer Engine Optimization. As Google AI Overviews, Bing Copilot, and AI assistants now directly answer search queries, brands not optimized to be cited as sources are losing enormous visibility. AEO structures your content and authority so AI systems choose your brand as the answer — not your competitor's."

Q2: "What is GEO optimization?"
A: "GEO stands for Generative Engine Optimization. It focuses on making your brand visible inside AI-generated responses from ChatGPT, Perplexity, Claude, and Gemini. When someone asks these tools a question in your industry, GEO ensures your brand is recognized and cited as an authoritative source."

Q3: "How is MaiGrowth different from regular link building agencies?"
A: "Most link building agencies are built entirely around Google. MaiGrowth combines premium link building with AEO and GEO strategies — so every link we build serves double duty: improving your Google rankings AND strengthening your authority with AI engines. Same investment, multiplied visibility."

Q4: "Do you work with businesses globally?"
A: "Yes — MaiGrowth is a fully remote, global service. We work with business owners in any country and any industry. Our outreach network is international and our AEO/GEO strategies are built for any English-language website regardless of location."

Q5: "How long does it take to see results?"
A: "Link building improvements typically appear within 60–90 days. AEO results — featured snippets and AI Overview appearances — can surface within 30–60 days. Most clients see initial AI tool citations within 60–90 days of starting GEO work, depending on their existing domain authority."

---

### CTA BANNER (Home bottom)

Background: `bg-mg-dark` (navy — bookends the page, matching the hero)
py-28 text-center

H2: font-syne font-extrabold text-white, clamp sizing
"Ready to Rank on Google AND Get Cited by AI?"

Sub: text-white/60 text-lg max-w-xl mx-auto mt-4
"Book a free 30-minute consultation. We'll show you exactly where your visibility gaps are and how to close them."

Buttons row (mt-10 flex gap-4 justify-center flex-wrap):
- "Book Free Consultation →" → btn-primary → /contact
- "View Services" → btn-ghost → /services

Under buttons (mt-6): "Free · No Obligation · Expert Analysis · 24hr Response" — text-white/35 text-xs font-dm-sans

---

## ABOUT PAGE (app/about/page.tsx)

Hero: bg-mg-dark (navy)
Label: "ABOUT MAIGROWTH"
H1 (white): "We Saw the Shift Coming. We Built for It."
Sub (white/60): "While the industry kept pushing the same link building playbook, we were building the agency the AI search era actually needed."

Gradient transition div below hero: from mg-dark to mg-bg

Our Story Section: bg-mg-bg py-28
Two columns (prose left 55%, stats right 45%):

Left story text (text-mg-body, leading-relaxed):
"MaiGrowth was founded on one clear observation: search has fundamentally changed. Hundreds of millions of people now get answers from ChatGPT, Perplexity, Google AI Overviews, and other AI tools — and brands not optimized for these channels are completely invisible to that audience.

Traditional link building agencies were built for a version of search that, while still important, is no longer the whole picture. We built MaiGrowth to be the agency that doesn't just react to today's algorithm but builds lasting authority across every surface where customers search."

Right stats block (2×2 grid, each stat: large Syne number in mg-orange + DM Sans label below):
- "100+" · "Clients Served Globally"
- "50,000+" · "Links Built"
- "3" · "Search Channels Covered"
- "24hr" · "Average Response Time"

Our Values Section: bg-mg-surfaceAlt py-28
H2: "What We Stand For"
4 cards (.card, grid-cols-2 gap-6):
1. Transparency — "Every link, metric, and result is documented and shared. No black boxes, no vague promises."
2. Quality Over Quantity — "One DR70 editorial link beats 50 directory submissions. We never compromise on quality."
3. Forward Thinking — "AEO and GEO are not add-ons. They are the new baseline for any serious search strategy."
4. Results First — "We measure success in rankings, citations, and traffic — not activity reports and slide decks."

Mission Statement Section: bg-mg-dark py-24 text-center
Large centered quote (font-syne font-bold text-white text-3xl md:text-4xl max-w-3xl mx-auto leading-snug):
"Our mission is to make every business — regardless of size or location — impossible to miss. Not just on Google, but across every AI-powered surface where customers search."
Large decorative quote mark in mg-orange/20 behind text.

CTA → /contact with btn-primary and btn-ghost row

---

## SERVICES PAGE (app/services/page.tsx)

Hero: bg-mg-dark py-32
Label: "OUR SERVICES"
H1 (white): "Three Services. One Unified Visibility Strategy."
Sub (white/60): "Most agencies give you one channel. MaiGrowth gives you three — working together to make your brand impossible to miss."

Gradient transition from mg-dark to mg-bg below hero.

Service 1 — Premium Link Building: bg-mg-bg py-28
Two-column (text left 55%, visual card right 45%):
H2: "Premium Link Building"
Lead paragraph (text-mg-body text-lg): "High-authority backlinks remain Google's strongest ranking signal. But quality matters more than ever — one contextual placement on a genuine DR65 website outperforms 50 directory submissions combined."

Features checklist (CheckCircle2 icons in text-mg-orange):
- Outreach to real website owners and editors
- Guest post placements on niche-relevant sites
- Contextual link insertions in existing content
- Professional content writing included
- Only DR 40+, DA 35+, real organic traffic
- Full placement report: URL, DR, traffic, anchor, live date
- 100% white-hat, Google-compliant, penalty-safe
- Permanent placements — links don't disappear

Right visual: styled mockup card (bg-mg-surface border border-mg-border rounded-2xl p-6):
Title: "Live Placement Report" in text-mg-muted text-xs uppercase
Then 4 data rows: Domain | DR | Monthly Traffic | Status
Example: "techblog-example.com | DR 68 | 28K/mo | ✅ Live"
Style to look like a real analytics widget

Service 2 — AEO: bg-mg-surfaceAlt py-28 (reversed layout)
H2: "AEO — Answer Engine Optimization"
Lead: "Google AI Overviews now appear in 20%+ of all searches. Being well-ranked is no longer enough — you need to be the source AI systems cite. AEO is the methodology that earns you that position."
Features (same checklist style):
- Content restructuring for featured snippet eligibility
- FAQ and HowTo schema markup implementation
- Google AI Overviews visibility optimization
- Bing Copilot content alignment
- E-E-A-T authority signal building
- Structured data audit and full implementation
- High-intent Q&A content creation
- Monthly AEO performance tracking

Left visual: styled mockup of an AI Overview box showing a brand being cited

Service 3 — GEO: bg-mg-bg py-28
H2: "GEO — Generative Engine Optimization"
Lead: "When someone asks ChatGPT 'what's the best solution for X?' — is your brand mentioned? For 99% of businesses, the answer is no. GEO builds the brand entity authority that changes that."
Features:
- Brand entity optimization for LLM recognition
- ChatGPT citation strategy and execution
- Perplexity AI visibility building
- Claude and Gemini brand recognition
- Topical authority cluster strategy
- Authoritative source presence building
- AI citation monitoring and reporting
- Brand mention acquisition

Packages Section: bg-mg-surfaceAlt py-28
H2: "Choose Your Growth Package"
Sub: "Transparent pricing. No hidden fees. Custom enterprise plans available."

3 cards (grid-cols-1 md:grid-cols-3 gap-6):

STARTER (.card):
- Tag: "For New Websites" — .tag-neutral
- Price: "From $497/mo" — font-syne font-extrabold text-4xl text-mg-ink
- Features list with CheckCircle2 (text-mg-orange): 3 backlinks/mo | Basic AEO audit | Monthly report | Email support
- btn-secondary "Get Started" → /contact

GROWTH (.card + border-2 border-mg-orange shadow-[0_8px_40px_rgba(255,107,53,0.12)]):
- Badge: "MOST POPULAR" — .tag (orange pill) — position top-4 right-4 absolute, card relative
- Tag: "For Growing Businesses"
- Price: "From $997/mo" — text-mg-orange
- Features: 6 backlinks/mo | Full AEO optimization | GEO foundation | Bi-weekly reports | Priority support
- btn-primary "Get Started" → /contact

AUTHORITY (.card):
- Tag: "For Maximum Visibility"
- Price: "From $1,997/mo"
- Features: 12+ backlinks/mo | Complete AEO + GEO | AI citation tracking | Weekly reports | Dedicated strategist
- btn-secondary "Get Started" → /contact

Services FAQ: bg-mg-bg py-28 (10 questions with 3-4 sentence expert answers):
Q1: What types of websites do you get links from?
Q2: Will these links help my AEO and GEO results too?
Q3: Do I need all three services or can I start with one?
Q4: How do you measure and track AEO and GEO performance?
Q5: Are these permanent links or monthly rental placements?
Q6: What industries and niches do you work with?
Q7: How do you verify links are white-hat and penalty-safe?
Q8: Can you help a new website with low domain authority?
Q9: What does the reporting look like and how often?
Q10: How is AEO different from traditional on-page SEO?

---

## CONTACT PAGE (app/contact/page.tsx)

Hero: bg-mg-dark py-32
Label: "GET IN TOUCH"
H1 (white): "Let's Build Your Visibility Strategy"
Sub (white/60): "Free 30-minute consultation. No pressure — just an expert audit of where you stand and what's possible."

Gradient transition to mg-bg below hero.

Two-column layout bg-mg-bg py-28 (60/40 split, stack on mobile):

LEFT — Contact Form:
All inputs styled: bg-mg-surface border border-mg-border rounded-xl px-4 py-3 text-mg-ink placeholder:text-mg-ghost focus:border-mg-orange focus:outline-none focus:ring-2 focus:ring-mg-orange/20 w-full font-dm-sans text-[15px]

Fields:
1. Full Name* — text input
2. Email Address* — email input
3. Website URL* — url input, placeholder "https://yourwebsite.com"
4. Business Type* — select: E-commerce | SaaS / Software | Agency | Local Business | Content / Media | Other
5. Services Interested In — 4 checkboxes styled with accent-mg-orange:
   □ Link Building  □ AEO Optimization  □ GEO Optimization  □ Full Package
6. Monthly Budget — select: Under $500 | $500–$1,000 | $1,000–$2,500 | $2,500–$5,000 | $5,000+
7. Your Goals* — textarea 4 rows, placeholder "Tell us your website, situation, and what you want to achieve..."
8. Submit: btn-primary w-full text-center "Send Message →"

Form submit (JavaScript only — no backend):
- Validate required fields, show inline errors in text-red-500 text-xs
- On success: fade out form, fade in success state:
  - CheckCircle2 icon large text-mg-orange (Framer Motion spring scale in)
  - H3: "Message Sent!" — font-syne font-bold text-mg-ink text-2xl
  - Text: "We'll reply within 24 business hours." — text-mg-body

RIGHT — Info block:
Rows with Lucide icons in text-mg-orange:
- Mail icon + "hello@maigrowth.com"
- Globe2 icon + "Remote · Global · Worldwide"
- Clock icon + "Within 24 business hours"

Divider border-mg-border my-6

4 benefit rows (CheckCircle2 text-mg-orange + text):
Free consultation | No commitment required | Expert analysis | Clear action plan

Social icons: LinkedIn, Twitter/X in text-mg-muted hover:text-mg-orange

---

## BLOG LISTING PAGE (app/blog/page.tsx)

IMPORTANT: This page must import getAllPosts() from lib/posts.ts and dynamically render all .md files. When a new .md file is added to /posts/, it must appear on this page automatically without any code changes.

Hero: bg-mg-dark py-32
Label: "THE MAIGROWTH BLOG"
H1 (white): "Insights for the AI Search Era"
Sub (white/60): "Link building, AEO, GEO, and the future of search visibility."

Gradient transition from mg-dark to mg-bg.

Blog grid: bg-mg-bg py-20
grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6

Each PostCard (.card):
- Category badge at top: .tag class with color based on categoryColor field:
  orange → bg-mg-orangeLight text-mg-orange
  navy → bg-mg-dark/10 text-mg-dark
  green → bg-green-50 text-green-700
  purple → bg-purple-50 text-purple-700
  gray → bg-mg-surfaceAlt text-mg-muted
- Title: font-syne font-bold text-xl text-mg-ink mt-3 leading-snug
- Excerpt: text-mg-body text-[14px] mt-2 line-clamp-2
- Bottom row: date text-mg-muted text-xs | readTime text-mg-muted text-xs | "Read Article →" text-mg-orange text-sm font-semibold ml-auto hover:underline
- Full card is a Next.js Link to /blog/[slug]

---

## BLOG POST PAGE (app/blog/[slug]/page.tsx)

Use generateStaticParams: return getAllPosts().map(p => ({ slug: p.slug }))
Use getPostBySlug(params.slug) to load content.
Render markdown with next-mdx-remote MDXRemote component.

Hero: bg-mg-dark py-28
- Category badge
- H1 (white, font-syne extrabold)
- Meta: "By MaiGrowth Team · {date} · {readTime}" — text-white/50 text-sm

Gradient transition to mg-bg.

Article layout: bg-mg-bg py-16
Two columns: article 65% + sidebar 35% (lg:sticky top-24), gap-16

Article content — apply prose with these Tailwind overrides:
```
className="prose prose-lg max-w-none
  prose-headings:font-syne prose-headings:text-mg-ink prose-headings:font-bold
  prose-p:text-mg-body prose-p:leading-relaxed prose-p:font-dm-sans
  prose-strong:text-mg-ink
  prose-a:text-mg-orange prose-a:no-underline hover:prose-a:underline
  prose-blockquote:border-l-4 prose-blockquote:border-mg-orange
  prose-blockquote:bg-mg-orangeLight prose-blockquote:rounded-r-xl
  prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:not-italic
  prose-blockquote:text-mg-body
  prose-li:text-mg-body
  prose-code:text-mg-orange prose-code:bg-mg-surfaceAlt"
```

Sidebar (sticky lg:top-24):
1. Table of Contents card (.card):
   - Title: "In This Article" — font-syne font-bold text-mg-ink text-sm
   - Extract all H2 headings from markdown content
   - Render as anchor links with smooth scroll
   - Active heading: text-mg-orange font-semibold
   - Others: text-mg-body text-sm hover:text-mg-ink

2. CTA card (.card border-t-[3px] border-mg-orange mt-6):
   - H3: "Want these results for your brand?"
   - Text: "Book a free strategy consultation — no pressure, just expert analysis."
   - btn-primary w-full mt-4 → /contact

3. Related posts (mt-6): 
   - Heading: "Related Articles" — font-syne font-bold text-mg-ink text-sm mb-4
   - 2-3 small post links: category badge + title only, font-syne text-[14px] text-mg-ink hover:text-mg-orange

---

## SEO METADATA

Add generateMetadata to each page file:

Home: 
title: "MaiGrowth — Link Building + AEO + GEO | Rank on Google. Get Cited by AI."
description: "Premium link building and AI search optimization. Rank higher on Google AND get cited in ChatGPT, Perplexity, and Google AI Overviews."

About:
title: "About MaiGrowth — Built for the AI Search Era"
description: "MaiGrowth combines premium link building with AEO and GEO — built for how search actually works in 2025."

Services:
title: "Services — Link Building, AEO & GEO | MaiGrowth"
description: "Premium link building, AEO optimization, and GEO optimization. Packages from $497/mo. Global service."

Contact:
title: "Free Strategy Consultation — MaiGrowth"
description: "Book a free 30-minute consultation. Expert analysis of your search visibility opportunities. No pressure."

Blog:
title: "Blog — AI Search & Link Building Insights | MaiGrowth"
description: "Expert articles on link building, AEO, GEO, and winning visibility in the AI search era."

Blog posts: use frontmatter title and excerpt dynamically via generateMetadata({ params })

---

## FINAL CHECKLIST — VERIFY EVERY ITEM

BLOG SYSTEM:
- [ ] gray-matter and next-mdx-remote installed and imported correctly
- [ ] lib/posts.ts created with getAllPosts() and getPostBySlug() working
- [ ] All 6 .md files created in /posts/ with full frontmatter AND full article content
- [ ] Blog listing page renders all posts dynamically from /posts/ folder
- [ ] Blog post page renders markdown as HTML with correct prose styles
- [ ] HOW-TO-ADD-BLOG-POSTS.md created in project root

DESIGN — LIGHT MODE:
- [ ] Page background is mg-bg (#F7F6F4) — NOT dark
- [ ] Body and html set to bg-mg-bg in globals.css
- [ ] Only hero sections and footer use mg-dark (navy)
- [ ] Gradient transitions between dark heroes and light content sections
- [ ] Orange accent (#FF6B35) used consistently throughout
- [ ] All custom "mg" colors defined in tailwind.config.js
- [ ] Syne + DM Sans loaded correctly via next/font/google
- [ ] .section-label, .btn-primary, .btn-secondary, .btn-ghost, .card, .tag defined in globals.css

FUNCTIONALITY:
- [ ] All page links work with Next.js Link component
- [ ] Navbar shows active page correctly using usePathname()
- [ ] Navbar background changes on scroll (transparent → white/95)
- [ ] Mobile hamburger menu opens/closes with smooth animation
- [ ] Contact form validates and shows success state
- [ ] FAQ accordions open/close smoothly with chevron rotation
- [ ] Blog post table of contents smooth-scrolls to headings
- [ ] CountUp triggers when stats section enters viewport
- [ ] All Framer Motion scroll animations use whileInView once:true
- [ ] Testimonials carousel auto-scrolls on load without any interaction
- [ ] Testimonials carousel pauses on hover and resumes on mouse leave
- [ ] Testimonials carousel loops seamlessly with no jump or gap
- [ ] Fade edge mask applied on left and right of testimonials carousel

RESPONSIVE:
- [ ] No horizontal overflow at 375px mobile width
- [ ] All grids collapse to single column on mobile
- [ ] Comparison table wraps in overflow-x-auto on mobile
- [ ] Hero text scales correctly at all breakpoints
- [ ] Pricing cards stack on mobile
- [ ] Footer collapses to 2 then 1 column correctly

CONTENT:
- [ ] Zero lorem ipsum text anywhere
- [ ] No competitor names mentioned on any page
- [ ] AEO + GEO explained clearly on every relevant page
- [ ] All 6 pages have correct metadata
- [ ] Blog posts have full article content (not placeholder summaries)

# === MASTER PROMPT END ===

---

# FOLLOW-UP PROMPTS FOR REPLIT
*(Use these ONE AT A TIME after the initial build)*

**If testimonials carousel is not scrolling:**
"The testimonials carousel on the home page is not auto-scrolling. Fix the Testimonials.tsx component — the motion.div must use useAnimationControls, start the animation automatically using useEffect on mount, duplicate the testimonials array twice for seamless looping, use animate={{ x: [0, '-50%'] }} with transition duration 30s linear repeat Infinity. Add mouse enter/leave handlers to pause and resume. Wrap in overflow-hidden with CSS mask-image fade on left and right edges."

**If testimonials carousel is jerky or jumps:**
"The testimonials carousel has a visible jump when it loops. Fix the seamless loop — the content div must contain exactly two copies of the testimonials array. The animation must move exactly -50% of the total scroll width (not a pixel value). Use transition={{ duration: 30, ease: 'linear', repeat: Infinity, repeatType: 'loop' }} and ensure all cards have identical fixed widths with no dynamic sizing."


"The blog listing page is not showing posts. Debug lib/posts.ts — make sure it correctly reads the /posts/ directory, gray-matter is installed, and getAllPosts() is being called in app/blog/page.tsx. Fix so all 6 posts appear on the blog page."

**To fix hero sections being too dark or light mode inconsistent:**
"Audit every page background. Only the hero sections and footer should use bg-mg-dark (navy #12153D). All content sections between heroes and footer must use bg-mg-bg (#F7F6F4), bg-mg-surface (#FFFFFF), or bg-mg-surfaceAlt (#EFEFED). Fix any sections that are incorrectly dark."

**To improve the comparison table:**
"Restyle the comparison table. The MaiGrowth column header should have bg-mg-orangeLight and text-mg-orange. Replace text ✅ with actual CheckCircle2 Lucide icons in text-mg-orange. Replace ❌ with XCircle Lucide icons in text-red-400. Add border-l-4 border-mg-orange on row hover."

**To fix mobile issues:**
"Do a complete mobile audit at 375px screen width. Fix all horizontal overflow, ensure hamburger menu works with smooth animation, all grid sections collapse to single column, comparison table scrolls horizontally, and all font sizes are legible."

**To add scroll animations:**
"Add Framer Motion scroll-triggered fade-up animations to every major section. Each section's child elements should stagger in with 0.1s between each. All animations must use whileInView with once: true so they only trigger once."

**To strengthen the pricing section:**
"Make the Growth pricing card stand out more. It should have border-2 border-mg-orange, a shadow of shadow-[0_8px_40px_rgba(255,107,53,0.15)], and the price text should be text-mg-orange. Add a 'MOST POPULAR' badge in the top-right corner using the .tag class."

---

# REPLIT DEPLOYMENT GUIDE

After your build is complete and you're happy with the design:

1. In your Replit project, click the "Deploy" tab in the left sidebar
2. Choose "Autoscale" deployment (free tier available on Core plan)
3. Your site gets a live URL: maigrowth.replit.app
4. To connect your Hostinger domain:
   - Go to Hostinger → Domains → DNS Zone Editor
   - Add a CNAME record: Name "www" → Value: your Replit deployment URL
   - Add an A record if you want the root domain (Hostinger provides the IP in DNS settings)
   - DNS changes take 24-48 hours to propagate globally

---

*MaiGrowth Replit Prompt v2 — March 2025*
*Paste only between === MASTER PROMPT START === and === MASTER PROMPT END ===*
*Save this document — you will need the follow-up prompts after the build*
