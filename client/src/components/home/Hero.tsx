import { motion } from "framer-motion";
import { Link } from "wouter";
import { stagger, fadeUp } from "@/lib/animations";

const words1 = ["Rank", "on", "Google."];
const words2 = ["Get", "Cited", "by"];

export default function Hero() {
  return (
    <>
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center"
        style={{
          backgroundColor: "#12153D",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">
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
