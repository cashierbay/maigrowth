import { motion } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, ease: EASE },
};

const PROBLEMS = [
  "Buying random links with no campaign strategy",
  "Paying for links that never move your rankings",
  "Getting penalised by algorithm updates",
  "Zero visibility in ChatGPT, Perplexity, or AI Overviews",
  "No idea which links are actually working",
];

const SOLUTIONS = [
  "Coordinated campaigns: Guest Posts + Link Insertions working together",
  "Every link placed on sites with 1,000+ verified monthly traffic",
  "100% white-hat, editorially placed — Google-proof by design",
  "AI & LLM optimization built into every placement from day one",
  "Full placement reports with live URLs, DR, traffic, and indexation",
];

export default function ProblemSolution() {
  return (
    <section style={{ backgroundColor: "#F7F6F4", padding: "clamp(40px, 8vw, 96px) 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span
            className="text-xs font-semibold uppercase tracking-widest block mb-3"
            style={{ color: "#FF6B35", fontFamily: "DM Sans, sans-serif" }}
          >
            THE REAL PROBLEM
          </span>
          <h2
            className="font-syne font-extrabold leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", color: "#0F0F0F" }}
          >
            Most Link Building is{" "}
            <span style={{ color: "#FF6B35" }}>Broken.</span>
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto text-base leading-relaxed"
            style={{ color: "#767676", fontFamily: "DM Sans, sans-serif" }}
          >
            Random links. No strategy. No AI visibility. No results. Sound familiar?
            Here's what changes when you run with MaiGrowth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Problem column */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="rounded-2xl p-8"
            style={{ backgroundColor: "#FFFFFF", border: "1px solid #E2E0DC" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "rgba(239,68,68,0.1)" }}
              >
                <XCircle size={20} style={{ color: "#EF4444" }} />
              </div>
              <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 18, color: "#0F0F0F" }}>
                What Most Agencies Do
              </h3>
            </div>
            <div className="space-y-4">
              {PROBLEMS.map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <XCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#EF4444" }} />
                  <p className="text-sm leading-relaxed" style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}>{p}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solution column */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="rounded-2xl p-8"
            style={{
              background: "linear-gradient(135deg, #12153D 0%, #1a1f4d 100%)",
              border: "1px solid rgba(255,107,53,0.25)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "rgba(0,196,122,0.15)" }}
              >
                <CheckCircle2 size={20} style={{ color: "#00C47A" }} />
              </div>
              <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 18, color: "#FFFFFF" }}>
                The MaiGrowth Way
              </h3>
            </div>
            <div className="space-y-4">
              {SOLUTIONS.map((s) => (
                <div key={s} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#00C47A" }} />
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "DM Sans, sans-serif" }}>{s}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
