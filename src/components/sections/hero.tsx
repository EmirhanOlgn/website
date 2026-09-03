"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { GitHubIcon } from "@/components/ui/icons";
import { site } from "@/data/site";
import { StatusLine } from "@/components/ui/status-line";

function RotatingRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % site.roles.length),
      2800,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-flex h-[1.2em] overflow-hidden align-bottom">
      <motion.span
        key={index}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="text-violet"
      >
        {site.roles[index]}
      </motion.span>
    </span>
  );
}

export function Hero() {
  return (
    <section className="mx-auto flex max-w-3xl items-center gap-12 px-6 pt-20 pb-4 sm:pt-28">
      <div className="min-w-0 flex-1">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5"
        >
          <StatusLine />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          className="text-4xl font-semibold tracking-tight sm:text-5xl"
        >
          {site.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          className="mt-2 text-xl font-medium tracking-tight text-muted-foreground sm:text-2xl"
        >
          <RotatingRole />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="mt-6 max-w-xl leading-relaxed text-muted-foreground"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <Link
            href="/projects/"
            className="group inline-flex h-10 items-center gap-2 rounded-lg bg-violet px-4 text-sm font-medium text-primary-foreground transition-all hover:bg-violet/90"
          >
            See my work
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <Link
            href={site.socials.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-lg border border-border bg-card/50 px-4 text-sm text-foreground transition-colors hover:bg-accent"
          >
            <GitHubIcon className="size-4" />
            GitHub
          </Link>
          <Link
            href={`mailto:${site.email}`}
            className="inline-flex h-10 items-center gap-2 rounded-lg border border-border bg-card/50 px-4 text-sm text-foreground transition-colors hover:bg-accent"
          >
            <Mail className="size-4" />
            Email
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className="relative hidden shrink-0 md:block"
        aria-hidden
      >
        <div className="absolute -inset-6 rounded-full bg-violet/13 blur-3xl" />
        {/* An SVG has nothing for next/image to optimise, and the export is
            unoptimized anyway. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/mark.svg" alt="" className="relative size-36" />
      </motion.div>
    </section>
  );
}
