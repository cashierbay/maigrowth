"use client"

import Link from "next/link"
import { Mail, Globe2, Clock, Linkedin, Twitter, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-dark">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="text-2xl tracking-tight font-heading font-extrabold">
              <span className="text-white">Mai</span>
              <span className="text-primary">Growth</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Rank on Google. Get Cited by AI.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/50">
              Premium link building and AEO/GEO optimization for the AI search era. Global service, fully remote.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="text-white/40 hover:text-white transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-widest mb-4 text-white/40">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-sm cursor-pointer text-white/70 hover:text-white transition-colors">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-widest mb-4 text-white/40">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Link Building",
                "AEO Optimization",
                "GEO Optimization",
                "Free Consultation",
              ].map((item) => (
                <li key={item}>
                  <Link href="/services">
                    <span className="text-sm cursor-pointer text-white/70 hover:text-white transition-colors">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-widest mb-4 text-white/40">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <span className="text-sm text-white/70">contact@maigrowth.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe2 size={16} className="text-primary flex-shrink-0" />
                <span className="text-sm text-white/70">Remote - Global - Worldwide</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-primary flex-shrink-0" />
                <span className="text-sm text-white/70">Reply within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs text-white/30">
            2025 MaiGrowth. All Rights Reserved.
          </span>
          <span className="text-xs text-white/30">
            Built for the AI Search Era
          </span>
        </div>
      </div>
    </footer>
  )
}
