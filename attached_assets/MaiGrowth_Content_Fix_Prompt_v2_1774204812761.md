# MaiGrowth — Content & Messaging Fix Prompt (v2)
### Based on: MaiGrowth Content Strategy Document (March 2025)
### Purpose: Fix messaging, navigation, and service structure on the existing site
### Design: DO NOT CHANGE ANYTHING VISUAL — text/copy updates only
### Estimated credits: 10–15 credits
### Send in the SAME Replit Agent chat as your original build

---

# FIX PROMPT — MESSAGING & CONTENT OVERHAUL
*(Copy everything from the line below to END OF FILE and paste into Replit Agent)*

---

## YOUR ROLE

You are updating an already-built MaiGrowth website. The design, colors, fonts, animations, layout, spacing, shadows, borders, hover effects — everything visual is correct and must NOT be touched. You are only updating text content, copy, and navigation links.

Read every instruction fully before editing any file.

---

## ABSOLUTE RULES — READ BEFORE TOUCHING ANYTHING

- Do NOT change any colors, Tailwind classes, CSS, spacing, padding, margins, fonts, animations, icons, or visual design of any kind
- Do NOT rebuild any page or component from scratch
- Do NOT add or remove any sections
- Do NOT change button shapes, card layouts, grid columns, or any structural HTML
- Every single change in this prompt is a TEXT UPDATE ONLY
- If an instruction says "change title to X" — only change the text string. Touch nothing else on that element.

---

## EXISTING SITE CONTEXT

- Framework: Next.js 14 App Router
- Pages: app/page.tsx, app/about/page.tsx, app/services/page.tsx, app/guest-posts/page.tsx, app/blog/page.tsx, app/contact/page.tsx
- Components: components/layout/Navbar.tsx, components/layout/Footer.tsx, components/home/ folder

---

## UNDERSTAND THE BUSINESS FIRST

MaiGrowth sells exactly TWO services:
1. **Guest Posts** — brand new articles published on real authority websites with a link to the client's site
2. **Link Insertions** — client's link placed into existing, aged articles on real authority websites

**The unique edge:** Every link MaiGrowth builds gets clients found in both Google rankings AND AI tools like ChatGPT, Perplexity, and Google AI Overviews. No competitor does this. It is not a separate service — it is built into every single order.

**MESSAGING RULE — CRITICAL:**
The phrase "AI & LLM Ready" must appear on the homepage MAXIMUM TWICE:
1. Once in the hero label
2. Once in the explanation block below the service cards

Everywhere else on the homepage — describe the OUTCOME for the customer in plain English:
- Instead of "AI & LLM Ready" tag on a card → say "Get cited in ChatGPT & Perplexity"
- Instead of "AI & LLM Ready" feature box → say "Your brand shows up in AI answers"
- Instead of "AI & LLM Ready" trust card → say "Found in ChatGPT, Perplexity & AI Overviews"

The reason: Repeating a technical badge everywhere makes it meaningless. Saying what it DOES for the customer makes it powerful.

---

## CHANGE 1 — NAVBAR
**File:** `components/layout/Navbar.tsx`

TEXT CHANGE ONLY — do not touch styling, colors, height, logo, button, or mobile menu design.

Replace the navigation link labels and hrefs with exactly:
```
Home          → href="/"
Guest Posts   → href="/guest-posts"
Link Insertions → href="/link-insertions"
Packages      → href="/packages"
About         → href="/about"
Blog          → href="/blog"
Contact       → href="/contact"
```

Remove any link labeled "Services", "AEO", or "GEO".
CTA button text stays: "Get Free Consultation"
Mobile menu: update link labels and hrefs to match above. Touch nothing else.

---

## CHANGE 2 — HOMEPAGE HERO
**File:** `components/home/Hero.tsx`

TEXT CHANGES ONLY. Do not touch background, dot grid, glow, SVG lines, animations, button styles, colors, or trust bar styling.

**Label above H1** — change text to:
```
GUEST POSTS · LINK INSERTIONS · AI & LLM READY
```

**H1** — change text to:
```
Guest Posts & Link Insertions
Built for Google AND AI.
```
Keep "AI." styled in mg-orange exactly as it currently is.

**Sub-headline** — change text to:
```
High-authority backlinks that rank your site on Google 
AND get your brand mentioned in ChatGPT, Perplexity, 
and Google AI Overviews. White-hat. Real sites. Every time.
```

**Button 1** — change text to: `View Our Services →`
Keep href pointing to /guest-posts. Do not change button style.

