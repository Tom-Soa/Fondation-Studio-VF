import HeroLanding from "@/components/home/HeroLanding";
import StatementBand from "@/components/home/StatementBand";
import Showcase from "@/components/home/Showcase";
import Process from "@/components/home/Process";
import Pricing from "@/components/home/Pricing";
import Comparison from "@/components/home/Comparison";
import FaqLanding from "@/components/home/FaqLanding";
import CtaBand from "@/components/home/CtaBand";

export default function Home() {
  return (
    <main className="relative">
      <HeroLanding />
      <StatementBand />
      <Showcase />
      <Process />
      <Pricing />
      <Comparison />
      <FaqLanding />
      <CtaBand />
    </main>
  );
}
