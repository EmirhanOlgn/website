import { writeFile, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const USER = "EmirhanOlgn";
const OUT = join(dirname(fileURLToPath(import.meta.url)), "..", "src", "data", "repos.generated.json");

const HIDDEN = new Set(["EmirhanOlgn", "emirhanolgn.github.io"]);

const TOPIC_LANGUAGES = {
  rust: "Rust",
  typescript: "TypeScript",
  javascript: "JavaScript",
  python: "Python",
  go: "Go",
  golang: "Go",
};

function resolveLanguage(repo) {
  if (repo.language) return repo.language;
  for (const t of repo.topics ?? []) {
    if (TOPIC_LANGUAGES[t]) return TOPIC_LANGUAGES[t];
  }
  return "Other";
}

const headers = { "User-Agent": USER, Accept: "application/vnd.github+json" };
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

async function fetchActivity(name) {
  const url = `https://api.github.com/repos/${USER}/${name}/stats/commit_activity`;
  for (let attempt = 0; attempt < 3; attempt++) {
    const r = await fetch(url, { headers });
    if (r.status === 202) {
      await new Promise((res) => setTimeout(res, 1500));
      continue;
    }
    if (r.status === 403 || r.status === 429) return null; // rate limited
    if (!r.ok) return [];
    const weeks = await r.json();
    if (!Array.isArray(weeks) || !weeks.length) return [];
    return weeks.map((w) => w.total);
  }
  return [];
}

try {
  const res = await fetch(
    `https://api.github.com/users/${USER}/repos?per_page=100&sort=updated`,
    { headers }
  );
  if (!res.ok) throw new Error(`GitHub returned ${res.status}`);

  const repos = (await res.json())
    .filter((r) => !r.fork && !r.archived && !HIDDEN.has(r.name))
    .map((r) => ({
      name: r.name,
      description: r.description ?? "",
      language: resolveLanguage(r),
      topics: r.topics ?? [],
      stars: r.stargazers_count,
      url: r.html_url,
      homepage: r.homepage || null,
      pushedAt: r.pushed_at,
      year: String(new Date(r.created_at).getUTCFullYear()),
    }))
    .sort((a, b) => b.stars - a.stars || b.pushedAt.localeCompare(a.pushedAt));

  let cached = new Map();
  try {
    const prev = JSON.parse(await readFile(OUT, "utf8"));
    cached = new Map(prev.map((r) => [r.name, r.activity ?? []]));
  } catch {}

  let throttled = 0;
  for (const repo of repos) {
    const fresh = await fetchActivity(repo.name);
    if (fresh === null) {
      throttled++;
      repo.activity = cached.get(repo.name) ?? [];
    } else {
      repo.activity = fresh.length ? fresh : cached.get(repo.name) ?? [];
    }
  }
  if (throttled) {
    console.warn(`repos: rate limited on ${throttled} repo(s); reused cached activity`);
  }

  await writeFile(OUT, JSON.stringify(repos, null, 2) + "\n");
  const withActivity = repos.filter((r) => r.activity.length).length;
  console.log(`repos: wrote ${repos.length} (${withActivity} with activity)`);
} catch (err) {
  let existing = 0;
  try {
    existing = JSON.parse(await readFile(OUT, "utf8")).length;
  } catch {}
  console.warn(`repos: fetch failed (${err.message}); keeping ${existing} cached`);
  if (!existing) {
    await writeFile(OUT, "[]\n");
  }
}
