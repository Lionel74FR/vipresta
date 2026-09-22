import Link from "next/link";
import { nav, site } from "@/lib/content";
import { Logo } from "./ui/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gold-400/10 bg-ink-950 pb-10 pt-16">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex flex-col gap-5">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              {site.tagline} à {site.zones.join(" et en ")}. {site.baseline}.
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <p className="text-[0.62rem] uppercase tracking-[0.3em] text-gold-300">Navigation</p>
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="w-fit text-sm text-cream/65 transition-colors hover:text-gold-100"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="text-[0.62rem] uppercase tracking-[0.3em] text-gold-300">Contact</p>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="w-fit text-sm text-cream/65 transition-colors hover:text-gold-100"
            >
              {site.phoneDisplay}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="w-fit text-sm text-cream/65 transition-colors hover:text-gold-100"
            >
              {site.email}
            </a>
            <div className="mt-2 flex gap-4">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cream/65 transition-colors hover:text-gold-100"
              >
                Instagram
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cream/65 transition-colors hover:text-gold-100"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="hairline my-10" />

        <div className="flex flex-col items-center justify-between gap-4 text-[0.68rem] uppercase tracking-[0.18em] text-muted sm:flex-row">
          <p>
            © {year} {site.legalName} — Tous droits réservés
          </p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="transition-colors hover:text-gold-100">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="transition-colors hover:text-gold-100">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
