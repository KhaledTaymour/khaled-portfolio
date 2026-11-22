import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { roles } from '@/data/experience'
import { profile } from '@/data/profile'
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion'

/* ── Pixel sprite ───────────────────────────────────────────────────────────
   An original 10×15 pixel coder in a green hoodie with a cyan headset.
   Two leg frames alternate while walking. */
const BODY = [
  '..GGGGGG..',
  '.GGGGGGGG.',
  '.GSSSSSSG.',
  'CGSKSSKSGC',
  'CGSSSSSSGC',
  '..SSSSSS..',
  '...SSSS...',
  '.GGGGGGGG.',
  'GGGGGGGGGG',
  'SGGGGGGGGS',
  '.GGGGGGGG.',
  '.LLLLLLLL.',
]
const LEGS_A = ['..LL..LL..', '.LL....LL.', '.DD....DD.']
const LEGS_B = ['...LLLL...', '...LL.LL..', '...DD.DD..']
const COLORS: Record<string, string> = {
  G: '#39FF14', S: '#F1C27D', K: '#090A0F', C: '#00E5FF', L: '#4B526D', D: '#A6ACCD',
}

function pixels(rows: string[], yOffset = 0) {
  return rows.flatMap((row, y) =>
    [...row].map((ch, x) =>
      ch === '.' ? null : (
        <rect key={`${x}-${y + yOffset}`} x={x} y={y + yOffset} width={1.02} height={1.02} fill={COLORS[ch]} />
      ),
    ),
  )
}

function Coder({ walking }: { walking: boolean }) {
  return (
    <svg
      viewBox="0 0 10 15"
      className="w-8 h-12 sm:w-10 sm:h-[60px]"
      style={{ imageRendering: 'pixelated' }}
      aria-hidden="true"
    >
      {pixels(BODY)}
      <g className={walking ? 'run-frame-a' : ''}>{pixels(LEGS_A, BODY.length)}</g>
      <g className={walking ? 'run-frame-b' : 'hidden'}>{pixels(LEGS_B, BODY.length)}</g>
    </svg>
  )
}

/* ── Stops on the track: one per role, plus the next level ──────────────── */
const STOP_COUNT = roles.length + 1
const stopX = (i: number) => 8 + (i * 84) / (STOP_COUNT - 1) // percent from the left

const MS_PER_STAGE = 600 // walking time per stage, so longer walks take longer

const totalXp = roles.reduce((sum, r) => sum + r.wins.length, 0)

