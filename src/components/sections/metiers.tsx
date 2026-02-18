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
    <section id="metiers" className="bg-white py-20 sm:py-28">
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
            Tous les corps de metier
          </span>
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: "#03260E" }}
          >
            Votre metier, votre couverture
          </h2>
          <p
            className="mx-auto mt-4 max-w-2xl text-base"
            style={{ color: "#144D2C", opacity: 0.6 }}
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
              className="group flex gap-4 rounded-2xl p-5 cursor-default transition-all"
              style={{
                background: "rgba(20, 77, 44, 0.02)",
                border: "1px solid rgba(20, 77, 44, 0.06)",
              }}
            >
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all"
                style={{ background: "rgba(20, 77, 44, 0.06)" }}
              >
                <m.icon
                  className="h-5 w-5"
                  style={{ color: "#144D2C" }}
                />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold" style={{ color: "#03260E" }}>
                    {m.name}
                  </span>
                  <span
                    className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                    style={{
                      background: m.obligatoire ? "rgba(20, 77, 44, 0.08)" : "rgba(212, 175, 55, 0.12)",
                      color: m.obligatoire ? "#144D2C" : "#8B7320",
                    }}
                  >
                    {m.obligatoire ? "Obligatoire" : "Conditionnel"}
                  </span>
                </div>
                <p
                  className="text-[11px] font-medium mt-0.5"
                  style={{ color: "#144D2C", opacity: 0.4 }}
                >
                  {m.type}
                </p>
                <p
                  className="text-xs mt-1.5 leading-relaxed"
                  style={{ color: "#144D2C", opacity: 0.55 }}
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
