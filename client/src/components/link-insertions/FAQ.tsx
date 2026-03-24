import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const faqs = [
  {
    q: "What is a Link Insertion?",
    a: "A Link Insertion (also called a niche edit) is a do-follow backlink placed within an existing, already-published article on a high-authority website. Unlike guest posts, Link Insertions leverage content that already ranks and has built-up link equity — making them faster-acting and highly effective.",
  },
  {
    q: "Are Link Insertions safe for SEO?",
    a: "Yes — when done correctly. MaiGrowth only places links on genuine, editorially-run websites with real organic traffic. We never use PBNs, link farms, or automated outreach. Every placement follows Google Webmaster Guidelines and is 100% white-hat.",
  },
  {
    q: "How long does it take to see results?",
    a: "Most clients see measurable improvements in rankings and traffic within 60–90 days of their first placements going live. Domain Rating increases are typically visible within 3–4 months. Full campaign results are best evaluated at the 6-month mark.",
  },
  {
    q: "What is the minimum traffic requirement for placement sites?",
    a: "Every site we place links on must have a minimum of 1,000 verified monthly organic visitors at time of placement, confirmed via Ahrefs data. This is included in every placement report we send you.",
  },
  {
    q: "Can I choose the anchor text and target URLs?",
    a: "Yes. During onboarding you provide your preferred anchor texts and target URLs. We incorporate them naturally within the existing content. We may recommend small adjustments to ensure the placement reads organically, but you have full input on the strategy.",
  },
  {
    q: "What happens if a link drops or is removed?",
    a: "We monitor every link for 12 full months. If any link is removed, changes to nofollow, or the page is deleted, we replace it free of charge within 14 days. This 12-month guarantee is included with every order.",
  },
  {
    q: "Do you work with all niches?",
    a: "We work with most niches including SaaS, e-commerce, finance, health, legal, real estate, technology, marketing, and more. We do not place links in casino, adult, CBD, or spam niches. Contact us if you are in a regulated industry and we will confirm availability.",
  },
  {
    q: "What reporting do I receive?",
    a: "You receive a full placement report for every link including: live URL, domain DR and DA, monthly organic traffic, anchor text used, target URL, do-follow status confirmation, and publication date. Reports are available in CSV and PDF format.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden"
      style={{ border: "1px solid #E2E0DC" }}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: EASE, delay: index * 0.05 }}
    >
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
        onClick={() => setOpen(!open)}
        data-testid={`button-faq-${index}`}
        aria-expanded={open}
      >
        <span className="font-syne font-bold text-base pr-4" style={{ color: "#0F0F0F" }}>
          {q}
        </span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
          style={{ backgroundColor: open ? "#FF6B35" : "#F7F6F4" }}
        >
          {open ? (
            <Minus size={14} color="white" />
          ) : (
            <Plus size={14} style={{ color: "#3D3D3D" }} />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            style={{ overflow: "hidden" }}
          >
            <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "#767676" }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section style={{ backgroundColor: "#F7F6F4", padding: "clamp(40px, 8vw, 96px) 0" }}>
      <div className="max-w-3xl mx-auto px-6">
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
            Frequently Asked Questions
          </h2>
          <p className="text-base" style={{ color: "#767676" }}>
            Everything you need to know about MaiGrowth Link Insertions.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
