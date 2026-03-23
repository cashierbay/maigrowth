import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const COMPONENTS = [
  {
    emoji: "📝",
    title: "Guest Posts",
    desc: "Brand-new 1,000+ word editorial articles, written by expert SEO writers and placed on high-DR blogs through manual outreach.",
    includes: ["Original expert content", "Manual blogger outreach", "DR 30–60+ placements", "Do-follow editorial links"],
    value: "$150–$300 per post",
  },
  {
    emoji: "🔗",
    title: "Link Insertions",
    desc: "Your link placed into existing, aged, high-traffic articles — faster authority transfer with zero content creation overhead.",
    includes: ["Existing high-traffic articles", "Contextual in-content placement", "DR 30–60+ sites", "Do-follow links"],
    value: "$80–$150 per link",
  },
  {
    emoji: "🤖",
    title: "AI & LLM Optimization",
    desc: "Every placement is engineered to get your brand cited in ChatGPT, Perplexity, and Google AI Overviews — not just ranked on Google.",
    includes: ["Entity optimization", "Brand mention strategy", "AI Overviews targeting", "Citation monitoring"],
    value: "Included free",
  },
];

export default function ValueBreakdown() {
  return (
    <section style={{ backgroundColor: "#12153D", padding: "96px 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <span
            className="text-xs font-semibold uppercase tracking-widest block mb-3"
            style={{ color: "#FF6B35", fontFamily: "DM Sans, sans-serif" }}
          >
            WHAT'S INSIDE
          </span>
          <h2
            className="font-syne font-extrabold text-white leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            You Get a System,{" "}
            <span style={{ color: "#FF6B35" }}>Not Just Links.</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-base" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "DM Sans, sans-serif" }}>
            Every package combines three proven components into one coordinated campaign. Here's what's working for you behind the scenes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COMPONENTS.map(({ emoji, title, desc, includes, value }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: EASE }}
              className="rounded-2xl p-7"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              whileHover={{ borderColor: "rgba(255,107,53,0.4)", transition: { duration: 0.2 } }}
              data-testid={`card-value-${title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="text-4xl mb-4">{emoji}</div>
              <h3 className="font-syne font-bold text-xl text-white mb-3">{title}</h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "DM Sans, sans-serif" }}>{desc}</p>

              <div className="space-y-2 mb-5">
                {includes.map((inc) => (
                  <div key={inc} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#FF6B35" }} />
                    <span className="text-xs" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "DM Sans, sans-serif" }}>{inc}</span>
                  </div>
                ))}
              </div>

              <div
                className="rounded-xl px-4 py-3 flex items-center justify-between"
                style={{ backgroundColor: "rgba(255,107,53,0.1)", border: "1px solid rgba(255,107,53,0.2)" }}
              >
                <span className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "DM Sans, sans-serif" }}>Market rate</span>
                <span className="text-sm font-bold" style={{ color: "#FF6B35", fontFamily: "Syne, sans-serif" }}>{value}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
