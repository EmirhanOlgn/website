import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { work, workDescription } from "@/data/work";
import { WorkCard } from "@/components/ui/work-card";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/motion";

export function SelectedWork() {
  return (
    <section className="mx-auto max-w-3xl px-6">
      <FadeIn className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Projects</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {workDescription}
          </p>
        </div>
        <Link
          href="/projects/"
          className="group flex shrink-0 items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          All projects
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </FadeIn>

      <Stagger className="grid gap-3 sm:grid-cols-2">
        {work.map((w) => (
          <StaggerItem key={w.slug} className="h-full">
            <WorkCard item={w} />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
