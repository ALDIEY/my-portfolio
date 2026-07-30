import { SectionHeader } from "./Build";
import { IconRocket, IconMail, IconLinkedin, IconGithub } from "./icons";
import Reveal from "./Reveal";

export default function Release() {
  return (
    <section
      id="release"
      className="px-8 lg:px-32 py-28 border-t border-base-line min-h-[70vh] flex flex-col justify-center"
    >
      <SectionHeader stage="05 / RELEASE" title="Contact" icon={IconRocket} />

      <Reveal delay={80}>
        <p className="text-ink-dim mt-4 max-w-xl leading-relaxed">
          Disponible pour des missions freelance, en remote ou sur site à Dakar.
          Ouvert aux opportunités avec des entreprises basées au Canada et en Europe.
        </p>
      </Reveal>

      <Reveal delay={160}>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:cheikhaldieysow1@gmail.com"
            className="group px-6 py-3 rounded-md bg-gold text-base font-medium hover:bg-gold-dim transition-all hover:-translate-y-0.5 text-center inline-flex items-center justify-center gap-2"
          >
            <IconMail className="w-4 h-4 transition-transform group-hover:scale-110" />
            cheikhaldieysow1@gmail.com
          </a>
          <a
            href="#"
            className="group px-6 py-3 rounded-md border border-base-line text-ink hover:border-teal-bright transition-all hover:-translate-y-0.5 text-center inline-flex items-center justify-center gap-2"
          >
            <IconLinkedin className="w-4 h-4 text-teal-bright transition-transform group-hover:scale-110" />
            LinkedIn
          </a>
          <a
            href="#"
            className="group px-6 py-3 rounded-md border border-base-line text-ink hover:border-teal-bright transition-all hover:-translate-y-0.5 text-center inline-flex items-center justify-center gap-2"
          >
            <IconGithub className="w-4 h-4 text-teal-bright transition-transform group-hover:scale-110" />
            GitHub
          </a>
        </div>
      </Reveal>

      <p className="font-mono text-xs text-ink-dim/50 mt-16">
        © {new Date().getFullYear()} Cheikh — Dakar, Sénégal
      </p>
    </section>
  );
}
