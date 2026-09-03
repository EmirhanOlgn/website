import generated from "./repos.generated.json";

export type Repo = {
  name: string;
  description: string;
  language: string;
  topics: string[];
  stars: number;
  url: string;
  homepage: string | null;
  pushedAt: string;
  year: string;
  activity: number[];
};

export const repos = generated as Repo[];

export const repoLanguages = Array.from(
  repos.reduce((acc, r) => {
    acc.set(r.language, (acc.get(r.language) ?? 0) + 1);
    return acc;
  }, new Map<string, number>())
)
  .sort((a, b) => b[1] - a[1])
  .map(([language, count]) => ({ language, count }));