**Button 2** — keep as: `Book a Free Call` → /contact. No changes.

**Trust bar items** — change the 4 trust items text to exactly:
```
✓ White-Hat Only
✓ Real Websites
✓ Found in ChatGPT & Perplexity
✓ 21-Day Turnaround
```
Do not change the styling, dot colors, dividers, or layout of the trust bar.

---

## CHANGE 3 — HOMEPAGE SERVICES SECTION
**File:** `components/home/ServicesOverview.tsx`

This is the most important change. TEXT AND STRUCTURE UPDATE — do not change card design, grid layout, colors, icons, or any visual element.

**Section label** — change text to: `OUR SERVICES`

**H2** — change text to:
```
Two Services. One Clear Goal.
```

**Sub-text** — change to:
```
Most agencies build links for Google only. Every MaiGrowth 
placement works in Google search AND gets your brand 
mentioned in AI-generated answers — at no extra cost.
```

**REMOVE the third card entirely.** The current 3-card grid becomes a 2-card grid.
Update the grid class from `grid-cols-3` to `grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto`.

**CARD 1 — Guest Posts:**
Keep all visual styling exactly as is.
Change the "NEW ERA" badge text to: `Most Popular`
Change title to: `Guest Posts`
Change body text to:
```
Brand new articles written and published on real, 
high-DR authority websites in your niche. Permanently 
live. Content writing included. Your link placed in 
the main body — not the footer or sidebar.
```
Change the 3 feature tags text to: `DR 30–60+` | `Content Included` | `Permanent Placement`
Change bottom link text to: `View Guest Post Packages →` → href="/guest-posts"

**CARD 2 — Link Insertions:**
Keep all visual styling exactly as is.
Change icon to Link2 (Lucide) — text-mg-orange. Keep same container size.
Change title to: `Link Insertions`
Change body text to:
```
Your link added contextually into existing, aged 
articles on real authority websites. The article 
already has trust and traffic — your link inherits 
that authority immediately.
```
Change the 3 feature tags text to: `Aged Articles` | `Fast Turnaround` | `Permanent Placement`
Change bottom link text to: `View Link Insertion Packages →` → href="/link-insertions"

**ADD this explanation block directly below the 2 cards** (after the closing tag of the card grid div, before the existing "View All Services" CTA):

```tsx
<div
  style={{
    background: 'rgba(255,107,53,0.05)',
    border: '1px solid rgba(255,107,53,0.2)',
    borderRadius: '16px',
    padding: '28px 32px',
    maxWidth: '680px',
    margin: '40px auto 0',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
  }}
>
  <span style={{ fontSize: '18px', flexShrink: 0, marginTop: '3px' }}>⚡</span>
  <div>
    <p style={{
      fontFamily: 'Syne, sans-serif',
      fontWeight: 700,
      fontSize: '14px',
      color: '#FF6B35',
      marginBottom: '8px',
    }}>
      Why MaiGrowth links show up in ChatGPT and Perplexity
    </p>
    <p style={{
      fontFamily: 'DM Sans, sans-serif',
      fontSize: '13px',
      lineHeight: '1.75',
      color: '#3D3D3D',
    }}>
      We only place links on websites that AI tools regularly reference as
      trusted sources. So when someone asks ChatGPT or Perplexity a question
      in your niche, your brand is more likely to appear in the answer.
      Every Guest Post and Link Insertion we build works this way.
      No extra cost. No separate service. Just better links.
    </p>
  </div>
</div>
```

Change the existing "View All Services →" button text below to:
`See Full Campaign Packages →` → href="/packages"

---

## CHANGE 4 — WHY MAIGROWTH SECTION
**File:** `components/home/WhyMaiGrowth.tsx`

TEXT CHANGES ONLY. Do not touch the two-column layout, feature box styling, icons, or grid.

**H2** — change to:
```
Your Trusted Partner for High-Quality Link Building
```

**3 body paragraphs** — change text to exactly:

Paragraph 1:
```
MaiGrowth has spent years building links that actually 
move the needle — not just for Google rankings, but for 
the AI search tools that now influence millions of 
buying decisions every day.
```

Paragraph 2:
```
Every placement is secured through manual outreach to 
real website owners and editors. No automated blasts. 
No scraped databases. Real relationships. Real placements.
```

Paragraph 3:
```
You get a complete campaign — outreach, content writing, 
placement, and reporting — handled end to end. You focus 
on your business. We handle the links.
```

