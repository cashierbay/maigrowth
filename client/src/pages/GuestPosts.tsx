import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  Award,
  Globe2,
  FileText,
  Link2,
  Target,
  BarChart2,
  PenLine,
  CheckCircle2,
  Plus,
  ShieldOff,
  BarChart,
  BookOpen,
  Users,
  Star,
  X,
  Shield,
  Banknote,
  Bot,
  ShieldCheck,
  Lock,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.55, ease: EASE },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

const DOT_GRID = {
  backgroundImage:
    "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
};

const ORANGE_GLOW = {
  background:
    "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255,107,53,0.08), transparent)",
};

const heroWords = "Guest Post Services That Rank on Google AND Get Cited by AI.".split(" ");

const HERO_STATS = [
  { value: "500+", label: "Happy Clients" },
  { value: "10K+", label: "Links Placed" },
  { value: "98%", label: "Success Rate" },
  { value: "DR 60+", label: "Max Authority" },
];

const TRUST_BADGES = [
  { icon: ShieldCheck, label: "100% White-Hat Methods" },
  { icon: Lock, label: "12-Month Link Guarantee" },
  { icon: BarChart2, label: "1,000+ Monthly Traffic Min" },
  { icon: Bot, label: "AI & LLM Optimized" },
  { icon: Banknote, label: "Money-Back Guarantee" },
];

const CHART_BARS = [
  { label: "Month 1", height: 30, pct: "100%" },
  { label: "Month 3", height: 50, pct: "182%" },
  { label: "Month 6", height: 75, pct: "231%" },
  { label: "Month 12", height: 100, pct: "340%" },
];

const CHART_RESULTS = [
  "Average 240% traffic increase within 90 days",
  "First page rankings for target keywords",
  "Domain authority boost of 5–15 points",
  "Citations in AI answers (ChatGPT, Perplexity)",
  "100% natural backlink profile with zero penalties",
];

const COMPARISON_ROWS = [
  { feature: "AI & LLM Optimization", others: false, mai: true },
  { feature: "Guaranteed Minimum Traffic", others: false, mai: true },
  { feature: "Link Replacement Guarantee", others: false, mai: true },
  { feature: "Original Content (not spun)", others: false, mai: true },
  { feature: "Pre-Approval Option", others: false, mai: true },
  { feature: "Dedicated Account Manager", others: false, mai: true },
  { feature: "White-Hat Practices", others: false, mai: true },
  { feature: "Fast Turnaround (21 days avg)", others: false, mai: true },
];

const FAQ_ITEMS = [
  {
    q: "What is a guest posting service?",
    a: "A guest posting service secures editorial placements on external, high-authority websites on your behalf. MaiGrowth handles the entire process — site prospecting, manual outreach to bloggers and editors, content writing, placement, and reporting. You receive a live link on a real website with genuine organic traffic.",
  },
  {
    q: "Are all guest posts do-follow?",
    a: "Yes — all MaiGrowth guest post placements are do-follow backlinks. We only target sites that allow do-follow editorial links. We verify this before pitching any placement and confirm it in your final placement report.",
  },
  {
    q: "Can I provide my own anchor text and target URLs?",
    a: "Absolutely. You provide your preferred anchor texts and target URLs during onboarding. Our writers and outreach team incorporate them naturally into the content to ensure they read as organic editorial placements — not forced insertions.",
  },
  {
    q: "Can I approve sites before publishing?",
    a: "Yes. We offer full site pre-approval. You can review the prospected domains, set DR and traffic minimums, exclude specific niches or competitors, and approve or reject any site before content is created or submitted.",
  },
  {
    q: "How do MaiGrowth guest posts help with AEO and GEO?",
    a: "Beyond Google rankings, MaiGrowth guest posts are placed on high-authority sites that AI engines like ChatGPT, Perplexity, and Google's AI Overviews regularly reference. Consistent brand mentions and links from trusted sources build your entity authority — making AI tools more likely to cite your brand when users ask questions in your niche.",
  },
  {
    q: "What niches do you work with?",
    a: "We work with most niches including SaaS, e-commerce, finance, health, legal, real estate, technology, marketing, education, and more. We do not place links in casino, CBD, adult, or spam niches. If you are in a regulated industry, contact us first and we will confirm availability.",
  },
  {
    q: "How long does a guest post campaign take?",
    a: "Individual placements typically go live within 21 days of order. Package campaigns depend on volume — a 5-link package is typically completed within 45–60 days. You receive a real-time update when each link goes live.",
  },
  {
    q: "What reporting do I receive?",
    a: "You receive a comprehensive placement report for each link including: live URL, domain DR and DA, monthly organic traffic (Ahrefs), anchor text used, target URL, indexation status, and publication date. Reports are available in CSV and PDF format.",
  },
];

const DR_TIERS = [
  {
    dr: "DR30+",
    title: "DR 30+ Guest Post",
    gradient: "linear-gradient(135deg, #FF4500 0%, #FF6B35 40%, #1a0a00 100%)",
  },
  {
    dr: "DR40+",
    title: "DR 40+ Guest Post",
    gradient: "linear-gradient(135deg, #D4A017 0%, #F5C842 40%, #1a1200 100%)",
  },
  {
    dr: "DR50+",
    title: "DR 50+ Guest Post",
    gradient: "linear-gradient(135deg, #0A7A4A 0%, #1DB97A 40%, #001a0e 100%)",
  },
  {
    dr: "DR60+",
    title: "DR 60+ Guest Post",
    gradient: "linear-gradient(135deg, #0A3A7A 0%, #1A6FD4 40%, #00091a 100%)",
  },
];

