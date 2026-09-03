"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { gameImage, type Game } from "@/data/games";

export function GameCard({ game }: { game: Game }) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);
  const src = gameImage(game);

  useEffect(() => {
    const img = ref.current;
    if (img?.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <div
      className={cn(
        "group relative aspect-460/215 overflow-hidden rounded-lg border border-border bg-card/60",
        "transition-all hover:-translate-y-0.5 hover:border-violet/40"
      )}
    >
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={ref}
          src={src}
          alt=""
          loading="lazy"
          onError={() => setFailed(true)}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      ) : (
        <div className="relative size-full bg-linear-to-br from-violet/14 via-card to-card">
          <span
            aria-hidden
            className="absolute -right-2 -top-6 select-none font-mono text-[5.5rem] font-bold leading-none text-violet/13"
          >
            {game.name.charAt(0)}
          </span>
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/85 via-black/45 to-transparent p-3 pt-8">
        <p className="truncate text-[13px] font-medium tracking-tight text-white">
          {game.name}
        </p>
      </div>
    </div>
  );
}
