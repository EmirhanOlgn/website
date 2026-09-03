import type { Metadata } from "next";
import Link from "next/link";
import { work, workDescription } from "@/data/work";
import { WorkCard } from "@/components/ui/work-card";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Projects",
  description: workDescription,
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-20 pb-8 sm:pt-24">
      <FadeIn>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Projects
        </h1>
        <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
          A selection of projects I’ve designed and built.
          For open-source projects and code, explore my{" "}
          <Link
            href="/repositories/"
            className="text-violet underline-offset-4 hover:underline"
          >
            repositories
          </Link>
          .
        </p>
      </FadeIn>

      <Stagger className="mt-10 grid gap-3 sm:grid-cols-2">
        {work.map((w) => (
          <StaggerItem key={w.slug} className="h-full">
            <WorkCard item={w} />
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}
