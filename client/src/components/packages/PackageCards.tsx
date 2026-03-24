import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const PACKAGES = [
  {
    emoji: "🌱",
    name: "Market Entry",
    tagline: "Establish Your Footprint",
    desc: "Start building authority with a coordinated mix of Guest Posts and Link Insertions designed to move your foundational keywords.",
    price: "$1,299",
    was: "$1,499",
    saved: "$200",
    perLink: "$130/link",
    savePct: "Save 13%",
    features: [
      "5× Guest Posts (DR 30+)",
      "5× Link Insertions (DR 30+)",
      "AI & LLM optimization",
      "Dedicated account manager",
      "Full placement reports",
      "12-month link guarantee",
    ],
    featured: false,
  },
  {
    emoji: "🚀",
    name: "Momentum Builder",
    tagline: "Accelerate Past Competitors",
    desc: "A proven campaign mix that starts moving target keywords into top 10 positions while building sustainable domain authority.",
    price: "$2,699",
    was: "$3,199",
    saved: "$500",
    perLink: "$135/link",
    savePct: "Save 16%",
    features: [
      "10× Guest Posts (DR 30-40+)",
      "10× Link Insertions (DR 30-40+)",
      "AI & LLM optimization",
      "Content strategy session",
      "Dedicated account manager",
      "Weekly progress updates",
      "12-month link guarantee",
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
    saved: "$1,300",
    perLink: "$134/link",
    savePct: "Save 19%",
    features: [
      "22× Guest Posts (DR 40-50+)",
      "18× Link Insertions (DR 40-50+)",
      "AI & LLM optimization",
      "Full content strategy",
      "Dedicated senior manager",
      "Bi-weekly strategy calls",
      "Competitor gap analysis",
      "12-month link guarantee",
    ],
    featured: true,
  },
  {
    emoji: "💪",
    name: "Market Leader",
    tagline: "Dominate Every Search Position",
    desc: "For brands ready to own their category. High-volume, high-DR placements that build an untouchable backlink profile.",
    price: "$8,999",
    was: "$11,599",
    saved: "$2,600",
    perLink: "$150/link",
    savePct: "Save 22%",
    features: [
      "35× Guest Posts (DR 40-60+)",
      "25× Link Insertions (DR 40-60+)",
      "AI & LLM optimization",
      "Full content + creation",
      "Dedicated senior manager",
      "Weekly strategy calls",
      "Monthly performance audit",
      "12-month link guarantee",
    ],
    featured: false,
  },
  {
    emoji: "👑",
    name: "Industry Standard",
    tagline: "Become The Reference",
    desc: "Reserved for industry leaders. A full-scale authority campaign that makes your brand the go-to reference — in search and AI.",
    price: "$14,999",
    was: "$19,999",
    saved: "$5,000",
    perLink: "$150/link",
    savePct: "Save 25%",
    features: [
      "60× Guest Posts (DR 50-60+)",
      "40× Link Insertions (DR 50-60+)",
      "AI & LLM optimization + audit",
      "Full content + PR strategy",
      "Dedicated team (3 specialists)",
      "Weekly strategy sessions",
      "Monthly CEO briefing",
      "12-month link guarantee",
    ],
    featured: false,
  },
];

export default function PackageCards() {
  return (
    <section id="packages" style={{ backgroundColor: "#F7F6F4", padding: "clamp(40px, 8vw, 112px) 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center mb-16"
        >
          <span
            className="text-xs font-semibold uppercase tracking-widest block mb-3"
            style={{ color: "#FF6B35", fontFamily: "DM Sans, sans-serif" }}
          >
            CAMPAIGN PACKAGES
          </span>
          <h2
            className="font-syne font-extrabold leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", color: "#0F0F0F" }}
          >
            Choose Your Level of Dominance
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-base" style={{ color: "#767676", fontFamily: "DM Sans, sans-serif" }}>
            All packages combine Guest Posts + Link Insertions into one coordinated campaign.
            No guesswork. No wasted budget.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {PACKAGES.map(({ emoji, name, tagline, desc, price, was, saved, perLink, savePct, features, featured }, i) =>
            featured ? (
              /* Featured card — glow pulse on wrapper, separate from reveal animation */
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                whileHover={{ y: -12, transition: { duration: 0.3 } }}
                className="relative flex flex-col rounded-2xl"
                style={{ border: "2px solid #FF6B35", zIndex: 2 }}
                data-testid={`card-package-${name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {/* Glow pulse sits inside, on a child — doesn't affect parent opacity/y */}
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

                {/* Agency Favourite badge */}
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

                  {/* AI badge with shimmer */}
                  <div className="relative overflow-hidden self-start text-white text-xs font-bold px-4 py-1.5 rounded-full mb-5" style={{ background: "linear-gradient(90deg, #FF6B35, #E85A25)" }}>
                    <motion.div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)" }}
                      animate={{ x: ["-200%", "200%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                    🤖 AI &amp; LLM Ready
                  </div>

                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="font-syne font-extrabold text-2xl" style={{ color: "#0F0F0F" }}>{price}</span>
                      <span className="text-xs line-through" style={{ color: "#A8A8A8" }}>{was}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      <span className="text-xs" style={{ color: "#767676" }}>{perLink}</span>
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: "#FFF0EB", color: "#FF6B35" }}>
                        {savePct}
                      </span>
                      <span className="text-xs font-bold" style={{ color: "#00C47A" }}>Save {saved}</span>
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

                  <Link href="/contact">
                    <motion.span
                      className="block text-center text-sm font-bold py-3.5 rounded-xl cursor-pointer text-white"
                      style={{ backgroundColor: "#FF6B35" }}
                      whileHover={{ scale: 1.03, boxShadow: "0 8px 28px rgba(255,107,53,0.4)" }}
                      whileTap={{ scale: 0.97 }}
                      data-testid={`button-package-${name.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      Start Dominating →
                    </motion.span>
                  </Link>
                </div>
              </motion.div>
            ) : (
              /* Non-featured cards — simple reveal */
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                whileHover={{ y: -12, transition: { duration: 0.3 } }}
                className="relative flex flex-col rounded-2xl"
                style={{ border: "1px solid #E2E0DC", backgroundColor: "#FFFFFF" }}
                data-testid={`card-package-${name.toLowerCase().replace(/\s+/g, "-")}`}
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
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: "#FFF0EB", color: "#FF6B35" }}>
                        {savePct}
                      </span>
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

                  <Link href="/contact">
                    <motion.span
                      className="block text-center text-sm font-bold py-3 rounded-xl cursor-pointer text-white"
                      style={{ backgroundColor: "#12153D" }}
                      whileHover={{ scale: 1.03, boxShadow: "0 8px 28px rgba(18,21,61,0.25)" }}
                      whileTap={{ scale: 0.97 }}
                      data-testid={`button-package-${name.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      Get Started
                    </motion.span>
                  </Link>
                </div>
              </motion.div>
            )
          )}
        </div>

        {/* Not sure box */}
        <motion.div
          className="mt-14 rounded-2xl px-8 py-8 text-center"
          style={{ backgroundColor: "#12153D" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <p className="font-syne font-bold text-xl text-white mb-2">Not sure which package fits your goals?</p>
          <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "DM Sans, sans-serif" }}>
            Book a free 20-minute strategy call and we will build a custom campaign recommendation — at no cost.
          </p>
          <Link href="/contact">
            <motion.span
              className="inline-block font-semibold rounded-full px-8 py-3.5 text-white text-sm cursor-pointer"
              style={{ backgroundColor: "#FF6B35" }}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 28px rgba(255,107,53,0.32)" }}
              whileTap={{ scale: 0.97 }}
              data-testid="button-packages-custom"
            >
              Book Free Strategy Call →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
