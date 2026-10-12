import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { inter, dmMono, display, emphasis } from "@/lib/fonts";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ScrollProgress } from "@/components/ui/motion-kit";
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
    title: "ACTC Studio | Sites internet et publicité qui vous amènent des clients",
    description:
      "Sites internet dès 1 400 € livrés en 21 jours, publicité Meta et Google dès 500 € par mois, applications et conseil. Hébergement gratuit, aucun abonnement. Maquette de votre page d'accueil offerte.",
    ogTitle: "Un site qui vous amène des clients. Livré en 21 jours.",
    ogDescription:
      "Sites, publicité, applications et conseil pour PME. Hébergement gratuit, aucun abonnement. Site dès 1 400 €.",
    twitterDescription:
      "Des sites qui vous amènent des clients. Hébergement gratuit, aucun abonnement. Dès 1 400 €.",
    keywords: [
      "création site internet",
      "site web PME",
      "site sur-mesure",
      "publicité Facebook Instagram PME",
      "application web sur-mesure",
      "site artisan BTP",
    ],
  },
  en: {
    title: "ACTC Studio | Websites and ads that bring you customers",
    description:
      "Websites from €1,400 delivered in 21 days, Meta and Google ads from €500 per month, web apps and consulting. Free hosting, no subscription. Free homepage mockup.",
    ogTitle: "A website that brings you customers. Delivered in 21 days.",
    ogDescription:
      "Websites, ads, apps and consulting for small businesses. Free hosting, no subscription. Websites from €1,400.",
    twitterDescription:
      "Websites that bring you customers. Free hosting, no subscription. From €1,400.",
    keywords: [
      "website creation",
      "small business website",
      "custom website",
      "Facebook and Instagram ads for small businesses",
      "custom web app",
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
    metadataBase: new URL("https://www.actcstudio.fr"),
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
      url: `https://www.actcstudio.fr/${locale}`,
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
    // Vérification du domaine par Meta (Business Manager > Domaines).
    other: {
      "facebook-domain-verification": "u9q0id5krgam036378mc6u6j169yue",
    },
    // Vérification de la propriété actcstudio.fr dans Google Search Console.
    verification: {
      google: "uZmyRPohZHMgQfrNm-_h8csr_nhKwyHx47Z8GUu2Zeg",
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
    // data-scroll-behavior : Next 16 repasse en scroll instantané pendant les changements
    // de page (sinon chaque navigation glisse jusqu'en haut au lieu d'arriver directement).
    <html
      lang={lang}
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${dmMono.variable} ${display.variable} ${emphasis.variable}`}
    >
      <body className="font-sans bg-alabaster text-midnight antialiased min-h-screen flex flex-col">
        <JsonLd schema={[organizationSchema, websiteSchema]} />
        {showMaintenance ? (
          <Maintenance />
        ) : (
          <>
            <ScrollProgress />
            <Nav lang={lang} />
            <div className="flex-1">{children}</div>
            <Footer lang={lang} />
          </>
        )}
      </body>
    </html>
  );
}
