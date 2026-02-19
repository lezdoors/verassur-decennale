import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { PhoneFloatingBadge } from "@/components/phone-floating-badge";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Assurance Decennale BTP | Devis Gratuit en 2 min | AssureNao",
  description:
    "Obtenez votre assurance decennale en 48h. Tous profils acceptes, meme resilies ou malusses. Courtier agree ORIAS. Devis gratuit et sans engagement.",
  keywords: [
    "assurance decennale",
    "assurance decennale BTP",
    "decennale artisan",
    "assurance decennale resilie",
    "decennale malus",
    "garantie decennale",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <PhoneFloatingBadge />
      </body>
    </html>
  );
}
