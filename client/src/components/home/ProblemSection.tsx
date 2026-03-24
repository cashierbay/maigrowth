import { motion } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { StaggerGroup, StaggerItem } from "@/components/shared/StaggerGroup";
import CountUp from "./CountUp";

const stats = [
  { number: 700, suffix: "M+", label: "ChatGPT & AI users every week", color: "#FF6B35" },
  { number: 357, suffix: "%", label: "Growth in AI referral traffic", color: "#12153D" },
  { number: 20, suffix: "%+", label: "Of Google searches show AI answers", color: "#00C47A" },
];

export default function ProblemSection() {
  return (
    <section style={{ backgroundColor: "#F7F6F4", padding: "clamp(48px, 10vw, 112px) 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="section-label">
            WHY TRADITIONAL SEO ISN'T ENOUGH
          </span>
          <h2
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
            Is Your Brand Showing Up in AI Answers —
            <br />
            or Is Your Competitor?
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto text-[17px] leading-relaxed"
            style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}
          >
            1 in 3 searches now involves an AI tool. Your potential customers are getting answers from ChatGPT, Perplexity, and Google AI Overviews — and if your brand is not cited there, your competitor's is.
          </p>
        </AnimatedSection>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StaggerItem
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
          </StaggerItem>

          <StaggerItem
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
          </StaggerItem>
        </StaggerGroup>

        <div
          className="grid grid-cols-3 gap-8 mt-20 pt-16"
          style={{ borderTop: "1px solid #E2E0DC" }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="font-extrabold leading-none"
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "clamp(32px, 5vw, 52px)",
                  color: stat.color,
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
        </div>
        <p
          style={{
            textAlign: 'center',
            fontFamily: 'DM Sans, sans-serif',
            fontStyle: 'italic',
            fontSize: '14px',
            color: '#767676',
            marginTop: '24px',
            maxWidth: '560px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: '1.7',
          }}
        >
          The brands that show up in AI answers today will be the ones dominating their niche in 3 years.
        </p>
      </div>
    </section>
  );
}
