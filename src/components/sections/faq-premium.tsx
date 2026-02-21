"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Qu'est-ce que la garantie decennale ?",
    a: "La garantie decennale est une assurance obligatoire imposee par la loi Spinetta de 1978. Elle couvre pendant 10 ans apres la reception des travaux tous les dommages qui compromettent la solidite de l'ouvrage ou le rendent impropre a sa destination.",
  },
  {
    q: "Qui doit souscrire une assurance decennale ?",
    a: "Tout constructeur intervenant sur un ouvrage : entrepreneurs, artisans, auto-entrepreneurs, architectes, bureaux d'etude, promoteurs et ingenieurs-conseil. Peu importe votre statut juridique, si vous realisez des travaux de construction ou de renovation touchant la structure d'un batiment, la decennale est obligatoire.",
  },
  {
    q: "Pour quels travaux la decennale est-elle obligatoire ?",
    a: "La decennale est obligatoire pour les travaux qui affectent la solidite du batiment ou le rendent inhabitable : fondations, ossature, murs porteurs, toiture, charpente, canalisations encastrees, chauffage central, installation electrique encastree.",
  },
  {
    q: "Quelle difference entre decennale et dommage-ouvrage ?",
    a: "La decennale est souscrite par le constructeur. L'assurance dommage-ouvrage est souscrite par le proprietaire. En cas de sinistre, la dommage-ouvrage indemnise le proprietaire rapidement, puis l'assureur se retourne contre la decennale du constructeur.",
  },
  {
    q: "Mon assureur m'a resilie, puis-je quand meme etre assure ?",
    a: "Oui. Nous travaillons avec des assureurs specialises dans les profils resilies et malusses. Que vous ayez ete resilie pour sinistres, non-paiement ou autre motif, nous trouvons une solution dans la grande majorite des cas.",
  },
  {
    q: "Combien coute une assurance decennale ?",
    a: "Le tarif depend de votre metier, statut juridique, chiffre d'affaires et historique de sinistres. Ordre de grandeur : a partir de 60\u20AC/mois pour un auto-entrepreneur en finitions, jusqu'a 300-400\u20AC/mois pour un macon avec un CA important.",
  },
  {
    q: "La decennale est-elle obligatoire pour un auto-entrepreneur ?",
    a: "Oui, si vous exercez une activite assujettie a la decennale. Le statut auto-entrepreneur ne vous exonere pas de cette obligation legale.",
  },
  {
    q: "Que risque-t-on sans assurance decennale ?",
    a: "Travailler sans decennale vous expose a des sanctions penales (amende jusqu'a 75 000\u20AC et 6 mois de prison), une prise en charge financiere personnelle des reparations, et une perte de credibilite aupres de vos clients.",
  },
];

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: { q: string; a: string };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="group"
    >
      <button
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 py-6 text-left"
      >
        <span className="text-base font-medium text-neutral-900 group-hover:text-violet-600 transition-colors">
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="mt-1 shrink-0"
        >
          <ChevronDown className="h-5 w-5 text-neutral-400" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm leading-relaxed text-neutral-500">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="h-px bg-neutral-200" />
    </motion.div>
  );
}

export function FAQPremium() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-violet-600 animate-pulse" />
            <span className="text-xs font-medium text-violet-700">
              Questions frequentes
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Tout savoir sur la decennale
          </h2>
          <p className="mt-4 text-base text-neutral-500">
            Les reponses aux questions les plus posees par les artisans du BTP
          </p>
        </motion.div>

        <div className="mt-12">
          <div className="h-px bg-neutral-200" />
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-8 text-center"
        >
          <p className="text-base font-medium text-neutral-900">
            Vous avez d&apos;autres questions ?
          </p>
          <p className="mt-2 text-sm text-neutral-500">
            Nos courtiers specialises BTP sont la pour vous aider
          </p>
          <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="/devis"
              className="inline-flex items-center rounded-lg bg-violet-600 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-violet-700"
            >
              Demander un devis
            </a>
            <a
              href="tel:0644657005"
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
            >
              Ou appelez le 06 44 65 70 05
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
