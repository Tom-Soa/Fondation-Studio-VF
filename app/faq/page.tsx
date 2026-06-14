import type { Metadata } from "next";
import { FAQClient } from "@/components/faq/FAQClient";

export const metadata: Metadata = {
  title: "FAQ · Questions fréquentes · Fondation Studio",
  description:
    "Réponses à toutes vos questions sur Fondation Studio : tarifs, délais, process, SEO, hébergement, e-commerce. Plus de 50 questions répondues par les fondateurs.",
  keywords: ["faq agence web", "questions site internet", "prix site web pme", "délai création site web"],
  openGraph: {
    title: "FAQ Fondation Studio · 50+ questions répondues",
    description: "Tarifs, délais, process, SEO, hébergement, e-commerce. Toutes les réponses sur Fondation Studio.",
  },
};

export default function FAQPage() {
  return <FAQClient />;
}
