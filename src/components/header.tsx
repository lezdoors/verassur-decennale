"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { Logo } from "@/components/logo";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <Logo variant="light" className="h-7 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Garanties", href: "/#garanties" },
            { label: "Metiers", href: "/#metiers" },
            { label: "FAQ", href: "/#faq" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:0644657005"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
          >
            <Phone className="h-4 w-4" />
            06 44 65 70 05
          </a>
          <Link
            href="/devis"
            className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 transition-all hover:bg-neutral-100"
          >
            Devis gratuit
          </Link>
        </div>
      </div>
    </header>
  );
}
