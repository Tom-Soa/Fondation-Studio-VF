import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { inter, dmMono, display, emphasis } from "@/lib/fonts";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Maintenance from "@/components/Maintenance";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { locales, hasLocale, type Locale } from "@/lib/i18n";
import "../globals.css";

// Mode maintenance : passer à `false` puis redéployer pour réafficher le site complet.
// Ne s'applique QU'EN PRODUCTION : en local (`next dev`) on voit toujours le site
// complet, pour pouvoir continuer à travailler dessus.
const MAINTENANCE = false;
const showMaintenance = MAINTENANCE && process.env.NODE_ENV === "production";

const META: Record<Locale, { title: string; description: string; ogTitle: string; ogDescription: string; twitterDescription: string; keywords: string[] }> = {
  fr: {
    title: "ACTC · Sites web qui convertissent · Livrés en 21 jours",
    description:
      "Studio web pour PME et artisans. Sites premium, design sur-mesure, hébergement gratuit, référencement intégré. À partir de 1 400 €. Page d'accueil offerte avant tout engagement.",
    ogTitle: "Votre site. Conçu pour vendre. Livré en 21 jours.",
    ogDescription:
      "Sites premium pour PME : design sur-mesure, SEO intégré, hébergement gratuit. À partir de 1 400 €.",
    twitterDescription:
      "Sites web qui convertissent. Design sur-mesure. Hébergement gratuit. À partir de 1 400 €.",
    keywords: [
      "création site internet",
      "site web PME",
      "site sur-mesure",
      "agence web alternative WordPress",
      "site rapide haute performance",
      "site artisan BTP",
    ],
  },
  en: {
    title: "ACTC · Websites that convert · Delivered in 21 days",
    description:
      "Web studio for small businesses and tradespeople. Premium websites, custom design, free hosting, built-in SEO. From €1,400. Free homepage before any commitment.",
    ogTitle: "Your website. Built to sell. Delivered in 21 days.",
    ogDescription:
      "Premium websites for small businesses: custom design, built-in SEO, free hosting. From €1,400.",
    twitterDescription:
      "Websites that convert. Custom design. Free hosting. From €1,400.",
    keywords: [
      "website creation",
      "small business website",
      "custom website",
      "WordPress alternative web agency",
      "high performance website",
    ],
  },
};

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = hasLocale(lang) ? lang : "fr";
  const m = META[locale];
  return {
    metadataBase: new URL("https://fondationstudio.fr"),
    alternates: {
      canonical: `/${locale}`,
      languages: { fr: "/fr", en: "/en" },
    },
    title: {
      default: m.title,
      template: "%s | ACTC",
    },
    description: m.description,
    // Les icônes (favicon.ico, icon.png, apple-icon.png) sont auto-détectées par Next.js
    // via la convention de fichiers dans app/. Pas besoin de les redéclarer ici.
    keywords: m.keywords,
    authors: [{ name: "ACTC" }],
    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      url: `https://fondationstudio.fr/${locale}`,
      siteName: "ACTC",
      title: m.ogTitle,
      description: m.ogDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: "ACTC",
      description: m.twitterDescription,
    },
    // En maintenance : noindex (on n'indexe pas la page "en construction").
    robots: {
      index: !showMaintenance,
      follow: !showMaintenance,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      className={`${inter.variable} ${dmMono.variable} ${display.variable} ${emphasis.variable}`}
    >
      <body className="font-sans bg-alabaster text-midnight antialiased min-h-screen flex flex-col">
        <JsonLd schema={[organizationSchema, websiteSchema]} />
        {showMaintenance ? (
          <Maintenance />
        ) : (
          <>
            <Nav lang={lang} />
            <div className="flex-1">{children}</div>
            <Footer lang={lang} />
          </>
        )}
      </body>
    </html>
  );
}
