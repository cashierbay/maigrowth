import { motion } from "framer-motion";
import { ShieldCheck, BarChart2, Globe2, FileText, Link2, Users, Award, Bot } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const items = [
  {
    icon: ShieldCheck,
    title: "Manual Vetting",
    desc: "Every prospective site is manually reviewed by our team — no automated lists or cheap directories.",
  },
  {
    icon: BarChart2,
    title: "Traffic Verified",
    desc: "We only use sites with a minimum of 1,000 monthly organic visitors, confirmed via Ahrefs.",
  },
  {
    icon: Globe2,
    title: "Real Websites",
    desc: "All placements are on genuine, editorially-run websites — never PBNs, never link farms.",
  },
  {
    icon: Link2,
    title: "Do-Follow Confirmed",
    desc: "We verify do-follow status before and after placement. Nofollow links are never accepted.",
  },
  {
    icon: FileText,
    title: "Contextual Placement",
    desc: "Links are inserted naturally within existing content — relevant to the article topic and anchor text.",
  },
  {
    icon: Users,
    title: "Real Audiences",
    desc: "We target sites with genuine engaged readerships — not empty traffic from bots or expired domains.",
  },
  {
    icon: Award,
    title: "DR 30+ Minimum",
    desc: "No exceptions. Every Link Insertion site meets the DR minimum specified in your package or order.",
  },
  {
    icon: Bot,
    title: "AI Citation Potential",
    desc: "We prioritise sites that are actively cited by ChatGPT, Perplexity, and Google AI Overviews.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
};

export default function Quality() {
  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "96px 0" }}>
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
            Our Quality Standards
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#767676" }}>
            Every Link Insertion is held to eight non-negotiable quality criteria.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                variants={item}
                className="rounded-2xl p-6"
                style={{ backgroundColor: "#F7F6F4", border: "1px solid #E2E0DC" }}
                data-testid={`card-quality-${it.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#FF6B35" }}
                >
                  <Icon size={20} color="white" />
                </div>
                <h3 className="font-syne font-bold text-base mb-2" style={{ color: "#0F0F0F" }}>
                  {it.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "#767676" }}>
                  {it.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
