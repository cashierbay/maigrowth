import { motion } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";
import { fadeUp, stagger } from "@/lib/animations";
import CountUp from "./CountUp";

const stats = [
  { number: 700, suffix: "M+", label: "Weekly AI Search Users" },
  { number: 357, suffix: "%", label: "AI Referral Traffic Growth in 2024" },
  { number: 20, suffix: "%+", label: "Google Searches Show AI Overviews" },
];

export default function ProblemSection() {
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
            WHY TRADITIONAL SEO ISN'T ENOUGH
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-3"
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(30px, 4vw, 52px)",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              color: "#0F0F0F",
            }}
          >
            The Search Landscape Has Changed.
            <br />
            Has Your Strategy?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-2xl mx-auto text-[17px] leading-relaxed"
            style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}
          >
            Over 700 million people now get answers directly from AI tools every week. Is your brand showing up in those answers — or invisible?
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <motion.div
            variants={fadeUp}
            className="mg-card relative"
            style={{ borderTopWidth: 3, borderTopColor: "#f87171" }}
          >
            <div className="flex items-start justify-between mb-4">
              <span
                className="text-[10px] font-bold px-2 py-1 rounded-full"
                style={{ backgroundColor: "#FEF2F2", color: "#EF4444" }}
              >
                OUTDATED
              </span>
            </div>
            <XCircle size={24} style={{ color: "#f87171" }} className="mt-2 mb-4" />
            <h3
              className="text-xl mb-3"
              style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, color: "#0F0F0F" }}
            >
              Links Built for Google Only
            </h3>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}>
              Traditional agencies build links exclusively to chase Google rankings. But hundreds of millions of people now get answers directly from ChatGPT, Perplexity, and AI Overviews — and brands without AI visibility are completely invisible to them.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Google Only", "Limited Reach", "Old Playbook"].map((tag) => (
                <span key={tag} className="tag-neutral">{tag}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mg-card relative"
            style={{ borderTopWidth: 3, borderTopColor: "#FF6B35" }}
          >
            <div className="flex items-start justify-between mb-4">
              <span className="tag">AI-ERA READY</span>
            </div>
            <CheckCircle2 size={24} style={{ color: "#FF6B35" }} className="mt-2 mb-4" />
            <h3
              className="text-xl mb-3"
              style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, color: "#0F0F0F" }}
            >
              Links Built for Google AND AI
            </h3>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}>
              MaiGrowth builds high-authority backlinks that boost your Google rankings AND optimizes your brand's authority so AI engines recognize and cite you as the trusted source in your niche.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Google ✓", "ChatGPT ✓", "Perplexity ✓", "AI Overviews ✓"].map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-3 gap-8 mt-20 pt-16"
          style={{ borderTop: "1px solid #E2E0DC" }}
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp} className="text-center">
              <div
                className="font-extrabold leading-none"
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "clamp(32px, 5vw, 52px)",
                  color: "#FF6B35",
                }}
              >
                <CountUp target={stat.number} suffix={stat.suffix} />
              </div>
              <div
                className="text-sm mt-1"
                style={{ color: "#767676", fontFamily: "DM Sans, sans-serif" }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
