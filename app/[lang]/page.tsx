import { notFound } from "next/navigation";
import { hasLocale } from "@/lib/i18n";
import HeroLanding from "@/components/home/HeroLanding";
import StatementBand from "@/components/home/StatementBand";
import Showcase from "@/components/home/Showcase";
import ServicesGrid from "@/components/home/ServicesGrid";
import Process from "@/components/home/Process";
import FaqLanding from "@/components/home/FaqLanding";
import CtaBand from "@/components/home/CtaBand";

// Accueil volontairement court : promesse, preuves, services, étapes, questions, appel final.
// Le détail des forfaits et la comparaison vivent sur /tarifs.
export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <main className="relative">
      <HeroLanding lang={lang} />
      <StatementBand lang={lang} />
      <Showcase lang={lang} />
      <ServicesGrid lang={lang} />
      <Process lang={lang} />
      <FaqLanding lang={lang} />
      <CtaBand lang={lang} />
    </main>
  );
}
