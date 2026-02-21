"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Footer() {
  return (
    <footer className="w-full border-t border-neutral-800 bg-neutral-950">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="mx-auto max-w-7xl grid gap-8 px-6 py-12 md:px-8 lg:grid-cols-4"
      >
        {/* Brand */}
        <div className="space-y-4">
          <Link href="/">
            <Logo variant="light" className="h-7 w-auto" />
          </Link>
          <p className="text-sm text-neutral-500">
            Courtier agree ORIAS, specialise en assurance decennale pour les
            professionnels du BTP. Tous profils acceptes, meme resilies ou
            malusses.
          </p>
          <a
            href="tel:0644657005"
            className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-teal-700"
          >
            <Phone className="h-3.5 w-3.5" />
            06 44 65 70 05
          </a>
        </div>

        {/* Nos assurances */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-teal-400">
            Nos assurances
          </h3>
          <nav className="mt-4 flex flex-col space-y-2.5 text-sm">
            <Link href="/garanties" className="text-neutral-500 transition-colors hover:text-white">Assurance Decennale</Link>
            <Link href="#" className="text-neutral-500 transition-colors hover:text-white">RC Professionnelle</Link>
            <Link href="/metiers" className="text-neutral-500 transition-colors hover:text-white">Tous les metiers BTP</Link>
            <Link href="/faq" className="text-neutral-500 transition-colors hover:text-white">Questions frequentes</Link>
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-teal-400">
            Contact
          </h3>
          <nav className="mt-4 flex flex-col space-y-3 text-sm">
            <a href="tel:0644657005" className="flex items-center gap-2 text-neutral-500 transition-colors hover:text-white">
              <Phone className="h-4 w-4" />
              06 44 65 70 05
            </a>
            <a href="mailto:contact@assurenao.fr" className="flex items-center gap-2 text-neutral-500 transition-colors hover:text-white">
              <Mail className="h-4 w-4" />
              contact@assurenao.fr
            </a>
            <span className="flex items-center gap-2 text-neutral-500">
              <MapPin className="h-4 w-4 shrink-0" />
              66 Av. des Champs-Elysees, 75008 Paris
            </span>
          </nav>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-teal-400">
            Restez informe
          </h3>
          <p className="text-sm text-neutral-500">
            Recevez nos conseils sur l&apos;assurance decennale.
          </p>
          <form className="flex space-x-2" onSubmit={(e) => e.preventDefault()}>
            <Input
              type="email"
              placeholder="Votre email"
              className="max-w-lg flex-1 rounded-lg border-neutral-800 bg-neutral-900 text-white placeholder:text-neutral-600"
            />
            <Button
              type="submit"
              className="rounded-lg bg-teal-600 font-medium text-white hover:bg-teal-700"
            >
              OK
            </Button>
          </form>
        </div>
      </motion.div>

      <div className="border-t border-neutral-800">
        <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-4 py-6 px-6 md:h-16 md:flex-row md:py-0">
          <p className="text-xs text-neutral-600">
            &copy; {new Date().getFullYear()} AssureNao. Tous droits reserves.
          </p>
          <p className="text-xs text-neutral-600">
            Courtier agree ORIAS N° 25004749 &middot; 66 Av. des Champs-Elysees, 75008 Paris
          </p>
        </div>
      </div>
    </footer>
  );
}
