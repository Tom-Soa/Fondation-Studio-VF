import type { Metadata } from "next";
import { Inter, DM_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fondationstudio.fr"),
  title: {
    default: "Fondation Studio · Sites web qui convertissent · Livrés en 21 jours",
    template: "%s | Fondation Studio",
  },
  description:
    "Studio web pour PME et artisans. Sites premium, code pur, design sur-mesure, référencement intégré. À partir de 1 400€. Maquette gratuite avant tout engagement.",
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
      "Sites premium pour PME : code pur, design sur-mesure, SEO intégré. À partir de 1 400€.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fondation Studio",
    description:
      "Sites web qui convertissent. Code pur. Design sur-mesure. À partir de 1 400€.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${inter.variable} ${dmMono.variable}`}
    >
      <body className="font-sans bg-alabaster text-midnight antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
