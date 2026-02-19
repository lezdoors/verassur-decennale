"use client";

import { motion } from "motion/react";
import { UserCheck, TrendingDown, Clock4, Headphones } from "lucide-react";

const reasons = [
  {
    icon: UserCheck,
    title: "Tous profils acceptes",
    description:
      "Resilies, malusses, sinistres multiples : nous travaillons avec des assureurs specialises qui acceptent les profils refuses ailleurs.",
    highlight: "Resilies inclus",
    stat: "Sur-mesure",
    statLabel: "selon votre profil",
  },
  {
    icon: TrendingDown,
    title: "Meilleures offres du marche",
    description:
      "Nous comparons les offres de plusieurs assureurs specialises BTP pour vous proposer le tarif le plus competitif.",
    highlight: "Comparatif gratuit",
    stat: "Gratuit",
    statLabel: "devis sans engagement",
  },
  {
    icon: Clock4,
    title: "Reponse rapide",
    description:
      "Un courtier vous rappelle sous 24h avec une proposition adaptee. Attestation delivree des validation du dossier.",
    highlight: "Rappel sous 24h",
    stat: "24h",
    statLabel: "delai de reponse",
  },
  {
    icon: Headphones,
    title: "Accompagnement personnalise",
    description:
      "Un courtier dedie, specialiste du BTP, vous accompagne de A a Z. Conseil humain, disponible par telephone.",
    highlight: "Courtier dedie",
    stat: "1:1",
    statLabel: "suivi personnalise",
  },
];

export function WhyUs() {
  return (
    <section className="py-20 sm:py-28" style={{ background: "#F8FAFC" }}>
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
            Nos engagements
          </span>
          <h2
            className="text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: "#111827" }}
          >
            Pourquoi choisir AssureNao ?
          </h2>
          <p
            className="mx-auto mt-4 max-w-xl text-base"
            style={{ color: "#6B7280" }}
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
              className="group relative overflow-hidden p-7 transition-all"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
                boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
              }}
            >
              {/* Stat in top right */}
              <div className="absolute right-6 top-6 text-right">
                <p
                  className="text-2xl font-medium"
                  style={{ color: "#D4AF37" }}
                >
                  {r.stat}
                </p>
                <p
                  className="text-[10px] font-medium uppercase tracking-wider"
                  style={{ color: "#9CA3AF" }}
                >
                  {r.statLabel}
                </p>
              </div>

              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-sm"
                style={{ background: "rgba(212, 175, 55, 0.1)" }}
              >
                <r.icon className="h-5 w-5" style={{ color: "#D4AF37" }} />
              </div>

              <div
                className="mb-2 inline-block px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider"
                style={{
                  background: "rgba(212, 175, 55, 0.1)",
                  color: "#D4AF37",
                }}
              >
                {r.highlight}
              </div>

              <h3
                className="text-lg font-medium"
                style={{ color: "#111827" }}
              >
                {r.title}
              </h3>
              <p
                className="mt-2 text-sm leading-relaxed"
                style={{ color: "#6B7280" }}
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
