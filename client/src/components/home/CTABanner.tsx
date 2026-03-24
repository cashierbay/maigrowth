import { motion } from "framer-motion";
import { Link } from "wouter";
import { fadeUp, stagger } from "@/lib/animations";

export default function CTABanner() {
  return (
    <section
      className="text-center"
      style={{ backgroundColor: "#12153D", padding: "clamp(40px, 8vw, 112px) clamp(16px, 4vw, 24px)" }}
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={fadeUp}
            className="font-extrabold text-white"
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(28px, 4vw, 52px)",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
            }}
          >
            More Traffic from Google.
            <br />
            More Mentions in AI.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg max-w-xl mx-auto mt-4"
            style={{ color: "rgba(255,255,255,0.6)", fontFamily: "DM Sans, sans-serif" }}
          >
            Start with a free 30-minute strategy call. We will look at your site, your competitors, and tell you exactly which service fits your goals.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap gap-4 justify-center"
          >
            <Link href="/contact" data-testid="button-cta-banner-primary">
              <motion.span
                className="btn-primary"
                whileHover={{ scale: 1.03, boxShadow: "0 8px 28px rgba(255,107,53,0.32)", transition: { duration: 0.18 } }}
                whileTap={{ scale: 0.97 }}
              >
                Book Free Strategy Call →
              </motion.span>
            </Link>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-xs"
            style={{ color: "rgba(255,255,255,0.35)", fontFamily: "DM Sans, sans-serif" }}
          >
            Free · No Commitment · White-Hat Only · Reply Within 24 Hours
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
