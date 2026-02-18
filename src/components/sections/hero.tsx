"use client";

import { motion } from "motion/react";
import { Shield, ArrowRight, Phone, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: "#03260E" }} />

      {/* Gradient mesh blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(212, 175, 55, 0.4) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-1/3 -left-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(20, 77, 44, 0.6) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-50 flex items-center justify-between px-6 lg:px-16 py-6"
      >
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6" style={{ color: "#D4AF37" }} />
          <span className="text-xl font-bold text-white">Verassur</span>
        </div>
        <nav className="hidden lg:flex items-center gap-8">
          {["Garanties", "Metiers", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium transition-opacity hover:opacity-100"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              {item}
            </a>
          ))}
        </nav>
        <a
          href="tel:0644657005"
          className="hidden sm:flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all hover:scale-105"
          style={{ background: "rgba(212, 175, 55, 0.15)", color: "#D4AF37", border: "1px solid rgba(212, 175, 55, 0.2)" }}
        >
          <Phone className="h-3.5 w-3.5" />
          06 44 65 70 05
        </a>
      </motion.div>

      {/* Main hero content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold"
            style={{
              background: "rgba(212, 175, 55, 0.1)",
              color: "#D4AF37",
              border: "1px solid rgba(212, 175, 55, 0.15)",
            }}
          >
            <Shield className="h-3.5 w-3.5" />
            Courtier agree ORIAS &middot; Tous profils acceptes
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight leading-[0.9]"
          >
            <span className="text-white">Votre assurance</span>
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #D4AF37 0%, #F5D77A 50%, #D4AF37 100%)",
              }}
            >
              decennale
            </span>
            <br />
            <span className="text-white">en 48h</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 text-lg sm:text-xl leading-relaxed mx-auto max-w-xl"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Artisans et entreprises du BTP, meme resilies ou malusses.
            Nous comparons +30 assureurs pour le meilleur tarif.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#devis"
              className="flex items-center gap-2 rounded-full px-8 py-4 text-base font-bold transition-all hover:scale-105"
              style={{
                background: "#D4AF37",
                color: "#03260E",
                boxShadow: "0 0 60px rgba(212, 175, 55, 0.3)",
              }}
            >
              Obtenir mon devis gratuit
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="tel:0644657005"
              className="flex items-center gap-2 rounded-full px-8 py-4 text-base font-medium transition-all hover:text-white"
              style={{
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              <Phone className="h-4 w-4" style={{ color: "#D4AF37" }} />
              Appeler un courtier
            </a>
          </motion.div>

          {/* Disclaimer */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-6 text-sm italic"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            *Gratuit et sans engagement — Courtier agree ORIAS N° 25004749
          </motion.p>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            {[
              "Attestation sous 48h",
              "Resilies acceptes",
              "Gratuit et sans engagement",
            ].map((text) => (
              <span key={text} className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4" style={{ color: "#D4AF37" }} />
                {text}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-10"
        style={{
          background: "linear-gradient(to top, white, transparent)",
        }}
      />
    </section>
  );
}
