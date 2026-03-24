import { motion } from "framer-motion";
import { Link } from "wouter";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function AnimatedHero() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "#12153D", minHeight: "90vh", display: "flex", alignItems: "center" }}>
      {/* Animated gradient orb — top right */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: "-10%",
          right: "-10%",
          width: "clamp(300px, 60vw, 600px)",
          height: "clamp(300px, 60vw, 600px)",
          background: "radial-gradient(circle, rgba(255,107,53,0.15), transparent 70%)",
          borderRadius: "50%",
        }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Animated gradient orb — bottom left */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          bottom: "-15%",
          left: "-10%",
          width: "clamp(250px, 50vw, 500px)",
          height: "clamp(250px, 50vw, 500px)",
          background: "radial-gradient(circle, rgba(255,107,53,0.08), transparent 70%)",
          borderRadius: "50%",
        }}
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Floating particles */}
      {[...Array(9)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${(i + 1) * 10}%`,
            bottom: 0,
            width: 4,
            height: 4,
            backgroundColor: "rgba(255,107,53,0.6)",
          }}
          animate={{ y: [0, -900], opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 14 + i,
            repeat: Infinity,
            delay: i * 1.8,
            ease: "linear",
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-40 text-center w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full mb-8 text-sm font-semibold"
          style={{
            backgroundColor: "rgba(255,107,53,0.15)",
            border: "1px solid rgba(255,107,53,0.3)",
            color: "#FF6B35",
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          🤖 Complete Campaign Packages · Guest Posts + Link Insertions
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="text-white mb-8"
          style={{
            fontFamily: "Syne, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(40px, 6vw, 80px)",
            lineHeight: 1.04,
            letterSpacing: "-0.02em",
          }}
        >
          Stop Buying Links.
          <span className="block" style={{ color: "#FF6B35" }}>
            Start Building Dominance.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
          className="max-w-3xl mx-auto mb-12 text-xl leading-relaxed"
          style={{ color: "rgba(255,255,255,0.75)", fontFamily: "DM Sans, sans-serif" }}
        >
          The only link building system that gets you ranked{" "}
          <strong style={{ color: "white" }}>AND</strong> cited in ChatGPT, Perplexity, and every AI answer engine that matters.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href="#packages"
            className="btn-primary"
            style={{ fontSize: 15, padding: "14px 36px" }}
            data-testid="button-hero-packages"
          >
            See Campaign Packages
          </a>
          <Link href="/contact">
            <span
              className="btn-ghost"
              style={{ fontSize: 15, padding: "14px 36px" }}
              data-testid="button-hero-strategy"
            >
              Book Strategy Session
            </span>
          </Link>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex items-center justify-center gap-8 flex-wrap"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "2rem" }}
        >
          {["White-Hat Only", "12-Month Guarantee", "AI & LLM Optimized", "21-Day Turnaround"].map((t) => (
            <span key={t} className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "DM Sans, sans-serif" }}>
              <span style={{ color: "#FF6B35" }}>✓</span> {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
