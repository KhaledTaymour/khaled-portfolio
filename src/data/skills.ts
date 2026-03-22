export interface SkillEntry {
  label: string;
  icon?: string; // Iconify icon id from 'logos' set
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
    ],
  },
  {
    key: "frontend",
    label: "frontend",
    skills: [
      { label: "React", icon: "logos:react" },
      { label: "Next.js", icon: "logos:nextjs-icon" },
      { label: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      { label: "Sass", icon: "logos:sass" },
      { label: "Microfrontends", icon: "logos:webpack" },
      { label: "Internationalization (i18n)", icon: "simple-icons:i18next" },
      { label: "Web Accessibility", icon: "logos:w3c" },
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
    key: "testing",
    label: "testing",
    skills: [
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
      { label: "Rspack", icon: "logos:rspack" },
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
      { label: "CI/CD", icon: "logos:github-actions" },
      { label: "Docker", icon: "logos:docker-icon" },
      { label: "Kubernetes", icon: "logos:kubernetes" },
      { label: "AWS", icon: "skill-icons:aws-dark" },
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
