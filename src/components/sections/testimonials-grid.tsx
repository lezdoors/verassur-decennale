"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

function Initials({ name, className }: { name: string; className?: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
  return (
    <div
      className={`flex items-center justify-center rounded-full bg-violet-600 text-sm font-semibold text-white ${className ?? "size-12"}`}
    >
      {initials}
    </div>
  );
}

export function TestimonialsGrid() {
  return (
    <section className="bg-neutral-50 py-16 md:py-32">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-8"
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5">
            <Stars count={5} />
            <span className="text-xs font-medium text-amber-700">
              4.9/5 en moyenne
            </span>
          </div>
          <h2 className="text-4xl font-medium text-neutral-900 lg:text-5xl">
            Ils nous font confiance
          </h2>
          <p className="text-neutral-500">
            Des artisans BTP de toute la France font appel a AssureNao pour
            proteger leurs chantiers. Voici ce qu&apos;ils en disent.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2"
        >
          {/* Featured testimonial — spans 2 cols, 2 rows */}
          <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
            <CardHeader>
              <Stars />
            </CardHeader>
            <CardContent>
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-xl font-medium text-neutral-800">
                  Apres plusieurs comparatifs infructueux, je me suis tourne
                  vers AssureNao qui a fait le boulot avec rapidite et
                  efficacite. Mon courtier a compare plus de 30 offres et m&apos;a
                  trouve un tarif bien en dessous de ce que j&apos;avais avant.
                  Attestation recue en 2 jours. Je recommande les yeux fermes.
                </p>
                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Initials name="Jean-Michel L" />
                  <div>
                    <cite className="text-sm font-medium text-neutral-900 not-italic">
                      Jean-Michel L.
                    </cite>
                    <span className="block text-sm text-neutral-500">
                      Macon depuis 15 ans &middot; Lyon
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>

          {/* Wide testimonial — spans 2 cols */}
          <Card className="md:col-span-2">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <div>
                  <Stars />
                  <p className="mt-4 text-xl font-medium text-neutral-800">
                    Resiliee par mon ancien assureur suite a un sinistre,
                    AssureNao a pris le temps d&apos;etudier mon dossier et m&apos;a
                    trouve une solution adaptee en moins de 48h.
                  </p>
                </div>
                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Initials name="Sophie M" />
                  <div>
                    <cite className="text-sm font-medium text-neutral-900 not-italic">
                      Sophie M.
                    </cite>
                    <span className="block text-sm text-neutral-500">
                      Electricienne auto-entrepreneur &middot; Marseille
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>

          {/* Small testimonial */}
          <Card>
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <div>
                  <Stars />
                  <p className="mt-4 text-neutral-700">
                    Le courtier m&apos;a rappele en 15 minutes. Il connaissait
                    parfaitement les besoins d&apos;un peintre. Devis clair, pas de
                    mauvaises surprises.
                  </p>
                </div>
                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Initials name="Antoine R" />
                  <div>
                    <cite className="text-sm font-medium text-neutral-900 not-italic">
                      Antoine R.
                    </cite>
                    <span className="block text-sm text-neutral-500">
                      Peintre &middot; Paris
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>

          {/* Small testimonial */}
          <Card>
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <div>
                  <Stars />
                  <p className="mt-4 text-neutral-700">
                    Apres 3 refus d&apos;assureurs classiques a cause de mon malus,
                    AssureNao m&apos;a trouvee une couverture complete en 48h. Tarif
                    correct.
                  </p>
                </div>
                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Initials name="Nadia K" />
                  <div>
                    <cite className="text-sm font-medium text-neutral-900 not-italic">
                      Nadia K.
                    </cite>
                    <span className="block text-sm text-neutral-500">
                      Plombiere &middot; Bordeaux
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
