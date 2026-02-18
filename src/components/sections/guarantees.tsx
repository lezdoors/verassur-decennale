"use client";

import { motion } from "motion/react";
import {
  Shield,
  Scale,
  Wrench,
  HeadphonesIcon,
  FileCheck,
  Layers,
} from "lucide-react";

const guarantees = [
  {
    icon: Shield,
    title: "Garantie decennale batiment",
    description:
      "Jusqu'a 15 millions d'euros par sinistre pour les dommages structurels.",
    amount: "15M\u20ac",
  },
  {
    icon: Scale,
    title: "RC Professionnelle integree",
    description:
      "Responsabilite civile jusqu'a 5 millions d'euros incluse sans franchise.",
    amount: "5M\u20ac",
  },
  {
    icon: FileCheck,
    title: "Protection juridique BTP",
    description:
      "Defense et recours specialisee construction, incluse dans votre contrat.",
    amount: "Incluse",
  },
  {
    icon: HeadphonesIcon,
    title: "Assistance 24h/24",
    description:
      "Equipe d'experts en construction disponible en cas de sinistre urgent.",
    amount: "24/7",
  },
  {
    icon: Wrench,
    title: "Garantie biennale",
    description:
      "Equipements et finitions couverts pendant 2 ans apres reception.",
    amount: "2 ans",
  },
  {
    icon: Layers,
    title: "Tous corps d'etat",
    description:
      "Gros oeuvre, second oeuvre et finitions, tous couverts dans un seul contrat.",
    amount: "Complet",
  },
];

export function Guarantees() {
  return (
    <section
      id="garanties"
      className="py-20 sm:py-28"
      style={{ background: "#03260E" }}
    >
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
            style={{ background: "rgba(212, 175, 55, 0.12)", color: "#D4AF37" }}
          >
            Protection maximale
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Protection complete pour le BTP
          </h2>
          <p
            className="mx-auto mt-4 max-w-xl text-base"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Des garanties adaptees a chaque corps de metier du batiment
          </p>
        </motion.div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guarantees.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{
                y: -4,
                transition: { duration: 0.2 },
              }}
              className="group relative rounded-3xl p-6 transition-all cursor-default"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
              }}
            >
              {/* Amount badge */}
              <span
                className="absolute right-5 top-5 text-xs font-bold"
                style={{ color: "#D4AF37" }}
              >
                {g.amount}
              </span>

              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl transition-colors"
                style={{ background: "rgba(212, 175, 55, 0.1)" }}
              >
                <g.icon className="h-5 w-5" style={{ color: "#D4AF37" }} />
              </div>

              <h3 className="text-base font-bold text-white">{g.title}</h3>
              <p
                className="mt-2 text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                {g.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
