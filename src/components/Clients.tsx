import { clients } from "@/lib/content";
import { Reveal } from "./ui/Reveal";

export function Clients() {
  const row = [...clients, ...clients];

  return (
    <section className="relative border-y border-gold-400/10 bg-ink-900/40 py-20">
      <div className="container-x">
        <Reveal>
          <p className="text-center text-[0.68rem] uppercase tracking-[0.42em] text-muted">
            Ils nous ont fait confiance
          </p>
        </Reveal>
      </div>

      <div className="marquee-mask mt-12 overflow-hidden">
        <div className="flex w-max animate-[marquee_42s_linear_infinite] items-center gap-16 hover:[animation-play-state:paused]">
          {row.map((client, i) => (
            <span
              key={`${client}-${i}`}
              className="whitespace-nowrap font-display text-2xl uppercase tracking-[0.28em] text-cream/60 transition-colors duration-500 hover:text-gold-200"
            >
              {client}
            </span>
          ))}
        </div>
      </div>

      <div className="marquee-mask mt-8 overflow-hidden">
        <div className="flex w-max animate-[marquee_58s_linear_infinite_reverse] items-center gap-16">
          {row.map((client, i) => (
            <span
              key={`rev-${client}-${i}`}
              className="whitespace-nowrap font-display text-xl uppercase tracking-[0.28em] text-cream/30"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
