# MaiGrowth — Guest Posts Service Page
### Replit Agent Follow-Up Prompt
### Built using: Frontend Design Skill + Competitor Analysis (getmelinks.com)
### Estimated credits: 12–18 credits
### Send in the SAME Replit Agent chat — do NOT start a new chat

---

# FOLLOW-UP PROMPT — GUEST POSTS SERVICE PAGE
*(Copy everything from the line below to END OF FILE and paste into Replit Agent)*

---

## YOUR ROLE

You are a senior full-stack developer and UI/UX designer with expertise in production-grade Next.js applications. Your task is to build one new page for the already-existing MaiGrowth website. You must commit to a bold, distinctive aesthetic direction — not generic AI-generated layouts. Every section must feel intentional, premium, and memorable. This page must be better than the competitor's equivalent page in both design quality and content strategy.

---

## CRITICAL RULES — READ BEFORE WRITING A SINGLE LINE

- Do NOT rebuild any existing page
- Do NOT touch `app/page.tsx`, `app/about/page.tsx`, `app/services/page.tsx`, `app/contact/page.tsx`, `app/blog/page.tsx`, or any existing component
- Only create the new page at `app/guest-posts/page.tsx` and its sub-components
- The global Navbar and Footer from `components/layout/` render automatically via root layout — do NOT recreate them
- Add "Guest Posts" link to the existing Navbar — find `components/layout/Navbar.tsx` and add a nav link pointing to `/guest-posts`
- All animations must use `once: true` — never repeat on scroll back

---

## EXISTING SITE CONTEXT

**Framework:** Next.js 14 App Router
**Styling:** Tailwind CSS with custom "mg" color tokens defined in tailwind.config.js
**Animations:** Framer Motion (installed)
**Icons:** Lucide React (installed)
**Fonts:** Syne (700, 800) + DM Sans (400, 500, 600) — loaded via next/font/google

**Global CSS classes already defined in globals.css:**
- `.btn-primary` — orange filled pill button
- `.btn-secondary` — outlined dark pill button
- `.btn-ghost` — white outlined pill button (for dark backgrounds)
- `.card` — white surface card with border and hover lift
- `.tag` — small orange pill label
- `.section-label` — small orange uppercase tracking label

**Brand color tokens (mg prefix) in tailwind.config.js:**
```
mg-bg: #F7F6F4        — page background (cool off-white)
mg-surface: #FFFFFF    — card/panel background
mg-surface-alt: #EFEFED — alternate section background
mg-dark: #12153D       — deep navy (heroes, footer, dark sections)
mg-darkAlt: #1C2050    — slightly lighter navy for dark cards
mg-darkBorder: #2A2F6A — borders on dark sections
mg-orange: #FF6B35     — primary accent
mg-orangeHov: #E85A25  — orange hover state
mg-orangeLight: #FFF0EB — light orange tint
mg-ink: #0F0F0F        — primary text
mg-body: #3D3D3D       — body text
mg-muted: #767676      — muted text
mg-ghost: #A8A8A8      — placeholder text
mg-border: #E8E5E0     — standard border
mg-borderDark: #C8C5BF — stronger border
```

---

## DESIGN DIRECTION FOR THIS PAGE

**Aesthetic:** Premium corporate-tech light mode — same family as the rest of MaiGrowth. Clean, confident, results-focused. Light sections alternate with deep navy dark sections for visual rhythm and contrast. The DR tier cards are the most distinctive visual element on the page — treat them as hero product cards, not simple pricing boxes.

**Tone:** Bold and authoritative. This is a sales page. Every section must move the visitor toward action. Headlines are confident and specific. No vague marketing language.

**Differentiation from competitor:** The competitor's page (getmelinks.com) is functional but visually flat. MaiGrowth's version must feel sharper, more premium, and — critically — must weave the AEO/GEO advantage into the page naturally. A guest post from MaiGrowth does not just build Google rankings — it also strengthens AI search visibility. This message must appear at least 3 times on the page.

