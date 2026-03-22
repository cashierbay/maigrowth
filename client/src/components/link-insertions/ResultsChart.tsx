import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const bars = [
  { label: "Month 1", height: 30, pct: "100%" },
  { label: "Month 3", height: 50, pct: "182%" },
  { label: "Month 6", height: 75, pct: "231%" },
  { label: "Month 12", height: 100, pct: "340%" },
];

const results = [
  "Average 340% organic traffic growth within 12 months",
  "First-page rankings achieved within 60 days on average",
  "DR increases of 8–15 points within 6 months",
  "Consistent month-over-month growth with zero penalties",
  "AI citation rates increase by up to 4× for linked pages",
];

export default function ResultsChart() {
  return (
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
            Real Results, Not Promises
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)" }} className="text-base max-w-xl mx-auto">
            Average performance across MaiGrowth Link Insertion campaigns.
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
            <p className="text-sm font-semibold mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
              Organic Traffic Growth
            </p>

            {/* Row 1: percentage labels above the bars */}
            <div className="flex gap-4 mb-2">
              {bars.map((b) => (
                <div key={b.label} className="flex-1 text-center">
                  <span className="text-xs font-bold" style={{ color: "#FF6B35" }}>{b.pct}</span>
                </div>
              ))}
            </div>

            {/* Row 2: fixed-height bar area — bars grow upward from the bottom */}
            <div className="flex items-end gap-4" style={{ height: 160 }}>
              {bars.map((b, i) => (
                <motion.div
                  key={b.label}
                  className="flex-1 rounded-t-lg"
                  style={{
                    background: "linear-gradient(to top, #E85A25, #FF6B35)",
                    minHeight: 4,
                  }}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${b.height}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: EASE, delay: i * 0.12 }}
                />
              ))}
            </div>

            {/* Row 3: month labels below the bars */}
            <div className="flex gap-4 mt-2">
              {bars.map((b) => (
                <div key={b.label} className="flex-1 text-center">
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>{b.label}</span>
                </div>
              ))}
            </div>

            <p className="text-xs mt-4 text-center" style={{ color: "rgba(255,255,255,0.3)" }}>
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
            {results.map((r, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: EASE, delay: i * 0.08 }}
              >
                <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5" style={{ color: "#00C47A" }} />
                <p className="text-base" style={{ color: "rgba(255,255,255,0.8)" }}>{r}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
