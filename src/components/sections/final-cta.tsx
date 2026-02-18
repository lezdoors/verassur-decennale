import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="devis" className="py-16 sm:py-24" style={{ background: "#03260E" }}>
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Pret a proteger vos chantiers ?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
          Obtenez votre devis personnalise en 2 minutes. Gratuit, sans engagement, et avec un courtier dedie a votre dossier.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-full px-7 text-base font-semibold shadow-lg hover:scale-105 transition-all"
            style={{ background: "#D4AF37", color: "#03260E", boxShadow: "0 4px 20px rgba(212, 175, 55, 0.3)" }}
          >
            <a href="#devis">
              Obtenir mon devis gratuit
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <a
            href="tel:0644657005"
            className="inline-flex h-12 items-center gap-2.5 rounded-full border px-7 text-base font-medium transition-colors hover:text-white"
            style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.6)" }}
          >
            <Phone className="h-4 w-4" />
            06 44 65 70 05
          </a>
        </div>

        <p className="mt-6 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
          Courtier agree ORIAS N° 25004749 &middot; Gratuit et sans engagement &middot; Reponse sous 48h
        </p>
      </div>
    </section>
  );
}
