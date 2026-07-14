import type { Metadata } from "next";
import { inter, dmMono, display, emphasis } from "@/lib/fonts";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Maintenance from "@/components/Maintenance";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import "./globals.css";

// Mode maintenance : passer à `false` puis redéployer pour réafficher le site complet.
// Ne s'applique QU'EN PRODUCTION : en local (`next dev`) on voit toujours le site
// complet, pour pouvoir continuer à travailler dessus.
const MAINTENANCE = false;
const showMaintenance = MAINTENANCE && process.env.NODE_ENV === "production";

export const metadata: Metadata = {
  metadataBase: new URL("https://fondationstudio.fr"),
  alternates: { canonical: "/" },
  title: {
    default: "Fondation Studio · Sites web qui convertissent · Livrés en 21 jours",
    template: "%s | Fondation Studio",
  },
  description:
    "Studio web pour PME et artisans. Sites premium, design sur-mesure, hébergement gratuit, référencement intégré. Page d'accueil offerte avant tout engagement.",
  // Les icônes (favicon.ico, icon.png, apple-icon.png) sont auto-détectées par Next.js
  // via la convention de fichiers dans app/. Pas besoin de les redéclarer ici.
  keywords: [
    "création site internet",
    "site web PME",
    "site sur-mesure",
    "agence web alternative WordPress",
    "site rapide haute performance",
    "site artisan BTP",
  ],
  authors: [{ name: "Fondation Studio" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://fondationstudio.fr",
    siteName: "Fondation Studio",
    title: "Votre site. Conçu pour vendre. Livré en 21 jours.",
    description:
      "Sites premium pour PME : design sur-mesure, SEO intégré, hébergement gratuit. Page d'accueil offerte avant tout engagement.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fondation Studio",
    description:
      "Sites web qui convertissent. Design sur-mesure. Hébergement gratuit. Page d'accueil offerte.",
  },
  // En maintenance : noindex (on n'indexe pas la page "en construction").
  robots: {
    index: !showMaintenance,
    follow: !showMaintenance,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${dmMono.variable} ${display.variable} ${emphasis.variable}`}
    >
      <body className="font-sans bg-alabaster text-midnight antialiased min-h-screen flex flex-col">
        <JsonLd schema={[organizationSchema, websiteSchema]} />
        {showMaintenance ? (
          <Maintenance />
        ) : (
          <>
            <Nav />
            <div className="flex-1">{children}</div>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
