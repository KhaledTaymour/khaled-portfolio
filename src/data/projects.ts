export interface Screenshot {
  src: string       // path under public/
  caption: string
}

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
  privateRepo?: boolean       // code is private, so there is no GitHub link
  screenshots?: Screenshot[]  // opens a lightbox gallery when present
}

// ── Work Highlights ────────────────────────────────────────────────────────────

export const workProjects: Project[] = [
  {
    id: 'rcmc-command-center',
    title: '"RCMC Transport Command & Control Center"',
    description:
      '"Led the frontend architecture and a 3-engineer team to ship a mission-critical Hajj ' +
      'transport command center in under 8 weeks — streaming live telemetry from ~35,000 buses ' +
      'via Server-Sent Events into 255+ real-time KPIs across 8 operational phases, with an ' +
      'Arabic-first RTL UI, live fleet map tracking, and sub-700ms production LCP."',
    tech: ['React 19', 'TypeScript', 'SSE', 'TanStack Query', 'Recharts', 'Vitest', 'Playwright'],
    status: 'SHIPPED',
    company: 'Intelmatix',
    companyLogo: '/logos/intelmatix.png',
    screenshots: [
      { src: '/rcmc/dashboard.png', caption: 'Real-time arrival-phase KPI dashboard — figures redacted for confidentiality' },
      { src: '/rcmc/bus-tracking.png', caption: 'Live fleet map: ~35K buses with clustering & status filters — figures redacted for confidentiality' },
      { src: '/rcmc/alerts.png', caption: 'Real-time operational alerts with severity & phase filters — figures redacted for confidentiality' },
      { src: '/rcmc/report.png', caption: 'Auto-generated A4 operational report with PDF export — figures redacted for confidentiality' },
    ],
  },
  {
    id: 'llm-features',
    title: '"LLM-Powered Product Features"',
    description:
      '"Owning the frontend integration with backend AI services: the UX for streaming ' +
      'model responses and tool calls inside the product."',
    tech: ['React', 'TypeScript', 'LLM streaming', 'Tool calls'],
    status: 'WIP',
    company: 'Intelmatix',
    companyLogo: '/logos/intelmatix.png',
  },
  {
    id: 'ai-assisted-engineering',
    title: '"AI-Assisted Engineering & Knowledge Sharing"',
    description:
      '"Drove Claude Code and Cursor adoption across the FE team: shared configs, MCP ' +
      'integrations and hands-on sessions to ship features faster. I also prepare the weekly ' +
      'tech updates for our team meeting, curated by an AI newsletter digest I built (see side projects)."',
    tech: ['Claude Code', 'Cursor', 'MCP'],
    status: 'SHIPPED',
    company: 'Intelmatix',
    companyLogo: '/logos/intelmatix.png',
  },
  {
    id: 'site-intelligence',
    title: '"Site Intelligence Platform"',
    description:
      '"Overhauled and scaled a geospatial analytics platform with Google Maps integration ' +
      'and shipped a recommender engine that contributed to 6x growth in onboarded customers across KSA."',
    tech: ['React', 'TypeScript', 'Google Maps', 'TanStack Query'],
    status: 'SHIPPED',
    company: 'Intelmatix',
    companyLogo: '/logos/intelmatix.png',
  },
  {
    id: 'resources-scheduler',
    title: '"Resources Timeline Scheduler"',
    description:
      '"Built a resources timeline scheduler from scratch, with weekly and daily views, ' +
      'when no library fit; reworked its state with Zustand and TanStack Query for a ' +
      'noticeably more responsive scheduling UI for enterprise clients."',
    tech: ['React', 'Zustand', 'TanStack Query', 'TypeScript'],
    status: 'SHIPPED',
    company: 'Intelmatix',
    companyLogo: '/logos/intelmatix.png',
  },
  {
    id: 'fe-platform',
    title: '"Frontend Platform & Reliability"',
    description:
      '"Set up production observability with Grafana + Faro; hardened CI/CD (removed ' +
      'duplicate runs for ~30% lower pipeline cost, added Slack release notifications); ' +
      'stabilized the Module Federation microfrontends and started frontend i18n."',
    tech: ['Grafana', 'Faro', 'GitHub Actions', 'Module Federation', 'i18n'],
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
    company: 'QSIT (formerly ESRI North-East Africa)',
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
    company: 'QSIT (formerly ESRI North-East Africa)',
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
    company: 'QSIT (formerly ESRI North-East Africa)',
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
    company: 'EDGE Pro',
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
    company: 'EDGE Pro',
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
    company: 'EDGE Pro',
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
    company: 'EDGE Pro',
    companyLogo: '/logos/edge-pro.png',
  },
]

// ── Personal / Side Projects ──────────────────────────────────────────────────

