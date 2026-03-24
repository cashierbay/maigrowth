import { motion } from "framer-motion";
import { Link } from "wouter";

const EASE = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    n: "01",
    title: "Strategy & Briefing",
    desc: "You share your target URLs, anchor text preferences, and niche. We audit your existing link profile and map the most impactful placement opportunities.",
    tag: { label: "Free", color: "#FF6B35", bg: "rgba(255,107,53,0.18)" },
  },
  {
    n: "02",
    title: "Prospect & Qualify",
    desc: "Our outreach team identifies existing high-traffic articles on authoritative domains relevant to your niche. Every site is manually vetted for DR, traffic, and content quality.",
    tag: { label: "Manual", color: "#3B7FFF", bg: "rgba(59,127,255,0.15)" },
  },
  {
    n: "03",
    title: "Outreach & Negotiation",
    desc: "We contact site editors and negotiate editorial link placements within existing content — no sponsored labels, no PBN footprint.",
    tag: { label: "White-Hat", color: "#00C47A", bg: "rgba(0,196,122,0.15)" },
  },
  {
    n: "04",
    title: "Placement & Verification",
    desc: "Your link goes live contextually within the existing article. We verify do-follow status, correct anchor text, and proper indexation before reporting.",
    tag: { label: "Verified", color: "#00C47A", bg: "rgba(0,196,122,0.15)" },
  },
  {
    n: "05",
    title: "Reporting & Monitoring",
    desc: "You receive a full placement report with live URLs, DR, traffic data, and anchor text. We monitor every link for 12 months and replace any that drop.",
    tag: { label: "Included", color: "#3B7FFF", bg: "rgba(59,127,255,0.15)" },
  },
];

const DOT_GRID = {
  backgroundImage:
    "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
};

export default function Process() {
  return (
    <section style={{ backgroundColor: "#0E1235", padding: "clamp(40px, 8vw, 96px) 0", ...DOT_GRID }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <h2
            className="font-syne font-extrabold text-white mb-5"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.25rem)", lineHeight: 1.1 }}
          >
            How It Works
          </h2>
          <p
            className="text-base max-w-lg mx-auto"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            A transparent, fully managed process from strategy to live placement —
            with you in control at every step.
          </p>
        </motion.div>

        {/* 2-column card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              className="relative rounded-2xl p-7 flex flex-col gap-4"
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.055) 0%, rgba(255,255,255,0.025) 100%)",
                border: "1px solid rgba(255,255,255,0.09)",
                backdropFilter: "blur(6px)",
              }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.52, ease: EASE, delay: i * 0.09 }}
              whileHover={{
                borderColor: "rgba(255,107,53,0.28)",
                background:
                  "linear-gradient(145deg, rgba(255,107,53,0.07) 0%, rgba(255,255,255,0.025) 100%)",
                transition: { duration: 0.25 },
              }}
              data-testid={`card-process-step-${step.n}`}
            >
              {/* Top row: step badge + status pill */}
              <div className="flex items-center justify-between">
                {/* Orange rounded-square step badge */}
                <div
                  className="flex items-center justify-center rounded-xl font-syne font-extrabold text-white"
                  style={{
                    width: 44,
                    height: 44,
                    backgroundColor: "#FF6B35",
                    fontSize: 15,
                    letterSpacing: "0.02em",
                    boxShadow: "0 4px 14px rgba(255,107,53,0.35)",
                  }}
                >
                  {step.n}
                </div>

                {/* Coloured status pill */}
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{
                    color: step.tag.color,
                    backgroundColor: step.tag.bg,
                  }}
                >
                  {step.tag.label}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3
                  className="font-syne font-bold text-white mb-2"
                  style={{ fontSize: "1.15rem" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  {step.desc}
                </p>
              </div>

              {/* Bottom orange dot connector */}
              <div className="flex justify-center pt-2">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#FF6B35", opacity: 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA box */}
        <motion.div
          className="mt-12 rounded-2xl px-8 py-10 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(255,107,53,0.12) 0%, rgba(255,107,53,0.04) 100%)",
            border: "1px solid rgba(255,107,53,0.22)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <p className="font-syne font-bold text-xl text-white mb-2">
            Want to know more about our process?
          </p>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
            Book a free strategy call and we will walk you through exactly how we build links for your niche.
          </p>
          <Link href="/contact">
            <span
              className="inline-block font-semibold rounded-full px-9 py-3.5 text-white text-sm cursor-pointer transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#FF6B35", boxShadow: "0 8px 24px rgba(255,107,53,0.3)" }}
              data-testid="button-process-call"
            >
              Book Free Strategy Call
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
