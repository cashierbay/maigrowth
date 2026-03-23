# BUILD MAIGROWTH PACKAGES PAGE - PREMIUM WITH ANIMATIONS

## ⚠️ CRITICAL - READ FIRST

**THIS IS A NEW PAGE ADDITION TO AN EXISTING WORKING WEBSITE**

You will create files in `/app/packages/` and `/components/packages/`.

**YOU MUST NOT:**
- ❌ Modify ANY existing files outside `/app/packages` and `/components/packages`
- ❌ Touch layout.tsx, other pages, or existing components
- ❌ Change tailwind.config, globals.css, or package.json
- ❌ Add new npm packages

**IF YOU NEED TO MODIFY AN EXISTING FILE → STOP AND ASK**

---

## CONTEXT - Project State

**Current Project:** MaiGrowth website (Next.js 14 App Router + Tailwind CSS + Framer Motion + Lucide React)

**Tech Stack:**
- Next.js 14 with App Router
- Tailwind CSS (configured)
- Framer Motion (installed - USE FOR ANIMATIONS)
- Lucide React (installed)
- Fonts: Syne (700, 800) + DM Sans (400, 500, 600)

**Existing Pages:**
- Home, About, Guest Posts, Link Insertions, Blog, Contact

**Navigation Structure:**
Home | Guest Posts | Link Insertions | **Packages** | About | Blog | Contact

**Brand Colors (in globals.css):**
```css
--mg-bg: #F7F6F4;
--mg-surface: #FFFFFF;
--mg-dark: #12153D;
--mg-orange: #FF6B35;
--mg-orangeHov: #E85A25;
--mg-orangeLight: #FFF0EB;
--mg-green: #00C47A;
```

---

## TASK

Build the **Packages page** at `/app/packages/page.tsx` with:
1. **Million-dollar agency design** (premium, sophisticated, non-generic)
2. **Scroll-triggered animations** (Framer Motion)
3. **AI-themed visual elements** (gradient meshes, particles, glowing effects)
4. **Conversion-optimized copy** (outcome-focused, power language)

**Reference:** `/mnt/user-data/uploads/packages-preview.html` (contains complete design)

---

## ANIMATION & AI TOUCH REQUIREMENTS

### **CRITICAL: Use Framer Motion for ALL animations**

**DO NOT use CSS animations for scroll-triggered effects. Use Framer Motion.**

### **1. Animated Gradient Background (Hero)**
```tsx
// Hero section background
background: "linear-gradient(-45deg, #12153D, #1a1f4d, #1e2557, #12153D)"
backgroundSize: "400% 400%"
animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
```

**Add 2 floating gradient orbs:**
```tsx
<motion.div
  className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px]"
  style={{ background: "radial-gradient(circle, rgba(255, 107, 53, 0.15), transparent 70%)" }}
  animate={{ y: [0, -20, 0] }}
  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
/>
```

### **2. Floating Particles (Hero)**
Create 9 small glowing dots that float upward:
```tsx
{[...Array(9)].map((_, i) => (
  <motion.div
    key={i}
    className="absolute w-1 h-1 bg-mg-orange/60 rounded-full"
    style={{ left: `${(i + 1) * 10}%` }}
    animate={{
      y: [-800, 0],
      opacity: [0, 1, 1, 0]
    }}
    transition={{
      duration: 15,
      repeat: Infinity,
      delay: i * 2,
      ease: "linear"
    }}
  />
))}
```

### **3. Number Counter Animation (Stats)**
Use Framer Motion + custom hook:
```tsx
import { useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / 60;
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 25);
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}
```

### **4. Scroll Reveal (All Sections)**
Use Framer Motion's `motion` + `useInView`:
```tsx
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
>
  {/* Content */}
</motion.div>
```

**Stagger children:**
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

<motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
  {items.map(item => (
    <motion.div key={item.id} variants={itemVariants}>
      {/* Item */}
    </motion.div>
  ))}
</motion.div>
```

### **5. Package Card Animations**
3D tilt + hover effect:
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  whileHover={{
    y: -12,
    rotateX: 2,
    transition: { duration: 0.3 }
  }}
  className="package-card"
>
  {/* Card content */}
</motion.div>
```

**Featured card glow pulse:**
```tsx
<motion.div
  animate={{
    boxShadow: [
      "0 24px 72px rgba(255, 107, 53, 0.2)",
      "0 24px 72px rgba(255, 107, 53, 0.4)",
      "0 24px 72px rgba(255, 107, 53, 0.2)"
    ]
  }}
  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  className="package-card featured"
>
  {/* Featured card */}
</motion.div>
```

### **6. AI Badge Shimmer Effect**
```tsx
<motion.div
  className="relative overflow-hidden bg-gradient-to-r from-mg-orange to-mg-orangeHov text-white px-5 py-2 rounded-full"
  animate={{
    boxShadow: [
      "0 0 20px rgba(255, 107, 53, 0.4)",
      "0 0 40px rgba(255, 107, 53, 0.8)",
      "0 0 20px rgba(255, 107, 53, 0.4)"
    ]
  }}
  transition={{ duration: 3, repeat: Infinity }}
>
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
    animate={{
      x: ["-200%", "200%"]
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "linear"
    }}
  />
  🤖 AI & LLM Ready
</motion.div>
```

