import type { Metadata } from "next";
import { FAQClient } from "@/components/faq/FAQClient";
import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "FAQ · Questions fréquentes",
  description:
    "Réponses à toutes vos questions sur Fondation Studio : offres, délais, process, SEO, hébergement, e-commerce. Plus de 50 questions répondues par les fondateurs.",
  keywords: ["faq agence web", "questions site internet", "prix site web pme", "délai création site web"],
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ Fondation Studio · 50+ questions répondues",
    description: "Offres, délais, process, SEO, hébergement, e-commerce. Toutes les réponses sur Fondation Studio.",
  },
};

export default function FAQPage() {
  return (
    <>
      <JsonLd
        schema={[
          faqPageSchema(),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />
      <FAQClient />
    </>
  );
}
