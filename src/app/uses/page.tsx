import type { Metadata } from "next";
import { uses } from "@/data/uses";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Uses",
  description: "Hardware, editor and infrastructure I actually use.",
};

export default function UsesPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-20 pb-8 sm:pt-24">
      <FadeIn>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Uses
        </h1>
        <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
          The tools I build with, and what each one is for.
        </p>
      </FadeIn>

      <Stagger className="mt-12 space-y-10">
        {uses.map((group) => (
          <StaggerItem key={group.title}>
            <h2 className="mb-4 font-mono text-sm font-semibold tracking-tight text-violet">
              {group.title}
            </h2>
            <dl className="space-y-0">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col gap-0.5 border-t border-border py-4 sm:flex-row sm:gap-6"
                >
                  <dt className="shrink-0 font-medium tracking-tight sm:w-44">
                    {item.name}
                  </dt>
                  <dd className="text-sm leading-relaxed text-muted-foreground">
                    {item.note}
                  </dd>
                </div>
              ))}
            </dl>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}
