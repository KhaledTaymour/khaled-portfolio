import { HashRouter, Routes, Route } from 'react-router-dom'
import { IDEShell } from '@/components/layout/IDEShell'
import { HomePage } from '@/pages/HomePage'
import { CareerPage } from '@/pages/CareerPage'
import { SkillsPage } from '@/pages/SkillsPage'
import { ProjectsPage } from '@/pages/ProjectsPage'
import { ContactPage } from '@/pages/ContactPage'

export default function App() {
  return (
    <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <IDEShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </IDEShell>
    </HashRouter>
  )
}
