import { motion } from "framer-motion";
import { Shield, Banknote, BarChart2, CheckCircle2 } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const guarantees = [
  {
    icon: Shield,
    emoji: "🛡️",
    title: "12-Month Link Guarantee",
    desc: "Every link we place is monitored for 12 full months. If any link drops, is removed, or changes to nofollow, we replace it free of charge — no questions asked.",
  },
  {
    icon: Banknote,
    emoji: "💰",
    title: "Money-Back Guarantee",
    desc: "If we cannot place your links within 45 days of order, you receive a full refund. We stand behind our outreach process and our ability to deliver.",
  },
  {
    icon: BarChart2,
    emoji: "📊",
    title: "Traffic Guarantee",
    desc: "Every site we use has a minimum of 1,000 verified monthly organic visitors at time of placement. We provide Ahrefs screenshots in every placement report.",
  },
  {
    icon: CheckCircle2,
    emoji: "✓",
    title: "Quality Guarantee",
    desc: "All links are do-follow, from real editorial websites, placed contextually within existing content. No PBNs, no spam, no shortcuts — guaranteed.",
  },
];

const standards = [
  { label: "DR Verified", value: "Every domain" },
  { label: "Traffic Verified", value: "Ahrefs confirmed" },
  { label: "Link Monitoring", value: "12 months" },
  { label: "Replacement SLA", value: "14 days" },
];

export default function Guarantees() {
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
            Our Guarantees
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#767676" }}>
            We back every Link Insertion with four industry-leading guarantees.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {guarantees.map((g, i) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={g.title}
                className="bg-white rounded-2xl p-7"
                style={{ border: "1px solid #E2E0DC", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: EASE, delay: i * 0.07 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                data-testid={`card-guarantee-${g.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#FFF0EB" }}
                  >
                    <Icon size={22} style={{ color: "#FF6B35" }} />
                  </div>
                  <div>
                    <h3 className="font-syne font-bold text-lg mb-2" style={{ color: "#0F0F0F" }}>
                      {g.emoji} {g.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#767676" }}>
                      {g.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6"
          style={{ backgroundColor: "#12153D" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          {standards.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-syne font-bold text-base text-white mb-1">{s.value}</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
