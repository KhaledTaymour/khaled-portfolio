// Career started January 2018 (EDGE Pro). Years are derived so they never go stale.
const CAREER_START = new Date(2018, 0, 1);
const MS_PER_YEAR = 365.25 * 24 * 60 * 60 * 1000;
const yearsExperience = Math.floor((Date.now() - CAREER_START.getTime()) / MS_PER_YEAR);

export const profile = {
  name: "Khaled Taymour",
  role: "Senior Software Engineer, Frontend",
  // Personal statement: shown under the role on the homepage
  tagline: "I think, build and solve problems, not just write code.",
  location: "Riyadh, Saudi Arabia",
  countryFlagIcon: "circle-flags:sa", // emoji flags render as letters on Windows
  openToRelocation: true,
  email: "khaled.taymour@gmail.com",
  linkedin: "https://www.linkedin.com/in/khaled-taymour/",
  github: "https://github.com/KhaledTaymour",
  phone: "+966 (55) 0233 840",
  summary:
    `Senior Software Engineer with ${yearsExperience}+ years building production frontends in React and TypeScript, ` +
    "including real-time, data-intensive command & control dashboards. Full-stack range across Node.js, REST APIs " +
    "and Postgres, with daily hands-on experience shipping LLM-powered features using Claude Code, Cursor and MCP. " +
    "A team lead and mentor who drives frontend architecture, AI-assisted workflows and engineering best practices.",
  coreStack: ["React", "TypeScript", "Next.js", "Node.js", "Tailwind CSS", "Claude Code + MCP"],
  yearsExperience,
  isAvailable: true,
};
