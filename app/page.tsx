import HeroLanding from "@/components/home/HeroLanding";
import StatementBand from "@/components/home/StatementBand";
import Showcase from "@/components/home/Showcase";
import Process from "@/components/home/Process";
import Pricing from "@/components/home/Pricing";
import Comparison from "@/components/home/Comparison";
import FaqLanding from "@/components/home/FaqLanding";
import CtaBand from "@/components/home/CtaBand";
import { getPageAccueil } from "@/lib/sanity";

export default async function Home() {
  const data = await getPageAccueil();

  return (
    <main className="relative">
      <HeroLanding data={data} />
      <StatementBand />
      <Showcase />
      <Process />
      <Pricing />
      <Comparison />
      <FaqLanding />
      <CtaBand data={data} />
    </main>
  );
}
