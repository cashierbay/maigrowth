# MaiGrowth Design System

A complete reference for colors, typography, spacing, components, and animation used across the MaiGrowth website.

---

## Brand Colors

| Token | Hex | Usage |
|---|---|---|
| `mg-orange` | `#FF6B35` | Primary CTA, section labels, accents, icons |
| `mg-orange-hover` | `#E85A25` | btn-primary hover state |
| `mg-orange-light` | `#FFF0EB` | Tag backgrounds, orange tint fills |
| `mg-dark` | `#12153D` | Hero, footer, dark sections background |
| `mg-dark-card` | `#1C2050` | Dark card background |
| `mg-dark-border` | `#2A2F6A` | Dark card border |
| `mg-bg` | `#F7F6F4` | Default page background |
| `mg-surface` | `#FFFFFF` | Card backgrounds, light surfaces |
| `mg-surface-alt` | `#EFEFED` | Alternate section backgrounds |
| `mg-ink` | `#0F0F0F` | Headings, primary text |
| `mg-body` | `#3D3D3D` | Body text |
| `mg-muted` | `#767676` | Secondary text, captions |
| `mg-border` | `#E2E0DC` | Card borders, dividers |
| `mg-border-dark` | `#C8C5BF` | Card border on hover |

---

## Section Background Palette

Sections alternate between these backgrounds top-to-bottom:

| Background | Hex | Sections Using It |
|---|---|---|
| Dark Navy | `#12153D` | Hero, Footer, CTABanner, Mission Statement |
| Off-White | `#F7F6F4` | HowItWorks, HomeFAQ, page default |
| Light Grey | `#EFEFED` | ServicesOverview, FeaturesSection, TrustSection, Our Values |
| White | `#FFFFFF` | WhyMaiGrowth, TeamSection |

---

## Typography

### Font Families

| Font | Weights | Usage |
|---|---|---|
| **Syne** | 700, 800 | All headings (H1–H4), brand name, btn-primary, btn-secondary, step numbers |
| **DM Sans** | 400, 500, 600 | All body text, labels, tags, captions, nav links |

Loaded via Google Fonts in `index.html`:
```html
https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap
```

### Type Scale

| Element | Font | Weight | Size | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| Hero H1 | Syne | 800 | `clamp(48px, 7vw, 88px)` | 1.0 | -0.03em |
| Page H1 | Syne | 800 | `clamp(36px, 5.5vw, 68px)` | 1.05 | -0.02em |
| Section H2 | Syne | 700 | `clamp(28px, 3.5vw, 46–52px)` | 1.1 | -0.01em |
| Sub H2 | Syne | 700 | `clamp(24px, 3vw, 38–42px)` | 1.15–1.2 | -0.01em |
| Card H3 | Syne | 700 | `18–22px` | 1.2 | — |
| Section Label | DM Sans | 600 | `11px` | — | 0.14em uppercase |
| Body (large) | DM Sans | 400 | `16–17px` | 1.7–1.8 | — |
| Body (standard) | DM Sans | 400 | `14–15px` | 1.65–1.75 | — |
| Body (small) | DM Sans | 400 | `13px` | 1.7 | — |
| Tag / Badge | DM Sans | 600 | `10–12px` | — | 0.04–0.14em |
| Nav links | DM Sans | 500–600 | `14px` | — | — |

---

## Buttons

### `.btn-primary`
- Background: `#FF6B35`
- Text: white, Syne 700, 15px
- Shape: `rounded-full` (pill)
- Padding: `py-3.5 px-7`
- Hover: bg `#E85A25`, shadow `0 8px 24px rgba(255,107,53,0.3)`
- Active: `scale(0.98)`
- Framer hover: `scale: 1.03, boxShadow: 0 8px 28px rgba(255,107,53,0.32)`
- Framer tap: `scale: 0.97`

### `.btn-secondary`
- Background: transparent
- Border: `2px solid #0F0F0F`
- Text: `#0F0F0F`, Syne 700, 15px
- Shape: `rounded-full`
- Hover: bg `#0F0F0F`, text white
- Framer hover: `scale: 1.02`

### `.btn-ghost`
- Background: transparent
- Border: `2px solid white`
- Text: white, Syne 700, 15px
- Shape: `rounded-full`
- Hover: bg white, text `#12153D`
- Used only on dark navy sections
- Framer hover: `scale: 1.02`

---

## Cards

### `.mg-card`
- Background: `#FFFFFF`
- Border: `1px solid #E2E0DC`
- Radius: `rounded-2xl` (16px)
- Padding: `p-8` (32px)
- Hover: `translateY(-2px)`, shadow `0 8px 32px rgba(0,0,0,0.08)`, border `#C8C5BF`
- Framer whileHover: `y: -6 to -9`, `boxShadow: 0 14–20px 40–60px rgba(255,107,53,0.09–0.18)`

### `.mg-card-dark`
- Background: `#1C2050`
- Border: `1px solid #2A2F6A`
- Radius: `rounded-2xl`
- Padding: `p-8`
- Hover: `translateY(-2px)`, shadow `0 8px 32px rgba(0,0,0,0.3)`

