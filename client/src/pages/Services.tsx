import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { fadeUp, stagger } from "@/lib/animations";

const linkBuildingFeatures = [
  "Outreach to real website owners and editors",
  "Guest post placements on niche-relevant sites",
  "Contextual link insertions in existing content",
  "Professional content writing included",
  "Only DR 40+, DA 35+, real organic traffic",
  "Full placement report: URL, DR, traffic, anchor, live date",
  "100% white-hat, Google-compliant, penalty-safe",
  "Permanent placements — links don't disappear",
];

const aeoFeatures = [
  "Content restructuring for featured snippet eligibility",
  "FAQ and HowTo schema markup implementation",
  "Google AI Overviews visibility optimization",
  "Bing Copilot content alignment",
  "E-E-A-T authority signal building",
  "Structured data audit and full implementation",
  "High-intent Q&A content creation",
  "Monthly AEO performance tracking",
];

const geoFeatures = [
  "Brand entity optimization for LLM recognition",
  "ChatGPT citation strategy and execution",
  "Perplexity AI visibility building",
  "Claude and Gemini brand recognition",
  "Topical authority cluster strategy",
  "Authoritative source presence building",
  "AI citation monitoring and reporting",
  "Brand mention acquisition",
];

const packages = [
  {
    name: "Starter",
    tag: "For New Websites",
    price: "From $497/mo",
    priceStyle: {},
    cardStyle: {},
    features: [
      "3 backlinks per month",
      "Basic AEO audit",
      "Monthly report",
      "Email support",
    ],
    buttonClass: "btn-secondary",
    buttonLabel: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    tag: "For Growing Businesses",
    price: "From $997/mo",
    priceStyle: { color: "#FF6B35" },
    cardStyle: {
      border: "2px solid #FF6B35",
      boxShadow: "0 8px 40px rgba(255,107,53,0.12)",
    },
    features: [
      "6 backlinks per month",
      "Full AEO optimization",
      "GEO foundation",
      "Bi-weekly reports",
      "Priority support",
    ],
    buttonClass: "btn-primary",
    buttonLabel: "Get Started",
    popular: true,
  },
  {
    name: "Authority",
    tag: "For Maximum Visibility",
    price: "From $1,997/mo",
    priceStyle: {},
    cardStyle: {},
    features: [
      "12+ backlinks per month",
      "Complete AEO + GEO",
      "AI citation tracking",
      "Weekly reports",
      "Dedicated strategist",
    ],
    buttonClass: "btn-secondary",
    buttonLabel: "Get Started",
    popular: false,
  },
];