export const sideProjects: Project[] = [
  {
    id: 'weekly-journal-digest',
    title: 'Weekly Journal Digest',
    description:
      'Feeds the weekly tech updates I prepare for our team meeting. A Google Apps Script reads a ' +
      'week of newsletters, runs them through LLMs via OpenRouter and emails one briefing: TL;DR, ' +
      'themes, top picks and things to try, ranked by my interests. I chose the models with ' +
      'bake-offs on cost, coverage and writing quality. Links are swapped for markers, so a model ' +
      'can never invent a URL. Costs under $0.05 a week.',
    tech: ['JavaScript', 'Google Apps Script', 'OpenRouter', 'Claude', 'Node test'],
    status: 'SHIPPED',
    privateRepo: true,
  },
  {
    id: 'hijri-crescent',
    title: 'hijri-crescent',
    description:
      "TypeScript package that returns today's Hijri date per country as officially announced " +
      "by each country's Islamic authority (Egypt, Saudi Arabia, UAE, Kuwait, Jordan), " +
      'instead of a calculated estimate, with a live status page.',
    tech: ['TypeScript', 'Node.js', 'GitHub Actions'],
    status: 'OPEN_SOURCE',
    githubUrl: 'https://github.com/hijri-js/hijri-crescent',
    demoUrl: 'https://hijri-js.github.io/hijri-crescent',
  },
  {
    id: 'fluid-skills',
    title: 'fluid-skills',
    description:
      'Claude Code skill suite for breakpoint-free responsive layouts and Arabic RTL: audits UI ' +
      'for width media queries, physical left/right and fixed sizing, then proposes Tailwind fixes.',
    tech: ['Claude Code', 'Tailwind CSS'],
    status: 'OPEN_SOURCE',
    githubUrl: 'https://github.com/KhaledTaymour/fluid-skills',
  },
  {
    id: 'claude-statusline',
    title: 'claude-statusline',
    description:
      'ANSI-colored status line for Claude Code showing model, plan, context and quota usage. ' +
      'Cross-platform: Bash and PowerShell.',
    tech: ['Claude Code', 'Bash', 'PowerShell'],
    status: 'OPEN_SOURCE',
    githubUrl: 'https://github.com/KhaledTaymour/claude-statusline',
  },
  {
    id: 'habit-tracker',
    title: 'Habit Tracker',
    description: 'Habit tracker PWA with Google login, scheduled push reminders and streaks.',
    tech: ['React 19', 'TypeScript', 'Vite', 'Supabase', 'PWA'],
    status: 'SHIPPED',
    githubUrl: 'https://github.com/KhaledTaymour/habit-tracker',
    demoUrl: 'https://habit-tracker-2qa.pages.dev',
  },
  {
    id: 'gymtracker',
    title: 'GymTracker',
    description:
      'Solo full-stack progressive-overload tracker PWA: schema design, REST integration and ' +
      'offline-first sync on Supabase (Postgres + Auth), deployed on Cloudflare Pages.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'PWA'],
    status: 'SHIPPED',
    privateRepo: true,
  },
  {
    id: 'sms-to-sheets',
    title: 'SMS-to-Sheets Expense Tracker',
    description:
      'An iOS Shortcut parses payment SMS and calls an API-key-secured Google Apps Script web app ' +
      'that writes to Sheets, replacing manual logging with zero-touch tracking.',
    tech: ['iOS Shortcuts', 'Google Apps Script', 'Google Sheets'],
    status: 'SHIPPED',
    privateRepo: true,
  },
  {
    id: 'haptics-demo',
    title: 'Haptics Demo',
    description: 'A PWA drum machine with haptic feedback for the mobile web.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'PWA', 'Vite'],
    status: 'SHIPPED',
    githubUrl: 'https://github.com/KhaledTaymour/haptics-demo',
    demoUrl: 'https://haptics-demo.pages.dev/',
  },
  {
    id: 'salat-time',
    title: 'Salat Time',
    description: 'Prayer times PWA with ambient gradient animations.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Motion', 'Zustand', 'PWA', 'Vite'],
    status: 'SHIPPED',
    githubUrl: 'https://github.com/KhaledTaymour/salat-time',
    demoUrl: 'https://salat-time.pages.dev/',
  },
  {
    id: 'portfolio',
    title: 'This Portfolio',
    description:
      'The IDE-themed site you are on: designed in Stitch, built with Claude Code, ' +
      'deployed on Cloudflare Pages.',
    tech: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite'],
    status: 'OPEN_SOURCE',
    githubUrl: 'https://github.com/KhaledTaymour/khaled-portfolio',
  },
]

export const allProjects: Project[] = [...workProjects, ...sideProjects]
