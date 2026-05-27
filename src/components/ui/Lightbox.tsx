import { useCallback, useEffect, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { Icon } from '@iconify/react'
import type { Screenshot } from '@/data/projects'

const RICH_RE =
  /(under\s+\d[\d.,]*\s?\w+|~?\d[\d.,]*\+?(?:ms|%)?(?:\s?-?\s?(?:weeks?|months?|engineer[- ]?team|engineers?|phases?|buses|KPIs))?|\b(?:Led|mission-critical|architecture|real-time|command center|Arabic-first|RTL|resilient|mentor(?:ed|ing)?)\b)/gi

/** Emphasize quantifications (mono/green) and strength phrases (headline/cyan). */
function renderRich(text: string) {
  const out: ReactNode[] = []
  let last = 0
  let key = 0
  let m: RegExpExecArray | null
  RICH_RE.lastIndex = 0
  while ((m = RICH_RE.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index))
    const seg = m[0]
    const isQuant = /\d/.test(seg)
    out.push(
      <span
        key={key++}
        className={
          isQuant
            ? 'font-mono font-bold text-terminal-green'
            : 'font-headline font-semibold text-cyber-cyan'
        }
      >
        {seg}
      </span>,
    )
    last = m.index + seg.length
  }
  if (last < text.length) out.push(text.slice(last))
  return out
}

interface LightboxProps {
  shots: Screenshot[]
  startIndex?: number
  title?: string
  description?: string
  onClose: () => void
}

export function Lightbox({ shots, startIndex = 0, title, description, onClose }: LightboxProps) {
  const [index, setIndex] = useState(startIndex)

  const next = useCallback(
    () => setIndex((i) => (i + 1) % shots.length),
    [shots.length],
  )
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + shots.length) % shots.length),
    [shots.length],
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [next, prev, onClose])

  const shot = shots[index]

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title ?? 'Screenshots'}
      className="fixed inset-0 z-50 flex flex-col bg-void-black/95 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border-dim font-code text-xs">
        <span className="text-cyber-cyan truncate pr-4">
          {title ?? 'screenshots'}{' '}
          <span className="text-faded-slate">
            [{index + 1}/{shots.length}]
          </span>
        </span>
        <button
          onClick={onClose}
          aria-label="Close"
          className="text-faded-slate hover:text-terminal-green transition-colors"
        >
          <Icon icon="material-symbols:close" className="text-xl" />
        </button>
      </div>

      {/* Description */}
      {description && (
        <p
          className="mx-auto max-w-3xl px-4 py-3 text-center font-code text-xs leading-relaxed text-lavender border-b border-border-dim"
          onClick={(e) => e.stopPropagation()}
        >
          {renderRich(description)}
        </p>
      )}

      {/* Stage */}
      <div
        className="relative flex flex-1 items-center justify-center p-4 md:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {shots.length > 1 && (
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-2 md:left-4 z-10 flex h-10 w-10 items-center justify-center border border-border-dim bg-elevated/80 text-faded-slate hover:text-terminal-green hover:border-terminal-green transition-colors"
          >
            <Icon icon="material-symbols:chevron-left" className="text-2xl" />
          </button>
        )}

        <figure className="flex max-h-full max-w-5xl flex-col items-center gap-3">
          <img
            src={shot.src}
            alt={shot.caption}
            className="max-h-[70vh] w-auto border border-border-dim object-contain shadow-neon-cyan"
          />
          <figcaption className="text-center font-code text-xs text-faded-slate">
            {shot.caption}
          </figcaption>
        </figure>

        {shots.length > 1 && (
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-2 md:right-4 z-10 flex h-10 w-10 items-center justify-center border border-border-dim bg-elevated/80 text-faded-slate hover:text-terminal-green hover:border-terminal-green transition-colors"
          >
            <Icon icon="material-symbols:chevron-right" className="text-2xl" />
          </button>
        )}
      </div>

      {/* Thumbnails */}
      {shots.length > 1 && (
        <div
          className="flex justify-center gap-2 px-4 py-3 border-t border-border-dim"
          onClick={(e) => e.stopPropagation()}
        >
          {shots.map((s, i) => (
            <button
              key={s.src}
              onClick={() => setIndex(i)}
              aria-label={`View ${s.caption}`}
              className={`h-12 w-20 overflow-hidden border transition-all ${
                i === index
                  ? 'border-terminal-green opacity-100'
                  : 'border-border-dim opacity-50 hover:opacity-80'
              }`}
            >
              <img src={s.src} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>,
    document.body,
  )
}
