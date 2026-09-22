"use client";

import { motion } from "framer-motion";
import { values } from "@/lib/content";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { iconMap } from "./ui/Icons";

export function Values() {
  return (
    <section id="valeurs" className="relative py-28 sm:py-36">
      <div className="container-x">
        <SectionHeading
          eyebrow="Nos valeurs"
          title="Ce qui nous engage"
          lead="Quatre principes qui cadrent chaque mission, du premier échange au débrief post-événement."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => {
            const Icon = iconMap[value.icon as keyof typeof iconMap];
            return (
              <Reveal key={value.id} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="group surface-card relative flex h-full flex-col items-center gap-5 rounded-[1.5rem] px-7 py-10 text-center"
                >
                  <span className="relative grid h-16 w-16 place-items-center rounded-full border border-gold-400/25">
                    <span className="absolute inset-0 rounded-full bg-gold-400/10 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
                    <Icon className="h-7 w-7 text-gold-200 transition-transform duration-500 group-hover:scale-110" />
                  </span>

                  <h3 className="text-2xl text-cream">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{value.description}</p>

                  <span className="mt-auto h-px w-10 bg-gold-400/40 transition-all duration-500 group-hover:w-20" />
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
