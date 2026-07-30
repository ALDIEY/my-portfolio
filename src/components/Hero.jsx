import { useEffect, useState } from "react";

const LOG_LINES = [
  { text: "$ init --profile cheikh", delay: 0 },
  { text: "> Resolving stack... web, mobile, devops", delay: 500 },
  { text: "> Compiling experience: 5+ ans", delay: 1000 },
  { text: "> Loading role: Ingénieur Full Stack & Formateur", delay: 1500 },
  { text: "✓ build passed", delay: 2200, success: true },
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timers = LOG_LINES.map((line, i) =>
      setTimeout(() => setVisibleLines(i + 1), line.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-8 lg:px-32 py-24"
    >
      <div className="max-w-3xl">
        <div className="animate-fade-up rounded-lg border border-base-line bg-base-raised/60 font-mono text-sm p-6 mb-10 shadow-2xl">
          <div className="flex gap-1.5 mb-4">
            <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-gold/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-teal-bright/70" />
          </div>
          <div className="space-y-2 min-h-[140px]">
            {LOG_LINES.slice(0, visibleLines).map((line, i) => (
              <p
                key={i}
                className={
                  line.success
                    ? "text-teal-bright font-semibold"
                    : "text-ink-dim"
                }
              >
                {line.text}
                {i === visibleLines - 1 && (
                  <span className="inline-block w-[7px] h-3.5 -mb-0.5 ml-1.5 bg-teal-bright animate-blink" />
                )}
              </p>
            ))}
          </div>
        </div>

        <h1 className="animate-fade-up [animation-delay:150ms] font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-ink">
          Cheikh
        </h1>
        <p className="animate-fade-up [animation-delay:250ms] font-display text-xl sm:text-2xl text-gold mt-3">
          Ingénieur Full Stack, Mobile & DevOps
        </p>
        <p className="animate-fade-up [animation-delay:350ms] text-ink-dim mt-6 max-w-xl leading-relaxed">
          Basé à Dakar, je conçois des applications web et mobiles de bout en
          bout et j'automatise leur déploiement. Je forme aussi la prochaine
          génération de développeurs au CI/CD et au mobile.
        </p>

        <div className="animate-fade-up [animation-delay:450ms] flex flex-wrap gap-3 mt-8">
          <a
            href="#release"
            className="px-5 py-2.5 rounded-md bg-gold text-base font-medium hover:bg-gold-dim transition-all hover:-translate-y-0.5"
          >
            Demander un déploiement
          </a>
          <a
            href="#test"
            className="px-5 py-2.5 rounded-md border border-base-line text-ink hover:border-teal-bright transition-all hover:-translate-y-0.5"
          >
            Voir les projets
          </a>
        </div>
      </div>
    </section>
  );
}
