"use client";

import { motion } from "motion/react";
import { FileText, PhoneCall, BadgeCheck } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Remplissez le formulaire",
    description:
      "2 minutes suffisent. Decrivez votre activite, votre profil et vos besoins.",
    time: "2 min",
  },
  {
    icon: PhoneCall,
    number: "02",
    title: "Un courtier vous rappelle",
    description:
      "Notre expert BTP analyse votre dossier et compare les offres de +30 assureurs.",
    time: "15 min",
  },
  {
    icon: BadgeCheck,
    number: "03",
    title: "Recevez votre attestation",
    description:
      "Votre attestation decennale vous est envoyee. Vous pouvez demarrer vos chantiers.",
    time: "48h",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-white py-20 sm:py-28">
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
            Simple et rapide
          </span>
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: "#03260E" }}
          >
            Comment ca marche ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base" style={{ color: "#144D2C", opacity: 0.6 }}>
            Obtenez votre assurance decennale en 3 etapes simples
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-xl"
            >
              {/* Time badge */}
              <div
                className="absolute -top-3 right-6 rounded-full px-3.5 py-1 text-xs font-bold"
                style={{ background: "#D4AF37", color: "#03260E" }}
              >
                {step.time}
              </div>

              <div className="mb-5 flex items-center gap-4">
                <span
                  className="text-5xl font-black"
                  style={{ color: "rgba(20, 77, 44, 0.06)" }}
                >
                  {step.number}
                </span>
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl transition-colors"
                  style={{ background: "rgba(20, 77, 44, 0.06)" }}
                >
                  <step.icon className="h-5 w-5" style={{ color: "#144D2C" }} />
                </div>
              </div>

              <h3 className="text-lg font-bold" style={{ color: "#03260E" }}>
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "#144D2C", opacity: 0.6 }}>
                {step.description}
              </p>

              {/* Connector dots */}
              {i < steps.length - 1 && (
                <div className="absolute -right-4 top-1/2 hidden text-slate-200 md:block">
                  <svg width="8" height="8" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3" fill="currentColor" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
