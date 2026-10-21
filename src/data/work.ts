export const workDescription = "Projects I\u2019ve designed and built.";

export type WorkLink = {
  label: string;
  href: string;
};

export type WorkItem = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  role: string;
  year: string;
  tags: string[];
  site?: string;
  repo?: string;
  image?: string;
};

export const work: WorkItem[] = [
  {
    slug: "orium-games",
    name: "Orium Games",
    tagline: "Game Platform & Infrastructure",
    description:
      "Built and operated end to end, featuring an interactive game platform, custom game backend services, and automated deployment pipelines.",
    role: "Founder, Lead Community, Developer",
    year: "2024",
    tags: ["Go", "Svelte", "SurrealQL"],
    site: "https://orium.games",
    repo: "https://github.com/oriumgames",
  },
  {
    slug: "cda",
    name: "CDA International",
    tagline: "Culture and diplomacy association",
    description:
      "Corporate site and admin panel for an international association. Programs, events and representation offices are all editable from the panel, in multiple languages.",
    role: "Full-stack Development & UI/UX Design",
    year: "2026",
    tags: ["TypeScript", "Tailwind", "PostgreSQL"],
    site: "https://internationalcda.com",
  },
  {
    slug: "haxballtr",
    name: "HaxballTR",
    tagline: "Dedicated Game Servers",
    description:
      "Haxball game servers with player statistics, seasons, missions and a control panel. Runs headless browser instances and keeps the whole thing alive on its own.",
    role: "Backend Architecture, Developer",
    year: "2025",
    tags: ["TypeScript", "MongoDB", "Redis"],
    site: "https://haxball.com.tr",
    repo: "https://github.com/HaxballTR",
  },
  {
    slug: "ankabot",
    name: "AnkaBot",
    tagline: "Discord Bot & Web Dashboard",
    description:
      "A moderation and community bot serving a growing number of guilds, with a web dashboard for per-server configuration.",
    role: "Developer",
    year: "2026",
    tags: ["TypeScript", "PostgreSQL"],
    site: "https://ankabot.xyz",
    repo: "https://github.com/AnkaBot-Dev",
  },
];
