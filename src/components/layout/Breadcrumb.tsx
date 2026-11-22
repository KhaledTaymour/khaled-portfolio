import { useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { fileForPath } from '@/lib/files'

export function Breadcrumb() {
  const { pathname } = useLocation()
  const { file } = fileForPath(pathname)

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
