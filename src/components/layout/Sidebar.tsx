import { useNavigate, useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react'

const FILES = [
  { path: '/',         file: 'homepage.tsx', icon: 'material-symbols:code',        iconColor: 'text-[#61afef]' },
  { path: '/skills',   file: 'skills.json',  icon: 'material-symbols:data-object', iconColor: 'text-yellow-400' },
  { path: '/projects', file: 'projects.ts',  icon: 'material-symbols:javascript',  iconColor: 'text-[#3178C6]' },
  { path: '/contact',  file: 'contact.sh',   icon: 'material-symbols:terminal',    iconColor: 'text-cyber-cyan' },
]

export function Sidebar() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <aside className="hidden md:flex flex-row h-full w-64 bg-abyss border-r border-border-dim shrink-0 select-none">
      {/* Activity bar (narrow icon strip) */}
      <div className="w-12 bg-editor flex flex-col items-center py-4 gap-1 border-r border-border-dim/50">
        <button className="w-full flex justify-center py-3 text-terminal-green border-l-2 border-terminal-green bg-editor-alt cursor-pointer">
          <Icon icon="material-symbols:folder-open" className="text-lg" />
        </button>
        <button className="w-full flex justify-center py-3 text-lavender opacity-50 hover:bg-editor-alt hover:opacity-100 transition-colors cursor-pointer">
          <Icon icon="material-symbols:search" className="text-lg" />
        </button>
        <button className="w-full flex justify-center py-3 text-lavender opacity-50 hover:bg-editor-alt hover:opacity-100 transition-colors cursor-pointer">
          <Icon icon="material-symbols:source-environment" className="text-lg" />
        </button>
        <button className="w-full flex justify-center py-3 text-lavender opacity-50 hover:bg-editor-alt hover:opacity-100 transition-colors cursor-pointer">
          <Icon icon="material-symbols:extension" className="text-lg" />
        </button>
        <button className="mt-auto w-full flex justify-center py-3 text-lavender opacity-50 hover:bg-editor-alt hover:opacity-100 transition-colors cursor-pointer">
          <Icon icon="material-symbols:settings-outline" className="text-lg" />
        </button>
      </div>

      {/* Explorer panel */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="px-3 py-3 flex justify-between items-center">
          <span className="font-code text-[11px] uppercase tracking-widest text-lavender">EXPLORER</span>
          <Icon icon="material-symbols:more-horiz" className="text-sm text-lavender" />
        </div>
        <div className="px-1">
          {/* Root folder label */}
          <div className="flex items-center gap-1 px-1 py-1 text-[11px] font-code text-terminal-green uppercase tracking-widest">
            <Icon icon="material-symbols:expand-more" className="text-sm" />
            PORTFOLIO_V2
          </div>
          {/* File list */}
          <div className="pl-3 mt-1 space-y-0.5">
            {FILES.map((f) => {
              const isActive = pathname === f.path
              return (
                <button
                  key={f.path}
                  onClick={() => navigate(f.path)}
                  className={`
                    w-full flex items-center gap-2 px-1 py-1 text-xs font-code
                    transition-colors duration-150 cursor-pointer
                    ${isActive
                      ? 'bg-editor-alt text-terminal-green border-l-2 border-terminal-green'
                      : 'text-lavender/70 hover:bg-editor-alt hover:text-terminal-green'
                    }
                  `}
                >
                  <Icon icon={f.icon} className={`text-base shrink-0 ${isActive ? 'text-terminal-green' : f.iconColor}`} />
                  {f.file}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </aside>
  )
}
