import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

const team = [
  {
    initials: "AR",
    name: "Ahmad Raza",
    role: "Founder & CEO",
    bio: "SEO strategist with 8+ years building authority for global brands. Developed MaiGrowth's AEO/GEO methodology from the ground up and has led visibility campaigns for 100+ businesses worldwide.",
    tags: ["AEO", "GEO", "Strategy"],
    gradient: "linear-gradient(135deg, #FF6B35, #FFAB35)",
    linkedin: "#",
    twitter: "#",
  },
  {
    initials: "SC",
    name: "Sarah Chen",
    role: "Head of Link Building",
    bio: "Former journalist turned outreach specialist. Has secured editorial placements on Forbes, HubSpot, Moz, and 200+ high-authority publications. Obsessive about link quality over quantity.",
    tags: ["Outreach", "DR 60+", "Niche Edits"],
    gradient: "linear-gradient(135deg, #12153D, #2A3580)",
    linkedin: "#",
    twitter: "#",
  },
  {
    initials: "MW",
    name: "Marcus Webb",
    role: "AEO Strategist",
    bio: "Schema markup expert and AI search specialist. Led AEO campaigns that achieved Google AI Overview placement within 30 days. Deep expertise in structured data, E-E-A-T, and featured snippet strategy.",
    tags: ["Schema", "E-E-A-T", "Snippets"],
    gradient: "linear-gradient(135deg, #C83B00, #FF6B35)",
    linkedin: "#",
    twitter: "#",
  },
  {
    initials: "PN",
    name: "Priya Nair",
    role: "GEO & Content Lead",
    bio: "Brand entity optimization expert. Has built LLM recognition for brands across ChatGPT, Perplexity, Claude, and Gemini. Specializes in topical authority architecture and AI citation strategy.",
    tags: ["Entity SEO", "ChatGPT", "GEO"],
    gradient: "linear-gradient(135deg, #0A0D28, #12153D)",
    linkedin: "#",
    twitter: "#",
  },
];

export default function TeamSection() {
  return (
    <section style={{ background: "#F7F6F4", padding: "96px 56px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* HEADER — two column: headline left, description right */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "72px",
            paddingBottom: "48px",
            borderBottom: "1px solid #E8E5E0",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div>
            <span style={{
              fontSize: "10px", fontWeight: 600,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "#FF6B35", display: "block", marginBottom: "18px",
              fontFamily: "DM Sans, sans-serif",
            }}>
              Who We Are
            </span>
            <h2 style={{
              fontFamily: "Syne, sans-serif", fontWeight: 800,
              fontSize: "clamp(32px, 4vw, 52px)",
              lineHeight: 1.04, letterSpacing: "-0.025em", color: "#0F0F0F",
              margin: 0,
            }}>
              The specialists<br />
              behind your{" "}
              <span style={{ color: "#FF6B35" }}>results.</span>
            </h2>
          </div>
          <div style={{ maxWidth: "280px", textAlign: "right" }}>
            <p style={{
              fontSize: "13px", lineHeight: 1.75,
              color: "#767676", fontFamily: "DM Sans, sans-serif",
              margin: 0,
            }}>
              A small, focused team. Every person was hired because they are
              exceptional at one thing — and that one thing drives your growth.
            </p>
          </div>
        </motion.div>

        {/* MEMBER ROWS */}
        <div>
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ backgroundColor: "#FFFFFF" }}
              style={{
                display: "grid",
                gridTemplateColumns: "64px 220px 1fr 200px",
                alignItems: "center",
                gap: "40px",
                padding: "32px 24px",
                borderBottom: "1px solid #E8E5E0",
                borderRadius: "12px",
                cursor: "default",
                transition: "background-color 0.2s ease",
              }}
              className="team-row"
            >
              {/* Index Number */}
              <motion.span
                style={{
                  fontFamily: "Syne, sans-serif", fontWeight: 800,
                  fontSize: "11px", letterSpacing: "0.1em", color: "#C4C0BA",
                }}
                whileHover={{ color: "#FF6B35" }}
              >
                0{i + 1}
              </motion.span>

              {/* Identity — avatar + name + role */}
              <div>
                <motion.div
                  style={{
                    width: "52px", height: "52px",
                    borderRadius: "10px",
                    background: member.gradient,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "Syne, sans-serif", fontWeight: 800,
                    fontSize: "16px", color: "#fff", marginBottom: "12px",
                  }}
                  whileHover={{ borderRadius: "50%" }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  {member.initials}
                </motion.div>
                <div style={{
                  fontFamily: "Syne, sans-serif", fontWeight: 700,
                  fontSize: "15px", color: "#0F0F0F", letterSpacing: "-0.01em",
                }}>
                  {member.name}
                </div>
                <div style={{
                  fontSize: "11px", color: "#767676", marginTop: "2px",
                  fontWeight: 500, fontFamily: "DM Sans, sans-serif",
                }}>
                  {member.role}
                </div>
              </div>

              {/* Bio */}
              <p style={{
                fontSize: "13.5px", lineHeight: 1.7,
                color: "#3D3D3D", fontFamily: "DM Sans, sans-serif",
                margin: 0,
              }}>
                {member.bio}
              </p>

              {/* Tags + Socials */}
              <div style={{
                display: "flex", flexDirection: "column",
                alignItems: "flex-end", gap: "14px",
              }}>
                <div style={{
                  display: "flex", flexWrap: "wrap",
                  gap: "5px", justifyContent: "flex-end",
                }}>
                  {member.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      style={{
                        fontSize: "10px", fontWeight: 500, color: "#888",
                        padding: "3px 9px", border: "1px solid #E8E5E0",
                        borderRadius: "5px", fontFamily: "DM Sans, sans-serif",
                      }}
                      whileHover={{ borderColor: "#FF6B35", color: "#FF6B35" }}
                      transition={{ duration: 0.15 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  {[
                    { Icon: Linkedin, href: member.linkedin, label: "LinkedIn" },
                    { Icon: Twitter, href: member.twitter, label: "Twitter" },
                  ].map(({ Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      aria-label={label}
                      style={{
                        width: "28px", height: "28px", borderRadius: "7px",
                        border: "1px solid #E8E5E0",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "#888", cursor: "pointer", textDecoration: "none",
                      }}
                      whileHover={{
                        backgroundColor: "#0F0F0F",
                        borderColor: "#0F0F0F",
                        color: "#fff",
                      }}
                      transition={{ duration: 0.18 }}
                    >
                      <Icon size={12} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM BAR */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            marginTop: "48px",
            display: "flex", justifyContent: "space-between", alignItems: "center",
            flexWrap: "wrap", gap: "16px",
          }}
        >
          <span style={{
            fontSize: "12px", color: "#C4C0BA",
            fontFamily: "DM Sans, sans-serif",
          }}>
            Remote-first · Globally distributed · Hiring selectively
          </span>
          <motion.button
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              fontFamily: "Syne, sans-serif", fontWeight: 700,
              fontSize: "12px", color: "#0F0F0F",
              padding: "10px 20px", border: "1px solid #0F0F0F",
              borderRadius: "999px", background: "transparent",
              cursor: "pointer", letterSpacing: "0.01em",
            }}
            whileHover={{ backgroundColor: "#0F0F0F", color: "#fff" }}
            transition={{ duration: 0.2 }}
          >
            View open positions →
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
