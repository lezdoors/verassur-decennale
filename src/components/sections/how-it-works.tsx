import { FileText, PhoneCall, BadgeCheck } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Remplissez le formulaire",
    description: "2 minutes suffisent. Decrivez votre activite, votre profil et vos besoins.",
    time: "2 min",
  },
  {
    icon: PhoneCall,
    number: "02",
    title: "Un courtier vous rappelle",
    description: "Notre expert BTP analyse votre dossier et compare les offres de +30 assureurs.",
    time: "15 min",
  },
  {
    icon: BadgeCheck,
    number: "03",
    title: "Recevez votre attestation",
    description: "Votre attestation decennale vous est envoyee. Vous pouvez demarrer vos chantiers.",
    time: "48h",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Comment ca marche ?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-500">
            Obtenez votre assurance decennale en 3 etapes simples
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute left-1/2 top-12 hidden h-px w-full border-t-2 border-dashed border-slate-200 md:block" />
              )}

              <div className="relative rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                {/* Time badge */}
                <div className="absolute -top-3 right-4 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                  {step.time}
                </div>

                <div className="mb-4 flex items-center gap-3">
                  <span className="text-3xl font-black text-emerald-100">{step.number}</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
                    <step.icon className="h-5 w-5 text-emerald-600" />
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
