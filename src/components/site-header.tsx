import { useEffect, useState } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { navigation, profile } from '@/data/portfolio'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = useRouterState({ select: (s) => s.location.pathname })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile sheet whenever the route changes.
  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500',
        scrolled || open
          ? 'border-b border-beige-deep/60 bg-paper/85 backdrop-blur-xl'
          : 'border-b border-transparent',
      )}
    >
      <div className="shell flex h-[4.5rem] items-center justify-between gap-6 lg:h-20">
        <Link to="/" className="group flex items-center gap-3" aria-label={`${profile.name} — home`}>
          <span className="grid size-9 place-items-center rounded-full bg-forest font-display text-[0.95rem] text-paper transition-transform duration-500 group-hover:rotate-[-8deg]">
            A
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[0.95rem] tracking-tight text-forest">
              {profile.name}
            </span>
            <span className="mt-0.5 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ink-faint">
              {profile.role}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === '/' }}
              className={cn(
                'relative rounded-full px-4 py-2 text-sm text-ink-soft transition-colors duration-300',
                'hover:text-forest data-[status=active]:text-forest',
                'after:absolute after:inset-x-4 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-bronze',
                'after:transition-transform after:duration-500 data-[status=active]:after:scale-x-100',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-soft md:inline-flex"
          >
            Hire me
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid size-10 place-items-center rounded-full border border-forest/20 text-forest transition-colors hover:bg-forest/5 md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        className={cn(
          'overflow-hidden border-t border-beige-deep/50 bg-paper/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden',
          open ? 'max-h-[26rem] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <nav className="shell flex flex-col py-4" aria-label="Mobile">
          {navigation.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === '/' }}
              style={{ transitionDelay: open ? `${80 + i * 45}ms` : '0ms' }}
              className={cn(
                'flex items-center justify-between border-b border-beige-deep/40 py-4 font-display text-2xl text-forest/70 transition-all duration-500',
                'data-[status=active]:text-forest',
                open ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0',
              )}
            >
              {item.label}
              <span className="font-mono text-[0.65rem] text-bronze">
                0{i + 1}
              </span>
            </Link>
          ))}
          <p className="pt-5 pb-2 text-sm text-ink-faint">{profile.availability}</p>
        </nav>
      </div>
    </header>
  )
}
