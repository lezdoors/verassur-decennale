"use client";

import Link from "next/link";
import { Phone, Shield } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Shield className="h-6 w-6" style={{ color: "#D4AF37" }} />
          <span className="text-xl font-bold" style={{ color: "#111827" }}>
            AssureNao
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/#garanties"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            Garanties
          </Link>
          <Link
            href="/#metiers"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            Metiers
          </Link>
          <Link
            href="/#faq"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            FAQ
          </Link>
        </nav>

        {/* Right: phone + CTA */}
        <div className="flex items-center gap-4">
          <a
            href="tel:0644657005"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            <Phone className="h-4 w-4" style={{ color: "#D4AF37" }} />
            06 44 65 70 05
          </a>
          <Link
            href="/devis"
            className="px-5 py-2.5 text-sm font-semibold transition-all hover:opacity-90"
            style={{ background: "#D4AF37", color: "#111827" }}
          >
            Devis gratuit
          </Link>
        </div>
      </div>
    </header>
  );
}