**Feature box labels** — change the 6 box labels to exactly:
1. `Ahrefs DR Verified`
2. `Spam Checked`
3. `SEO Support Included`
4. `All Real Websites`
5. `21-Day Turnaround`
6. `ChatGPT & AI Citations` ← replaces "Large Site Inventory" or whatever the 6th box currently says

Do not change icons, icon containers, box background, borders, or hover styles.

---

## CHANGE 5 — FEATURES SECTION (3 Cards)
**File:** `components/home/FeaturesSection.tsx`

TEXT CHANGES ONLY. Do not touch card layout, icon circles, colors, or any visual element.

**H2** — change to:
```
Features of Our Link Building Service
```

**Sub** — change to:
```
Every Guest Post and Link Insertion we build 
includes these guarantees — no exceptions.
```

**Card 1** — change title and body only:
Title: `Guaranteed Quality`
Body: `Every link comes from a real website with genuine organic traffic. Thoroughly vetted before outreach. No PBNs. No fake sites. No shortcuts. Your domain's safety is non-negotiable.`

**Card 2** — change title and body only:
Title: `One-Time Payments`
Body: `Permanent placements. Pay once. Your link stays live. No monthly rental fees. No recurring charges. Every placement is yours to keep.`

**Card 3** — change title, body, and icon only:
Change icon to Sparkles (Lucide) — keep same icon container styling
Title: `Your Brand in AI Answers`
Body: `Our links are placed on sites that ChatGPT, Perplexity, and Google AI Overviews regularly cite. Your brand gets mentioned in AI-generated answers — included in every order.`

---

## CHANGE 6 — COMPARISON TABLE
**File:** `components/home/ComparisonTable.tsx`

TEXT CHANGES ONLY. Do not change table styling, colors, borders, or layout.

**H2** — change to:
```
Why MaiGrowth vs Every Other Link Building Agency
```

**Sub** — change to:
```
Other agencies build links for Google only. 
MaiGrowth builds links that work everywhere your customers search.
```

**Replace all table row data** with exactly these 8 rows (keep all existing table styling — only update the text content of each cell):

Row 1: `Google Ranking Backlinks` | `✅ Yes` | `✅ Yes`
Row 2: `Cited in ChatGPT & Perplexity` | `❌ No` | `✅ Yes`
Row 3: `Google AI Overviews Visibility` | `❌ No` | `✅ Yes`
Row 4: `Real Website Placements Only` | `⚠️ Sometimes` | `✅ Always`
Row 5: `White-Hat Guaranteed` | `⚠️ Sometimes` | `✅ Always`
Row 6: `Content Writing Included` | `⚠️ Sometimes` | `✅ Always`
Row 7: `21-Day Turnaround` | `❌ No` | `✅ Yes`
Row 8: `Global Service, Fully Remote` | `⚠️ Sometimes` | `✅ Yes`

Keep all existing icon components (CheckCircle2, XCircle, etc.) and their colors — only update the row label text in column 1.

---

## CHANGE 7 — TRUST SIGNALS SECTION
**File:** `components/home/TrustSection.tsx`

TEXT CHANGES ONLY. Do not change card layout, icons, borders, or hover effects.

**H2** — change to:
```
Built on Transparency. Delivered with Proof.
```

**Card 1** — change body text only (keep title "White-Hat Only" and ShieldCheck icon):
```
We never use PBNs, link farms, or manipulative tactics. 
Every link is ethically acquired, Google-compliant, 
and built to last. Your domain's safety is non-negotiable.
```

**Card 2** — change body text only (keep title "Real Websites Only" and Globe2 icon):
```
Every backlink comes from genuine websites with real 
organic traffic and real editorial standards. 
Zero fake sites. Zero link networks. Zero shortcuts.
```

**Card 3** — change title, body, and icon only (keep all card styling and hover effects):
Change icon to: Sparkles (Lucide) — keep same size and color class (text-mg-orange)
Change title to: `Found in ChatGPT & AI Overviews`
Change body to:
```
Our links are placed on the same authoritative sites 
that ChatGPT, Perplexity, and Google AI Overviews 
reference when generating answers. Your brand gets 
found wherever your customers search.
```

---

## CHANGE 8 — FAQ SECTION
**File:** `components/home/HomeFAQ.tsx`

TEXT CHANGES ONLY. Do not change accordion styling, chevron animation, open/close behavior, or any visual element.

**H2** — change to: `Common Questions`

**Replace all 5 FAQ questions and answers** with exactly these — keep all existing accordion component structure, only change the question string and answer string:

