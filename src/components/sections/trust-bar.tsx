"use client";

import { motion } from "motion/react";

const partners = [
  "AXA",
  "Allianz",
  "MAAF",
  "Generali",
  "Groupama",
  "MMA",
  "Zurich",
  "SMABTP",
];

export function TrustBar() {
  return (
    <section className="border-y border-slate-100 bg-white py-8 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-medium uppercase tracking-widest mb-6"
          style={{ color: "#144D2C", opacity: 0.4 }}
        >
          Nos partenaires assureurs
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {partners.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="text-lg font-bold tracking-tight"
              style={{ color: "rgba(20, 77, 44, 0.18)" }}
            >
              {name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
