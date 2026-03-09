import { motion } from "framer-motion";
import { Search, BarChart, Zap, TrendingUp } from "lucide-react";
import { fadeUp, stagger } from "@/lib/animations";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Audit",
    body: "We audit your backlink profile, current rankings, and AI search visibility to find exactly where your biggest opportunities are.",
  },
  {
    number: "02",
    icon: BarChart,
    title: "Custom Strategy",
    body: "We build a tailored plan — link targets, AEO content gaps, and GEO entity tactics — specific to your niche and competitors.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Links + Optimization",
    body: "We execute — securing high-authority backlinks through ethical outreach while optimizing your content for AI engine citation.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Reporting & Growth",
    body: "You receive a transparent report every month showing every link, ranking movement, and AI citation improvement. No fluff.",
  },
];

export default function HowItWorks() {
  return (
    <section style={{ backgroundColor: "#F7F6F4", padding: "112px 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} className="section-label">
            THE PROCESS
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
            Simple Process. Measurable Results.
          </motion.h2>
        </motion.div>

        <div className="relative">
          <div
            className="hidden md:block absolute top-8 left-0 right-0"
            style={{ borderTop: "2px dashed #E2E0DC", zIndex: 0, top: 40 }}
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 relative"
            style={{ zIndex: 1 }}
          >
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  variants={fadeUp}
                  className="text-center"
                >
                  <div className="relative inline-block mb-4">
                    <span
                      className="absolute -top-4 -left-4 font-extrabold leading-none select-none"
                      style={{
                        fontFamily: "Syne, sans-serif",
                        fontSize: 72,
                        color: "rgba(255,107,53,0.12)",
                        lineHeight: 1,
                      }}
                    >
                      {step.number}
                    </span>
                    <div
                      className="relative z-10 rounded-full flex items-center justify-center mx-auto"
                      style={{
                        backgroundColor: "#FFFFFF",
                        border: "2px solid #E2E0DC",
                        width: 64,
                        height: 64,
                      }}
                    >
                      <Icon size={24} style={{ color: "#FF6B35" }} />
                    </div>
                  </div>
                  <h3
                    className="text-xl mt-4 mb-2"
                    style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, color: "#0F0F0F" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}
                  >
                    {step.body}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
