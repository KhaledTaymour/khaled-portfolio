import { useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react'

const fileTypeMap: Record<string, string> = {
  '/':         'TSX React',
  '/skills':   '{} JSON',
  '/projects': 'TypeScript',
  '/contact':  'Shell Script',
}

export function StatusBar() {
  const { pathname } = useLocation()
  const fileType = fileTypeMap[pathname] ?? 'TSX React'

  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 h-6 bg-terminal-green flex justify-between items-center px-3 select-none shrink-0">
      {/* Left section */}
      <div className="flex items-center h-full">
        <button className="flex items-center gap-1 text-editor text-[10px] font-code font-bold px-3 h-full hover:bg-[#32e612] cursor-pointer">
          <Icon icon="material-symbols:account-tree" className="text-sm" />
          <span>main*</span>
        </button>
        <button className="flex items-center gap-1 text-editor text-[10px] font-code font-bold px-3 h-full hover:bg-[#32e612] cursor-pointer">
          <Icon icon="material-symbols:sync" className="text-sm" />
        </button>
        <button className="flex items-center gap-1 text-editor text-[10px] font-code font-bold px-3 h-full hover:bg-[#32e612] cursor-pointer">
          <Icon icon="material-symbols:error-outline" className="text-sm" />
          <span>0</span>
        </button>
      </div>

      {/* Right section */}
      <div className="flex items-center h-full">
        <button className="text-editor text-[10px] font-code font-bold px-3 h-full hover:bg-[#32e612] cursor-pointer">Ln 1, Col 1</button>
        <button className="text-editor text-[10px] font-code font-bold px-3 h-full hover:bg-[#32e612] cursor-pointer">Spaces: 2</button>
        <button className="text-editor text-[10px] font-code font-bold px-3 h-full hover:bg-[#32e612] cursor-pointer">UTF-8</button>
        <button className="text-editor text-[10px] font-code font-bold px-3 h-full hover:bg-[#32e612] cursor-pointer">LF</button>
        <button className="text-editor text-[10px] font-code font-bold px-3 h-full hover:bg-[#32e612] cursor-pointer">{fileType}</button>
        <button className="text-editor text-[10px] font-code font-bold px-3 h-full hover:bg-[#32e612] cursor-pointer">
          <Icon icon="material-symbols:notifications" className="text-sm" />
        </button>
      </div>
    </footer>
  )
}
