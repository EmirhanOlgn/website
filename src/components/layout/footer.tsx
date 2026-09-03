import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border/60">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" aria-label={site.name} className="group shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/logo.svg"
              alt=""
              className="size-8 rounded-sm opacity-70 transition-opacity group-hover:opacity-100"
            />
          </Link>
          <p className="font-mono text-xs text-muted-foreground">
            © 2026
            <span aria-hidden className="text-muted-foreground/30"> / </span>
            Built by {site.name}
          </p>
        </div>
        <div className="flex items-center gap-5 text-xs text-muted-foreground">
          <Link
            href={site.socials.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </Link>
          <Link
            href={`mailto:${site.email}`}
            className="transition-colors hover:text-foreground"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
