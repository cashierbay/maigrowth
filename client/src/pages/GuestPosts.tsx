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
    price: "From $497",
    was: "Was $537",
    features: ["3× DR 30+ Guest Posts", "Avg. price per link: $166", "Save 7%"],
    featured: false,
  },
  {
    emoji: "🚀",
    name: "Launch Pad",
    desc: "Ideal for maintaining rankings and establishing domain authority.",
    price: "From $1,049",
    was: "Was $1,145",
    features: ["3× DR 30+", "1× DR 40+", "1× DR 50+", "Avg. $210/link", "Save 8%"],
    featured: false,
  },
  {
    emoji: "✨",
    name: "Growth",
    desc: "For businesses expanding online presence with increased traffic and higher rankings.",
    price: "From $1,799",
    was: "Was $2,041",
    features: ["5× DR 30+", "3× DR 40+", "1× DR 50+", "Avg. $200/link", "Save 12%"],
    featured: true,
  },
  {
    emoji: "💪",
    name: "Authority",
    desc: "Establish your brand as an industry leader and significantly boost domain rating.",
    price: "From $3,799",
    was: "Was $4,512",
    features: ["10× DR 30+", "3× DR 40+", "3× DR 50+", "2× DR 60+", "Avg. $211/link", "Save 16%"],
    featured: false,
  },
  {
    emoji: "🏆",
    name: "Domination",
    desc: "The definitive solution for industry-leading organic visibility and sustainable SEO.",
    price: "From $4,999",
    was: "Was $6,180",
    features: ["5× DR 30+", "5× DR 40+", "5× DR 50+", "5× DR 60+", "Avg. $250/link", "Save 19%"],
    featured: false,
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Backlink Gap Analysis",
    body: "We calculate exactly how many links you need to beat competitors based on link velocity and authority gaps. Optional but recommended.",
  },
  {
    num: "02",
    title: "Site Prospecting & Blogger Outreach",
    body: "We identify relevant, high-DR blogs in your niche then begin manual email outreach directly to bloggers and editors. No automated sequences.",
  },
  {
    num: "03",
    title: "Site Approval",
    body: "You stay in control. Pre-approve domains, set DR and traffic minimums, exclude irrelevant niches, and review content before publication.",
  },
  {
    num: "04",
    title: "Content Creation",
    body: "Our professional SEO writers create 1,000+ word articles aligned with your brand voice, target keywords, and link placement strategy.",
  },
  {
    num: "05",
    title: "Publish & Report",
    body: "Once live, you receive: the live URL, DR and traffic metrics, anchor text used, indexation status, and a full exportable report (CSV/PDF).",
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
    quote:
      "MaiGrowth provided amazing guest posts that actually moved the needle on my websites. The process is smooth and the quality is outstanding. Highly recommended.",
    name: "Craig C.",
    company: "Craig Campbell SEO",
  },
  {
    initials: "GD",
    quote:
      "We've used MaiGrowth across many different projects. The TAT is excellent and the quality is great. We've seen amazing results across all our client sites.",
    name: "Gareth D.",
    company: "Daine Media",
  },
  {
    initials: "JD",
    quote:
      "MaiGrowth is a must-have link vendor. Ignore third-party metrics — just look at backlinks that move the needle. They are the #1 tried and tested link vendor.",
    name: "James D.",
    company: "FatRank",
  },
  {
    initials: "KT",
    quote:
      "The best link provider I've ever used. Excellent team and exceptional quality. Our brand now shows up in ChatGPT answers for our main keywords.",
    name: "Kami T.",
    company: "Via Trustpilot",
  },
];

