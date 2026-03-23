import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

const EASE = [0.22, 1, 0.36, 1] as const;

const PACKAGES = [
  {
    emoji: "🌱",
    name: "Market Entry",
    tagline: "Establish Your Footprint",
    desc: "Start building authority with a coordinated mix of Guest Posts and Link Insertions designed to move your foundational keywords.",
    price: "$1,299",
    was: "$1,499",
    perLink: "$130/link",
    savePct: "Save 13%",
    features: [
      "5× Guest Posts (DR 30+)",
      "5× Link Insertions (DR 30+)",
      "AI & LLM optimization",
      "Full placement reports",
    ],
    featured: false,
  },
  {
    emoji: "🚀",
    name: "Momentum Builder",
    tagline: "Accelerate Past Competitors",
    desc: "A proven campaign mix that moves target keywords into top 10 positions while building sustainable domain authority.",
    price: "$2,699",
    was: "$3,199",
    perLink: "$135/link",
    savePct: "Save 16%",
    features: [
      "10× Guest Posts (DR 30-40+)",
      "10× Link Insertions (DR 30-40+)",
      "AI & LLM optimization",
      "Weekly progress updates",
    ],
    featured: false,
  },
  {
    emoji: "🏆",
    name: "Authority Takeover",
    tagline: "Own Your Category",
    desc: "Our agency-favourite package. A full campaign system engineered to dominate your niche across Google and every AI answer engine.",
    price: "$5,399",
    was: "$6,699",
    perLink: "$134/link",
    savePct: "Save 19%",
    features: [
      "22× Guest Posts (DR 40-50+)",
      "18× Link Insertions (DR 40-50+)",
      "AI & LLM optimization",
      "Bi-weekly strategy calls",
    ],
    featured: true,
  },
  {
    emoji: "💪",
    name: "Market Leader",
    tagline: "Dominate Every Position",
    desc: "For brands ready to own their category. High-volume, high-DR placements that build an untouchable backlink profile.",
    price: "$8,999",
    was: "$11,599",
    perLink: "$150/link",
    savePct: "Save 22%",
    features: [
      "35× Guest Posts (DR 40-60+)",
      "25× Link Insertions (DR 40-60+)",
      "AI & LLM optimization",
      "Weekly strategy calls",
    ],
    featured: false,
  },
  {
    emoji: "👑",
    name: "Industry Standard",
    tagline: "Become The Reference",
    desc: "Reserved for industry leaders. A full-scale authority campaign that makes your brand the go-to reference in search and AI.",
    price: "$14,999",
    was: "$19,999",
    perLink: "$150/link",
    savePct: "Save 25%",
    features: [
      "60× Guest Posts (DR 50-60+)",
      "40× Link Insertions (DR 50-60+)",
      "AI & LLM optimization + audit",
      "Dedicated team (3 specialists)",
    ],
    featured: false,
  },
];

