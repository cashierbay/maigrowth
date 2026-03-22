import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const rows = [
  { feature: "Do-Follow Links", others: false, mai: true },
  { feature: "Traffic-Verified Sites", others: false, mai: true },
  { feature: "Niche-Relevant Placement", others: false, mai: true },
  { feature: "12-Month Link Guarantee", others: false, mai: true },
  { feature: "Manual Outreach (No PBNs)", others: false, mai: true },
  { feature: "Dedicated Account Manager", others: false, mai: true },
  { feature: "AI & LLM Optimized Sites", others: false, mai: true },
  { feature: "Money-Back Guarantee", others: false, mai: true },
];

export default function ComparisonTable() {
  return (
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
            Why Choose MaiGrowth Over Others?
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#767676" }}>
            Not all Link Insertion providers are equal. Here is how we compare.
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
                  style={{ backgroundColor: "#EFEFED", color: "#3D3D3D" }}
                >
                  Feature
                </th>
                <th
                  className="py-4 px-6 text-center text-sm font-bold"
                  style={{ backgroundColor: "#EFEFED", color: "#767676" }}
                >
                  Other Providers
                </th>
                <th
                  className="py-4 px-6 text-center text-sm font-bold text-white"
                  style={{ backgroundColor: "#FF6B35" }}
                >
                  MaiGrowth
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.feature}
                  style={{
                    backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#F7F6F4",
                    borderTop: "1px solid #E2E0DC",
                  }}
                >
                  <td className="py-4 px-6 text-sm font-medium" style={{ color: "#0F0F0F" }}>
                    {row.feature}
                  </td>
                  <td className="py-4 px-6 text-center text-lg">
                    {row.others ? (
                      <span style={{ color: "#00C47A" }}>✓</span>
                    ) : (
                      <span style={{ color: "#EF4444" }}>✗</span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center text-lg">
                    {row.mai ? (
                      <span style={{ color: "#00C47A" }}>✓</span>
                    ) : (
                      <span style={{ color: "#EF4444" }}>✗</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
