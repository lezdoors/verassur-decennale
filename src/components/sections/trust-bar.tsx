import { Users, Clock, Star, Shield } from "lucide-react";

const stats = [
  { icon: Users, value: "5 000+", label: "artisans proteges" },
  { icon: Star, value: "4.8/5", label: "312 avis clients" },
  { icon: Clock, value: "48h", label: "delai moyen attestation" },
  { icon: Shield, value: "15M\u20ac", label: "garantie maximale" },
];

export function TrustBar() {
  return (
    <section className="border-y border-slate-100 bg-slate-50/50 py-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50">
                <stat.icon className="h-4 w-4 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">{stat.value}</p>
                <p className="text-xs text-slate-500">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
