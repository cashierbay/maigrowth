import { motion } from "framer-motion";
import { BarChart2, ShieldCheck, MessageCircle, Globe2, Clock, Layers } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { StaggerGroup, StaggerItem } from "@/components/shared/StaggerGroup";

const features = [
  { icon: BarChart2, label: "Ahrefs DR Verified" },
  { icon: ShieldCheck, label: "Spam Checked" },
  { icon: MessageCircle, label: "SEO Support Included" },
  { icon: Globe2, label: "All Real Websites" },
  { icon: Clock, label: "21-Day Turnaround" },
  { icon: Layers, label: "ChatGPT & AI Citations" },
];

export default function WhyMaiGrowth() {
  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "clamp(40px, 8vw, 112px) 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <span className="section-label">
              WHY MAIGROWTH
            </span>
            <h2
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
              Your Trusted Partner for High-Quality Link Building
            </h2>
            <div className="space-y-4">
              {[
                "MaiGrowth has spent years building links that actually move the needle — not just for Google rankings, but for the AI search tools that now influence millions of buying decisions every day.",
                "Every placement is secured through manual outreach to real website owners and editors. No automated blasts. No scraped databases. Real relationships. Real placements.",
                "You get a complete campaign — outreach, content writing, placement, and reporting — handled end to end. You focus on your business. We handle the links.",
              ].map((para, i) => (
                <p
                  key={i}
                  className="text-[15px] leading-relaxed"
                  style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}
                >
                  {para}
                </p>
              ))}
            </div>
          </AnimatedSection>

          <StaggerGroup className="grid grid-cols-2 gap-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <StaggerItem
                  key={feature.label}
                  className="flex items-center gap-4 px-5 py-4 rounded-2xl cursor-default"
                  style={{
                    backgroundColor: "#F7F6F4",
                    border: "1px solid #E2E0DC",
                  }}
                  whileHover={{ scale: 1.04, borderColor: "#FF6B35", transition: { duration: 0.18 } }}
                >
                  <motion.div
                    className="rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: "#FF6B35",
                      width: 48,
                      height: 48,
                    }}
                    whileHover={{ rotate: 10, scale: 1.12 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon size={20} color="white" />
                  </motion.div>
                  <span
                    className="text-[14px]"
                    style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, color: "#0F0F0F" }}
                  >
                    {feature.label}
                  </span>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