**Q1:** `What is a Guest Post service?`
**A1:** `A Guest Post is a brand new article written by our team and published on a real, high-authority website in your niche. The article includes a contextual link back to your site. Every placement is white-hat, permanently live, and delivered within 21 days. Because we only place on trusted, authoritative sites — your brand also gets found in ChatGPT and Perplexity answers as a bonus.`

**Q2:** `What is a Link Insertion?`
**A2:** `A Link Insertion places your link into an existing, already-published article on a real authority website. The article already has trust, traffic, and indexation — your link immediately benefits from that. Faster than Guest Posts and equally effective for building authority in both Google and AI search.`

**Q3:** `Why do your links show up in ChatGPT and Perplexity?`
**A3:** `We only build links on websites that AI tools like ChatGPT, Perplexity, and Google AI Overviews regularly reference as trusted sources. This means when someone asks an AI tool a question in your niche, your brand is more likely to be cited in the answer. This is not a separate service — it is simply how we select sites and build every link. No extra cost.`

**Q4:** `Do I need Guest Posts or Link Insertions — or both?`
**A4:** `Both work well. Guest Posts are best for building topical authority with fresh, niche-relevant content. Link Insertions are faster and work well for adding placements in aged, trusted articles. Most serious campaigns benefit from both — which is why we offer Full Campaign Packages that combine them for better results and better value.`

**Q5:** `How long does it take to see results?`
**A5:** `Individual placements go live within 21 days. Google ranking improvements typically appear within 60–90 days as search engines crawl and evaluate the new links. Your brand appearing in ChatGPT and Perplexity answers varies by niche — most clients notice increased AI visibility within 60–90 days of starting a campaign.`

---

## CHANGE 9 — CTA BANNER
**File:** `components/home/CTABanner.tsx`

TEXT CHANGES ONLY. Do not change background, gradient, button styles, layout, or any visual element.

**H2** — change to:
```
More Traffic from Google.
More Mentions in AI.
```

**Sub text** — change to:
```
Start with a free 30-minute strategy call. We will look 
at your site, your competitors, and tell you exactly 
which service fits your goals.
```

**Button 1** text — change to: `Book Free Strategy Call →`
**Button 2** text — change to: `View Services`

**Small trust text** below buttons — change to:
```
Free · No Commitment · White-Hat Only · Reply Within 24 Hours
```

---

## CHANGE 10 — CONTACT PAGE
**File:** `app/contact/page.tsx`

TEXT CHANGES ONLY. Do not change form styling, input design, layout, or colors.

**H1** — change to: `Let's Build Your Link Strategy`

**Sub** — change to:
```
Tell us about your website and goals. 
We will recommend the right service and 
package for your situation.
```

**"Services Interested In" field** — update the options to:
- Guest Posts
- Link Insertions
- Full Campaign Package (Both)
- Not Sure Yet

---

## CHANGE 11 — FOOTER
**File:** `components/layout/Footer.tsx`

TEXT CHANGES ONLY. Do not change footer layout, colors, column structure, or any visual element.

**Footer tagline** — change to: `Links Built for Google. Found in ChatGPT & Perplexity.`

**Quick Links column** — update links to:
Home | Guest Posts | Link Insertions | Packages | About | Blog | Contact

**Services column** — update to:
Guest Posts | Link Insertions | Full Campaign Packages | Free Consultation

---

## CHANGE 12 — PAGE METADATA
Update these metadata exports — text only:

**app/page.tsx:**
```typescript
export const metadata = {
  title: 'MaiGrowth — Guest Posts & Link Insertions | Found in Google & AI',
  description: 'High-authority Guest Posts and Link Insertions that rank your site on Google AND get your brand mentioned in ChatGPT, Perplexity, and Google AI Overviews. White-hat. Real sites.',
}
```

**app/about/page.tsx:**
```typescript
export const metadata = {
  title: 'About MaiGrowth — Link Building for Google and AI Search',
  description: 'MaiGrowth specializes in Guest Posts and Link Insertions that work in both Google search and AI-generated answers.',
}
```

**app/guest-posts/page.tsx:**
```typescript
export const metadata = {
  title: 'Guest Post Service — Rank on Google & Get Cited in AI | MaiGrowth',
  description: 'Premium Guest Posts on DR 30–60+ real websites. Content included. White-hat outreach. 21-day turnaround. Every post works in Google AND in ChatGPT and Perplexity.',
}
```

