"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cookie, X } from "lucide-react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-5 left-1/2 z-[60] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 rounded-2xl border border-neutral-200 bg-white p-5 shadow-2xl sm:bottom-6"
        >
          <button
            onClick={decline}
            className="absolute right-3 top-3 rounded-full p-1 text-neutral-400 transition-colors hover:text-neutral-600"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
              <Cookie className="h-5 w-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-neutral-900">
                On utilise des cookies
              </p>
              <p className="mt-1 text-xs leading-relaxed text-neutral-500">
                Pour ameliorer votre experience et analyser le trafic. Aucune
                donnee personnelle n&apos;est partagee sans votre accord.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <button
                  onClick={accept}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-medium text-white transition-all hover:bg-blue-700"
                >
                  Accepter
                </button>
                <button
                  onClick={decline}
                  className="rounded-lg border border-neutral-200 px-4 py-2 text-xs font-medium text-neutral-600 transition-all hover:bg-neutral-50"
                >
                  Refuser
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
