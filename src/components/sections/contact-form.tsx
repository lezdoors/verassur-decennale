"use client";

import { motion } from "motion/react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Telephone",
    value: "06 44 65 70 05",
    href: "tel:0644657005",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@verassur.fr",
    href: "mailto:contact@verassur.fr",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "66 Av. des Champs-Elysees, 75008 Paris",
    href: "#",
  },
  {
    icon: Clock,
    label: "Horaires",
    value: "Lun-Ven : 9h-18h",
    href: "#",
  },
];

export function ContactForm() {
  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span
            className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-4"
            style={{ background: "rgba(20, 77, 44, 0.06)", color: "#144D2C" }}
          >
            Contact
          </span>
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: "#03260E" }}
          >
            Parlons de votre projet
          </h2>
          <p
            className="mx-auto mt-4 max-w-xl text-base"
            style={{ color: "#144D2C", opacity: 0.6 }}
          >
            Remplissez le formulaire ou appelez-nous directement. Reponse
            garantie sous 24h.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((info, i) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                className="flex items-start gap-4 rounded-2xl p-4 transition-all hover:shadow-md"
                style={{
                  background: "rgba(20, 77, 44, 0.02)",
                  border: "1px solid rgba(20, 77, 44, 0.06)",
                }}
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: "rgba(20, 77, 44, 0.06)" }}
                >
                  <info.icon
                    className="h-4 w-4"
                    style={{ color: "#144D2C" }}
                  />
                </div>
                <div>
                  <p
                    className="text-xs font-medium uppercase tracking-wider"
                    style={{ color: "#144D2C", opacity: 0.4 }}
                  >
                    {info.label}
                  </p>
                  <p
                    className="mt-0.5 text-sm font-semibold"
                    style={{ color: "#03260E" }}
                  >
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="lg:col-span-3 space-y-5 rounded-3xl p-8"
            style={{
              background: "rgba(20, 77, 44, 0.02)",
              border: "1px solid rgba(20, 77, 44, 0.06)",
            }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  className="mb-1.5 block text-xs font-semibold"
                  style={{ color: "#03260E" }}
                >
                  Prenom
                </label>
                <Input
                  placeholder="Votre prenom"
                  className="rounded-xl border-slate-200 bg-white"
                />
              </div>
              <div>
                <label
                  className="mb-1.5 block text-xs font-semibold"
                  style={{ color: "#03260E" }}
                >
                  Nom
                </label>
                <Input
                  placeholder="Votre nom"
                  className="rounded-xl border-slate-200 bg-white"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  className="mb-1.5 block text-xs font-semibold"
                  style={{ color: "#03260E" }}
                >
                  Telephone
                </label>
                <Input
                  type="tel"
                  placeholder="06 XX XX XX XX"
                  className="rounded-xl border-slate-200 bg-white"
                />
              </div>
              <div>
                <label
                  className="mb-1.5 block text-xs font-semibold"
                  style={{ color: "#03260E" }}
                >
                  Metier
                </label>
                <Input
                  placeholder="Ex: Macon, Electricien..."
                  className="rounded-xl border-slate-200 bg-white"
                />
              </div>
            </div>
            <div>
              <label
                className="mb-1.5 block text-xs font-semibold"
                style={{ color: "#03260E" }}
              >
                Votre message (optionnel)
              </label>
              <Textarea
                placeholder="Decrivez votre besoin..."
                rows={4}
                className="rounded-xl border-slate-200 bg-white"
              />
            </div>
            <Button
              type="submit"
              className="w-full rounded-xl h-12 text-base font-bold transition-all hover:scale-[1.02]"
              style={{
                background: "#D4AF37",
                color: "#03260E",
                boxShadow: "0 4px 20px rgba(212, 175, 55, 0.3)",
              }}
            >
              Envoyer ma demande
              <Send className="ml-2 h-4 w-4" />
            </Button>
            <p
              className="text-center text-xs"
              style={{ color: "#144D2C", opacity: 0.4 }}
            >
              Vos donnees sont protegees. Reponse garantie sous 24h.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