**app/contact/page.tsx:**
```typescript
export const metadata = {
  title: 'Free Strategy Call — MaiGrowth',
  description: 'Book a free 30-minute link building strategy call. We will recommend the right Guest Post or Link Insertion package for your goals.',
}
```

**app/blog/page.tsx:**
```typescript
export const metadata = {
  title: 'Blog — Link Building & AI Search Insights | MaiGrowth',
  description: 'Expert insights on Guest Posts, Link Insertions, and how to get your brand found in both Google search and AI-generated answers.',
}
```

---

## CHANGE 13 — BLOG POST FRONTMATTER
**Files:** /posts/ folder — update frontmatter title and excerpt ONLY, do not touch article body

**what-is-aeo-guide-2025.md:**
```
title: "Why Your Links Need to Work in ChatGPT, Not Just Google"
excerpt: "Most link building only targets Google. Here's why the best links in 2025 also get your brand cited in ChatGPT, Perplexity, and Google AI Overviews."
category: "AI Search"
```

**geo-vs-seo-future-of-search.md:**
```
title: "Guest Posts vs Link Insertions: Which is Right for Your Campaign?"
excerpt: "Two services, different strengths. Here's exactly how to choose — and when combining both gets you the best results."
category: "Link Building"
```

**link-building-ai-era.md:**
```
title: "How to Get Your Brand Mentioned in ChatGPT and Perplexity"
excerpt: "Millions of people now get answers from AI tools. Here's the practical strategy for making your brand show up in those answers."
category: "AI Search"
```

---

## LANGUAGE RULES FOR ALL CHANGES

**Use these phrases:**
- "Guest Posts" — always capitalized
- "Link Insertions" — always capitalized
- "Found in ChatGPT & Perplexity" — outcome language
- "Get cited in AI-generated answers" — outcome language
- "Works in Google AND AI search" — outcome language
- "White-hat" — hyphenated
- "Real websites" — emphasize "real"
- "Permanent placement"
- "DR 30+" with + sign

**Never use these phrases:**
- "AEO" — anywhere on homepage, navbar, service cards
- "GEO" — anywhere on homepage, navbar, service cards
- "AI & LLM Ready" — only allowed in hero label and explanation block (max 2 times total on homepage)
- "Niche edits" — use "Link Insertions"
- "Fully Managed Campaigns" — replaced
- "AI-Era Specialists" — replaced
- "Three services" — MaiGrowth has TWO services
- Exclamation marks

---

## FINAL CHECKLIST

NAVIGATION:
- [ ] Navbar: Home | Guest Posts | Link Insertions | Packages | About | Blog | Contact
- [ ] No "Services" dropdown
- [ ] No "AEO" or "GEO" links
- [ ] Footer links match navbar

HOMEPAGE MESSAGING:
- [ ] Hero H1: "Guest Posts & Link Insertions / Built for Google AND AI."
- [ ] Hero label: "GUEST POSTS · LINK INSERTIONS · AI & LLM READY"
- [ ] Hero trust bar: "✓ Found in ChatGPT & Perplexity"
- [ ] Services section: exactly 2 cards only
- [ ] Card 1: Guest Posts | Card 2: Link Insertions
- [ ] AI explanation block below 2 cards — describes WHY links work in AI (no "AI & LLM Ready" badge)
- [ ] Feature box 6: "ChatGPT & AI Citations" (not "AI & LLM Ready")
- [ ] Features card 3: "Your Brand in AI Answers" (not "AI & LLM Ready")
- [ ] Table row 2: "Cited in ChatGPT & Perplexity" (not "AI & LLM Ready Links")
- [ ] Trust card 3: "Found in ChatGPT & AI Overviews" (not "AI & LLM Ready")
- [ ] FAQ Q3 asks "Why do your links show up in ChatGPT?" — answered in plain English
- [ ] CTA headline: "More Traffic from Google. More Mentions in AI."
- [ ] "AI & LLM Ready" appears maximum 2 times on entire homepage

DESIGN (verify nothing changed):
- [ ] All colors identical to before
- [ ] All card layouts identical
- [ ] All animations identical
- [ ] All fonts identical
- [ ] No new sections added
- [ ] No sections removed

METADATA:
- [ ] All 5 page titles updated
- [ ] No title contains "AEO" or "GEO"

---

*MaiGrowth Content Fix Prompt v2 — March 2025*
*Design must not change. Only text changes.*
*Send in the SAME Replit Agent chat. Estimated cost: 10–15 credits.*
