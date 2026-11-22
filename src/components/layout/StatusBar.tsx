import { useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { fileForPath } from '@/lib/files'

const item = 'flex items-center gap-1 whitespace-nowrap text-editor text-[10px] font-code font-bold px-3 h-full hover:bg-[#32e612] cursor-pointer'

export function StatusBar() {
  const { pathname } = useLocation()
  const { fileType } = fileForPath(pathname)

  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 h-6 bg-terminal-green flex justify-between items-center px-1 sm:px-3 select-none shrink-0 overflow-hidden">
      {/* Left section */}
      <div className="flex items-center h-full">
        <button className={item}>
          <Icon icon="material-symbols:account-tree" className="text-sm" />
          <span>main*</span>
        </button>
        <button className={item}>
          <Icon icon="material-symbols:sync" className="text-sm" />
        </button>
        <button className={item}>
          <Icon icon="material-symbols:error-outline" className="text-sm" />
          <span>0</span>
        </button>
      </div>

      {/* Right section: editor details hide on small screens so nothing wraps */}
      <div className="flex items-center h-full">
        <button className={`${item} hidden md:flex`}>Ln 1, Col 1</button>
        <button className={`${item} hidden md:flex`}>Spaces: 2</button>
        <button className={`${item} hidden sm:flex`}>UTF-8</button>
        <button className={`${item} hidden sm:flex`}>LF</button>
        <button className={item}>{fileType}</button>
        <button className={item}>
          <Icon icon="material-symbols:notifications" className="text-sm" />
        </button>
      </div>
    </footer>
  )
}
