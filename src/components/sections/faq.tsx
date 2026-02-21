"use client";

import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Qu'est-ce que la garantie decennale ?",
    a: "La garantie decennale est une assurance obligatoire imposee par la loi Spinetta de 1978 (articles L.241-1 et suivants du Code des assurances). Elle couvre pendant 10 ans apres la reception des travaux tous les dommages qui compromettent la solidite de l'ouvrage ou le rendent impropre a sa destination.",
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
    a: "Le tarif depend de votre metier, statut juridique, chiffre d'affaires et historique de sinistres. Ordre de grandeur : a partir de 60EUR/mois pour un auto-entrepreneur en finitions, jusqu'a 300-400EUR/mois pour un macon avec un CA important.",
  },
  {
    q: "La decennale est-elle obligatoire pour un auto-entrepreneur ?",
    a: "Oui, si vous exercez une activite assujettie a la decennale. Le statut auto-entrepreneur ne vous exonere pas de cette obligation legale.",
  },
  {
    q: "Que risque-t-on sans assurance decennale ?",
    a: "Travailler sans decennale vous expose a des sanctions penales (amende jusqu'a 75 000EUR et 6 mois de prison), une prise en charge financiere personnelle des reparations, et une perte de credibilite aupres de vos clients.",
  },
];

export function FAQ() {
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
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-neutral-400">
            FAQ
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Questions frequentes
          </h2>
          <p className="mt-4 text-base text-neutral-500">
            Tout savoir sur la garantie decennale et vos obligations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="mt-12">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-b border-neutral-200"
              >
                <AccordionTrigger className="py-5 text-left text-sm font-semibold text-neutral-900 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-neutral-500">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
