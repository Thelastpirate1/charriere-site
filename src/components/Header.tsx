"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChefHat } from "lucide-react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-[#1B4F72] flex items-center justify-center">
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-lg font-bold text-[#1B4F72] tracking-tight">CHARRIERE</span>
              <span className="hidden sm:block text-xs text-gray-500 -mt-1">Artisan depuis 2006</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-[#1B4F72] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-[#E67E22] text-white text-sm font-semibold rounded-lg hover:bg-[#D35400] transition-colors"
            >
              Être rappelé gratuitement
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-gray-700"
            aria-label="Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <nav className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-base font-medium text-gray-700 hover:text-[#1B4F72]"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block text-center px-5 py-3 bg-[#E67E22] text-white font-semibold rounded-lg"
              >
                Être rappelé gratuitement
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
