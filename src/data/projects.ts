export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  status: 'SHIPPED' | 'WIP' | 'OPEN_SOURCE'
  company?: string          // Work highlight
  companyLogo?: string      // path to logo in src/assets/companies/
  githubUrl?: string
  demoUrl?: string
}

// ── Work Highlights ────────────────────────────────────────────────────────────

export const workProjects: Project[] = [
  {
    id: 'site-intelligence',
    title: '"Site Intelligence Platform"',
    description:
      '"Overhauled and scaled a geospatial analytics platform with Google Maps integration, ' +
      'a recommender engine that drove a 6x growth in onboarded customers across KSA."',
    tech: ['React', 'TypeScript', 'Google Maps', 'TanStack Query'],
    status: 'SHIPPED',
    company: 'Intelmatix',
    companyLogo: '/logos/intelmatix.png',
  },
  {
    id: 'workforce-scheduling',
    title: '"Workforce Scheduling Module"',
    description:
      '"Reworked state management patterns using Zustand and TanStack Query, ' +
      'delivering a noticeably more responsive scheduling UI for enterprise clients."',
    tech: ['React', 'Zustand', 'TanStack Query', 'TypeScript'],
    status: 'SHIPPED',
    company: 'Intelmatix',
    companyLogo: '/logos/intelmatix.png',
  },
  {
    id: 'design-system',
    title: '"Shared Design System"',
    description:
      '"Key contributor to a cross-team design system built with Radix UI, Tailwind, ' +
      'and Storybook; initiated AI assistants + Figma MCP to accelerate story generation."',
    tech: ['Radix UI', 'Tailwind CSS', 'Storybook', 'TypeScript'],
    status: 'SHIPPED',
    company: 'Intelmatix',
    companyLogo: '/logos/intelmatix.png',
  },
  {
    id: 'incorta-platform',
    title: '"Incorta Cloud Platform"',
    description:
      '"Refactored the cloud BI platform with improved code quality, increased test ' +
      'coverage, Auth0 SSO integration, and a Data Apps marketplace — resulting in a 35% ' +
      'increase in user downloads."',
    tech: ['React', 'TypeScript', 'Auth0', 'Jest', 'Playwright'],
    status: 'SHIPPED',
    company: 'Incorta',
    companyLogo: '/logos/incorta.png',
  },
  {
    id: 'gis-emergency',
    title: '"GIS Emergency Response Apps"',
    description:
      '"Converted design mockups into responsive geospatially powered React apps for the ' +
      'US public safety sector; led performance optimization to reduce load times for ' +
      'mission-critical workflows."',
    tech: ['React', 'TypeScript', 'ESRI Maps', 'Geodata'],
    status: 'SHIPPED',
    company: 'QSIT (ESRI North-East Africa)',
    companyLogo: '/logos/esri.png',
  },
]

// ── Personal / Side Projects ──────────────────────────────────────────────────
// TODO: add your GitHub projects here

export const sideProjects: Project[] = [
  {
    id: 'side-project-1',
    title: '"// coming soon"',
    description: '"Personal project — details to be added."',
    tech: [],
    status: 'WIP',
    githubUrl: 'https://github.com/KhaledTaymour',
  },
  {
    id: 'side-project-2',
    title: '"// coming soon"',
    description: '"Personal project — details to be added."',
    tech: [],
    status: 'WIP',
    githubUrl: 'https://github.com/KhaledTaymour',
  },
]

export const allProjects: Project[] = [...workProjects, ...sideProjects]
