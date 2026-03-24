import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function BulkSavings() {
  const scrollToPackages = () => {
    const el = document.getElementById("packages");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section style={{ backgroundColor: "#12153D", padding: "clamp(36px, 8vw, 80px) 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <h2
              className="font-syne font-extrabold text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", lineHeight: 1.15 }}
            >
              Unlock Incredible Savings{" "}
              <span style={{ color: "#FF6B35" }}>
                When You Buy Link Insertions in Bulk
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          >
            <p className="text-base mb-6" style={{ color: "rgba(255,255,255,0.7)" }}>
              Individual links are powerful. Packages are transformative. Our bulk Link Insertion packages deliver up to 19% savings versus individual pricing — and include priority turnaround, a dedicated account manager, and full campaign reporting.
            </p>
            <button
              onClick={scrollToPackages}
              className="font-semibold rounded-full px-8 py-3.5 text-white transition-all hover:opacity-90 text-sm"
              style={{ backgroundColor: "#FF6B35", boxShadow: "0 8px 24px rgba(255,107,53,0.3)" }}
              data-testid="button-bulk-packages"
            >
              View Package Pricing
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
