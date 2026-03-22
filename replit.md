# MaiGrowth Website

A production-ready marketing website for MaiGrowth — a global link building and AI search optimization agency.

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Routing**: Wouter (client-side)
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS with custom MaiGrowth brand design system
- **Icons**: Lucide React
- **Fonts**: Syne (700/800) + DM Sans (400/500/600) via Google Fonts
- **Backend**: Express.js (minimal, serves static files)
- **Blog**: Client-side markdown rendering with post data in `client/src/lib/posts.ts`

## Pages

- `/` — Home page (Hero, Problem, Services Overview, Why MaiGrowth, Features, Comparison Table, How It Works, Trust, Testimonials, FAQ, CTA)
- `/about` — About page (Story, Stats, Values, Mission)
- `/guest-posts` — Guest Posts service page (DR tiers, packages, FAQ, testimonials)
- `/link-insertions` — Link Insertions service page (15 sections: Hero, Trust Badges, Benefits, Results Chart, Offerings, Bulk Savings, Comparison Table, Packages, Process, Quality, Guarantees, Testimonials, Final CTA, FAQ)
- `/blog` — Blog listing (6 educational articles)
- `/blog/:slug` — Individual blog post with sidebar TOC and related posts
- `/contact` — Contact form with success state

## Brand Design System

Custom `mg-*` color tokens in Tailwind:
- `mg-bg`: #F7F6F4 (primary page background)
- `mg-surface`: #FFFFFF
- `mg-surfaceAlt`: #EFEFED
- `mg-dark`: #12153D (navy — hero sections & footer)
- `mg-orange`: #FF6B35 (accent)
- `mg-ink`: #0F0F0F (primary text)
- `mg-body`: #3D3D3D
- `mg-muted`: #767676

## Custom CSS Classes

Defined in `client/src/index.css`:
- `.section-label` — orange uppercase label above headings
- `.btn-primary` — filled orange CTA button
- `.btn-secondary` — outlined dark button
- `.btn-ghost` — outlined white button (for dark backgrounds)
- `.mg-card` — white card with hover elevation
- `.tag` — orange pill badge
- `.tag-neutral` — neutral gray pill badge

## Blog System

Blog posts are defined as data in `client/src/lib/posts.ts` (6 articles included):
1. What Is AEO? — Complete Guide 2025
2. GEO vs. SEO — Future of Search
3. Get Brand Cited in ChatGPT/Perplexity
4. Link Building in the AI Era
5. Google AI Overviews Guide
6. The Citation Economy

To add new blog posts, add entries to the `postData` array in `client/src/lib/posts.ts`.

## Key Features

- Fixed navbar with scroll-triggered background change
- Mobile menu with Framer Motion slide-in animation
- Auto-scrolling testimonials carousel with hover pause
- CountUp number animations on scroll entry
- FAQ accordions with AnimatePresence
- Contact form with client-side validation and success state
- Blog post sidebar with table of contents and related articles
- Navy hero sections + gradient transitions to light content areas
