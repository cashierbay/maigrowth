import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

const faqs = [
  {
    q: "What is a Guest Post service?",
    a: "A Guest Post is a brand new article written by our team and published on a real, high-authority website in your niche. The article includes a contextual link back to your site. Every placement is white-hat, permanently live, and delivered within 21 days. Because we only place on trusted, authoritative sites — your brand also gets found in ChatGPT and Perplexity answers as a bonus.",
  },
  {
    q: "What is a Link Insertion?",
    a: "A Link Insertion places your link into an existing, already-published article on a real authority website. The article already has trust, traffic, and indexation — your link immediately benefits from that. Faster than Guest Posts and equally effective for building authority in both Google and AI search.",
  },
  {
    q: "Why do your links show up in ChatGPT and Perplexity?",
    a: "We only build links on websites that AI tools like ChatGPT, Perplexity, and Google AI Overviews regularly reference as trusted sources. This means when someone asks an AI tool a question in your niche, your brand is more likely to be cited in the answer. This is not a separate service — it is simply how we select sites and build every link. No extra cost.",
  },
  {
    q: "Do I need Guest Posts or Link Insertions — or both?",
    a: "Both work well. Guest Posts are best for building topical authority with fresh, niche-relevant content. Link Insertions are faster and work well for adding placements in aged, trusted articles. Most serious campaigns benefit from both — which is why we offer Full Campaign Packages that combine them for better results and better value.",
  },
  {
    q: "How long does it take to see results?",
    a: "Individual placements go live within 21 days. Google ranking improvements typically appear within 60–90 days as search engines crawl and evaluate the new links. Your brand appearing in ChatGPT and Perplexity answers varies by niche — most clients notice increased AI visibility within 60–90 days of starting a campaign.",
  },
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section style={{ backgroundColor: "#F7F6F4", padding: "112px 0" }}>
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection className="text-center mb-14">
          <span className="section-label">
            QUICK ANSWERS
          </span>
          <h2
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(28px, 3.5vw, 46px)",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              color: "#0F0F0F",
            }}
          >
            Common Questions
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-l-[3px] pl-4 transition-all duration-300"
              style={{
                borderBottom: "1px solid #E2E0DC",
                borderLeftColor: openIndex === i ? "#FF6B35" : "transparent",
              }}
            >
              <button
                className="flex items-center justify-between w-full py-5 text-left cursor-pointer"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                data-testid={`button-faq-${i}`}
              >
                <span
                  className="text-[16px] font-medium pr-4 transition-colors duration-200"
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontWeight: 600,
                    color: openIndex === i ? "#FF6B35" : "#0F0F0F",
                  }}
                >
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  style={{
                    color: "#767676",
                    flexShrink: 0,
                    transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s",
                  }}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <p
                      className="pb-5 text-[15px] leading-relaxed"
                      style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}
                    >
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
