import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { stack } from "@/data/stack";
import { games } from "@/data/games";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/motion";
import { Badge } from "@/components/ui/badge";
import { GameCard } from "@/components/ui/game-card";
import { GitHubIcon, DiscordIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "About",
  description: "Who I am and what I work on.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-20 pb-8 sm:pt-24">
      <FadeIn>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          About
        </h1>
      </FadeIn>

      <FadeIn delay={0.05}>
        <div className="mt-6 flex items-center justify-between gap-10">
          <div className="max-w-xl space-y-4 leading-relaxed text-muted-foreground">
            <p>
              I’m Emirhan, a full-stack developer based in Turkey. I build
              lightweight applications, clean interfaces, and the robust
              background services that quietly keep them running, with most
              hosted and maintained on my own infrastructure.
            </p>
            <p>
              Most of what I make starts because I wanted it to exist: a quick
              utility to monitor resources, workflow tools that eliminate
              repetitive tasks, or standalone apps that don&rsquo;t force an account
              or a subscription on you.
            </p>
            <p>
              I like the unglamorous parts: schema design, deployment, and
              keeping services reliably running at all times. A feature that
              works once is a demo. A feature that works at 3am on its own is
              software.
            </p>
          </div>

          <div aria-hidden className="relative hidden shrink-0 md:block">
            <div className="absolute -inset-4 rounded-full bg-violet/12 blur-2xl" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/logo.svg"
              alt=""
              className="relative size-28 rounded-[1.75rem] opacity-90"
            />
          </div>
        </div>
      </FadeIn>

      <section className="mt-16">
        <FadeIn className="mb-4">
          <h2 className="text-xl font-semibold tracking-tight">Elsewhere</h2>
        </FadeIn>
        <FadeIn delay={0.05} className="flex flex-wrap gap-3">
          <Link
            href={site.socials.github}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card/40 px-4 py-2.5 text-sm transition-all hover:border-violet/40 hover:bg-card"
          >
            <GitHubIcon className="size-4" />
            GitHub
            <ArrowUpRight className="size-3.5 text-muted-foreground/50 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet" />
          </Link>
          <Link
            href={site.socials.discord}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card/40 px-4 py-2.5 text-sm transition-all hover:border-violet/40 hover:bg-card"
          >
            <DiscordIcon className="size-4" />
            Discord
            <ArrowUpRight className="size-3.5 text-muted-foreground/50 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet" />
          </Link>
          <Link
            href={`mailto:${site.email}`}
            className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card/40 px-4 py-2.5 text-sm transition-all hover:border-violet/40 hover:bg-card"
          >
            Email
            <ArrowUpRight className="size-3.5 text-muted-foreground/50 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet" />
          </Link>
        </FadeIn>
      </section>

      <section className="mt-16">
        <FadeIn className="mb-6">
          <h2 className="text-xl font-semibold tracking-tight">Stack</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Tools I use often enough to have opinions about.
          </p>
        </FadeIn>

        <Stagger className="grid gap-3 sm:grid-cols-2">
          {stack.map((group) => (
            <StaggerItem key={group.title}>
              <div className="h-full rounded-xl border border-border bg-card/40 p-5">
                <h3 className="font-mono text-sm font-semibold tracking-tight">
                  {group.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {group.note}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {group.items.map((i) => (
                    <Badge key={i}>{i}</Badge>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="mt-16">
        <FadeIn className="mb-6">
          <h2 className="text-xl font-semibold tracking-tight">Games</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            What I actually play, not a ranked list.
          </p>
        </FadeIn>

        <Stagger className="grid grid-cols-2 gap-3 sm:grid-cols-3" gap={0.04}>
          {games.map((g) => (
            <StaggerItem key={g.name}>
              <GameCard game={g} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </div>
  );
}
