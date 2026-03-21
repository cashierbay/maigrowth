import { motion } from "framer-motion";
import { Search, BarChart, Zap, TrendingUp } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { StaggerGroup, StaggerItem } from "@/components/shared/StaggerGroup";

const EASE = [0.22, 1, 0.36, 1] as const;

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
    <section style={{ backgroundColor: "#F7F6F4", padding: "120px 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-20">
          <span className="section-label">
            THE PROCESS
          </span>
          <h2
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
          </h2>
          <p
            className="mt-4 text-[17px] leading-relaxed max-w-xl mx-auto"
            style={{ color: "#767676", fontFamily: "DM Sans, sans-serif" }}
          >
            From discovery to monthly reporting — a streamlined four-step system built for real, compounding growth.
          </p>
        </AnimatedSection>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={step.number} className="relative group">
                {index < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-10 left-full w-full"
                    style={{
                      height: 1,
                      background: "linear-gradient(to right, #E2E0DC, transparent)",
                      zIndex: 0,
                      width: "calc(100% - 20px)",
                      transform: "translateX(-50%)",
                      left: "75%",
                    }}
                  />
                )}

                <div
                  className="rounded-2xl p-7 h-full transition-all duration-300 relative overflow-hidden"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E2E0DC",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "#FF6B35";
                    el.style.boxShadow = "0 12px 40px rgba(255,107,53,0.1)";
                    el.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "#E2E0DC";
                    el.style.boxShadow = "none";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    className="absolute top-0 right-0 select-none leading-none"
                    style={{
                      fontFamily: "Syne, sans-serif",
                      fontWeight: 800,
                      fontSize: 88,
                      color: "rgba(255,107,53,0.06)",
                      lineHeight: 1,
                      transform: "translate(8px, -16px)",
                    }}
                  >
                    {step.number}
                  </div>

                  <div className="relative z-10">
                    <div
                      className="inline-flex items-center justify-center rounded-xl mb-5"
                      style={{
                        backgroundColor: "#FFF0EB",
                        width: 52,
                        height: 52,
                      }}
                    >
                      <Icon size={22} style={{ color: "#FF6B35" }} />
                    </div>

                    <div
                      className="text-[11px] font-bold uppercase tracking-widest mb-2"
                      style={{ color: "#FF6B35", fontFamily: "DM Sans, sans-serif" }}
                    >
                      Step {step.number}
                    </div>

                    <h3
                      className="text-[18px] mb-3"
                      style={{
                        fontFamily: "Syne, sans-serif",
                        fontWeight: 700,
                        color: "#0F0F0F",
                        lineHeight: 1.3,
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-[14px] leading-relaxed"
                      style={{ color: "#767676", fontFamily: "DM Sans, sans-serif" }}
                    >
                      {step.body}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.4, ease: EASE }}
          className="mt-14 p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{
            background: "linear-gradient(135deg, #12153D 0%, #1C2050 100%)",
          }}
        >
          <div>
            <p
              className="text-[11px] font-semibold uppercase tracking-widest mb-1"
              style={{ color: "rgba(255,107,53,0.9)", fontFamily: "DM Sans, sans-serif" }}
            >
              Ready to start?
            </p>
            <p
              className="text-[18px]"
              style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, color: "white" }}
            >
              Get your free audit and custom strategy today
            </p>
          </div>
          <a href="/contact" className="flex-shrink-0">
            <span className="btn-primary whitespace-nowrap">Book Free Consultation →</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
