import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const packages = [
  {
    emoji: "🌱",
    name: "Starter",
    desc: "Entry-level Link Insertions. Ideal for new sites establishing domain authority.",
    price: "$497",
    oldPrice: "$537",
    savings: "Save 7%",
    perLink: "$166/link",
    features: [
      "3× DR 30+ Link Insertions",
      "Manual white-hat outreach",
      "Traffic-verified placements",
      "Full placement report",
      "12-month guarantee",
    ],
    featured: false,
  },
  {
    emoji: "🚀",
    name: "Intermediate",
    desc: "Mixed authority tiers for sites ready to climb competitive rankings.",
    price: "$1,049",
    oldPrice: "$1,145",
    savings: "Save 8%",
    perLink: "$210/link",
    features: [
      "3× DR 30+ Link Insertions",
      "1× DR 40+ Link Insertion",
      "1× DR 50+ Link Insertion",
      "Dedicated account manager",
      "Full placement report",
      "12-month guarantee",
    ],
    featured: false,
  },
  {
    emoji: "✨",
    name: "Advanced",
    desc: "Our most popular package. Built for businesses serious about ranking and AI visibility.",
    price: "$1,799",
    oldPrice: "$2,041",
    savings: "Save 12%",
    perLink: "$200/link",
    features: [
      "5× DR 30+ Link Insertions",
      "3× DR 40+ Link Insertions",
      "1× DR 50+ Link Insertion",
      "Priority outreach",
      "AI & LLM optimised sites",
      "Dedicated account manager",
      "Full placement report",
      "12-month guarantee",
    ],
    featured: true,
  },
  {
    emoji: "💪",
    name: "Pro",
    desc: "High-volume authority building for established brands in competitive markets.",
    price: "$3,799",
    oldPrice: "$4,512",
    savings: "Save 16%",
    perLink: "$211/link",
    features: [
      "10× DR 30+ Link Insertions",
      "3× DR 40+ Link Insertions",
      "3× DR 50+ Link Insertions",
      "2× DR 60+ Link Insertions",
      "Priority account manager",
      "Weekly progress updates",
      "Full placement report",
      "12-month guarantee",
    ],
    featured: false,
  },
  {
    emoji: "👑",
    name: "Ultimate",
    desc: "Maximum authority, maximum results. For brands that want to dominate their niche.",
    price: "$6,999",
    oldPrice: "$8,635",
    savings: "Save 19%",
    perLink: "$194/link",
    features: [
      "15× DR 30+ Link Insertions",
      "8× DR 40+ Link Insertions",
      "8× DR 50+ Link Insertions",
      "5× DR 60+ Link Insertions",
      "Dedicated senior manager",
      "Bi-weekly strategy calls",
      "AI & LLM visibility audit",
      "Full placement report",
      "12-month guarantee",
    ],
    featured: false,
  },
];

export default function Packages() {
  return (
    <section id="packages" style={{ backgroundColor: "#F7F6F4", padding: "clamp(40px, 8vw, 96px) 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <span
            className="inline-block text-xs font-bold px-4 py-2 rounded-full mb-4"
            style={{ backgroundColor: "#FFF0EB", color: "#FF6B35" }}
          >
            ⏰ Limited Time Offer: Save up to 19%
          </span>
          <h2
            className="font-syne font-extrabold mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0F0F0F" }}
          >
            Link Insertion Packages
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#767676" }}>
            Choose the package that fits your goals. All packages include a dedicated account manager and 12-month link guarantee.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-10">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              className="relative flex flex-col rounded-2xl bg-white"
              style={
                pkg.featured
                  ? {
                      border: "2px solid #FF6B35",
                      boxShadow: "0 12px 48px rgba(255,107,53,0.2)",
                      transform: "scale(1.05)",
                      zIndex: 2,
                    }
                  : {
                      border: "1px solid #E2E0DC",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                    }
              }
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE, delay: i * 0.07 }}
              data-testid={`card-package-${pkg.name.toLowerCase()}`}
            >
              {pkg.featured && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1.5 rounded-full text-white whitespace-nowrap"
                  style={{ backgroundColor: "#FF6B35" }}
                >
                  🔥 MOST POPULAR
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                <div className="text-3xl mb-3">{pkg.emoji}</div>
                <h3 className="font-syne font-bold text-xl mb-1" style={{ color: "#0F0F0F" }}>
                  {pkg.name}
                </h3>
                <p className="text-xs mb-4 leading-relaxed" style={{ color: "#767676" }}>
                  {pkg.desc}
                </p>

                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="font-syne font-extrabold text-2xl" style={{ color: "#0F0F0F" }}>
                      {pkg.price}
                    </span>
                    <span className="text-xs line-through" style={{ color: "#A8A8A8" }}>
                      {pkg.oldPrice}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-medium" style={{ color: "#767676" }}>{pkg.perLink}</span>
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: "#FFF0EB", color: "#FF6B35" }}
                    >
                      {pkg.savings}
                    </span>
                  </div>
                </div>

                <div
                  className="space-y-2 mb-6 flex-1"
                  style={{ borderTop: "1px solid #E2E0DC", paddingTop: "1rem" }}
                >
                  {pkg.features.map((f) => (
                    <div key={f} className="flex items-start gap-2">
                      <CheckCircle2 size={13} className="flex-shrink-0 mt-0.5" style={{ color: "#00C47A" }} />
                      <span className="text-xs" style={{ color: "#3D3D3D" }}>{f}</span>
                    </div>
                  ))}
                </div>

                <Link href="/contact">
                  <span
                    className="block text-center text-sm font-bold py-3 rounded-xl cursor-pointer transition-all"
                    style={
                      pkg.featured
                        ? { backgroundColor: "#FF6B35", color: "white" }
                        : { backgroundColor: "#F7F6F4", color: "#0F0F0F", border: "1px solid #E2E0DC" }
                    }
                    data-testid={`button-package-${pkg.name.toLowerCase()}`}
                  >
                    {pkg.featured ? "Get Started — Most Popular" : "Purchase Package"}
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Not sure box */}
        <motion.div
          className="mt-14 rounded-2xl px-8 py-8 text-center"
          style={{ backgroundColor: "#12153D" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <p className="font-syne font-bold text-xl text-white mb-2">
            Not sure which package is right for you?
          </p>
          <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.65)" }}>
            Book a free 20-minute strategy call and we will recommend the right mix of Link Insertions for your goals and budget.
          </p>
          <Link href="/contact">
            <span
              className="inline-block font-semibold rounded-full px-8 py-3.5 text-white text-sm cursor-pointer hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#FF6B35" }}
              data-testid="button-packages-call"
            >
              Book Free Strategy Call
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
