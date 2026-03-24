import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const inclusions = [
  "Do-follow backlinks",
  "Existing high-traffic content",
  "Manual outreach",
  "DR & traffic verified",
  "Niche-relevant placement",
  "Full placement report",
  "12-month guarantee",
  "No PBNs ever",
];

const tiers = [
  {
    dr: "DR 30+",
    title: "DR 30+ Link Insertion",
    desc: "Entry-level authority. Strong foundational links from real websites with organic traffic.",
    traffic: "1,000+ monthly visitors",
    gradient: "linear-gradient(135deg, #FF4500 0%, #FF6B35 40%, #1a0a00 100%)",
    price: "From $149",
  },
  {
    dr: "DR 40+",
    title: "DR 40+ Link Insertion",
    desc: "Mid-tier authority. Ideal for competitive niches that need stronger domain signals.",
    traffic: "2,500+ monthly visitors",
    gradient: "linear-gradient(135deg, #D4A017 0%, #F5C842 40%, #1a1200 100%)",
    price: "From $229",
  },
  {
    dr: "DR 50+",
    title: "DR 50+ Link Insertion",
    desc: "High authority. Powerful placements that move the needle fast in most industries.",
    traffic: "5,000+ monthly visitors",
    gradient: "linear-gradient(135deg, #0A7A4A 0%, #1DB97A 40%, #001a0e 100%)",
    price: "From $349",
  },
  {
    dr: "DR 60+",
    title: "DR 60+ Link Insertion",
    desc: "Premium authority. Elite placements on industry-defining websites.",
    traffic: "10,000+ monthly visitors",
    gradient: "linear-gradient(135deg, #0A3A7A 0%, #1A6FD4 40%, #00091a 100%)",
    price: "From $549",
  },
];

export default function Offerings() {
  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "clamp(40px, 8vw, 96px) 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <h2
            className="font-syne font-extrabold mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0F0F0F" }}
          >
            Individual Link Insertions
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#767676" }}>
            Every Link Insertion includes the following as standard.
          </p>
        </motion.div>

        {/* Inclusions */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
        >
          {inclusions.map((item) => (
            <span
              key={item}
              className="flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full"
              style={{ backgroundColor: "#F7F6F4", color: "#3D3D3D", border: "1px solid #E2E0DC" }}
            >
              <CheckCircle2 size={13} style={{ color: "#FF6B35" }} />
              {item}
            </span>
          ))}
        </motion.div>

        {/* DR Tier Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.dr}
              className="rounded-2xl overflow-hidden flex flex-col"
              style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              data-testid={`card-offering-${t.dr.replace(/\s+/g, '-').toLowerCase()}`}
            >
              <div
                className="p-6 flex flex-col flex-1"
                style={{ background: t.gradient }}
              >
                <span className="font-syne font-extrabold text-4xl text-white mb-2 opacity-80">
                  {t.dr}
                </span>
                <h3 className="font-syne font-bold text-lg text-white mb-2">
                  {t.title}
                </h3>
                <p className="text-sm text-white opacity-75 mb-4 flex-1">{t.desc}</p>
                <p className="text-xs text-white opacity-60 mb-4">📊 {t.traffic}</p>
                <div className="font-syne font-bold text-xl text-white mb-4">{t.price}</div>
                <Link href="/contact">
                  <span
                    className="block text-center text-sm font-bold py-2.5 rounded-xl cursor-pointer transition-all hover:bg-white hover:text-mg-dark"
                    style={{ background: "rgba(255,255,255,0.2)", color: "white", border: "1px solid rgba(255,255,255,0.3)" }}
                    data-testid={`button-offering-${t.dr.replace(/\s+/g, '-').toLowerCase()}`}
                  >
                    Get Started
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
