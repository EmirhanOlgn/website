"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

export function StatusLine() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Europe/Istanbul",
        }).format(new Date())
      );
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em]">
      <span aria-hidden className="h-px w-6 bg-violet/70" />
      <span className="text-violet">Available for work</span>
      <span aria-hidden className="text-muted-foreground/30">/</span>
      <span lang="tr" className="text-muted-foreground">
        {site.location.toLocaleUpperCase("tr")}
      </span>
      <span className="min-w-[4.5ch] tabular-nums text-muted-foreground/70">
        {time ?? ""}
      </span>
    </div>
  );
}
