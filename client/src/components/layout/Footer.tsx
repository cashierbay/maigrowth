import { Link } from "wouter";
import { Mail, Globe2, Clock, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#12153D" }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div
              className="text-2xl tracking-tight"
              style={{ fontFamily: "Syne, sans-serif", fontWeight: 800 }}
            >
              <span style={{ color: "white" }}>Mai</span>
              <span style={{ color: "#FF6B35" }}>Growth</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              Links Built for Google. Found in ChatGPT & Perplexity.
            </p>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              Premium link building and AEO/GEO optimization for the AI search era. Global service, fully remote.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                aria-label="LinkedIn"
                className="transition-colors"
                style={{ color: "rgba(255,255,255,0.4)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="transition-colors"
                style={{ color: "rgba(255,255,255,0.4)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="transition-colors"
                style={{ color: "rgba(255,255,255,0.4)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4
              className="text-[11px] uppercase tracking-widest mb-4"
              style={{ color: "rgba(255,255,255,0.4)", fontFamily: "DM Sans, sans-serif" }}
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/guest-posts", label: "Guest Posts" },
                { href: "/link-insertions", label: "Link Insertions" },
                { href: "/packages", label: "Packages" },
                { href: "/about", label: "About" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
                { href: "/submit-testimonial", label: "Leave a Review" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span
                      className="text-sm cursor-pointer transition-colors"
                      style={{ color: "rgba(255,255,255,0.7)", fontFamily: "DM Sans, sans-serif" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-[11px] uppercase tracking-widest mb-4"
              style={{ color: "rgba(255,255,255,0.4)", fontFamily: "DM Sans, sans-serif" }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Guest Posts", href: "/guest-posts" },
                { label: "Link Insertions", href: "/link-insertions" },
                { label: "Full Campaign Packages", href: "/packages" },
                { label: "Free Consultation", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>
                    <span
                      className="text-sm cursor-pointer transition-colors"
                      style={{ color: "rgba(255,255,255,0.7)", fontFamily: "DM Sans, sans-serif" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-[11px] uppercase tracking-widest mb-4"
              style={{ color: "rgba(255,255,255,0.4)", fontFamily: "DM Sans, sans-serif" }}
            >
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={16} style={{ color: "#FF6B35", flexShrink: 0 }} />
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "DM Sans, sans-serif" }}>contact@maigrowth.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe2 size={16} style={{ color: "#FF6B35", flexShrink: 0 }} />
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "DM Sans, sans-serif" }}>
                  Remote · Global · Worldwide
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} style={{ color: "#FF6B35", flexShrink: 0 }} />
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "DM Sans, sans-serif" }}>
                  Reply within 24 hours
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.1)" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-6">
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "DM Sans, sans-serif" }}>
            © 2025 MaiGrowth. All Rights Reserved.
          </span>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy-policy">
              <span
                className="text-xs cursor-pointer transition-colors"
                style={{ color: "rgba(255,255,255,0.5)", fontFamily: "DM Sans, sans-serif" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
              >
                Privacy Policy
              </span>
            </Link>
            <Link href="/terms-and-conditions">
              <span
                className="text-xs cursor-pointer transition-colors"
                style={{ color: "rgba(255,255,255,0.5)", fontFamily: "DM Sans, sans-serif" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
              >
                Terms & Conditions
              </span>
            </Link>
            <Link href="/refund-policy">
              <span
                className="text-xs cursor-pointer transition-colors"
                style={{ color: "rgba(255,255,255,0.5)", fontFamily: "DM Sans, sans-serif" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
              >
                Refund Policy
              </span>
            </Link>
          </div>
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "DM Sans, sans-serif" }}>
            Built for the AI Search Era
          </span>
        </div>
      </div>
    </footer>
  );
}
