# Annasubha — Portfolio Roadmap

The design system, content model, custom imagery and the home page are built.
The remaining milestones each add one page on top of that foundation.

All copy, links, skills, education, certification and case-study content already
live in **`src/data/portfolio.ts`**. Every remaining page reads from that file —
no new content needs to be written, only laid out.

---

## Milestone 1 — Foundation & home page ✅ Done

- Warm cream / forest green / bronze design system in `src/styles.css`
  (colour tokens, type scale, grain texture, reveal + rise animations).
- Typography: Familjen Grotesk (display), Instrument Sans (body), IBM Plex Mono (labels).
- `src/data/portfolio.ts` — every word, link and image path in one editable file.
- 12 custom case-study and gallery images generated into `public/img/`, all served
  through the Netlify Image CDN via `src/components/image.tsx`.
- Shared components: `image.tsx`, `reveal.tsx`, `kit.tsx`, `site-header.tsx`, `site-footer.tsx`.
- Sticky header with mobile sheet, footer, skip link, 404 page in `src/routes/__root.tsx`.
- Home page (`src/routes/index.tsx`): hero with name / role / intro / View Projects /
  Contact Me, stat row, skills marquee, two project cards, capability columns,
  gallery mosaic, closing call to action.

## Milestone 2 — Route clean-up

The scaffold's original pages are still present and must be removed so navigation
resolves cleanly:

1. Delete `src/routes/projects.tsx`, `src/routes/resume.tsx`, `src/routes/blog/`
   and `public/contact.html`, `public/headshot-on-white.jpg`.
2. Remove `content-collections.ts`, the `content/` directory and the
   `contentCollections()` plugin from `vite.config.ts` (the site no longer uses markdown).
3. Header and footer already link to `/about`, `/work`, `/gallery` and `/contact` —
   these routes are created in milestones 3–6.

## Milestone 3 — `/about`

Render `profile.about`, `profile.principles`, `skillGroups`, `education`,
`certifications` and `experience` from `src/data/portfolio.ts`. Suggested structure:
intro paragraphs beside the portrait, three principle cards, the three skill
buckets, then a single vertical timeline covering education, certification and
project experience.

## Milestone 4 — `/work` and `/work/$slug`

- `/work` — index listing both case studies using the same card treatment as the home page.
- `/work/$slug` — full case study from `getCaseStudy(slug)`, in the order the content
  is already structured: overview and meta (role, tools, platform), Problem, Goal,
  User Research, insight stats, User Flow (render the `flow` array as a numbered
  horizontal stepper), Wireframes, Final UI, Key Features (Z'Bazaar only), Design
  Decisions, and the Prototype call to action via `ExternalAction`.

## Milestone 5 — `/gallery`

Grid over the `gallery` array with category filter chips
(All / Case Study / Interface / Research / System) and a keyboard-navigable lightbox.
Images go through `Picture` so the CDN keeps them optimized.

## Milestone 6 — `/contact`

Replace the scaffold's `src/routes/contact.tsx`. Render the `socials` list as cards
(email and phone are live links; LinkedIn, Figma and GitHub are marked pending until
their URLs are filled in), plus a message form backed by Netlify Forms — this needs
`public/__forms.html` for build-time form detection and
`node scripts/enable.cjs` from the `netlify-forms` skill to activate it.

## Milestone 7 — Personalisation pass

Swap `public/img/hero-studio.png` for a real photo, replace the generated case-study
images with exported Figma screens, and fill in the real contact URLs and prototype
links in `src/data/portfolio.ts`.
