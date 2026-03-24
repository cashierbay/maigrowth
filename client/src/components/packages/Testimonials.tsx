import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const TESTIMONIALS = [
  {
    initials: "CC",
    name: "Craig C.",
    company: "Craig Campbell SEO",
    badge: "📈 +340% Organic Traffic",
    investment: "Authority Takeover",
    roi: "11× ROI in 8 Months",
    quote: "MaiGrowth provided amazing guest posts that actually moved the needle on my websites. The process is smooth and the quality is outstanding. The AI citation strategy is a game-changer — my brand now shows up in AI answers consistently.",
    from: "left",
  },
  {
    initials: "GD",
    name: "Gareth D.",
    company: "Daine Media",
    badge: "🎯 Page 1 Rankings: 12 Keywords",
    investment: "Market Leader",
    roi: "Client Revenue Up 280%",
    quote: "We've used MaiGrowth across dozens of client projects. The turnaround time is excellent, the quality is exceptional, and the reporting is agency-ready. Our clients see measurable ranking improvements within 60 days consistently.",
    from: "right",
  },
  {
    initials: "JD",
    name: "James D.",
    company: "FatRank",
    badge: "🤖 Featured in ChatGPT",
    investment: "Momentum Builder (6 months)",
    roi: "Category Authority Established",
    quote: "MaiGrowth is a must-have link vendor for any serious SEO. Ignore third-party metrics — just look at backlinks that move the needle. They are the single best link building investment I've made, and I've tested them all.",
    from: "left",
  },
];

export default function Testimonials() {
  return (
    <section style={{ backgroundColor: "#12153D", padding: "clamp(40px, 8vw, 96px) 0" }}>
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
            PROOF
          </span>
          <h2
            className="font-syne font-extrabold text-white leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            The People Who{" "}
            <span style={{ color: "#FF6B35" }}>Already Own Their Category.</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: t.from === "left" ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.05 }}
              className="rounded-2xl p-8"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              whileHover={{ borderColor: "rgba(255,107,53,0.3)", transition: { duration: 0.2 } }}
              data-testid={`card-testimonial-${t.initials.toLowerCase()}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6">
                <div>
                  {/* Result badge */}
                  <span
                    className="inline-block text-xs font-bold px-3 py-1.5 rounded-full mb-4"
                    style={{ backgroundColor: "rgba(255,107,53,0.15)", color: "#FF6B35" }}
                  >
                    {t.badge}
                  </span>

                  <p className="text-lg italic leading-relaxed mb-5 text-white" style={{ fontFamily: "DM Sans, sans-serif" }}>
                    "{t.quote}"
                  </p>

                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#FF6B35" }}
                    >
                      <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 12, color: "white" }}>
                        {t.initials}
                      </span>
                    </div>
                    <div>
                      <p className="font-syne font-bold text-white text-sm">{t.name}</p>
                      <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "DM Sans, sans-serif" }}>{t.company}</p>
                    </div>
                  </div>
                </div>

                {/* Investment / ROI box */}
                <div
                  className="rounded-xl p-5 flex flex-col justify-center text-center min-w-[180px]"
                  style={{
                    backgroundColor: "rgba(255,107,53,0.1)",
                    border: "1px solid rgba(255,107,53,0.2)",
                  }}
                >
                  <div className="text-xs uppercase tracking-wider mb-1" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "DM Sans, sans-serif" }}>
                    Package
                  </div>
                  <div className="text-sm font-bold mb-4 text-white" style={{ fontFamily: "Syne, sans-serif" }}>
                    {t.investment}
                  </div>
                  <div className="text-xs uppercase tracking-wider mb-1" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "DM Sans, sans-serif" }}>
                    Result
                  </div>
                  <div className="text-sm font-bold" style={{ color: "#00C47A", fontFamily: "Syne, sans-serif" }}>
                    {t.roi}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
