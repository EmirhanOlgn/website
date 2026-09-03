export type StackGroup = {
  title: string;
  note: string;
  items: string[];
};

export const stack: StackGroup[] = [
  {
    title: "Languages",
    note: "What I reach for, roughly in that order.",
    items: ["TypeScript", "Rust", "Go", "Python", "JavaScript", "SQL", "Bash"],
  },
  {
    title: "Web",
    note: "Most of what I ship runs on this.",
    items: ["Next.js", "React", "Tailwind CSS", "Node.js", "Bun", "Vite"],
  },
  {
    title: "Data",
    note: "Picked per problem, not per habit.",
    items: ["PostgreSQL", "MongoDB", "Redis", "SQLite", "Prisma"],
  },
  {
    title: "Infrastructure",
    note: "I run my own boxes rather than renting managed everything.",
    items: [
      "Proxmox",
      "Docker",
      "nginx",
      "Cloudflare Tunnel",
      "systemd",
      "Linux",
    ],
  },
];

export type TimelineEntry = {
  year: string;
  title: string;
  body: string;
};

export const timeline: TimelineEntry[] = [
  {
    year: "2026",
    title: "Systems and infrastructure",
    body: "Moved everything I run onto a self-managed Proxmox host. Production services sit behind Cloudflare Tunnels with no inbound ports open except SSH. Started writing desktop utilities in Rust.",
  },
  {
    year: "2025",
    title: "Bots and services at scale",
    body: "Discord bots serving a few hundred guilds, a Haxball game platform with its own admin panel, and the backends that keep them alive.",
  },
  {
    year: "2024",
    title: "Backend depth",
    body: "Databases, queues and the unglamorous parts. Learned that most performance problems are schema problems.",
  },
  {
    year: "2023",
    title: "Picking up Go",
    body: "Small finished projects instead of large unfinished ones. Two games, both shipped, both tiny.",
  },
];
