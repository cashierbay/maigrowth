"use client"

import { motion } from "framer-motion"
import { Users, Target, Award, Globe2 } from "lucide-react"
import AnimatedSection from "@/components/shared/animated-section"
import CTABanner from "@/components/home/cta-banner"

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We measure success by your rankings and AI visibility, not vanity metrics.",
  },
  {
    icon: Award,
    title: "White-Hat Only",
    description: "Every link we build follows Google's guidelines. No shortcuts, no risks.",
  },
  {
    icon: Users,
    title: "Partnership Approach",
    description: "We work as an extension of your team, not just another vendor.",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    description: "Remote-first team serving clients worldwide, 24/7 support.",
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="bg-dark pt-32 pb-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary"
          >
            ABOUT US
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-heading font-extrabold text-white text-[clamp(36px,5vw,64px)] leading-tight tracking-tight"
          >
            The Team Behind
            <br />
            <span className="text-primary">MaiGrowth</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-white/60 max-w-2xl mx-auto"
          >
            We're SEO veterans who saw the AI revolution coming. Now we help forward-thinking brands get ahead of the curve.
          </motion.p>
        </div>
      </section>

      <div className="h-16 bg-gradient-to-b from-dark to-light-bg" />

      <section className="bg-light-bg py-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-heading font-bold text-[clamp(28px,4vw,44px)] leading-tight text-dark-text">
              Our Values
            </h2>
            <p className="mt-4 text-[17px] text-[#3D3D3D] max-w-2xl mx-auto">
              What drives us every day
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-white rounded-2xl p-6 border border-border text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-dark-text mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-text">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
