import { motion } from "framer-motion";
import { Link } from "wouter";
import { Shield, TrendingUp, Users } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const benefits = [
  { icon: Shield, label: "12-Month Link Guarantee" },
  { icon: TrendingUp, label: "Average 340% Traffic Growth" },
  { icon: Users, label: "Dedicated Account Manager" },
];

export default function FinalCTA() {
  const scrollToPackages = () => {
    const el = document.getElementById("packages");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section style={{ backgroundColor: "#F7F6F4", padding: "clamp(40px, 8vw, 96px) 0" }}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="rounded-3xl px-8 md:px-14 py-14 text-center"
          style={{ backgroundColor: "#12153D" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <span
            className="inline-block text-xs font-bold px-4 py-2 rounded-full mb-6"
            style={{ backgroundColor: "rgba(255,107,53,0.15)", color: "#FF6B35", border: "1px solid rgba(255,107,53,0.3)" }}
          >
            ⏰ Limited Slots Available This Month
          </span>

          <h2
            className="font-syne font-extrabold text-white mb-6"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)", lineHeight: 1.15 }}
          >
            Ready to Dominate Your Niche with High-Authority Links?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {benefits.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="rounded-xl px-5 py-4 flex items-center justify-center gap-3"
                style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <Icon size={18} style={{ color: "#FF6B35" }} />
                <span className="text-sm font-medium text-white">{label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToPackages}
              className="font-semibold rounded-full px-10 py-4 text-white text-base transition-all hover:opacity-90"
              style={{ backgroundColor: "#FF6B35", boxShadow: "0 8px 24px rgba(255,107,53,0.35)" }}
              data-testid="button-finalcta-packages"
            >
              View Packages &amp; Pricing
            </button>
            <Link href="/contact">
              <span
                className="inline-block font-semibold rounded-full px-10 py-4 text-base cursor-pointer hover:bg-white hover:text-mg-dark transition-all"
                style={{ border: "2px solid rgba(255,255,255,0.35)", color: "white" }}
                data-testid="button-finalcta-call"
              >
                Get Free Strategy Call
              </span>
            </Link>
          </div>

          <p className="mt-6 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            No credit card required • Free consultation • No contracts
          </p>
        </motion.div>
      </div>
    </section>
  );
}
