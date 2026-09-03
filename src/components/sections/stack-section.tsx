import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { stack } from "@/data/stack";
import { Badge } from "@/components/ui/badge";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/motion";

export function StackSection() {
  return (
    <section className="mx-auto max-w-3xl px-6">
      <FadeIn className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Stack</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Tools I use often enough to have opinions about.
          </p>
        </div>
        <Link
          href="/about/"
          className="group flex shrink-0 items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          About
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
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
  );
}
