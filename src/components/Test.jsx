import { PROJECTS } from "../data";
import { SectionHeader } from "./Build";

export default function Test() {
  return (
    <section id="test" className="px-8 lg:px-32 py-28 border-t border-base-line">
      <SectionHeader stage="02 / TEST" title="Projets" />

      <div className="mt-12 space-y-4">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="rounded-lg border border-base-line bg-base-raised/40 p-6 flex flex-col sm:flex-row sm:items-start gap-4 hover:border-teal-bright/50 transition-colors"
          >
            <div className="font-mono text-xs text-ink-dim/70 sm:w-16 shrink-0 pt-1">
              {project.id}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="font-display text-lg text-ink">{project.name}</h3>
                <span className="font-mono text-[10px] tracking-wide px-2 py-0.5 rounded-full bg-teal/30 text-teal-bright border border-teal-bright/30">
                  ✓ {project.status}
                </span>
              </div>
              <p className="text-ink-dim text-sm mt-2 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[11px] text-gold/90 border border-gold/20 rounded px-2 py-0.5"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
