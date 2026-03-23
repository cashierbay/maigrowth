import { motion } from "framer-motion";
import { FileText, Link2, Package } from "lucide-react";
import { Link } from "wouter";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { StaggerGroup, StaggerItem } from "@/components/shared/StaggerGroup";

const services = [
  {
    icon: FileText,
    title: "High Authority Backlinks",
    body: "Get featured on high DA/DR websites in your niche with SEO-optimized content designed to rank and drive traffic. Every backlink is placed naturally within real content on trusted sites.",
    tags: ["DR30–90+ Websites", "Content Included", "Permanent Placement"],
    featured: false,
    badge: "",
    href: "/guest-posts",
    linkLabel: "Explore Opportunities →",
  },
  {
    icon: Link2,
    title: "Niche Edits & Link Insertions",
    body: "Place your link inside aged, already-ranking content that has existing authority and traffic. This allows you to gain faster SEO impact without waiting for new pages to rank.",
    tags: ["Aged Content", "Fast Results", "Contextual Links"],
    featured: false,
    badge: "",
    href: "/link-insertions",
    linkLabel: "View Opportunities →",
  },
  {
    icon: Package,
    title: "Managed SEO Campaigns",
    body: "A complete link building strategy combining guest posts and niche edits into a scalable monthly campaign designed to grow rankings, traffic, and authority consistently.",
    tags: ["Combined Strategy", "Monthly or One-Time", "AI & SEO Optimized"],
    featured: true,
    badge: "Most Popular",
    href: "/packages",
    linkLabel: "Get Strategy →",
  },
];

export default function ServicesOverview() {
  return (
    <section style={{ backgroundColor: "#EFEFED", padding: "112px 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="section-label">
            OUR SERVICES
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
          >SEO Link Building & Authority Growth That Drives Rankings and AI Visibility</h2>
          <p
            className="mt-4 max-w-2xl mx-auto text-[17px] leading-relaxed"
            style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}
          >Most SEO agencies focus only on backlinks. We build high-authority link building strategies that increase your rankings, traffic, and visibility across Google and AI-generated results.</p>
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
                whileHover={
                  service.featured
                    ? { y: -9, boxShadow: "0 20px 60px rgba(255,107,53,0.18)", transition: { duration: 0.22, ease: "easeOut" } }
                    : { y: -7, boxShadow: "0 16px 48px rgba(255,107,53,0.11)", transition: { duration: 0.22, ease: "easeOut" } }
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
                <Link href={service.href} data-testid={`link-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <span
                    className="text-sm font-semibold cursor-pointer transition-all"
                    style={{ color: "#FF6B35", fontFamily: "DM Sans, sans-serif" }}
                    onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                    onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
                  >
                    {service.linkLabel}
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: "rgba(255,107,53,0.05)",
            border: "1px solid rgba(255,107,53,0.2)",
            borderRadius: "16px",
            padding: "28px 32px",
            maxWidth: "680px",
            margin: "40px auto 0",
            display: "flex",
            alignItems: "flex-start",
            gap: "16px",
          }}
        >
          <span style={{ fontSize: "18px", flexShrink: 0, marginTop: "3px" }}>⚡</span>
          <div>
            <p style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              color: "#FF6B35",
              marginBottom: "8px",
            }}>
              Why MaiGrowth links show up in ChatGPT and Perplexity
            </p>
            <p style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "13px",
              lineHeight: "1.75",
              color: "#3D3D3D",
            }}>
              We only place links on websites that AI tools regularly reference as trusted sources. So when someone asks ChatGPT or Perplexity a question in your niche, your brand is more likely to appear in the answer. Every Guest Post and Link Insertion we build works this way. No extra cost. No separate service. Just better links.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-14"
        >
          <Link href="/packages" data-testid="button-view-all-services">
            <motion.span
              className="btn-secondary"
              whileHover={{ scale: 1.02, transition: { duration: 0.18 } }}
              whileTap={{ scale: 0.97 }}
            >
              See Full Campaign Packages →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
