import { motion } from "framer-motion";
import { Search, BarChart, Zap, TrendingUp, ArrowRight } from "lucide-react";
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
    body: "We build a tailored plan — link targets, content gaps, and entity tactics — specific to your niche and competitors.",
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
    <section
      style={{
        background: "linear-gradient(160deg, #0C0F2E 0%, #12153D 50%, #0C0F2E 100%)",
        padding: "clamp(48px, 10vw, 120px) 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid dots */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />

      {/* Ambient glow top-right */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "clamp(300px, 60vw, 500px)",
          height: "clamp(300px, 60vw, 500px)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,107,53,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Ambient glow bottom-left */}
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "-80px",
          width: "clamp(200px, 50vw, 400px)",
          height: "clamp(200px, 50vw, 400px)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(28,32,80,0.8) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <span
            className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] mb-5 px-4 py-2 rounded-full"
            style={{
              color: "#FF6B35",
              background: "rgba(255,107,53,0.12)",
              border: "1px solid rgba(255,107,53,0.25)",
              fontFamily: "DM Sans, sans-serif",
            }}
          >
            THE PROCESS
          </span>
          <h2
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(30px, 4vw, 52px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
            }}
          >
            Simple Process.{" "}
            <span style={{ color: "#FF6B35" }}>Measurable Results.</span>
          </h2>
          <p
            className="mt-5 text-[17px] leading-relaxed max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.55)", fontFamily: "DM Sans, sans-serif" }}
          >
            From discovery to monthly reporting — a streamlined four-step system built for real, compounding growth.
          </p>
        </AnimatedSection>

        {/* Steps grid */}
        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={step.number} className="relative group">
                {/* Connector arrow between steps (desktop only) */}
                {index < steps.length - 1 && (
                  <div
                    className="hidden lg:flex absolute items-center justify-center"
                    style={{
                      top: "60px",
                      left: "calc(100% - 2px)",
                      zIndex: 10,
                      width: "calc(100% / 3 * 0 + 28px)",
                    }}
                  >
                    <ArrowRight
                      size={18}
                      style={{ color: "rgba(255,107,53,0.4)" }}
                    />
                  </div>
                )}

                <motion.div
                  className="rounded-2xl h-full relative overflow-hidden cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    padding: "32px 28px 36px",
                  }}
                  whileHover={{
                    background: "rgba(255,255,255,0.07)",
                    borderColor: "rgba(255,107,53,0.4)",
                    y: -6,
                    boxShadow: "0 24px 60px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,107,53,0.15)",
                    transition: { duration: 0.25, ease: EASE },
                  }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Giant ghost number */}
                  <div
                    className="absolute bottom-0 right-3 select-none leading-none pointer-events-none"
                    style={{
                      fontFamily: "Syne, sans-serif",
                      fontWeight: 900,
                      fontSize: 110,
                      color: "transparent",
                      lineHeight: 1,
                      WebkitTextStroke: "1.5px rgba(255,107,53,0.35)",
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Step pill */}
                  <div
                    className="inline-flex items-center gap-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 px-3 py-1"
                    style={{
                      background: "rgba(255,107,53,0.15)",
                      color: "#FF6B35",
                      fontFamily: "DM Sans, sans-serif",
                      border: "1px solid rgba(255,107,53,0.2)",
                    }}
                  >
                    <span
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: "#FF6B35",
                        display: "inline-block",
                      }}
                    />
                    Step {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    className="flex items-center justify-center rounded-xl mb-5"
                    style={{
                      width: 52,
                      height: 52,
                      background: "linear-gradient(135deg, rgba(255,107,53,0.2) 0%, rgba(255,107,53,0.08) 100%)",
                      border: "1px solid rgba(255,107,53,0.2)",
                    }}
                  >
                    <Icon size={22} style={{ color: "#FF6B35" }} />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-[19px] mb-3"
                    style={{
                      fontFamily: "Syne, sans-serif",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      lineHeight: 1.25,
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Body */}
                  <p
                    className="text-[14px] leading-relaxed"
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      fontFamily: "DM Sans, sans-serif",
                    }}
                  >
                    {step.body}
                  </p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        {/* Bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.4, ease: EASE }}
          className="mt-14 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{
            background: "linear-gradient(135deg, rgba(255,107,53,0.14) 0%, rgba(255,107,53,0.06) 100%)",
            border: "1px solid rgba(255,107,53,0.25)",
            padding: "32px 40px",
          }}
        >
          <div>
            <p
              className="text-[11px] font-semibold uppercase tracking-widest mb-1.5"
              style={{ color: "#FF6B35", fontFamily: "DM Sans, sans-serif" }}
            >
              Ready to start?
            </p>
            <p
              className="text-[20px]"
              style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, color: "white" }}
            >
              Get your free audit and custom strategy today
            </p>
          </div>
          <a href="/contact" className="flex-shrink-0">
            <motion.span
              className="btn-primary whitespace-nowrap"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 28px rgba(255,107,53,0.4)",
                transition: { duration: 0.18 },
              }}
              whileTap={{ scale: 0.97 }}
            >
              Book Free Consultation →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