const PACKAGES = [
  {
    emoji: "🌱",
    name: "Slow Burner",
    desc: "Entry-level link building. Focuses on foundational organic search performance.",
    price: "$497",
    oldPrice: "$537",
    savings: "Save 7%",
    perPost: "$166/post",
    features: [
      "3× DR 30+ Guest Posts",
      "1,000+ word original content",
      "Manual blogger outreach",
      "Full placement report",
      "12-month link guarantee",
    ],
    featured: false,
  },
  {
    emoji: "🚀",
    name: "Launch Pad",
    desc: "Ideal for maintaining rankings and establishing domain authority.",
    price: "$1,049",
    oldPrice: "$1,145",
    savings: "Save 8%",
    perPost: "$210/post",
    features: [
      "3× DR 30+ Guest Posts",
      "1× DR 40+ Guest Post",
      "1× DR 50+ Guest Post",
      "Dedicated account manager",
      "Full placement report",
      "12-month guarantee",
    ],
    featured: false,
  },
  {
    emoji: "✨",
    name: "Growth",
    desc: "For businesses expanding online presence with increased traffic and higher rankings.",
    price: "$1,799",
    oldPrice: "$2,041",
    savings: "Save 12%",
    perPost: "$200/post",
    features: [
      "5× DR 30+ Guest Posts",
      "3× DR 40+ Guest Posts",
      "1× DR 50+ Guest Post",
      "Priority outreach",
      "AI & LLM optimised placements",
      "Dedicated account manager",
      "Full placement report",
      "12-month guarantee",
    ],
    featured: true,
  },
  {
    emoji: "💪",
    name: "Authority",
    desc: "Establish your brand as an industry leader and significantly boost domain rating.",
    price: "$3,799",
    oldPrice: "$4,512",
    savings: "Save 16%",
    perPost: "$211/post",
    features: [
      "10× DR 30+ Guest Posts",
      "3× DR 40+ Guest Posts",
      "3× DR 50+ Guest Posts",
      "2× DR 60+ Guest Posts",
      "Priority account manager",
      "Weekly progress updates",
      "Full placement report",
      "12-month guarantee",
    ],
    featured: false,
  },
  {
    emoji: "🏆",
    name: "Domination",
    desc: "The definitive solution for industry-leading organic visibility and sustainable SEO.",
    price: "$4,999",
    oldPrice: "$6,180",
    savings: "Save 19%",
    perPost: "$250/post",
    features: [
      "5× DR 30+ Guest Posts",
      "5× DR 40+ Guest Posts",
      "5× DR 50+ Guest Posts",
      "5× DR 60+ Guest Posts",
      "Dedicated senior manager",
      "Bi-weekly strategy calls",
      "AI & LLM visibility audit",
      "Full placement report",
      "12-month guarantee",
    ],
    featured: false,
  },
];

const GUARANTEES = [
  {
    icon: Shield,
    emoji: "🛡️",
    title: "12-Month Link Guarantee",
    desc: "If any link drops within 12 months, we replace it for free — no questions asked. We monitor every placement throughout the campaign.",
  },
  {
    icon: Banknote,
    emoji: "💰",
    title: "Money-Back Guarantee",
    desc: "If we cannot secure links meeting your agreed metrics after outreach, we offer a full replacement or credit toward future placements.",
  },
  {
    icon: BarChart2,
    emoji: "📊",
    title: "Traffic Guarantee",
    desc: "Every guest post is published on sites with a minimum of 1,000 verified monthly organic visitors. Confirmed via Ahrefs in every report.",
  },
  {
    icon: CheckCircle2,
    emoji: "✓",
    title: "Quality Guarantee",
    desc: "100% original content, expert SEO writers, no PBNs, manually vetted sites. Every placement is editorial — no sponsored labels, ever.",
  },
];

const QUALITY_BOXES = [
  { icon: TrendingUp, label: "1,000+ monthly organic traffic minimum" },
  { icon: Star, label: "Clean outbound link profiles" },
  { icon: ShieldOff, label: "No casino, CBD, or spam niches" },
  { icon: BarChart, label: "Growing blogs only — no stagnant sites" },
  { icon: BookOpen, label: "Editorial standards maintained" },
  { icon: Users, label: "Real bloggers, real manual outreach" },
];

const TESTIMONIALS = [
  {
    initials: "CC",
    badge: "📈 +280% Organic Traffic",
    quote:
      "MaiGrowth provided amazing guest posts that actually moved the needle on my websites. The process is smooth and the quality is outstanding. Highly recommended.",
    name: "Craig C.",
    company: "Craig Campbell SEO",
  },
  {
    initials: "GD",
    badge: "🎯 Page 1 Rankings in 60 Days",
    quote:
      "We've used MaiGrowth across many different projects. The TAT is excellent and the quality is great. We've seen amazing results across all our client sites.",
    name: "Gareth D.",
    company: "Daine Media",
  },
  {
    initials: "JD",
    badge: "💰 ROI: 340% in 6 Months",
    quote:
      "MaiGrowth is a must-have link vendor. Ignore third-party metrics — just look at backlinks that move the needle. They are the #1 tried and tested link vendor.",
    name: "James D.",
    company: "FatRank",
  },
  {
    initials: "KT",
    badge: "🤖 Featured in ChatGPT",
    quote:
      "The best link provider I've ever used. Excellent team and exceptional quality. Our brand now shows up in ChatGPT answers for our main keywords.",
    name: "Kami T.",
    company: "Via Trustpilot",
  },
];

const FINAL_CTA_BENEFITS = [
  { emoji: "✓", title: "Start in 48 Hours", desc: "We begin outreach within 2 business days" },
  { emoji: "🎯", title: "See Results Fast", desc: "First posts live in 3–4 weeks average" },
  { emoji: "🛡️", title: "Zero Risk", desc: "12-month guarantee + money-back option" },
];

