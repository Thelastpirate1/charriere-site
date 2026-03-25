"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tighter text-primary font-headline">
              CHARRIERE
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-on-surface-variant hover:text-accent font-medium text-sm transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:0685031144"
              className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              06 85 03 11 44
            </a>
            <Link
              href="/contact"
              className="px-6 py-2.5 btn-primary-gradient text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-all duration-200 active:scale-95"
            >
              Devis gratuit
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-on-surface"
            aria-label="Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Subtle bottom line */}
      <div className="bg-outline-variant/20 h-px" />

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-outline-variant/10">
          <nav className="px-6 py-5 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-base font-medium text-on-surface hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-outline-variant/20 space-y-3">
              <a
                href="tel:0685031144"
                className="flex items-center gap-2 text-primary font-semibold"
              >
                <Phone className="w-4 h-4" />
                06 85 03 11 44
              </a>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block text-center px-6 py-3 btn-primary-gradient text-white font-semibold rounded-lg"
              >
                Devis gratuit
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