---

## SECTION SPECIFICATIONS

### **1. Hero Section**
```tsx
<section className="relative bg-gradient-to-br from-mg-dark via-[#1a1f4d] to-mg-dark overflow-hidden">
  {/* Animated gradient orbs */}
  {/* Floating particles */}
  <div className="container relative z-10 py-40 text-center text-white">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="inline-flex items-center gap-2 bg-mg-orange/15 border border-mg-orange/30 text-mg-orange px-6 py-2 rounded-full mb-8"
    >
      🤖 Complete Campaign Packages • Guest Posts + Link Insertions
    </motion.div>
    
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-7xl font-extrabold mb-8"
    >
      Stop Buying Links.
      <span className="block text-mg-orange">Start Building Dominance.</span>
    </motion.h1>
    
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="text-xl text-white/90 max-w-3xl mx-auto mb-12"
    >
      The only link building system that gets you ranked <strong>AND</strong> cited in ChatGPT, Perplexity, and every AI answer engine that matters.
    </motion.p>
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="flex gap-4 justify-center"
    >
      <Link href="#packages" className="btn-primary">See Campaign Packages</Link>
      <Link href="#contact" className="btn-secondary">Book Strategy Session</Link>
    </motion.div>
  </div>
</section>
```

### **2. Social Proof Stats (with Counter Animation)**
```tsx
<section className="bg-white py-8 border-b border-mg-border">
  <div className="container">
    <div className="grid grid-cols-4 gap-8">
      {[
        { number: 500, suffix: "+", label: "Agencies Trust Us" },
        { number: 10000, suffix: "+", label: "Links Placed" },
        { number: 98, suffix: "%", label: "Client Retention" },
        { number: 5600, suffix: "%", label: "Record Traffic Increase" }
      ].map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="text-center"
        >
          <div className="text-4xl font-extrabold text-mg-orange font-syne">
            <Counter end={stat.number} suffix={stat.suffix} />
          </div>
          <div className="text-sm text-mg-muted uppercase tracking-wider">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
```

### **3. Problem/Solution Section**
2-column grid with scroll reveal. Each block fades in + slides up.

### **4. Packages Section**
**CRITICAL DESIGN:**
- 5 cards in responsive grid
- Featured card (Advanced): scale(1.05), orange border, continuous glow pulse
- Each card: 3D tilt on hover (translateY + rotateX)
- Stagger reveal animation (0.1s delay between cards)

**Package Names (Use these exactly):**
1. Market Entry ($1,299) - "Establish Your Footprint"
2. Momentum Builder ($2,699) - "Accelerate Past Competitors"
3. **Authority Takeover** ($5,399) - FEATURED - "Own Your Category"
4. Market Leader ($8,999) - "Dominate Every Search Position"
5. Industry Standard ($14,999) - "Become The Reference"

**Each card shows:**
- Emoji + Name + Tagline
- Description
- Price + Was price + $ saved
- Feature list (with → arrows)
- Per-link price + Save %
- CTA button

**Featured card badge:**
```tsx
<motion.div
  className="absolute -top-3 right-6 bg-gradient-to-r from-mg-orange to-mg-orangeHov text-white px-6 py-2 rounded-full font-bold text-sm"
  animate={{ boxShadow: ["0 4px 12px rgba(255,107,53,0.3)", "0 4px 20px rgba(255,107,53,0.6)", "0 4px 12px rgba(255,107,53,0.3)"] }}
  transition={{ duration: 3, repeat: Infinity }}
>
  🔥 AGENCY FAVORITE
</motion.div>
```

### **5. Value Breakdown Section**
Navy background. 3-column grid showing component pricing.
Each card fades in on scroll.

### **6. Process Section (5 Steps)**
White background. 5 steps in grid.
Steps animate in with stagger effect.
Each has deliverable box that slides in.

### **7. Case Studies (3 Cards)**
Story arc format: Challenge → Strategy → Result
Cards flip/reveal on scroll
Stats inside cards count up when visible

### **8. Comparison Table**
MaiGrowth vs DIY vs Competitors
Checkmarks appear with stagger animation

### **9. Testimonials (3 Cards)**
Investment + ROI metrics in each
Cards slide in from sides (alternating left/right)

### **10. FAQ (6 Items)**
Accordion-style with smooth expand/collapse animations

### **11. Final CTA**
Navy background
"Two Paths" binary choice presentation
Path boxes slide in from left/right

---

## COPY SPECIFICATIONS

**Use this exact tone and style:**

✅ **DO:**
- Power language: "Dominate", "Own", "Takeover", "Untouchable"
- Specific numbers: "27 strategic placements", "47-page battle plan"
- Challenge assumptions: "Wrong question. Ask this instead..."
- Outcome-focused: "Own Your Category" (not "get more links")
- Reframe discounts: "You save $1,216 + But more importantly: You get a SYSTEM"

