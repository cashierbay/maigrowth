# REPLIT AGENT PROMPT: Build MaiGrowth Link Insertions Page

## ⚠️ CRITICAL - READ FIRST

**THIS IS A NEW PAGE ADDITION TO AN EXISTING WORKING WEBSITE**

You will create 14 NEW files:
- 1 page file: `/app/link-insertions/page.tsx`
- 13 component files in `/components/link-insertions/`

**YOU MUST NOT:**
- ❌ Modify ANY existing files
- ❌ Touch layout.tsx, other pages, or existing components
- ❌ Change tailwind.config, globals.css, or package.json
- ❌ Add new npm packages

**IF YOU NEED TO MODIFY AN EXISTING FILE → STOP AND ASK**

The website is working. You are ONLY adding a new isolated page. Do not break what's already built.

---

## CONTEXT - Project State

**Current Project:** MaiGrowth website (Next.js 14 App Router + Tailwind CSS + Framer Motion + Lucide React)

**Tech Stack:**
- Next.js 14 with App Router
- Tailwind CSS (configured)
- Framer Motion (installed)
- Lucide React (installed)
- Fonts: Syne (700, 800) + DM Sans (400, 500, 600)

**Domain:** maigrowth.com (hosted on Hostinger)
**Deployment:** Replit Core plan

**Existing Pages:**
- Home (`/app/page.tsx`)
- About (`/app/about/page.tsx`)
- Guest Posts (`/app/guest-posts/page.tsx`)
- Blog (`/app/blog/page.tsx`)
- Contact (`/app/contact/page.tsx`)

**Navigation Structure (in layout):**
Home | Guest Posts | Link Insertions | Packages | About | Blog | Contact

**Brand Colors (already in globals.css):**
```css
--mg-bg: #F7F6F4;
--mg-surface: #FFFFFF;
--mg-surface-alt: #EFEFED;
--mg-dark: #12153D;
--mg-orange: #FF6B35;
--mg-orangeHov: #E85A25;
--mg-orangeLight: #FFF0EB;
--mg-ink: #0F0F0F;
--mg-body: #3D3D3D;
--mg-muted: #767676;
--mg-border: #E8E5E0;
--mg-green: #00C47A;
--mg-blue: #3B7FFF;
```

---

## TASK

**YOU ARE ADDING A NEW PAGE ONLY. DO NOT MODIFY ANY EXISTING FILES.**

Build the **Link Insertions page** at `/app/link-insertions/page.tsx` following the exact design and structure from the HTML preview file.

**Reference File:** `/mnt/user-data/uploads/link-insertions-preview.html` (contains complete design with all sections, styles, and copy)

**CRITICAL:** This is a NEW PAGE being added to an existing, working website. You MUST NOT modify any existing pages, components, or configuration files. Only create NEW files in the designated directories.

---

## TARGET STATE

Create a fully functional Link Insertions page that:

1. **Matches the HTML preview exactly** in terms of layout, sections, colors, spacing, and typography
2. **Uses Next.js 14 best practices** - server components by default, client components only when needed
3. **Implements all interactive elements** with Framer Motion animations
4. **Is fully responsive** on mobile, tablet, and desktop
5. **Follows MaiGrowth brand guidelines** - navy hero sections, orange CTAs, off-white content sections

---

## REQUIRED SECTIONS (In Order)

Build these 11 sections exactly as shown in the HTML preview:

