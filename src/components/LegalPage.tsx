import Link from "next/link";
import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Logo } from "./ui/Logo";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <header className="border-b border-gold-400/10 py-6">
        <div className="container-x flex items-center justify-between">
          <Link href="/" aria-label="Retour à l'accueil">
            <Logo />
          </Link>
          <Link
            href="/"
            className="btn-ghost rounded-full px-6 py-3 text-[0.7rem] uppercase tracking-[0.22em]"
          >
            Retour au site
          </Link>
        </div>
      </header>

      <main className="container-x py-20">
        <h1 className="text-4xl sm:text-5xl">{title}</h1>
        <div className="hairline my-10" />
        <div className="flex max-w-3xl flex-col gap-5 leading-relaxed text-muted [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:text-cream [&_strong]:text-cream/90">
          {children}
        </div>
      </main>

      <Footer />
    </>
  );
}
