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
    <section className="py-20 sm:py-28" style={{ background: "#1A1A1A" }}>
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
            Simple et rapide
          </span>
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
            Comment ca marche ?
          </h2>
          <p
            className="mx-auto mt-4 max-w-xl text-base"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
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
              className="group relative p-8 transition-all"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
              }}
            >
              {/* Time badge */}
              <div
                className="absolute -top-3 right-6 px-3.5 py-1 text-xs font-medium uppercase tracking-wider"
                style={{ background: "#D4AF37", color: "#0A0A0A" }}
              >
                {step.time}
              </div>

              <div className="mb-5 flex items-center gap-4">
                <span
                  className="text-5xl font-medium"
                  style={{ color: "rgba(255,255,255,0.06)" }}
                >
                  {step.number}
                </span>
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-sm transition-colors"
                  style={{ background: "rgba(212, 175, 55, 0.1)" }}
                >
                  <step.icon className="h-5 w-5" style={{ color: "#D4AF37" }} />
                </div>
              </div>

              <h3 className="text-lg font-medium text-white">
                {step.title}
              </h3>
              <p
                className="mt-2 text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {step.description}
              </p>

              {/* Connector dots */}
              {i < steps.length - 1 && (
                <div className="absolute -right-4 top-1/2 hidden md:block" style={{ color: "rgba(255,255,255,0.15)" }}>
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