---

## Tags / Badges

### `.tag` (orange)
- Background: `#FFF0EB`
- Text: `#FF6B35`, DM Sans 600, 12px
- Shape: `rounded-full`
- Padding: `px-3 py-1`

### `.tag-neutral` (grey)
- Background: `#EFEFED`
- Text: `#767676`, DM Sans 600, 12px
- Border: `1px solid #E2E0DC`
- Shape: `rounded-full`
- Padding: `px-3 py-1`

---

## Navigation

### Navbar
- Height: `72px`
- Scrolled: bg `rgba(255,255,255,0.95)`, `backdrop-filter: blur(8px)`, border `#E2E0DC`, shadow `0 1px 12px rgba(0,0,0,0.06)`
- Transparent on dark hero

### Nav Links
- Class: `.nav-link-underline`
- Font: DM Sans 500 (600 when active), 14px
- Default color (scrolled): `#3D3D3D`
- Default color (transparent): `rgba(255,255,255,0.8)`
- Active color: `#FF6B35`
- Hover effect: orange `2px` underline slides in from left (`::after` pseudo-element, `width: 0 → 100%`, transition `0.25s ease`)

---

## Section Spacing

| Context | Padding |
|---|---|
| Standard section | `padding: 112px 0` |
| Tighter section | `padding: 96px 0` |
| Larger section | `padding: 120px 0` |
| Section container | `max-w-7xl mx-auto px-6` |
| Narrow container | `max-w-3xl mx-auto px-6` |
| Section header bottom margin | `mb-14 to mb-20` |
| Card grid gap | `gap-6` |

---

## Animations

### Library
**Framer Motion** — all scroll and hover animations.

### Easing Curve
```js
ease: [0.22, 1, 0.36, 1]
```
Used consistently across all fade-up, stagger, and slide animations.

### Scroll Animations

#### `AnimatedSection` component
- Trigger: `whileInView`, `once: true`, `amount: 0.12`
- From: `opacity: 0, y: 28`
- To: `opacity: 1, y: 0`
- Duration: `0.55s`

#### `StaggerGroup` / `StaggerItem` components
- Group triggers with `staggerChildren: 0.12`
- Each item: `opacity: 0, y: 24` → `opacity: 1, y: 0`
- Duration: `0.5s` per item

### Hover Animations (Framer Motion)

| Element | whileHover | whileTap |
|---|---|---|
| `.btn-primary` | `scale: 1.03, boxShadow: 0 8px 28px rgba(255,107,53,0.32)` | `scale: 0.97` |
| `.btn-secondary` | `scale: 1.02` | `scale: 0.97` |
| `.btn-ghost` | `scale: 1.02` | `scale: 0.97` |
| Standard cards | `y: -6, boxShadow: 0 14px 40px rgba(0,0,0,0.09)` | — |
| Featured card | `y: -9, boxShadow: 0 20px 60px rgba(255,107,53,0.18)` | — |
| Trust/Values cards | `y: -6, borderColor: #FF6B35, boxShadow: ...` | — |
| Feature boxes | `scale: 1.04, borderColor: #FF6B35` | — |
| Icon circles | `rotate: 10, scale: 1.12` | — |
| FAQ item (open) | Left border `3px solid #FF6B35` | — |
| Step numbers | `opacity: 0.06 → 0.38` | — |

All hover transitions: `duration: 0.18–0.22, ease: easeOut`

---

## Grid Layouts

| Section | Layout |
|---|---|
| Services, Features, Trust | `grid-cols-1 md:grid-cols-3 gap-6` |
| How It Works steps | `grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6` |
| Why MaiGrowth features | `grid-cols-2 gap-4` |
| Stats (About) | `3-column` card row |
| Team | `repeat(auto-fit, minmax(260px, 1fr)) gap-5` |
| Values (About) | 2-col split: text left + 3 stacked cards right |
| Blog | `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6` |
| Contact | 2-col: form left + info right |

---

## Gradient Dividers

Used to transition between dark and light sections:
```css
background: linear-gradient(to bottom, #12153D, #F7F6F4)
height: 64px
```

---

## Dark Section Pattern

```css
background-color: #12153D;
background-image:
  linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
  linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
background-size: 60px 60px;
```
Used on: Hero, About hero, dark CTA sections.

---

## Shared Components

| Component | Path | Purpose |
|---|---|---|
| `AnimatedSection` | `components/shared/AnimatedSection.tsx` | Scroll fade-up wrapper |
| `StaggerGroup` | `components/shared/StaggerGroup.tsx` | Stagger parent container |
| `StaggerItem` | `components/shared/StaggerGroup.tsx` | Each staggered child item |
| `Navbar` | `components/layout/Navbar.tsx` | Top navigation |
| `Footer` | `components/layout/Footer.tsx` | Site footer |
| `TeamSection` | `components/about/TeamSection.tsx` | About page team grid |

---

## Routing (Wouter)

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/services` | Services |
| `/blog` | Blog index |
| `/blog/:slug` | Blog post |
| `/contact` | Contact |
| `/admin` | Admin lead dashboard (URL-only, no nav link) |
