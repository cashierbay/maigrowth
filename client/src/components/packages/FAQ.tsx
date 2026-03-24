import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const FAQ_ITEMS = [
  {
    q: "How long until I see results?",
    a: "Wrong question. Ask this instead: 'How long until I'm untouchable?'\n\nRankings move in 14–60 days depending on competition. But if you're asking when you'll own your category — when competitors give up trying to outrank you — that's 6–12 months of consistent campaigns.\n\nWe're not here for quick wins. We build empires.",
  },
  {
    q: "What's the difference between the packages?",
    a: "Volume and authority. Every package uses the same white-hat methodology — manual outreach, original content, 1,000+ traffic sites, AI optimization. The difference is the number of placements and the DR range.\n\nHigher packages = more links, higher DR sites, faster authority transfer. The Authority Takeover is our agency favorite because it hits the volume sweet spot for meaningful ranking movement within 90 days.",
  },
  {
    q: "Can I choose which sites my links appear on?",
    a: "Yes. We offer full site pre-approval on all packages. Before any content is written or submitted, you'll review the prospected domains with DR, traffic, and relevance scores.\n\nYou can set minimums, exclude niches or competitors, and reject any site you don't like. You stay in control without doing any of the outreach work.",
  },
  {
    q: "Do you guarantee results?",
    a: "We guarantee two things: (1) every link is placed on a site with 1,000+ verified monthly organic traffic, and (2) if any link drops within 12 months, we replace it for free.\n\nWe don't guarantee specific ranking positions — no honest agency can. What we guarantee is that every placement is real, white-hat, and built to last.",
  },
  {
    q: "Why combine Guest Posts and Link Insertions?",
    a: "Guest Posts (brand-new content) signal fresh authority to Google. Link Insertions (existing aged articles) transfer existing authority faster.\n\nRunning both together creates a balanced backlink profile — one that looks completely natural to Google and moves your rankings faster than either tactic alone. It's a system, not just a service.",
  },
  {
    q: "Do you work with any niche?",
    a: "We work with most niches including SaaS, e-commerce, finance, health, legal, real estate, technology, and marketing. We don't accept casino, CBD, adult, or spam niches.\n\nIf you're in a regulated industry (finance, medical, legal), contact us first — we have dedicated outreach teams for high-compliance verticals.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "clamp(40px, 8vw, 96px) 0" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-16 lg:gap-24">
          {/* Sticky left label */}
          <motion.div
            className="lg:sticky lg:top-28 self-start"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest block mb-3" style={{ color: "#FF6B35", fontFamily: "DM Sans, sans-serif" }}>
              FAQ
            </span>
            <h2
              className="font-syne font-extrabold leading-tight"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#0F0F0F" }}
            >
              Questions Worth Asking.
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "#767676", fontFamily: "DM Sans, sans-serif" }}>
              If your question isn't here, email us at{" "}
              <a href="mailto:hello@maigrowth.com" style={{ color: "#FF6B35" }}>
                hello@maigrowth.com
              </a>
            </p>
          </motion.div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.1 }}
          >
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                style={{
                  borderBottom: "1px solid #E2E0DC",
                  ...(open === i ? { borderLeft: "3px solid #FF6B35", paddingLeft: 20 } : {}),
                  transition: "all 0.3s ease",
                }}
                data-testid={`faq-item-${i}`}
              >
                <button
                  className="flex justify-between items-center py-5 w-full cursor-pointer text-left"
                  onClick={() => setOpen(open === i ? -1 : i)}
                  data-testid={`button-faq-${i}`}
                >
                  <span
                    style={{
                      fontFamily: "Syne, sans-serif",
                      fontWeight: 700,
                      fontSize: 15,
                      color: open === i ? "#FF6B35" : "#0F0F0F",
                    }}
                  >
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 ml-4 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ border: "1px solid #E2E0DC", color: open === i ? "#FF6B35" : "#767676" }}
                  >
                    <Plus size={14} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="pb-5">
                        {item.a.split("\n\n").map((para, j) => (
                          <p
                            key={j}
                            className="text-sm leading-relaxed mb-3"
                            style={{ color: j === 0 ? "#0F0F0F" : "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}
                          >
                            {para}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
