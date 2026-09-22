"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { services } from "@/lib/content";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { IconArrow } from "./ui/Icons";

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-28 sm:py-36">
      <div className="hairline container-x" />

      <div className="container-x mt-20">
        <SectionHeading
          eyebrow="Nos services"
          title="Trois façons de servir votre image"
          lead="Du simple renfort d'accueil au dispositif complet, nous dimensionnons l'équipe et le niveau de service selon l'exigence de votre événement."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.12}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group surface-card relative flex h-full flex-col overflow-hidden rounded-[1.75rem]"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent" />
                  <span className="absolute left-5 top-5 font-display text-sm tracking-[0.3em] text-gold-200/80">
                    0{i + 1}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-7">
                  <h3 className="text-2xl leading-snug text-cream">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{service.description}</p>

                  <ul className="mt-auto flex flex-col gap-2 pt-3">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-3 text-[0.78rem] uppercase tracking-[0.12em] text-cream/65"
                      >
                        <span className="h-px w-4 bg-gold-400/70" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.24em] text-gold-200 transition-colors hover:text-gold-50"
                  >
                    Demander ce service
                    <IconArrow className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                  </a>
                </div>

                <span className="pointer-events-none absolute inset-0 rounded-[1.75rem] opacity-0 ring-1 ring-gold-300/40 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
