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
  { icon: Hammer, name: "Macon", type: "Gros oeuvre" },
  { icon: Zap, name: "Electricien", type: "Second oeuvre" },
  { icon: Droplets, name: "Plombier", type: "Second oeuvre" },
  { icon: PaintBucket, name: "Peintre", type: "Finitions" },
  { icon: Home, name: "Couvreur", type: "Gros oeuvre" },
  { icon: Wrench, name: "Menuisier", type: "Second oeuvre" },
  { icon: Layers, name: "Carreleur", type: "Finitions" },
  { icon: TreePine, name: "Charpentier", type: "Gros oeuvre" },
  { icon: Building2, name: "Terrassier", type: "Gros oeuvre" },
  { icon: HardHat, name: "Autre metier", type: "Tous BTP" },
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
            Votre metier, notre expertise
          </h2>
          <p
            className="mx-auto mt-4 max-w-xl text-base"
            style={{ color: "#144D2C", opacity: 0.6 }}
          >
            Que vous soyez artisan, auto-entrepreneur ou entreprise, nous avons
            une solution adaptee
          </p>
        </motion.div>

        {/* Bento-style grid */}
        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {metiers.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className="group flex flex-col items-center gap-3 rounded-2xl p-5 text-center cursor-default transition-all"
              style={{
                background: "rgba(20, 77, 44, 0.03)",
                border: "1px solid rgba(20, 77, 44, 0.06)",
              }}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl transition-all group-hover:scale-110"
                style={{ background: "rgba(20, 77, 44, 0.06)" }}
              >
                <m.icon
                  className="h-5 w-5 transition-colors"
                  style={{ color: "#144D2C" }}
                />
              </div>
              <span
                className="text-sm font-bold"
                style={{ color: "#03260E" }}
              >
                {m.name}
              </span>
              <span
                className="text-[11px] font-medium"
                style={{ color: "#144D2C", opacity: 0.4 }}
              >
                {m.type}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
