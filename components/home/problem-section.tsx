"use client"

import { motion } from "framer-motion"
import { XCircle, CheckCircle2 } from "lucide-react"
import AnimatedSection from "@/components/shared/animated-section"
import { StaggerGroup, StaggerItem } from "@/components/shared/stagger-group"
import CountUp from "./count-up"

const stats = [
  { number: 700, suffix: "M+", label: "Weekly AI Search Users" },
  { number: 357, suffix: "%", label: "AI Referral Traffic Growth in 2024" },
  { number: 20, suffix: "%+", label: "Google Searches Show AI Overviews" },
]

export default function ProblemSection() {
  return (
    <section className="bg-light-bg py-28">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
            WHY TRADITIONAL SEO ISN'T ENOUGH
          </span>
          <h2 className="mt-3 font-heading font-bold text-[clamp(30px,4vw,52px)] leading-tight tracking-tight text-dark-text">
            The Search Landscape Has Changed.
            <br />
            Has Your Strategy?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-[17px] leading-relaxed text-[#3D3D3D]">
            Over 700 million people now get answers directly from AI tools every week. Is your brand showing up in those answers — or invisible?
          </p>
        </AnimatedSection>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StaggerItem
            className="bg-white rounded-2xl p-8 border border-border relative"
            style={{ borderTopWidth: 3, borderTopColor: "#f87171" }}
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-red-50 text-red-500">
                OUTDATED
              </span>
            </div>
            <XCircle size={24} className="text-red-400 mt-2 mb-4" />
            <h3 className="text-xl mb-3 font-heading font-bold text-dark-text">
              Links Built for Google Only
            </h3>
            <p className="text-[15px] leading-relaxed mb-6 text-[#3D3D3D]">
              Traditional agencies build links exclusively to chase Google rankings. But hundreds of millions of people now get answers directly from ChatGPT, Perplexity, and AI Overviews — and brands without AI visibility are completely invisible to them.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Google Only", "Limited Reach", "Old Playbook"].map((tag) => (
                <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-gray-100 text-gray-600">{tag}</span>
              ))}
            </div>
          </StaggerItem>

          <StaggerItem
            className="bg-white rounded-2xl p-8 border border-border relative"
            style={{ borderTopWidth: 3, borderTopColor: "#FF6B35" }}
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-orange-50 text-primary">AI-ERA READY</span>
            </div>
            <CheckCircle2 size={24} className="text-primary mt-2 mb-4" />
            <h3 className="text-xl mb-3 font-heading font-bold text-dark-text">
              Links Built for Google AND AI
            </h3>
            <p className="text-[15px] leading-relaxed mb-6 text-[#3D3D3D]">
              MaiGrowth builds high-authority backlinks that boost your Google rankings AND optimizes your brand's authority so AI engines recognize and cite you as the trusted source in your niche.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Google", "ChatGPT", "Perplexity", "AI Overviews"].map((tag) => (
                <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-primary">{tag}</span>
              ))}
            </div>
          </StaggerItem>
        </StaggerGroup>

        <div className="grid grid-cols-3 gap-8 mt-20 pt-16 border-t border-border">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="font-heading font-extrabold leading-none text-[clamp(32px,5vw,52px)] text-primary">
                <CountUp target={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-sm mt-1 text-gray-text">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
