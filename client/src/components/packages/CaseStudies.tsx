import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = end / 60;
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 25);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const CASE_STUDIES = [
  {
    tag: "SaaS / B2B",
    challenge: "A SaaS project management tool was stuck on page 3 for their primary keyword — behind 3 direct competitors with stronger backlink profiles.",
    strategy: "Authority Takeover package: 22 Guest Posts (DR 40–50) + 18 Link Insertions targeting competitor anchor text gaps, with AI entity optimization.",
    result: "Moved from position 28 to position 1 in 7 months. Now cited in ChatGPT for their target keyword category.",
    stats: [
      { label: "Traffic Increase", value: 340, suffix: "%" },
      { label: "Positions Gained", value: 27, suffix: "" },
      { label: "AI Citations", value: 4, suffix: "" },
    ],
    color: "#FF6B35",
  },
  {
    tag: "E-Commerce",
    challenge: "A DTC e-commerce brand had a new domain — zero authority, competing against established retailers with 10+ year backlink histories.",
    strategy: "Momentum Builder package (6-month campaign): 60 Guest Posts + 60 Link Insertions in phased waves, targeting category and product keywords.",
    result: "Domain rating grew from DR 0 to DR 38. Organic traffic now drives 40% of total revenue. Zero penalties throughout.",
    stats: [
      { label: "Domain Rating", value: 38, suffix: "" },
      { label: "Organic Revenue %", value: 40, suffix: "%" },
      { label: "Months to Results", value: 4, suffix: "" },
    ],
    color: "#00C47A",
  },
  {
    tag: "Legal / Professional",
    challenge: "A law firm in a hyper-competitive personal injury market was spending $40K/month on Google Ads with diminishing returns. Needed organic traction.",
    strategy: "Market Leader package over 8 months: High-DR guest posts in legal and finance publications + AI entity optimization for ChatGPT citation.",
    result: "Organic leads now exceed paid leads for the first time. Featured in ChatGPT answers for 'personal injury attorney [city]' queries.",
    stats: [
      { label: "Organic Leads vs Paid", value: 112, suffix: "%" },
      { label: "Ad Spend Reduction", value: 60, suffix: "%" },
      { label: "AI Answer Features", value: 6, suffix: "" },
    ],
    color: "#6366F1",
  },
];

export default function CaseStudies() {
  return (
    <section style={{ backgroundColor: "#F7F6F4", padding: "96px 0" }}>
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
            RESULTS
          </span>
          <h2
            className="font-syne font-extrabold leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", color: "#0F0F0F" }}
          >
            What Dominance{" "}
            <span style={{ color: "#FF6B35" }}>Actually Looks Like.</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-base" style={{ color: "#767676", fontFamily: "DM Sans, sans-serif" }}>
            Three campaigns. Three different niches. One consistent result: rankings that stick.
          </p>
        </motion.div>

        <div className="space-y-6">
          {CASE_STUDIES.map((cs, i) => (
            <motion.div
              key={cs.tag}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid #E2E0DC", backgroundColor: "#FFFFFF" }}
              data-testid={`card-case-${i}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_280px]">
                {/* Challenge */}
                <div className="p-8 border-b lg:border-b-0 lg:border-r" style={{ borderColor: "#E2E0DC" }}>
                  <span
                    className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4"
                    style={{ backgroundColor: "rgba(255,107,53,0.1)", color: "#FF6B35" }}
                  >
                    {cs.tag}
                  </span>
                  <h4 className="font-syne font-bold text-sm mb-2" style={{ color: "#FF6B35" }}>THE CHALLENGE</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}>{cs.challenge}</p>
                </div>

                {/* Strategy */}
                <div className="p-8 border-b lg:border-b-0 lg:border-r" style={{ borderColor: "#E2E0DC" }}>
                  <h4 className="font-syne font-bold text-sm mb-2 mt-8 lg:mt-0" style={{ color: "#0F0F0F" }}>THE STRATEGY</h4>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}>{cs.strategy}</p>
                  <h4 className="font-syne font-bold text-sm mb-2" style={{ color: "#00C47A" }}>THE RESULT</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}>{cs.result}</p>
                </div>

                {/* Stats */}
                <div className="p-8 flex flex-col justify-center gap-6" style={{ backgroundColor: "#12153D" }}>
                  {cs.stats.map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="font-syne font-extrabold text-3xl" style={{ color: cs.color }}>
                        <Counter end={s.value} suffix={s.suffix} />
                      </div>
                      <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "DM Sans, sans-serif" }}>
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
