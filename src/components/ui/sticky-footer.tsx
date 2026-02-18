"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "motion/react";
import { Phone, Mail, MapPin, Shield } from "lucide-react";

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}
interface FooterLinkGroup {
  label: string;
  links: FooterLink[];
}

type StickyFooterProps = React.ComponentProps<"footer">;

export function StickyFooter({ className, ...props }: StickyFooterProps) {
  return (
    <footer
      className={cn("relative h-[720px] w-full", className)}
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      {...props}
    >
      <div className="fixed bottom-0 h-[720px] w-full">
        <div className="sticky top-[calc(100vh-720px)] h-full overflow-y-auto">
          <div className="relative flex size-full flex-col justify-between gap-5 border-t px-4 py-8 md:px-12"
            style={{ background: "#03260E" }}
          >
            <div
              aria-hidden
              className="absolute inset-0 isolate z-0 contain-strict"
            >
              <div className="absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full"
                style={{ background: "radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(212, 175, 55, 0.08) 0, rgba(20, 77, 44, 0.04) 50%, rgba(20, 77, 44, 0.01) 80%)" }}
              />
              <div className="absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full"
                style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(20, 77, 44, 0.06) 0, rgba(20, 77, 44, 0.01) 80%, transparent 100%)" }}
              />
              <div className="absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 rounded-full"
                style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(212, 175, 55, 0.04) 0, rgba(20, 77, 44, 0.01) 80%, transparent 100%)" }}
              />
            </div>
            <div className="mt-10 flex flex-col gap-8 md:flex-row xl:mt-0 relative z-10">
              <AnimatedContainer className="w-full max-w-sm min-w-2xs space-y-4">
                <div className="flex items-center gap-2">
                  <Shield className="size-8" style={{ color: "#D4AF37" }} />
                  <span className="text-xl font-bold text-white">Verassur</span>
                </div>
                <p className="mt-8 text-sm md:mt-0" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Courtier agree ORIAS, specialise en assurance decennale pour les
                  professionnels du BTP. Tous profils acceptes, meme resilies ou malusses.
                </p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                  ORIAS N° 25004749
                </p>
                <div className="flex items-center gap-2 pt-2">
                  <a href="tel:0644657005" className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all hover:scale-105"
                    style={{ background: "#D4AF37", color: "#03260E" }}
                  >
                    <Phone className="size-3.5" />
                    06 44 65 70 05
                  </a>
                </div>
              </AnimatedContainer>
              {footerLinkGroups.map((group, index) => (
                <AnimatedContainer
                  key={group.label}
                  delay={0.1 + index * 0.1}
                  className="w-full"
                >
                  <div className="mb-10 md:mb-0">
                    <h3 className="text-sm uppercase tracking-wider" style={{ color: "#D4AF37" }}>
                      {group.label}
                    </h3>
                    <ul className="mt-4 space-y-2 text-sm md:text-xs lg:text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                      {group.links.map((link) => (
                        <li key={link.title}>
                          <a
                            href={link.href}
                            className="inline-flex items-center transition-all duration-300 hover:text-white"
                          >
                            {link.icon && <link.icon className="me-1 size-4" />}
                            {link.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedContainer>
              ))}
            </div>
            <div className="relative z-10 flex flex-col items-center justify-between gap-2 border-t pt-2 text-sm md:flex-row"
              style={{ borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.3)" }}
            >
              <p>&copy; {new Date().getFullYear()} Verassur. Tous droits reserves.</p>
              <p>Courtier agree ORIAS N° 25004749</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const footerLinkGroups: FooterLinkGroup[] = [
  {
    label: "Nos assurances",
    links: [
      { title: "Assurance Decennale", href: "/" },
      { title: "RC Professionnelle", href: "#" },
      { title: "Assurance Auto", href: "#" },
      { title: "Mutuelle Sante", href: "#" },
    ],
  },
  {
    label: "Informations",
    links: [
      { title: "Mentions legales", href: "#" },
      { title: "Politique de confidentialite", href: "#" },
      { title: "Conditions d'utilisation", href: "#" },
      { title: "A propos", href: "#" },
    ],
  },
  {
    label: "Contact",
    links: [
      { title: "06 44 65 70 05", href: "tel:0644657005", icon: Phone },
      { title: "contact@verassur.fr", href: "mailto:contact@verassur.fr", icon: Mail },
      { title: "66 Av. des Champs-Elysees, 75008 Paris", href: "#", icon: MapPin },
    ],
  },
];

type AnimatedContainerProps = React.ComponentProps<typeof motion.div> & {
  children?: React.ReactNode;
  delay?: number;
};

function AnimatedContainer({
  delay = 0.1,
  children,
  ...props
}: AnimatedContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return children;
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
