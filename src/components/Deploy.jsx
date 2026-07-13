import { ENVIRONMENTS } from "../data";
import { SectionHeader } from "./Build";

export default function Deploy() {
  return (
    <section id="deploy" className="px-8 lg:px-32 py-28 border-t border-base-line">
      <SectionHeader stage="03 / DEPLOY" title="Expérience" />

      <div className="mt-12 grid sm:grid-cols-2 gap-3">
        {ENVIRONMENTS.map((env) => (
          <div
            key={env.name}
            className="rounded-lg border border-base-line bg-base-raised/40 p-5 flex items-center justify-between"
          >
            <div>
              <p className="text-ink font-medium">{env.name}</p>
              <p className="text-ink-dim text-sm mt-0.5">{env.note}</p>
            </div>
            <span
              className={`font-mono text-[10px] tracking-wide px-2 py-0.5 rounded-full border ${
                env.type === "production"
                  ? "text-gold border-gold/30 bg-gold/10"
                  : "text-ink-dim border-base-line"
              }`}
            >
              {env.type}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
