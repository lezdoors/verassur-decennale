"use client";

import { PulseFitHero } from "@/components/ui/pulse-fit-hero";

const btpPrograms = [
  {
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=600&fit=crop",
    category: "GROS OEUVRE",
    title: "Maconnerie & fondations",
  },
  {
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=600&fit=crop",
    category: "COUVERTURE",
    title: "Toiture & charpente",
  },
  {
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=600&fit=crop",
    category: "ELECTRICITE",
    title: "Installations electriques",
  },
  {
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=600&fit=crop",
    category: "PLOMBERIE",
    title: "Plomberie & chauffage",
  },
  {
    image: "https://images.unsplash.com/photo-1541123603104-512919d6a96c?w=400&h=600&fit=crop",
    category: "RENOVATION",
    title: "Renovation complete",
  },
];

export function HeroSection() {
  return (
    <PulseFitHero
      logo="Verassur"
      navigation={[
        { label: "Garanties" },
        { label: "Metiers" },
        { label: "FAQ" },
      ]}
      ctaButton={{
        label: "06 44 65 70 05",
        onClick: () => window.open("tel:0644657005"),
      }}
      title="Votre assurance decennale en 48h"
      subtitle="Artisans et entreprises du BTP, meme resilies ou malusses. Nous comparons +30 assureurs pour le meilleur tarif. Attestation rapide."
      primaryAction={{
        label: "Obtenir mon devis gratuit",
        onClick: () => document.getElementById("devis")?.scrollIntoView({ behavior: "smooth" }),
      }}
      secondaryAction={{
        label: "Appeler un courtier",
        onClick: () => window.open("tel:0644657005"),
      }}
      disclaimer="*Gratuit et sans engagement — Courtier agree ORIAS N° 25004749"
      socialProof={{
        avatars: [
          "https://i.pravatar.cc/150?img=11",
          "https://i.pravatar.cc/150?img=12",
          "https://i.pravatar.cc/150?img=14",
          "https://i.pravatar.cc/150?img=15",
        ],
        text: "5 000+ artisans proteges",
      }}
      programs={btpPrograms}
    />
  );
}