❌ **DON'T:**
- Generic language: "high-quality", "industry-leading"
- Discount-focused: "Save 10%" as primary message
- Safe corporate tone
- Feature lists without context

**Example FAQ answer:**
```
Q: How long until I see results?

A: Wrong question. Ask this instead: "How long until I'm untouchable?"

Rankings move in 14-60 days depending on competition. But if you're asking when you'll OWN your category—when competitors give up trying to outrank you—that's 6-12 months of consistent campaigns.

We're not here for quick wins. We build empires.
```

---

## COMPONENT STRUCTURE

Create these components in `/components/packages/`:

1. **AnimatedHero.tsx** (client) - Hero with particles, gradient, animations
2. **StatsCounter.tsx** (client) - Number counter component
3. **ProblemSolution.tsx** (server) - Problem/solution grid
4. **PackageCards.tsx** (client) - 5 package cards with animations
5. **ValueBreakdown.tsx** (server) - Component pricing section
6. **ProcessSteps.tsx** (client) - 5-step process with animations
7. **CaseStudies.tsx** (client) - 3 case study cards
8. **ComparisonTable.tsx** (server) - Comparison table
9. **Testimonials.tsx** (client) - Testimonial cards with metrics
10. **FAQ.tsx** (client) - Accordion FAQ
11. **FinalCTA.tsx** (server) - Two paths CTA

**Main page:** `/app/packages/page.tsx` imports and assembles all components

---

## STYLING REQUIREMENTS

**Typography:**
```tsx
h1: "font-syne text-7xl font-extrabold"
h2: "font-syne text-5xl font-extrabold"
h3: "font-syne text-3xl font-bold"
body: "font-sans text-base"
```

**Spacing:**
```tsx
Section padding: "py-32" (desktop), "py-16" (mobile)
Container: "max-w-7xl mx-auto px-6"
Card gaps: "gap-8"
```

**Colors:**
- Navy sections: Hero, Value Breakdown, Final CTA
- White sections: Stats, Process, Comparison, FAQ
- Off-white sections: Problem/Solution, Packages, Case Studies, Testimonials

---

## ANIMATION CHECKLIST

Before completing, verify:
- [ ] Hero gradient animates (background position shift)
- [ ] 2 gradient orbs float in hero
- [ ] 9 particles float upward in hero
- [ ] Stats counter animates when scrolled into view
- [ ] All sections fade in + slide up on scroll
- [ ] Package cards stagger reveal (0.1s delay each)
- [ ] Featured card has continuous glow pulse
- [ ] Package cards tilt 3D on hover
- [ ] AI badges have shimmer effect
- [ ] Process steps animate in sequence
- [ ] Case study stats count up when visible
- [ ] Testimonial cards slide in from sides
- [ ] Two Paths boxes slide in from left/right
- [ ] All animations use Framer Motion (NOT CSS keyframes for scroll effects)

---

## CONSTRAINTS

**Files you WILL create:**
```
/app/packages/page.tsx
/components/packages/AnimatedHero.tsx
/components/packages/StatsCounter.tsx
/components/packages/ProblemSolution.tsx
/components/packages/PackageCards.tsx
/components/packages/ValueBreakdown.tsx
/components/packages/ProcessSteps.tsx
/components/packages/CaseStudies.tsx
/components/packages/ComparisonTable.tsx
/components/packages/Testimonials.tsx
/components/packages/FAQ.tsx
/components/packages/FinalCTA.tsx
```

**Files you MUST NOT touch:**
```
❌ /app/layout.tsx
❌ /app/page.tsx (home)
❌ /app/guest-posts/page.tsx
❌ /app/link-insertions/page.tsx
❌ /app/globals.css
❌ tailwind.config.ts
❌ package.json
```

---

## STOP CONDITIONS

**STOP IMMEDIATELY and ask before:**
1. Modifying ANY existing file outside `/app/packages/` and `/components/packages/`
2. Installing any npm packages
3. Changing globals.css or tailwind.config
4. Creating more than 12 component files

---

## EXECUTION SEQUENCE

**Phase 1:** Animation setup
1. Create AnimatedHero.tsx with gradient, orbs, particles
2. Create StatsCounter.tsx with number animation
3. Test animations work

**Phase 2:** Package cards
4. Create PackageCards.tsx with 5 cards + featured styling
5. Test 3D tilt, glow pulse, stagger reveal

**Phase 3:** Remaining sections
6. Create all other components
7. Assemble in page.tsx

**Phase 4:** Polish
8. Test all scroll animations
9. Test mobile responsive
10. Verify animations perform well

---

## SUCCESS CRITERIA

The page MUST:
1. Have smooth, professional animations (not janky)
2. Use Framer Motion for ALL scroll-triggered effects
3. Match the premium design from the HTML preview
4. Have AI-themed visual elements (particles, glows, gradients)
5. Be fully responsive on mobile
6. Load smoothly (no animation lag)
7. Have zero TypeScript errors
8. Not break any existing pages

**One-shot goal:** User lands on `/packages`, sees premium animated page with AI touches, understands value instantly, and converts.

Only make changes directly requested. Do not add extra features, files, or abstractions beyond what's specified.
