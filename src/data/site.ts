export const site = {
  name: "Emirhan",
  handle: "emirhanolgn",
  role: "Full-stack developer",
  roles: [
    "Full-stack developer",
    "Backend & Automation",
    "Systems Enthusiast",
    "DevOps & Self-hosting",
  ],
  tagline:
    "I build clean interfaces on the frontend, and lightweight, battle-tested servers on the backend.",
  url: "https://emir.ws",
  email: "emirhanolgn@proton.me",
  location: "Türkiye",
  socials: {
    github: "https://github.com/EmirhanOlgn",
    discord: "https://discord.com/users/emirhanolgn",
  },
} as const;

export type Site = typeof site;
