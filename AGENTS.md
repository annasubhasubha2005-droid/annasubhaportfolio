# AGENTS.md

Guidance for AI agents and developers working on this codebase.

> **Start here:** [PLAN.md](./PLAN.md) holds the numbered roadmap. Milestone 1
> (design system, content model, imagery, home page) is done; milestones 2–7
> describe the remaining pages. Continue from there rather than re-planning.

## What this project is

A personal portfolio site for **Annasubha**, a fresher UI/UX designer, built with
TanStack Start on Netlify. Content site — no database, no auth, no API routes.

## Directory structure

```
├── public/img/               12 case-study & gallery images (stand-ins for Figma exports)
├── scripts/generate-images.mjs   One-off generator that produced public/img via Netlify AI Gateway
├── src
│   ├── components
│   │   ├── image.tsx         cdnUrl() + <Picture>: all images go through the Netlify Image CDN
│   │   ├── kit.tsx           buttonStyles(), Eyebrow, SectionHead, Chip, ExternalAction
│   │   ├── reveal.tsx        <Reveal>: IntersectionObserver fade-and-lift on scroll
│   │   ├── site-header.tsx   Sticky header, blur-on-scroll, mobile sheet
│   │   ├── site-footer.tsx   Forest-green footer with nav + social links
│   │   └── ui/               shadcn/Radix primitives from the scaffold (largely unused)
│   ├── data/portfolio.ts     ★ Every word, link and image path on the site
│   ├── routes
│   │   ├── __root.tsx        Document shell, fonts, meta, header/footer, 404
│   │   ├── index.tsx         Home page
│   │   └── (contact|projects|resume|blog/)  Leftover scaffold routes — delete, see PLAN.md §2
│   └── styles.css            Design tokens, base layer, .eyebrow/.shell/.grain, animations
```

## Architecture decisions worth knowing

**Content lives in TypeScript, not markdown.** The scaffold shipped
content-collections, but the two case studies have a fixed, highly structured shape
(problem, goal, research, insight stats, flow, decisions, prototype). A typed module
at `src/data/portfolio.ts` models that better than markdown frontmatter and gives the
site owner exactly one file to edit. The `content/` directory and
`content-collections.ts` are leftovers to be removed (PLAN.md §2).

**Placeholder links are a first-class state.** `PLACEHOLDER` exported from
`src/data/portfolio.ts` marks a URL the owner has not supplied yet. `ExternalAction`
in `kit.tsx` renders those as an inert, dashed "coming soon" chip; the footer greys
them out. This keeps the "all links functional" requirement true — nothing ever
navigates nowhere — while leaving obvious slots to fill in.

**No image ships at full resolution.** `public/img/*.png` are ~1 MB sources. Always
render them via `<Picture>` / `cdnUrl()`, never with a bare `<img src="/img/...">`.

**Two motion mechanisms, kept separate.** `.rise` (CSS keyframes + inline
`animationDelay`) is for above-the-fold page-load staggers. `<Reveal delay={n}>` is
for everything below the fold. Both collapse under `prefers-reduced-motion`.

## Conventions

- **Design tokens over literals.** Use `text-forest`, `bg-paper`, `text-ink-soft`,
  `text-bronze` etc. from the `@theme` block in `styles.css`. Do not introduce new
  hex values or colours outside the cream / forest / bronze / beige palette.
- **Section rhythm.** Each section is `<section className="shell pt-24 lg:pt-32">`
  wrapping a `<SectionHead index="0n" title=… lead=… />`.
- **Buttons.** Apply `buttonStyles(variant)` to a `<Link>` or `<a>` rather than
  wrapping a `<button>` — keeps navigation semantics correct.
- Components PascalCase, utilities camelCase, route files kebab-case.
- Imports use the `@/` alias for `src/`.
- `tsconfig.json` has `noUnusedLocals` and `noUnusedParameters` on — no dead imports.
- Avoid the grid-of-three-equal-cards layout; the existing sections use uneven
  column spans deliberately.

## Routing

File-based via TanStack Router in `src/routes/`. `__root.tsx` uses `shellComponent`,
which renders the matched route as `{children}` — there is no separate `Outlet`.
Nav targets (`/about`, `/work`, `/work/$slug`, `/gallery`, `/contact`) are already
listed in the `navigation` array in `src/data/portfolio.ts`; the header and footer
link to them, so creating those route files is what wires them up.

## Netlify notes

- Image CDN needs no configuration; local sources work without an allowlist.
- The contact form (PLAN.md §6) needs a static skeleton at `public/__forms.html`
  for build-time detection, must `fetch` that path rather than `/`, and requires
  `node scripts/enable.cjs` from the `netlify-forms` skill to activate on deploy.
- `scripts/generate-images.mjs` is a one-off; it skips files that already exist.
  Valid `aspectRatio` values are 1:1, 3:2, 4:3, 4:5, 5:4, 16:9 and similar — `16:10`
  is rejected by the model.
