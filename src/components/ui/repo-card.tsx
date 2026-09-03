import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sparkline } from "@/components/ui/sparkline";
import type { Repo } from "@/data/repos";

const languageColor: Record<string, string> = {
  Rust: "bg-[#dea584]",
  TypeScript: "bg-[#3178c6]",
  JavaScript: "bg-[#f1e05a]",
  Go: "bg-[#00ADD8]",
  Python: "bg-[#3572A5]",
  CSS: "bg-[#563d7c]",
  HTML: "bg-[#e34c26]",
  Shell: "bg-[#89e051]",
  Other: "bg-muted-foreground",
};

export function RepoCard({ repo, className }: { repo: Repo; className?: string }) {
  return (
    <Link
      href={repo.url}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "group flex h-full min-w-0 flex-col gap-2.5 rounded-xl border border-border bg-card/40 p-4 transition-all",
        "hover:-translate-y-0.5 hover:border-violet/40 hover:bg-card",
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="min-w-0 truncate font-mono text-sm font-semibold tracking-tight">
          {repo.name}
        </h3>
        <div className="flex shrink-0 items-center gap-2">
          <Sparkline data={repo.activity} className="w-20 sm:w-27" />
          <ArrowUpRight className="size-3.5 shrink-0 text-muted-foreground/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet" />
        </div>
      </div>

      {repo.description && (
        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {repo.description}
        </p>
      )}

      <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-1">
        <span className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
          <span
            className={cn(
              "size-2 rounded-full",
              languageColor[repo.language] ?? "bg-muted-foreground"
            )}
          />
          {repo.language}
        </span>
        {repo.stars > 0 && (
          <span className="flex items-center gap-1 font-mono text-[11px] text-muted-foreground">
            <Star className="size-3" />
            {repo.stars}
          </span>
        )}
        <span className="font-mono text-[11px] text-muted-foreground/70">
          {repo.year}
        </span>
      </div>
    </Link>
  );
}
