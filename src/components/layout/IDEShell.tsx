import type { ReactNode } from 'react'
import { TitleBar } from './TitleBar'
import { TabBar } from './TabBar'
import { Sidebar } from './Sidebar'
import { Breadcrumb } from './Breadcrumb'
import { StatusBar } from './StatusBar'

interface IDEShellProps {
  children: ReactNode
}

export function IDEShell({ children }: IDEShellProps) {
  return (
    <div className="h-screen w-full flex flex-col bg-void-black overflow-hidden font-code text-lavender">
      <TitleBar />
      <TabBar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 flex flex-col bg-void-black overflow-hidden">
          <Breadcrumb />
          <div className="flex-1 overflow-y-auto pb-6">
            {children}
          </div>
        </main>
      </div>
      <StatusBar />
    </div>
  )
}
