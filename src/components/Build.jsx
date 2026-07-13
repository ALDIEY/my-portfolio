import { SKILL_LAYERS } from "../data";

export default function Build() {
  return (
    <section id="build" className="px-8 lg:px-32 py-28 border-t border-base-line">
      <SectionHeader stage="01 / BUILD" title="Compétences" />

      <div className="grid sm:grid-cols-2 gap-5 mt-12">
        {SKILL_LAYERS.map((layer, i) => (
          <div
            key={layer.tag}
            className="rounded-lg border border-base-line bg-base-raised/40 p-6 hover:border-teal-bright/50 transition-colors"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-xl text-ink">{layer.name}</h3>
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
        ))}
      </div>
    </section>
  );
}

export function SectionHeader({ stage, title }) {
  return (
    <div>
      <p className="font-mono text-xs tracking-widest text-teal-bright mb-2">
        {stage}
      </p>
      <h2 className="font-display text-3xl sm:text-4xl text-ink">{title}</h2>
    </div>
  );
}
