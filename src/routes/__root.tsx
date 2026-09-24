import { HeadContent, Scripts, createRootRoute, Link } from '@tanstack/react-router'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { buttonStyles } from '@/components/kit'

import '../styles.css'

const siteName = 'Annasubha — UI/UX Designer'
const siteDescription =
  'Portfolio of Annasubha, a UI/UX designer who designs simple, user-friendly and visually clear digital experiences. Case studies, interface gallery and contact.'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: siteName },
      { name: 'description', content: siteDescription },
      { name: 'theme-color', content: '#f7f2e9' },
      { property: 'og:title', content: siteName },
      { property: 'og:description', content: siteDescription },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Familjen+Grotesk:ital,wght@0,400..700;1,400..700&family=IBM+Plex+Mono:wght@400;500&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&display=swap',
      },
      { rel: 'icon', href: '/favicon.ico' },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[70] focus:rounded-full focus:bg-forest focus:px-5 focus:py-3 focus:text-sm focus:text-paper"
        >
          Skip to content
        </a>
        <div className="grain" aria-hidden />
        <SiteHeader />
        <main id="main" className="pt-[4.5rem] lg:pt-20">
          {children}
        </main>
        <SiteFooter />
        <Scripts />
      </body>
    </html>
  )
}

function NotFound() {
  return (
    <section className="shell flex min-h-[70vh] flex-col justify-center py-24">
      <span className="eyebrow">Error 404</span>
      <h1 className="mt-6 max-w-2xl text-[clamp(2.4rem,6vw,4.5rem)] leading-[0.98] text-forest">
        This page hasn’t been designed yet.
      </h1>
      <p className="mt-6 max-w-md text-lg text-ink-soft">
        The link you followed doesn’t lead anywhere. The work, however, is all still here.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link to="/work" className={buttonStyles('solid')}>
          View case studies
        </Link>
        <Link to="/" className={buttonStyles('outline')}>
          Back home
        </Link>
      </div>
    </section>
  )
}