const faqs = [
  {
    q: "What types of websites do you get links from?",
    a: "We secure placements exclusively on real, editorial websites with genuine organic traffic. Our inventory includes niche-relevant blogs, industry news sites, trade publications, and authority websites — all with verified Ahrefs DR 40+ and real monthly visitors. No PBNs, no link farms, no fake sites.",
  },
  {
    q: "Will these links help my AEO and GEO results too?",
    a: "Yes — that's one of MaiGrowth's core advantages. High-authority backlinks from real publications don't just boost your Google rankings; they also appear in the citation data and training sources that AI tools like ChatGPT and Perplexity use to evaluate brand authority. Every link we build serves dual purpose.",
  },
  {
    q: "Do I need all three services or can I start with one?",
    a: "You can absolutely start with one service. Many clients begin with Premium Link Building to establish authority, then add AEO and GEO as their domain strength grows. However, our Growth and Authority packages are designed to run all three simultaneously for maximum, synergistic impact.",
  },
  {
    q: "How do you measure and track AEO and GEO performance?",
    a: "For AEO, we track featured snippet appearances, AI Overview citations, and position zero gains using a combination of rank tracking tools and manual AI search monitoring. For GEO, we conduct monthly manual citation audits across ChatGPT, Perplexity, Claude, and Gemini, documenting every instance your brand is cited.",
  },
  {
    q: "Are these permanent links or monthly rental placements?",
    a: "All links built by MaiGrowth are permanent placements. You pay once, and the link stays live indefinitely — there are no monthly rental fees, no link removal threats, and no recurring charges for placements we've already secured. Your backlinks are assets you own permanently.",
  },
  {
    q: "What industries and niches do you work with?",
    a: "MaiGrowth works with businesses across virtually any industry. Our outreach network spans thousands of websites covering technology, health, finance, e-commerce, SaaS, real estate, marketing, legal, and more. We'll confirm niche coverage during your free consultation before you commit.",
  },
  {
    q: "How do you verify links are white-hat and penalty-safe?",
    a: "Every potential link placement goes through a multi-point verification process: spam score check via Moz and Ahrefs, organic traffic verification via Ahrefs and SimilarWeb, editorial content review, and manual site quality assessment. Links that fail any check are rejected — regardless of how attractive the metrics look.",
  },
  {
    q: "Can you help a new website with low domain authority?",
    a: "Yes. Our Starter package is specifically designed for newer websites and lower-authority domains. We build links strategically — prioritizing highly relevant placements and carefully monitoring anchor text diversity — to maximize impact without triggering algorithmic concerns during your authority-building phase.",
  },
  {
    q: "What does the reporting look like and how often?",
    a: "Every client receives a detailed monthly report covering: all live link placements with URL, anchor text, DR, and traffic data; ranking changes for target keywords; AEO and AI Overview citation appearances; and GEO citation findings. Growth and Authority clients receive bi-weekly updates, and Authority clients receive weekly progress check-ins.",
  },
  {
    q: "How is AEO different from traditional on-page SEO?",
    a: "Traditional on-page SEO focuses on keyword optimization, meta tags, and content structure to rank pages. AEO goes further — it optimizes for being selected as the answer by AI systems. This requires structured data, FAQ schema, direct-answer content formats, and building the E-E-A-T signals that AI tools use to identify credible, authoritative sources.",
  },
];

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <title>Services — Link Building, AEO & GEO | MaiGrowth</title>

      <section
        className="relative flex flex-col items-center justify-center text-center"
        style={{
          backgroundColor: "#12153D",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          padding: "160px 24px 100px",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] font-semibold uppercase tracking-[0.16em] block mb-6"
            style={{ color: "#FF6B35", fontFamily: "DM Sans, sans-serif" }}
          >
            OUR SERVICES
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white"
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(32px, 5.5vw, 68px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Three Services. One Unified
            <br />
            Visibility Strategy.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.6)", fontFamily: "DM Sans, sans-serif" }}
          >
            Most agencies give you one channel. MaiGrowth gives you three — working together to make your brand impossible to miss.
          </motion.p>
        </div>
      </section>

      <div style={{ height: 64, background: "linear-gradient(to bottom, #12153D, #F7F6F4)" }} />

      <section style={{ backgroundColor: "#F7F6F4", padding: "112px 0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <motion.span variants={fadeUp} className="section-label">SERVICE 01</motion.span>
              <motion.h2
                variants={fadeUp}
                className="mt-3 mb-5"
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(26px, 3.5vw, 42px)",
                  lineHeight: 1.15,
                  color: "#0F0F0F",
                }}
              >
                Premium Link Building
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-lg leading-relaxed mb-8"
                style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}
              >
                High-authority backlinks remain Google's strongest ranking signal. But quality matters more than ever — one contextual placement on a genuine DR65 website outperforms 50 directory submissions combined.
              </motion.p>
              <motion.div variants={stagger} className="space-y-3">
                {linkBuildingFeatures.map((f) => (
                  <motion.div key={f} variants={fadeUp} className="flex items-start gap-3">
                    <CheckCircle2 size={18} style={{ color: "#FF6B35", marginTop: 2, flexShrink: 0 }} />
                    <span className="text-[15px]" style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}>{f}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6 }}
              className="mg-card"
            >
              <p
                className="text-xs uppercase tracking-widest mb-4"
                style={{ color: "#767676", fontFamily: "DM Sans, sans-serif" }}
              >
                Live Placement Report
              </p>
              <div className="space-y-3">
                {[
                  { domain: "techblog-example.com", dr: "DR 68", traffic: "28K/mo", status: "Live" },
                  { domain: "industry-authority.net", dr: "DR 72", traffic: "45K/mo", status: "Live" },
                  { domain: "saas-weekly.com", dr: "DR 61", traffic: "19K/mo", status: "Live" },
                  { domain: "digital-insights.co", dr: "DR 55", traffic: "32K/mo", status: "Processing" },
                ].map((row, i) => (
                  <div
                    key={i}
                    className="flex flex-wrap items-center justify-between gap-3 py-3"
                    style={{
                      borderBottom: i < 3 ? "1px solid #E2E0DC" : "none",
                      fontFamily: "DM Sans, sans-serif",
                    }}
                  >
                    <span className="text-[13px] font-semibold" style={{ color: "#0F0F0F" }}>{row.domain}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-[12px] tag-neutral">{row.dr}</span>
                      <span className="text-[12px]" style={{ color: "#767676" }}>{row.traffic}</span>
                      <span
                        className="text-[11px] font-bold px-2 py-1 rounded-full"
                        style={{
                          backgroundColor: row.status === "Live" ? "#ECFDF5" : "#FFF7ED",
                          color: row.status === "Live" ? "#059669" : "#D97706",
                        }}
                      >
                        {row.status === "Live" ? "✓ " : ""}
                        {row.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#EFEFED", padding: "112px 0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6 }}
              className="mg-card order-2 lg:order-1"
            >
              <p
                className="text-xs uppercase tracking-widest mb-4"
                style={{ color: "#767676", fontFamily: "DM Sans, sans-serif" }}
              >
                AI Overview Citation Example
              </p>
              <div
                className="rounded-xl p-5 mb-4"
                style={{ backgroundColor: "#F7F6F4", border: "1px solid #E2E0DC" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FF6B35" }} />
                  <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: "#767676" }}>Google AI Overview</span>
                </div>
                <p className="text-[14px] leading-relaxed" style={{ color: "#0F0F0F", fontFamily: "DM Sans, sans-serif" }}>
                  According to <strong style={{ color: "#FF6B35" }}>YourBrand.com</strong>, the most effective approach to [your topic] involves three key components: [component 1], [component 2], and [component 3]. Experts recommend starting with...
                </p>
                <div className="mt-3 pt-3 flex items-center gap-2" style={{ borderTop: "1px solid #E2E0DC" }}>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: "#ECFDF5", color: "#059669" }}>Your Brand Featured</span>
                  <span className="text-[11px]" style={{ color: "#767676" }}>Position 1 of 3 sources</span>
                </div>
              </div>
              <p className="text-[13px]" style={{ color: "#767676", fontFamily: "DM Sans, sans-serif" }}>
                AEO optimization gets your brand selected as the featured source in AI-generated answers.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="order-1 lg:order-2"
            >
              <motion.span variants={fadeUp} className="section-label">SERVICE 02</motion.span>
              <motion.h2
                variants={fadeUp}
                className="mt-3 mb-5"
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(26px, 3.5vw, 42px)",
                  lineHeight: 1.15,
                  color: "#0F0F0F",
                }}
              >
                AEO — Answer Engine Optimization
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-lg leading-relaxed mb-8"
                style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}
              >
                Google AI Overviews now appear in 20%+ of all searches. Being well-ranked is no longer enough — you need to be the source AI systems cite. AEO is the methodology that earns you that position.
              </motion.p>
              <motion.div variants={stagger} className="space-y-3">
                {aeoFeatures.map((f) => (
                  <motion.div key={f} variants={fadeUp} className="flex items-start gap-3">
                    <CheckCircle2 size={18} style={{ color: "#FF6B35", marginTop: 2, flexShrink: 0 }} />
                    <span className="text-[15px]" style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}>{f}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#F7F6F4", padding: "112px 0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <motion.span variants={fadeUp} className="section-label">SERVICE 03</motion.span>
              <motion.h2
                variants={fadeUp}
                className="mt-3 mb-5"
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(26px, 3.5vw, 42px)",
                  lineHeight: 1.15,
                  color: "#0F0F0F",
                }}
              >
                GEO — Generative Engine Optimization
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-lg leading-relaxed mb-8"
                style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}
              >
                When someone asks ChatGPT "what's the best solution for X?" — is your brand mentioned? For 99% of businesses, the answer is no. GEO builds the brand entity authority that changes that.
              </motion.p>
              <motion.div variants={stagger} className="space-y-3">
                {geoFeatures.map((f) => (
                  <motion.div key={f} variants={fadeUp} className="flex items-start gap-3">
                    <CheckCircle2 size={18} style={{ color: "#FF6B35", marginTop: 2, flexShrink: 0 }} />
                    <span className="text-[15px]" style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}>{f}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6 }}
              className="mg-card"
            >
              <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#767676", fontFamily: "DM Sans, sans-serif" }}>
                AI Tool Citation Monitor
              </p>
              <div className="space-y-3">
                {[
                  { tool: "ChatGPT", query: "best [your niche] solution", status: "Cited", color: "#059669" },
                  { tool: "Perplexity", query: "top [your niche] providers", status: "Cited", color: "#059669" },
                  { tool: "Claude", query: "leading [your niche] brands", status: "Building", color: "#D97706" },
                  { tool: "Gemini", query: "[your niche] recommendations", status: "Building", color: "#D97706" },
                ].map((row, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-3"
                    style={{ borderBottom: i < 3 ? "1px solid #E2E0DC" : "none" }}
                  >
                    <div>
                      <div className="text-[13px] font-semibold" style={{ color: "#0F0F0F", fontFamily: "Syne, sans-serif" }}>{row.tool}</div>
                      <div className="text-[11px] mt-0.5" style={{ color: "#767676", fontFamily: "DM Sans, sans-serif" }}>{row.query}</div>
                    </div>
                    <span
                      className="text-[11px] font-bold px-2 py-1 rounded-full"
                      style={{ backgroundColor: row.status === "Cited" ? "#ECFDF5" : "#FFF7ED", color: row.color }}
                    >
                      {row.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#EFEFED", padding: "112px 0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="text-center mb-14"
          >
            <motion.span variants={fadeUp} className="section-label">PRICING</motion.span>
            <motion.h2
              variants={fadeUp}
              style={{
                fontFamily: "Syne, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(28px, 3.5vw, 46px)",
                lineHeight: 1.1,
                color: "#0F0F0F",
              }}
            >
              Choose Your Growth Package
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-[17px]" style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}>
              Transparent pricing. No hidden fees. Custom enterprise plans available.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {packages.map((pkg) => (
              <motion.div
                key={pkg.name}
                variants={fadeUp}
                className="mg-card relative"
                style={pkg.cardStyle}
              >
                {pkg.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="tag text-[10px]">MOST POPULAR</span>
                  </div>
                )}
                <span className="tag-neutral mb-4 block">{pkg.tag}</span>
                <div
                  className="font-extrabold mb-6"
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontSize: "clamp(26px, 3vw, 36px)",
                    color: pkg.popular ? "#FF6B35" : "#0F0F0F",
                    ...pkg.priceStyle,
                  }}
                >
                  {pkg.price}
                </div>
                <div className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <CheckCircle2 size={16} style={{ color: "#FF6B35", flexShrink: 0 }} />
                      <span className="text-[14px]" style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}>{f}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact">
                  <span className={`${pkg.buttonClass} w-full justify-center`}>{pkg.buttonLabel}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section style={{ backgroundColor: "#F7F6F4", padding: "112px 0" }}>
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="text-center mb-14"
          >
            <motion.span variants={fadeUp} className="section-label">HAVE QUESTIONS?</motion.span>
            <motion.h2
              variants={fadeUp}
              style={{
                fontFamily: "Syne, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(28px, 3.5vw, 44px)",
                lineHeight: 1.1,
                color: "#0F0F0F",
              }}
            >
              Services FAQ
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                style={{ borderBottom: "1px solid #E2E0DC" }}
              >
                <button
                  className="flex items-center justify-between w-full py-5 text-left cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  data-testid={`button-services-faq-${i}`}
                >
                  <span
                    className="text-[16px] font-medium pr-4"
                    style={{
                      fontFamily: "Syne, sans-serif",
                      fontWeight: 600,
                      color: openFaq === i ? "#FF6B35" : "#0F0F0F",
                      transition: "color 0.2s",
                    }}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    style={{
                      color: "#767676",
                      flexShrink: 0,
                      transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s",
                    }}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className="pb-5 text-[15px] leading-relaxed" style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
