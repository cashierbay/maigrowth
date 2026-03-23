"use client"

import { motion } from "framer-motion"
import { Link2, BrainCircuit, Globe2, CheckCircle2 } from "lucide-react"
import AnimatedSection from "@/components/shared/animated-section"
import CTABanner from "@/components/home/cta-banner"

const services = [
  {
    icon: Link2,
    title: "Premium Link Building",
    description: "High-authority backlinks from real, traffic-verified websites. White-hat outreach, guest posts, contextual insertions.",
    features: [
      "DR 40-80+ websites only",
      "Real traffic verification",
      "Permanent placements",
      "Natural anchor text distribution",
      "Monthly reporting",
    ],
  },
  {
    icon: BrainCircuit,
    title: "AEO Optimization",
    description: "Get selected as the answer. Optimize your content structure so AI Overviews and Bing Copilot cite you as the source.",
    features: [
      "AI Overview targeting",
      "Featured snippet optimization",
      "Schema markup implementation",
      "Content restructuring",
      "Answer-focused content",
    ],
  },
  {
    icon: Globe2,
    title: "GEO Optimization",
    description: "Build recognition inside AI engines. Make ChatGPT, Perplexity, Claude cite your brand for your niche.",
    features: [
      "ChatGPT visibility",
      "Perplexity citations",
      "Claude & Gemini reach",
      "Brand authority building",
      "AI training optimization",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="bg-dark pt-32 pb-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary"
          >
            OUR SERVICES
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-heading font-extrabold text-white text-[clamp(36px,5vw,64px)] leading-tight tracking-tight"
          >
            Visibility Solutions for the
            <br />
            <span className="text-primary">AI Search Era</span>
          </motion.h1>
        </div>
      </section>

      <div className="h-16 bg-gradient-to-b from-dark to-light-bg" />

      <section className="bg-light-bg py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-12">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <AnimatedSection key={service.title}>
                  <div className="bg-white rounded-2xl p-8 md:p-12 border border-border">
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                      <div>
                        <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center mb-6">
                          <Icon className="text-primary" size={28} />
                        </div>
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-dark-text mb-4">
                          {service.title}
                        </h2>
                        <p className="text-[17px] text-[#3D3D3D] leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-text mb-4">
                          What's Included
                        </h4>
                        <ul className="space-y-3">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-3">
                              <CheckCircle2 className="text-primary flex-shrink-0" size={18} />
                              <span className="text-dark-text">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
