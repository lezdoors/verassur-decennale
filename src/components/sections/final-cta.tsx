"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Phone, Shield } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-mid py-20 sm:py-28">
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Shield className="mx-auto mb-6 h-10 w-10 text-white/40" />
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Pret a proteger vos chantiers ?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-neutral-400">
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
            href="/devis"
            className="inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-gold-light"
          >
            Obtenir mon devis gratuit
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="tel:0644657005"
            className="inline-flex items-center gap-2.5 rounded-lg border border-navy-light/30 px-8 py-4 text-base font-medium text-neutral-400 transition-all hover:border-navy-light hover:text-white"
          >
            <Phone className="h-4 w-4" />
            06 44 65 70 05
          </a>
        </motion.div>

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
              <p className="text-xl font-bold text-white">{stat.value}</p>
              <p className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">
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
          className="mt-10 text-xs text-neutral-600"
        >
          Courtier agree ORIAS N° 25004749 &middot; Gratuit et sans engagement
          &middot; Rappel sous 24h
        </motion.p>
      </div>
    </section>
  );
}
