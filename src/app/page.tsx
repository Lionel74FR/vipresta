import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Prestige } from "@/components/Prestige";
import { Tenues } from "@/components/Tenues";
import { Gallery } from "@/components/Gallery";
import { Values } from "@/components/Values";
import { Reviews } from "@/components/Reviews";
import { Partners } from "@/components/Partners";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Prestige />
        <Tenues />
        <Gallery />
        <Values />
        <Reviews />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
