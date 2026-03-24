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
    id: 'dcc-dispatch',
    title: '"DCC™ Dispatching Command & Control"',
    description:
      '"Built a geospatial web app for handling 9-1-1 calls, reporting incidents, and ' +
      'dispatching responder units in real time — integrating multiple map providers ' +
      '(Google, Esri, Bing) into a unified emergency response interface."',
    tech: ['React', 'Redux', 'Maps APIs', 'Sass', 'Ant Design'],
    status: 'SHIPPED',
    company: 'QSIT (ESRI North-East Africa)',
    companyLogo: '/logos/esri.png',
  },
  {
    id: 'scc-spatial',
    title: '"SCC™ Spatial Command & Control"',
    description:
      '"Developed a GIS-powered web app for public safety and emergency response, ' +
      'integrating ArcGIS, Google Maps, and Here Maps APIs with rich data grids ' +
      'for mission-critical workflows."',
    tech: ['JavaScript', 'ArcGIS JS API', 'Google Maps API', 'Kendo UI', 'ag-Grid'],
    status: 'SHIPPED',
    company: 'QSIT (ESRI North-East Africa)',
    companyLogo: '/logos/esri.png',
  },
  {
    id: 'mgsi-spatial',
    title: '"MGSI™ Multigen Spatial Infrastructure"',
    description:
      '"Built a dynamic spatial data integration and transformation product that accepts ' +
      'data from multiple sources, manipulates them via user-defined pipelines, and loads ' +
      'them to live data sources."',
    tech: ['C#', 'Entity Framework', 'Windows Forms', 'Kendo UI', 'SQL Server'],
    status: 'SHIPPED',
    company: 'QSIT (ESRI North-East Africa)',
    companyLogo: '/logos/esri.png',
  },
  {
    id: 'change-detection',
    title: '"Change Detection in Egypt"',
    description:
      '"Created a full end-to-end solution — from extracting illegal activity features ' +
      'from satellite imagery (desktop), through data analysis and workflows (web), ' +
      'to field delegate assignment (mobile) — for detecting unauthorized construction ' +
      'and agricultural land dredging."',
    tech: ['C#', 'JavaScript', 'PostgreSQL', 'PostGIS', 'Hexagon Erdas™'],
    status: 'SHIPPED',
    company: 'Edge-Pro',
    companyLogo: '/logos/edge-pro.png',
  },
  {
    id: 'gudc-geospatial',
    title: '"GUDC™ Giza Utility Data Center"',
    description:
      '"Developed daily geospatial workflows for surveying utilities data (electricity, ' +
      'water, gas, sewer, telecom, streets) in Giza Governorate; built 6 GeoMedia™ add-ons ' +
      'automating the full lifecycle from raw spatial data to styled prints."',
    tech: ['C#', 'Windows Forms', 'PostgreSQL', 'PostGIS', 'Hexagon GeoMedia™'],
    status: 'SHIPPED',
    company: 'Edge-Pro',
    companyLogo: '/logos/edge-pro.png',
  },
  {
    id: 'mwri-canals',
    title: '"MWRI™ Canals System"',
    description:
      '"Managed and built geospatial workflows for the Ministry of Water Resources ' +
      'and Irrigation\'s rivers and canals network."',
    tech: ['JavaScript', 'PostgreSQL', 'PostGIS', 'Hexagon Mapp Enterprise™'],
    status: 'SHIPPED',
    company: 'Edge-Pro',
    companyLogo: '/logos/edge-pro.png',
  },
  {
    id: 'security-personnel',
    title: '"Security Personnel Control"',
    description:
      '"Built a geospatial system for managing and tracking security guards\' locations ' +
      'and assignments for a security services company."',
    tech: ['C#', 'PostgreSQL', 'PostGIS', 'Skyline™'],
    status: 'SHIPPED',
    company: 'Edge-Pro',
    companyLogo: '/logos/edge-pro.png',
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
