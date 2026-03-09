import { motion } from "framer-motion";
import { Link } from "wouter";
import { fadeUp, stagger } from "@/lib/animations";

export default function CTABanner() {
  return (
    <section
      className="text-center"
      style={{ backgroundColor: "#12153D", padding: "112px 24px" }}
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
            Ready to Rank on Google AND
            <br />
            Get Cited by AI?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg max-w-xl mx-auto mt-4"
            style={{ color: "rgba(255,255,255,0.6)", fontFamily: "DM Sans, sans-serif" }}
          >
            Book a free 30-minute consultation. We'll show you exactly where your visibility gaps are and how to close them.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap gap-4 justify-center"
          >
            <Link href="/contact" data-testid="button-cta-banner-primary">
              <span className="btn-primary">Book Free Consultation →</span>
            </Link>
            <Link href="/services" data-testid="button-cta-banner-secondary">
              <span className="btn-ghost">View Services</span>
            </Link>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-xs"
            style={{ color: "rgba(255,255,255,0.35)", fontFamily: "DM Sans, sans-serif" }}
          >
            Free · No Obligation · Expert Analysis · 24hr Response
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
