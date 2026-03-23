"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { fadeUp, stagger } from "@/lib/animations"

export default function CTABanner() {
  return (
    <section className="text-center bg-dark py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={fadeUp}
            className="font-heading font-extrabold text-white text-[clamp(28px,4vw,52px)] leading-tight tracking-tight"
          >
            Ready to Rank on Google AND
            <br />
            Get Cited by AI?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg max-w-xl mx-auto mt-4 text-white/60"
          >
            Book a free 30-minute consultation. We'll show you exactly where your visibility gaps are and how to close them.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <motion.span
                className="btn-primary"
                whileHover={{ scale: 1.03, boxShadow: "0 8px 28px rgba(255,107,53,0.32)" }}
                whileTap={{ scale: 0.97 }}
              >
                Book Free Consultation
              </motion.span>
            </Link>
            <Link href="/services">
              <motion.span
                className="btn-ghost"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                View Services
              </motion.span>
            </Link>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-6 text-xs text-white/35">
            Free - No Obligation - Expert Analysis - 24hr Response
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
