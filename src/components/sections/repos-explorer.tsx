"use client";

import { useMemo, useState } from "react";
import { RepoCard } from "@/components/ui/repo-card";
import { Stagger, StaggerItem } from "@/components/ui/motion";
import { cn } from "@/lib/utils";
import type { Repo } from "@/data/repos";

export function ReposExplorer({ repos }: { repos: Repo[] }) {
  const [language, setLanguage] = useState("All");

  const languages = useMemo(() => {
    const counts = new Map<string, number>();
    for (const r of repos) counts.set(r.language, (counts.get(r.language) ?? 0) + 1);
    return [
      { label: "All", count: repos.length },
      ...Array.from(counts, ([label, count]) => ({ label, count })).sort(
        (a, b) => b.count - a.count
      ),
    ];
  }, [repos]);

  const filtered = useMemo(
    () => (language === "All" ? repos : repos.filter((r) => r.language === language)),
    [repos, language]
  );

  return (
    <>
      <div className="mb-6 flex flex-wrap gap-2">
        {languages.map((l) => (
          <button
            key={l.label}
            onClick={() => setLanguage(l.label)}
            className={cn(
              "rounded-lg border px-3 py-1.5 font-mono text-xs transition-colors",
              language === l.label
                ? "border-violet/50 bg-violet/15 text-foreground"
                : "border-border bg-card/40 text-muted-foreground hover:border-border/80 hover:text-foreground"
            )}
          >
            {l.label}
            <span className="ml-1.5 text-muted-foreground/60">{l.count}</span>
          </button>
        ))}
      </div>

      <Stagger key={language} className="grid gap-3 sm:grid-cols-2">
        {filtered.map((r) => (
          <StaggerItem key={r.name} className="h-full min-w-0">
            <RepoCard repo={r} />
          </StaggerItem>
        ))}
      </Stagger>
    </>
  );
}