export function CareerPage() {
  const navigate = useNavigate()
  const reducedMotion = usePrefersReducedMotion()
  const [stop, setStop] = useState(roles.length - 1) // start at the current role
  const [prevStop, setPrevStop] = useState(roles.length - 1)
  const [walking, setWalking] = useState(false)
  const [visited, setVisited] = useState<Set<number>>(() => new Set([roles.length - 1]))

  // Forward = walk (progress through the career); backward = instant jump back.
  const movingForward = stop > prevStop
  const jumpedBack = stop < prevStop // false on first load, so no flicker on mount
  const animate = movingForward && !reducedMotion
  const walkMs = Math.abs(stop - prevStop) * MS_PER_STAGE

  const goTo = (next: number) => {
    const clamped = Math.max(0, Math.min(STOP_COUNT - 1, next))
    if (clamped === stop) return
    setPrevStop(stop)
    setStop(clamped)
    setVisited((v) => new Set(v).add(clamped))
    if (clamped > stop && !reducedMotion) setWalking(true)
    else setWalking(false)
  }

  // Walking lasts as long as the slide transition
  useEffect(() => {
    if (!walking) return
    const t = setTimeout(() => setWalking(false), walkMs)
    return () => clearTimeout(t)
  }, [walking, stop, walkMs])

  // ← / → walk between stops
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.altKey || e.ctrlKey || e.metaKey) return // Alt+← is browser Back
      if (e.target instanceof HTMLElement && ['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return
      if (e.key === 'ArrowRight') goTo(stop + 1)
      if (e.key === 'ArrowLeft') goTo(stop - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  const xp = useMemo(
    () => roles.reduce((sum, r, i) => sum + (visited.has(i) ? r.wins.length : 0), 0),
    [visited],
  )

  const isNextLevel = stop === roles.length
  const role = roles[stop]

  return (
    <div className="p-4 md:p-6 pb-12 font-code text-sm leading-7">
      <p className="syn-comment">
        {'// career.run: '}{roles[0].start.split(' ')[1]} → now, {roles.length} stages, {profile.yearsExperience}+ years.
      </p>
      <p className="syn-comment mb-4">
        {'// Walk with ← → or pick a stage. Every win you reach is +1 XP.'}
      </p>

      {/* HUD */}
      <div className="flex flex-wrap gap-x-6 gap-y-1 mb-2 text-[11px] tracking-widest uppercase">
        <span className="text-terminal-green">
          {isNextLevel ? 'Stage: next' : `Stage ${stop + 1} of ${roles.length}`}
        </span>
        <span className="text-warm-amber">
          XP {xp}/{totalXp}
        </span>
        <span className="text-cyber-cyan">
          {isNextLevel ? 'Next: you decide' : `${role.start} → ${role.end}`}
        </span>
      </div>

      {/* Track (decorative; the world buttons below carry the same info) */}
      <div
        aria-hidden="true"
        className="relative h-44 sm:h-52 border border-border-dim bg-abyss overflow-hidden select-none"
        style={{
          backgroundImage:
            'radial-gradient(1px 1px at 12% 20%, #A6ACCD55 50%, transparent 51%),' +
            'radial-gradient(1px 1px at 37% 35%, #A6ACCD44 50%, transparent 51%),' +
            'radial-gradient(1px 1px at 63% 15%, #A6ACCD55 50%, transparent 51%),' +
            'radial-gradient(1px 1px at 81% 40%, #A6ACCD33 50%, transparent 51%),' +
            'radial-gradient(1px 1px at 94% 22%, #A6ACCD44 50%, transparent 51%)',
        }}
      >
        {/* Ground: pixel blocks */}
        <div
          className="absolute inset-x-0 bottom-0 h-8 border-t-2 border-terminal-green/60"
          style={{
            backgroundColor: '#13151D',
            backgroundImage:
              'linear-gradient(90deg, #222436 2px, transparent 2px), linear-gradient(#222436 2px, transparent 2px)',
            backgroundSize: '16px 16px',
          }}
        />

        {/* Progress trail between visited stops */}
        <div
          className="absolute bottom-8 h-0.5 bg-terminal-green/40"
          style={{ left: `${stopX(0)}%`, width: `${stopX(stop) - stopX(0)}%`, transition: animate ? `width ${walkMs}ms linear` : 'none' }}
        />

        {/* Checkpoints */}
        {[...roles, null].map((r, i) => {
          const reached = visited.has(i)
          return (
            <div
              key={r?.id ?? 'next'}
              className="absolute bottom-8 flex flex-col items-center -translate-x-1/2"
              style={{ left: `${stopX(i)}%` }}
            >
              {/* Collectible above the checkpoint */}
              <span
                className={`mb-1 text-[10px] sm:text-xs font-bold ${reached ? 'text-warm-amber' : 'text-faded-slate'} ${
                  reached && !reducedMotion ? 'animate-bounce' : ''
                }`}
              >
                {r ? `</>×${r.wins.length}` : 'TODO'}
              </span>
              {/* Tower with a screen */}
              <div
                className={`w-9 h-9 sm:w-12 sm:h-12 border-2 flex items-center justify-center bg-void-black ${
                  r ? (reached ? 'border-terminal-green' : 'border-border-dim') : 'border-dashed border-warm-amber'
                }`}
              >
                {r ? (
                  <img src={r.companyLogo} alt="" className={`max-w-[80%] max-h-[80%] object-contain ${reached ? '' : 'opacity-40 grayscale'}`} />
                ) : (
                  <span className="text-warm-amber text-xs sm:text-sm font-bold">
                    {'>_'}
                    <span className={reducedMotion ? '' : 'animate-blink'}>▍</span>
                  </span>
                )}
              </div>
              {/* Signpost pole, as tall as the coder, who stands in front of it */}
              <div className={`w-1 h-12 sm:h-[60px] ${reached ? 'bg-terminal-green/50' : 'bg-border-dim'}`} />
            </div>
          )
        })}

        {/* The coder */}
        <div
          className="absolute bottom-8 -translate-x-1/2 z-10"
          style={{
            left: `${stopX(stop)}%`,
            transition: animate ? `left ${walkMs}ms linear` : 'none',
          }}
        >
          {/* Re-keyed on a backward jump so the short "respawn" flicker replays */}
          <div key={jumpedBack ? `jump-${stop}` : 'walk'} className={jumpedBack && !reducedMotion ? 'respawn' : ''}>
            <Coder walking={walking} />
          </div>
        </div>
      </div>

      {/* World select: the readable timeline */}
      <div role="group" aria-label="Career stages" className="grid grid-cols-2 lg:grid-cols-5 gap-2 mt-4">
        {roles.map((r, i) => (
          <button
            key={r.id}
            onClick={() => goTo(i)}
            aria-pressed={stop === i}
            className={`text-left border p-2.5 sm:p-3 transition-colors ${
              stop === i
                ? 'border-terminal-green bg-editor-alt shadow-neon-green'
                : 'border-border-dim bg-elevated hover:border-terminal-green/60'
            }`}
          >
            <span className="block text-[10px] tracking-widest text-faded-slate">STAGE {i + 1}</span>
            <span className="block text-xs text-cyber-cyan leading-snug">{r.company}</span>
            <span className="block text-[11px] text-lavender leading-snug mt-0.5">{r.title}</span>
            <span className="block text-[11px] text-warm-amber mt-1">
              {r.start} → {r.end}
            </span>
          </button>
        ))}
        <button
          onClick={() => goTo(roles.length)}
          aria-pressed={isNextLevel}
          className={`text-left border border-dashed p-2.5 sm:p-3 transition-colors col-span-2 lg:col-span-1 ${
            isNextLevel ? 'border-warm-amber bg-editor-alt' : 'border-warm-amber/50 bg-elevated hover:border-warm-amber'
          }`}
        >
          <span className="block text-[10px] tracking-widest text-faded-slate">NEXT LEVEL</span>
          <span className="block text-xs text-warm-amber leading-snug">TBD · your team</span>
          <span className="block text-[11px] text-lavender leading-snug mt-0.5">Your team’s next senior FE hire</span>
          <span className="block text-[11px] text-faded-slate mt-1">Open to relocation</span>
        </button>
      </div>

      {/* Details for the current stop */}
      {/* Short announcement for screen readers instead of re-reading every bullet */}
      <p aria-live="polite" className="sr-only">
        {isNextLevel ? 'Next level: your team' : `Stage ${stop + 1} of ${roles.length}: ${role.company}, ${role.title}`}
      </p>
      <section className="mt-4 border border-border-dim bg-elevated p-4 md:p-6">
        {isNextLevel ? (
          <div>
            <h2 className="text-warm-amber text-base font-semibold">NEXT_LEVEL.load()</h2>
            <p className="text-lavender text-xs mt-2 leading-relaxed max-w-prose">
              Looking for a Senior Software Engineer (Frontend) role in a product-led tech company:
              real-time, data-heavy UIs and LLM-powered features. Based in {profile.location}, open to relocation.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="mt-4 flex items-center gap-2 bg-terminal-green text-void-black px-5 py-2 font-mono text-xs font-bold hover:bg-[#32e612] transition-colors"
            >
              <Icon icon="material-symbols:play-arrow" className="text-base" />
              START_LEVEL
            </button>
          </div>
        ) : (
          <div>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h2 className="text-cyber-cyan text-base font-semibold">{role.title}</h2>
              <span className="text-lavender text-xs">@ {role.company}</span>
            </div>
            <p className="text-[11px] text-faded-slate mt-1">
              {role.start} → {role.end} · {role.location}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {role.stack.map((s) => (
                <span key={s} className="text-[10px] px-1.5 py-0.5 border border-border-dim text-faded-slate">
                  {s}
                </span>
              ))}
            </div>
            <ul className="mt-4 space-y-1.5">
              {role.wins.map((w) => (
                <li key={w} className="flex gap-2 text-xs leading-relaxed text-lavender">
                  <span className="shrink-0 text-warm-amber font-bold">+1</span>
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  )
}
