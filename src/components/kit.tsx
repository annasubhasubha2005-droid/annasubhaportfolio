import type { ReactNode } from 'react'
import { ArrowUpRight, Lock } from 'lucide-react'
import { cn } from '@/lib/utils'
import { PLACEHOLDER } from '@/data/portfolio'

type Variant = 'solid' | 'outline' | 'bronze' | 'ghost'

/** Shared button geometry. Used on <Link>, <a> and <button> alike. */
export function buttonStyles(variant: Variant = 'solid', className?: string) {
  return cn(
    'group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium',
    'transition-[transform,background-color,color,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
    'active:translate-y-px',
    variant === 'solid' &&
      'bg-forest text-paper shadow-[0_10px_24px_-14px_rgba(30,58,44,0.8)] hover:-translate-y-0.5 hover:bg-forest-soft hover:shadow-[0_18px_34px_-16px_rgba(30,58,44,0.7)]',
    variant === 'bronze' &&
      'bg-bronze text-paper shadow-[0_10px_24px_-14px_rgba(169,118,47,0.85)] hover:-translate-y-0.5 hover:bg-bronze-soft',
    variant === 'outline' &&
      'border border-forest/25 bg-transparent text-forest hover:-translate-y-0.5 hover:border-forest/60 hover:bg-forest/[0.04]',
    variant === 'ghost' && 'px-0 py-1 text-ink-soft hover:text-forest',
    className,
  )
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn('eyebrow block', className)}>{children}</span>
}

export function SectionHead({
  index,
  title,
  lead,
  align = 'left',
  className,
}: {
  index: string
  title: ReactNode
  lead?: ReactNode
  align?: 'left' | 'wide'
  className?: string
}) {
  return (
    <div className={cn('flex flex-col gap-5', className)}>
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-xs tracking-[0.2em] text-bronze">{index}</span>
        <span className="rule mt-2 hidden flex-1 sm:block" />
      </div>
      <h2
        className={cn(
          'text-[clamp(1.9rem,4.4vw,3.1rem)] leading-[1.04] text-forest',
          align === 'left' ? 'max-w-2xl' : 'max-w-4xl',
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p className="max-w-xl text-[1.0625rem] leading-relaxed text-ink-soft">{lead}</p>
      ) : null}
    </div>
  )
}

export function Chip({
  children,
  tone = 'beige',
  className,
}: {
  children: ReactNode
  tone?: 'beige' | 'forest' | 'bronze'
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3.5 py-1.5 text-[0.8125rem] font-medium',
        tone === 'beige' && 'bg-beige/70 text-ink-soft',
        tone === 'forest' && 'bg-forest/[0.07] text-forest',
        tone === 'bronze' && 'bg-bronze/12 text-bronze',
        className,
      )}
    >
      {children}
    </span>
  )
}

/**
 * External link that degrades gracefully: while `url` is still PLACEHOLDER it
 * renders an obviously-inert chip instead of a dead link, so nothing on the
 * site ever navigates nowhere.
 */
export function ExternalAction({
  url,
  children,
  variant = 'solid',
  pendingLabel,
  className,
}: {
  url: string
  children: ReactNode
  variant?: Variant
  pendingLabel?: string
  className?: string
}) {
  if (!url || url === PLACEHOLDER) {
    return (
      <span
        aria-disabled="true"
        title="Add this link in src/data/portfolio.ts to activate it"
        className={cn(
          'inline-flex cursor-default items-center gap-2 rounded-full border border-dashed border-ink/20 px-5 py-3 text-sm text-ink-faint',
          className,
        )}
      >
        <Lock size={14} strokeWidth={1.75} aria-hidden />
        {pendingLabel ?? 'Link coming soon'}
      </span>
    )
  }

  return (
    <a
      href={url}
      target={url.startsWith('http') ? '_blank' : undefined}
      rel={url.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={buttonStyles(variant, className)}
    >
      {children}
      <ArrowUpRight
        size={16}
        strokeWidth={2}
        aria-hidden
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  )
}
