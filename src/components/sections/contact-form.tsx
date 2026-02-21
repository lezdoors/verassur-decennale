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
    <section id="devis" className="min-h-screen bg-neutral-50 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-neutral-400">
            Devis gratuit
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Obtenez votre devis en 2 minutes
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-neutral-500">
            Gratuit, sans engagement. Un courtier vous rappelle sous 24h avec les meilleures offres.
          </p>
        </motion.div>

        {/* Progress bar */}
        <div className="mt-10 flex items-center gap-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex-1">
              <div
                className="h-1 flex-1 rounded-full transition-all duration-500"
                style={{
                  background: s <= step ? "#2563EB" : "#E5E5E5",
                }}
              />
            </div>
          ))}
        </div>
        <div className="mt-2 flex justify-between text-xs font-medium uppercase tracking-wider text-neutral-400">
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
          className="mt-8 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8"
        >
          {/* Step 1: Activite */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-600">
                  <Building2 className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">
                  Votre activite
                </h3>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">
                  Quel est votre metier ?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {metiers.map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => update("metier", m)}
                      className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-all text-left border ${
                        form.metier === m
                          ? "border-teal-600 bg-teal-600 text-white"
                          : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300"
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">
                  Statut juridique
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {statuts.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => update("statut", s)}
                      className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-all text-left border ${
                        form.statut === s
                          ? "border-teal-600 bg-teal-600 text-white"
                          : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-neutral-700">
                    Chiffre d&apos;affaires annuel
                  </label>
                  <Input
                    placeholder="Ex: 80 000 EUR"
                    value={form.ca}
                    onChange={(e) => update("ca", e.target.value)}
                    className="rounded-lg border-neutral-200"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-neutral-700">
                    Annee de creation
                  </label>
                  <Input
                    placeholder="Ex: 2020"
                    value={form.annee_creation}
                    onChange={(e) => update("annee_creation", e.target.value)}
                    className="rounded-lg border-neutral-200"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Situation */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-600">
                  <AlertTriangle className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">
                  Votre situation
                </h3>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">
                  Quelle est votre situation actuelle ?
                </label>
                <div className="space-y-2">
                  {situations.map((s) => (
                    <button
                      key={s.label}
                      type="button"
                      onClick={() => update("situation", s.label)}
                      className={`w-full rounded-lg px-4 py-3 text-left transition-all flex items-center justify-between border ${
                        form.situation === s.label
                          ? "border-teal-600 bg-teal-600 text-white"
                          : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300"
                      }`}
                    >
                      <div>
                        <p className="text-sm font-medium">{s.label}</p>
                        <p className="text-xs mt-0.5 opacity-60">{s.desc}</p>
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
                  className="rounded-lg border border-amber-200 bg-amber-50 p-4"
                >
                  <p className="text-sm font-medium text-amber-800">
                    Pas d&apos;inquietude — nous travaillons avec des assureurs specialises dans les profils resilies et malusses. Nous trouvons une solution dans la grande majorite des cas.
                  </p>
                </motion.div>
              )}

              <div>
                <label className="mb-1.5 block text-sm font-medium text-neutral-700">
                  Nombre de sinistres (3 dernieres annees)
                </label>
                <div className="flex gap-2">
                  {["0", "1", "2", "3+"].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => update("sinistres", n)}
                      className={`flex-1 rounded-lg py-2.5 text-sm font-medium transition-all border ${
                        form.sinistres === n
                          ? "border-teal-600 bg-teal-600 text-white"
                          : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300"
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-neutral-700">
                  Departement
                </label>
                <Input
                  placeholder="Ex: 75, 13, 69..."
                  value={form.departement}
                  onChange={(e) => update("departement", e.target.value)}
                  className="rounded-lg border-neutral-200"
                />
              </div>
            </div>
          )}

          {/* Step 3: Coordonnees */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-600">
                  <User className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">
                  Vos coordonnees
                </h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-neutral-700">Prenom *</label>
                  <Input placeholder="Votre prenom" value={form.prenom} onChange={(e) => update("prenom", e.target.value)} className="rounded-lg border-neutral-200" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-neutral-700">Nom</label>
                  <Input placeholder="Votre nom" value={form.nom} onChange={(e) => update("nom", e.target.value)} className="rounded-lg border-neutral-200" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-neutral-700">Telephone *</label>
                  <Input type="tel" placeholder="06 XX XX XX XX" value={form.telephone} onChange={(e) => update("telephone", e.target.value)} className="rounded-lg border-neutral-200" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-neutral-700">Email</label>
                  <Input type="email" placeholder="votre@email.fr" value={form.email} onChange={(e) => update("email", e.target.value)} className="rounded-lg border-neutral-200" />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-neutral-700">Nom de la societe</label>
                <Input placeholder="Raison sociale" value={form.societe} onChange={(e) => update("societe", e.target.value)} className="rounded-lg border-neutral-200" />
              </div>

              {/* Summary */}
              <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 space-y-1.5">
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Recapitulatif
                </p>
                <p className="text-sm text-neutral-900">
                  <span className="text-neutral-400">Metier :</span> {form.metier} ({form.statut})
                </p>
                <p className="text-sm text-neutral-900">
                  <span className="text-neutral-400">Situation :</span> {form.situation}
                </p>
                {form.ca && (
                  <p className="text-sm text-neutral-900">
                    <span className="text-neutral-400">CA :</span> {form.ca}
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
                className="h-12 rounded-lg border-neutral-200 px-6 text-neutral-600"
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
                className={`h-12 rounded-lg px-8 text-base font-medium transition-all ${
                  canNext
                    ? "bg-teal-600 text-white hover:bg-teal-700"
                    : "bg-neutral-100 text-neutral-400"
                }`}
              >
                Suivant
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            ) : (
              <Button
                type="button"
                disabled={!canNext}
                className={`h-12 rounded-lg px-8 text-base font-medium transition-all ${
                  canNext
                    ? "bg-teal-600 text-white hover:bg-teal-700"
                    : "bg-neutral-100 text-neutral-400"
                }`}
              >
                Recevoir mon devis gratuit
                <Send className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </motion.div>

        {/* Trust line */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-xs text-neutral-400">
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
