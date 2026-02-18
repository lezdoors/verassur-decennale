"use client";

import { ArcGalleryHero } from "@/components/ui/arc-gallery-hero";
import { Shield, ArrowRight, Phone, CheckCircle2 } from "lucide-react";

const btpImages = [
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1541123603104-512919d6a96c?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?w=400&h=400&fit=crop",
];

export function HeroSection() {
  return (
    <ArcGalleryHero
      images={btpImages}
      startAngle={10}
      endAngle={170}
      radiusLg={580}
      radiusMd={420}
      radiusSm={300}
      cardSizeLg={120}
      cardSizeMd={95}
      cardSizeSm={70}
    >
      {/* Header bar - positioned absolutely at top */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16 py-6 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6" style={{ color: "#D4AF37" }} />
          <span className="text-xl font-bold" style={{ color: "#144D2C" }}>
            Verassur
          </span>
        </div>
        <nav className="hidden lg:flex items-center gap-8">
          {["Garanties", "Metiers", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: "#014421" }}
            >
              {item}
            </a>
          ))}
        </nav>
        <a
          href="tel:0644657005"
          className="hidden sm:flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition-all hover:scale-105"
          style={{ background: "#144D2C" }}
        >
          <Phone className="h-3.5 w-3.5" />
          06 44 65 70 05
        </a>
      </div>

      {/* Hero content */}
      <div
        className="text-center max-w-3xl px-6 opacity-0 animate-fade-in"
        style={{ animationDelay: "800ms", animationFillMode: "forwards" }}
      >
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold"
          style={{ background: "rgba(20, 77, 44, 0.08)", color: "#144D2C" }}
        >
          <Shield className="h-3.5 w-3.5" />
          Tous profils acceptes &middot; Meme resilies et malusses
        </div>

        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
          style={{ color: "#03260E", letterSpacing: "-0.02em" }}
        >
          Votre garantie decennale, simplement
        </h1>

        <p
          className="mt-5 text-lg leading-relaxed mx-auto max-w-xl"
          style={{ color: "#144D2C" }}
        >
          Protegez tous vos travaux avec les meilleures garanties.
          Devis gratuit en 2 minutes, un courtier vous rappelle sous 24h.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/devis"
            className="flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition-all hover:scale-105"
            style={{
              background: "#D4AF37",
              color: "#03260E",
              boxShadow: "0 4px 20px rgba(212, 175, 55, 0.35)",
            }}
          >
            Obtenir mon devis gratuit
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="tel:0644657005"
            className="flex items-center gap-2 rounded-full px-8 py-4 text-base font-medium transition-all hover:scale-105"
            style={{ border: "2px solid #144D2C", color: "#144D2C" }}
          >
            <Phone className="h-4 w-4" style={{ color: "#D4AF37" }} />
            Appeler un courtier
          </a>
        </div>

        {/* Disclaimer */}
        <p
          className="mt-5 text-sm italic"
          style={{ color: "#144D2C", opacity: 0.6 }}
        >
          *Gratuit et sans engagement — Courtier agree ORIAS N° 25004749
        </p>

        {/* Trust indicators */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm"
          style={{ color: "#144D2C", opacity: 0.7 }}
        >
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4" style={{ color: "#144D2C" }} />
            Attestation sous 48h
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4" style={{ color: "#144D2C" }} />
            Resilies acceptes
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4" style={{ color: "#144D2C" }} />
            Gratuit et sans engagement
          </span>
        </div>
      </div>
    </ArcGalleryHero>
  );
}
