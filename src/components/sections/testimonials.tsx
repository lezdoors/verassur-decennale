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
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span
            className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-4"
            style={{ background: "rgba(20, 77, 44, 0.06)", color: "#144D2C" }}
          >
            Avis clients
          </span>
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: "#03260E" }}
          >
            Ils nous font confiance
          </h2>
          <p
            className="mt-4 text-base"
            style={{ color: "#144D2C", opacity: 0.6 }}
          >
            Ce que nos clients disent de nous
          </p>
          {/* Stars */}
          <div className="mt-4 flex items-center justify-center gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                className="h-5 w-5 fill-amber-400 text-amber-400"
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
              className="group relative rounded-3xl bg-white p-7 transition-shadow hover:shadow-xl"
              style={{ border: "1px solid rgba(20, 77, 44, 0.08)" }}
            >
              {/* Tag */}
              <span
                className="absolute right-5 top-5 rounded-full px-3 py-1 text-[11px] font-bold"
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
                style={{ color: "rgba(20, 77, 44, 0.08)" }}
              />

              {/* Stars */}
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star
                    key={si}
                    className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#144D2C", opacity: 0.7 }}
              >
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ background: "#144D2C" }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <p
                    className="text-sm font-bold"
                    style={{ color: "#03260E" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "#144D2C", opacity: 0.5 }}
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
