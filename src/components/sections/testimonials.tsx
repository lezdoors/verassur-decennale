import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jean-Michel L.",
    role: "Macon depuis 15 ans",
    city: "Lyon",
    rating: 5,
    text: "Avec Verassur, j'economise 2 400\u20ac par an sur ma decennale tout en ayant des garanties bien superieures. L'expertise BTP de leur equipe fait vraiment la difference.",
    tag: "Decennale",
  },
  {
    name: "Sophie M.",
    role: "Electricienne auto-entrepreneur",
    city: "Marseille",
    rating: 5,
    text: "Resiliee par mon ancien assureur suite a un sinistre, Verassur a pris le temps d'etudier mon dossier et m'a trouve une solution adaptee en moins de 48h.",
    tag: "Resiliee",
  },
  {
    name: "Antoine R.",
    role: "Entreprise peinture (5 salaries)",
    city: "Paris",
    rating: 5,
    text: "Le courtier m'a rappele en 15 minutes. Il connaissait parfaitement les besoins d'un peintre en batiment. Devis clair, pas de mauvaises surprises. Je recommande.",
    tag: "Entreprise",
  },
  {
    name: "Nadia K.",
    role: "Plombiere-chauffagiste",
    city: "Bordeaux",
    rating: 5,
    text: "Apres 3 refus d'assureurs classiques a cause de mon malus, Verassur m'a trouvee une couverture complete en 48h. Service impeccable et tarif correct.",
    tag: "Malussee",
  },
];

export function Testimonials() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Ils nous font confiance
          </h2>
          <p className="mt-3 text-base text-slate-500">
            Plus de 5 000 artisans proteges &middot; Note moyenne 4.8/5
          </p>
          {/* Stars */}
          <div className="mt-4 flex items-center justify-center gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="h-5 w-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative rounded-2xl border border-slate-100 bg-white p-6 transition-shadow hover:shadow-md"
            >
              {/* Tag */}
              <span className="absolute right-4 top-4 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-600">
                {t.tag}
              </span>

              {/* Stars */}
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm leading-relaxed text-slate-600">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">
                    {t.role} &middot; {t.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
