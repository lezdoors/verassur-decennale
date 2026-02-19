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
    a: "La garantie decennale est une assurance obligatoire imposee par la loi Spinetta de 1978 (articles L.241-1 et suivants du Code des assurances). Elle couvre pendant 10 ans apres la reception des travaux tous les dommages qui compromettent la solidite de l'ouvrage ou le rendent impropre a sa destination. Exemple : un macon realise des fondations, un affaissement survient 3 ans plus tard — la decennale prend en charge les reparations.",
  },
  {
    q: "Qui doit souscrire une assurance decennale ?",
    a: "Tout constructeur intervenant sur un ouvrage : entrepreneurs, artisans, auto-entrepreneurs, architectes, bureaux d'etude, promoteurs et ingenieurs-conseil. Peu importe votre statut juridique (auto-entrepreneur, SARL, SAS...), si vous realisez des travaux de construction ou de renovation touchant la structure d'un batiment, la decennale est obligatoire.",
  },
  {
    q: "Pour quels travaux la decennale est-elle obligatoire ?",
    a: "La decennale est obligatoire pour les travaux qui affectent la solidite du batiment ou le rendent inhabitable : fondations, ossature, murs porteurs, toiture, charpente, canalisations encastrees, chauffage central, installation electrique encastree. Les defauts purement esthetiques (rayure, tache) relevent de la RC Professionnelle, pas de la decennale.",
  },
  {
    q: "Quelle difference entre decennale et dommage-ouvrage ?",
    a: "La decennale est souscrite par le constructeur (maitre d'oeuvre). L'assurance dommage-ouvrage est souscrite par le proprietaire (maitre d'ouvrage). En cas de sinistre, la dommage-ouvrage indemnise le proprietaire rapidement sans attendre la recherche de responsabilite, puis l'assureur se retourne contre la decennale du constructeur.",
  },
  {
    q: "Mon assureur m'a resilie, puis-je quand meme etre assure ?",
    a: "Oui. Nous travaillons avec des assureurs specialises dans les profils resilies et malusses. Que vous ayez ete resilie pour sinistres, non-paiement ou autre motif, nous trouvons une solution dans la grande majorite des cas. Remplissez le formulaire en indiquant votre situation — c'est exactement pour ca que nous existons.",
  },
  {
    q: "Combien coute une assurance decennale ?",
    a: "Le tarif depend de votre metier, statut juridique, chiffre d'affaires et historique de sinistres. Ordre de grandeur : a partir de 60€/mois pour un auto-entrepreneur en finitions, jusqu'a 300-400€/mois pour un macon avec un CA important. Les profils resilies ou malusses ont des tarifs plus eleves. Notre role est de comparer les offres pour obtenir le meilleur prix.",
  },
  {
    q: "La decennale est-elle obligatoire pour un auto-entrepreneur ?",
    a: "Oui, si vous exercez une activite assujettie a la decennale. Le statut auto-entrepreneur ne vous exonere pas de cette obligation. Les dommages decennaux doivent affecter la solidite de l'ouvrage ou le rendre impropre a sa destination pour etre couverts.",
  },
  {
    q: "Qu'est-ce que la garantie biennale (bon fonctionnement) ?",
    a: "La garantie biennale couvre pendant 2 ans apres reception les dysfonctionnements lies aux equipements dissociables de l'ouvrage : pompes a chaleur, chauffe-eau, radiateurs, volets, gouttieres, portes (hors dormants), elements de cuisine. Elle est distincte de la decennale qui couvre les elements structurels.",
  },
  {
    q: "Que risque-t-on sans assurance decennale ?",
    a: "Travailler sans decennale vous expose a des sanctions penales (amende pouvant aller jusqu'a 75 000€ et 6 mois de prison), une prise en charge financiere personnelle des reparations (dizaines voire centaines de milliers d'euros), et une perte de credibilite aupres de vos clients. Aucun maitre d'ouvrage serieux ne fera appel a un professionnel non assure.",
  },
  {
    q: "Comment obtenir l'attestation decennale d'une entreprise ?",
    a: "Il suffit d'en faire la demande aupres de l'entreprise. L'attestation d'assurance decennale doit mentionner les activites couvertes, les plafonds de garantie et la periode de validite. Pour verifier qu'un contrat est bien en vigueur, vous pouvez contacter directement l'assureur mentionne sur l'attestation.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-28" style={{ background: "#F8FAFC" }}>
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
            FAQ
          </span>
          <h2
            className="text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: "#111827" }}
          >
            Questions frequentes
          </h2>
          <p
            className="mt-4 text-base"
            style={{ color: "#6B7280" }}
          >
            Tout savoir sur la garantie decennale, la loi Spinetta et vos obligations
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
                className="border-b"
                style={{ borderColor: "#E5E7EB" }}
              >
                <AccordionTrigger
                  className="py-5 text-left text-sm font-medium hover:no-underline"
                  style={{ color: "#111827" }}
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent
                  className="pb-5 text-sm leading-relaxed"
                  style={{ color: "#6B7280" }}
                >
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
