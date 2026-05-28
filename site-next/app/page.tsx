import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Differentiation from "@/components/Differentiation";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { getPageAccueil } from "@/lib/sanity";

export default async function Home() {
  const pageData = await getPageAccueil();

  return (
    <>
      <Nav />
      <main className="relative">
        <Hero data={pageData} />
        <Problem />
        <Solution />
        <Differentiation />
        <Testimonials />
        <CTA data={pageData} />
      </main>
      <Footer />
    </>
  );
}
