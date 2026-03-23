"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import AnimatedSection from "@/components/shared/animated-section"
import CTABanner from "@/components/home/cta-banner"

const posts = [
  {
    slug: "ai-search-revolution",
    title: "The AI Search Revolution: What It Means for Your Brand",
    excerpt: "Over 700 million people now use AI search tools weekly. Here's how to make sure your brand shows up.",
    date: "Jan 15, 2025",
    category: "AI Search",
  },
  {
    slug: "aeo-vs-seo",
    title: "AEO vs SEO: Understanding the Difference",
    excerpt: "Traditional SEO isn't dead, but it's not enough. Learn how Answer Engine Optimization complements your strategy.",
    date: "Jan 10, 2025",
    category: "AEO",
  },
  {
    slug: "link-building-2025",
    title: "Link Building in 2025: Quality Over Quantity",
    excerpt: "Why high-authority backlinks matter more than ever in the age of AI-powered search.",
    date: "Jan 5, 2025",
    category: "Link Building",
  },
]

export default function BlogPage() {
  return (
    <>
      <section className="bg-dark pt-32 pb-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary"
          >
            BLOG
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-heading font-extrabold text-white text-[clamp(36px,5vw,64px)] leading-tight tracking-tight"
          >
            Insights & Strategies for
            <br />
            <span className="text-primary">AI-Era Growth</span>
          </motion.h1>
        </div>
      </section>

      <div className="h-16 bg-gradient-to-b from-dark to-light-bg" />

      <section className="bg-light-bg py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-6">
            {posts.map((post, i) => (
              <AnimatedSection key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  <motion.article
                    className="bg-white rounded-2xl p-8 border border-border cursor-pointer"
                    whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-xs px-3 py-1 rounded-full bg-orange-50 text-primary font-medium">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-text">{post.date}</span>
                    </div>
                    <h2 className="font-heading font-bold text-xl md:text-2xl text-dark-text mb-3">
                      {post.title}
                    </h2>
                    <p className="text-[#3D3D3D] leading-relaxed">{post.excerpt}</p>
                    <span className="inline-block mt-4 text-sm font-semibold text-primary">
                      Read More
                    </span>
                  </motion.article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
