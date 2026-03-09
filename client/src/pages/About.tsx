import { motion } from "framer-motion";
import { Link } from "wouter";
import { fadeUp, stagger } from "@/lib/animations";

const stats = [
  { number: "100+", label: "Clients Served Globally" },
  { number: "50,000+", label: "Links Built" },
  { number: "3", label: "Search Channels Covered" },
  { number: "24hr", label: "Average Response Time" },
];

const values = [
  {
    title: "Transparency",
    body: "Every link, metric, and result is documented and shared. No black boxes, no vague promises.",
  },
  {
    title: "Quality Over Quantity",
    body: "One DR70 editorial link beats 50 directory submissions. We never compromise on quality.",
  },
  {
    title: "Forward Thinking",
    body: "AEO and GEO are not add-ons. They are the new baseline for any serious search strategy.",
  },
  {
    title: "Results First",
    body: "We measure success in rankings, citations, and traffic — not activity reports and slide decks.",
  },
];

export default function About() {
  return (
    <>
      <title>About MaiGrowth — Built for the AI Search Era</title>

      <section
        className="relative flex flex-col items-center justify-center text-center"
        style={{
          backgroundColor: "#12153D",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          padding: "160px 24px 100px",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="text-[11px] font-semibold uppercase tracking-[0.16em] block mb-6"
              style={{ color: "#FF6B35", fontFamily: "DM Sans, sans-serif" }}
            >
              ABOUT MAIGROWTH
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white"
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(36px, 5.5vw, 68px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            We Saw the Shift Coming.
            <br />
            We Built for It.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.6)", fontFamily: "DM Sans, sans-serif" }}
          >
            While the industry kept pushing the same link building playbook, we were building the agency the AI search era actually needed.
          </motion.p>
        </div>
      </section>

      <div style={{ height: 64, background: "linear-gradient(to bottom, #12153D, #F7F6F4)" }} />

      <section style={{ backgroundColor: "#F7F6F4", padding: "112px 0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <motion.span variants={fadeUp} className="section-label">
                OUR STORY
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="mt-3 mb-8"
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(24px, 3vw, 38px)",
                  lineHeight: 1.2,
                  color: "#0F0F0F",
                }}
              >
                Built for the Channel That Matters Now
              </motion.h2>
              <div className="space-y-5">
                {[
                  "MaiGrowth was founded on one clear observation: search has fundamentally changed. Hundreds of millions of people now get answers from ChatGPT, Perplexity, Google AI Overviews, and other AI tools — and brands not optimized for these channels are completely invisible to that audience.",
                  "Traditional link building agencies were built for a version of search that, while still important, is no longer the whole picture. We built MaiGrowth to be the agency that doesn't just react to today's algorithm but builds lasting authority across every surface where customers search.",
                  "Our team combines deep link building expertise — built through years of delivering high-authority placements across competitive niches — with cutting-edge AEO and GEO methodology. The result is a service that builds visibility where it counts most: Google rankings today, AI citations tomorrow.",
                ].map((p, i) => (
                  <motion.p
                    key={i}
                    variants={fadeUp}
                    className="leading-relaxed"
                    style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif", fontSize: 16 }}
                  >
                    {p}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  className="mg-card text-center"
                >
                  <div
                    className="font-extrabold"
                    style={{
                      fontFamily: "Syne, sans-serif",
                      fontSize: "clamp(28px, 4vw, 44px)",
                      color: "#FF6B35",
                      lineHeight: 1.1,
                    }}
                  >
                    {stat.number}
                  </div>
                  <div
                    className="text-sm mt-2"
                    style={{ color: "#767676", fontFamily: "DM Sans, sans-serif" }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#EFEFED", padding: "112px 0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="text-center mb-14"
          >
            <motion.span variants={fadeUp} className="section-label">
              OUR VALUES
            </motion.span>
            <motion.h2
              variants={fadeUp}
              style={{
                fontFamily: "Syne, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(28px, 3.5vw, 46px)",
                lineHeight: 1.1,
                color: "#0F0F0F",
              }}
            >
              What We Stand For
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((v) => (
              <motion.div key={v.title} variants={fadeUp} className="mg-card">
                <h3
                  className="text-xl mb-3"
                  style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, color: "#0F0F0F" }}
                >
                  {v.title}
                </h3>
                <p className="text-[15px] leading-relaxed" style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}>
                  {v.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        className="text-center relative"
        style={{ backgroundColor: "#12153D", padding: "96px 24px" }}
      >
        <div className="max-w-3xl mx-auto relative">
          <span
            className="absolute -top-10 left-1/2 -translate-x-1/2 select-none leading-none"
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 800,
              fontSize: 160,
              color: "rgba(255,107,53,0.08)",
              lineHeight: 1,
              zIndex: 0,
            }}
          >
            "
          </span>
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(20px, 3vw, 34px)",
              lineHeight: 1.4,
              color: "white",
            }}
          >
            "Our mission is to make every business — regardless of size or location — impossible to miss. Not just on Google, but across every AI-powered surface where customers search."
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 flex flex-wrap gap-4 justify-center"
          >
            <Link href="/contact">
              <span className="btn-primary">Book a Consultation →</span>
            </Link>
            <Link href="/services">
              <span className="btn-ghost">View Services</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
