# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A single-page personal portfolio site (React + Vite + Tailwind CSS v4) themed as a CI/CD pipeline. Content is in French. Each section of the page corresponds to a "pipeline stage" (BUILD, TEST, DEPLOY, MONITOR, RELEASE), styled like a terminal/build-log dashboard.

## Commands

- `npm run dev` — start the Vite dev server with HMR
- `npm run build` — production build
- `npm run preview` — preview the production build locally
- `npm run lint` — run Oxlint (see `.oxlintrc.json`)

There is no test runner configured despite `playwright` being a devDependency — no test files or Playwright config currently exist in the repo.

## Architecture

- `src/App.jsx` is the single page composition: it renders `PipelineNav` plus each stage section (`Hero`, `Build`, `Test`, `Deploy`, `Monitor`, `Release`) in `src/components/`, in the fixed order defined by `STAGES` in `src/data.js`.
- **Content/structure separation**: all copy and structured content (nav stages, skills, projects, work environments, trainings) lives in `src/data.js` as exported arrays/objects consumed by the components. When updating site content (adding a project, skill, job, etc.), edit `src/data.js` rather than hardcoding JSX in a component.
- **Active-section tracking**: `App.jsx` uses an `IntersectionObserver` (rootMargin `-40% 0px -50% 0px`) over each section's `id` (matching `STAGES[].id`) to drive the highlighted stage in `PipelineNav`. If a new top-level section is added to `App.jsx`, it must also be added to `STAGES` with a matching `id` on its `<section>` for the nav highlighting to work, and `PipelineNav`'s line-height calc (`(STAGES.length - 1) * 48`) will need no change since it derives from `STAGES.length`.
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite` (no `tailwind.config.js` — theme is defined inline in `src/index.css` using the `@theme` directive). Custom design tokens (`--color-ink`, `--color-gold`, `--color-teal-bright`, `--color-base*`, fonts `--font-display`/`--font-body`/`--font-mono`) are defined there and used as Tailwind utility classes (e.g. `text-gold`, `bg-base-raised`, `font-display`). Reuse these tokens instead of introducing raw hex colors in components.
- The pipeline/CI-CD conceit is intentional throughout (terminal-style log lines in `Hero`, status dots styled like build/pass/fail indicators, monospace labels like `BUILD`/`TEST`/`DEPLOY`). Keep new copy and UI consistent with this metaphor.
