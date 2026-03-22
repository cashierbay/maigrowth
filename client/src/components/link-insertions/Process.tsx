import { motion } from "framer-motion";
import { Link } from "wouter";

const EASE = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    n: "01",
    title: "Strategy & Briefing",
    desc: "You share your target URLs, anchor text preferences, and niche. We audit your existing link profile and map the most impactful placement opportunities.",
  },
  {
    n: "02",
    title: "Prospect & Qualify",
    desc: "Our outreach team identifies existing high-traffic articles on authoritative domains relevant to your niche. Every site is manually vetted for DR, traffic, and content quality.",
  },
  {
    n: "03",
    title: "Outreach & Negotiation",
    desc: "We contact site editors and negotiate editorial link placements within existing content — no sponsored labels, no PBN footprint.",
  },
  {
    n: "04",
    title: "Placement & Verification",
    desc: "Your link goes live contextually within the existing article. We verify do-follow status, correct anchor text, and proper indexation before reporting.",
  },
  {
    n: "05",
    title: "Reporting & Monitoring",
    desc: "You receive a full placement report with live URLs, DR, traffic data, and anchor text. We monitor every link for 12 months and replace any that drop.",
  },
];

export default function Process() {
  return (
    <section style={{ backgroundColor: "#12153D", padding: "96px 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <h2
            className="font-syne font-extrabold text-white mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            How It Works
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
            From order to live link in as few as 14 days — fully managed by our team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              className="relative rounded-2xl p-7"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }}
              data-testid={`card-process-step-${step.n}`}
            >
              <div
                className="font-syne font-extrabold text-7xl absolute top-4 right-6 pointer-events-none"
                style={{ color: "#FF6B35", opacity: 0.18, lineHeight: 1 }}
              >
                {step.n}
              </div>
              <div
                className="inline-flex items-center justify-center w-9 h-9 rounded-full text-sm font-bold text-white mb-4"
                style={{ backgroundColor: "#FF6B35" }}
              >
                {parseInt(step.n)}
              </div>
              <h3 className="font-syne font-bold text-lg text-white mb-2">{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-14 rounded-2xl px-8 py-8 text-center"
          style={{ backgroundColor: "rgba(255,107,53,0.1)", border: "1px solid rgba(255,107,53,0.2)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <p className="font-syne font-bold text-xl text-white mb-2">
            Want to know more about our process?
          </p>
          <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.65)" }}>
            Book a free strategy call and we will walk you through exactly how we build links for your niche.
          </p>
          <Link href="/contact">
            <span
              className="inline-block font-semibold rounded-full px-8 py-3.5 text-white text-sm cursor-pointer hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#FF6B35" }}
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
