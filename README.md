# Annasubha — UI/UX Designer Portfolio

A personal portfolio site for Annasubha, a fresher UI/UX designer: a home page
introducing the work, two in-depth mobile app case studies (MealEz and Z'Bazaar),
an interface gallery, an about page and a contact page with social links.

The design is a warm, quiet one — cream paper, forest-green ink and a bronze accent,
with editorial sans-serif typography, rounded cards and restrained motion. It is
deliberately not colourful: the screenshots are meant to be the loudest thing on the page.

## Tech stack

| Layer | Choice |
|---|---|
| Framework | TanStack Start (file-based routing, SSR) |
| UI | React 19 |
| Styling | Tailwind CSS 4, with design tokens in `src/styles.css` |
| Icons | lucide-react |
| Images | Netlify Image CDN (`/.netlify/images`) |
| Build | Vite 7 |
| Hosting | Netlify |
| Language | TypeScript (strict) |

## Running locally

```bash
pnpm install
pnpm dev            # http://localhost:3000
```

To exercise Netlify features (Image CDN, Forms) locally, use the Netlify CLI instead:

```bash
netlify dev --port 8889
```

Note that the Image CDN and Netlify Forms only fully work on a Netlify deploy or
through `netlify dev` — under plain `vite dev` image URLs will not transform.

## Editing your content

**Everything is in one file: `src/data/portfolio.ts`.** Name, intro, about copy,
skills, education, certification, experience, both case studies and all contact
links live there. No component changes are needed to update the site.

### Replacing the placeholder links

Links are set to the string `PLACEHOLDER` where a real URL is not yet known
(LinkedIn, Figma, GitHub, and the two prototype links). A placeholder renders as a
clearly-marked "coming soon" chip rather than a dead link, so nothing on the site
navigates nowhere. Replace the `PLACEHOLDER` value with your URL to activate it.

Email and phone in `socials` are real `mailto:` / `tel:` links — update the
addresses to your own.

### Replacing the images

The 12 images in `public/img/` are custom-made stand-ins for your Figma exports,
matched to the site's palette. Swap any file for your own export using the same
filename and nothing else needs to change. `public/img/hero-studio.png` is the
portrait slot on the home page.

Images are never served at full resolution — `src/components/image.tsx` routes
every one through the Netlify Image CDN, which resizes at the edge and negotiates
WebP/AVIF per browser.

## What is built, and what is next

Live now: the design system, content model, custom imagery, the shared header,
footer and 404 page, and the full home page — hero, skills marquee, project cards,
capability columns and gallery mosaic.

Next: the `/about`, `/work`, `/work/$slug`, `/gallery` and `/contact` pages, plus
removing the starter template's leftover routes. The numbered roadmap is in
[PLAN.md](./PLAN.md); all the content those pages need is already written in
`src/data/portfolio.ts`.
