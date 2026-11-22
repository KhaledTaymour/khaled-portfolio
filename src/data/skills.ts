export interface SkillEntry {
  label: string;
  icon?: string; // Iconify icon id
}

export interface SkillCategory {
  key: string;
  label: string;
  skills: SkillEntry[];
}

export const skillCategories: SkillCategory[] = [
  {
    key: "languages",
    label: "languages",
    skills: [
      { label: "TypeScript", icon: "logos:typescript-icon" },
      { label: "JavaScript", icon: "logos:javascript" },
      { label: "Python (scripting)", icon: "logos:python" },
    ],
  },
  {
    key: "frontend",
    label: "frontend",
    skills: [
      { label: "React", icon: "logos:react" },
      { label: "Next.js", icon: "logos:nextjs-icon" },
      { label: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      { label: "MUI", icon: "logos:material-ui" },
      { label: "Sass", icon: "logos:sass" },
      { label: "Microfrontends (Module Federation)", icon: "logos:webpack" },
      { label: "Internationalization (i18n) & RTL", icon: "simple-icons:i18next" },
      { label: "Web Accessibility", icon: "logos:w3c" },
      { label: "Server-Sent Events (SSE)", icon: "carbon:flow-stream" },
      { label: "Recharts", icon: "tabler:chart-bar" },
    ],
  },
  {
    key: "stateManagement",
    label: "stateManagement",
    skills: [
      { label: "TanStack Query", icon: "logos:react-query-icon" },
      { label: "Zustand", icon: "devicon:zustand" },
      { label: "Redux", icon: "logos:redux" },
    ],
  },
  {
    key: "aiEngineering",
    label: "aiEngineering",
    skills: [
      { label: "Claude Code", icon: "logos:claude-icon" },
      { label: "Cursor", icon: "logos:cursor" },
      { label: "MCP (Model Context Protocol)", icon: "simple-icons:modelcontextprotocol" },
      { label: "LLM & AI agent integration", icon: "simple-icons:openrouter" },
      { label: "Prompt & context engineering", icon: "material-symbols:psychology" },
    ],
  },
  {
    key: "backendData",
    label: "backendData",
    skills: [
      { label: "Node.js", icon: "logos:nodejs-icon" },
      { label: "REST APIs", icon: "material-symbols:api" },
      { label: "PostgreSQL", icon: "logos:postgresql" },
      { label: "Supabase", icon: "logos:supabase-icon" },
      { label: "MongoDB", icon: "logos:mongodb-icon" },
    ],
  },
  {
    key: "testing",
    label: "testing",
    skills: [
      { label: "Vitest", icon: "logos:vitest" },
      { label: "Jest", icon: "logos:jest" },
      { label: "Playwright", icon: "logos:playwright" },
    ],
  },
  {
    key: "buildTools",
    label: "buildTools",
    skills: [
      { label: "Vite", icon: "logos:vitejs" },
      { label: "Webpack", icon: "logos:webpack" },
      { label: "Rspack", icon: "vscode-icons:file-type-rspack" },
    ],
  },
  {
    key: "design",
    label: "design",
    skills: [
      { label: "Figma", icon: "logos:figma" },
      { label: "Storybook", icon: "logos:storybook-icon" },
      { label: "Radix UI", icon: "bxl:radix-ui" },
    ],
  },
  {
    key: "cloudDevOps",
    label: "cloudDevOps",
    skills: [
      { label: "Git / GitHub", icon: "material-icon-theme:git" },
      { label: "GitHub Actions (CI/CD)", icon: "logos:github-actions" },
      { label: "Docker", icon: "logos:docker-icon" },
      { label: "Kubernetes", icon: "logos:kubernetes" },
      { label: "AWS", icon: "skill-icons:aws-dark" },
      { label: "Cloudflare Pages", icon: "logos:cloudflare-icon" },
    ],
  },
  {
    key: "observability",
    label: "observability",
    skills: [
      { label: "Grafana", icon: "logos:grafana" },
      { label: "Grafana Faro (RUM)", icon: "simple-icons:grafana" },
    ],
  },
  {
    key: "maps",
    label: "maps",
    skills: [
      { label: "Google Maps API", icon: "logos:google-maps" },
      { label: "Geodata / GIS", icon: "simple-icons:esri" },
    ],
  },
];
