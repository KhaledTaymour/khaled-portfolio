interface SkillBadgeProps {
  label: string
  active?: boolean
}

export function SkillBadge({ label, active = false }: SkillBadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center px-3 py-1 rounded-full text-xs font-code border transition-colors duration-200
        ${active
          ? 'border-terminal-green text-ghost-green bg-terminal-green/5'
          : 'border-border-dim text-lavender bg-elevated hover:border-terminal-green/50'
        }
      `}
    >
      {label}
    </span>
  )
}
