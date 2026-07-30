import { SKILL_LAYERS } from "../data";
import { SKILL_ICONS, IconGear } from "./icons";
import Reveal from "./Reveal";

export default function Build() {
  return (
    <section id="build" className="px-8 lg:px-32 py-28 border-t border-base-line">
      <SectionHeader stage="01 / BUILD" title="Compétences" icon={IconGear} />

      <div className="grid sm:grid-cols-2 gap-5 mt-12">
        {SKILL_LAYERS.map((layer, i) => {
          const Icon = SKILL_ICONS[layer.tag];
          return (
            <Reveal key={layer.tag} delay={i * 80}>
              <div className="group rounded-lg border border-base-line bg-base-raised/40 p-6 transition-all duration-300 hover:border-teal-bright/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    {Icon && (
                      <Icon className="w-5 h-5 text-teal-bright/80 transition-transform duration-300 group-hover:scale-110" />
                    )}
                    <h3 className="font-display text-xl text-ink">{layer.name}</h3>
                  </div>
                  <span className="font-mono text-xs text-gold/80">#{layer.tag}</span>
                </div>
                <ul className="space-y-2">
                  {layer.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-ink-dim text-sm">
                      <span className="text-teal-bright font-mono">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export function SectionHeader({ stage, title, icon: Icon }) {
  return (
    <Reveal>
      <div className="flex items-center gap-3">
        {Icon && (
          <span className="text-gold">
            <Icon className="w-6 h-6" />
          </span>
        )}
        <div>
          <p className="font-mono text-xs tracking-widest text-teal-bright mb-2">
            {stage}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-ink">{title}</h2>
        </div>
      </div>
    </Reveal>
  );
}
