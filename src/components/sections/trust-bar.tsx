"use client";

import { motion } from "motion/react";
import { Shield, Clock, FileCheck, Phone } from "lucide-react";

const indicators = [
  { icon: Shield, text: "Courtier agree ORIAS" },
  { icon: FileCheck, text: "Devis gratuit en 2 min" },
  { icon: Clock, text: "Rappel sous 24h" },
  { icon: Phone, text: "Disponible par telephone" },
];

export function TrustBar() {
  return (
    <section
      className="py-5 overflow-hidden"
      style={{
        background: "#111111",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {indicators.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="flex items-center gap-2"
            >
              <item.icon
                className="h-4 w-4"
                style={{ color: "#D4AF37" }}
              />
              <span
                className="text-xs font-medium uppercase tracking-wider"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
