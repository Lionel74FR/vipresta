import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Prestige } from "@/components/Prestige";
import { Values } from "@/components/Values";
import { Reviews } from "@/components/Reviews";
import { Clients } from "@/components/Clients";
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
        <Values />
        <Reviews />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
