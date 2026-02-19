"use client";

import { ArrowRight, Phone, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";

const stats = [
  { label: "GARANTIE LEGALE", value: "10 ans" },
  { label: "DEVIS GRATUIT", value: "2 min" },
  { label: "RAPPEL PAR UN COURTIER", value: "24h" },
  { label: "PROFILS RESILIES", value: "Acceptes" },
];

function StatsMarquee() {
  return (
    <Marquee
      className="border-white/10 border-y bg-black/30 py-2.5 backdrop-blur-sm [--duration:30s] [--gap:2rem]"
      pauseOnHover
      repeat={4}
    >
      {stats.map((stat) => (
        <div
          className="flex items-center gap-3 whitespace-nowrap"
          key={stat.label}
        >
          <span
            className="font-bold font-mono text-sm tracking-wide"
            style={{ color: "#D4AF37" }}
          >
            {stat.value}
          </span>
          <span className="font-medium font-mono text-sm text-white/70 uppercase tracking-[0.15em]">
            {stat.label}
          </span>
          <span className="text-white/30">|</span>
        </div>
      ))}
    </Marquee>
  );
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-start justify-end">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80)",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Header bar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-8 lg:px-16 py-4 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6" style={{ color: "#D4AF37" }} />
          <span className="text-xl font-bold text-white">
            Verassur
          </span>
        </div>
        <nav className="hidden lg:flex items-center gap-8">
          {["Garanties", "Metiers", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="tel:0644657005"
            className="hidden sm:flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            <Phone className="h-3.5 w-3.5" style={{ color: "#D4AF37" }} />
            06 44 65 70 05
          </a>
          <a
            href="/devis"
            className="rounded-none px-5 py-2.5 text-sm font-semibold transition-all hover:scale-105"
            style={{ background: "#D4AF37", color: "#03260E" }}
          >
            Devis gratuit
          </a>
        </div>
      </div>

      {/* Stats marquee */}
      <div className="relative z-10 w-full mb-6">
        <StatsMarquee />
      </div>

      {/* Hero content */}
      <div className="relative z-10 w-full px-6 pb-12 sm:px-8 sm:pb-20 lg:px-16 lg:pb-28">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end">
          {/* Left: headline + CTA */}
          <div className="w-full space-y-6 sm:w-1/2">
            <h1 className="font-medium text-4xl text-white leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Votre{" "}
              <span style={{ color: "#D4AF37" }}>garantie</span>
              <br />
              <span style={{ color: "#D4AF37" }}>decennale</span>,
              <br />
              <span className="text-white">simplement</span>
            </h1>
            <Button
              asChild
              className="rounded-none py-0 pr-0 font-semibold text-lg h-auto"
              style={{ background: "#D4AF37", color: "#03260E" }}
            >
              <a href="/devis">
                Obtenir mon devis gratuit
                <span className="border-l border-black/20 p-3">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </a>
            </Button>
          </div>

          {/* Right: description */}
          <div className="w-full sm:w-1/2">
            <p
              className="text-base sm:text-right md:text-xl leading-relaxed"
              style={{ color: "#D4AF37" }}
            >
              Protegez tous vos travaux avec les meilleures garanties.
              Tous profils acceptes, meme resilies ou malusses.
              Un courtier specialise BTP vous rappelle sous 24h.
            </p>
            <div className="mt-4 flex items-center gap-4 sm:justify-end">
              <span className="text-xs text-white/40">
                Courtier agree ORIAS N° 25004749
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
