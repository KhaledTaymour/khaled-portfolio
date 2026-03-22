import { useNavigate, useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react'

const TABS = [
  { path: '/',        file: 'homepage.tsx', icon: 'material-symbols:code',        iconColor: 'text-[#61afef]' },
  { path: '/skills',  file: 'skills.json',  icon: 'material-symbols:data-object', iconColor: 'text-yellow-400' },
  { path: '/projects',file: 'projects.ts',  icon: 'material-symbols:javascript',  iconColor: 'text-[#3178C6]' },
  { path: '/contact', file: 'contact.sh',   icon: 'material-symbols:terminal',    iconColor: 'text-cyber-cyan' },
]

export function TabBar() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <div className="flex items-center w-full h-10 bg-editor border-b border-border-dim shrink-0 overflow-x-auto no-scrollbar">
      {TABS.map((tab) => {
        const isActive = pathname === tab.path
        return (
          <button
            key={tab.path}
            onClick={() => navigate(tab.path)}
            className={`
              flex items-center gap-2 px-4 h-full shrink-0 border-r border-border-dim/30 font-code text-xs
              transition-colors duration-200 cursor-pointer
              ${isActive
                ? 'text-terminal-green bg-editor-alt border-t-2 border-t-terminal-green'
                : 'text-lavender bg-editor opacity-70 hover:bg-editor-alt hover:text-terminal-green hover:opacity-100'
              }
            `}
          >
            <Icon icon={tab.icon} className={`text-base ${isActive ? 'text-terminal-green' : tab.iconColor}`} />
            <span>{tab.file}</span>
            {isActive && (
              <Icon icon="material-symbols:close" className="text-sm text-faded-slate hover:text-lavender ml-1" />
            )}
          </button>
        )
      })}
      <div className="ml-auto flex items-center gap-2 px-4 h-full border-l border-border-dim/30">
        <Icon icon="material-symbols:splitscreen" className="text-faded-slate text-lg hover:text-lavender cursor-pointer" />
        <Icon icon="material-symbols:more-vert" className="text-faded-slate text-lg hover:text-lavender cursor-pointer" />
      </div>
    </div>
  )
}
