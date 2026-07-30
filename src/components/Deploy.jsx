import { ENVIRONMENTS } from "../data";
import { SectionHeader } from "./Build";
import { IconCloud } from "./icons";
import Reveal from "./Reveal";

export default function Deploy() {
  return (
    <section id="deploy" className="px-8 lg:px-32 py-28 border-t border-base-line">
      <SectionHeader stage="03 / DEPLOY" title="Expérience" icon={IconCloud} />

      <div className="mt-12 grid sm:grid-cols-2 gap-3">
        {ENVIRONMENTS.map((env, i) => (
          <Reveal key={env.name} delay={i * 60}>
            <div className="rounded-lg border border-base-line bg-base-raised/40 p-5 flex items-center justify-between transition-all duration-300 hover:border-teal-bright/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20">
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
          </Reveal>
        ))}
      </div>
    </section>
  );
}
