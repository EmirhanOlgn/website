export type UsesGroup = {
  title: string;
  items: { name: string; note: string }[];
};

export const uses: UsesGroup[] = [
  {
    title: "Editor & terminal",
    items: [
      {
        name: "Zed",
        note: "Editing with LSP, multibuffer search and replace across a repo.",
      },
      {
        name: "VS Code",
        note: "Remote-SSH editing straight on a server, Live Server for static pages, debugger and extension integrations.",
      },
      {
        name: "IntelliJ IDEA",
        note: "JVM projects, and type-aware refactors that have to hold across a whole codebase.",
      },
      {
        name: "PuTTY",
        note: "SSH sessions from Windows with saved profiles and key auth.",
      },
    ],
  },
  {
    title: "Languages",
    items: [
      {
        name: "TypeScript",
        note: "Application code, typed from the API boundary through to the UI.",
      },
      {
        name: "Rust",
        note: "Long-running binaries and CLI tools where memory has to stay flat. Cargo for the toolchain around them.",
      },
      { name: "Go", note: "Backend services that compile to one static binary." },
      { name: "Python", note: "Automation, scraping and data munging." },
      {
        name: "C++ / CMake",
        note: "Native code, and building dependencies from source.",
      },
    ],
  },
  {
    title: "Building",
    items: [
      {
        name: "Node.js",
        note: "Server-side JavaScript, build scripts and CLI tooling.",
      },
      { name: "React", note: "Component-based UI with client state." },
      {
        name: "Next.js",
        note: "App Router and server components, static export for sites with no backend.",
      },
      {
        name: "Svelte",
        note: "Compiled components with no virtual DOM, for interactive front ends.",
      },
      {
        name: "Vite",
        note: "Dev server with HMR and production bundling outside Next.js.",
      },
      {
        name: "Tailwind CSS",
        note: "v4. Utility classes over design tokens defined in CSS.",
      },
    ],
  },
  {
    title: "Infrastructure",
    items: [
      {
        name: "Proxmox VE",
        note: "Hypervisor. VMs on one host, cloned from a hardened cloud-init template.",
      },
      {
        name: "Docker Compose",
        note: "Multi-container services defined per project in one file.",
      },
      {
        name: "Cloudflare Tunnel",
        note: "Outbound-only tunnel that publishes a service with no open port and no public IP.",
      },
      {
        name: "Linux",
        note: "Ubuntu on servers, Debian when I want a smaller base.",
      },
      {
        name: "Pop!_OS",
        note: "Development desktop. GPU drivers and tiling window management preconfigured.",
      },
      {
        name: "Kubernetes",
        note: "Container orchestration. Nothing on it in production yet; learning it for workloads that outgrow Compose.",
      },
    ],
  },
  {
    title: "Data",
    items: [
      {
        name: "PostgreSQL",
        note: "Relational data, with transactions and constraints enforced in the database.",
      },
      {
        name: "MongoDB",
        note: "Document storage where the shape changes without a migration.",
      },
      { name: "Redis", note: "Cache, queues and ephemeral keys with a TTL." },
      {
        name: "SurrealDB",
        note: "Records and their graph relations queried in one place.",
      },
      { name: "Prisma", note: "Typed database client and versioned migrations." },
    ],
  },
];
