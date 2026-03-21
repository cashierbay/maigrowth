import { motion } from "framer-motion";
import { Link } from "wouter";
import { stagger, fadeUp } from "@/lib/animations";

const words1 = ["Rank", "on", "Google."];
const words2 = ["Get", "Cited", "by"];

export default function Hero() {
  return (
    <>
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ backgroundColor: "#12153D" }}
      >
        {/* LAYER 1 — Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* LAYER 2 — Animated orange glow orb */}
        <motion.div
          className="absolute pointer-events-none"
          style={{
            width: 700,
            height: 700,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,107,53,0.18) 0%, rgba(255,107,53,0.06) 40%, transparent 70%)",
            top: "50%",
            left: "50%",
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* LAYER 3 — Abstract network SVG */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1200 700"
        >
          <line x1="200" y1="150" x2="420" y2="280" stroke="#FF6B35" strokeWidth="0.8" />
          <line x1="420" y1="280" x2="650" y2="180" stroke="#FF6B35" strokeWidth="0.8" />
          <line x1="650" y1="180" x2="870" y2="320" stroke="#FF6B35" strokeWidth="0.8" />
          <line x1="870" y1="320" x2="1050" y2="200" stroke="#FF6B35" strokeWidth="0.8" />
          <line x1="420" y1="280" x2="560" y2="450" stroke="#FF6B35" strokeWidth="0.6" />
          <line x1="560" y1="450" x2="750" y2="520" stroke="#FF6B35" strokeWidth="0.6" />
          <line x1="650" y1="180" x2="560" y2="450" stroke="#FF6B35" strokeWidth="0.6" />
          <line x1="870" y1="320" x2="750" y2="520" stroke="#FF6B35" strokeWidth="0.6" />
          <line x1="100" y1="400" x2="200" y2="150" stroke="#FF6B35" strokeWidth="0.5" />
          <line x1="100" y1="400" x2="420" y2="280" stroke="#FF6B35" strokeWidth="0.4" />
          <line x1="1050" y1="200" x2="1100" y2="450" stroke="#FF6B35" strokeWidth="0.5" />
          <line x1="750" y1="520" x2="1100" y2="450" stroke="#FF6B35" strokeWidth="0.4" />
          <circle cx="200" cy="150" r="4" fill="#FF6B35" />
          <circle cx="420" cy="280" r="5" fill="#FF6B35" />
          <circle cx="650" cy="180" r="4" fill="#FF6B35" />
          <circle cx="870" cy="320" r="5" fill="#FF6B35" />
          <circle cx="1050" cy="200" r="3" fill="#FF6B35" />
          <circle cx="560" cy="450" r="4" fill="#FF6B35" />
          <circle cx="750" cy="520" r="3" fill="#FF6B35" />
          <circle cx="100" cy="400" r="3" fill="#FF6B35" />
          <circle cx="1100" cy="450" r="3" fill="#FF6B35" />
        </svg>

        {/* Content — sits above all background layers */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="text-[11px] font-semibold uppercase tracking-[0.16em] block mb-8"
              style={{ color: "#FF6B35", fontFamily: "DM Sans, sans-serif" }}
            >
              LINK BUILDING · AEO · GEO
            </span>
          </motion.div>

          <div
            className="leading-[1.05] tracking-tight text-white mb-6"
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(44px, 7vw, 84px)",
            }}
          >
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap justify-center gap-x-4 mb-2"
            >
              {words1.map((word, i) => (
                <motion.span key={i} variants={fadeUp}>
                  {word}
                </motion.span>
              ))}
            </motion.div>
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap justify-center gap-x-4"
            >
              {words2.map((word, i) => (
                <motion.span key={i} variants={fadeUp}>
                  {word}
                </motion.span>
              ))}
              <motion.span variants={fadeUp} style={{ color: "#FF6B35" }}>
                AI.
              </motion.span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mt-6 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.65)", fontFamily: "DM Sans, sans-serif" }}
          >
            Most agencies stop at Google rankings. MaiGrowth builds links that also get your brand mentioned in ChatGPT, Perplexity, and Google AI Overviews — where the next generation of buying decisions happens every day.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link href="/contact" data-testid="button-hero-cta-primary">
              <span className="btn-primary">Start Growing Today →</span>
            </Link>
            <Link href="/services" data-testid="button-hero-cta-secondary">
              <span className="btn-ghost">See Our Services</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-12 pt-8 flex flex-wrap items-center justify-center gap-6"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
          >
            {[
              "White-Hat Only",
              "AEO + GEO Ready",
              "Global Service",
            ].map((item) => (
              <span
                key={item}
                className="text-sm flex items-center gap-2"
                style={{ color: "rgba(255,255,255,0.5)", fontFamily: "DM Sans, sans-serif" }}
              >
                <span style={{ color: "#FF6B35" }}>✓</span>
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <div
        style={{
          height: 64,
          background: "linear-gradient(to bottom, #12153D, #F7F6F4)",
        }}
      />
    </>
  );
}
