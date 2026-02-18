import { UserCheck, TrendingDown, Clock4, Headphones } from "lucide-react";

const reasons = [
  {
    icon: UserCheck,
    title: "Tous profils acceptes",
    description:
      "Resilies, malusses, sinistres multiples : nous trouvons une solution pour chaque artisan, la ou les autres refusent.",
    highlight: "Resilies inclus",
  },
  {
    icon: TrendingDown,
    title: "Economies garanties",
    description:
      "En comparant +30 assureurs specialises BTP, nous obtenons en moyenne -35% sur votre prime annuelle.",
    highlight: "-35% en moyenne",
  },
  {
    icon: Clock4,
    title: "Attestation rapide",
    description:
      "Votre attestation decennale est delivree sous 48h. Vous pouvez demarrer vos chantiers sans attendre.",
    highlight: "Sous 48h",
  },
  {
    icon: Headphones,
    title: "Accompagnement expert",
    description:
      "Un courtier dedie, specialiste du BTP, vous accompagne de A a Z. Conseil personnalise, pas de robot.",
    highlight: "Courtier dedie",
  },
];

export function WhyUs() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Pourquoi choisir Verassur ?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-500">
            Des avantages concrets pour les professionnels du batiment
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50">
                <r.icon className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <div className="mb-1 inline-block rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-600">
                  {r.highlight}
                </div>
                <h3 className="text-base font-semibold text-slate-900">{r.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{r.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
