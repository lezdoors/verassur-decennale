"use client";

import { motion } from "motion/react";
import {
  Hammer,
  Zap,
  Droplets,
  PaintBucket,
  Home,
  Wrench,
  Layers,
  TreePine,
  Building2,
  HardHat,
  ArrowUpRight,
} from "lucide-react";

const metiers = [
  {
    icon: Hammer,
    name: "Macon",
    type: "Gros oeuvre",
    obligatoire: true,
    exemple: "Fissures dans les fondations, affaissement de dalle, murs porteurs fissures",
  },
  {
    icon: Zap,
    name: "Electricien",
    type: "Second oeuvre",
    obligatoire: true,
    exemple: "Defaut d'installation encastree, panne de VMC, court-circuit structurel",
  },
  {
    icon: Droplets,
    name: "Plombier / Chauffagiste",
    type: "Second oeuvre",
    obligatoire: true,
    exemple: "Fuite sur canalisation encastree, chaudiere defaillante, degats des eaux",
  },
  {
    icon: PaintBucket,
    name: "Peintre en batiment",
    type: "Finitions",
    obligatoire: false,
    exemple: "Decennale si impermeabilisation exterieure, isolation thermique ou peinture anticorrosion",
  },
  {
    icon: Home,
    name: "Couvreur / Zingueur",
    type: "Gros oeuvre",
    obligatoire: true,
    exemple: "Infiltrations toiture, defaut d'etancheite, charpente mal posee",
  },
  {
    icon: Wrench,
    name: "Menuisier",
    type: "Second oeuvre",
    obligatoire: true,
    exemple: "Huisseries defaillantes, portes et fenetres non etanches",
  },
  {
    icon: Layers,
    name: "Carreleur",
    type: "Finitions",
    obligatoire: true,
    exemple: "Decollement de carrelage rendant le sol impraticable, defaut d'etancheite",
  },
  {
    icon: TreePine,
    name: "Charpentier",
    type: "Gros oeuvre",
    obligatoire: true,
    exemple: "Affaissement de charpente, deformation structurelle, defaut de portance",
  },
  {
    icon: Building2,
    name: "Platrier / Plaquiste",
    type: "Second oeuvre",
    obligatoire: true,
    exemple: "Cloisons instables, defaut d'isolation affectant l'habitabilite",
  },
  {
    icon: HardHat,
    name: "Autre metier BTP",
    type: "Tous corps d'etat",
    obligatoire: true,
    exemple: "Terrassier, serrurier, climaticien, pisciniste... Tous les metiers du batiment",
  },
];

export function Metiers() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-navy-light">
            Tous les corps de metier
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Votre metier, votre couverture
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-500">
            Chaque metier du batiment a des risques specifiques. Voici ce que la decennale couvre selon votre activite.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {metiers.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="group flex gap-4 rounded-xl border border-neutral-200 bg-neutral-50 p-5 transition-all hover:border-gold/30 hover:shadow-md"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-light text-gold">
                <m.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-neutral-900">{m.name}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                      m.obligatoire
                        ? "bg-gold text-navy"
                        : "bg-neutral-200 text-neutral-500"
                    }`}
                  >
                    {m.obligatoire ? "Obligatoire" : "Conditionnel"}
                  </span>
                </div>
                <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-neutral-400">
                  {m.type}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-neutral-500">{m.exemple}</p>
              </div>
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
