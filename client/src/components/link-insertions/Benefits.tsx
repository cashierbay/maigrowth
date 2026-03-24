import { motion } from "framer-motion";
import { TrendingUp, Link2, ShieldCheck, BarChart2, User, Bot } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const benefits = [
  {
    icon: TrendingUp,
    title: "Faster Rankings",
    desc: "Link Insertions in established content pass authority immediately — often delivering ranking improvements faster than new guest posts.",
  },
  {
    icon: Link2,
    title: "Natural Link Profile",
    desc: "Contextual links within existing articles look 100% organic to Google and AI crawlers — no footprint, no penalties.",
  },
  {
    icon: ShieldCheck,
    title: "White-Hat Practices",
    desc: "Every placement follows Google Webmaster Guidelines. No PBNs, no link farms, no risky schemes — ever.",
  },
  {
    icon: BarChart2,
    title: "Guaranteed Traffic",
    desc: "We only place links in pages with a minimum of 1,000+ monthly organic visitors, ensuring real referral potential.",
  },
  {
    icon: User,
    title: "Dedicated Account Manager",
    desc: "A single point of contact manages your campaign from prospecting to live reporting — no ticketing queues.",
  },
  {
    icon: Bot,
    title: "AI & LLM Ready",
    desc: "Links are placed on authoritative sites that AI tools like ChatGPT and Perplexity regularly reference, boosting your brand's AI visibility.",
    badge: true,
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export default function Benefits() {
  return (
    <section style={{ backgroundColor: "#F7F6F4", padding: "clamp(40px, 8vw, 96px) 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <h2
            className="font-syne font-extrabold mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0F0F0F" }}
          >
            Why Link Insertions Work
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#767676" }}>
            Six reasons high-growth brands choose Link Insertions as their core link-building strategy.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                variants={item}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-7 relative"
                style={{ border: "1px solid #E2E0DC", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
                data-testid={`card-benefit-${b.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {b.badge && (
                  <span
                    className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: "#FF6B35" }}
                  >
                    AI & LLM Ready
                  </span>
                )}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#FFF0EB" }}
                >
                  <Icon size={20} style={{ color: "#FF6B35" }} />
                </div>
                <h3
                  className="font-syne font-bold text-lg mb-2"
                  style={{ color: "#0F0F0F" }}
                >
                  {b.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#767676" }}>
                  {b.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
