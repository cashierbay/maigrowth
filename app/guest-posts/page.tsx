"use client"

import { motion } from "framer-motion"
import { CheckCircle2, PenLine } from "lucide-react"
import AnimatedSection from "@/components/shared/animated-section"
import CTABanner from "@/components/home/cta-banner"

const tiers = [
  {
    name: "Starter",
    dr: "DR 30-40",
    features: ["Niche-relevant sites", "Permanent placement", "1 contextual link", "30-day turnaround"],
  },
  {
    name: "Professional",
    dr: "DR 40-50",
    features: ["Authority sites", "Permanent placement", "2 contextual links", "21-day turnaround", "Traffic verified"],
    featured: true,
  },
  {
    name: "Premium",
    dr: "DR 50-60+",
    features: ["High-authority sites", "Permanent placement", "2 contextual links", "14-day turnaround", "Traffic verified", "Priority support"],
  },
]

export default function GuestPostsPage() {
  return (
    <>
      <section className="bg-dark pt-32 pb-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary"
          >
            GUEST POSTS
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-heading font-extrabold text-white text-[clamp(36px,5vw,64px)] leading-tight tracking-tight"
          >
            Premium Guest Post
            <br />
            <span className="text-primary">Placements</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-white/60 max-w-2xl mx-auto"
          >
            High-quality editorial backlinks from real, traffic-verified websites in your niche.
          </motion.p>
        </div>
      </section>

      <div className="h-16 bg-gradient-to-b from-dark to-light-bg" />

      <section className="bg-light-bg py-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-dark-text">
              Choose Your Package
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`bg-white rounded-2xl p-8 border ${tier.featured ? "border-primary shadow-lg" : "border-border"}`}
              >
                {tier.featured && (
                  <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-orange-50 text-primary mb-4 inline-block">
                    MOST POPULAR
                  </span>
                )}
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-4">
                  <PenLine className="text-primary" size={24} />
                </div>
                <h3 className="font-heading font-bold text-xl text-dark-text">{tier.name}</h3>
                <p className="text-2xl font-heading font-bold text-primary mt-2">{tier.dr}</p>
                <ul className="mt-6 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-[#3D3D3D]">
                      <CheckCircle2 className="text-primary flex-shrink-0" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.a
                  href="/contact"
                  className={`mt-8 block text-center py-3 rounded-xl font-semibold text-sm transition-colors ${
                    tier.featured
                      ? "bg-primary text-white hover:bg-primary-dark"
                      : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
