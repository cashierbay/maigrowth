import { Award, CreditCard, Settings2 } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { StaggerGroup, StaggerItem } from "@/components/shared/StaggerGroup";

const cards = [
  {
    icon: Award,
    title: "Guaranteed Quality",
    body: "We deliver only the highest-quality, most thoroughly vetted backlinks. Every link we build comes from a real website with genuine organic traffic — no PBNs, no fake sites, no shortcuts.",
  },
  {
    icon: CreditCard,
    title: "One-Time Payments",
    body: "Quality backlinks should be permanent assets, not recurring fees. Every link secured through MaiGrowth requires only a single flat-rate payment — yours to keep with no monthly charges.",
  },
  {
    icon: Settings2,
    title: "Fully Managed Campaigns",
    body: "We handle every detail of your link building and AEO/GEO campaign — from strategy and outreach to content writing and reporting. You get powerful results without the additional workload.",
  },
];

export default function FeaturesSection() {
  return (
    <section style={{ backgroundColor: "#EFEFED", padding: "112px 0" }}>
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
            Features of Our Link Building + AEO/GEO Service
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto text-[17px] leading-relaxed"
            style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}
          >
            Everything you need to dominate both traditional search and AI-powered answers — handled end to end by our team.
          </p>
        </AnimatedSection>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <StaggerItem key={card.title} className="mg-card text-center">
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
