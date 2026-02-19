"use client";

import { motion } from "motion/react";
import {
  Shield,
  Scale,
  Wrench,
  Building,
  FileCheck,
  AlertTriangle,
} from "lucide-react";

const guarantees = [
  {
    icon: Shield,
    title: "Garantie decennale",
    description:
      "Couvre pendant 10 ans tous les dommages compromettant la solidite de l'ouvrage ou le rendant impropre a sa destination. Obligation legale (loi Spinetta, 1978).",
    badge: "10 ans",
  },
  {
    icon: Scale,
    title: "RC Professionnelle",
    description:
      "Couvre les dommages causes aux tiers pendant l'execution des travaux : degats chez un voisin, blessure sur chantier, erreur de conception.",
    badge: "Incluse",
  },
  {
    icon: Wrench,
    title: "Garantie biennale",
    description:
      "Couvre pendant 2 ans les equipements dissociables : chauffe-eau, radiateurs, volets, pompes a chaleur, portes, gouttieres.",
    badge: "2 ans",
  },
  {
    icon: Building,
    title: "Gros oeuvre et structure",
    description:
      "Fondations, ossature, murs porteurs, charpente, toiture. Tout ce qui touche a la solidite du batiment est couvert.",
    badge: "Structure",
  },
  {
    icon: FileCheck,
    title: "Ouvrages indissociables",
    description:
      "Canalisations encastrees, planchers, plafonds, chauffage central, huisseries, installation electrique encastree, reseaux d'assainissement.",
    badge: "Complet",
  },
  {
    icon: AlertTriangle,
    title: "Sans assurance : les risques",
    description:
      "Sanctions penales, interdiction d'exercer, prise en charge financiere des reparations (dizaines de milliers d'euros), perte de credibilite.",
    badge: "Obligatoire",
  },
];

export function Guarantees() {
  return (
    <section
      id="garanties"
      className="py-20 sm:py-28"
      style={{ background: "#F8FAFC" }}
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
            className="inline-block px-4 py-1.5 text-xs font-medium uppercase tracking-wider mb-4"
            style={{ color: "#D4AF37" }}
          >
            Loi Spinetta — Articles L.241-1 et suivants
          </span>
          <h2
            className="text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: "#111827" }}
          >
            Ce que couvre la garantie decennale
          </h2>
          <p
            className="mx-auto mt-4 max-w-2xl text-base"
            style={{ color: "#6B7280" }}
          >
            Tout constructeur est responsable des desordres compromettant la solidite de l&apos;ouvrage ou le rendant impropre a son usage, pendant 10 ans apres reception des travaux.
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
              className="group relative p-6 transition-all cursor-default"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
                boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
              }}
            >
              <span
                className="absolute right-5 top-5 text-xs font-medium uppercase tracking-wider"
                style={{ color: "#D4AF37" }}
              >
                {g.badge}
              </span>

              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-sm transition-colors"
                style={{ background: "rgba(212, 175, 55, 0.1)" }}
              >
                <g.icon className="h-5 w-5" style={{ color: "#D4AF37" }} />
              </div>

              <h3 className="text-base font-medium" style={{ color: "#111827" }}>{g.title}</h3>
              <p
                className="mt-2 text-sm leading-relaxed"
                style={{ color: "#6B7280" }}
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
