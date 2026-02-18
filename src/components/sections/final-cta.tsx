"use client";

import { motion } from "motion/react";
import { ArrowRight, Phone, Shield } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="devis" className="relative overflow-hidden py-20 sm:py-28" style={{ background: "#03260E" }}>
      {/* Decorative gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212, 175, 55, 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Shield
            className="mx-auto mb-6 h-10 w-10"
            style={{ color: "#D4AF37" }}
          />
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Pret a proteger vos chantiers ?
          </h2>
          <p
            className="mx-auto mt-5 max-w-lg text-base leading-relaxed"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Obtenez votre devis personnalise en 2 minutes. Gratuit, sans
            engagement, et avec un courtier dedie a votre dossier.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#devis"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-bold transition-all hover:scale-105"
            style={{
              background: "#D4AF37",
              color: "#03260E",
              boxShadow: "0 0 40px rgba(212, 175, 55, 0.3)",
            }}
          >
            Obtenir mon devis gratuit
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="tel:0644657005"
            className="inline-flex items-center gap-2.5 rounded-full border px-8 py-4 text-base font-medium transition-all hover:text-white"
            style={{
              borderColor: "rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            <Phone className="h-4 w-4" style={{ color: "#D4AF37" }} />
            06 44 65 70 05
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
        >
          {[
            { value: "10 ans", label: "de protection" },
            { value: "24h", label: "delai de reponse" },
            { value: "Gratuit", label: "devis sans engagement" },
            { value: "BTP", label: "tous metiers" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-xl font-black" style={{ color: "#D4AF37" }}>
                {stat.value}
              </p>
              <p
                className="text-[11px] font-medium"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-10 text-xs"
          style={{ color: "rgba(255,255,255,0.25)" }}
        >
          Courtier agree ORIAS N° 25004749 &middot; Gratuit et sans engagement
          &middot; Rappel sous 24h
        </motion.p>
      </div>
    </section>
  );
}
