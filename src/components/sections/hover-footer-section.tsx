"use client";
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Shield,
} from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";

export function HoverFooterSection() {
  const footerLinks = [
    {
      title: "Nos assurances",
      links: [
        { label: "Assurance Decennale", href: "#garanties" },
        { label: "RC Professionnelle", href: "#" },
        { label: "Tous les metiers", href: "#metiers" },
        { label: "Questions frequentes", href: "#faq" },
      ],
    },
    {
      title: "Informations",
      links: [
        { label: "Mentions legales", href: "#" },
        { label: "Politique de confidentialite", href: "#" },
        { label: "Conditions d'utilisation", href: "#" },
        { label: "A propos", href: "#" },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <Phone size={18} style={{ color: "#D4AF37" }} />,
      text: "06 44 65 70 05",
      href: "tel:0644657005",
    },
    {
      icon: <Mail size={18} style={{ color: "#D4AF37" }} />,
      text: "contact@verassur.fr",
      href: "mailto:contact@verassur.fr",
    },
    {
      icon: <MapPin size={18} style={{ color: "#D4AF37" }} />,
      text: "66 Av. des Champs-Elysees, 75008 Paris",
    },
  ];

  return (
    <footer className="relative h-fit rounded-3xl overflow-hidden mx-4 mb-4 sm:mx-8 sm:mb-8" style={{ background: "rgba(3, 38, 14, 0.1)" }}>
      <div className="max-w-7xl mx-auto p-10 sm:p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-7 w-7" style={{ color: "#D4AF37" }} />
              <span className="text-white text-2xl font-bold">Verassur</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              Courtier agree ORIAS, specialise en assurance decennale pour les
              professionnels du BTP. Tous profils acceptes.
            </p>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
              ORIAS N° 25004749
            </p>
            <a
              href="tel:0644657005"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-all hover:scale-105 w-fit"
              style={{ background: "#D4AF37", color: "#03260E" }}
            >
              <Phone className="h-3.5 w-3.5" />
              Appeler
            </a>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-6" style={{ color: "#D4AF37" }}>
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6" style={{ color: "#D4AF37" }}>
              Contact
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr style={{ borderColor: "rgba(255,255,255,0.08)" }} className="my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0" style={{ color: "rgba(255,255,255,0.25)" }}>
          <p>&copy; {new Date().getFullYear()} Verassur. Tous droits reserves.</p>
          <p>Courtier agree ORIAS N° 25004749</p>
        </div>
      </div>

      {/* Text hover effect — desktop only */}
      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36">
        <TextHoverEffect text="Verassur" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
