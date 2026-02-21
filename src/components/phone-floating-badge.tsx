"use client";

import { Phone } from "lucide-react";

export function PhoneFloatingBadge() {
  return (
    <a
      href="tel:0644657005"
      className="fixed bottom-5 right-4 z-50 flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform active:scale-95 md:hidden"
      style={{ background: "#7C3AED", boxShadow: "0 4px 12px rgba(124, 58, 237, 0.3)" }}
    >
      <Phone className="h-4 w-4" />
      Appeler
    </a>
  );
}
