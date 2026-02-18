import Link from "next/link";
import { Shield, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-emerald-400" />
              <span className="text-lg font-bold text-white">Verassur</span>
            </div>
            <p className="text-sm leading-relaxed">
              Courtier agree ORIAS, specialise en assurance decennale pour les professionnels du BTP.
            </p>
            <p className="text-xs text-slate-500">ORIAS N° 25004749</p>
          </div>

          {/* Assurances */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Nos assurances</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Assurance Decennale</Link></li>
              <li><span className="text-slate-500">RC Professionnelle</span></li>
              <li><span className="text-slate-500">Assurance Auto</span></li>
              <li><span className="text-slate-500">Mutuelle Sante</span></li>
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Informations</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Mentions legales</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Politique de confidentialite</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Conditions d&apos;utilisation</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">A propos</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-emerald-400" />
                <a href="tel:0644657005" className="hover:text-white transition-colors">06 44 65 70 05</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-emerald-400" />
                <a href="mailto:contact@verassur.fr" className="hover:text-white transition-colors">contact@verassur.fr</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-emerald-400 mt-0.5" />
                <span>66 Avenue des Champs-Elysees<br />75008 Paris, France</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Verassur. Tous droits reserves. | Courtier agree ORIAS N° 25004749
        </div>
      </div>
    </footer>
  );
}
