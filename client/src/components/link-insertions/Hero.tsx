import { Link } from "wouter";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: "500+", label: "Clients" },
  { value: "10K+", label: "Links Placed" },
  { value: "98%", label: "Success Rate" },
  { value: "DR 60+", label: "Max Authority" },
];

export default function Hero() {
  const scrollToPackages = () => {
    const el = document.getElementById("packages");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#12153D" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 100% 0%, rgba(255,107,53,0.12), transparent)",
          backgroundImage:
            "radial-gradient(ellipse 60% 55% at 100% 0%, rgba(255,107,53,0.12), transparent), radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "auto, 28px 28px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <span
            className="inline-block mb-6 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full"
            style={{
              background: "rgba(255,107,53,0.15)",
              color: "#FF6B35",
              border: "1px solid rgba(255,107,53,0.3)",
            }}
          >
            ⚡ Trusted by 500+ Businesses • 10,000+ Links Placed
          </span>
        </motion.div>

        <motion.h1
          className="font-syne font-extrabold text-white mb-6"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.1 }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
        >
          Get{" "}
          <span style={{ color: "#FF6B35" }}>High-Authority</span>{" "}
          Link Insertions
        </motion.h1>

        <motion.p
          className="text-lg mb-10 max-w-2xl mx-auto"
          style={{ color: "rgba(255,255,255,0.7)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
        >
          Editorial backlinks placed in existing, high-traffic content — fully managed, 100% white-hat, with a 12-month guarantee.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
        >
          <button
            onClick={scrollToPackages}
            className="font-semibold rounded-full px-8 py-4 text-white text-base transition-all hover:opacity-90"
            style={{ backgroundColor: "#FF6B35", boxShadow: "0 8px 24px rgba(255,107,53,0.35)" }}
            data-testid="button-hero-packages"
          >
            View Packages &amp; Pricing
          </button>
          <Link href="/contact">
            <span
              className="inline-block font-semibold rounded-full px-8 py-4 text-base cursor-pointer transition-all hover:bg-white hover:text-mg-dark"
              style={{
                border: "2px solid rgba(255,255,255,0.4)",
                color: "white",
              }}
              data-testid="button-hero-call"
            >
              Get Free Strategy Call
            </span>
          </Link>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.45 }}
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="font-syne font-extrabold text-3xl"
                style={{ color: "#FF6B35" }}
              >
                {s.value}
              </div>
              <div className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.55)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
