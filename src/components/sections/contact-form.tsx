"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Send,
  Phone,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Building2,
  User,
  AlertTriangle,
} from "lucide-react";

const metiers = [
  "Macon",
  "Electricien",
  "Plombier / Chauffagiste",
  "Peintre en batiment",
  "Couvreur / Zingueur",
  "Menuisier",
  "Carreleur",
  "Charpentier",
  "Terrassier",
  "Platrier / Plaquiste",
  "Serrurier / Metallier",
  "Climaticien",
  "Autre",
];

const statuts = [
  "Auto-entrepreneur",
  "EIRL",
  "SARL / EURL",
  "SAS / SASU",
  "Entreprise individuelle",
];

const situations = [
  { label: "Premiere souscription", desc: "Je n'ai jamais ete assure en decennale" },
  { label: "Renouvellement", desc: "Je souhaite changer d'assureur" },
  { label: "Resilie", desc: "Mon assureur a resilie mon contrat" },
  { label: "Malus / Sinistres", desc: "J'ai un historique de sinistres" },
  { label: "Recherche de meilleur tarif", desc: "Je veux comparer les prix" },
];

export function ContactForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    metier: "",
    statut: "",
    situation: "",
    ca: "",
    annee_creation: "",
    sinistres: "0",
    prenom: "",
    nom: "",
    telephone: "",
    email: "",
    societe: "",
    departement: "",
  });

  const update = (field: string, value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  const canNext =
    step === 1
      ? form.metier && form.statut
      : step === 2
        ? form.situation
        : form.prenom && form.telephone;

  return (
    <section id="devis" className="min-h-screen py-20 pt-28 sm:py-28 sm:pt-32" style={{ background: "#FFFFFF" }}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
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
            Devis gratuit
          </span>
          <h2
            className="text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: "#111827" }}
          >
            Obtenez votre devis en 2 minutes
          </h2>
          <p
            className="mx-auto mt-4 max-w-xl text-base"
            style={{ color: "#6B7280" }}
          >
            Gratuit, sans engagement. Un courtier vous rappelle sous 24h avec les meilleures offres.
          </p>
        </motion.div>

        {/* Progress bar */}
        <div className="mt-10 flex items-center gap-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex-1 flex items-center gap-2">
              <div
                className="h-1 flex-1 transition-all duration-500"
                style={{
                  background: s <= step ? "#D4AF37" : "#E5E7EB",
                }}
              />
            </div>
          ))}
        </div>
        <div className="mt-2 flex justify-between text-xs font-medium uppercase tracking-wider" style={{ color: "#9CA3AF" }}>
          <span>Activite</span>
          <span>Situation</span>
          <span>Coordonnees</span>
        </div>

        {/* Form card */}
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8 p-6 sm:p-8"
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Step 1: Activite */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <Building2 className="h-5 w-5" style={{ color: "#D4AF37" }} />
                <h3 className="text-lg font-medium" style={{ color: "#111827" }}>
                  Votre activite
                </h3>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium" style={{ color: "#111827" }}>
                  Quel est votre metier ?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {metiers.map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => update("metier", m)}
                      className="px-3 py-2.5 text-sm font-medium transition-all text-left"
                      style={{
                        background: form.metier === m ? "#D4AF37" : "#FFFFFF",
                        color: form.metier === m ? "#111827" : "#374151",
                        border: `1px solid ${form.metier === m ? "#D4AF37" : "#D1D5DB"}`,
                      }}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium" style={{ color: "#111827" }}>
                  Statut juridique
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {statuts.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => update("statut", s)}
                      className="px-3 py-2.5 text-sm font-medium transition-all text-left"
                      style={{
                        background: form.statut === s ? "#D4AF37" : "#FFFFFF",
                        color: form.statut === s ? "#111827" : "#374151",
                        border: `1px solid ${form.statut === s ? "#D4AF37" : "#D1D5DB"}`,
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium" style={{ color: "#111827" }}>
                    Chiffre d&apos;affaires annuel
                  </label>
                  <Input
                    placeholder="Ex: 80 000 EUR"
                    value={form.ca}
                    onChange={(e) => update("ca", e.target.value)}
                    className="rounded-sm"
                    style={{ border: "1px solid #D1D5DB", background: "#FFFFFF", color: "#111827" }}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium" style={{ color: "#111827" }}>
                    Annee de creation
                  </label>
                  <Input
                    placeholder="Ex: 2020"
                    value={form.annee_creation}
                    onChange={(e) => update("annee_creation", e.target.value)}
                    className="rounded-sm"
                    style={{ border: "1px solid #D1D5DB", background: "#FFFFFF", color: "#111827" }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Situation */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <AlertTriangle className="h-5 w-5" style={{ color: "#D4AF37" }} />
                <h3 className="text-lg font-medium" style={{ color: "#111827" }}>
                  Votre situation
                </h3>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium" style={{ color: "#111827" }}>
                  Quelle est votre situation actuelle ?
                </label>
                <div className="space-y-2">
                  {situations.map((s) => (
                    <button
                      key={s.label}
                      type="button"
                      onClick={() => update("situation", s.label)}
                      className="w-full px-4 py-3 text-left transition-all flex items-center justify-between"
                      style={{
                        background: form.situation === s.label ? "#D4AF37" : "#FFFFFF",
                        color: form.situation === s.label ? "#111827" : "#374151",
                        border: `1px solid ${form.situation === s.label ? "#D4AF37" : "#D1D5DB"}`,
                      }}
                    >
                      <div>
                        <p className="text-sm font-medium">{s.label}</p>
                        <p className="text-xs mt-0.5" style={{ opacity: 0.6 }}>{s.desc}</p>
                      </div>
                      {form.situation === s.label && (
                        <CheckCircle2 className="h-5 w-5 shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {(form.situation === "Resilie" || form.situation === "Malus / Sinistres") && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="p-4"
                  style={{ background: "rgba(212, 175, 55, 0.08)", border: "1px solid rgba(212, 175, 55, 0.2)" }}
                >
                  <p className="text-sm font-medium" style={{ color: "#D4AF37" }}>
                    Pas d&apos;inquietude — nous travaillons avec des assureurs specialises dans les profils resilies et malusses. Nous trouvons une solution dans la grande majorite des cas.
                  </p>
                </motion.div>
              )}

              <div>
                <label className="mb-1.5 block text-sm font-medium" style={{ color: "#111827" }}>
                  Nombre de sinistres (3 dernieres annees)
                </label>
                <div className="flex gap-2">
                  {["0", "1", "2", "3+"].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => update("sinistres", n)}
                      className="flex-1 py-2.5 text-sm font-medium transition-all"
                      style={{
                        background: form.sinistres === n ? "#D4AF37" : "#FFFFFF",
                        color: form.sinistres === n ? "#111827" : "#374151",
                        border: `1px solid ${form.sinistres === n ? "#D4AF37" : "#D1D5DB"}`,
                      }}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium" style={{ color: "#111827" }}>
                  Departement
                </label>
                <Input
                  placeholder="Ex: 75, 13, 69..."
                  value={form.departement}
                  onChange={(e) => update("departement", e.target.value)}
                  className="rounded-sm"
                  style={{ border: "1px solid #D1D5DB", background: "#FFFFFF", color: "#111827" }}
                />
              </div>
            </div>
          )}

          {/* Step 3: Coordonnees */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <User className="h-5 w-5" style={{ color: "#D4AF37" }} />
                <h3 className="text-lg font-medium" style={{ color: "#111827" }}>
                  Vos coordonnees
                </h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium" style={{ color: "#111827" }}>
                    Prenom *
                  </label>
                  <Input
                    placeholder="Votre prenom"
                    value={form.prenom}
                    onChange={(e) => update("prenom", e.target.value)}
                    className="rounded-sm"
                    style={{ border: "1px solid #D1D5DB", background: "#FFFFFF", color: "#111827" }}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium" style={{ color: "#111827" }}>
                    Nom
                  </label>
                  <Input
                    placeholder="Votre nom"
                    value={form.nom}
                    onChange={(e) => update("nom", e.target.value)}
                    className="rounded-sm"
                    style={{ border: "1px solid #D1D5DB", background: "#FFFFFF", color: "#111827" }}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium" style={{ color: "#111827" }}>
                    Telephone *
                  </label>
                  <Input
                    type="tel"
                    placeholder="06 XX XX XX XX"
                    value={form.telephone}
                    onChange={(e) => update("telephone", e.target.value)}
                    className="rounded-sm"
                    style={{ border: "1px solid #D1D5DB", background: "#FFFFFF", color: "#111827" }}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium" style={{ color: "#111827" }}>
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="votre@email.fr"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className="rounded-sm"
                    style={{ border: "1px solid #D1D5DB", background: "#FFFFFF", color: "#111827" }}
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium" style={{ color: "#111827" }}>
                  Nom de la societe
                </label>
                <Input
                  placeholder="Raison sociale"
                  value={form.societe}
                  onChange={(e) => update("societe", e.target.value)}
                  className="rounded-sm"
                  style={{ border: "1px solid #D1D5DB", background: "#FFFFFF", color: "#111827" }}
                />
              </div>

              {/* Summary */}
              <div
                className="p-4 space-y-1.5"
                style={{ background: "#F8FAFC", border: "1px solid #E5E7EB" }}
              >
                <p className="text-xs font-medium uppercase tracking-wider" style={{ color: "#D4AF37" }}>
                  Recapitulatif
                </p>
                <p className="text-sm" style={{ color: "#111827" }}>
                  <span style={{ color: "#9CA3AF" }}>Metier :</span> {form.metier} ({form.statut})
                </p>
                <p className="text-sm" style={{ color: "#111827" }}>
                  <span style={{ color: "#9CA3AF" }}>Situation :</span> {form.situation}
                </p>
                {form.ca && (
                  <p className="text-sm" style={{ color: "#111827" }}>
                    <span style={{ color: "#9CA3AF" }}>CA :</span> {form.ca}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-between gap-4">
            {step > 1 ? (
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(step - 1)}
                className="h-12 px-6 rounded-sm"
                style={{ borderColor: "#D1D5DB", color: "#374151", background: "#FFFFFF" }}
              >
                <ChevronLeft className="mr-1 h-4 w-4" />
                Retour
              </Button>
            ) : (
              <div />
            )}

            {step < 3 ? (
              <Button
                type="button"
                onClick={() => canNext && setStep(step + 1)}
                disabled={!canNext}
                className="h-12 px-8 text-base font-medium transition-all hover:scale-[1.02] rounded-sm"
                style={{
                  background: canNext ? "#111827" : "#E5E7EB",
                  color: canNext ? "#FFFFFF" : "#9CA3AF",
                }}
              >
                Suivant
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            ) : (
              <Button
                type="button"
                disabled={!canNext}
                className="h-12 px-8 text-base font-medium transition-all hover:scale-[1.02] rounded-sm"
                style={{
                  background: canNext ? "#D4AF37" : "rgba(212, 175, 55, 0.2)",
                  color: "#111827",
                  boxShadow: canNext ? "0 0 30px rgba(212, 175, 55, 0.3)" : "none",
                }}
              >
                Recevoir mon devis gratuit
                <Send className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </motion.div>

        {/* Trust line */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-xs" style={{ color: "#9CA3AF" }}>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Gratuit et sans engagement
          </span>
          <span className="flex items-center gap-1.5">
            <Phone className="h-3.5 w-3.5" />
            Ou appelez le 06 44 65 70 05
          </span>
        </div>
      </div>
    </section>
  );
}
