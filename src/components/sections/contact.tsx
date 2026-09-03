import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { FadeIn } from "@/components/ui/motion";

export function Contact() {
  return (
    <section className="mx-auto max-w-3xl px-6">
      <FadeIn>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card/40 p-8 sm:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-violet/10 blur-3xl"
          />
          <h2 className="relative text-2xl font-semibold tracking-tight">
            Let&apos;s build something
          </h2>
          <p className="relative mt-2 max-w-md leading-relaxed text-muted-foreground">
            Open to freelance work and interesting problems. The fastest way to
            reach me is email.
          </p>
          <div className="relative mt-6 flex flex-wrap gap-3">
            <Link
              href={`mailto:${site.email}`}
              className="group inline-flex h-10 items-center gap-2 rounded-lg bg-violet px-4 text-sm font-medium text-primary-foreground transition-all hover:bg-violet/90"
            >
              {site.email}
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
