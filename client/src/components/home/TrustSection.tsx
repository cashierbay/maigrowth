import { ShieldCheck, Globe2, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { StaggerGroup, StaggerItem } from "@/components/shared/StaggerGroup";

const cards = [
  {
    icon: ShieldCheck,
    title: "White-Hat Only",
    body: "We never use PBNs, link farms, or manipulative tactics. Every link is ethically acquired, Google-compliant, and built to last. Your domain's safety is non-negotiable.",
  },
  {
    icon: Globe2,
    title: "Real Websites Only",
    body: "Every backlink comes from genuine websites with real organic traffic and real editorial standards. Zero fake sites. Zero link networks. Zero shortcuts.",
  },
  {
    icon: Sparkles,
    title: "Found in ChatGPT & AI Overviews",
    body: "Our links are placed on the same authoritative sites that ChatGPT, Perplexity, and Google AI Overviews reference when generating answers. Your brand gets found wherever your customers search.",
  },
];

export default function TrustSection() {
  return (
    <section style={{ backgroundColor: "#EFEFED", padding: "96px 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-14">
          <span className="section-label">
            WHY TRUST US
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
            Built on Transparency. Delivered with Proof.
          </h2>
        </AnimatedSection>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <StaggerItem
                key={card.title}
                className="mg-card"
                style={{ cursor: "default" }}
                whileHover={{ y: -6, boxShadow: "0 14px 40px rgba(0,0,0,0.09)", borderColor: "#FF6B35", transition: { duration: 0.22 } }}
              >
                <Icon size={28} style={{ color: "#FF6B35" }} className="mb-4" />
                <h3
                  className="text-xl mb-3"
                  style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, color: "#0F0F0F" }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-[15px] leading-relaxed"
                  style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}
                >
                  {card.body}
                </p>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
