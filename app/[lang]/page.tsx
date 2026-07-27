import { notFound } from "next/navigation";
import { hasLocale } from "@/lib/i18n";
import HeroLanding from "@/components/home/HeroLanding";
import StatementBand from "@/components/home/StatementBand";
import Showcase from "@/components/home/Showcase";
import Process from "@/components/home/Process";
import Pricing from "@/components/home/Pricing";
import Comparison from "@/components/home/Comparison";
import FaqLanding from "@/components/home/FaqLanding";
import CtaBand from "@/components/home/CtaBand";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <main className="relative">
      <HeroLanding lang={lang} />
      <StatementBand lang={lang} />
      <Showcase lang={lang} />
      <Process lang={lang} />
      <Pricing lang={lang} />
      <Comparison lang={lang} />
      <FaqLanding lang={lang} />
      <CtaBand lang={lang} />
    </main>
  );
}
