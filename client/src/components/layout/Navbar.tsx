import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Linkedin, Twitter } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
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
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

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
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-18" style={{ height: 72 }}>
          <Link href="/" data-testid="link-logo">
            <span
              className="text-2xl tracking-tight cursor-pointer"
              style={{ fontFamily: "Syne, sans-serif", fontWeight: 800 }}
            >
              <span style={{ color: scrolled ? "#0F0F0F" : "white" }}>Mai</span>
              <span style={{ color: "#FF6B35" }}>Growth</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                <span
                  className="text-[14px] font-medium transition-colors cursor-pointer"
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    color:
                      location === link.href
                        ? "#FF6B35"
                        : scrolled
                        ? "#3D3D3D"
                        : "rgba(255,255,255,0.8)",
                    fontWeight: location === link.href ? 600 : 500,
                  }}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <Link href="/contact" data-testid="link-cta-desktop">
              <span className="btn-primary text-sm" style={{ padding: "10px 24px" }}>
                Get Free Consultation
              </span>
            </Link>
          </div>

          <button
            className="md:hidden p-2 cursor-pointer"
            onClick={() => setMobileOpen(true)}
            data-testid="button-mobile-menu"
            aria-label="Open menu"
          >
            <Menu
              size={24}
              style={{ color: scrolled ? "#0F0F0F" : "white" }}
            />
          </button>
        </div>
      </nav>

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
              <span
                className="text-2xl tracking-tight"
                style={{ fontFamily: "Syne, sans-serif", fontWeight: 800 }}
              >
                <span style={{ color: "#0F0F0F" }}>Mai</span>
                <span style={{ color: "#FF6B35" }}>Growth</span>
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 cursor-pointer"
                data-testid="button-mobile-close"
              >
                <X size={24} style={{ color: "#0F0F0F" }} />
              </button>
            </div>

            <div className="flex flex-col flex-1 px-8 pt-10 gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                >
                  <Link href={link.href}>
                    <span
                      className="block py-4 cursor-pointer transition-colors"
                      style={{
                        fontFamily: "Syne, sans-serif",
                        fontWeight: 700,
                        fontSize: 28,
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
                <a href="#" aria-label="LinkedIn" className="text-mg-muted transition-colors" style={{ color: "#767676" }}>
                  <Linkedin size={20} />
                </a>
                <a href="#" aria-label="Twitter" className="text-mg-muted transition-colors" style={{ color: "#767676" }}>
                  <Twitter size={20} />
                </a>
              </div>
              <Link href="/contact">
                <span className="btn-primary w-full justify-center text-center">
                  Get Free Consultation
                </span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
