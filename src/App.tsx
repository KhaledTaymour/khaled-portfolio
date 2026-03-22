import { HashRouter, Routes, Route } from 'react-router-dom'
import { IDEShell } from '@/components/layout/IDEShell'
import { HomePage } from '@/pages/HomePage'
import { SkillsPage } from '@/pages/SkillsPage'
import { ProjectsPage } from '@/pages/ProjectsPage'
import { ContactPage } from '@/pages/ContactPage'

export default function App() {
  return (
    <HashRouter>
      <IDEShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </IDEShell>
    </HashRouter>
  )
}
