import type { Metadata } from "next";
import { inter, display, emphasis, dmMono } from "@/lib/fonts";
import { AUDIT } from "@/lib/audit-content";
import "../globals.css";
import "./audit.css";

// Page de vente autonome : ni navigation ni pied de page du site. Le seul
// chemin de sortie est le bouton de paiement.

export const metadata: Metadata = {
  metadataBase: new URL("https://www.actcstudio.fr"),
  title: AUDIT.meta.title,
  description: AUDIT.meta.description,
  alternates: { canonical: "/audit" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.actcstudio.fr/audit",
    siteName: "ACTC",
    title: AUDIT.meta.title,
    description: AUDIT.meta.description,
  },
  twitter: {
    card: "summary_large_image",
    title: AUDIT.meta.title,
    description: AUDIT.meta.description,
  },
  robots: { index: false, follow: false },
};

export default function AuditLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${dmMono.variable} ${display.variable} ${emphasis.variable}`}
    >
      {/*
        Pixel Meta : injecté par <MetaPixel /> dans la page, à partir de la
        variable d'environnement NEXT_PUBLIC_META_PIXEL_ID. Tant qu'elle n'est
        pas définie, aucun script de suivi n'est chargé.
      */}
      <body className="audit-body font-sans antialiased">{children}</body>
    </html>
  );
}
