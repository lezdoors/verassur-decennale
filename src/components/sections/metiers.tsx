import {
  Hammer,
  Zap,
  Droplets,
  PaintBucket,
  Home,
  Wrench,
  Layers,
  TreePine,
  Building2,
  HardHat,
} from "lucide-react";

const metiers = [
  { icon: Hammer, name: "Macon", type: "Gros oeuvre" },
  { icon: Zap, name: "Electricien", type: "Second oeuvre" },
  { icon: Droplets, name: "Plombier", type: "Second oeuvre" },
  { icon: PaintBucket, name: "Peintre", type: "Finitions" },
  { icon: Home, name: "Couvreur", type: "Gros oeuvre" },
  { icon: Wrench, name: "Menuisier", type: "Second oeuvre" },
  { icon: Layers, name: "Carreleur", type: "Finitions" },
  { icon: TreePine, name: "Charpentier", type: "Gros oeuvre" },
  { icon: Building2, name: "Terrassier", type: "Gros oeuvre" },
  { icon: HardHat, name: "Autre metier", type: "Tous BTP" },
];

export function Metiers() {
  return (
    <section id="metiers" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Tous les metiers du BTP couverts
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-500">
            Que vous soyez artisan, auto-entrepreneur ou entreprise, nous avons une solution adaptee
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {metiers.map((m) => (
            <div
              key={m.name}
              className="group flex flex-col items-center gap-2 rounded-xl border border-slate-100 bg-white p-4 text-center transition-all hover:border-emerald-200 hover:bg-emerald-50/50 hover:shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-50 transition-colors group-hover:bg-emerald-100">
                <m.icon className="h-5 w-5 text-slate-500 transition-colors group-hover:text-emerald-600" />
              </div>
              <span className="text-sm font-semibold text-slate-800">{m.name}</span>
              <span className="text-[11px] text-slate-400">{m.type}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
