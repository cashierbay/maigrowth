import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/guest-posts", label: "Guest Posts" },
  { href: "/link-insertions", label: "Link Insertions" },
  { href: "/packages", label: "Packages" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const linkColor = (active: boolean) =>
    active ? "#FF6B35" : scrolled ? "#3D3D3D" : "rgba(255,255,255,0.6)";

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
            : { backgroundColor: "#12153D" }
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
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
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
              {navLinks.map((link, i) => (
                <motion.div key={link.href} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05, duration: 0.3 }}>
                  <Link href={link.href} data-testid={`mobile-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
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

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 + 0.1, duration: 0.3 }}
                className="mt-8"
              >
                <Link href="/contact" data-testid="mobile-link-cta">
                  <motion.span
                    className="btn-primary w-full justify-center"
                    style={{ display: "block", textAlign: "center" }}
                    whileHover={{ scale: 1.03, boxShadow: "0 8px 28px rgba(255,107,53,0.32)", transition: { duration: 0.18 } }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Get Free Consultation
                  </motion.span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
