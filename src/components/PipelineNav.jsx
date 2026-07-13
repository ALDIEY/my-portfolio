import { STAGES } from "../data";

export default function PipelineNav({ active }) {
  const activeIndex = STAGES.findIndex((s) => s.id === active);

  return (
    <nav
      aria-label="Navigation du pipeline"
      className="hidden lg:flex flex-col fixed left-8 top-1/2 -translate-y-1/2 z-40"
    >
      <div className="flex flex-col">
        {STAGES.map((stage, i) => {
          const isActive = i === activeIndex;
          const isDone = i < activeIndex;
          return (
            <a
              key={stage.id}
              href={`#${stage.id}`}
              className="group flex items-center gap-3 py-3"
            >
              <span
                className={`h-2.5 w-2.5 rounded-full border transition-all duration-300 ${
                  isActive
                    ? "bg-gold border-gold scale-125"
                    : isDone
                    ? "bg-teal-bright border-teal-bright"
                    : "bg-transparent border-base-line group-hover:border-ink-dim"
                }`}
              />
              <span
                className={`font-mono text-[11px] tracking-widest transition-colors duration-300 ${
                  isActive
                    ? "text-gold"
                    : isDone
                    ? "text-teal-bright"
                    : "text-ink-dim/60 group-hover:text-ink-dim"
                }`}
              >
                {stage.label}
              </span>
            </a>
          );
        })}
      </div>
      {/* vertical connecting line */}
      <div
        className="absolute left-[4.5px] top-[14px] w-px bg-base-line -z-10"
        style={{ height: `${(STAGES.length - 1) * 48}px` }}
      />
    </nav>
  );
}
