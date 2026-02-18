import { Shield, Scale, Wrench, HeadphonesIcon, FileCheck, Layers } from "lucide-react";

const guarantees = [
  {
    icon: Shield,
    title: "Garantie decennale batiment",
    description: "Jusqu'a 15 millions d'euros par sinistre pour les dommages structurels.",
  },
  {
    icon: Scale,
    title: "RC Professionnelle integree",
    description: "Responsabilite civile jusqu'a 5 millions d'euros incluse sans franchise.",
  },
  {
    icon: FileCheck,
    title: "Protection juridique BTP",
    description: "Defense et recours specialisee construction, incluse dans votre contrat.",
  },
  {
    icon: HeadphonesIcon,
    title: "Assistance 24h/24",
    description: "Equipe d'experts en construction disponible en cas de sinistre urgent.",
  },
  {
    icon: Wrench,
    title: "Garantie biennale",
    description: "Equipements et finitions couverts pendant 2 ans apres reception.",
  },
  {
    icon: Layers,
    title: "Tous corps d'etat",
    description: "Gros oeuvre, second oeuvre et finitions, tous couverts dans un seul contrat.",
  },
];

export function Guarantees() {
  return (
    <section id="garanties" className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Protection complete pour le BTP
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-500">
            Des garanties adaptees a chaque corps de metier du batiment
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guarantees.map((g) => (
            <div
              key={g.title}
              className="group rounded-2xl border border-slate-100 bg-white p-6 transition-all hover:border-emerald-100 hover:shadow-md"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 transition-colors group-hover:bg-emerald-100">
                <g.icon className="h-5 w-5 text-emerald-600" />
              </div>
              <h3 className="text-base font-semibold text-slate-900">{g.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{g.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
