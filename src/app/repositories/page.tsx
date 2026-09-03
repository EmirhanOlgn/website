import type { Metadata } from "next";
import Link from "next/link";
import { repos } from "@/data/repos";
import { ReposExplorer } from "@/components/sections/repos-explorer";
import { FadeIn } from "@/components/ui/motion";
import { GithubCta } from "@/components/sections/github-cta";

export const metadata: Metadata = {
  title: "Repositories",
  description: "Public repositories, pulled from GitHub on every build.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-20 pb-8 sm:pt-24">
      <FadeIn>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Repositories
        </h1>
        <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
          Every public repository, pulled straight from GitHub each time the site
          is built. For the things I designed and shipped, see{" "}
          <Link href="/projects/" className="text-violet underline-offset-4 hover:underline">
            projects
          </Link>
          .
        </p>
      </FadeIn>
      <div className="mt-10">
        <ReposExplorer repos={repos} />
      </div>
      <GithubCta />
    </div>
  );
}
