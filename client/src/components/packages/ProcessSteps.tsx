import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const STEPS = [
  {
    num: "01",
    title: "Strategy & Competitor Audit",
    desc: "We reverse-engineer your top competitors' backlink profiles — finding the exact link gap you need to close to outrank them.",
    deliverable: "47-page battle plan with target sites, DR targets, and keyword map",
    badge: "Free with every package",
    badgeColor: "rgba(0,196,122,0.15)",
    badgeText: "#00C47A",
  },
  {
    num: "02",
    title: "Site Prospecting & Outreach",
    desc: "Manual email outreach directly to bloggers and site editors in your niche. No automated sequences. No scraped databases.",
    deliverable: "Prospecting list with DR, traffic, and relevance scores for your approval",
    badge: "You pre-approve",
    badgeColor: "rgba(255,107,53,0.15)",
    badgeText: "#FF6B35",
  },
  {
    num: "03",
    title: "Content Creation",
    desc: "Expert SEO writers create 1,000+ word articles aligned with your brand voice, target keywords, and AI citation strategy.",
    deliverable: "Drafts for your review before submission — no surprises",
    badge: "Included free",
    badgeColor: "rgba(0,196,122,0.15)",
    badgeText: "#00C47A",
  },
  {
    num: "04",
    title: "Publish & Monitor",
    desc: "Links go live within 21 days of approval. We monitor each placement for indexation, live status, and DR changes.",
    deliverable: "Real-time notification when each link goes live",
    badge: "21-day turnaround",
    badgeColor: "rgba(255,107,53,0.15)",
    badgeText: "#FF6B35",
  },
  {
    num: "05",
    title: "Report & Iterate",
    desc: "Full placement reports: live URL, DR, traffic, anchor text, indexation status, and exportable CSV/PDF. Campaign refined monthly.",
    deliverable: "Monthly strategy session to review results and adjust targeting",
    badge: "Ongoing",
    badgeColor: "rgba(255,255,255,0.1)",
    badgeText: "rgba(255,255,255,0.6)",
  },
];

export default function ProcessSteps() {
  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "96px 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <span
            className="text-xs font-semibold uppercase tracking-widest block mb-3"
            style={{ color: "#FF6B35", fontFamily: "DM Sans, sans-serif" }}
          >
            HOW IT WORKS
          </span>
          <h2
            className="font-syne font-extrabold leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", color: "#0F0F0F" }}
          >
            From Strategy to{" "}
            <span style={{ color: "#FF6B35" }}>Live Placement in 21 Days.</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-base" style={{ color: "#767676", fontFamily: "DM Sans, sans-serif" }}>
            A fully managed process — you stay in control at every step without doing any of the heavy lifting.
          </p>
        </motion.div>

        <div className="space-y-5">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
              className="rounded-2xl p-7 flex flex-col md:flex-row gap-6"
              style={{ border: "1px solid #E2E0DC", backgroundColor: "#F7F6F4" }}
              whileHover={{ borderColor: "#FF6B35", transition: { duration: 0.2 } }}
              data-testid={`card-step-${step.num}`}
            >
              {/* Step number */}
              <div className="flex-shrink-0 flex items-start">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(255,107,53,0.1)",
                    border: "1px solid rgba(255,107,53,0.25)",
                    fontFamily: "Syne, sans-serif",
                    fontWeight: 800,
                    fontSize: 14,
                    color: "#FF6B35",
                  }}
                >
                  {step.num}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 18, color: "#0F0F0F" }}>
                    {step.title}
                  </h3>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: step.badgeColor, color: step.badgeText, fontFamily: "DM Sans, sans-serif" }}
                  >
                    {step.badge}
                  </span>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}>
                  {step.desc}
                </p>
                <div
                  className="inline-flex items-center gap-2 text-xs rounded-lg px-4 py-2"
                  style={{ backgroundColor: "rgba(18,21,61,0.06)", color: "#12153D", fontFamily: "DM Sans, sans-serif" }}
                >
                  <span style={{ color: "#FF6B35" }}>→</span>
                  <span className="font-medium">{step.deliverable}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
