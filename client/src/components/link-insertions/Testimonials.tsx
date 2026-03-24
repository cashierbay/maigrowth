import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const testimonials = [
  {
    badge: "📈 +280% Organic Traffic",
    quote:
      "MaiGrowth's Link Insertions moved us from page 4 to page 1 for three of our most competitive keywords. The traffic growth speaks for itself — 280% in under 8 months.",
    name: "Sarah Chen",
    company: "SaaSFlow",
    initials: "SC",
  },
  {
    badge: "🎯 Page 1 Rankings in 60 Days",
    quote:
      "We were stuck on page 2 for months. After a single Link Insertion package, two of our target keywords hit page 1 in 60 days. The placement quality is exceptional.",
    name: "Marcus Williams",
    company: "Elevate Digital",
    initials: "MW",
  },
  {
    badge: "💰 ROI: 340% in 6 Months",
    quote:
      "The ROI on MaiGrowth's Link Insertions has been extraordinary. We calculated 340% return within 6 months based on the incremental organic revenue from improved rankings.",
    name: "Elena Petrova",
    company: "FinanceHive",
    initials: "EP",
  },
  {
    badge: "⭐ DR Increase: +12 Points",
    quote:
      "Our Domain Rating climbed 12 points within 4 months of starting our Link Insertion campaign. The quality of sites MaiGrowth secures placements on is genuinely impressive.",
    name: "James Okafor",
    company: "TechLaunch",
    initials: "JO",
  },
  {
    badge: "🤖 Featured in ChatGPT",
    quote:
      "We started appearing in ChatGPT responses for our target topics within 3 months. MaiGrowth's AI-optimised placements clearly made a real difference to our brand visibility.",
    name: "Amelia Torres",
    company: "ContentScale",
    initials: "AT",
  },
];

export default function Testimonials() {
  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "clamp(40px, 8vw, 96px) 0" }}>
      <div className="max-w-7xl mx-auto px-6">
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
            What Our Clients Say
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#767676" }}>
            Real results from real businesses using MaiGrowth Link Insertions.
          </p>
        </motion.div>

        <div
          className="flex gap-6 overflow-x-auto pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="flex-shrink-0 rounded-2xl p-7 flex flex-col"
              style={{
                width: "clamp(280px, 34vw, 360px)",
                backgroundColor: "#F7F6F4",
                border: "1px solid #E2E0DC",
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE, delay: i * 0.07 }}
              data-testid={`card-testimonial-${i}`}
            >
              <span
                className="self-start text-xs font-bold px-3 py-1.5 rounded-full mb-4"
                style={{ backgroundColor: "#FFF0EB", color: "#FF6B35" }}
              >
                {t.badge}
              </span>
              <p className="text-sm leading-relaxed flex-1 mb-5 italic" style={{ color: "#3D3D3D" }}>
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: "#12153D" }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: "#0F0F0F" }}>{t.name}</div>
                  <div className="text-xs" style={{ color: "#767676" }}>{t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
