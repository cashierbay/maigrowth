import { motion } from "framer-motion";
import { Eye, Star, Lightbulb, Users, Link2, BrainCircuit } from "lucide-react";
import { Link } from "wouter";
import { fadeUp, stagger } from "@/lib/animations";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { StaggerGroup, StaggerItem } from "@/components/shared/StaggerGroup";

const statCards = [
  {
    icon: Users,
    number: "100+",
    title: "Clients Served",
    body: "Businesses worldwide trust MaiGrowth for premium link building and AI search visibility — from startups to established brands.",
    href: "/contact",
    cta: "Book Consultation",
    bg: "rgba(255,107,53,0.06)",
    iconBg: "#FF6B35",
  },
  {
    icon: Link2,
    number: "50,000+",
    title: "Links Built",
    body: "High-authority backlinks placed across real, traffic-verified websites with DR 40+ — all white-hat, all permanent.",
    href: "/services",
    cta: "View Services",
    bg: "rgba(18,21,61,0.04)",
    iconBg: "#12153D",
  },
  {
    icon: BrainCircuit,
    number: "3",
    title: "Search Channels",
    body: "Google SEO, AI Overviews (AEO), and generative engines (GEO) — we cover every surface where your customers search for answers.",
    href: "/services",
    cta: "Learn More",
    bg: "rgba(255,107,53,0.06)",
    iconBg: "#FF6B35",
  },
];

