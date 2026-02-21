"use client";

import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jean-Michel L.",
    role: "Macon depuis 15 ans",
    city: "Lyon",
    rating: 5,
    text: "Apres plusieurs comparatifs infructueux, je me suis tourne vers AssureNao qui a fait le boulot avec rapidite et efficacite. Attestation recue en 2 jours.",
  },
  {
    name: "Sophie M.",
    role: "Electricienne auto-entrepreneur",
    city: "Marseille",
    rating: 5,
    text: "Resiliee par mon ancien assureur suite a un sinistre, AssureNao a pris le temps d'etudier mon dossier et m'a trouve une solution adaptee en moins de 48h.",
  },
  {
    name: "Antoine R.",
    role: "Entreprise peinture (5 salaries)",
    city: "Paris",
    rating: 5,
    text: "Le courtier m'a rappele en 15 minutes. Il connaissait parfaitement les besoins d'un peintre en batiment. Devis clair, pas de mauvaises surprises. Je recommande.",
  },
  {
    name: "Nadia K.",
    role: "Plombiere-chauffagiste",
    city: "Bordeaux",
    rating: 5,
    text: "Apres 3 refus d'assureurs classiques a cause de mon malus, AssureNao m'a trouvee une couverture complete en 48h. Service impeccable et tarif correct.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-neutral-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-neutral-400">
            Avis clients
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Ils nous font confiance
          </h2>
          <div className="mt-4 flex items-center justify-center gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="h-5 w-5 fill-amber-400 text-amber-400" />
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
              className="rounded-xl border border-neutral-200 bg-white p-7 transition-all hover:shadow-md"
            >
              <Quote className="mb-4 h-6 w-6 text-neutral-200" />

              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-base leading-relaxed text-neutral-600">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-sm font-semibold text-white">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900">{t.name}</p>
                  <p className="text-xs text-neutral-400">
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