export default function GuestPosts() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div>
      {/* ─── SECTION 1: HERO ─── */}
      <section
        className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden"
        style={{ backgroundColor: "#12153D" }}
      >
        <div className="absolute inset-0" style={DOT_GRID} />
        <div className="absolute inset-0" style={ORANGE_GLOW} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-16 text-center">
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

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.55, ease: EASE }}
            className="mt-12 pt-8 flex gap-6 justify-center flex-wrap"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
          >
            {["White-Hat Only", "DR Verified", "21-Day Turnaround", "AEO + GEO Ready"].map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-sm" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "DM Sans, sans-serif" }}>
                <span style={{ color: "#FF6B35" }}>✓</span> {item}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <div style={{ height: 64, background: "linear-gradient(to bottom, #12153D, #F7F6F4)" }} />

      {/* ─── SECTION 2: BENEFITS ─── */}
      <section style={{ backgroundColor: "#F7F6F4", padding: "112px 0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-20">
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
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
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
              },
              {
                icon: Award,
                title: "Authority & Brand Trust",
                body: "Being featured on respected industry blogs positions your brand as a leader. Combined with MaiGrowth's AEO strategy, those same placements also help AI tools cite you as a trusted source.",
                featured: true,
              },
              {
                icon: Globe2,
                title: "Win Market Share + AI Visibility",
                body: "Ranking higher means capturing traffic that would go to competitors. MaiGrowth guest posts are also optimized for AI citation — so you win in Google search AND in AI-generated answers.",
                featured: false,
              },
            ].map(({ icon: Icon, title, body, featured }) => (
              <motion.div
                key={title}
                variants={staggerItem}
                className="mg-card"
                style={featured ? { borderTop: "3px solid #FF6B35" } : {}}
                whileHover={{ y: -6, boxShadow: "0 14px 40px rgba(0,0,0,0.09)" }}
                transition={{ duration: 0.2 }}
                data-testid={`card-benefit-${title.toLowerCase().replace(/\s+/g, "-")}`}
              >
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

      {/* ─── SECTION 4: PACKAGES ─── */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "112px 0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-20">
            <span className="section-label">PACKAGES</span>
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
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={staggerContainer}
          >
            {PACKAGES.map(({ name, desc, price, was, features, featured }) => (
              <motion.div
                key={name}
                variants={staggerItem}
                className="relative flex flex-col rounded-2xl p-7"
                style={
                  featured
                    ? {
                        backgroundColor: "#FFFFFF",
                        border: "2px solid #FF6B35",
                        boxShadow: "0 8px 40px rgba(255,107,53,0.15)",
                      }
                    : {
                        backgroundColor: "#F7F6F4",
                        border: "1px solid #E2E0DC",
                      }
                }
                data-testid={`card-package-${name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {featured && (
                  <span
                    className="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] font-bold px-4 py-1 rounded-full text-white"
                    style={{ backgroundColor: "#FF6B35", fontFamily: "DM Sans, sans-serif", whiteSpace: "nowrap" }}
                  >
                    MOST POPULAR
                  </span>
                )}
                <p className="text-2xl mb-3">{name === "Slow Burner" ? "🌱" : name === "Launch Pad" ? "🚀" : name === "Growth" ? "✨" : name === "Authority" ? "💪" : "🏆"}</p>
                <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 17, color: "#0F0F0F" }}>{name}</h3>
                <p className="mt-2 text-xs leading-relaxed flex-1" style={{ color: "#767676", fontFamily: "DM Sans, sans-serif" }}>{desc}</p>
                <p
                  className="mt-4"
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontWeight: 800,
                    fontSize: 28,
                    color: featured ? "#FF6B35" : "#0F0F0F",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {price}
                </p>
                <p className="text-xs line-through mb-4" style={{ color: "#767676", fontFamily: "DM Sans, sans-serif" }}>{was}</p>
                <div style={{ borderTop: "1px solid #E2E0DC" }} className="pt-4 mb-5 space-y-2">
                  {features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs" style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}>
                      <CheckCircle2 size={13} style={{ color: "#FF6B35", flexShrink: 0 }} />
                      {f}
                    </div>
                  ))}
                </div>
                <Link href="/contact">
                  {featured ? (
                    <motion.span
                      className="btn-primary w-full justify-center text-center block text-sm mt-auto"
                      style={{ padding: "10px 20px" }}
                      whileHover={{ scale: 1.03, boxShadow: "0 8px 28px rgba(255,107,53,0.32)" }}
                      whileTap={{ scale: 0.97 }}
                      data-testid={`button-package-${name.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      Purchase Package
                    </motion.span>
                  ) : (
                    <motion.span
                      className="btn-secondary w-full justify-center text-center block text-sm mt-auto"
                      style={{ padding: "10px 20px" }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      data-testid={`button-package-${name.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      Purchase Package
                    </motion.span>
                  )}
                </Link>
              </motion.div>
            ))}
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
                <span style={{ color: "#FF6B35" }}>ChatGPT, Perplexity & AI Overviews?</span>
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
              Guest Posts vs Niche Edits
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
                  "Also strengthens AEO + GEO brand authority",
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
                Niche Edits (Link Insertions)
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
      <section className="relative overflow-hidden" style={{ backgroundColor: "#12153D", padding: "112px 0" }}>
        <div className="absolute inset-0" style={DOT_GRID} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="section-label">THE PROCESS</span>
            <h2
              style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 46px)", color: "white" }}
              className="leading-tight mt-2"
            >
              How Our Guest Post Service Works
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="py-8"
                style={{ borderBottom: "1px solid #2A2F6A" }}
              >
                <p
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontWeight: 800,
                    fontSize: 52,
                    color: "rgba(255,107,53,0.25)",
                    lineHeight: 1,
                    marginBottom: 12,
                  }}
                >
                  {step.num}
                </p>
                <h4 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 18, color: "white" }} className="mb-2">
                  {step.title}
                </h4>
                <p style={{ color: "rgba(255,255,255,0.55)", fontFamily: "DM Sans, sans-serif", fontSize: 14, lineHeight: 1.75 }}>
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeUp}
            className="mt-8 pt-8 text-center space-y-2"
            style={{ borderTop: "1px solid #2A2F6A" }}
          >
            <p style={{ color: "rgba(255,255,255,0.4)", fontFamily: "DM Sans, sans-serif", fontSize: 14, fontStyle: "italic" }}>
              Typical turnaround: 21 days depending on niche and outreach response rates.
            </p>
            <p className="text-sm" style={{ fontFamily: "DM Sans, sans-serif" }}>
              <span style={{ color: "#FF6B35", fontWeight: 600 }}>Agencies: </span>
              <span style={{ color: "rgba(255,255,255,0.6)" }}>Branded link reports, client-ready documentation, and white-label pricing available.</span>
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="mt-10 flex justify-center">
            <Link href="/contact">
              <motion.span
                className="btn-primary"
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

      {/* ─── SECTION 8: QUALITY CRITERIA ─── */}
      <section style={{ backgroundColor: "#EFEFED", padding: "112px 0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="section-label">OUR STANDARDS</span>
            <h2
              style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 46px)", color: "#0F0F0F" }}
              className="leading-tight mt-2"
            >
              Quality Criteria & Guarantees
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

          <motion.div {...fadeUp} className="mt-14 text-center space-y-6">
            <Link href="/contact">
              <motion.span
                className="btn-primary"
                whileHover={{ scale: 1.03, boxShadow: "0 8px 28px rgba(255,107,53,0.32)" }}
                whileTap={{ scale: 0.97 }}
                data-testid="button-quality-buy"
              >
                Buy Guest Post →
              </motion.span>
            </Link>
            <div className="space-y-3 mt-8">
              <div>
                <p style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 14, color: "#0F0F0F" }}>Placement Guarantee</p>
                <p style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif", fontSize: 14 }}>If a link drops within 12 months, we replace it for free.</p>
              </div>
              <div>
                <p style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 14, color: "#0F0F0F" }}>Refund Policy</p>
                <p style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif", fontSize: 14 }}>If we cannot secure agreed metrics after outreach attempts, we offer a replacement or credit toward future placements.</p>
              </div>
            </div>
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
                "Brands building AEO + GEO visibility",
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
            {TESTIMONIALS.map(({ initials, quote, name, company }) => (
              <motion.div
                key={name}
                variants={staggerItem}
                className="flex flex-col rounded-2xl p-7"
                style={{ backgroundColor: "#F7F6F4", border: "1px solid #E2E0DC" }}
                whileHover={{ y: -5, boxShadow: "0 12px 40px rgba(0,0,0,0.07)" }}
                transition={{ duration: 0.2 }}
                data-testid={`card-testimonial-${initials.toLowerCase()}`}
              >
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

          <motion.div
            {...fadeUp}
            className="mt-16 max-w-3xl mx-auto rounded-2xl px-8 md:px-12 py-12 text-center"
            style={{ backgroundColor: "#12153D" }}
          >
            <h3
              style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(22px, 3vw, 32px)", color: "white", lineHeight: 1.25 }}
            >
              Ready to Build Authority the Right Way?
            </h3>
            <p
              className="mt-4 max-w-xl mx-auto text-base"
              style={{ color: "rgba(255,255,255,0.55)", fontFamily: "DM Sans, sans-serif", lineHeight: 1.75 }}
            >
              Guest posts that improve rankings AND get your brand cited by AI. Let's build a campaign that makes sense for your goals.
            </p>
            <div className="flex gap-4 justify-center mt-8 flex-wrap">
              <Link href="/contact">
                <motion.span
                  className="btn-primary"
                  whileHover={{ scale: 1.03, boxShadow: "0 8px 28px rgba(255,107,53,0.32)" }}
                  whileTap={{ scale: 0.97 }}
                  data-testid="button-testimonials-buynow"
                >
                  Buy Now →
                </motion.span>
              </Link>
              <Link href="/contact">
                <motion.span
                  className="btn-ghost"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  data-testid="button-testimonials-call"
                >
                  Book a Free Call
                </motion.span>
              </Link>
            </div>
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
      <section className="relative overflow-hidden" style={{ backgroundColor: "#12153D", padding: "96px 0" }}>
        <div className="absolute inset-0" style={DOT_GRID} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            {...fadeUp}
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(36px, 6vw, 64px)",
              lineHeight: 1.04,
              letterSpacing: "-0.02em",
              color: "white",
            }}
          >
            Guest posting,{" "}
            <span style={{ color: "#FF6B35" }}>done for you.</span>
          </motion.h2>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="mt-5 text-base max-w-lg mx-auto"
            style={{ color: "rgba(255,255,255,0.5)", fontFamily: "DM Sans, sans-serif", lineHeight: 1.75 }}
          >
            Links that rank on Google. Links that get cited by AI. Built and managed end-to-end by MaiGrowth.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.25 }}
            className="flex gap-4 justify-center mt-10 flex-wrap"
          >
            <Link href="/contact">
              <motion.span
                className="btn-primary"
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
          </motion.div>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.35 }}
            className="mt-6 text-xs"
            style={{ color: "rgba(255,255,255,0.25)", fontFamily: "DM Sans, sans-serif" }}
          >
            No commitment required · Expert analysis · Reply within 24 hours
          </motion.p>
        </div>
      </section>
    </div>
  );
}
