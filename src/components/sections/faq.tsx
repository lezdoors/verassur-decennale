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
    q: "Qu'est-ce que l'assurance decennale ?",
    a: "L'assurance decennale (ou garantie decennale) est une assurance obligatoire pour tous les professionnels du batiment en France. Elle couvre pendant 10 ans les dommages qui compromettent la solidite de l'ouvrage ou le rendent impropre a sa destination, conformement aux articles 1792 et suivants du Code civil.",
  },
  {
    q: "Suis-je oblige d'en avoir une ?",
    a: "Oui, c'est une obligation legale pour tout professionnel du BTP intervenant sur des travaux de construction ou de renovation. Travailler sans assurance decennale vous expose a des sanctions penales et a une responsabilite financiere personnelle en cas de sinistre.",
  },
  {
    q: "Mon assureur m'a resilie, puis-je quand meme etre assure ?",
    a: "Absolument. C'est notre specialite. Que vous ayez ete resilie pour sinistres, non-paiement ou tout autre motif, nous travaillons avec des assureurs specialises dans les profils atypiques. Nous acceptons les coefficients de malus jusqu'a 3.50.",
  },
  {
    q: "Combien coute une assurance decennale ?",
    a: "Le tarif depend de votre metier, statut juridique, chiffre d'affaires et historique de sinistres. En moyenne : de 600\u20ac/an pour un auto-entrepreneur en finitions a plus de 4 000\u20ac/an pour un macon avec un CA important. Nos clients economisent en moyenne 35% par rapport a leur ancien contrat.",
  },
  {
    q: "Combien de temps pour recevoir mon attestation ?",
    a: "En general sous 48 heures apres validation de votre dossier. Pour les profils standards, l'attestation peut etre delivree le jour meme. Les profils resilies ou malusses peuvent necessiter un delai legerement plus long.",
  },
  {
    q: "Quels travaux sont couverts par la decennale ?",
    a: "Tous les travaux de construction, renovation, extension et amenagement qui touchent a la structure ou a l'etancheite du batiment. Cela inclut le gros oeuvre (fondations, murs, toiture), le second oeuvre (electricite, plomberie, menuiserie) et certaines finitions (carrelage, peinture) selon les termes du contrat.",
  },
  {
    q: "Puis-je commencer un chantier sans attestation ?",
    a: "Non, vous devez etre couvert avant le debut des travaux. L'attestation decennale doit etre fournie au maitre d'ouvrage avant l'ouverture du chantier. Travailler sans attestation valide engage votre responsabilite personnelle.",
  },
  {
    q: "Le devis est-il vraiment gratuit ?",
    a: "Oui, notre devis est 100% gratuit et sans engagement. Nous sommes remuneres par les compagnies d'assurance sous forme de commission de courtage, il n'y a donc aucun frais supplementaire pour vous.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-28" style={{ background: "#F7FAF8" }}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
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
            FAQ
          </span>
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: "#03260E" }}
          >
            Questions frequentes
          </h2>
          <p
            className="mt-4 text-base"
            style={{ color: "#144D2C", opacity: 0.6 }}
          >
            Tout ce que vous devez savoir sur l&apos;assurance decennale
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
                style={{ borderColor: "rgba(20, 77, 44, 0.08)" }}
              >
                <AccordionTrigger
                  className="py-5 text-left text-sm font-bold hover:no-underline"
                  style={{ color: "#03260E" }}
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent
                  className="pb-5 text-sm leading-relaxed"
                  style={{ color: "#144D2C", opacity: 0.6 }}
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
