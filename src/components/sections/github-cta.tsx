import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/ui/icons";
import { site } from "@/data/site";
import { repos } from "@/data/repos";
import { FadeIn } from "@/components/ui/motion";

export function GithubCta() {
  return (
    <FadeIn className="mt-14">
      <Link
        href={site.socials.github}
        target="_blank"
        rel="noreferrer"
        className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-violet/25 bg-violet/6 p-6 transition-all hover:border-violet/50 hover:bg-violet/10 sm:flex-row sm:items-center sm:justify-between"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-violet/15 blur-3xl transition-opacity group-hover:opacity-150"
        />

        <div className="relative min-w-0">
          <h2 className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <GitHubIcon className="size-4 shrink-0" />
            This is not all of it
          </h2>
          <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted-foreground">
            {repos.length} public repositories are listed here. Forks, private
            work and everything still in progress live on GitHub.
          </p>
        </div>

        <span className="relative inline-flex h-10 shrink-0 items-center gap-2 rounded-lg bg-violet px-4 text-sm font-medium text-primary-foreground transition-transform group-hover:scale-[1.02]">
          @{site.handle}
          <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </Link>
    </FadeIn>
  );
}
