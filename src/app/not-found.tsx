import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-start px-6 pt-32 pb-20">
      <p className="font-mono text-sm text-violet">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        This page doesn&apos;t exist
      </h1>
      <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
        The link may be out of date, or the page moved somewhere sensible.
      </p>
      <Link
        href="/"
        className="group mt-8 inline-flex h-10 items-center gap-2 rounded-lg border border-border bg-card/40 px-4 text-sm transition-all hover:border-violet/40 hover:bg-card"
      >
        <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
        Back home
      </Link>
    </div>
  );
}