const values = [
  {
    icon: Eye,
    title: "Transparency",
    body: "Every link, metric, and result is documented and shared. No black boxes, no vague promises — you see exactly what we deliver and how it performs.",
  },
  {
    icon: Star,
    title: "Quality Over Quantity",
    body: "One DR70 editorial link beats 50 directory submissions. We never compromise on quality to hit volume targets — ever.",
  },
  {
    icon: Lightbulb,
    title: "Forward Thinking",
    body: "AEO and GEO are not add-ons. They are the new baseline for any serious search strategy. We build for where search is going, not where it was.",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function About() {
  return (
    <>
      <title>About MaiGrowth — Built for the AI Search Era</title>

      <section
        className="relative flex flex-col items-center justify-center text-center"
        style={{
          backgroundColor: "#12153D",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          padding: "160px 24px 100px",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="text-[11px] font-semibold uppercase tracking-[0.16em] block mb-6"
              style={{ color: "#FF6B35", fontFamily: "DM Sans, sans-serif" }}
            >
              ABOUT MAIGROWTH
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white"
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(36px, 5.5vw, 68px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            We Saw the Shift Coming.
            <br />
            We Built for It.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.6)", fontFamily: "DM Sans, sans-serif" }}
          >
            While the industry kept pushing the same link building playbook, we were building the agency the AI search era actually needed.
          </motion.p>
        </div>
      </section>

      <div style={{ height: 64, background: "linear-gradient(to bottom, #12153D, #F7F6F4)" }} />

      <section style={{ backgroundColor: "#F7F6F4", padding: "112px 0" }}>
        <div className="max-w-7xl mx-auto px-6">

          {/* Centered intro */}
          <AnimatedSection className="text-center mb-16 max-w-2xl mx-auto">
            <span className="section-label">OUR STORY</span>
            <h2
              className="mt-3 mb-5"
              style={{
                fontFamily: "Syne, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(26px, 3vw, 42px)",
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
                color: "#0F0F0F",
              }}
            >
              Built for the Channel That Matters Now
            </h2>
            <p
              className="text-[15px] leading-relaxed"
              style={{ color: "#5A5A5A", fontFamily: "DM Sans, sans-serif" }}
            >
              MaiGrowth was founded on one observation: search has fundamentally changed. We built the agency the AI search era actually needed — combining premium link building with AEO and GEO so you stay visible wherever customers search.
            </p>
          </AnimatedSection>

          {/* 3-column stat cards */}
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {statCards.map((card) => {
              const Icon = card.icon;
              return (
                <StaggerItem
                  key={card.title}
                  className="flex flex-col rounded-2xl p-7"
                  style={{
                    backgroundColor: card.bg,
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                  whileHover={{ y: -5, boxShadow: "0 14px 40px rgba(255,107,53,0.10)", transition: { duration: 0.22 } }}
                >
                  {/* Icon */}
                  <div
                    className="flex items-center justify-center rounded-2xl mb-6 flex-shrink-0"
                    style={{
                      width: 56,
                      height: 56,
                      backgroundColor: card.iconBg,
                    }}
                  >
                    <Icon size={24} color="white" />
                  </div>

                  {/* Stat number */}
                  <div
                    style={{
                      fontFamily: "Syne, sans-serif",
                      fontWeight: 800,
                      fontSize: "clamp(32px, 3.5vw, 44px)",
                      color: "#0F0F0F",
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                      marginBottom: 4,
                    }}
                  >
                    {card.number}
                  </div>

                  {/* Title */}
                  <div
                    className="mb-3"
                    style={{
                      fontFamily: "Syne, sans-serif",
                      fontWeight: 700,
                      fontSize: 18,
                      color: "#0F0F0F",
                    }}
                  >
                    {card.title}
                  </div>

                  {/* Body */}
                  <p
                    className="text-[14px] leading-relaxed flex-1 mb-6"
                    style={{ color: "#5A5A5A", fontFamily: "DM Sans, sans-serif" }}
                  >
                    {card.body}
                  </p>

                  {/* CTA button */}
                  <Link href={card.href}>
                    <motion.span
                      className="inline-flex items-center justify-center rounded-xl text-[13px] font-semibold cursor-pointer"
                      style={{
                        backgroundColor: "#FF6B35",
                        color: "white",
                        padding: "10px 20px",
                        fontFamily: "DM Sans, sans-serif",
                      }}
                      whileHover={{ scale: 1.03, boxShadow: "0 6px 20px rgba(255,107,53,0.3)", transition: { duration: 0.18 } }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {card.cta}
                    </motion.span>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerGroup>

        </div>
      </section>

      {/* OUR VALUES — Two-column: left text block, right stacked cards */}
      <section style={{ backgroundColor: "#EFEFED", padding: "112px 0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: label + title + description */}
            <AnimatedSection>
              <span className="section-label">OUR VALUES</span>
              <h2
                className="mt-4 mb-6"
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(28px, 3.5vw, 46px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                  color: "#0F0F0F",
                }}
              >
                What We Stand For
              </h2>
              <p
                className="text-[16px] leading-relaxed mb-8"
                style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif", maxWidth: 420 }}
              >
                Our values aren't printed on a wall — they're reflected in every link we build, every report we send, and every strategy we create. Three principles guide everything we do.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
              >
                <Link href="/about">
                  <motion.span
                    className="btn-secondary"
                    whileHover={{ scale: 1.02, transition: { duration: 0.18 } }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Learn More About Us →
                  </motion.span>
                </Link>
              </motion.div>
            </AnimatedSection>

            {/* Right: 3 stacked value cards */}
            <StaggerGroup className="flex flex-col gap-5">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <StaggerItem
                    key={v.title}
                    className="flex items-start gap-5 rounded-2xl p-6 cursor-default"
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #E2E0DC",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                    }}
                    whileHover={{ y: -4, boxShadow: "0 12px 36px rgba(255,107,53,0.10)", borderColor: "#FF6B35", transition: { duration: 0.22 } }}
                  >
                    <div
                      className="flex-shrink-0 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: "#FF6B35",
                        width: 52,
                        height: 52,
                        marginTop: 2,
                      }}
                    >
                      <Icon size={22} color="white" />
                    </div>
                    <div>
                      <h3
                        className="mb-2"
                        style={{
                          fontFamily: "Syne, sans-serif",
                          fontWeight: 700,
                          fontSize: 20,
                          color: "#0F0F0F",
                          lineHeight: 1.2,
                        }}
                      >
                        {v.title}
                      </h3>
                      <p
                        className="text-[14px] leading-relaxed"
                        style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}
                      >
                        {v.body}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          </div>
        </div>
      </section>

      <section
        className="text-center relative"
        style={{ backgroundColor: "#12153D", padding: "96px 24px" }}
      >
        <div className="max-w-3xl mx-auto relative">
          <span
            className="absolute -top-10 left-1/2 -translate-x-1/2 select-none leading-none"
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 800,
              fontSize: 160,
              color: "rgba(255,107,53,0.08)",
              lineHeight: 1,
              zIndex: 0,
            }}
          >
            "
          </span>
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(20px, 3vw, 34px)",
              lineHeight: 1.4,
              color: "white",
            }}
          >
            "Our mission is to make every business — regardless of size or location — impossible to miss. Not just on Google, but across every AI-powered surface where customers search."
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 flex flex-wrap gap-4 justify-center"
          >
            <Link href="/contact">
              <motion.span
                className="btn-primary"
                whileHover={{ scale: 1.03, boxShadow: "0 8px 28px rgba(255,107,53,0.32)", transition: { duration: 0.18 } }}
                whileTap={{ scale: 0.97 }}
              >
                Book a Consultation →
              </motion.span>
            </Link>
            <Link href="/services">
              <motion.span
                className="btn-ghost"
                whileHover={{ scale: 1.02, transition: { duration: 0.18 } }}
                whileTap={{ scale: 0.97 }}
              >
                View Services
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
