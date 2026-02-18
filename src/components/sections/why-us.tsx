"use client";

import { motion } from "motion/react";
import { UserCheck, TrendingDown, Clock4, Headphones } from "lucide-react";

const reasons = [
  {
    icon: UserCheck,
    title: "Tous profils acceptes",
    description:
      "Resilies, malusses, sinistres multiples : nous trouvons une solution pour chaque artisan, la ou les autres refusent.",
    highlight: "Resilies inclus",
    stat: "100%",
    statLabel: "taux d'acceptation",
  },
  {
    icon: TrendingDown,
    title: "Economies garanties",
    description:
      "En comparant +30 assureurs specialises BTP, nous obtenons en moyenne -35% sur votre prime annuelle.",
    highlight: "-35% en moyenne",
    stat: "-35%",
    statLabel: "vs ancien contrat",
  },
  {
    icon: Clock4,
    title: "Attestation rapide",
    description:
      "Votre attestation decennale est delivree sous 48h. Vous pouvez demarrer vos chantiers sans attendre.",
    highlight: "Sous 48h",
    stat: "48h",
    statLabel: "delai moyen",
  },
  {
    icon: Headphones,
    title: "Accompagnement expert",
    description:
      "Un courtier dedie, specialiste du BTP, vous accompagne de A a Z. Conseil personnalise, pas de robot.",
    highlight: "Courtier dedie",
    stat: "1:1",
    statLabel: "suivi personnalise",
  },
];

export function WhyUs() {
  return (
    <section className="py-20 sm:py-28" style={{ background: "#F7FAF8" }}>
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
            Nos engagements
          </span>
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: "#03260E" }}
          >
            Pourquoi choisir Verassur ?
          </h2>
          <p
            className="mx-auto mt-4 max-w-xl text-base"
            style={{ color: "#144D2C", opacity: 0.6 }}
          >
            Des avantages concrets pour les professionnels du batiment
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden rounded-3xl bg-white p-7 shadow-sm transition-shadow hover:shadow-xl"
              style={{ border: "1px solid rgba(20, 77, 44, 0.06)" }}
            >
              {/* Stat in top right */}
              <div className="absolute right-6 top-6 text-right">
                <p
                  className="text-2xl font-black"
                  style={{ color: "#D4AF37" }}
                >
                  {r.stat}
                </p>
                <p
                  className="text-[10px] font-medium"
                  style={{ color: "#144D2C", opacity: 0.4 }}
                >
                  {r.statLabel}
                </p>
              </div>

              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{ background: "rgba(20, 77, 44, 0.06)" }}
              >
                <r.icon className="h-5 w-5" style={{ color: "#144D2C" }} />
              </div>

              <div
                className="mb-2 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold"
                style={{
                  background: "rgba(212, 175, 55, 0.1)",
                  color: "#D4AF37",
                }}
              >
                {r.highlight}
              </div>

              <h3
                className="text-lg font-bold"
                style={{ color: "#03260E" }}
              >
                {r.title}
              </h3>
              <p
                className="mt-2 text-sm leading-relaxed"
                style={{ color: "#144D2C", opacity: 0.6 }}
              >
                {r.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
