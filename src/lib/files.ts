/**
 * Single source of truth for the "open files" of the IDE shell.
 * Routes, sidebar, tabs, breadcrumb and status bar all read from here,
 * so adding a page means adding one entry.
 */
export interface IDEFile {
  path: string
  file: string
  icon: string
  iconColor: string
  fileType: string // shown in the status bar
}

export const FILES: IDEFile[] = [
  { path: '/',         file: 'homepage.tsx', icon: 'material-symbols:code',           iconColor: 'text-[#61afef]',   fileType: 'TSX React' },
  { path: '/career',   file: 'career.run',   icon: 'material-symbols:sports-esports', iconColor: 'text-warm-amber',  fileType: 'Career Run' },
  { path: '/projects', file: 'projects.ts',  icon: 'material-symbols:javascript',     iconColor: 'text-[#3178C6]',   fileType: 'TypeScript' },
  { path: '/skills',   file: 'skills.json',  icon: 'material-symbols:data-object',    iconColor: 'text-yellow-400',  fileType: '{} JSON' },
  { path: '/contact',  file: 'contact.sh',   icon: 'material-symbols:terminal',       iconColor: 'text-cyber-cyan',  fileType: 'Shell Script' },
]

export const fileForPath = (pathname: string): IDEFile =>
  FILES.find((f) => f.path === pathname) ?? FILES[0]
