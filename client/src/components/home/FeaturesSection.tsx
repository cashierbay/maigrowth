import { Award, CreditCard, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { StaggerGroup, StaggerItem } from "@/components/shared/StaggerGroup";

const cards = [
  {
    icon: Award,
    title: "Guaranteed Quality",
    body: "Every link comes from a real website with genuine organic traffic. Thoroughly vetted before outreach. No PBNs. No fake sites. No shortcuts. Your domain's safety is non-negotiable.",
  },
  {
    icon: CreditCard,
    title: "One-Time Payments",
    body: "Permanent placements. Pay once. Your link stays live. No monthly rental fees. No recurring charges. Every placement is yours to keep.",
  },
  {
    icon: Sparkles,
    title: "Your Brand in AI Answers",
    body: "Our links are placed on sites that ChatGPT, Perplexity, and Google AI Overviews regularly cite. Your brand gets mentioned in AI-generated answers — included in every order.",
  },
];

export default function FeaturesSection() {
  return (
    <section style={{ backgroundColor: "#EFEFED", padding: "clamp(48px, 10vw, 112px) 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="section-label">
            WHAT MAKES US DIFFERENT
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
            Features of Our Link Building Service
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto text-[17px] leading-relaxed"
            style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}
          >
            Every Guest Post and Link Insertion we build includes these guarantees — no exceptions.
          </p>
        </AnimatedSection>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <StaggerItem
                key={card.title}
                className="mg-card text-center"
                whileHover={{ y: -6, boxShadow: "0 14px 40px rgba(0,0,0,0.09)", transition: { duration: 0.22 } }}
              >
                <div
                  className="rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: "#FF6B35", width: 64, height: 64 }}
                >
                  <Icon size={28} color="white" />
                </div>
                <h3
                  className="text-xl mb-3"
                  style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, color: "#0F0F0F" }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-[14px] leading-relaxed"
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
