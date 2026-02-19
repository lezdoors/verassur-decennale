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
    <section id="metiers" className="py-20 sm:py-28" style={{ background: "#111111" }}>
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
            Tous les corps de metier
          </span>
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
            Votre metier, votre couverture
          </h2>
          <p
            className="mx-auto mt-4 max-w-2xl text-base"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Chaque metier du batiment a des risques specifiques. Voici ce que la decennale couvre selon votre activite.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {metiers.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{
                y: -3,
                transition: { duration: 0.2 },
              }}
              className="group flex gap-4 p-5 cursor-default transition-all"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm transition-all"
                style={{ background: "rgba(212, 175, 55, 0.1)" }}
              >
                <m.icon
                  className="h-5 w-5"
                  style={{ color: "#D4AF37" }}
                />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-white">
                    {m.name}
                  </span>
                  <span
                    className="text-[10px] font-medium uppercase tracking-wider px-2 py-0.5"
                    style={{
                      background: m.obligatoire ? "rgba(212, 175, 55, 0.1)" : "rgba(255,255,255,0.06)",
                      color: m.obligatoire ? "#D4AF37" : "rgba(255,255,255,0.4)",
                    }}
                  >
                    {m.obligatoire ? "Obligatoire" : "Conditionnel"}
                  </span>
                </div>
                <p
                  className="text-[11px] font-medium mt-0.5 uppercase tracking-wider"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  {m.type}
                </p>
                <p
                  className="text-xs mt-1.5 leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {m.exemple}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
