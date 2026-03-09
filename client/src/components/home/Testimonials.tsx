import { useEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

const testimonials = [
  {
    quote: "MaiGrowth didn't just improve our Google rankings — our brand started appearing in ChatGPT answers within 90 days. I had no idea this level of visibility was even achievable.",
    name: "Sarah K.",
    role: "SaaS Founder",
    stars: 5,
    metric: "+312% organic traffic",
  },
  {
    quote: "I've worked with four agencies before MaiGrowth. They're the first to actually understand AI search AND deliver real, trackable results in it. The difference is night and day.",
    name: "Marcus T.",
    role: "E-commerce Owner",
    stars: 5,
    metric: "Featured in 3 AI tools",
  },
  {
    quote: "Transparent reporting, white-hat links, and AEO/GEO results that actually show in the data. This is what modern SEO looks like in 2025.",
    name: "Priya M.",
    role: "Marketing Consultant",
    stars: 5,
    metric: "2x AI brand citations",
  },
  {
    quote: "Within 60 days of starting with MaiGrowth, our brand showed up in a Perplexity answer for our main keyword. We'd been invisible in AI search before. Not anymore.",
    name: "James L.",
    role: "Agency Owner",
    stars: 5,
    metric: "Top 3 AI citations",
  },
  {
    quote: "The AEO strategy alone was worth the investment. Our featured snippet appearances doubled in the first month and we started showing in Google AI Overviews consistently.",
    name: "Aisha R.",
    role: "B2B SaaS Marketer",
    stars: 5,
    metric: "+180% featured snippets",
  },
  {
    quote: "Finally an agency that speaks the language of 2025 SEO. The GEO work they did for our brand means we're now cited by ChatGPT when people ask about our niche.",
    name: "Tom B.",
    role: "Online Course Creator",
    stars: 5,
    metric: "ChatGPT citations secured",
  },
];

function TestimonialCard({ quote, name, role, stars, metric }: typeof testimonials[0]) {
  return (
    <div
      className="relative flex flex-col justify-between transition-all duration-300"
      style={{
        backgroundColor: "#F7F6F4",
        border: "1px solid #E2E0DC",
        borderRadius: 16,
        padding: 32,
        minWidth: 360,
        maxWidth: 360,
        marginLeft: 12,
        marginRight: 12,
        height: "100%",
        cursor: "default",
      }}
    >
      <span
        className="absolute top-6 right-6 select-none leading-none"
        style={{
          fontFamily: "Syne, sans-serif",
          fontWeight: 800,
          fontSize: 60,
          color: "rgba(255,107,53,0.1)",
        }}
      >
        "
      </span>
      <div>
        <div className="flex gap-0.5 mb-3">
          {Array.from({ length: stars }).map((_, i) => (
            <span key={i} className="text-sm" style={{ color: "#FBBF24" }}>★</span>
          ))}
        </div>
        <p
          className="text-[15px] leading-relaxed italic"
          style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}
        >
          "{quote}"
        </p>
      </div>
      <div
        className="flex items-center justify-between mt-6 pt-5"
        style={{ borderTop: "1px solid #E2E0DC" }}
      >
        <div>
          <div
            className="text-[14px]"
            style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, color: "#0F0F0F" }}
          >
            {name}
          </div>
          <div className="text-xs mt-0.5" style={{ color: "#767676", fontFamily: "DM Sans, sans-serif" }}>
            {role}
          </div>
        </div>
        <span className="tag text-[11px]">{metric}</span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const controls = useAnimationControls();
  const allCards = [...testimonials, ...testimonials];

  useEffect(() => {
    controls.start({
      x: [0, "-50%"],
      transition: {
        duration: 32,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [controls]);

  const handleMouseEnter = () => {
    controls.stop();
  };

  const handleMouseLeave = () => {
    controls.start({
      x: [null as any, "-50%"],
      transition: {
        duration: 32,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  };

  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "112px 0", overflow: "hidden" }}>
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span variants={fadeUp} className="section-label">
            CLIENT RESULTS
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
            What Happens When Links Meet AI Visibility
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-xl mx-auto text-[17px] leading-relaxed"
            style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}
          >
            Real results from real business owners who made the switch to AI-era visibility.
          </motion.p>
        </motion.div>
      </div>

      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="flex"
          animate={controls}
          style={{ willChange: "transform" }}
        >
          {allCards.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
