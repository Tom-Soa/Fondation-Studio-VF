import type { Metadata } from "next";
import { inter, display, emphasis, dmMono } from "@/lib/fonts";
import "../globals.css";

// Layout dédié aux landing pages publicitaires : ni navigation ni pied de page.
// Le seul chemin de sortie est le CTA vers le formulaire, ce qui évite de
// disperser le trafic payant dans le reste du site.

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function LpLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${dmMono.variable} ${display.variable} ${emphasis.variable}`}
    >
      <head>
        {/* La negociation reseau vers YouTube demarre des le HTML, sans
            attendre que le lecteur soit demande. */}
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
      </head>
      <body className="font-sans bg-alabaster text-midnight antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
