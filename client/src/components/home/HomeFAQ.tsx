import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeUp, stagger } from "@/lib/animations";

const faqs = [
  {
    q: "What is AEO and why does it matter in 2025?",
    a: "AEO stands for Answer Engine Optimization. As Google AI Overviews, Bing Copilot, and AI assistants now directly answer search queries, brands not optimized to be cited as sources are losing enormous visibility. AEO structures your content and authority so AI systems choose your brand as the answer — not your competitor's.",
  },
  {
    q: "What is GEO optimization?",
    a: "GEO stands for Generative Engine Optimization. It focuses on making your brand visible inside AI-generated responses from ChatGPT, Perplexity, Claude, and Gemini. When someone asks these tools a question in your industry, GEO ensures your brand is recognized and cited as an authoritative source.",
  },
  {
    q: "How is MaiGrowth different from regular link building agencies?",
    a: "Most link building agencies are built entirely around Google. MaiGrowth combines premium link building with AEO and GEO strategies — so every link we build serves double duty: improving your Google rankings AND strengthening your authority with AI engines. Same investment, multiplied visibility.",
  },
  {
    q: "Do you work with businesses globally?",
    a: "Yes — MaiGrowth is a fully remote, global service. We work with business owners in any country and any industry. Our outreach network is international and our AEO/GEO strategies are built for any English-language website regardless of location.",
  },
  {
    q: "How long does it take to see results?",
    a: "Link building improvements typically appear within 60–90 days. AEO results — featured snippets and AI Overview appearances — can surface within 30–60 days. Most clients see initial AI tool citations within 60–90 days of starting GEO work, depending on their existing domain authority.",
  },
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section style={{ backgroundColor: "#F7F6F4", padding: "112px 0" }}>
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="text-center mb-14"
        >
          <motion.span variants={fadeUp} className="section-label">
            QUICK ANSWERS
          </motion.span>
          <motion.h2
            variants={fadeUp}
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
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              style={{ borderBottom: "1px solid #E2E0DC" }}
            >
              <button
                className="flex items-center justify-between w-full py-5 text-left transition-colors cursor-pointer"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                data-testid={`button-faq-${i}`}
              >
                <span
                  className="text-[16px] font-medium pr-4"
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontWeight: 600,
                    color: openIndex === i ? "#FF6B35" : "#0F0F0F",
                    transition: "color 0.2s",
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