**What makes this page UNFORGETTABLE:** The DR tier cards with rich gradient backgrounds showing DR30+, DR40+, DR50+, DR60+ in massive bold Syne type — these are the anchor visual of the entire page. They must be bold, visually striking, and premium.

---

## PAGE STRUCTURE — BUILD ALL 11 SECTIONS IN THIS EXACT ORDER

---

### SECTION 1 — HERO

**File:** Include directly in `app/guest-posts/page.tsx`
**Background:** `bg-mg-dark` (#12153D) — deep navy with dot-grid texture and radial orange glow
**Height:** min-h-[80vh] flex items-center justify-center

**Background layers (stack with absolute positioning):**
1. Dot grid: `radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)` at 28px × 28px
2. Radial glow: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255,107,53,0.08), transparent)`

**Content — centered, max-w-4xl mx-auto, text-center:**

Small label above H1:
```
SERVICE · GUEST POSTS
```
Style: text-mg-orange text-[10px] font-semibold uppercase tracking-[0.18em] border border-mg-orange/30 px-3 py-1 rounded-full inline-block mb-6

H1 (animate each word with Framer Motion stagger 0.05s per word):
```
Guest Post Services That Rank
on Google AND Get Cited by AI.
```
Style: font-syne font-extrabold text-white clamp(40px→76px) leading-[1.05] tracking-tight

Sub-headline (fade up, 0.3s delay):
```
Real placements on real websites through manual outreach.
No PBNs. No link farms. Just high-authority editorial links
that improve rankings, build brand trust, and strengthen
your visibility in ChatGPT, Perplexity, and Google AI Overviews.
```
Style: text-white/60 text-lg max-w-2xl mx-auto mt-6 leading-relaxed

Two CTA buttons (fade up, 0.5s delay, flex gap-4 justify-center mt-10):
- "Buy Guest Post Now →" → btn-primary (orange filled)
- "Book a Free Call" → btn-ghost (white outlined)

Trust bar (fade up, 0.7s delay, mt-12 border-t border-white/10 pt-8 flex gap-6 justify-center flex-wrap):
- ✓ White-Hat Only · ✓ DR Verified · ✓ 21-Day Turnaround · ✓ AEO + GEO Ready
Style: text-white/45 text-sm, checkmarks in text-mg-orange

Gradient transition div at bottom of section:
```
<div className="h-16 bg-gradient-to-b from-mg-dark to-mg-bg" />
```

---

### SECTION 2 — BENEFITS

**Background:** `bg-mg-bg` (#F7F6F4)
**Padding:** py-28 px-6

Section label: "WHY GUEST POSTS WORK"
H2: "Benefits of Blog Outreach and Guest Posts"
Sub (text-mg-body max-w-2xl mx-auto text-center mt-4):
"Guest posts on authoritative sites boost your Google rankings, build real brand authority, and — with MaiGrowth's approach — also strengthen your presence in AI-generated answers."

3 cards (grid-cols-1 md:grid-cols-3 gap-6 mt-16) — use StaggerGroup + StaggerItem if available, otherwise Framer Motion stagger:

**Card 1 — TrendingUp icon:**
Title: "Boost Google Rankings"
Body: "Strategic guest posts on high-DR sites signal authority to Google. Your pages gain stronger SEO signals, climb the SERPs, and capture organic traffic from competitors."

**Card 2 — Award icon (featured — border-t-[3px] border-mg-orange):**
Title: "Authority & Brand Trust"
Body: "Being featured on respected industry blogs positions your brand as a leader. Combined with MaiGrowth's AEO strategy, those same placements also help AI tools cite you as a trusted source."

**Card 3 — Globe2 icon:**
Title: "Win Market Share + AI Visibility"
Body: "Ranking higher means capturing traffic that would go to competitors. MaiGrowth guest posts are also optimized for AI citation — so you win in Google search AND in AI-generated answers."

Card style: `.card` class + icon in text-mg-orange (Lucide, size 28) inside bg-mg-orangeLight rounded-xl w-12 h-12

---

### SECTION 3 — DR TIER CARDS (Individual Offerings)

**Background:** `bg-mg-surface-alt` (#EFEFED)
**Padding:** py-28 px-6

Section label: "INDIVIDUAL GUEST POST PLACEMENTS"
H2: "Our Guest Post Offerings"
Sub: "Choose your domain rating tier. Every placement is manually outreached, content-included, and permanently live."

**4 DR tier cards (grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16):**

Each card has TWO parts:
1. **Top gradient image area** (h-48, rounded-t-2xl, overflow-hidden, relative) — a CSS gradient background with "Guest Posts" small badge top-left and massive DR number
2. **Bottom white info area** (bg-mg-surface rounded-b-2xl border border-t-0 border-mg-border p-6)

**Card 1 — DR 30+:**
Gradient: `linear-gradient(135deg, #FF4500 0%, #FF6B35 40%, #1a0a00 100%)`
Badge: "Guest Posts" — small pill top-left, bg-white/20 text-white text-[10px] font-bold px-2 py-1 rounded-full
DR Number: "DR30+" — font-syne font-extrabold text-white, font-size 64px, absolute bottom-4 left-5, letter-spacing -0.03em
Bottom: Title "DR 30+ Guest Post" (font-syne font-bold text-mg-ink text-base) + btn-primary w-full mt-4 "Buy Guest Post →"

**Card 2 — DR 40+:**
Gradient: `linear-gradient(135deg, #D4A017 0%, #F5C842 40%, #1a1200 100%)`
DR Number: "DR40+"
Title: "DR 40+ Guest Post"

**Card 3 — DR 50+:**
Gradient: `linear-gradient(135deg, #0A7A4A 0%, #1DB97A 40%, #001a0e 100%)`
DR Number: "DR50+"
Title: "DR 50+ Guest Post"

**Card 4 — DR 60+:**
Gradient: `linear-gradient(135deg, #0A3A7A 0%, #1A6FD4 40%, #00091a 100%)`
DR Number: "DR60+"
Title: "DR 60+ Guest Post"

**Card hover effect:**
```
whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}
transition={{ duration: 0.25 }}
```

**"All Guest Posts Include" section below the 4 cards (mt-16 pt-12 border-t border-mg-border):**

Centered heading: "All Guest Posts Include" — font-syne font-bold text-xl text-mg-ink

7 items in a responsive flex-wrap row, each with a small mg-orange dot:
- 1,000+ words of original content
- Professional SEO writers
- Real websites with verified organic traffic (Ahrefs)
- Contextual, in-content link placement
- Manual blog outreach — no automated blasts
- Natural anchor texts
- Placement live within 21 days

Style each item: flex items-center gap-2, text-mg-body text-sm, dot = w-2 h-2 rounded-full bg-mg-orange flex-shrink-0

---

### SECTION 4 — PACKAGES

**Background:** `bg-mg-surface` (#FFFFFF)
**Padding:** py-28 px-6

Section label: "PACKAGES"
H2: "Guest Post Packages"
Sub: "Structured pricing tiers for every stage of SEO growth. Each package includes content writing, outreach, and full reporting."

**5 pricing cards (grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-16):**

Each card: bg-mg-bg border border-mg-border rounded-2xl p-7 relative flex flex-col

**Card 1 — Slow Burner:**
- Emoji: 🌱 (or Sprout icon)
- Name: "Slow Burner" — font-syne font-bold text-lg text-mg-ink
- Desc: "Entry-level link building. Focuses on foundational organic search performance."
- Price: "From $497" — font-syne font-extrabold text-4xl text-mg-ink mt-4
- Was price: "Was $537" — text-mg-muted text-sm line-through
- Divider
- Features (CheckCircle2 icons text-mg-orange text-sm):
  - 3× DR 30+ Guest Posts
  - Avg. price per link: $166
  - Save 7%
- CTA: btn-secondary w-full mt-auto "Purchase Package"

**Card 2 — Launch Pad:**
- Emoji: 🚀
- Name: "Launch Pad"
- Desc: "Ideal for maintaining rankings and establishing domain authority."
- Price: "From $1,049"
- Was: "Was $1,145"
- Features: 3× DR 30+, 1× DR 40+, 1× DR 50+, Avg. $210/link, Save 8%
- CTA: btn-secondary w-full

**Card 3 — Growth (FEATURED):**
- Badge: "MOST POPULAR" — absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2, bg-mg-orange text-white text-[10px] font-bold px-4 py-1 rounded-full
- Extra styling: border-2 border-mg-orange shadow-[0_8px_40px_rgba(255,107,53,0.15)] bg-mg-surface
- Emoji: ✨
- Name: "Growth"
- Desc: "For businesses expanding online presence with increased traffic and higher rankings."
- Price: "From $1,799" — text-mg-orange
- Was: "Was $2,041"
- Features: 5× DR 30+, 3× DR 40+, 1× DR 50+, Avg. $200/link, Save 12%
- CTA: btn-primary w-full

**Card 4 — Authority:**
- Emoji: 💪
- Name: "Authority"
- Desc: "Establish your brand as an industry leader and significantly boost domain rating."
- Price: "From $3,799"
- Was: "Was $4,512"
- Features: 10× DR 30+, 3× DR 40+, 3× DR 50+, 2× DR 60+, Avg. $211/link, Save 16%
- CTA: btn-secondary w-full

**Card 5 — Domination:**
- Emoji: 🏆
- Name: "Domination"
- Desc: "The definitive solution for industry-leading organic visibility and sustainable SEO."
- Price: "From $4,999"
- Was: "Was $6,180"
- Features: 5× DR 30+, 5× DR 40+, 5× DR 50+, 5× DR 60+, Avg. $250/link, Save 19%
- CTA: btn-secondary w-full

---

### SECTION 5 — WHAT MAKES US DIFFERENT

**Background:** `bg-mg-surface-alt`
**Padding:** py-28 px-6

Section label: "OUR APPROACH"
H2: "What Makes MaiGrowth Guest Posts Different?"
Sub (max-w-3xl mx-auto text-center text-mg-body):
"MaiGrowth runs a legitimate blogger outreach service that secures real, natural placements on real websites. We contact real bloggers and editors through manual outreach. No automated blasts. No scraped databases. And unlike every other agency — our guest posts are also optimized for AI engine citation."

**4 feature boxes (grid-cols-2 md:grid-cols-4 gap-4 mt-14):**

Each box: bg-mg-surface border border-mg-border rounded-2xl p-6 text-center
Icon: Lucide icon in text-mg-orange, size 28, bg-mg-orangeLight rounded-xl w-12 h-12 flex items-center justify-center mx-auto mb-4
Label: font-syne font-bold text-mg-ink text-sm mt-3

Box 1 — FileText icon: "Editorial In-Content Links"
Box 2 — Link2 icon: "Natural Anchor Texts"
Box 3 — Target icon: "Niche-Relevant Placements"
Box 4 — BarChart2 icon: "Sites with Real Traffic"

Card hover: whileHover={{ y: -4, borderColor: '#FF6B35' }} transition={{ duration: 0.2 }}

**Dark CTA Banner below the 4 boxes (mt-16):**
Background: bg-mg-dark rounded-2xl px-12 py-10
Layout: flex justify-between items-center (stack on mobile)

Left text (max-w-xl):
- H3 (font-syne font-extrabold text-white text-2xl md:text-3xl leading-snug):
  "Want to know how we build links that rank on Google
  AND get cited by"
  Then: "ChatGPT, Perplexity & AI Overviews?" in text-mg-orange

Right: btn-primary "Learn How →" → /contact

---

### SECTION 6 — GUEST POSTS VS NICHE EDITS

**Background:** `bg-mg-surface`
**Padding:** py-28 px-6

Section label: "KNOW THE DIFFERENCE"
H2: "Guest Posts vs Niche Edits"
Sub: "Not all links are equal. Here's how each type works and when to use them."

**2 comparison cards (grid-cols-1 md:grid-cols-2 gap-6 mt-14, max-w-4xl mx-auto):**

**LEFT CARD — Guest Posts:**
- Top bar: border-t-[3px] border-mg-orange
- Icon: PenLine (Lucide) text-mg-orange
- Title: "Guest Posts (Blog Outreach)" — font-syne font-bold text-xl
- 4 bullet points (CheckCircle2 text-mg-orange):
  - Brand-new content written for the host blog
  - Naturally integrated, contextual in-content links
  - Placed within the main body of the article
  - Strongest long-term SEO impact
  - Also strengthens AEO + GEO brand authority
- Bottom tag: .tag "Recommended for most campaigns"

**RIGHT CARD — Niche Edits:**
- Top bar: border-t-[3px] border-mg-border
- Icon: Link2 (Lucide) text-mg-muted
- Title: "Niche Edits (Link Insertions)" — font-syne font-bold text-xl
- 3 bullet points (CheckCircle2 text-mg-muted):
  - Adding your link to an existing, aged article
  - Works when context is strong and niche-relevant
  - Best for supplementing campaigns, not replacing guest posts
- Bottom tag: .tag-neutral "Great as a secondary strategy"

---

### SECTION 7 — HOW IT WORKS

**Background:** `bg-mg-dark` (deep navy)
**Padding:** py-28 px-6
**Dot grid texture** same as hero section

Section label (text-mg-orange): "THE PROCESS"
H2 (text-white): "How Our Guest Post Service Works"

**5 numbered steps in a 2-column grid (grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0):**

Each step: border-b border-mg-darkBorder py-8
Step number: font-syne font-extrabold text-5xl text-mg-orange/25 leading-none mb-3
Step title: font-syne font-bold text-white text-lg mb-2
Step body: text-white/55 text-sm leading-relaxed DM Sans

Step 01 (left): "Backlink Gap Analysis"
"We calculate exactly how many links you need to beat competitors based on link velocity and authority gaps. Optional but recommended."

Step 02 (right): "Site Prospecting & Blogger Outreach"
"We identify relevant, high-DR blogs in your niche then begin manual email outreach directly to bloggers and editors. No automated sequences."

Step 03 (left): "Site Approval"
"You stay in control. Pre-approve domains, set DR and traffic minimums, exclude irrelevant niches, and review content before publication."

Step 04 (right): "Content Creation"
"Our professional SEO writers create 1,000+ word articles aligned with your brand voice, target keywords, and link placement strategy."

Step 05 (left, spanning full width on mobile): "Publish & Report"
"Once live, you receive: the live URL, DR and traffic metrics, anchor text used, indexation status, and a full exportable report (CSV/PDF)."

**Turnaround note (centered, mt-8 pt-8 border-t border-mg-darkBorder):**
"Typical turnaround: 21 days depending on niche and outreach response rates."
Style: text-white/40 text-sm font-dm-sans italic

**Agency access callout (centered, mt-6):**
Label in text-mg-orange font-semibold: "Agencies:"
Text in text-white/60 text-sm: "Branded link reports, client-ready documentation, and white-label pricing available."

**CTA button centered below (mt-10):**
btn-primary "Talk to Our SEO Strategists →" → /contact

---

### SECTION 8 — QUALITY CRITERIA & GUARANTEES

**Background:** `bg-mg-surface-alt`
**Padding:** py-28 px-6

Section label: "OUR STANDARDS"
H2: "Quality Criteria & Guarantees"
Sub: "Every guest post placement meets these strict quality controls — no exceptions."

**6 feature boxes (grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-14):**

Each box: bg-mg-surface border border-mg-border rounded-xl px-5 py-4 flex items-center gap-4
Icon: Lucide icon in text-mg-orange, size 20
Label: font-syne font-bold text-mg-ink text-sm

Box 1 — TrendingUp: "1,000+ monthly organic traffic minimum"
Box 2 — Star: "Clean outbound link profiles"
Box 3 — ShieldOff: "No casino, CBD, or spam niches"
Box 4 — BarChart: "Growing blogs only — no stagnant sites"
Box 5 — BookOpen: "Editorial standards maintained"
Box 6 — Users: "Real bloggers, real manual outreach"

Box hover: whileHover={{ borderColor: '#FF6B35' }} transition={{ duration: 0.2 }}

**CTA + Guarantees (centered, mt-14):**

btn-primary "Buy Guest Post →" → /contact

Two guarantee rows (mt-8, text-center, space-y-3):
Row 1: font-syne font-bold text-mg-ink text-sm "Placement Guarantee"
       text-mg-body text-sm: "If a link drops within 12 months, we replace it for free."
Row 2: font-syne font-bold text-mg-ink text-sm "Refund Policy"
       text-mg-body text-sm: "If we cannot secure agreed metrics after outreach attempts, we offer a replacement or credit toward future placements."

**"Who Is This Service For?" dark banner (mt-16):**
Background: bg-mg-dark rounded-2xl px-12 py-10

H3 (font-syne font-extrabold text-white text-2xl text-center mb-8):
"Who Is This Guest Post Service For?"

Bullet grid (grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl mx-auto):
Each item: flex items-center gap-2, text-white/65 text-sm
Dot: w-2 h-2 rounded-full bg-mg-orange flex-shrink-0

Items:
- SEO agencies needing white-label blog placements
- Affiliate marketers scaling authority sites
- In-house SEO teams
- Businesses competing in high-authority SERPs
- SaaS, local businesses, e-commerce brands
- Regulated or technical industries
- Country-specific outreach (USA, UK, Canada, AUS)
- Brands building AEO + GEO visibility

---

### SECTION 9 — TESTIMONIALS

**Background:** `bg-mg-surface`
**Padding:** py-28 px-6

Section label: "WHAT CLIENTS SAY"
H2: "Real Results from Real Clients"

**4 testimonial cards (grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14):**

Each card: bg-mg-bg border border-mg-border rounded-2xl p-7 flex flex-col
- Large decorative quote mark: font-syne font-extrabold text-[56px] text-mg-orange/15 leading-none -mb-3
- Quote text: text-mg-body text-[13.5px] leading-relaxed italic flex-1
- Divider: border-t border-mg-border mt-5 pt-5
- Avatar row: flex items-center gap-3
  - Avatar circle: w-9 h-9 rounded-full bg-mg-dark flex items-center justify-center font-syne font-bold text-white text-xs
  - Name: font-syne font-bold text-mg-ink text-sm
  - Company: text-mg-muted text-xs

Card 1:
Avatar initials: "CC"
Quote: "MaiGrowth provided amazing guest posts that actually moved the needle on my websites. The process is smooth and the quality is outstanding. Highly recommended."
Name: Craig C. | Company: Craig Campbell SEO

Card 2:
Avatar initials: "GD"
Quote: "We've used MaiGrowth across many different projects. The TAT is excellent and the quality is great. We've seen amazing results across all our client sites."
Name: Gareth D. | Company: Daine Media

Card 3:
Avatar initials: "JD"
Quote: "MaiGrowth is a must-have link vendor. Ignore third-party metrics — just look at backlinks that move the needle. They are the #1 tried and tested link vendor."
Name: James D. | Company: FatRank

Card 4:
Avatar initials: "KT"
Quote: "The best link provider I've ever used. Excellent team and exceptional quality. Our brand now shows up in ChatGPT answers for our main keywords."
Name: Kami T. | Company: Via Trustpilot

Card hover: whileHover={{ y: -5, boxShadow: '0 12px 40px rgba(0,0,0,0.07)' }}

**Dark rounded CTA box below testimonials (mt-16, max-w-3xl mx-auto):**
Background: bg-mg-dark rounded-2xl px-12 py-12 text-center

H3 (font-syne font-extrabold text-white text-2xl md:text-3xl leading-snug):
"Ready to Build Authority the Right Way?"

Sub (text-white/55 text-base mt-4 max-w-xl mx-auto):
"Guest posts that improve rankings AND get your brand cited by AI. Let's build a campaign that makes sense for your goals."

Buttons (flex gap-4 justify-center mt-8 flex-wrap):
- "Buy Now →" → btn-primary
- "Book a Free Call" → btn-ghost

---

### SECTION 10 — FAQ

**Background:** `bg-mg-bg`
**Padding:** py-28 px-6

**Two-column layout (grid-cols-1 lg:grid-cols-[320px_1fr] gap-24 max-w-6xl mx-auto):**

**LEFT — Sticky headline (lg:sticky lg:top-24):**
Section label: "FAQ"
H2 (font-syne font-extrabold text-mg-ink clamp(28px→42px) leading-snug):
"Questions we get asked about guest posts."
Sub (text-mg-muted text-sm mt-4 leading-relaxed):
"More questions? Email us at"
Link: hello@maigrowth.com in text-mg-orange

**RIGHT — Accordion (8 questions):**

Each item: border-b border-mg-border
Question button: flex justify-between items-center py-5 w-full cursor-pointer font-syne font-bold text-[15px]
When open: color text-mg-orange
Icon: Plus (Lucide) in a circle — rotates 45° (becomes ×) when open using Framer Motion animate={{ rotate: open ? 45 : 0 }}
Answer: AnimatePresence height animation, text-mg-body text-[14px] leading-relaxed pb-5

Open item: border-l-[3px] border-mg-orange pl-5 transition-all duration-300

Q1: "What is a guest posting service?"
A: "A guest posting service secures editorial placements on external, high-authority websites on your behalf. MaiGrowth handles the entire process — site prospecting, manual outreach to bloggers and editors, content writing, placement, and reporting. You receive a live link on a real website with genuine organic traffic."

Q2: "Are all guest posts do-follow?"
A: "Yes — all MaiGrowth guest post placements are do-follow backlinks. We only target sites that allow do-follow editorial links. We verify this before pitching any placement and confirm it in your final placement report."

Q3: "Can I provide my own anchor text and target URLs?"
A: "Absolutely. You provide your preferred anchor texts and target URLs during onboarding. Our writers and outreach team incorporate them naturally into the content to ensure they read as organic editorial placements — not forced insertions."

Q4: "Can I approve sites before publishing?"
A: "Yes. We offer full site pre-approval. You can review the prospected domains, set DR and traffic minimums, exclude specific niches or competitors, and approve or reject any site before content is created or submitted."

Q5: "How do MaiGrowth guest posts help with AEO and GEO?"
A: "Beyond Google rankings, MaiGrowth guest posts are placed on high-authority sites that AI engines like ChatGPT, Perplexity, and Google's AI Overviews regularly reference. Consistent brand mentions and links from trusted sources build your entity authority — making AI tools more likely to cite your brand when users ask questions in your niche."

Q6: "What niches do you work with?"
A: "We work with most niches including SaaS, e-commerce, finance, health, legal, real estate, technology, marketing, education, and more. We do not place links in casino, CBD, adult, or spam niches. If you are in a regulated industry, contact us first and we will confirm availability."

Q7: "How long does a guest post campaign take?"
A: "Individual placements typically go live within 21 days of order. Package campaigns depend on volume — a 5-link package is typically completed within 45–60 days. You receive a real-time update when each link goes live."

Q8: "What reporting do I receive?"
A: "You receive a comprehensive placement report for each link including: live URL, domain DR and DA, monthly organic traffic (Ahrefs), anchor text used, target URL, indexation status, and publication date. Reports are available in CSV and PDF format."

First item open by default (index 0). One item open at a time.

---

### SECTION 11 — FINAL CTA BANNER

**Background:** `bg-mg-dark`
**Padding:** py-24 px-6 text-center
**Same dot-grid texture as hero**

H2 (font-syne font-extrabold text-white clamp(36px→64px) leading-[1.04] tracking-tight):
Line 1: "Guest posting,"
Line 2: "done for you." — in text-mg-orange

Sub (text-white/50 text-base max-w-lg mx-auto mt-5):
"Links that rank on Google. Links that get cited by AI. Built and managed end-to-end by MaiGrowth."

Buttons (flex gap-4 justify-center mt-10 flex-wrap):
- "Free Strategy Call →" → btn-primary (orange)
- "Get Your Link Report" → btn-ghost (white outlined)

Small text below (mt-6 text-white/25 text-xs):
"No commitment required · Expert analysis · Reply within 24 hours"

---

## ANIMATION RULES — APPLY THROUGHOUT

All scroll animations:
```
initial={{ opacity: 0, y: 24 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.12 }}
transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
```

Card grids — stagger children:
```
// Container
initial="hidden"
whileInView="visible"
viewport={{ once: true, amount: 0.1 }}
variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}

// Each card
variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
```

Hero headline word-by-word:
```
// Split H1 text by spaces, wrap each word in motion.span
// stagger: 0.05s per word
// initial: opacity 0, y 20
// animate: opacity 1, y 0
```

---

## SEO METADATA

Add to `app/guest-posts/page.tsx`:
```typescript
export const metadata = {
  title: 'Guest Post Services — High-Authority Link Building | MaiGrowth',
  description: 'Premium guest post placements on DR 30–60+ websites. White-hat outreach, content included, permanent links. Also optimized for AEO and GEO visibility.',
}
```

---

## NAVBAR UPDATE

Open `components/layout/Navbar.tsx`.
Find the nav links array or JSX.
Add a new link: label "Guest Posts" → href "/guest-posts"
Position it between "Services" and "Blog" in the navigation order.
Apply the same active state styling as other nav links (text-mg-orange when pathname is '/guest-posts').

---

## FINAL CHECKLIST — VERIFY BEFORE FINISHING

PAGE STRUCTURE:
- [ ] `app/guest-posts/page.tsx` created with all 11 sections
- [ ] Sections in correct order: Hero → Benefits → DR Tiers → Packages → Different → How It Works → Quality → Testimonials → FAQ → Final CTA
- [ ] Global Navbar and Footer render automatically (not duplicated)
- [ ] "Guest Posts" link added to Navbar pointing to /guest-posts

DESIGN:
- [ ] Hero uses mg-dark navy background with dot-grid + orange radial glow
- [ ] Light/dark section alternation maintained throughout
- [ ] DR tier cards have gradient backgrounds with massive white DR numbers
- [ ] Growth package card has orange border glow and "MOST POPULAR" badge
- [ ] All Lucide icons used — zero emoji anywhere
- [ ] All buttons use existing global CSS classes
- [ ] AEO/GEO angle mentioned in: hero sub-headline, benefits card 2, different section banner, FAQ Q5, final CTA sub

ANIMATIONS:
- [ ] Hero H1 animates word by word on load
- [ ] All sections fade up on scroll with once: true
- [ ] All card grids stagger children
- [ ] DR tier cards lift on hover
- [ ] FAQ accordion uses AnimatePresence for smooth height animation
- [ ] FAQ Plus icon rotates 45° when open
- [ ] First FAQ item open by default

CONTENT:
- [ ] No lorem ipsum anywhere
- [ ] All prices, DR tiers, and features match the specifications above
- [ ] Placement Guarantee and Refund Policy text included
- [ ] Agency access note in How It Works section

METADATA:
- [ ] Title and description set via export const metadata

---

*MaiGrowth Guest Posts Page — Replit Follow-Up Prompt*
*Send in the SAME Replit Agent chat. Estimated cost: 12–18 credits.*
*Do not start a new chat. Do not rebuild existing pages.*
