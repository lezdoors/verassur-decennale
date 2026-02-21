"use client";

import { ArrowUpRight } from "lucide-react";
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
      className="border-y border-white/10 bg-black/30 py-2.5 backdrop-blur-sm [--duration:30s] [--gap:2rem]"
      pauseOnHover
      repeat={4}
    >
      {stats.map((stat) => (
        <div
          className="flex items-center gap-3 whitespace-nowrap"
          key={stat.label}
        >
          <span className="font-mono text-sm font-bold tracking-wide text-white">
            {stat.value}
          </span>
          <span className="font-mono text-sm font-medium uppercase tracking-[0.15em] text-white/50">
            {stat.label}
          </span>
          <span className="text-white/20">|</span>
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
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80)",
        }}
      >
        <div className="absolute inset-0 bg-neutral-950/60" />
      </div>

      {/* Stats marquee */}
      <div className="relative z-10 mb-6 w-full">
        <StatsMarquee />
      </div>

      {/* Hero content */}
      <div className="relative z-10 w-full px-6 pb-12 sm:px-8 sm:pb-20 lg:px-16 lg:pb-28">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end">
          {/* Left: headline + CTA */}
          <div className="w-full space-y-6 sm:w-1/2">
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Votre garantie
              <br />
              decennale,
              <br />
              simplement.
            </h1>
            <a
              href="/devis"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-neutral-900 transition-all hover:bg-neutral-100"
            >
              Obtenir mon devis gratuit
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>

          {/* Right: description */}
          <div className="w-full sm:w-1/2">
            <p className="text-base leading-relaxed text-white/70 sm:text-right md:text-xl">
              Protegez tous vos travaux avec les meilleures garanties.
              Tous profils acceptes, meme resilies ou malusses.
              Un courtier specialise BTP vous rappelle sous 24h.
            </p>
            <div className="mt-4 flex items-center gap-4 sm:justify-end">
              <span className="text-xs text-white/30">
                Courtier agree ORIAS N° 25004749
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
