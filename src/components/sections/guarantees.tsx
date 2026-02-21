"use client";

import { motion } from "motion/react";
import {
  Shield,
  Scale,
  Wrench,
  Building,
  FileCheck,
  AlertTriangle,
  ArrowUpRight,
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
      "Canalisations encastrees, planchers, plafonds, chauffage central, installation electrique encastree, reseaux d'assainissement.",
    badge: "Complet",
  },
  {
    icon: AlertTriangle,
    title: "Sans assurance : les risques",
    description:
      "Sanctions penales (jusqu'a 75 000EUR d'amende), interdiction d'exercer, prise en charge financiere des reparations, perte de credibilite.",
    badge: "Obligatoire",
  },
];

export function Guarantees() {
  return (
    <section className="bg-white py-20 sm:py-28">
      {/* Page header */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-navy-light">
            Loi Spinetta — Articles L.241-1 et suivants
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Ce que couvre la garantie decennale
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-500">
            Tout constructeur est responsable des desordres compromettant la solidite de l&apos;ouvrage ou le rendant impropre a son usage, pendant 10 ans apres reception des travaux.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guarantees.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group rounded-xl border border-neutral-200 bg-neutral-50 p-6 transition-all hover:border-gold/30 hover:shadow-md"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-light text-gold">
                  <g.icon className="h-5 w-5" />
                </div>
                <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-navy-light">
                  {g.badge}
                </span>
              </div>
              <h3 className="text-base font-semibold text-neutral-900">{g.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">{g.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="/devis"
            className="inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-4 text-lg font-medium text-navy transition-colors hover:bg-gold-light"
          >
            Obtenir mon devis gratuit
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
