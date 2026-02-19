"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Shield, Phone, Mail, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function Footer() {
  return (
    <footer
      className="w-full"
      style={{
        background: "#111827",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="mx-auto max-w-7xl grid gap-8 px-6 py-12 md:px-8 lg:grid-cols-4"
      >
        {/* Brand */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="h-10 w-10 flex items-center justify-center rounded-sm"
              style={{ background: "rgba(212, 175, 55, 0.15)" }}
            >
              <Shield className="h-5 w-5" style={{ color: "#D4AF37" }} />
            </motion.div>
            <span className="font-medium text-xl text-white">
              AssureNao
            </span>
          </Link>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
            Courtier agree ORIAS, specialise en assurance decennale pour les
            professionnels du BTP. Tous profils acceptes, meme resilies ou
            malusses.
          </p>
          <div className="flex items-center gap-3 pt-1">
            <a
              href="tel:0644657005"
              className="inline-flex items-center gap-2 rounded-sm px-4 py-2 text-sm font-medium transition-all hover:scale-105"
              style={{ background: "#D4AF37", color: "#111827" }}
            >
              <Phone className="h-3.5 w-3.5" />
              06 44 65 70 05
            </a>
          </div>
        </div>

        {/* Nos assurances + Metiers */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-1">
          <div>
            <h3
              className="text-xs font-medium uppercase tracking-wider"
              style={{ color: "#D4AF37" }}
            >
              Nos assurances
            </h3>
            <nav className="mt-4 flex flex-col space-y-2.5 text-sm">
              <Link href="#garanties" className="transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.45)" }}>
                Assurance Decennale
              </Link>
              <Link href="#" className="transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.45)" }}>
                RC Professionnelle
              </Link>
              <Link href="#metiers" className="transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.45)" }}>
                Tous les metiers BTP
              </Link>
              <Link href="#faq" className="transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.45)" }}>
                Questions frequentes
              </Link>
            </nav>
          </div>
          <div>
            <h3
              className="text-xs font-medium uppercase tracking-wider"
              style={{ color: "#D4AF37" }}
            >
              Informations
            </h3>
            <nav className="mt-4 flex flex-col space-y-2.5 text-sm">
              <Link href="#" className="transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.45)" }}>
                Mentions legales
              </Link>
              <Link href="#" className="transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.45)" }}>
                Politique de confidentialite
              </Link>
              <Link href="#" className="transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.45)" }}>
                Conditions d&apos;utilisation
              </Link>
              <Link href="#" className="transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.45)" }}>
                A propos
              </Link>
            </nav>
          </div>
        </div>

        {/* Contact */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-1">
          <div>
            <h3
              className="text-xs font-medium uppercase tracking-wider"
              style={{ color: "#D4AF37" }}
            >
              Contact
            </h3>
            <nav className="mt-4 flex flex-col space-y-3 text-sm">
              <a href="tel:0644657005" className="flex items-center gap-2 transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.45)" }}>
                <Phone className="h-4 w-4" style={{ color: "#D4AF37" }} />
                06 44 65 70 05
              </a>
              <a href="mailto:contact@assurenao.fr" className="flex items-center gap-2 transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.45)" }}>
                <Mail className="h-4 w-4" style={{ color: "#D4AF37" }} />
                contact@assurenao.fr
              </a>
              <span className="flex items-center gap-2" style={{ color: "rgba(255,255,255,0.45)" }}>
                <MapPin className="h-4 w-4 shrink-0" style={{ color: "#D4AF37" }} />
                66 Av. des Champs-Elysees, 75008 Paris
              </span>
            </nav>
          </div>
          <div>
            <h3
              className="text-xs font-medium uppercase tracking-wider"
              style={{ color: "#D4AF37" }}
            >
              Juridique
            </h3>
            <nav className="mt-4 flex flex-col space-y-2.5 text-sm">
              <span style={{ color: "rgba(255,255,255,0.45)" }}>
                ORIAS N° 25004749
              </span>
              <Link href="#" className="transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.45)" }}>
                CGV
              </Link>
              <Link href="#" className="transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.45)" }}>
                Politique cookies
              </Link>
            </nav>
          </div>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h3
            className="text-xs font-medium uppercase tracking-wider"
            style={{ color: "#D4AF37" }}
          >
            Restez informe
          </h3>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
            Recevez nos conseils et actualites sur l&apos;assurance decennale.
          </p>
          <form className="flex space-x-2" onSubmit={(e) => e.preventDefault()}>
            <Input
              type="email"
              placeholder="Votre email"
              className="max-w-lg flex-1 rounded-sm bg-transparent text-white placeholder:text-white/30"
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
            />
            <Button
              type="submit"
              className="rounded-sm font-medium"
              style={{ background: "#D4AF37", color: "#111827" }}
            >
              OK
            </Button>
          </form>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-4 py-6 px-6 md:h-16 md:flex-row md:py-0">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            &copy; {new Date().getFullYear()} AssureNao. Tous droits reserves.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            Courtier agree ORIAS N° 25004749 &middot; 66 Av. des Champs-Elysees, 75008 Paris
          </p>
        </div>
      </div>
    </footer>
  );
}
