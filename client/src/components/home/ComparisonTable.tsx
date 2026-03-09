import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import { fadeUp, stagger } from "@/lib/animations";

const rows = [
  { feature: "Google Ranking Backlinks", others: "yes", mg: "yes" },
  { feature: "AI Answer Citations (AEO)", others: "no", mg: "yes" },
  { feature: "ChatGPT / Perplexity Visibility (GEO)", others: "no", mg: "yes" },
  { feature: "Real Website Placements Only", others: "sometimes", mg: "yes" },
  { feature: "White-Hat Guaranteed", others: "sometimes", mg: "yes" },
  { feature: "Topical Authority Building", others: "rarely", mg: "yes" },
  { feature: "AI Citation Tracking & Reporting", others: "no", mg: "yes" },
  { feature: "Global Service, Fully Remote", others: "sometimes", mg: "yes" },
];

function OtherCell({ value }: { value: string }) {
  if (value === "yes") return <CheckCircle2 size={20} style={{ color: "#4ade80" }} />;
  if (value === "no") return <XCircle size={20} style={{ color: "#f87171" }} />;
  return <span className="text-sm italic" style={{ color: "#767676", fontFamily: "DM Sans, sans-serif" }}>Sometimes / Rarely</span>;
}

export default function ComparisonTable() {
  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "112px 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} className="section-label">
            THE DIFFERENCE
          </motion.span>
          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(28px, 3.5vw, 46px)",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              color: "#0F0F0F",
            }}
          >
            Why MaiGrowth vs. Every Other
            <br />
            Link Building Agency
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-2xl mx-auto text-[17px] leading-relaxed"
            style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}
          >
            The agency landscape hasn't kept up with how search actually works in 2025. We have.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="overflow-x-auto"
        >
          <div style={{ border: "1px solid #E2E0DC", borderRadius: 16, overflow: "hidden" }}>
            <table className="w-full" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ backgroundColor: "#EFEFED" }}>
                  <th
                    className="px-6 py-4 text-left text-[14px]"
                    style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, color: "#0F0F0F" }}
                  >
                    Feature
                  </th>
                  <th
                    className="px-6 py-4 text-center text-[14px]"
                    style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, color: "#0F0F0F" }}
                  >
                    Other Agencies
                  </th>
                  <th
                    className="px-6 py-4 text-center text-[14px]"
                    style={{
                      fontFamily: "Syne, sans-serif",
                      fontWeight: 700,
                      color: "#FF6B35",
                      backgroundColor: "#FFF0EB",
                      borderBottom: "2px solid #FF6B35",
                    }}
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
                      transition: "border-left 0.2s",
                    }}
                    className="group"
                  >
                    <td
                      className="px-6 py-4 text-[14px] group-hover:border-l-4 transition-all"
                      style={{
                        color: "#3D3D3D",
                        fontFamily: "DM Sans, sans-serif",
                        borderLeft: "4px solid transparent",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderLeftColor = "#FF6B35";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderLeftColor = "transparent";
                      }}
                    >
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center">
                        <OtherCell value={row.others} />
                      </div>
                    </td>
                    <td
                      className="px-6 py-4 text-center"
                      style={{ backgroundColor: "rgba(255,240,235,0.5)" }}
                    >
                      <div className="flex justify-center">
                        <CheckCircle2 size={20} style={{ color: "#FF6B35" }} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
