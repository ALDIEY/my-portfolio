import { TRAININGS } from "../data";
import { SectionHeader } from "./Build";
import { IconRadar } from "./icons";
import Reveal from "./Reveal";

export default function Monitor() {
  return (
    <section id="monitor" className="px-8 lg:px-32 py-28 border-t border-base-line">
      <SectionHeader stage="04 / MONITOR" title="Formation" icon={IconRadar} />
      <Reveal delay={80}>
        <p className="text-ink-dim mt-4 max-w-xl text-sm leading-relaxed">
          En parallèle du développement, je transmets ces compétences en tant que formateur.
        </p>
      </Reveal>

      <div className="mt-12 space-y-4">
        {TRAININGS.map((t, i) => (
          <Reveal key={t.name} delay={i * 80}>
            <div className="border-l-2 border-teal-bright/40 pl-6 py-1 transition-colors duration-300 hover:border-gold">
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="font-display text-lg text-ink">{t.name}</h3>
                <span className="font-mono text-[11px] text-gold/80">{t.level}</span>
              </div>
              <p className="text-ink-dim text-sm mt-1">{t.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
