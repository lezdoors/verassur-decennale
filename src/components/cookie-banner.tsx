"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

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
          className="fixed bottom-5 left-1/2 z-[60] w-80 -translate-x-1/2 rounded-lg border border-neutral-200 bg-white p-4 text-sm text-neutral-500 shadow-2xl sm:bottom-6 md:p-6"
        >
          <div className="relative flex w-full items-center justify-center gap-2 pb-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="absolute -top-12"
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/cookies/cookieImage2.svg"
              alt="Cookie"
            />
            <h2 className="w-full pt-3 text-left text-xl font-medium text-neutral-800">
              Votre vie privee compte
            </h2>
          </div>
          <p>
            Nous utilisons des cookies pour ameliorer votre experience et
            analyser le trafic. Pour en savoir plus, consultez notre{" "}
            <a href="#" className="font-medium underline">
              Politique de confidentialite.
            </a>
          </p>
          <div className="mt-6 flex w-full items-center justify-between gap-3">
            <button
              onClick={decline}
              className="underline transition-colors hover:text-neutral-800"
            >
              Refuser
            </button>
            <button
              type="button"
              onClick={accept}
              className="rounded bg-gold px-6 py-2 font-medium text-navy transition active:scale-95 hover:bg-gold-dark"
            >
              Accepter
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
