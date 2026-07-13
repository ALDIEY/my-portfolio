import { SectionHeader } from "./Build";

export default function Release() {
  return (
    <section
      id="release"
      className="px-8 lg:px-32 py-28 border-t border-base-line min-h-[70vh] flex flex-col justify-center"
    >
      <SectionHeader stage="05 / RELEASE" title="Contact" />

      <p className="text-ink-dim mt-4 max-w-xl leading-relaxed">
        Disponible pour des missions freelance, en remote ou sur site à Dakar.
        Ouvert aux opportunités avec des entreprises basées au Canada et en Europe.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <a
          href="mailto:cheikhaldieysow1@gmail.com"
          className="px-6 py-3 rounded-md bg-gold text-base font-medium hover:bg-gold-dim transition-colors text-center"
        >
          cheikhaldieysow1@gmail.com
        </a>
        <a
          href="#"
          className="px-6 py-3 rounded-md border border-base-line text-ink hover:border-teal-bright transition-colors text-center"
        >
          LinkedIn
        </a>
        <a
          href="#"
          className="px-6 py-3 rounded-md border border-base-line text-ink hover:border-teal-bright transition-colors text-center"
        >
          GitHub
        </a>
      </div>

      <p className="font-mono text-xs text-ink-dim/50 mt-16">
        © {new Date().getFullYear()} Cheikh — Dakar, Sénégal
      </p>
    </section>
  );
}
