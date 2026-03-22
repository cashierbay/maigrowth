import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Linkedin, Twitter, ChevronDown, ChevronRight, Link2, Brain, Globe, PenLine } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const regularLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

const afterServicesLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const serviceCategories = [
  {
    key: "premium-link-building",
    label: "Premium Link Building",
    icon: Link2,
    description: "High-authority editorial backlinks",
    children: [
      { href: "/guest-posts", label: "Guest Posts", description: "DR 30–60+ editorial placements" },
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
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobilePremiumOpen, setMobilePremiumOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeSub, setActiveSub] = useState<string | null>(null);
  const [location] = useLocation();

  const servicesCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const subCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setActiveSub(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  function openServices() {
    if (servicesCloseTimer.current) clearTimeout(servicesCloseTimer.current);
    setServicesOpen(true);
  }

  function closeServices() {
    servicesCloseTimer.current = setTimeout(() => {
      setServicesOpen(false);
      setActiveSub(null);
    }, 120);
  }

  function openSub(key: string) {
    if (subCloseTimer.current) clearTimeout(subCloseTimer.current);
    setActiveSub(key);
  }

  function closeSub() {
    subCloseTimer.current = setTimeout(() => {
      setActiveSub(null);
    }, 100);
  }

  const isServiceActive =
    location === "/services" || location === "/guest-posts";

  const linkColor = (active: boolean) =>
    active ? "#FF6B35" : scrolled ? "#3D3D3D" : "rgba(255,255,255,0.8)";

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
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between" style={{ height: 72 }}>
          {/* LOGO */}
          <Link href="/" data-testid="link-logo">
            <span className="text-2xl tracking-tight cursor-pointer" style={{ fontFamily: "Syne, sans-serif", fontWeight: 800 }}>
              <span style={{ color: scrolled ? "#0F0F0F" : "white" }}>Mai</span>
              <span style={{ color: "#FF6B35" }}>Growth</span>
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
            {/* Regular left links */}
            {regularLinks.map((link) => (
              <Link key={link.href} href={link.href} data-testid={`link-nav-${link.label.toLowerCase()}`}>
                <span
                  className={`text-[14px] font-medium cursor-pointer nav-link-underline${location === link.href ? " active" : ""}`}
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    color: linkColor(location === link.href),
                    fontWeight: location === link.href ? 600 : 500,
                  }}
                >
                  {link.label}
                </span>
              </Link>
            ))}

            {/* SERVICES DROPDOWN TRIGGER */}
            <div
              className="relative"
              onMouseEnter={openServices}
              onMouseLeave={closeServices}
              data-testid="nav-services-trigger"
            >
              <Link href="/services">
                <span
                  className={`text-[14px] font-medium cursor-pointer nav-link-underline flex items-center gap-1${isServiceActive ? " active" : ""}`}
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    color: linkColor(isServiceActive),
                    fontWeight: isServiceActive ? 600 : 500,
                    userSelect: "none",
                  }}
                >
                  Services
                  <motion.span
                    animate={{ rotate: servicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: "inline-flex" }}
                  >
                    <ChevronDown size={14} />
                  </motion.span>
                </span>
              </Link>

              {/* LEVEL 1 DROPDOWN */}
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: EASE }}
                    className="absolute top-full left-0 flex"
                    style={{ paddingTop: 12 }}
                    data-testid="dropdown-services"
                  >
                    <div
                      style={{
                        backgroundColor: "#FFFFFF",
                        border: "1px solid #E2E0DC",
                        borderRadius: 16,
                        boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
                        minWidth: 240,
                        padding: "8px",
                      }}
                    >
                      {serviceCategories.map((cat) => {
                        const Icon = cat.icon;
                        const hasChildren = cat.children.length > 0;
                        return (
                          <div
                            key={cat.key}
                            className="relative"
                            onMouseEnter={() => hasChildren ? openSub(cat.key) : closeSub()}
                            onMouseLeave={() => hasChildren ? closeSub() : undefined}
                            data-testid={`dropdown-item-${cat.key}`}
                          >
                            <div
                              className="flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer transition-colors"
                              style={{
                                backgroundColor: activeSub === cat.key ? "#FFF0EB" : "transparent",
                              }}
                            >
                              <div
                                className="flex items-center justify-center flex-shrink-0 rounded-lg"
                                style={{
                                  width: 34,
                                  height: 34,
                                  backgroundColor: activeSub === cat.key ? "#FF6B35" : "#F7F6F4",
                                  transition: "background-color 0.15s ease",
                                }}
                              >
                                <Icon
                                  size={16}
                                  style={{ color: activeSub === cat.key ? "#FFFFFF" : "#767676" }}
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p
                                  style={{
                                    fontFamily: "Syne, sans-serif",
                                    fontWeight: 700,
                                    fontSize: 13,
                                    color: activeSub === cat.key ? "#FF6B35" : "#0F0F0F",
                                    lineHeight: 1.2,
                                  }}
                                >
                                  {cat.label}
                                </p>
                                <p
                                  style={{
                                    fontFamily: "DM Sans, sans-serif",
                                    fontSize: 11,
                                    color: "#767676",
                                    marginTop: 2,
                                  }}
                                >
                                  {cat.description}
                                </p>
                              </div>
                              {hasChildren && (
                                <ChevronRight
                                  size={14}
                                  style={{ color: activeSub === cat.key ? "#FF6B35" : "#A8A8A8", flexShrink: 0 }}
                                />
                              )}
                            </div>

                            {/* LEVEL 2 NESTED FLYOUT */}
                            {hasChildren && (
                              <AnimatePresence>
                                {activeSub === cat.key && (
                                  <motion.div
                                    initial={{ opacity: 0, x: 8, scale: 0.97 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: 6, scale: 0.97 }}
                                    transition={{ duration: 0.16, ease: EASE }}
                                    className="absolute top-0"
                                    style={{ left: "calc(100% + 8px)", minWidth: 220, zIndex: 100 }}
                                    onMouseEnter={() => { if (subCloseTimer.current) clearTimeout(subCloseTimer.current); }}
                                    onMouseLeave={closeSub}
                                    data-testid={`flyout-${cat.key}`}
                                  >
                                    <div
                                      style={{
                                        backgroundColor: "#FFFFFF",
                                        border: "1px solid #E2E0DC",
                                        borderRadius: 16,
                                        boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
                                        padding: "8px",
                                      }}
                                    >
                                      <p
                                        style={{
                                          fontFamily: "DM Sans, sans-serif",
                                          fontSize: 10,
                                          fontWeight: 600,
                                          color: "#A8A8A8",
                                          letterSpacing: "0.1em",
                                          textTransform: "uppercase",
                                          padding: "8px 12px 4px",
                                        }}
                                      >
                                        {cat.label}
                                      </p>
                                      {cat.children.map((child) => (
                                        <Link key={child.href} href={child.href} data-testid={`flyout-link-${child.href.replace("/", "")}`}>
                                          <div
                                            className="flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer group"
                                            style={{ transition: "background-color 0.15s ease" }}
                                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FFF0EB")}
                                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                                          >
                                            <div
                                              className="flex items-center justify-center flex-shrink-0 rounded-lg"
                                              style={{ width: 34, height: 34, backgroundColor: "#FFF0EB" }}
                                            >
                                              <PenLine size={15} style={{ color: "#FF6B35" }} />
                                            </div>
                                            <div>
                                              <p
                                                style={{
                                                  fontFamily: "Syne, sans-serif",
                                                  fontWeight: 700,
                                                  fontSize: 13,
                                                  color: "#0F0F0F",
                                                  lineHeight: 1.2,
                                                }}
                                              >
                                                {child.label}
                                              </p>
                                              <p
                                                style={{
                                                  fontFamily: "DM Sans, sans-serif",
                                                  fontSize: 11,
                                                  color: "#767676",
                                                  marginTop: 2,
                                                }}
                                              >
                                                {child.description}
                                              </p>
                                            </div>
                                          </div>
                                        </Link>
                                      ))}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Regular right links */}
            {afterServicesLinks.map((link) => (
              <Link key={link.href} href={link.href} data-testid={`link-nav-${link.label.toLowerCase()}`}>
                <span
                  className={`text-[14px] font-medium cursor-pointer nav-link-underline${location === link.href ? " active" : ""}`}
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    color: linkColor(location === link.href),
                    fontWeight: location === link.href ? 600 : 500,
                  }}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* CTA BUTTON */}
          <div className="hidden md:flex items-center">
            <Link href="/contact" data-testid="link-cta-desktop">
              <motion.span
                className="btn-primary text-sm"
                style={{ padding: "10px 24px" }}
                whileHover={{ scale: 1.03, boxShadow: "0 8px 28px rgba(255,107,53,0.32)", transition: { duration: 0.18 } }}
                whileTap={{ scale: 0.97 }}
              >
                Get Free Consultation
              </motion.span>
            </Link>
          </div>

          {/* HAMBURGER */}
          <button
            className="md:hidden p-2 cursor-pointer"
            onClick={() => setMobileOpen(true)}
            data-testid="button-mobile-menu"
            aria-label="Open menu"
          >
            <Menu size={24} style={{ color: scrolled ? "#0F0F0F" : "white" }} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col"
            style={{ backgroundColor: "#FFFFFF" }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between px-6 py-5 border-b" style={{ borderColor: "#E2E0DC" }}>
              <span className="text-2xl tracking-tight" style={{ fontFamily: "Syne, sans-serif", fontWeight: 800 }}>
                <span style={{ color: "#0F0F0F" }}>Mai</span>
                <span style={{ color: "#FF6B35" }}>Growth</span>
              </span>
              <button onClick={() => setMobileOpen(false)} className="p-2 cursor-pointer" data-testid="button-mobile-close">
                <X size={24} style={{ color: "#0F0F0F" }} />
              </button>
            </div>

            <div className="flex flex-col flex-1 px-8 pt-8 gap-1 overflow-y-auto">
              {/* Home */}
              {[{ href: "/", label: "Home" }, { href: "/about", label: "About" }].map((link, i) => (
                <motion.div key={link.href} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06, duration: 0.3 }}>
                  <Link href={link.href}>
                    <span
                      className="block py-4 cursor-pointer"
                      style={{
                        fontFamily: "Syne, sans-serif",
                        fontWeight: 700,
                        fontSize: 26,
                        color: location === link.href ? "#FF6B35" : "#0F0F0F",
                        borderBottom: "1px solid #E2E0DC",
                      }}
                    >
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}

              {/* Services accordion */}
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.12, duration: 0.3 }}>
                <button
                  className="flex items-center justify-between w-full py-4 cursor-pointer"
                  style={{ borderBottom: "1px solid #E2E0DC" }}
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  data-testid="button-mobile-services"
                >
                  <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 26, color: isServiceActive ? "#FF6B35" : "#0F0F0F" }}>
                    Services
                  </span>
                  <motion.span animate={{ rotate: mobileServicesOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown size={20} style={{ color: "#767676" }} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="pl-4 pb-2 space-y-1 pt-2">
                        {/* Premium Link Building sub-accordion */}
                        <div>
                          <button
                            className="flex items-center justify-between w-full py-2.5 px-3 rounded-xl cursor-pointer"
                            style={{ backgroundColor: mobilePremiumOpen ? "#FFF0EB" : "transparent" }}
                            onClick={() => setMobilePremiumOpen(!mobilePremiumOpen)}
                            data-testid="button-mobile-premium"
                          >
                            <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 15, color: mobilePremiumOpen ? "#FF6B35" : "#0F0F0F" }}>
                              Premium Link Building
                            </span>
                            <motion.span animate={{ rotate: mobilePremiumOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                              <ChevronDown size={14} style={{ color: "#767676" }} />
                            </motion.span>
                          </button>
                          <AnimatePresence initial={false}>
                            {mobilePremiumOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.22 }}
                                style={{ overflow: "hidden" }}
                              >
                                <div className="pl-4 py-2">
                                  <Link href="/guest-posts" data-testid="mobile-link-guest-posts">
                                    <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl" style={{ backgroundColor: "#FFF0EB" }}>
                                      <PenLine size={14} style={{ color: "#FF6B35" }} />
                                      <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 14, color: "#FF6B35" }}>
                                        Guest Posts
                                      </span>
                                    </div>
                                  </Link>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* AEO */}
                        <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer" style={{ opacity: 0.5 }}>
                          <Brain size={14} style={{ color: "#767676" }} />
                          <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 15, color: "#3D3D3D" }}>
                            AEO
                          </span>
                          <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: 10, color: "#A8A8A8", marginLeft: "auto" }}>Coming soon</span>
                        </div>

                        {/* GEO */}
                        <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer" style={{ opacity: 0.5 }}>
                          <Globe size={14} style={{ color: "#767676" }} />
                          <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 15, color: "#3D3D3D" }}>
                            GEO
                          </span>
                          <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: 10, color: "#A8A8A8", marginLeft: "auto" }}>Coming soon</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Blog & Contact */}
              {[{ href: "/blog", label: "Blog" }, { href: "/contact", label: "Contact" }].map((link, i) => (
                <motion.div key={link.href} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: (i + 3) * 0.06, duration: 0.3 }}>
                  <Link href={link.href}>
                    <span
                      className="block py-4 cursor-pointer"
                      style={{
                        fontFamily: "Syne, sans-serif",
                        fontWeight: 700,
                        fontSize: 26,
                        color: location === link.href ? "#FF6B35" : "#0F0F0F",
                        borderBottom: "1px solid #E2E0DC",
                      }}
                    >
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="px-8 pb-10 flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <a href="#" aria-label="LinkedIn" style={{ color: "#767676" }}><Linkedin size={20} /></a>
                <a href="#" aria-label="Twitter" style={{ color: "#767676" }}><Twitter size={20} /></a>
              </div>
              <Link href="/contact">
                <motion.span
                  className="btn-primary w-full justify-center text-center"
                  whileHover={{ scale: 1.03, boxShadow: "0 8px 28px rgba(255,107,53,0.32)", transition: { duration: 0.18 } }}
                  whileTap={{ scale: 0.97 }}
                >
                  Get Free Consultation
                </motion.span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
