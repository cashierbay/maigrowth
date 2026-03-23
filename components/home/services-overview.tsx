"use client"

import { motion } from "framer-motion"
import { Link2, BrainCircuit, Globe2 } from "lucide-react"
import Link from "next/link"
import AnimatedSection from "@/components/shared/animated-section"
import { StaggerGroup, StaggerItem } from "@/components/shared/stagger-group"

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
]

export default function ServicesOverview() {
  return (
    <section className="bg-[#EFEFED] py-28">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
            WHAT WE DO
          </span>
          <h2 className="font-heading font-bold text-[clamp(30px,4vw,52px)] leading-tight tracking-tight text-dark-text">
            Three Services. One Unified Visibility Strategy.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-[17px] leading-relaxed text-[#3D3D3D]">
            While others focus on a single channel, MaiGrowth makes you visible on all three simultaneously.
          </p>
        </AnimatedSection>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <StaggerItem
                key={service.title}
                className="bg-white rounded-2xl p-8 border border-border relative flex flex-col"
                style={service.featured ? { borderColor: "#FF6B35", boxShadow: "0 4px 24px rgba(255,107,53,0.1)" } : {}}
                whileHover={{ y: -7, boxShadow: "0 16px 48px rgba(255,107,53,0.11)", transition: { duration: 0.22 } }}
              >
                {service.badge && (
                  <div className="absolute top-6 right-6">
                    <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-orange-50 text-primary">{service.badge}</span>
                  </div>
                )}
                <Icon size={28} className="text-primary mb-4" />
                <h3 className="text-xl mb-3 font-heading font-bold text-dark-text">{service.title}</h3>
                <p className="text-[15px] leading-relaxed mb-5 flex-1 text-[#3D3D3D]">{service.body}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-gray-100 text-gray-600">{tag}</span>
                  ))}
                </div>
                <Link href="/services" className="text-sm font-semibold text-primary hover:underline">
                  Learn More
                </Link>
              </StaggerItem>
            )
          })}
        </StaggerGroup>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-14"
        >
          <Link href="/services">
            <motion.span
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-primary border-2 border-primary rounded-xl hover:bg-primary hover:text-white transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              View All Services
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