export default function GuestPosts() {
  const [openFaq, setOpenFaq] = useState(0);
  const [stickyDismissed, setStickyDismissed] = useState(false);

  const scrollToPackages = () => {
    const el = document.getElementById("gp-packages");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <title>Guest Post Service — Rank on Google &amp; Get Cited in AI | MaiGrowth</title>

      {/* ─── STICKY CTA BAR ─── */}
      {!stickyDismissed && (
        <div
          className="fixed left-0 right-0 z-40 flex items-center justify-center gap-3 px-4 py-3"
          style={{ top: 72, backgroundColor: "#FF6B35" }}
        >
          <span className="text-white text-sm font-semibold text-center">
            🔥 Limited Time: Get 15% OFF all Guest Post packages + Free Strategy Call
          </span>
          <button
            onClick={scrollToPackages}
            className="flex-shrink-0 bg-white text-sm font-bold rounded-full px-4 py-1.5 hover:bg-orange-50 transition-colors"
            style={{ color: "#FF6B35" }}
            data-testid="button-sticky-claim"
          >
            Claim Your Discount
          </button>
          <button
            onClick={() => setStickyDismissed(true)}
            className="flex-shrink-0 text-white opacity-80 hover:opacity-100 transition-opacity ml-1"
            aria-label="Dismiss"
            data-testid="button-sticky-dismiss"
          >
            <X size={16} />
          </button>
        </div>
      )}

      {/* Offset for sticky bar */}
      <div style={{ paddingTop: stickyDismissed ? 0 : 48 }}>

        {/* ─── SECTION 1: HERO ─── */}
        <section
          className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#12153D" }}
        >
          <div className="absolute inset-0" style={DOT_GRID} />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 60% 55% at 100% 0%, rgba(255,107,53,0.12), transparent)",
            }}
          />
          <div className="absolute inset-0" style={ORANGE_GLOW} />

          <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-16 text-center">
            {/* Trust badge */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="inline-block mb-4 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full"
              style={{
                background: "rgba(255,107,53,0.15)",
                color: "#FF6B35",
                border: "1px solid rgba(255,107,53,0.3)",
              }}
            >
              ⚡ Trusted by 500+ Businesses • 10,000+ Links Placed
            </motion.span>

            <motion.span
              {...fadeUp}
              className="inline-block mb-6 text-[10px] font-semibold uppercase tracking-[0.18em] px-3 py-1 rounded-full"
              style={{
                color: "#FF6B35",
                border: "1px solid rgba(255,107,53,0.3)",
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              SERVICE · GUEST POSTS
            </motion.span>

            <h1
              className="text-white leading-[1.05] tracking-tight mb-6"
              style={{
                fontFamily: "Syne, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(40px, 7vw, 76px)",
              }}
            >
              {heroWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.5, ease: EASE }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.55, ease: EASE }}
              className="text-lg leading-relaxed max-w-2xl mx-auto mt-6"
              style={{ color: "rgba(255,255,255,0.6)", fontFamily: "DM Sans, sans-serif" }}
            >
              Real placements on real websites through manual outreach. No PBNs. No link farms. Just high-authority
              editorial links that improve rankings, build brand trust, and strengthen your visibility in ChatGPT,
              Perplexity, and Google AI Overviews.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.55, ease: EASE }}
              className="flex gap-4 justify-center flex-wrap mt-10"
            >
              <Link href="/contact">
                <motion.span
                  className="btn-primary"
                  whileHover={{ scale: 1.03, boxShadow: "0 8px 28px rgba(255,107,53,0.32)" }}
                  whileTap={{ scale: 0.97 }}
                  data-testid="button-hero-buy"
                >
                  Buy Guest Post Now →
                </motion.span>
              </Link>
              <Link href="/contact">
                <motion.span
                  className="btn-ghost"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  data-testid="button-hero-call"
                >
                  Book a Free Call
                </motion.span>
              </Link>
            </motion.div>

            {/* 4 stat counters */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.55, ease: EASE }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
              style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "2rem" }}
            >
              {HERO_STATS.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-syne font-extrabold text-2xl" style={{ color: "#FF6B35" }}>
                    {s.value}
                  </div>
                  <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "DM Sans, sans-serif" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── TRUST BADGES ─── */}
        <section className="bg-white py-8 border-b" style={{ borderColor: "#E2E0DC" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {TRUST_BADGES.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2" data-testid={`badge-trust-gp-${label.toLowerCase().replace(/\W+/g, '-')}`}>
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#FFF0EB" }}
                  >
                    <Icon size={14} style={{ color: "#FF6B35" }} />
                  </div>
                  <span className="text-sm font-semibold" style={{ color: "#0F0F0F", fontFamily: "DM Sans, sans-serif" }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 2: BENEFITS ─── */}
        <section style={{ backgroundColor: "#F7F6F4", padding: "112px 0" }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeUp} className="text-center mb-16">
              <span className="section-label">WHY GUEST POSTS WORK</span>
              <h2
                style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 46px)", color: "#0F0F0F" }}
                className="leading-tight mt-2"
              >
                Benefits of Blog Outreach and Guest Posts
              </h2>
              <p className="mt-4 max-w-2xl mx-auto" style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif", fontSize: 16, lineHeight: 1.75 }}>
                Guest posts on authoritative sites boost your Google rankings, build real brand authority, and — with MaiGrowth's approach — also strengthen your presence in AI-generated answers.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
            >
              {[
                {
                  icon: TrendingUp,
                  title: "Boost Google Rankings",
                  body: "Strategic guest posts on high-DR sites signal authority to Google. Your pages gain stronger SEO signals, climb the SERPs, and capture organic traffic from competitors.",
                  featured: false,
                  aiTag: false,
                },
                {
                  icon: Award,
                  title: "Authority & Brand Trust",
                  body: "Being featured on respected industry blogs positions your brand as a leader. Combined with MaiGrowth's AI strategy, those same placements also help AI tools cite you as a trusted source.",
                  featured: true,
                  aiTag: false,
                },
                {
                  icon: Globe2,
                  title: "Win Market Share + AI Visibility",
                  body: "Ranking higher means capturing traffic that would go to competitors. MaiGrowth guest posts are also optimized for AI citation — so you win in Google search AND in AI-generated answers.",
                  featured: false,
                  aiTag: false,
                },
                {
                  icon: FileText,
                  title: "Faster Rankings",
                  body: "Guest posts in freshly published editorial content accelerate domain authority growth — often delivering measurable ranking improvements within 60–90 days.",
                  featured: false,
                  aiTag: false,
                },
                {
                  icon: Users,
                  title: "Dedicated Account Manager",
                  body: "A single point of contact manages your campaign from site prospecting to live reporting — no ticketing queues or automated emails.",
                  featured: false,
                  aiTag: false,
                },
                {
                  icon: Bot,
                  title: "Get Cited in AI Answers",
                  body: "Every guest post is optimized to get your brand cited in ChatGPT, Perplexity, Google AI Overviews, and Gemini. This isn't a separate service — it's built into every order.",
                  featured: false,
                  aiTag: true,
                },
              ].map(({ icon: Icon, title, body, featured, aiTag }) => (
                <motion.div
                  key={title}
                  variants={staggerItem}
                  className="mg-card relative"
                  style={featured ? { borderTop: "3px solid #FF6B35" } : {}}
                  whileHover={{ y: -6, boxShadow: "0 14px 40px rgba(0,0,0,0.09)" }}
                  transition={{ duration: 0.2 }}
                  data-testid={`card-benefit-${title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {aiTag && (
                    <span
                      className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full text-white"
                      style={{ backgroundColor: "#FF6B35" }}
                    >
                      AI & LLM Ready
                    </span>
                  )}
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-xl mb-5"
                    style={{ backgroundColor: "#FFF0EB" }}
                  >
                    <Icon size={28} style={{ color: "#FF6B35" }} />
                  </div>
                  <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 18, color: "#0F0F0F" }} className="mb-3">
                    {title}
                  </h3>
                  <p style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif", fontSize: 14, lineHeight: 1.75 }}>{body}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── RESULTS CHART SECTION ─── */}
        <section style={{ backgroundColor: "#12153D", padding: "96px 0" }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: EASE }}
            >
              <h2
                className="font-syne font-extrabold text-white mb-4"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Real Results Our Clients Achieve
              </h2>
              <p style={{ color: "rgba(255,255,255,0.6)" }} className="text-base max-w-xl mx-auto">
                See the average traffic and ranking improvements our clients experience within 60–90 days of guest post campaigns.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Chart */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: EASE }}
                className="rounded-2xl p-8"
                style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <p className="text-sm font-semibold mb-4" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "DM Sans, sans-serif" }}>
                  Organic Traffic Growth
                </p>

                {/* Percentage labels row */}
                <div className="flex gap-4 mb-2">
                  {CHART_BARS.map((b) => (
                    <div key={b.label} className="flex-1 text-center">
                      <span className="text-xs font-bold" style={{ color: "#FF6B35" }}>{b.pct}</span>
                    </div>
                  ))}
                </div>

                {/* Bar area */}
                <div className="flex items-end gap-4" style={{ height: 160 }}>
                  {CHART_BARS.map((b, i) => (
                    <motion.div
                      key={b.label}
                      className="flex-1 rounded-t-lg"
                      style={{ background: "linear-gradient(to top, #E85A25, #FF6B35)", minHeight: 4 }}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${b.height}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, ease: EASE, delay: i * 0.12 }}
                    />
                  ))}
                </div>

                {/* Month labels row */}
                <div className="flex gap-4 mt-2">
                  {CHART_BARS.map((b) => (
                    <div key={b.label} className="flex-1 text-center">
                      <span className="text-xs" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "DM Sans, sans-serif" }}>{b.label}</span>
                    </div>
                  ))}
                </div>

                <p className="text-xs mt-4 text-center" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "DM Sans, sans-serif" }}>
                  Based on average client campaign data
                </p>
              </motion.div>

              {/* Results list */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
                className="space-y-4"
              >
                {CHART_RESULTS.map((r, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, ease: EASE, delay: i * 0.08 }}
                  >
                    <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5" style={{ color: "#00C47A" }} />
                    <p className="text-base" style={{ color: "rgba(255,255,255,0.8)", fontFamily: "DM Sans, sans-serif" }}>{r}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 3: DR TIER CARDS ─── */}
        <section style={{ backgroundColor: "#EFEFED", padding: "112px 0" }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeUp} className="text-center mb-20">
              <span className="section-label">INDIVIDUAL GUEST POST PLACEMENTS</span>
              <h2
                style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 46px)", color: "#0F0F0F" }}
                className="leading-tight mt-2"
              >
                Our Guest Post Offerings
              </h2>
              <p className="mt-4 max-w-2xl mx-auto" style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif", fontSize: 16, lineHeight: 1.75 }}>
                Choose your domain rating tier. Every placement is manually outreached, content-included, and permanently live.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
            >
              {DR_TIERS.map(({ dr, title, gradient }) => (
                <motion.div
                  key={dr}
                  variants={staggerItem}
                  whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}
                  transition={{ duration: 0.25 }}
                  className="rounded-2xl overflow-hidden"
                  data-testid={`card-dr-${dr.toLowerCase()}`}
                >
                  <div className="relative h-48 rounded-t-2xl overflow-hidden" style={{ background: gradient }}>
                    <span
                      className="absolute top-4 left-4 text-[10px] font-bold px-2 py-1 rounded-full"
                      style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "white", fontFamily: "DM Sans, sans-serif" }}
                    >
                      Guest Posts
                    </span>
                    <span
                      className="absolute bottom-4 left-5 leading-none"
                      style={{
                        fontFamily: "Syne, sans-serif",
                        fontWeight: 800,
                        fontSize: 64,
                        color: "white",
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {dr}
                    </span>
                  </div>
                  <div
                    className="p-6"
                    style={{ backgroundColor: "#FFFFFF", border: "1px solid #E2E0DC", borderTop: "none", borderRadius: "0 0 16px 16px" }}
                  >
                    <p style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 15, color: "#0F0F0F" }} className="mb-4">
                      {title}
                    </p>
                    <Link href="/contact">
                      <motion.span
                        className="btn-primary w-full justify-center text-center block text-sm"
                        style={{ padding: "10px 20px" }}
                        whileHover={{ scale: 1.03, boxShadow: "0 8px 28px rgba(255,107,53,0.32)" }}
                        whileTap={{ scale: 0.97 }}
                        data-testid={`button-buy-${dr.toLowerCase()}`}
                      >
                        Buy Guest Post →
                      </motion.span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div {...fadeUp} className="mt-16 pt-12" style={{ borderTop: "1px solid #E2E0DC" }}>
              <h3
                className="text-center mb-8"
                style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 20, color: "#0F0F0F" }}
              >
                All Guest Posts Include
              </h3>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                {[
                  "1,000+ words of original content",
                  "Professional SEO writers",
                  "Real websites with verified organic traffic (Ahrefs)",
                  "Contextual, in-content link placement",
                  "Manual blog outreach — no automated blasts",
                  "Natural anchor texts",
                  "Placement live within 21 days",
                ].map((item) => (
                  <span key={item} className="flex items-center gap-2 text-sm" style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}>
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#FF6B35" }} />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── COMPARISON TABLE ─── */}
        <section style={{ backgroundColor: "#F7F6F4", padding: "96px 0" }}>
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: EASE }}
            >
              <h2
                className="font-syne font-extrabold mb-4"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0F0F0F" }}
              >
                Why Choose MaiGrowth Guest Posts Over Others?
              </h2>
              <p className="text-base max-w-xl mx-auto" style={{ color: "#767676" }}>
                Not all guest post providers are equal. Here is how we compare.
              </p>
            </motion.div>

            <motion.div
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid #E2E0DC", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            >
              <table className="w-full">
                <thead>
                  <tr>
                    <th
                      className="py-4 px-6 text-left text-sm font-bold"
                      style={{ backgroundColor: "#EFEFED", color: "#3D3D3D", fontFamily: "Syne, sans-serif" }}
                    >
                      Feature
                    </th>
                    <th
                      className="py-4 px-6 text-center text-sm font-bold"
                      style={{ backgroundColor: "#EFEFED", color: "#767676", fontFamily: "Syne, sans-serif" }}
                    >
                      Other Providers
                    </th>
                    <th
                      className="py-4 px-6 text-center text-sm font-bold text-white"
                      style={{ backgroundColor: "#FF6B35", fontFamily: "Syne, sans-serif" }}
                    >
                      MaiGrowth
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, i) => (
                    <tr
                      key={row.feature}
                      style={{
                        backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#F7F6F4",
                        borderTop: "1px solid #E2E0DC",
                      }}
                    >
                      <td className="py-4 px-6 text-sm font-medium" style={{ color: "#0F0F0F", fontFamily: "DM Sans, sans-serif" }}>
                        {row.feature}
                      </td>
                      <td className="py-4 px-6 text-center text-lg">
                        <span style={{ color: "#EF4444" }}>✗</span>
                      </td>
                      <td className="py-4 px-6 text-center text-lg">
                        <span style={{ color: "#00C47A" }}>✓</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        {/* ─── SECTION 4: PACKAGES ─── */}
        <section id="gp-packages" style={{ backgroundColor: "#FFFFFF", padding: "112px 0" }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeUp} className="text-center mb-6">
              <span
                className="inline-block text-xs font-bold px-4 py-2 rounded-full mb-4"
                style={{ backgroundColor: "#FFF0EB", color: "#FF6B35" }}
              >
                ⏰ Limited Time Offer: Save up to 19% on bulk packages + Free strategy consultation
              </span>
              <span className="block section-label mt-2">PACKAGES</span>
              <h2
                style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 46px)", color: "#0F0F0F" }}
                className="leading-tight mt-2"
              >
                Guest Post Packages
              </h2>
              <p className="mt-4 max-w-2xl mx-auto" style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif", fontSize: 16, lineHeight: 1.75 }}>
                Structured pricing tiers for every stage of SEO growth. Each package includes content writing, outreach, and full reporting.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              variants={staggerContainer}
            >
              {PACKAGES.map(({ emoji, name, desc, price, oldPrice, savings, perPost, features, featured }) => (
                <motion.div
                  key={name}
                  variants={staggerItem}
                  className="relative flex flex-col rounded-2xl bg-white"
                  style={
                    featured
                      ? {
                          border: "2px solid #FF6B35",
                          boxShadow: "0 12px 48px rgba(255,107,53,0.2)",
                          transform: "scale(1.05)",
                          zIndex: 2,
                        }
                      : {
                          border: "1px solid #E2E0DC",
                          boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                          backgroundColor: "#F7F6F4",
                        }
                  }
                  data-testid={`card-package-${name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {featured && (
                    <span
                      className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1.5 rounded-full text-white whitespace-nowrap"
                      style={{ backgroundColor: "#FF6B35" }}
                    >
                      🔥 MOST POPULAR
                    </span>
                  )}

                  <div className="p-6 flex flex-col flex-1">
                    <div className="text-3xl mb-3">{emoji}</div>
                    <h3 className="font-syne font-bold text-xl mb-1" style={{ color: "#0F0F0F" }}>
                      {name}
                    </h3>
                    <p className="text-xs mb-4 leading-relaxed" style={{ color: "#767676", fontFamily: "DM Sans, sans-serif" }}>
                      {desc}
                    </p>

                    <div className="mb-4">
                      <div className="flex items-baseline gap-2">
                        <span className="font-syne font-extrabold text-2xl" style={{ color: "#0F0F0F" }}>
                          {price}
                        </span>
                        <span className="text-xs line-through" style={{ color: "#A8A8A8" }}>
                          {oldPrice}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs" style={{ color: "#767676" }}>{perPost}</span>
                        <span
                          className="text-xs font-bold px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: "#FFF0EB", color: "#FF6B35" }}
                        >
                          {savings}
                        </span>
                      </div>
                    </div>

                    <div
                      className="space-y-2 mb-6 flex-1"
                      style={{ borderTop: "1px solid #E2E0DC", paddingTop: "1rem" }}
                    >
                      {features.map((f) => (
                        <div key={f} className="flex items-start gap-2">
                          <CheckCircle2 size={13} className="flex-shrink-0 mt-0.5" style={{ color: "#00C47A" }} />
                          <span className="text-xs" style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}>{f}</span>
                        </div>
                      ))}
                    </div>

                    <Link href="/contact">
                      <motion.span
                        className="block text-center text-sm font-bold py-3 rounded-xl cursor-pointer"
                        style={
                          featured
                            ? { backgroundColor: "#FF6B35", color: "white" }
                            : { backgroundColor: "#12153D", color: "white" }
                        }
                        whileHover={{ scale: 1.03, boxShadow: featured ? "0 8px 28px rgba(255,107,53,0.32)" : "0 8px 28px rgba(18,21,61,0.2)" }}
                        whileTap={{ scale: 0.97 }}
                        data-testid={`button-package-${name.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {featured ? "Get Started — Most Popular" : "Purchase Package"}
                      </motion.span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Not sure box */}
            <motion.div
              className="mt-14 rounded-2xl px-8 py-8 text-center"
              style={{ backgroundColor: "#12153D" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: EASE }}
            >
              <p className="font-syne font-bold text-xl text-white mb-2">
                Not sure which package is right for you?
              </p>
              <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "DM Sans, sans-serif" }}>
                Book a free 20-minute strategy call and we will recommend the right mix of Guest Posts for your goals and budget.
              </p>
              <Link href="/contact">
                <motion.span
                  className="inline-block font-semibold rounded-full px-8 py-3.5 text-white text-sm cursor-pointer"
                  style={{ backgroundColor: "#FF6B35" }}
                  whileHover={{ scale: 1.03, boxShadow: "0 8px 28px rgba(255,107,53,0.32)" }}
                  whileTap={{ scale: 0.97 }}
                  data-testid="button-packages-call"
                >
                  Book Free Strategy Call
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ─── SECTION 5: WHAT MAKES US DIFFERENT ─── */}
        <section style={{ backgroundColor: "#EFEFED", padding: "112px 0" }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeUp} className="text-center mb-14">
              <span className="section-label">OUR APPROACH</span>
              <h2
                style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 46px)", color: "#0F0F0F" }}
                className="leading-tight mt-2"
              >
                What Makes MaiGrowth Guest Posts Different?
              </h2>
              <p className="mt-4 max-w-3xl mx-auto" style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif", fontSize: 16, lineHeight: 1.75 }}>
                MaiGrowth runs a legitimate blogger outreach service that secures real, natural placements on real websites. We contact real bloggers and editors through manual outreach. No automated blasts. No scraped databases. And unlike every other agency — our guest posts are also optimized for AI engine citation.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
            >
              {[
                { icon: FileText, label: "Editorial In-Content Links" },
                { icon: Link2, label: "Natural Anchor Texts" },
                { icon: Target, label: "Niche-Relevant Placements" },
                { icon: BarChart2, label: "Sites with Real Traffic" },
              ].map(({ icon: Icon, label }) => (
                <motion.div
                  key={label}
                  variants={staggerItem}
                  className="rounded-2xl p-6 text-center bg-white"
                  style={{ border: "1px solid #E2E0DC" }}
                  whileHover={{ y: -4, borderColor: "#FF6B35" }}
                  transition={{ duration: 0.2 }}
                  data-testid={`card-feature-${label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-xl mx-auto mb-4"
                    style={{ backgroundColor: "#FFF0EB" }}
                  >
                    <Icon size={28} style={{ color: "#FF6B35" }} />
                  </div>
                  <p style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 14, color: "#0F0F0F" }} className="mt-3">
                    {label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              {...fadeUp}
              className="mt-16 rounded-2xl px-8 md:px-12 py-10 flex flex-col md:flex-row justify-between items-center gap-8"
              style={{ backgroundColor: "#12153D" }}
            >
              <div className="max-w-xl">
                <h3
                  style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(20px, 3vw, 30px)", color: "white", lineHeight: 1.3 }}
                >
                  Want to know how we build links that rank on Google AND get cited by{" "}
                  <span style={{ color: "#FF6B35" }}>ChatGPT, Perplexity &amp; AI Overviews?</span>
                </h3>
              </div>
              <Link href="/contact">
                <motion.span
                  className="btn-primary flex-shrink-0"
                  whileHover={{ scale: 1.03, boxShadow: "0 8px 28px rgba(255,107,53,0.32)" }}
                  whileTap={{ scale: 0.97 }}
                  data-testid="button-different-cta"
                >
                  Learn How →
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ─── SECTION 6: GUEST POSTS VS NICHE EDITS ─── */}
        <section style={{ backgroundColor: "#FFFFFF", padding: "112px 0" }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeUp} className="text-center mb-14">
              <span className="section-label">KNOW THE DIFFERENCE</span>
              <h2
                style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 46px)", color: "#0F0F0F" }}
                className="leading-tight mt-2"
              >
                Guest Posts vs Link Insertions
              </h2>
              <p className="mt-4 max-w-2xl mx-auto" style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif", fontSize: 16, lineHeight: 1.75 }}>
                Not all links are equal. Here's how each type works and when to use them.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <motion.div
                {...fadeUp}
                className="mg-card"
                style={{ borderTop: "3px solid #FF6B35" }}
                data-testid="card-guest-posts"
              >
                <PenLine size={28} style={{ color: "#FF6B35" }} className="mb-4" />
                <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 20, color: "#0F0F0F" }} className="mb-5">
                  Guest Posts (Blog Outreach)
                </h3>
                <div className="space-y-3 mb-6">
                  {[
                    "Brand-new content written for the host blog",
                    "Naturally integrated, contextual in-content links",
                    "Placed within the main body of the article",
                    "Strongest long-term SEO impact",
                    "Also strengthens AI visibility and brand authority",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm" style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}>
                      <CheckCircle2 size={16} style={{ color: "#FF6B35", flexShrink: 0, marginTop: 2 }} />
                      {item}
                    </div>
                  ))}
                </div>
                <span className="tag">Recommended for most campaigns</span>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.1 }}
                className="mg-card"
                style={{ borderTop: "3px solid #E2E0DC" }}
                data-testid="card-niche-edits"
              >
                <Link2 size={28} style={{ color: "#767676" }} className="mb-4" />
                <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 20, color: "#0F0F0F" }} className="mb-5">
                  Link Insertions
                </h3>
                <div className="space-y-3 mb-6">
                  {[
                    "Adding your link to an existing, aged article",
                    "Works when context is strong and niche-relevant",
                    "Best for supplementing campaigns, not replacing guest posts",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm" style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}>
                      <CheckCircle2 size={16} style={{ color: "#767676", flexShrink: 0, marginTop: 2 }} />
                      {item}
                    </div>
                  ))}
                </div>
                <span className="tag-neutral">Great as a secondary strategy</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 7: HOW IT WORKS ─── */}
        <section className="relative py-28 px-6 overflow-hidden" style={{ background: "#12153D" }}>
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none z-0"
            style={{
              width: "600px",
              height: "300px",
              background: "radial-gradient(ellipse, rgba(255,107,53,0.06) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />

          <div className="relative z-10 max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: EASE }}
            >
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#FF6B35",
                  display: "block",
                  marginBottom: "16px",
                  fontFamily: "DM Sans, sans-serif",
                }}
              >
                The Process
              </span>
              <h2
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(28px, 4vw, 48px)",
                  lineHeight: 1.06,
                  letterSpacing: "-0.02em",
                  color: "#FFFFFF",
                }}
              >
                How Our Guest Post Service Works
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,0.45)",
                  maxWidth: "520px",
                  margin: "16px auto 0",
                  fontFamily: "DM Sans, sans-serif",
                }}
              >
                A transparent, fully managed process from strategy to live placement — with you in control at every step.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  num: "01",
                  title: "Backlink Gap Analysis",
                  body: "We calculate exactly how many links you need to beat your competitors based on link velocity and authority gaps. Optional but highly recommended for new campaigns.",
                  badge: "Optional",
                  badgeColor: "rgba(255,107,53,0.15)",
                  badgeText: "#FF6B35",
                  fullWidth: false,
                },
                {
                  num: "02",
                  title: "Site Prospecting & Blogger Outreach",
                  body: "We identify relevant, high-DR blogs in your niche then begin manual email outreach directly to bloggers and editors. No automated sequences. No scraped databases.",
                  badge: null,
                  fullWidth: false,
                },
                {
                  num: "03",
                  title: "Site Approval",
                  body: "You stay in full control. Pre-approve domains, set DR and traffic minimums, exclude irrelevant niches, and review content before it is submitted for publication.",
                  badge: "You Approve",
                  badgeColor: "rgba(255,107,53,0.15)",
                  badgeText: "#FF6B35",
                  fullWidth: false,
                },
                {
                  num: "04",
                  title: "Content Creation",
                  body: "Our professional SEO writers create 1,000+ word articles aligned with your brand voice, target keywords, and link placement strategy. No extra cost.",
                  badge: "Included",
                  badgeColor: "rgba(0,180,100,0.15)",
                  badgeText: "#00C878",
                  fullWidth: false,
                },
                {
                  num: "05",
                  title: "Publish & Report",
                  body: "Once live, you receive: the live URL, DR and traffic metrics, anchor text used, indexation status, and a full exportable report in CSV and PDF format.",
                  badge: null,
                  fullWidth: true,
                },
              ].map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
                  whileHover={{ borderColor: "rgba(255,107,53,0.4)", y: -4 }}
                  data-testid={`card-step-${step.num}`}
                  style={{
                    background: "#1C2050",
                    border: "1px solid #2A2F6A",
                    borderRadius: "16px",
                    padding: "32px",
                    position: "relative",
                    transition: "border-color 0.25s ease",
                    ...(step.fullWidth
                      ? { gridColumn: "1 / -1", maxWidth: "600px", margin: "0 auto", width: "100%" }
                      : {}),
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "36px",
                        height: "36px",
                        borderRadius: "10px",
                        background: "rgba(255,107,53,0.12)",
                        border: "1px solid rgba(255,107,53,0.25)",
                        fontFamily: "Syne, sans-serif",
                        fontWeight: 800,
                        fontSize: "13px",
                        color: "#FF6B35",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {step.num}
                    </div>
                    {step.badge && (
                      <span
                        style={{
                          fontSize: "10px",
                          fontWeight: 600,
                          fontFamily: "DM Sans, sans-serif",
                          padding: "3px 10px",
                          borderRadius: "999px",
                          background: step.badgeColor,
                          color: step.badgeText,
                          letterSpacing: "0.04em",
                        }}
                      >
                        {step.badge}
                      </span>
                    )}
                  </div>

                  <h3
                    style={{
                      fontFamily: "Syne, sans-serif",
                      fontWeight: 700,
                      fontSize: "17px",
                      color: "#FFFFFF",
                      letterSpacing: "-0.01em",
                      marginBottom: "10px",
                      lineHeight: 1.3,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "DM Sans, sans-serif",
                      fontSize: "13.5px",
                      lineHeight: 1.75,
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    {step.body}
                  </p>

                  <div
                    style={{
                      position: "absolute",
                      bottom: "-10px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#FF6B35",
                      opacity: 0.4,
                    }}
                  />
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
            >
              <div
                style={{
                  background: "rgba(255,107,53,0.06)",
                  border: "1px solid rgba(255,107,53,0.2)",
                  borderRadius: "14px",
                  padding: "24px 28px",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "rgba(255,107,53,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "13px", color: "#FF6B35", marginBottom: "4px" }}>
                    Typical Turnaround
                  </div>
                  <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>
                    21 days depending on niche and outreach response rates.
                  </div>
                </div>
              </div>

              <div
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid #2A2F6A",
                  borderRadius: "14px",
                  padding: "24px 28px",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "13px", color: "rgba(255,255,255,0.7)", marginBottom: "4px" }}>
                    Agencies
                  </div>
                  <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.4)", lineHeight: 1.5 }}>
                    Branded link reports, client-ready docs, and white-label pricing available.
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="text-center mt-14"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="/contact">
                <motion.span
                  className="btn-primary"
                  style={{ fontSize: "15px", padding: "14px 36px" }}
                  whileHover={{ scale: 1.03, boxShadow: "0 8px 28px rgba(255,107,53,0.32)" }}
                  whileTap={{ scale: 0.97 }}
                  data-testid="button-process-cta"
                >
                  Talk to Our SEO Strategists →
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ─── GUARANTEES SECTION ─── */}
        <section style={{ backgroundColor: "#F7F6F4", padding: "96px 0" }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: EASE }}
            >
              <span className="section-label">RISK-FREE</span>
              <h2
                className="font-syne font-bold leading-tight mt-2"
                style={{ fontSize: "clamp(28px, 3.5vw, 46px)", color: "#0F0F0F" }}
              >
                Our Risk-Free Guarantees
              </h2>
              <p className="mt-4 max-w-xl mx-auto" style={{ color: "#767676", fontFamily: "DM Sans, sans-serif", fontSize: 16 }}>
                We stand behind our work with four industry-leading guarantees.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {GUARANTEES.map((g, i) => {
                const Icon = g.icon;
                return (
                  <motion.div
                    key={g.title}
                    className="bg-white rounded-2xl p-7"
                    style={{ border: "1px solid #E2E0DC", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: EASE, delay: i * 0.07 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    data-testid={`card-guarantee-${g.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "#FFF0EB" }}
                      >
                        <Icon size={22} style={{ color: "#FF6B35" }} />
                      </div>
                      <div>
                        <h3 className="font-syne font-bold text-lg mb-2" style={{ color: "#0F0F0F" }}>
                          {g.emoji} {g.title}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: "#767676", fontFamily: "DM Sans, sans-serif" }}>
                          {g.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── SECTION 8: QUALITY CRITERIA ─── */}
        <section style={{ backgroundColor: "#EFEFED", padding: "112px 0" }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeUp} className="text-center mb-14">
              <span className="section-label">OUR STANDARDS</span>
              <h2
                style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 46px)", color: "#0F0F0F" }}
                className="leading-tight mt-2"
              >
                Quality Criteria
              </h2>
              <p className="mt-4 max-w-2xl mx-auto" style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif", fontSize: 16, lineHeight: 1.75 }}>
                Every guest post placement meets these strict quality controls — no exceptions.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
            >
              {QUALITY_BOXES.map(({ icon: Icon, label }) => (
                <motion.div
                  key={label}
                  variants={staggerItem}
                  className="flex items-center gap-4 rounded-xl px-5 py-4 bg-white"
                  style={{ border: "1px solid #E2E0DC" }}
                  whileHover={{ borderColor: "#FF6B35" }}
                  transition={{ duration: 0.2 }}
                  data-testid={`card-quality-${label.toLowerCase().replace(/\s+/g, "-").slice(0, 30)}`}
                >
                  <Icon size={20} style={{ color: "#FF6B35", flexShrink: 0 }} />
                  <p style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 14, color: "#0F0F0F" }}>{label}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div {...fadeUp} className="mt-16 rounded-2xl px-8 md:px-12 py-10" style={{ backgroundColor: "#12153D" }}>
              <h3
                className="text-center mb-8"
                style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(20px, 3vw, 28px)", color: "white" }}
              >
                Who Is This Guest Post Service For?
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl mx-auto">
                {[
                  "SEO agencies needing white-label blog placements",
                  "Affiliate marketers scaling authority sites",
                  "In-house SEO teams",
                  "Businesses competing in high-authority SERPs",
                  "SaaS, local businesses, e-commerce brands",
                  "Regulated or technical industries",
                  "Country-specific outreach (USA, UK, Canada, AUS)",
                  "Brands building AI search visibility",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "DM Sans, sans-serif" }}>
                    <span className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5" style={{ backgroundColor: "#FF6B35" }} />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── SECTION 9: TESTIMONIALS ─── */}
        <section style={{ backgroundColor: "#FFFFFF", padding: "112px 0" }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeUp} className="text-center mb-14">
              <span className="section-label">WHAT CLIENTS SAY</span>
              <h2
                style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 46px)", color: "#0F0F0F" }}
                className="leading-tight mt-2"
              >
                Real Results from Real Clients
              </h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
            >
              {TESTIMONIALS.map(({ initials, badge, quote, name, company }) => (
                <motion.div
                  key={name}
                  variants={staggerItem}
                  className="flex flex-col rounded-2xl p-7"
                  style={{ backgroundColor: "#F7F6F4", border: "1px solid #E2E0DC" }}
                  whileHover={{ y: -5, boxShadow: "0 12px 40px rgba(0,0,0,0.07)" }}
                  transition={{ duration: 0.2 }}
                  data-testid={`card-testimonial-${initials.toLowerCase()}`}
                >
                  {/* Result badge */}
                  <span
                    className="self-start text-xs font-bold px-3 py-1.5 rounded-full mb-4"
                    style={{ backgroundColor: "#FFF0EB", color: "#FF6B35" }}
                  >
                    {badge}
                  </span>

                  <p
                    style={{
                      fontFamily: "Syne, sans-serif",
                      fontWeight: 800,
                      fontSize: 56,
                      color: "rgba(255,107,53,0.15)",
                      lineHeight: 1,
                      marginBottom: -12,
                    }}
                  >
                    "
                  </p>
                  <p
                    className="flex-1 italic text-[13.5px] leading-relaxed"
                    style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}
                  >
                    {quote}
                  </p>
                  <div className="mt-5 pt-5 flex items-center gap-3" style={{ borderTop: "1px solid #E2E0DC" }}>
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#12153D" }}
                    >
                      <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 12, color: "white" }}>{initials}</span>
                    </div>
                    <div>
                      <p style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 14, color: "#0F0F0F" }}>{name}</p>
                      <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, color: "#767676" }}>{company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── SECTION 10: FAQ ─── */}
        <section style={{ backgroundColor: "#F7F6F4", padding: "112px 0" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-16 lg:gap-24">
              <motion.div {...fadeUp} className="lg:sticky lg:top-24 self-start">
                <span className="section-label">FAQ</span>
                <h2
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(28px, 3vw, 42px)",
                    color: "#0F0F0F",
                    lineHeight: 1.2,
                  }}
                  className="mt-2"
                >
                  Questions we get asked about guest posts.
                </h2>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: "#767676", fontFamily: "DM Sans, sans-serif" }}>
                  More questions? Email us at{" "}
                  <a href="mailto:hello@maigrowth.com" style={{ color: "#FF6B35" }}>
                    hello@maigrowth.com
                  </a>
                </p>
              </motion.div>

              <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
                {FAQ_ITEMS.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      borderBottom: "1px solid #E2E0DC",
                      ...(openFaq === i
                        ? { borderLeft: "3px solid #FF6B35", paddingLeft: 20 }
                        : {}),
                      transition: "all 0.3s ease",
                    }}
                    data-testid={`faq-item-${i}`}
                  >
                    <button
                      className="flex justify-between items-center py-5 w-full cursor-pointer text-left"
                      onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                      data-testid={`button-faq-${i}`}
                    >
                      <span
                        style={{
                          fontFamily: "Syne, sans-serif",
                          fontWeight: 700,
                          fontSize: 15,
                          color: openFaq === i ? "#FF6B35" : "#0F0F0F",
                        }}
                      >
                        {item.q}
                      </span>
                      <motion.span
                        animate={{ rotate: openFaq === i ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-shrink-0 ml-4 w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ border: "1px solid #E2E0DC", color: openFaq === i ? "#FF6B35" : "#767676" }}
                      >
                        <Plus size={14} />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: EASE }}
                          style={{ overflow: "hidden" }}
                        >
                          <p
                            className="pb-5 text-[14px] leading-relaxed"
                            style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}
                          >
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 11: FINAL CTA BANNER ─── */}
        <section style={{ backgroundColor: "#F7F6F4", padding: "96px 0" }}>
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              className="rounded-3xl px-8 md:px-14 py-14 text-center relative overflow-hidden"
              style={{ backgroundColor: "#12153D" }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <div className="absolute inset-0" style={DOT_GRID} />
              <div className="relative z-10">
                {/* Scarcity badge */}
                <span
                  className="inline-block text-xs font-bold px-4 py-2 rounded-full mb-6"
                  style={{ backgroundColor: "rgba(255,107,53,0.15)", color: "#FF6B35", border: "1px solid rgba(255,107,53,0.3)" }}
                >
                  ⏰ Limited Slots Available This Month
                </span>

                <h2
                  className="font-syne font-extrabold text-white mb-4"
                  style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)", lineHeight: 1.15 }}
                >
                  Ready to Dominate Your Niche with Expert Guest Posts?
                </h2>

                <p
                  className="text-base mb-10 max-w-2xl mx-auto"
                  style={{ color: "rgba(255,255,255,0.6)", fontFamily: "DM Sans, sans-serif" }}
                >
                  Join 500+ businesses using MaiGrowth to build authority, drive organic traffic, and get cited in AI search results. No contracts. No BS. Just results.
                </p>

                {/* 3 benefit boxes */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                  {FINAL_CTA_BENEFITS.map((b) => (
                    <div
                      key={b.title}
                      className="rounded-xl px-5 py-4"
                      style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                    >
                      <div className="text-xl mb-1">{b.emoji}</div>
                      <div className="font-syne font-bold text-sm text-white mb-1">{b.title}</div>
                      <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "DM Sans, sans-serif" }}>{b.desc}</div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 justify-center flex-wrap">
                  <Link href="/contact">
                    <motion.span
                      className="btn-primary"
                      style={{ fontSize: "15px", padding: "14px 36px" }}
                      whileHover={{ scale: 1.03, boxShadow: "0 8px 28px rgba(255,107,53,0.32)" }}
                      whileTap={{ scale: 0.97 }}
                      data-testid="button-final-cta-strategy"
                    >
                      Free Strategy Call →
                    </motion.span>
                  </Link>
                  <Link href="/contact">
                    <motion.span
                      className="btn-ghost"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      data-testid="button-final-cta-report"
                    >
                      Get Your Link Report
                    </motion.span>
                  </Link>
                </div>

                <p className="mt-6 text-xs" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "DM Sans, sans-serif" }}>
                  No credit card required • Free consultation • No long-term contracts
                </p>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
}
