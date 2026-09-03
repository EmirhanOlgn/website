import Link from "next/link";
import { ArrowUpRight, Globe } from "lucide-react";
import { GitHubIcon } from "@/components/ui/icons";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { WorkItem } from "@/data/work";

export function WorkCard({
  item,
  className,
}: {
  item: WorkItem;
  className?: string;
}) {
  const primary = item.site ?? item.repo;

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col gap-3 rounded-xl border border-border bg-card/40 p-5 transition-all",
        "hover:-translate-y-0.5 hover:border-violet/40 hover:bg-card",
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate text-base font-semibold tracking-tight">
            {primary ? (
              <Link
                href={primary}
                target="_blank"
                rel="noreferrer"
                className="before:absolute before:inset-0 before:content-['']"
              >
                {item.name}
              </Link>
            ) : (
              item.name
            )}
          </h3>
          <p className="mt-0.5 truncate text-sm text-violet/90">
            {item.tagline}
          </p>
        </div>
        <span className="shrink-0 font-mono text-[11px] text-muted-foreground/70">
          {item.year}
        </span>
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground">
        {item.description}
      </p>

      <p className="font-mono text-[11px] text-muted-foreground/80">
        {item.role}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {item.tags.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>

      <div className="relative z-10 mt-auto flex flex-wrap items-center gap-4 pt-1">
        {item.site && (
          <Link
            href={item.site}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-violet"
          >
            <Globe className="size-3.5" />
            Live
            <ArrowUpRight className="size-3" />
          </Link>
        )}
        {item.repo && (
          <Link
            href={item.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-violet"
          >
            <GitHubIcon className="size-3.5" />
            Source
            <ArrowUpRight className="size-3" />
          </Link>
        )}
      </div>
    </article>
  );
}
