"use client";

import { TextParallaxContent } from "@/components/ui/text-parallax-content";
import { ArrowUpRight, Shield, FileCheck, PhoneCall, BadgeCheck, Scale, Wrench, Building, AlertTriangle, Hammer, Zap, Droplets, Home, Layers, HardHat } from "lucide-react";

export function ParallaxSections() {
  return (
    <div className="bg-white">
      {/* Panel 1: Comment ca marche */}
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
        subheading="Simple et rapide"
        heading="3 etapes. C'est tout."
      >
        <HowItWorksContent />
      </TextParallaxContent>

      {/* Panel 2: Garanties */}
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80"
        subheading="Loi Spinetta — Article L.241-1"
        heading="Vos garanties."
      >
        <GuaranteesContent />
      </TextParallaxContent>

      {/* Panel 3: Tous les metiers */}
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&q=80"
        subheading="Tous corps de metier"
        heading="Votre metier, couvert."
      >
        <MetiersContent />
      </TextParallaxContent>
    </div>
  );
}

/* ── Panel 1 content: How it works ── */
const steps = [
  {
    icon: FileCheck,
    number: "01",
    title: "Remplissez le formulaire",
    description: "2 minutes suffisent. Decrivez votre activite, votre profil et vos besoins.",
    time: "2 min",
  },
  {
    icon: PhoneCall,
    number: "02",
    title: "Un courtier vous rappelle",
    description: "Notre expert BTP analyse votre dossier et compare les offres de +30 assureurs.",
    time: "15 min",
  },
  {
    icon: BadgeCheck,
    number: "03",
    title: "Recevez votre attestation",
    description: "Votre attestation decennale vous est envoyee. Vous pouvez demarrer vos chantiers.",
    time: "48h",
  },
];

function HowItWorksContent() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-24 pt-12 md:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
        <div className="col-span-1 md:col-span-4">
          <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl">
            Comment ca marche ?
          </h2>
          <p className="mt-4 text-lg text-neutral-500">
            Obtenez votre assurance decennale en 3 etapes simples
          </p>
        </div>
        <div className="col-span-1 space-y-6 md:col-span-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex gap-5 rounded-xl border border-neutral-200 bg-neutral-50 p-6 transition-all hover:border-neutral-300 hover:shadow-md"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-neutral-900 text-white">
                <step.icon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold text-neutral-900">{step.title}</h3>
                  <span className="rounded-full bg-neutral-900 px-3 py-0.5 text-xs font-medium text-white">
                    {step.time}
                  </span>
                </div>
                <p className="mt-1.5 text-base text-neutral-500">{step.description}</p>
              </div>
            </div>
          ))}
          <a
            href="/devis"
            className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-neutral-700"
          >
            Obtenir mon devis gratuit
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── Panel 2 content: Guarantees ── */
const guarantees = [
  {
    icon: Shield,
    title: "Garantie decennale",
    description: "Couvre pendant 10 ans tous les dommages compromettant la solidite de l'ouvrage ou le rendant impropre a sa destination.",
    badge: "10 ans",
  },
  {
    icon: Scale,
    title: "RC Professionnelle",
    description: "Couvre les dommages causes aux tiers pendant l'execution des travaux : degats chez un voisin, blessure sur chantier.",
    badge: "Incluse",
  },
  {
    icon: Wrench,
    title: "Garantie biennale",
    description: "Couvre pendant 2 ans les equipements dissociables : chauffe-eau, radiateurs, volets, pompes a chaleur.",
    badge: "2 ans",
  },
  {
    icon: Building,
    title: "Gros oeuvre et structure",
    description: "Fondations, ossature, murs porteurs, charpente, toiture. Tout ce qui touche a la solidite du batiment.",
    badge: "Structure",
  },
  {
    icon: FileCheck,
    title: "Ouvrages indissociables",
    description: "Canalisations encastrees, planchers, plafonds, chauffage central, installation electrique encastree.",
    badge: "Complet",
  },
  {
    icon: AlertTriangle,
    title: "Sans assurance : les risques",
    description: "Sanctions penales, interdiction d'exercer, prise en charge financiere des reparations, perte de credibilite.",
    badge: "Obligatoire",
  },
];

function GuaranteesContent() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-24 pt-12 md:px-8">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl">
          Ce que couvre la garantie decennale
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-neutral-500">
          Tout constructeur est responsable des desordres compromettant la solidite de l&apos;ouvrage, pendant 10 ans apres reception des travaux.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {guarantees.map((g) => (
          <div
            key={g.title}
            className="group rounded-xl border border-neutral-200 bg-neutral-50 p-6 transition-all hover:border-neutral-300 hover:shadow-md"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-neutral-900 text-white">
                <g.icon className="h-5 w-5" />
              </div>
              <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-600">
                {g.badge}
              </span>
            </div>
            <h3 className="text-base font-semibold text-neutral-900">{g.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-500">{g.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Panel 3 content: Metiers ── */
const metiers = [
  { icon: Hammer, name: "Macon", type: "Gros oeuvre", obligatoire: true },
  { icon: Zap, name: "Electricien", type: "Second oeuvre", obligatoire: true },
  { icon: Droplets, name: "Plombier / Chauffagiste", type: "Second oeuvre", obligatoire: true },
  { icon: Home, name: "Couvreur / Zingueur", type: "Gros oeuvre", obligatoire: true },
  { icon: Wrench, name: "Menuisier", type: "Second oeuvre", obligatoire: true },
  { icon: Layers, name: "Carreleur", type: "Finitions", obligatoire: true },
  { icon: HardHat, name: "Charpentier", type: "Gros oeuvre", obligatoire: true },
  { icon: Building, name: "Platrier / Plaquiste", type: "Second oeuvre", obligatoire: true },
];

function MetiersContent() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-24 pt-12 md:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
        <div className="col-span-1 md:col-span-4">
          <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl">
            Tous les metiers du BTP
          </h2>
          <p className="mt-4 text-lg text-neutral-500">
            Chaque metier a des risques specifiques. Nous assurons tous les corps d&apos;etat.
          </p>
          <a
            href="/devis"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-neutral-700"
          >
            Devis gratuit
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>
        <div className="col-span-1 md:col-span-8">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {metiers.map((m) => (
              <div
                key={m.name}
                className="flex items-center gap-4 rounded-xl border border-neutral-200 bg-neutral-50 p-4 transition-all hover:border-neutral-300 hover:shadow-md"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-neutral-900 text-white">
                  <m.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900">{m.name}</p>
                  <div className="mt-0.5 flex items-center gap-2">
                    <span className="text-xs text-neutral-400">{m.type}</span>
                    <span className="rounded-full bg-neutral-900 px-2 py-0.5 text-[10px] font-medium text-white">
                      Obligatoire
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
