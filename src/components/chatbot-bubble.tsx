"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, Phone } from "lucide-react";

export function ChatbotBubble() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-4 z-50 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="mb-3 w-80 rounded-2xl border border-neutral-200 bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between rounded-t-2xl bg-gold px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                  <MessageCircle className="h-4 w-4 text-navy" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">AssureNao</p>
                  <p className="text-xs text-navy/60">
                    Reponse sous 24h
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1.5 transition-colors hover:bg-white/20"
              >
                <X className="h-4 w-4 text-navy" />
              </button>
            </div>

            {/* Body */}
            <div className="p-5">
              <div className="rounded-xl bg-neutral-50 p-4">
                <p className="text-sm leading-relaxed text-neutral-700">
                  Bonjour ! Comment pouvons-nous vous aider avec votre assurance
                  decennale ?
                </p>
              </div>

              <div className="mt-4 space-y-2">
                <a
                  href="/devis"
                  className="flex items-center gap-3 rounded-xl border border-neutral-200 p-3 text-sm font-medium text-neutral-700 transition-all hover:border-gold/30 hover:bg-gold/10"
                >
                  <Send className="h-4 w-4 text-navy-light" />
                  Obtenir un devis gratuit
                </a>
                <a
                  href="tel:0644657005"
                  className="flex items-center gap-3 rounded-xl border border-neutral-200 p-3 text-sm font-medium text-neutral-700 transition-all hover:border-gold/30 hover:bg-gold/10"
                >
                  <Phone className="h-4 w-4 text-navy-light" />
                  Appeler le 06 44 65 70 05
                </a>
              </div>

              <p className="mt-4 text-center text-xs text-neutral-400">
                Courtier agree ORIAS N° 25004749
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bubble button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-navy shadow-lg transition-shadow hover:shadow-xl"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="h-5 w-5" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="h-5 w-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
