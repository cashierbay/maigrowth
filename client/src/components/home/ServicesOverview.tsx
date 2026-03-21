import { motion } from "framer-motion";
import { Link2, BrainCircuit, Globe2 } from "lucide-react";
import { Link } from "wouter";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { StaggerGroup, StaggerItem } from "@/components/shared/StaggerGroup";

const services = [
  {
    icon: Link2,
    title: "Premium Link Building",
    body: "High-authority backlinks from real, traffic-verified websites. White-hat outreach, guest posts, contextual insertions. Permanent — not rental.",
    tags: ["White-Hat", "Real Sites", "DR 40+"],
    featured: false,
  },
  {
    icon: BrainCircuit,
    title: "AEO Optimization",
    body: "Get selected as the answer. Optimize your content structure and authority so Google AI Overviews and Bing Copilot cite your brand as the definitive source.",
    tags: ["AI Overviews", "Featured Snippets", "Schema"],
    featured: true,
    badge: "NEW ERA",
  },
  {
    icon: Globe2,
    title: "GEO Optimization",
    body: "Build recognition inside AI engines. Make ChatGPT, Perplexity, Claude, and Gemini cite your brand when users ask questions in your niche.",
    tags: ["ChatGPT", "Perplexity", "Gemini", "Claude"],
    featured: false,
  },
];

export default function ServicesOverview() {
  return (
    <section style={{ backgroundColor: "#EFEFED", padding: "112px 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="section-label">
            WHAT WE DO
          </span>
          <h2
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(30px, 4vw, 52px)",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              color: "#0F0F0F",
            }}
          >
            Three Services. One Unified Visibility Strategy.
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto text-[17px] leading-relaxed"
            style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}
          >
            While others focus on a single channel, MaiGrowth makes you visible on all three simultaneously.
          </p>
        </AnimatedSection>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem
                key={service.title}
                className="mg-card relative flex flex-col"
                style={
                  service.featured
                    ? {
                        borderColor: "#FF6B35",
                        boxShadow: "0 4px 24px rgba(255,107,53,0.1)",
                      }
                    : {}
                }
              >
                {service.badge && (
                  <div className="absolute top-6 right-6">
                    <span className="tag">{service.badge}</span>
                  </div>
                )}
                <Icon size={28} style={{ color: "#FF6B35" }} className="mb-4" />
                <h3
                  className="text-xl mb-3"
                  style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, color: "#0F0F0F" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-[15px] leading-relaxed mb-5 flex-1"
                  style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}
                >
                  {service.body}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag) => (
                    <span key={tag} className="tag-neutral">{tag}</span>
                  ))}
                </div>
                <Link href="/services" data-testid={`link-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <span
                    className="text-sm font-semibold cursor-pointer transition-all"
                    style={{ color: "#FF6B35", fontFamily: "DM Sans, sans-serif" }}
                    onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                    onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
                  >
                    Learn More →
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-14"
        >
          <Link href="/services" data-testid="button-view-all-services">
            <span className="btn-secondary">View All Services →</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
