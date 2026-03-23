"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, ChevronRight, Link2, Brain, Globe, PenLine } from "lucide-react"

const EASE = [0.22, 1, 0.36, 1] as const

const regularLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
]

const afterServicesLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

const serviceCategories = [
  {
    key: "premium-link-building",
    label: "Premium Link Building",
    icon: Link2,
    description: "High-authority editorial backlinks",
    children: [
      { href: "/guest-posts", label: "Guest Posts", description: "DR 30-60+ editorial placements" },
    ],
  },
  {
    key: "aeo",
    label: "AEO",
    icon: Brain,
    description: "Answer Engine Optimisation",
    children: [],
  },
  {
    key: "geo",
    label: "GEO",
    icon: Globe,
    description: "Generative Engine Optimisation",
    children: [],
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [activeSub, setActiveSub] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
    setActiveSub(null)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  const isServiceActive = pathname === "/services" || pathname === "/guest-posts"

  const linkColor = (active: boolean) =>
    active ? "#FF6B35" : scrolled ? "#3D3D3D" : "rgba(255,255,255,0.8)"

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={
          scrolled
            ? {
                backgroundColor: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(8px)",
                borderBottom: "1px solid #E2E0DC",
                boxShadow: "0 1px 12px rgba(0,0,0,0.06)",
              }
            : { backgroundColor: "transparent" }
        }
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
          {/* LOGO */}
          <Link href="/">
            <span className="text-2xl tracking-tight cursor-pointer font-heading font-extrabold">
              <span style={{ color: scrolled ? "#0F0F0F" : "white" }}>Mai</span>
              <span style={{ color: "#FF6B35" }}>Growth</span>
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
            {regularLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`text-[14px] font-medium cursor-pointer nav-link-underline${pathname === link.href ? " active" : ""}`}
                  style={{
                    color: linkColor(pathname === link.href),
                    fontWeight: pathname === link.href ? 600 : 500,
                  }}
                >
                  {link.label}
                </span>
              </Link>
            ))}

            {/* SERVICES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => { setServicesOpen(false); setActiveSub(null) }}
            >
              <Link href="/services">
                <span
                  className={`text-[14px] font-medium cursor-pointer nav-link-underline flex items-center gap-1${isServiceActive ? " active" : ""}`}
                  style={{
                    color: linkColor(isServiceActive),
                    fontWeight: isServiceActive ? 600 : 500,
                  }}
                >
                  Services
                  <motion.span
                    animate={{ rotate: servicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex"
                  >
                    <ChevronDown size={14} />
                  </motion.span>
                </span>
              </Link>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: EASE }}
                    className="absolute top-full left-0 flex pt-3"
                  >
                    <div className="bg-white border border-[#E2E0DC] rounded-2xl shadow-xl min-w-[240px] p-2">
                      {serviceCategories.map((cat) => {
                        const Icon = cat.icon
                        const hasChildren = cat.children.length > 0
                        return (
                          <div
                            key={cat.key}
                            className="relative"
                            onMouseEnter={() => hasChildren && setActiveSub(cat.key)}
                            onMouseLeave={() => hasChildren && setActiveSub(null)}
                          >
                            <div
                              className="flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer transition-colors"
                              style={{ backgroundColor: activeSub === cat.key ? "#FFF0EB" : "transparent" }}
                            >
                              <div
                                className="flex items-center justify-center flex-shrink-0 rounded-lg w-[34px] h-[34px] transition-colors"
                                style={{ backgroundColor: activeSub === cat.key ? "#FF6B35" : "#F7F6F4" }}
                              >
                                <Icon size={16} style={{ color: activeSub === cat.key ? "#FFFFFF" : "#767676" }} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-heading font-bold text-[13px] leading-tight" style={{ color: activeSub === cat.key ? "#FF6B35" : "#0F0F0F" }}>
                                  {cat.label}
                                </p>
                                <p className="text-[11px] text-[#767676] mt-0.5">{cat.description}</p>
                              </div>
                              {hasChildren && <ChevronRight size={14} style={{ color: activeSub === cat.key ? "#FF6B35" : "#A8A8A8" }} />}
                            </div>

                            {hasChildren && activeSub === cat.key && (
                              <motion.div
                                initial={{ opacity: 0, x: 8 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 6 }}
                                transition={{ duration: 0.16, ease: EASE }}
                                className="absolute top-0 left-full ml-2 min-w-[220px] z-50"
                              >
                                <div className="bg-white border border-[#E2E0DC] rounded-2xl shadow-xl p-2">
                                  <p className="text-[10px] font-semibold text-[#A8A8A8] tracking-wider uppercase px-3 pt-2 pb-1">
                                    {cat.label}
                                  </p>
                                  {cat.children.map((child) => (
                                    <Link key={child.href} href={child.href}>
                                      <div className="flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer hover:bg-[#FFF0EB] transition-colors">
                                        <div className="flex items-center justify-center flex-shrink-0 rounded-lg w-[34px] h-[34px] bg-[#FFF0EB]">
                                          <PenLine size={15} style={{ color: "#FF6B35" }} />
                                        </div>
                                        <div>
                                          <p className="font-heading font-bold text-[13px] text-[#0F0F0F] leading-tight">{child.label}</p>
                                          <p className="text-[11px] text-[#767676] mt-0.5">{child.description}</p>
                                        </div>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {afterServicesLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`text-[14px] font-medium cursor-pointer nav-link-underline${pathname === link.href ? " active" : ""}`}
                  style={{
                    color: linkColor(pathname === link.href),
                    fontWeight: pathname === link.href ? 600 : 500,
                  }}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* CTA BUTTON */}
          <div className="hidden md:flex items-center">
            <Link href="/contact">
              <motion.span
                className="btn-primary text-sm py-2.5 px-6"
                whileHover={{ scale: 1.03, boxShadow: "0 8px 28px rgba(255,107,53,0.32)" }}
                whileTap={{ scale: 0.97 }}
              >
                Get Free Consultation
              </motion.span>
            </Link>
          </div>

          {/* HAMBURGER */}
          <button className="md:hidden p-2 cursor-pointer" onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <Menu size={24} style={{ color: scrolled ? "#0F0F0F" : "white" }} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col bg-white"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#E2E0DC]">
              <span className="text-2xl tracking-tight font-heading font-extrabold">
                <span className="text-[#0F0F0F]">Mai</span>
                <span className="text-primary">Growth</span>
              </span>
              <button onClick={() => setMobileOpen(false)} className="p-2 cursor-pointer">
                <X size={24} className="text-[#0F0F0F]" />
              </button>
            </div>

            <div className="flex flex-col flex-1 px-8 pt-8 gap-1 overflow-y-auto">
              {[...regularLinks, { href: "/services", label: "Services" }, ...afterServicesLinks].map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className="block py-4 cursor-pointer font-heading font-bold text-2xl border-b border-[#E2E0DC]"
                    style={{ color: pathname === link.href ? "#FF6B35" : "#0F0F0F" }}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}

              <div className="mt-8">
                <Link href="/contact">
                  <span className="btn-primary w-full justify-center">Get Free Consultation</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
