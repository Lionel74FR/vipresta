"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { partners } from "@/lib/content";
import { SectionHeading } from "./ui/SectionHeading";

/**
 * Mur de logos partenaires. Chaque entrée affiche son logo s'il est fourni
 * (public/images/partenaires/…), sinon son nom en typographie de marque.
 */
export function Partners() {
  if (partners.length === 0) return null;

  return (
    <section
      id="partenaires"
      className="relative overflow-hidden border-y border-gold-400/10 bg-ink-900/40 py-24 sm:py-28"
    >
      <div className="glow absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2" />

      <div className="container-x">
        <SectionHeading
          eyebrow="Partenaires"
          title="Ils nous ont fait confiance"
          lead="Merci du fond du cœur pour votre confiance. Grâce à vous, une jeune entreprise locale peut se lancer, grandir et continuer à proposer des prestations toujours plus qualitatives."
        />

        <ul className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {partners.map((partner, i) => (
            <motion.li
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: (i % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="group relative aspect-[3/2] overflow-hidden rounded-xl border border-gold-400/12 bg-ink-950/40"
            >
              {partner.logo ? (
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
                  className="object-cover opacity-85 transition duration-700 group-hover:opacity-100 group-hover:scale-[1.04]"
                />
              ) : (
                <span className="absolute inset-0 grid place-items-center px-3 text-center font-display text-base uppercase leading-tight tracking-[0.16em] text-cream/60 transition-colors duration-500 group-hover:text-gold-200 sm:text-lg">
                  {partner.name}
                </span>
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
