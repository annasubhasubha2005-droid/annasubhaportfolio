import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { Picture } from '@/components/image'
import { Reveal } from '@/components/reveal'
import { Chip, Eyebrow, SectionHead, buttonStyles } from '@/components/kit'
import { caseStudies, gallery, profile, skillGroups } from '@/data/portfolio'

export const Route = createFileRoute('/')({
  component: Home,
})

const marqueeItems = [
  'User Research',
  'Wireframing',
  'Prototyping',
  'Design Systems',
  'Usability Testing',
  'Information Architecture',
  'Journey Mapping',
  'Figma',
  'FigJam',
  'Adobe XD',
]

function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Capabilities />
      <GalleryTeaser />
      <ClosingCta />
    </>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft radial warmth behind the type block */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-40 size-[34rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(169,118,47,0.14),transparent_68%)]"
      />
      <div className="shell relative grid items-end gap-14 pt-16 pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pt-24 lg:pb-28">
        <div>
          <p className="rise eyebrow flex items-center gap-3" style={{ animationDelay: '60ms' }}>
            <span className="inline-block size-1.5 rounded-full bg-bronze" />
            {profile.availability}
          </p>

          <h1
            className="rise mt-7 text-[clamp(3.1rem,10.5vw,7.5rem)] font-medium leading-[0.9] tracking-[-0.04em] text-forest"
            style={{ animationDelay: '140ms' }}
          >
            {profile.name}
          </h1>

          <div
            className="rise mt-6 flex flex-wrap items-center gap-x-5 gap-y-3"
            style={{ animationDelay: '240ms' }}
          >
            <span className="font-display text-[clamp(1.15rem,2.4vw,1.6rem)] text-ink">
              {profile.role}
            </span>
            <span className="h-4 w-px bg-beige-deep" aria-hidden />
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink-faint">
              {profile.location}
            </span>
          </div>

          <p
            className="rise mt-9 max-w-xl text-[1.0625rem] leading-[1.75] text-ink-soft lg:text-lg"
            style={{ animationDelay: '320ms' }}
          >
            {profile.intro}
          </p>

          <div className="rise mt-11 flex flex-wrap gap-3" style={{ animationDelay: '400ms' }}>
            <Link to="/work" className={buttonStyles('solid')}>
              View Projects
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
            <Link to="/contact" className={buttonStyles('outline')}>
              Contact Me
            </Link>
          </div>

          <dl
            className="rise mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-beige-deep/70 pt-7"
            style={{ animationDelay: '480ms' }}
          >
            {[
              { k: '2', v: 'End-to-end case studies' },
              { k: '17', v: 'Interviews & test sessions' },
              { k: '4', v: 'Design tools in daily use' },
            ].map((stat) => (
              <div key={stat.v}>
                <dt className="font-display text-3xl text-bronze">{stat.k}</dt>
                <dd className="mt-1.5 text-[0.8125rem] leading-snug text-ink-faint">{stat.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Portrait slot — swap /img/hero-studio.png for your own photo */}
        <div className="rise relative" style={{ animationDelay: '280ms' }}>
          <div
            aria-hidden
            className="absolute -right-6 -top-8 size-32 rounded-full border border-bronze/30 lg:size-44"
          />
          <Picture
            src="/img/hero-studio.png"
            alt="Overhead view of a designer's desk with wireframe printouts, a tablet showing a mobile app frame and sticky notes"
            ratio="4 / 5"
            priority
            sizes="(min-width: 1024px) 38vw, 88vw"
            className="arch shadow-[var(--shadow-lift-lg)]"
          />
          <div className="mt-6 flex items-start gap-3 lg:absolute lg:-bottom-10 lg:-left-10 lg:mt-0 lg:max-w-[15rem] lg:rounded-2xl lg:border lg:border-beige-deep/70 lg:bg-paper/90 lg:p-5 lg:backdrop-blur">
            <span className="mt-1 font-mono text-[0.65rem] text-bronze">↓</span>
            <p className="text-[0.875rem] leading-relaxed text-ink-soft">
              Research, wireframes, UI and prototypes — all in one place.
            </p>
          </div>
        </div>
      </div>

      <div className="marquee-mask relative overflow-hidden border-y border-beige-deep/60 bg-paper-2 py-4">
        <div className="marquee-track flex w-max items-center gap-10 pr-10">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center gap-10 whitespace-nowrap">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ink-faint">
                {item}
              </span>
              <span className="size-1 rounded-full bg-bronze/50" aria-hidden />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function SelectedWork() {
  return (
    <section className="shell pt-24 lg:pt-32">
      <Reveal>
        <SectionHead
          index="01"
          title={
            <>
              Two projects, taken from first interview
              <br className="hidden sm:block" /> to clickable prototype.
            </>
          }
          lead="Each case study shows the whole process — the problem, what users said, the flow, the wireframes and the decisions behind the final interface."
        />
      </Reveal>

      <div className="mt-16 space-y-8 lg:mt-20 lg:space-y-14">
        {caseStudies.map((study, i) => (
          <Reveal key={study.slug} delay={i * 90}>
            <Link
              to="/work/$slug"
              params={{ slug: study.slug }}
              className="group grid overflow-hidden rounded-[1.75rem] border border-beige-deep/60 bg-card transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-bronze/40 hover:shadow-[var(--shadow-lift-lg)] lg:grid-cols-[0.95fr_1.05fr]"
            >
              <div
                className={
                  i % 2 === 1
                    ? 'order-1 flex flex-col justify-between gap-10 p-7 lg:order-2 lg:p-12'
                    : 'flex flex-col justify-between gap-10 p-7 lg:p-12'
                }
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs tracking-[0.2em] text-bronze">
                      Project {study.index}
                    </span>
                    <span className="h-px flex-1 bg-beige-deep/70" aria-hidden />
                    <span className="font-mono text-xs text-ink-faint">{study.year}</span>
                  </div>
                  <h3 className="mt-6 font-display text-[clamp(2rem,4.4vw,2.9rem)] leading-[1.02] text-forest">
                    {study.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium uppercase tracking-[0.1em] text-ink-faint">
                    {study.kind}
                  </p>
                  <p className="mt-6 max-w-md text-[1.0625rem] leading-relaxed text-ink-soft">
                    {study.summary}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2">
                    {study.tools.map((tool) => (
                      <Chip key={tool} tone={study.accent === 'bronze' ? 'bronze' : 'forest'}>
                        {tool}
                      </Chip>
                    ))}
                    <Chip>{study.flow.length} screens</Chip>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 font-medium text-forest">
                    Read the case study
                    <ArrowRight
                      size={17}
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-1.5"
                    />
                  </span>
                </div>
              </div>

              <div className={i % 2 === 1 ? 'order-2 lg:order-1' : ''}>
                <Picture
                  src={study.cover}
                  alt={`${study.title} — ${study.kind} presentation cover`}
                  ratio="3 / 2"
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  className="h-full lg:min-h-[24rem]"
                  imgClassName="group-hover:scale-[1.03]"
                />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Capabilities() {
  return (
    <section className="shell pt-24 lg:pt-32">
      <Reveal>
        <SectionHead
          index="02"
          title="What I actually do, in three buckets."
          lead="Research and structure first, visual craft second, tools last — in that order of importance."
        />
      </Reveal>

      {/* Deliberately uneven columns: UX carries the most weight */}
      <div className="mt-14 grid gap-5 lg:mt-16 lg:grid-cols-12">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.id}
            delay={i * 80}
            className={
              i === 0
                ? 'lg:col-span-5'
                : i === 1
                  ? 'lg:col-span-4'
                  : 'lg:col-span-3'
            }
          >
            <div className="flex h-full flex-col rounded-[1.5rem] border border-beige-deep/60 bg-card p-7 lg:p-8">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-2xl text-forest">{group.label}</h3>
                <span className="font-mono text-[0.65rem] text-bronze">
                  {String(group.items.length).padStart(2, '0')}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-faint">{group.caption}</p>
              <ul className="mt-7 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Chip tone={i === 2 ? 'bronze' : 'beige'}>{item}</Chip>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120} className="mt-10">
        <Link
          to="/about"
          className="link-underline inline-flex items-center gap-2 font-medium text-forest"
        >
          More about how I work
          <ArrowRight size={16} aria-hidden />
        </Link>
      </Reveal>
    </section>
  )
}

function GalleryTeaser() {
  const preview = gallery.slice(0, 5)

  return (
    <section className="shell pt-24 lg:pt-32">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead index="03" title="A look at the screens themselves." />
          <Link
            to="/gallery"
            className="link-underline inline-flex items-center gap-2 pb-2 font-medium text-forest"
          >
            Open the full gallery
            <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </Reveal>

      {/* Mosaic: first tile spans two columns to break the grid rhythm */}
      <div className="mt-12 grid auto-rows-[13rem] grid-cols-2 gap-4 lg:mt-14 lg:auto-rows-[15rem] lg:grid-cols-4">
        {preview.map((item, i) => (
          <Reveal
            key={item.src}
            delay={i * 70}
            className={i === 0 ? 'col-span-2 row-span-2' : ''}
          >
            <Link
              to="/gallery"
              className="group relative block h-full overflow-hidden rounded-2xl border border-beige-deep/60"
            >
              <Picture
                src={item.src}
                alt={item.title}
                sizes="(min-width: 1024px) 26vw, 50vw"
                className="h-full"
                imgClassName="group-hover:scale-[1.05]"
              />
              <span className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-forest/90 to-transparent p-4 pt-10 text-[0.8125rem] font-medium text-paper opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {item.title}
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function ClosingCta() {
  return (
    <section className="shell pt-24 lg:pt-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-beige-deep/60 bg-paper-2 px-7 py-16 text-center lg:px-16 lg:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 left-1/2 size-[30rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(30,58,44,0.1),transparent_65%)]"
          />
          <Eyebrow className="relative">Next step</Eyebrow>
          <h2 className="relative mx-auto mt-6 max-w-2xl text-[clamp(2rem,5vw,3.4rem)] leading-[1.02] text-forest">
            Looking for a junior designer who starts with the user?
          </h2>
          <p className="relative mx-auto mt-6 max-w-lg text-lg text-ink-soft">
            I am actively applying for UI/UX roles and internships. My case studies, prototypes and
            résumé are a message away.
          </p>
          <div className="relative mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className={buttonStyles('solid')}>
              Contact Me
            </Link>
            <Link to="/work" className={buttonStyles('outline')}>
              View Projects
              <ArrowDown size={15} aria-hidden className="rotate-[-45deg]" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
