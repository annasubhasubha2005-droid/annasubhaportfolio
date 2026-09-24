import { Link } from '@tanstack/react-router'
import { navigation, profile, socials } from '@/data/portfolio'
import { PLACEHOLDER } from '@/data/portfolio'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-28 border-t border-beige-deep/60 bg-forest text-paper/80">
      <div className="shell py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-bronze-soft">
              Available for work
            </p>
            <p className="mt-5 max-w-sm font-display text-[clamp(1.6rem,3vw,2.1rem)] leading-[1.1] text-paper">
              {profile.tagline}
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-medium text-forest transition-all duration-300 hover:-translate-y-0.5 hover:bg-beige"
            >
              Start a conversation
            </Link>
          </div>

          <div>
            <h3 className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-paper/45">
              Pages
            </h3>
            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    activeOptions={{ exact: item.to === '/' }}
                    className="link-underline text-[0.9375rem] text-paper/75 transition-colors hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-paper/45">
              Elsewhere
            </h3>
            <ul className="mt-5 space-y-3">
              {socials.map((social) =>
                social.url === PLACEHOLDER ? (
                  <li
                    key={social.label}
                    className="text-[0.9375rem] text-paper/35"
                    title="Add this link in src/data/portfolio.ts"
                  >
                    {social.label}
                  </li>
                ) : (
                  <li key={social.label}>
                    <a
                      href={social.url}
                      target={social.url.startsWith('http') ? '_blank' : undefined}
                      rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="link-underline text-[0.9375rem] text-paper/75 transition-colors hover:text-paper"
                    >
                      {social.label}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-paper/10 pt-7 text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}. Designed and built in Figma and code.
          </p>
          <p className="font-mono uppercase tracking-[0.14em]">{profile.location}</p>
        </div>
      </div>
    </footer>
  )
}
