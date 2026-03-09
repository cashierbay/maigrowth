import { motion } from "framer-motion";
import { BarChart2, ShieldCheck, MessageCircle, Globe2, Clock, Layers } from "lucide-react";
import { fadeUp, stagger } from "@/lib/animations";

const features = [
  { icon: BarChart2, label: "Ahrefs DR Verified" },
  { icon: ShieldCheck, label: "Spam Checked" },
  { icon: MessageCircle, label: "SEO Support Included" },
  { icon: Globe2, label: "All Real Websites" },
  { icon: Clock, label: "21-Day Turnaround" },
  { icon: Layers, label: "Large Site Inventory" },
];

export default function WhyMaiGrowth() {
  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "112px 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.span variants={fadeUp} className="section-label">
              WHY MAIGROWTH
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-3 mb-8"
              style={{
                fontFamily: "Syne, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(28px, 3.5vw, 44px)",
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
                color: "#0F0F0F",
              }}
            >
              Your Trusted Partner for High-Quality Link Building + AI Visibility
            </motion.h2>
            <div className="space-y-4">
              {[
                "MaiGrowth has spent years refining its approach to link building and AI search optimization — learning exactly what it takes to build backlinks that genuinely improve rankings AND get brands cited in AI-generated answers.",
                "The core of our process is expert, scalable outreach to secure backlinks from high-authority, relevant publications that carry real SEO weight and build real brand recognition.",
                "We handle every detail of the link building and AEO/GEO process. You step back and focus on your business while MaiGrowth delivers consistent, measurable visibility results.",
              ].map((para, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  className="text-[15px] leading-relaxed"
                  style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.label}
                  variants={fadeUp}
                  className="flex items-center gap-4 px-5 py-4 rounded-2xl cursor-default transition-all duration-200"
                  style={{
                    backgroundColor: "#F7F6F4",
                    border: "1px solid #E2E0DC",
                  }}
                  whileHover={{
                    borderColor: "#FF6B35",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                  }}
                >
                  <div
                    className="rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: "#FF6B35",
                      width: 48,
                      height: 48,
                    }}
                  >
                    <Icon size={20} color="white" />
                  </div>
                  <span
                    className="text-[14px]"
                    style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, color: "#0F0F0F" }}
                  >
                    {feature.label}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
