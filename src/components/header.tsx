"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Shield className="h-7 w-7 text-primary" />
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-tight tracking-tight text-foreground">
              Verassur
            </span>
            <span className="text-[10px] font-medium leading-none text-muted-foreground">
              Assurance Decennale
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#garanties" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Garanties
          </a>
          <a href="#metiers" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Metiers
          </a>
          <a href="#faq" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            FAQ
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:0644657005"
            className="flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
          >
            <Phone className="h-4 w-4" />
            06 44 65 70 05
          </a>
          <Button asChild size="sm" className="rounded-full bg-emerald-700 px-5 hover:bg-emerald-600">
            <a href="#devis">Devis gratuit</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-foreground md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-white px-4 pb-4 pt-2 md:hidden">
          <nav className="flex flex-col gap-3">
            <a href="#garanties" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-muted-foreground">
              Garanties
            </a>
            <a href="#metiers" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-muted-foreground">
              Metiers
            </a>
            <a href="#faq" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-muted-foreground">
              FAQ
            </a>
            <a href="tel:0644657005" className="flex items-center gap-2 text-sm font-semibold text-primary">
              <Phone className="h-4 w-4" />
              06 44 65 70 05
            </a>
            <Button asChild size="sm" className="w-full rounded-full bg-emerald-700 hover:bg-emerald-600">
              <a href="#devis">Devis gratuit</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
