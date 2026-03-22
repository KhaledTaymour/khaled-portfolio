import { useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react'

const fileMap: Record<string, string> = {
  '/':         'homepage.tsx',
  '/skills':   'skills.json',
  '/projects': 'projects.ts',
  '/contact':  'contact.sh',
}

export function Breadcrumb() {
  const { pathname } = useLocation()
  const file = fileMap[pathname] ?? 'homepage.tsx'

  return (
    <div className="hidden md:flex items-center px-4 h-7 text-xs text-faded-slate bg-editor-alt/40 border-b border-border-dim gap-1 shrink-0 select-none font-code">
      <span>PORTFOLIO-PROJECT</span>
      <Icon icon="material-symbols:chevron-right" className="text-xs" />
      <span>src</span>
      <Icon icon="material-symbols:chevron-right" className="text-xs" />
      <span className="text-lavender">{file}</span>
    </div>
  )
}