### 1. Sticky CTA Bar
- Fixed position at top
- Orange background (#FF6B35)
- Text: "🔥 Limited Time: Get 15% OFF all packages + Free Strategy Call"
- Button: "Claim Your Discount" (white bg, orange text)
- Smooth scroll to #packages on click

### 2. Hero Section
- Navy background (#12153D)
- Badge: "⚡ Trusted by 500+ Businesses • 10,000+ Links Placed"
- H1: "Get **High-Authority** Link Insertions" (highlight in orange)
- 2 CTAs: "View Packages & Pricing" (orange) + "Get Free Strategy Call" (white)
- 4 stat counters: 500+ Clients, 10K+ Links, 98% Success Rate, DR 60+ Max
- Radial gradient overlay (subtle orange glow top-right)

### 3. Trust Badges Section
- White background
- 5 horizontal badges with icons:
  - ✓ 100% White-Hat Methods
  - 🔒 12-Month Link Guarantee
  - 📊 1,000+ Monthly Traffic Min
  - 🤖 AI & LLM Optimized
  - 💰 Money-Back Guarantee

### 4. Benefits Section
- Off-white background
- 6-card grid (3x2 on desktop)
- Cards: Faster Rankings, Natural Profile, White-Hat Practices, Guaranteed Traffic, Account Manager, **AI & LLM Ready** (6th card with badge)
- Hover animation: translateY(-4px) + shadow

### 5. Results Visualization Section
- Navy gradient background
- Left: Traffic growth chart (4 bars showing 100% → 340%)
- Right: 5 result bullets with checkmarks
- Chart bars animated on scroll (Framer Motion)

### 6. Individual Offerings Section
- White background
- Inclusion bullets (horizontal flex wrap)
- 4 gradient cards: DR 30+, DR 40+, DR 50+, DR 60+
- Gradient colors: orange-red, yellow, green-teal, blue
- Hover: translateY(-8px)

### 7. Bulk Savings Banner
- Navy background
- 2-column grid: heading + description
- Heading text: "Unlock Incredible Savings" + orange "When You Buy Link Insertions in Bulk"

### 8. Comparison Table
- "Why Choose MaiGrowth Over Others?"
- HTML table with 3 columns: Feature, Other Providers, MaiGrowth
- 8 rows comparing features
- Green checkmarks (✓) vs red crosses (✗)
- MaiGrowth column has orange header background

### 9. Packages Section (CRITICAL - Main Conversion Point)
- Off-white background
- Urgency banner: "⏰ Limited Time Offer: Save up to 19%"
- 5 package cards: Starter, Intermediate, **Advanced (FEATURED)**, Pro, Ultimate
- Featured card: Orange ribbon "🔥 MOST POPULAR", scale(1.05), orange border, box-shadow
- Each card shows: emoji, name, description, price, old price, savings, features list, per-link price, save badge, CTA
- Bottom: "Not sure which package?" box with free call CTA

### 10. Process Section
- Navy background
- 5 numbered steps in grid layout
- Large orange step numbers (opacity 0.3)
- Bottom: "Want to know more?" CTA box

### 11. Quality Section
- White background
- 8-item grid with icons and text
- Each item: icon (orange bg) + heading + description

### 12. Guarantees Section
- Off-white background
- 4 large guarantee boxes with icons:
  - 🛡️ 12-Month Link Guarantee
  - 💰 Money-Back Guarantee
  - 📊 Traffic Guarantee
  - ✓ Quality Guarantee
- Hover animation
- Bottom: Quality standards grid (dark box with 4 items)

### 13. Testimonials Section
- White background
- Horizontal scroll container
- 5 testimonial cards with result badges:
  - "📈 +280% Organic Traffic"
  - "🎯 Page 1 Rankings in 60 Days"
  - "💰 ROI: 340% in 6 Months"
  - "⭐ DR Increase: +12 Points"
  - "🤖 Featured in ChatGPT"
- Each card: badge, quote, avatar, name, company

### 14. Final CTA Banner
- Navy background, rounded corners
- Scarcity badge: "⏰ Limited Slots Available This Month"
- H2: "Ready to Dominate Your Niche with High-Authority Links?"
- 3 benefit boxes below
- Large CTAs
- Bottom text: "No credit card required • Free consultation • No contracts"

### 15. FAQ Section
- Off-white background
- Accordion-style FAQ items (8 questions)
- Each item: white card with question + answer

---

## STYLING REQUIREMENTS

### Typography
```tsx
// Headings (use Syne font)
h1: 'font-syne text-5xl md:text-6xl font-extrabold'
h2: 'font-syne text-4xl md:text-5xl font-extrabold'
h3: 'font-syne text-2xl md:text-3xl font-bold'

// Body (use DM Sans font)
body: 'font-sans text-base text-mg-body'
```

### Color Usage
- **Navy sections:** Hero, Process, Final CTA (bg-mg-dark)
- **White sections:** Trust badges, Individual Offerings, Quality, Testimonials (bg-mg-surface)
- **Off-white sections:** Benefits, Packages, Guarantees, FAQ (bg-mg-bg)
- **Orange accents:** All CTAs, highlights, badges (bg-mg-orange)

### Spacing
- Section padding: `py-20` on desktop, `py-12` on mobile
- Container max-width: `max-w-7xl mx-auto px-6`
- Card gaps: `gap-8` on desktop, `gap-6` on mobile

### Animations (Framer Motion)
Use these animation patterns:
```tsx
// Fade in on scroll
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}

// Card hover
whileHover={{ y: -4, transition: { duration: 0.2 } }}

// Stagger children
variants={{
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }
}}
```

---

## COMPONENT STRUCTURE

Break the page into these reusable components in `/components/link-insertions/`:

1. `StickyBar.tsx` (client component - uses scroll state)
2. `Hero.tsx` (server component)
3. `TrustBadges.tsx` (server component)
4. `Benefits.tsx` (client component - motion animations)
5. `ResultsChart.tsx` (client component - animated chart)
6. `Offerings.tsx` (client component - hover effects)
7. `ComparisonTable.tsx` (server component)
8. `Packages.tsx` (client component - featured card animations)
9. `Process.tsx` (server component)
10. `Guarantees.tsx` (client component - hover animations)
11. `Testimonials.tsx` (client component - horizontal scroll)
12. `FinalCTA.tsx` (server component)
13. `FAQ.tsx` (client component - accordion state)

**Main page file:** `/app/link-insertions/page.tsx` imports and assembles all components.

---

## CONSTRAINTS

### FILES YOU WILL CREATE (New files only)
```
/app/link-insertions/page.tsx
/components/link-insertions/StickyBar.tsx
/components/link-insertions/Hero.tsx
/components/link-insertions/TrustBadges.tsx
/components/link-insertions/Benefits.tsx
/components/link-insertions/ResultsChart.tsx
/components/link-insertions/Offerings.tsx
/components/link-insertions/ComparisonTable.tsx
/components/link-insertions/Packages.tsx
/components/link-insertions/Process.tsx
/components/link-insertions/Guarantees.tsx
/components/link-insertions/Testimonials.tsx
/components/link-insertions/FinalCTA.tsx
/components/link-insertions/FAQ.tsx
```

### FILES YOU MUST NOT TOUCH (Existing files - DO NOT MODIFY)
```
❌ /app/layout.tsx
❌ /app/page.tsx
❌ /app/about/page.tsx
❌ /app/guest-posts/page.tsx
❌ /app/blog/page.tsx
❌ /app/contact/page.tsx
❌ /app/packages/page.tsx
❌ /components/* (any existing components)
❌ /app/globals.css
❌ tailwind.config.ts
❌ package.json
❌ next.config.js
❌ Any other existing files
```

**IF YOU NEED TO MODIFY ANY EXISTING FILE → STOP AND ASK FIRST**

### MUST DO
- ✅ Create NEW files ONLY in `/app/link-insertions/` and `/components/link-insertions/`
- ✅ Use "use client" ONLY for components with interactivity (hover, scroll, state)
- ✅ Keep server components by default
- ✅ Extract all copy from HTML preview exactly
- ✅ Use EXISTING colors from globals.css - no new color variables
- ✅ Implement all hover effects and animations
- ✅ Make fully responsive (mobile-first approach)
- ✅ Use Lucide React icons where applicable
- ✅ Add proper TypeScript types
- ✅ Follow Next.js 14 best practices
- ✅ Test on mobile viewport

### MUST NOT DO
- ❌ CRITICAL: Do NOT modify ANY existing files (layout, pages, components, config)
- ❌ Do NOT create new color variables - use existing ones from globals.css
- ❌ Do NOT use inline styles - use Tailwind classes only
- ❌ Do NOT add features beyond what's in the HTML preview
- ❌ Do NOT change the section order or content
- ❌ Do NOT use <Image> component for emoji/simple icons
- ❌ Do NOT add any external dependencies beyond what's already installed
- ❌ Do NOT touch the navigation structure in layout.tsx
- ❌ Do NOT modify other pages (home, about, guest-posts, blog, contact, packages)
- ❌ Do NOT change font families (Syne + DM Sans are already configured)
- ❌ Do NOT modify tailwind.config or globals.css

---

## STOP CONDITIONS

**STOP IMMEDIATELY and ask before:**
1. Modifying ANY existing file outside `/app/link-insertions/` and `/components/link-insertions/`
2. Adding any new npm packages
3. Modifying `tailwind.config.js`, `tailwind.config.ts`, or `globals.css`
4. Changing the navigation structure in `layout.tsx`
5. Touching any existing page files (`page.tsx`, `about/page.tsx`, etc.)
6. Modifying any existing components in `/components/`
7. Changing `package.json`, `next.config.js`, or any config files

**Automatic stops:**
- If you're about to edit a file that already exists → STOP and ask
- If any section doesn't match the HTML preview layout → flag and ask
- If colors don't match the brand palette → flag and ask
- If responsive breakpoints aren't working → flag and ask
- If you need to install a package → STOP and ask

**RULE:** You are ONLY creating 14 NEW files (1 page + 13 components). If you need to modify anything else, something is wrong - STOP and ask.

---

## DELIVERABLE CHECKLIST

After building, verify:
- [ ] Page renders at `/link-insertions` route
- [ ] All 15 sections present in correct order
- [ ] Sticky bar stays fixed on scroll
- [ ] Smooth scroll to #packages works
- [ ] All hover animations work
- [ ] Traffic chart animates on scroll
- [ ] Featured package card has orange ribbon + scale
- [ ] Testimonials scroll horizontally
- [ ] FAQ accordion works (if implemented)
- [ ] Mobile responsive (test at 375px, 768px, 1024px, 1440px)
- [ ] No TypeScript errors
- [ ] No console warnings
- [ ] Fonts load correctly (Syne + DM Sans)
- [ ] All CTAs link to correct anchors (#packages, #contact)

---

## SUCCESS CRITERIA

The page MUST:
1. Look identical to the HTML preview on desktop
2. Be fully functional on mobile
3. Have smooth animations and interactions
4. Load in under 2 seconds
5. Have zero accessibility warnings
6. Match MaiGrowth brand 100%
7. **Be completely isolated** - ZERO existing files modified

**One-shot goal:** User can navigate to `/link-insertions`, click "View Packages & Pricing", scroll through the page, click "Purchase Package" on the Advanced tier, and have a seamless sales-optimized experience that converts - all WITHOUT breaking any existing pages or components.

**Proof of success:** Website still works exactly as before + new Link Insertions page is live.

---

## EXECUTION SEQUENCE

1. **First:** Create component files in `/components/link-insertions/` (13 new files)
2. **Second:** Build main page at `/app/link-insertions/page.tsx` (1 new file)
3. **Third:** Test each section individually
4. **Fourth:** Test full page scroll and interactions
5. **Fifth:** Test responsive on mobile
6. **Final:** Report completion with confirmation that NO existing files were modified

**Total files created: 14**
**Total files modified: 0**

Start with the Sticky Bar and Hero components, then work down the page in order.

---

## FINAL VERIFICATION - Before Reporting Complete

**Confirm ALL of these:**
- [ ] Created exactly 14 NEW files (1 page + 13 components)
- [ ] Modified ZERO existing files
- [ ] Did NOT touch layout.tsx, other pages, or existing components
- [ ] Did NOT modify tailwind.config, globals.css, or package.json
- [ ] Did NOT install any new npm packages
- [ ] Page renders at `/link-insertions` route
- [ ] All 15 sections present in correct order
- [ ] Sticky bar stays fixed on scroll
- [ ] Smooth scroll to #packages works
- [ ] All hover animations work
- [ ] Traffic chart animates on scroll
- [ ] Featured package card has orange ribbon + scale
- [ ] Testimonials scroll horizontally
- [ ] Mobile responsive (test at 375px, 768px, 1024px, 1440px)
- [ ] No TypeScript errors
- [ ] No console warnings
- [ ] Fonts load correctly (Syne + DM Sans from existing config)
- [ ] All CTAs link to correct anchors (#packages, #contact)

**IF ANY EXISTING FILE WAS MODIFIED → ROLLBACK AND ASK FOR GUIDANCE**