export default function ServicesOverview() {
  return (
    <section style={{ backgroundColor: "#EFEFED", padding: "112px 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="section-label">CAMPAIGN PACKAGES</span>
          <h2
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(30px, 4vw, 52px)",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              color: "#0F0F0F",
            }}
          >
            Pick Your Level of Dominance.
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto text-[17px] leading-relaxed"
            style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}
          >
            Every package combines Guest Posts + Link Insertions into one coordinated campaign — built to rank in Google and get your brand cited in every AI answer engine that matters.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {PACKAGES.map(({ emoji, name, tagline, desc, price, was, perLink, savePct, features, featured }, i) =>
            featured ? (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                whileHover={{ y: -12, transition: { duration: 0.3 } }}
                className="relative flex flex-col rounded-2xl"
                style={{ border: "2px solid #FF6B35", zIndex: 2 }}
                data-testid={`card-package-home-${name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  animate={{
                    boxShadow: [
                      "0 24px 72px rgba(255,107,53,0.2)",
                      "0 24px 72px rgba(255,107,53,0.42)",
                      "0 24px 72px rgba(255,107,53,0.2)",
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-5 py-1.5 rounded-full whitespace-nowrap z-10"
                  style={{ background: "linear-gradient(90deg, #FF6B35, #E85A25)" }}
                  animate={{
                    boxShadow: [
                      "0 4px 12px rgba(255,107,53,0.3)",
                      "0 4px 20px rgba(255,107,53,0.6)",
                      "0 4px 12px rgba(255,107,53,0.3)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  🔥 AGENCY FAVORITE
                </motion.div>
                <div className="p-7 flex flex-col flex-1 rounded-2xl" style={{ backgroundColor: "#FFFFFF" }}>
                  <div className="text-3xl mb-3">{emoji}</div>
                  <h3 className="font-syne font-bold text-xl mb-0.5" style={{ color: "#0F0F0F" }}>{name}</h3>
                  <p className="text-xs font-semibold mb-3" style={{ color: "#FF6B35", fontFamily: "DM Sans, sans-serif" }}>{tagline}</p>
                  <p className="text-xs mb-5 leading-relaxed" style={{ color: "#767676", fontFamily: "DM Sans, sans-serif" }}>{desc}</p>
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="font-syne font-extrabold text-2xl" style={{ color: "#0F0F0F" }}>{price}</span>
                      <span className="text-xs line-through" style={{ color: "#A8A8A8" }}>{was}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      <span className="text-xs" style={{ color: "#767676" }}>{perLink}</span>
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: "#FFF0EB", color: "#FF6B35" }}>{savePct}</span>
                    </div>
                  </div>
                  <div className="space-y-2 mb-6 flex-1" style={{ borderTop: "1px solid #E2E0DC", paddingTop: "1rem" }}>
                    {features.map((f) => (
                      <div key={f} className="flex items-start gap-2">
                        <CheckCircle2 size={13} className="flex-shrink-0 mt-0.5" style={{ color: "#00C47A" }} />
                        <span className="text-xs" style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/packages">
                    <motion.span
                      className="block text-center text-sm font-bold py-3.5 rounded-xl cursor-pointer text-white"
                      style={{ backgroundColor: "#FF6B35" }}
                      whileHover={{ scale: 1.03, boxShadow: "0 8px 28px rgba(255,107,53,0.4)" }}
                      whileTap={{ scale: 0.97 }}
                      data-testid={`button-package-home-${name.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      Start Dominating →
                    </motion.span>
                  </Link>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                whileHover={{ y: -12, transition: { duration: 0.3 } }}
                className="relative flex flex-col rounded-2xl"
                style={{ border: "1px solid #E2E0DC", backgroundColor: "#FFFFFF" }}
                data-testid={`card-package-home-${name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="p-7 flex flex-col flex-1">
                  <div className="text-3xl mb-3">{emoji}</div>
                  <h3 className="font-syne font-bold text-xl mb-0.5" style={{ color: "#0F0F0F" }}>{name}</h3>
                  <p className="text-xs font-semibold mb-3" style={{ color: "#FF6B35", fontFamily: "DM Sans, sans-serif" }}>{tagline}</p>
                  <p className="text-xs mb-5 leading-relaxed" style={{ color: "#767676", fontFamily: "DM Sans, sans-serif" }}>{desc}</p>
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="font-syne font-extrabold text-2xl" style={{ color: "#0F0F0F" }}>{price}</span>
                      <span className="text-xs line-through" style={{ color: "#A8A8A8" }}>{was}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      <span className="text-xs" style={{ color: "#767676" }}>{perLink}</span>
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: "#FFF0EB", color: "#FF6B35" }}>{savePct}</span>
                    </div>
                  </div>
                  <div className="space-y-2 mb-6 flex-1" style={{ borderTop: "1px solid #E2E0DC", paddingTop: "1rem" }}>
                    {features.map((f) => (
                      <div key={f} className="flex items-start gap-2">
                        <CheckCircle2 size={13} className="flex-shrink-0 mt-0.5" style={{ color: "#00C47A" }} />
                        <span className="text-xs" style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/packages">
                    <motion.span
                      className="block text-center text-sm font-bold py-3 rounded-xl cursor-pointer text-white"
                      style={{ backgroundColor: "#12153D" }}
                      whileHover={{ scale: 1.03, boxShadow: "0 8px 28px rgba(18,21,61,0.25)" }}
                      whileTap={{ scale: 0.97 }}
                      data-testid={`button-package-home-${name.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      Get Started
                    </motion.span>
                  </Link>
                </div>
              </motion.div>
            )
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: "rgba(255,107,53,0.05)",
            border: "1px solid rgba(255,107,53,0.2)",
            borderRadius: "16px",
            padding: "28px 32px",
            maxWidth: "680px",
            margin: "40px auto 0",
            display: "flex",
            alignItems: "flex-start",
            gap: "16px",
          }}
        >
          <span style={{ fontSize: "18px", flexShrink: 0, marginTop: "3px" }}>⚡</span>
          <div>
            <p style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              color: "#FF6B35",
              marginBottom: "8px",
            }}>
              Why MaiGrowth links show up in ChatGPT and Perplexity
            </p>
            <p style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "13px",
              lineHeight: "1.75",
              color: "#3D3D3D",
            }}>
              We only place links on websites that AI tools regularly reference as trusted sources. So when someone asks ChatGPT or Perplexity a question in your niche, your brand is more likely to appear in the answer. Every Guest Post and Link Insertion we build works this way. No extra cost. No separate service. Just better links.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-14"
        >
          <Link href="/packages" data-testid="button-view-all-packages">
            <motion.span
              className="btn-secondary"
              whileHover={{ scale: 1.02, transition: { duration: 0.18 } }}
              whileTap={{ scale: 0.97 }}
            >
              See Full Package Details →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
