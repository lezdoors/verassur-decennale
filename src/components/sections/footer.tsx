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
    <footer className="w-full border-t" style={{ borderColor: "rgba(20, 77, 44, 0.08)" }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="mx-auto max-w-7xl grid gap-8 px-6 py-12 md:px-8 lg:grid-cols-4"
        style={{ borderLeft: "1px solid rgba(20, 77, 44, 0.06)", borderRight: "1px solid rgba(20, 77, 44, 0.06)" }}
      >
        {/* Brand */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="h-10 w-10 rounded-3xl flex items-center justify-center"
              style={{ background: "#144D2C" }}
            >
              <Shield className="h-5 w-5" style={{ color: "#D4AF37" }} />
            </motion.div>
            <span className="font-bold text-xl" style={{ color: "#03260E" }}>
              Verassur
            </span>
          </Link>
          <p className="text-sm" style={{ color: "#144D2C", opacity: 0.5 }}>
            Courtier agree ORIAS, specialise en assurance decennale pour les
            professionnels du BTP. Tous profils acceptes, meme resilies ou
            malusses.
          </p>
          <div className="flex items-center gap-3 pt-1">
            <a
              href="tel:0644657005"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all hover:scale-105"
              style={{ background: "#D4AF37", color: "#03260E" }}
            >
              <Phone className="h-3.5 w-3.5" />
              06 44 65 70 05
            </a>
          </div>
        </div>

        {/* Nos assurances + Metiers */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-1">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider" style={{ color: "#03260E" }}>
              Nos assurances
            </h3>
            <nav className="mt-4 flex flex-col space-y-2.5 text-sm">
              <Link href="#garanties" className="transition-colors hover:text-foreground" style={{ color: "#144D2C", opacity: 0.5 }}>
                Assurance Decennale
              </Link>
              <Link href="#" className="transition-colors hover:text-foreground" style={{ color: "#144D2C", opacity: 0.5 }}>
                RC Professionnelle
              </Link>
              <Link href="#metiers" className="transition-colors hover:text-foreground" style={{ color: "#144D2C", opacity: 0.5 }}>
                Tous les metiers BTP
              </Link>
              <Link href="#faq" className="transition-colors hover:text-foreground" style={{ color: "#144D2C", opacity: 0.5 }}>
                Questions frequentes
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider" style={{ color: "#03260E" }}>
              Informations
            </h3>
            <nav className="mt-4 flex flex-col space-y-2.5 text-sm">
              <Link href="#" className="transition-colors hover:text-foreground" style={{ color: "#144D2C", opacity: 0.5 }}>
                Mentions legales
              </Link>
              <Link href="#" className="transition-colors hover:text-foreground" style={{ color: "#144D2C", opacity: 0.5 }}>
                Politique de confidentialite
              </Link>
              <Link href="#" className="transition-colors hover:text-foreground" style={{ color: "#144D2C", opacity: 0.5 }}>
                Conditions d&apos;utilisation
              </Link>
              <Link href="#" className="transition-colors hover:text-foreground" style={{ color: "#144D2C", opacity: 0.5 }}>
                A propos
              </Link>
            </nav>
          </div>
        </div>

        {/* Contact */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-1">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider" style={{ color: "#03260E" }}>
              Contact
            </h3>
            <nav className="mt-4 flex flex-col space-y-3 text-sm">
              <a href="tel:0644657005" className="flex items-center gap-2 transition-colors hover:text-foreground" style={{ color: "#144D2C", opacity: 0.5 }}>
                <Phone className="h-4 w-4" style={{ color: "#D4AF37" }} />
                06 44 65 70 05
              </a>
              <a href="mailto:contact@verassur.fr" className="flex items-center gap-2 transition-colors hover:text-foreground" style={{ color: "#144D2C", opacity: 0.5 }}>
                <Mail className="h-4 w-4" style={{ color: "#D4AF37" }} />
                contact@verassur.fr
              </a>
              <span className="flex items-center gap-2" style={{ color: "#144D2C", opacity: 0.5 }}>
                <MapPin className="h-4 w-4 shrink-0" style={{ color: "#D4AF37" }} />
                66 Av. des Champs-Elysees, 75008 Paris
              </span>
            </nav>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider" style={{ color: "#03260E" }}>
              Juridique
            </h3>
            <nav className="mt-4 flex flex-col space-y-2.5 text-sm">
              <span style={{ color: "#144D2C", opacity: 0.5 }}>
                ORIAS N° 25004749
              </span>
              <Link href="#" className="transition-colors hover:text-foreground" style={{ color: "#144D2C", opacity: 0.5 }}>
                CGV
              </Link>
              <Link href="#" className="transition-colors hover:text-foreground" style={{ color: "#144D2C", opacity: 0.5 }}>
                Politique cookies
              </Link>
            </nav>
          </div>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider" style={{ color: "#03260E" }}>
            Restez informe
          </h3>
          <p className="text-sm" style={{ color: "#144D2C", opacity: 0.5 }}>
            Recevez nos conseils et actualites sur l&apos;assurance decennale.
          </p>
          <form className="flex space-x-2" onSubmit={(e) => e.preventDefault()}>
            <Input
              type="email"
              placeholder="Votre email"
              className="max-w-lg flex-1 rounded-3xl border-slate-200"
            />
            <Button
              type="submit"
              className="rounded-3xl"
              style={{ background: "#144D2C", color: "white" }}
            >
              OK
            </Button>
          </form>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(20, 77, 44, 0.06)" }}>
        <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-4 py-6 px-6 md:h-16 md:flex-row md:py-0">
          <p className="text-xs" style={{ color: "#144D2C", opacity: 0.4 }}>
            &copy; {new Date().getFullYear()} Verassur. Tous droits reserves.
          </p>
          <p className="text-xs" style={{ color: "#144D2C", opacity: 0.4 }}>
            Courtier agree ORIAS N° 25004749 &middot; 66 Av. des Champs-Elysees, 75008 Paris
          </p>
        </div>
      </div>
    </footer>
  );
}
