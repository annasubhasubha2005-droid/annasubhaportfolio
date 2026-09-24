import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

/**
 * Every image on this site is served through the Netlify Image CDN, so the
 * full-resolution source in /public/img is never shipped to a browser.
 * The CDN negotiates format (WebP/AVIF) and resizes at the edge.
 */
export function cdnUrl(
  src: string,
  width: number,
  opts: { height?: number; fit?: 'cover' | 'contain' | 'fill'; quality?: number } = {},
) {
  const params = new URLSearchParams({ url: src, w: String(width) })
  if (opts.height) params.set('h', String(opts.height))
  if (opts.fit) params.set('fit', opts.fit)
  params.set('fm', 'webp')
  params.set('q', String(opts.quality ?? 74))
  return `/.netlify/images?${params.toString()}`
}

const DEFAULT_WIDTHS = [420, 640, 900, 1200, 1600]

type PictureProps = {
  src: string
  alt: string
  /** CSS aspect-ratio, e.g. "16 / 9". Omit to let the image set its own height. */
  ratio?: string
  sizes?: string
  widths?: number[]
  priority?: boolean
  className?: string
  imgClassName?: string
  fit?: 'cover' | 'contain'
}

/** Responsive, lazy, edge-optimized image with a warm placeholder and fade-in. */
export function Picture({
  src,
  alt,
  ratio,
  sizes = '(min-width: 1024px) 50vw, 100vw',
  widths = DEFAULT_WIDTHS,
  priority = false,
  className,
  imgClassName,
  fit = 'cover',
}: PictureProps) {
  const ref = useRef<HTMLImageElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (ref.current?.complete) setLoaded(true)
  }, [])

  return (
    <div
      className={cn('relative overflow-hidden bg-beige', className)}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      <img
        ref={ref}
        src={cdnUrl(src, widths[widths.length - 2] ?? 1200)}
        srcSet={widths.map((w) => `${cdnUrl(src, w)} ${w}w`).join(', ')}
        sizes={sizes}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={() => setLoaded(true)}
        className={cn(
          'h-full w-full transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]',
          fit === 'cover' ? 'object-cover' : 'object-contain',
          loaded ? 'scale-100 opacity-100' : 'scale-[1.02] opacity-0',
          imgClassName,
        )}
      />
    </div>
  )
}
