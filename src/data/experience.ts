export interface Role {
  id: string;
  company: string;
  companyLogo: string;
  title: string;
  location: string;
  start: string; // display form, e.g. "Nov 2024"
  end: string; // "Present" for the current role
  stack: string[];
  wins: string[]; // each win is a collectible in career.run
}

// Ordered oldest → newest, the way the run is played.
export const roles: Role[] = [
  {
    id: "edge-pro",
    company: "EDGE Pro",
    companyLogo: "/logos/edge-pro.png",
    title: "Software Engineer & GIS Technical Support Engineer",
    location: "Egypt",
    start: "Jan 2018",
    end: "Aug 2019",
    stack: ["C#", "JavaScript", "PostgreSQL", "PostGIS"],
    wins: [
      "Led a team of 7 engineers, providing mentorship and support",
      "Delivered 4 projects across utilities, agriculture, administration, satellite imagery and defense",
      "Built 6 GeoMedia add-ons automating the path from raw spatial data to styled prints",
    ],
  },
  {
    id: "qsit",
    company: "QSIT (formerly ESRI North-East Africa)",
    companyLogo: "/logos/esri.png",
    title: "Frontend Engineer",
    location: "Egypt",
    start: "Sep 2019",
    end: "Mar 2022",
    stack: ["React", "Redux", "ArcGIS JS API", "Maps APIs"],
    wins: [
      "Built responsive geospatial React apps for the US public-safety and emergency-response sector",
      "Cut load times of a mission-critical public-safety app, speeding up emergency response workflows",
      "Championed i18n for the web product",
      "Built and maintained 2 private npm packages",
    ],
  },
  {
    id: "incorta",
    company: "Incorta",
    companyLogo: "/logos/incorta.png",
    title: "Frontend Engineer",
    location: "Egypt",
    start: "Apr 2022",
    end: "Oct 2024",
    stack: ["React", "TypeScript", "Auth0", "Jest", "Playwright"],
    wins: [
      "Refurbished the cloud BI platform: better code quality, higher test coverage, Auth0 SSO",
      "Built and shipped the Data Apps marketplace, driving a 35% increase in user downloads",
      "Added Git hooks to enforce code quality and clear commit messages",
      "Reviewed code and mentored junior team members",
    ],
  },
  {
    id: "intelmatix",
    company: "Intelmatix",
    companyLogo: "/logos/intelmatix.png",
    title: "Senior Frontend Engineer",
    location: "Riyadh, Saudi Arabia",
    start: "Nov 2024",
    end: "Present",
    stack: [
      "React 19",
      "TypeScript",
      "SSE",
      "TanStack Query",
      "Zustand",
      "Module Federation",
    ],
    wins: [
      "Led FE architecture of the Hajj Transport Command Center: ~35K buses, 255+ live KPIs, shipped in < 8 weeks",
      "Shipping LLM-powered product features: streaming responses and tool-call UX",
      "Drove Claude Code & Cursor adoption across the FE team with shared configs and MCP integrations",
      "Preparing the weekly tech updates for the team meeting, curated by an AI digest I built",
      "Rebuilt the Site Intelligence platform; its recommender engine contributed to 6x customer growth",
      "Built a resources timeline scheduler from scratch when no library fit",
      "Set up production observability with Grafana + Faro",
      "Hardened CI/CD: ~30% lower pipeline cost and Slack release notifications",
      "Stabilized the Module Federation microfrontends and started FE i18n",
      "Created the team’s first onboarding program, interviewed candidates and mentored 2 engineers",
    ],
  },
];

export interface Credential {
  label: string;
  detail?: string;
  icon?: string;
}

export const certifications: Credential[] = [
  {
    label: "AWS Certified Cloud Practitioner",
    detail: "May 2026",
    icon: "skill-icons:aws-dark",
  },
  {
    label: "Frontend Web Dev. & Web Dev. Professional Nanodegrees",
    detail: "Udacity",
    icon: "simple-icons:udacity",
  },
  {
    label: "Hugging Face AI Agents course",
    detail: "Hugging Face",
    icon: "logos:hugging-face-icon",
  },
];

export const education: Credential[] = [
  {
    label: "Pre MSc in Information Technology",
    detail: "Alexandria University",
    icon: "material-symbols:school",
  },
  {
    label: "Post Graduate Diploma in IT and GIS",
    detail: "ITI",
    icon: "material-symbols:school",
  },
  {
    label: "BSc in Petroleum Geoscience",
    detail: "Alexandria University",
    icon: "material-symbols:school",
  },
];

export const spokenLanguages: Credential[] = [
  { label: "Arabic", detail: "Native" },
  { label: "English", detail: "Fluent" },
  { label: "German", detail: "Beginner (A2)" },
];
