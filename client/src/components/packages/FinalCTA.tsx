import { motion } from "framer-motion";
import { Link } from "wouter";

const EASE = [0.22, 1, 0.36, 1] as const;

const DOT_GRID = {
  backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
};

export default function FinalCTA() {
  return (
    <section style={{ backgroundColor: "#F7F6F4", padding: "96px 0" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <h2
            className="font-syne font-extrabold leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", color: "#0F0F0F" }}
          >
            Two Paths.{" "}
            <span style={{ color: "#FF6B35" }}>One Right Answer.</span>
          </h2>
          <p className="mt-4 max-w-lg mx-auto text-base" style={{ color: "#767676", fontFamily: "DM Sans, sans-serif" }}>
            You have a choice. Both are fine. But only one leads to category ownership.
          </p>
        </motion.div>

        {/* Two paths */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Path A — wrong */}
          <motion.div
            className="rounded-2xl p-8"
            style={{ border: "2px solid #E2E0DC", backgroundColor: "#EFEFED" }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div
              className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-5"
              style={{ backgroundColor: "rgba(239,68,68,0.1)", color: "#EF4444" }}
            >
              PATH A
            </div>
            <h3 className="font-syne font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>
              Keep doing what you're doing.
            </h3>
            <ul className="space-y-3">
              {[
                "Buy random links with no campaign strategy",
                "Watch competitors slowly outrank you",
                "Spend $40K/month on ads with no organic growth",
                "Stay invisible in AI-generated answers",
                "Wonder why your 'SEO' isn't working",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-base flex-shrink-0 mt-0.5">❌</span>
                  <span className="text-sm" style={{ color: "#767676", fontFamily: "DM Sans, sans-serif" }}>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Path B — right */}
          <motion.div
            className="rounded-2xl p-8 relative overflow-hidden"
            style={{ border: "2px solid #FF6B35", backgroundColor: "#12153D" }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="absolute inset-0 pointer-events-none" style={DOT_GRID} />
            <div className="relative z-10">
              <div
                className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-5"
                style={{ backgroundColor: "rgba(0,196,122,0.15)", color: "#00C47A" }}
              >
                PATH B
              </div>
              <h3 className="font-syne font-bold text-xl mb-4 text-white">
                Start building dominance with MaiGrowth.
              </h3>
              <ul className="space-y-3">
                {[
                  "Coordinated campaign: Guest Posts + Link Insertions",
                  "Competitors give up trying to outrank you",
                  "Organic traffic compounds month over month",
                  "Your brand cited in ChatGPT, Perplexity, AI Overviews",
                  "You own your category in Google AND AI search",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-base flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.8)", fontFamily: "DM Sans, sans-serif" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Final CTA card */}
        <motion.div
          className="rounded-3xl px-8 md:px-14 py-14 text-center relative overflow-hidden"
          style={{ backgroundColor: "#12153D" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <div className="absolute inset-0 pointer-events-none" style={DOT_GRID} />
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
            style={{
              width: 600,
              height: 300,
              background: "radial-gradient(ellipse, rgba(255,107,53,0.08) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />

          <div className="relative z-10">
            <span
              className="inline-block text-xs font-bold px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: "rgba(255,107,53,0.15)", color: "#FF6B35", border: "1px solid rgba(255,107,53,0.3)" }}
            >
              ⏰ Limited Availability — Campaign Slots Fill Monthly
            </span>

            <h2
              className="font-syne font-extrabold text-white mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.12 }}
            >
              Ready to Own Your Category?
            </h2>

            <p
              className="text-base mb-10 max-w-2xl mx-auto"
              style={{ color: "rgba(255,255,255,0.65)", fontFamily: "DM Sans, sans-serif" }}
            >
              Join 500+ agencies and brands who chose Path B. Book a free strategy session and we'll map out exactly which package gets you to dominance — and how fast.
            </p>

            <div className="flex gap-4 justify-center flex-wrap mb-8">
              <Link href="/contact">
                <motion.span
                  className="btn-primary cursor-pointer"
                  style={{ fontSize: 15, padding: "14px 36px" }}
                  whileHover={{ scale: 1.03, boxShadow: "0 8px 28px rgba(255,107,53,0.4)" }}
                  whileTap={{ scale: 0.97 }}
                  data-testid="button-final-cta-primary"
                >
                  Book Free Strategy Session →
                </motion.span>
              </Link>
              <a
                href="#packages"
                className="btn-ghost cursor-pointer"
                style={{ fontSize: 15, padding: "14px 36px" }}
                data-testid="button-final-cta-packages"
              >
                View Campaign Packages
              </a>
            </div>

            <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "DM Sans, sans-serif" }}>
              No credit card required · Free consultation · No long-term contracts
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
