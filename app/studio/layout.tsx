import type { Metadata } from "next";
import { inter, display, emphasis, dmMono } from "@/lib/fonts";
import "../globals.css";

// Outils internes ACTC : pas de navigation, pas d'indexation.

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${dmMono.variable} ${display.variable} ${emphasis.variable}`}
    >
      <body className="font-sans bg-alabaster text-midnight antialiased">{children}</body>
    </html>
  );
}
