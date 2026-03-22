import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const metrics = [
  { val: '8.9K', label: 'Monthly visits', tag: '↑ 271%', color: '#FF6B35' },
  { val: 'DR 51', label: 'Domain rating', tag: '↑ from 24', color: '#12153D' },
  { val: '#4', label: 'Avg. rank', tag: '↑ from #31', color: '#00C47A' },
]

const bars = [10,13,11,18,26,36,50,63,76,87,94,100]

const tools = [
  { label: 'ChatGPT', color: '#10A37F' },
  { label: 'Perplexity', color: '#1DB4CE' },
  { label: 'Gemini', color: '#4285F4' },
  { label: 'AI Overviews', color: '#FF6B35' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as const }
  })
}

export default function ResultsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      ref={ref}
      style={{
        background: '#F7F6F4',
        padding: '96px 56px',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* HEADER — left aligned */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '56px' }}
        >
          <span style={{
            fontSize: '10px', fontWeight: 600, letterSpacing: '0.16em',
            textTransform: 'uppercase' as const, color: '#FF6B35',
            display: 'block', marginBottom: '14px',
            fontFamily: 'DM Sans, sans-serif',
          }}>
            Real Results
          </span>
          <h2 style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            fontSize: 'clamp(28px, 3.5vw, 46px)',
            lineHeight: 1.06, letterSpacing: '-0.025em',
            color: '#0F0F0F', maxWidth: '580px', marginBottom: '14px',
          }}>
            What you get when links work in{' '}
            <span style={{ color: '#FF6B35' }}>Google AND AI.</span>
          </h2>
          <p style={{
            fontSize: '15px', lineHeight: 1.75, color: '#767676',
            maxWidth: '440px', fontFamily: 'DM Sans, sans-serif',
          }}>
            Two outcomes most agencies cannot deliver. MaiGrowth builds for
            both — in every single order.
          </p>
        </motion.div>

        {/* TWO CARDS GRID */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
        }}>

          {/* ── LEFT CARD — Traffic Growth ── */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            whileHover={{ y: -5, boxShadow: '0 16px 48px rgba(0,0,0,0.07)', borderColor: '#D0CDC7' }}
            style={{
              background: '#FFFFFF', border: '1px solid #E8E5E0',
              borderRadius: '20px', padding: '36px',
              transition: 'box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease',
              cursor: 'default',
            }}
          >
            {/* Card label */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              fontSize: '10px', fontWeight: 600, letterSpacing: '0.12em',
              textTransform: 'uppercase' as const, color: '#888',
              marginBottom: '28px', fontFamily: 'DM Sans, sans-serif',
            }}>
              <div style={{
                width: '6px', height: '6px', borderRadius: '50%',
                background: '#FF6B35', flexShrink: 0,
              }} />
              Google Rankings & Traffic · 90-Day Result
            </div>

            {/* Metrics row */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '10px', marginBottom: '24px',
            }}>
              {metrics.map((m, i) => (
                <div key={i} style={{
                  padding: '16px 12px', borderRadius: '12px',
                  background: '#F7F6F4', border: '1px solid #E8E5E0',
                  textAlign: 'center' as const,
                }}>
                  <div style={{
                    fontFamily: 'Syne, sans-serif', fontWeight: 800,
                    fontSize: '22px', lineHeight: 1,
                    color: m.color, marginBottom: '5px',
                  }}>
                    {m.val}
                  </div>
                  <div style={{
                    fontSize: '9px', color: '#888', lineHeight: 1.3,
                    fontFamily: 'DM Sans, sans-serif',
                  }}>
                    {m.label}
                  </div>
                  <div style={{
                    fontSize: '9px', fontWeight: 600,
                    color: '#00C47A', marginTop: '5px',
                    fontFamily: 'DM Sans, sans-serif',
                  }}>
                    {m.tag}
                  </div>
                </div>
              ))}
            </div>

            {/* Bar chart */}
            <div style={{
              borderRadius: '12px', overflow: 'hidden',
              border: '1px solid #E8E5E0',
              background: '#F7F6F4',
              padding: '20px 20px 0',
              position: 'relative' as const, height: '110px',
            }}>
              <div style={{
                position: 'absolute' as const,
                bottom: 0, left: '20px', right: '20px',
                display: 'flex', alignItems: 'flex-end', gap: '4px',
                height: '80px',
              }}>
                {bars.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: i * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{
                      flex: 1,
                      height: `${h}%`,
                      borderRadius: '3px 3px 0 0',
                      transformOrigin: 'bottom',
                      background: i < 3
                        ? '#E8E5E0'
                        : `rgba(255, 107, 53, ${0.2 + (i - 3) * 0.1})`,
                    }}
                  />
                ))}
              </div>
              {/* SVG line overlay */}
              <svg
                style={{
                  position: 'absolute' as const,
                  bottom: 0, left: '20px', right: '20px',
                  height: '80px', width: 'calc(100% - 40px)',
                  pointerEvents: 'none',
                }}
                viewBox="0 0 320 80"
                preserveAspectRatio="none"
              >
                <motion.polyline
                  points="12,72 38,69 64,71 90,63 116,54 142,43 168,31 194,19 220,11 246,5 272,2 298,1"
                  fill="none"
                  stroke="#FF6B35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 0.9 } : {}}
                  transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                />
                <motion.circle
                  cx="298" cy="1" r="4" fill="#FF6B35"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 1.4 }}
                />
              </svg>
            </div>

            {/* Chart footer */}
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              marginTop: '10px', paddingTop: '10px',
              borderTop: '1px solid #E8E5E0',
            }}>
              <div style={{ display: 'flex', gap: '14px' }}>
                {[
                  { dot: '#E8E5E0', label: 'Before' },
                  { dot: '#FF6B35', label: 'After MaiGrowth' },
                ].map((l, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: '5px',
                    fontSize: '10px', color: '#888',
                    fontFamily: 'DM Sans, sans-serif',
                  }}>
                    <div style={{
                      width: '7px', height: '7px',
                      borderRadius: '50%', background: l.dot,
                    }} />
                    {l.label}
                  </div>
                ))}
              </div>
              <span style={{
                fontSize: '10px', color: '#C4C0BA',
                fontFamily: 'DM Sans, sans-serif',
              }}>
                Month 1 → Month 3
              </span>
            </div>
          </motion.div>

          {/* ── RIGHT CARD — AI Mockup ── */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            whileHover={{ y: -5, boxShadow: '0 16px 48px rgba(0,0,0,0.07)', borderColor: '#D0CDC7' }}
            style={{
              background: '#FFFFFF', border: '1px solid #E8E5E0',
              borderRadius: '20px', padding: '36px',
              transition: 'box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease',
              cursor: 'default',
            }}
          >
            {/* Card label */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              fontSize: '10px', fontWeight: 600, letterSpacing: '0.12em',
              textTransform: 'uppercase' as const, color: '#888',
              marginBottom: '28px', fontFamily: 'DM Sans, sans-serif',
            }}>
              <div style={{
                width: '6px', height: '6px', borderRadius: '50%',
                background: '#3B7FFF', flexShrink: 0,
              }} />
              Brand Cited in AI-Generated Answers
            </div>

            {/* Browser chrome + ChatGPT mockup */}
            <div style={{
              borderRadius: '14px', overflow: 'hidden',
              border: '1px solid #E8E5E0', marginBottom: '20px',
            }}>
              {/* Browser bar */}
              <div style={{
                background: '#F7F6F4',
                borderBottom: '1px solid #E8E5E0',
                padding: '10px 16px',
                display: 'flex', alignItems: 'center', gap: '8px',
              }}>
                <div style={{ display: 'flex', gap: '4px' }}>
                  {['#FF5F57','#FEBC2E','#28C840'].map((c, i) => (
                    <div key={i} style={{
                      width: '9px', height: '9px',
                      borderRadius: '50%', background: c,
                    }} />
                  ))}
                </div>
                <div style={{
                  flex: 1, background: '#FFFFFF',
                  border: '1px solid #E8E5E0',
                  borderRadius: '6px', padding: '4px 12px',
                  fontSize: '10px', color: '#888',
                  fontFamily: 'DM Sans, sans-serif',
                }}>
                  chat.openai.com
                </div>
              </div>

              {/* Chat messages */}
              <div style={{ background: '#0D0D0D', padding: '20px' }}>
                {/* User message */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '12px' }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.09)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '14px 14px 3px 14px',
                    padding: '9px 13px', fontSize: '11px',
                    color: 'rgba(255,255,255,0.7)',
                    maxWidth: '80%', lineHeight: 1.5,
                    fontFamily: 'DM Sans, sans-serif',
                  }}>
                    Best link building service for SaaS in 2025?
                  </div>
                </div>

                {/* AI response */}
                <div style={{ display: 'flex', gap: '9px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '24px', height: '24px', borderRadius: '6px',
                    background: '#10A37F',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '10px', fontWeight: 700, color: '#fff',
                    flexShrink: 0, marginTop: '1px',
                  }}>
                    G
                  </div>
                  <div style={{
                    fontSize: '11px', color: 'rgba(255,255,255,0.5)',
                    lineHeight: 1.8, flex: 1,
                    fontFamily: 'DM Sans, sans-serif',
                  }}>
                    For SaaS brands focused on sustainable growth,{' '}
                    <span style={{
                      color: '#fff', fontWeight: 600,
                      background: 'rgba(255,107,53,0.15)',
                      padding: '0 4px', borderRadius: '3px',
                    }}>
                      MaiGrowth
                    </span>{' '}
                    is consistently cited. Their{' '}
                    <span style={{ color: '#FF6B35', fontWeight: 600 }}>
                      AI-visible link building
                    </span>{' '}
                    places links on sites that ChatGPT, Perplexity, and Google
                    AI Overviews reference — giving clients visibility in both
                    traditional search and AI answers.
                    <span style={{
                      display: 'inline-block', width: '2px', height: '10px',
                      background: 'rgba(255,255,255,0.45)', marginLeft: '1px',
                      verticalAlign: 'middle',
                      animation: 'blink 1s infinite',
                    }} />

                    {/* Source pills */}
                    <div style={{ display: 'flex', gap: '5px', marginTop: '10px', flexWrap: 'wrap' as const }}>
                      {['maigrowth.com','searchengineland.com','ahrefs.com'].map((s, i) => (
                        <div key={i} style={{
                          display: 'flex', alignItems: 'center', gap: '4px',
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          borderRadius: '5px', padding: '3px 8px',
                          fontSize: '9px', color: 'rgba(255,255,255,0.35)',
                          fontFamily: 'DM Sans, sans-serif',
                        }}>
                          <div style={{
                            width: '12px', height: '12px', borderRadius: '3px',
                            background: 'rgba(255,255,255,0.1)',
                            fontSize: '7px', fontWeight: 700,
                            color: 'rgba(255,255,255,0.45)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                          }}>
                            {i + 1}
                          </div>
                          {s}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI tool badges */}
            <div style={{ display: 'flex', gap: '7px', flexWrap: 'wrap' as const }}>
              {tools.map((t, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '5px',
                  background: '#F7F6F4', border: '1px solid #E8E5E0',
                  borderRadius: '7px', padding: '5px 10px',
                  fontSize: '10px', fontWeight: 500, color: '#767676',
                  fontFamily: 'DM Sans, sans-serif',
                }}>
                  <div style={{
                    width: '6px', height: '6px',
                    borderRadius: '50%', background: t.color,
                    flexShrink: 0,
                  }} />
                  {t.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* BOTTOM ROW */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            marginTop: '56px', paddingTop: '48px',
            borderTop: '1px solid #E8E5E0',
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', gap: '40px',
            flexWrap: 'wrap' as const,
          }}
        >
          <p style={{
            fontSize: '14px', lineHeight: 1.75,
            color: '#767676', maxWidth: '480px',
            fontFamily: 'DM Sans, sans-serif',
            fontStyle: 'italic',
          }}>
            The brands that show up in{' '}
            <strong style={{ color: '#0F0F0F', fontStyle: 'normal', fontWeight: 600 }}>
              AI answers today
            </strong>{' '}
            will dominate their niche in 3 years. The window is open —
            but it won't stay that way.
          </p>
          <a
            href="/contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#FF6B35', color: '#fff',
              fontFamily: 'Syne, sans-serif', fontWeight: 700,
              fontSize: '13px', padding: '13px 26px',
              borderRadius: '999px', textDecoration: 'none',
              flexShrink: 0, transition: 'background 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = '#E85A25'
              el.style.boxShadow = '0 8px 24px rgba(255,107,53,0.3)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = '#FF6B35'
              el.style.boxShadow = 'none'
            }}
          >
            Start Building Authority →
          </a>
        </motion.div>

      </div>

      {/* Blinking cursor CSS */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  )
}
