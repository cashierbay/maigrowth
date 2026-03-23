import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const ROWS = [
  { feature: "AI & LLM Optimization", diy: "✗", agency: "✗", mai: "✓" },
  { feature: "Guaranteed Minimum Traffic", diy: "✗", agency: "Varies", mai: "✓" },
  { feature: "Link Replacement Guarantee", diy: "✗", agency: "✗", mai: "✓" },
  { feature: "Original Content Included", diy: "✗", agency: "Extra cost", mai: "✓" },
  { feature: "Site Pre-Approval Option", diy: "N/A", agency: "✗", mai: "✓" },
  { feature: "Dedicated Account Manager", diy: "✗", agency: "Sometimes", mai: "✓" },
  { feature: "100% White-Hat Only", diy: "Varies", agency: "Varies", mai: "✓" },
  { feature: "Campaign Strategy Included", diy: "✗", agency: "Extra cost", mai: "✓" },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { transition: { staggerChildren: 0.07 } },
};

const rowVariant = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE } },
};

function Cell({ val }: { val: string }) {
  if (val === "✓") return <span style={{ color: "#00C47A", fontSize: 18 }}>✓</span>;
  if (val === "✗") return <span style={{ color: "#EF4444", fontSize: 18 }}>✗</span>;
  return <span className="text-xs" style={{ color: "#A8A8A8" }}>{val}</span>;
}

export default function ComparisonTable() {
  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "96px 0" }}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <span
            className="text-xs font-semibold uppercase tracking-widest block mb-3"
            style={{ color: "#FF6B35", fontFamily: "DM Sans, sans-serif" }}
          >
            WHY MAIGROWTH
          </span>
          <h2
            className="font-syne font-extrabold leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", color: "#0F0F0F" }}
          >
            The Honest Comparison.
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-base" style={{ color: "#767676", fontFamily: "DM Sans, sans-serif" }}>
            Most agencies won't show you this table. We built it because we win on every row.
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
                <th className="py-4 px-6 text-left text-sm font-bold" style={{ backgroundColor: "#EFEFED", color: "#3D3D3D", fontFamily: "Syne, sans-serif" }}>
                  Feature
                </th>
                <th className="py-4 px-6 text-center text-sm font-bold" style={{ backgroundColor: "#EFEFED", color: "#767676", fontFamily: "Syne, sans-serif" }}>
                  DIY
                </th>
                <th className="py-4 px-6 text-center text-sm font-bold" style={{ backgroundColor: "#EFEFED", color: "#767676", fontFamily: "Syne, sans-serif" }}>
                  Other Agencies
                </th>
                <th className="py-4 px-6 text-center text-sm font-bold text-white" style={{ backgroundColor: "#FF6B35", fontFamily: "Syne, sans-serif" }}>
                  MaiGrowth
                </th>
              </tr>
            </thead>
            <motion.tbody
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {ROWS.map((row, i) => (
                <motion.tr
                  key={row.feature}
                  variants={rowVariant}
                  style={{
                    backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#F7F6F4",
                    borderTop: "1px solid #E2E0DC",
                  }}
                >
                  <td className="py-4 px-6 text-sm font-medium" style={{ color: "#0F0F0F", fontFamily: "DM Sans, sans-serif" }}>
                    {row.feature}
                  </td>
                  <td className="py-4 px-6 text-center"><Cell val={row.diy} /></td>
                  <td className="py-4 px-6 text-center"><Cell val={row.agency} /></td>
                  <td className="py-4 px-6 text-center"><Cell val={row.mai} /></td>
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
