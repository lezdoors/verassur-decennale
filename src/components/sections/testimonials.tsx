"use client";

import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jean-Michel L.",
    role: "Macon depuis 15 ans",
    city: "Lyon",
    rating: 5,
    text: "Apres plusieurs comparatifs infructueux, je me suis tourne vers Verassur qui a fait le boulot avec rapidite et efficacite. Attestation recue en 2 jours.",
    tag: "Decennale",
  },
  {
    name: "Sophie M.",
    role: "Electricienne auto-entrepreneur",
    city: "Marseille",
    rating: 5,
    text: "Resiliee par mon ancien assureur suite a un sinistre, Verassur a pris le temps d'etudier mon dossier et m'a trouve une solution adaptee en moins de 48h.",
    tag: "Resiliee",
  },
  {
    name: "Antoine R.",
    role: "Entreprise peinture (5 salaries)",
    city: "Paris",
    rating: 5,
    text: "Le courtier m'a rappele en 15 minutes. Il connaissait parfaitement les besoins d'un peintre en batiment. Devis clair, pas de mauvaises surprises. Je recommande.",
    tag: "Entreprise",
  },
  {
    name: "Nadia K.",
    role: "Plombiere-chauffagiste",
    city: "Bordeaux",
    rating: 5,
    text: "Apres 3 refus d'assureurs classiques a cause de mon malus, Verassur m'a trouvee une couverture complete en 48h. Service impeccable et tarif correct.",
    tag: "Malussee",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28" style={{ background: "#0A0A0A" }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span
            className="inline-block px-4 py-1.5 text-xs font-medium uppercase tracking-wider mb-4"
            style={{ color: "#D4AF37" }}
          >
            Avis clients
          </span>
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ils nous font confiance
          </h2>
          <p
            className="mt-4 text-base"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Ce que nos clients disent de nous
          </p>
          {/* Stars */}
          <div className="mt-4 flex items-center justify-center gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                className="h-5 w-5"
                style={{ fill: "#D4AF37", color: "#D4AF37" }}
              />
            ))}
          </div>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative p-7 transition-all"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
              }}
            >
              {/* Tag */}
              <span
                className="absolute right-5 top-5 px-3 py-1 text-[11px] font-medium uppercase tracking-wider"
                style={{
                  background: "rgba(212, 175, 55, 0.1)",
                  color: "#D4AF37",
                }}
              >
                {t.tag}
              </span>

              {/* Quote icon */}
              <Quote
                className="mb-4 h-6 w-6"
                style={{ color: "rgba(255,255,255,0.08)" }}
              />

              {/* Stars */}
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star
                    key={si}
                    className="h-3.5 w-3.5"
                    style={{ fill: "#D4AF37", color: "#D4AF37" }}
                  />
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center text-sm font-medium"
                  style={{ background: "rgba(212, 175, 55, 0.15)", color: "#D4AF37" }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">
                    {t.name}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {t.role} &middot; {t.city}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
