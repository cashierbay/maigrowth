import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

const team = [
  {
    initials: "AR",
    name: "Ahmad Raza",
    role: "Founder & CEO",
    bio: "SEO strategist with 8+ years building authority for global brands. Developed MaiGrowth's AEO/GEO methodology from the ground up.",
    tags: ["AEO", "GEO", "Strategy"],
    gradient: "linear-gradient(135deg, #FF6B35 0%, #FFAB35 100%)",
    linkedin: "#",
    twitter: "#",
  },
  {
    initials: "SC",
    name: "Sarah Chen",
    role: "Head of Link Building",
    bio: "Former journalist turned outreach specialist. Has secured editorial placements on Forbes, HubSpot, Moz, and 200+ high-authority publications.",
    tags: ["Outreach", "DR 60+", "Niche Edits"],
    gradient: "linear-gradient(135deg, #3B5BDB 0%, #6A85E0 100%)",
    linkedin: "#",
    twitter: "#",
  },
  {
    initials: "MW",
    name: "Marcus Webb",
    role: "AEO Strategist",
    bio: "Schema markup expert and AI search specialist. Led AEO campaigns that achieved Google AI Overview placement within 30 days.",
    tags: ["Schema", "E-E-A-T", "Snippets"],
    gradient: "linear-gradient(135deg, #C83B00 0%, #FF6B35 100%)",
    linkedin: "#",
    twitter: "#",
  },
  {
    initials: "PN",
    name: "Priya Nair",
    role: "GEO & Content Lead",
    bio: "Brand entity optimization expert. Builds LLM recognition across ChatGPT, Perplexity, Claude, and Gemini for clients worldwide.",
    tags: ["Entity SEO", "ChatGPT", "GEO"],
    gradient: "linear-gradient(135deg, #1A1F5E 0%, #3D45A3 100%)",
    linkedin: "#",
    twitter: "#",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function TeamSection() {
  return (
    <section
      style={{
        background: "#FFFFFF",
        padding: "120px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: EASE }}
          style={{ textAlign: "center", marginBottom: 80 }}
        >
          <span style={{
            fontSize: "10px", fontWeight: 700,
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: "#FF6B35", display: "block", marginBottom: 20,
            fontFamily: "DM Sans, sans-serif",
          }}>
            Who We Are
          </span>
          <h2 style={{
            fontFamily: "Syne, sans-serif", fontWeight: 800,
            fontSize: "clamp(34px, 4.5vw, 58px)",
            lineHeight: 1.04, letterSpacing: "-0.025em",
            color: "#0F0F0F", margin: "0 0 20px",
          }}>
            The specialists behind<br />
            <span style={{ color: "#FF6B35" }}>your results.</span>
          </h2>
          <p style={{
            fontSize: 15, lineHeight: 1.8, maxWidth: 480,
            color: "#767676", fontFamily: "DM Sans, sans-serif",
            margin: "0 auto",
          }}>
            A small, focused team hired for one reason — being exceptional at exactly what drives your growth.
          </p>
        </motion.div>

        {/* Card grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 20,
        }}>
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: EASE }}
              whileHover={{
                y: -8,
                boxShadow: "0 24px 72px rgba(255,107,53,0.12)",
                borderColor: "#FF6B35",
              }}
              style={{
                backgroundColor: "#F7F6F4",
                border: "1px solid #E2E0DC",
                borderRadius: 24,
                padding: 32,
                display: "flex",
                flexDirection: "column",
                gap: 0,
                cursor: "default",
              }}
            >
              {/* Avatar */}
              <motion.div
                style={{
                  width: 68,
                  height: 68,
                  borderRadius: 18,
                  background: member.gradient,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 800,
                  fontSize: 22,
                  color: "#fff",
                  marginBottom: 24,
                  letterSpacing: "-0.02em",
                  flexShrink: 0,
                }}
                whileHover={{ borderRadius: "50%", scale: 1.05 }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                {member.initials}
              </motion.div>

              {/* Role badge */}
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                marginBottom: 10,
              }}>
                <span style={{
                  fontSize: "10px", fontWeight: 700,
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  color: "#FF6B35",
                  fontFamily: "DM Sans, sans-serif",
                }}>
                  {member.role}
                </span>
              </div>

              {/* Name */}
              <div style={{
                fontFamily: "Syne, sans-serif", fontWeight: 800,
                fontSize: 22, color: "#0F0F0F",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                marginBottom: 14,
              }}>
                {member.name}
              </div>

              {/* Divider */}
              <div style={{
                height: 1,
                backgroundColor: "#E2E0DC",
                marginBottom: 16,
              }} />

              {/* Bio */}
              <p style={{
                fontSize: 13, lineHeight: 1.75,
                color: "#5A5A5A",
                fontFamily: "DM Sans, sans-serif",
                margin: "0 0 20px",
                flexGrow: 1,
              }}>
                {member.bio}
              </p>

              {/* Tags */}
              <div style={{
                display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20,
              }}>
                {member.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    style={{
                      fontSize: "10px", fontWeight: 600,
                      color: "#767676",
                      padding: "4px 10px",
                      border: "1px solid #E2E0DC",
                      borderRadius: 6,
                      fontFamily: "DM Sans, sans-serif",
                      letterSpacing: "0.04em",
                    }}
                    whileHover={{ borderColor: "#FF6B35", color: "#FF6B35" }}
                    transition={{ duration: 0.15 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* Social links */}
              <div style={{ display: "flex", gap: 8 }}>
                {[
                  { Icon: Linkedin, href: member.linkedin, label: "LinkedIn" },
                  { Icon: Twitter, href: member.twitter, label: "Twitter" },
                ].map(({ Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    aria-label={label}
                    style={{
                      width: 32, height: 32,
                      borderRadius: 8,
                      border: "1px solid #E2E0DC",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#767676",
                      textDecoration: "none",
                    }}
                    whileHover={{
                      backgroundColor: "#0F0F0F",
                      borderColor: "#0F0F0F",
                      color: "#FFFFFF",
                    }}
                    transition={{ duration: 0.18 }}
                  >
                    <Icon size={13} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{
            marginTop: 64,
            paddingTop: 40,
            borderTop: "1px solid #E2E0DC",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <span style={{
            fontSize: 12, color: "#AAAAAA",
            fontFamily: "DM Sans, sans-serif",
            letterSpacing: "0.04em",
          }}>
            Remote-first · Globally distributed · Hiring selectively
          </span>
          <motion.button
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              fontFamily: "DM Sans, sans-serif", fontWeight: 600,
              fontSize: 13, color: "#0F0F0F",
              padding: "10px 22px",
              border: "1px solid #0F0F0F",
              borderRadius: 999, background: "transparent",
              cursor: "pointer",
            }}
            whileHover={{
              backgroundColor: "#0F0F0F",
              borderColor: "#0F0F0F",
              color: "#FFFFFF",
            }}
            transition={{ duration: 0.2 }}
          >
            View open positions →
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
