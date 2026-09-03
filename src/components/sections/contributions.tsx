"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";
import { FadeIn } from "@/components/ui/motion";

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

const LEVELS = [
  "bg-foreground/7",
  "bg-violet/30",
  "bg-violet/50",
  "bg-violet/75",
  "bg-violet",
] as const;

export function Contributions() {
  const [days, setDays] = useState<Day[] | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch(
      `https://github-contributions-api.jogruber.de/v4/${site.handle}?y=last`,
      { signal: controller.signal }
    )
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((d) => {
        setDays(d.contributions ?? []);
        setTotal(d.total?.lastYear ?? null);
      })
      .catch((e) => {
        if (e.name !== "AbortError") setFailed(true);
      });
    return () => controller.abort();
  }, []);

  const weeks: Day[][] = [];
  if (days) {
    for (let i = 0; i < days.length; i += 7) weeks.push(days.slice(i, i + 7));
  }

  return (
    <section className="mx-auto max-w-3xl px-6">
      <FadeIn>
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">Activity</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {total !== null
                ? `${total.toLocaleString("en-US")} contributions in the last year`
                : "Commits over the last year"}
            </p>
          </div>
          <a
            href={site.socials.github}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            @{site.handle}
          </a>
        </div>

        <div className="rounded-xl border border-border bg-card/40 p-4">
          {failed ? (
            <p className="py-6 text-center text-sm text-muted-foreground">
              Activity data is unavailable right now.
            </p>
          ) : !days ? (
            <div className="h-21 animate-pulse rounded-md bg-muted/40" />
          ) : (
            <>
              <div className="-mx-1 overflow-x-auto px-1 pb-1 scrollbar-thin">
                <div className="flex min-w-max gap-[2.5px]">
                  {weeks.map((week, wi) => (
                    <div key={wi} className="flex flex-col gap-[2.5px]">
                      {week.map((d) => (
                        <span
                          key={d.date}
                          title={`${d.count} on ${d.date}`}
                          className={cn(
                            "size-2.25 shrink-0 rounded-[2px] transition-colors sm:size-2.5",
                            LEVELS[d.level]
                          )}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-3 flex items-center justify-end gap-1.5 font-mono text-[10px] text-muted-foreground">
                <span>Less</span>
                {LEVELS.map((l, i) => (
                  <span key={i} className={cn("size-2.25 rounded-[2px]", l)} />
                ))}
                <span>More</span>
              </div>
            </>
          )}
        </div>
      </FadeIn>
    </section>
  );
}
