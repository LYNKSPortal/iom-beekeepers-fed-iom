import type { Metadata } from "next";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { PageHero, Section } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { RESOURCES } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/resources" },
  title: "Resources",
  description: "Useful links and references for Isle of Man beekeepers, BBKA, BIBBA, DEFA registration and more.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title={
          <>
            The beekeeper&rsquo;s
            <br />
            <em className="italic font-light text-honey-2">bookshelf</em>
          </>
        }
        lede="Hand-picked links to the organisations that matter to island beekeepers, from our parent body to DEFA registration."
      />
      <Section className="pt-0">
        <div className="grid gap-px bg-ink/10 border border-ink/10 md:grid-cols-2">
          {RESOURCES.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.05}>
              <a
                href={r.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full items-start justify-between gap-6 bg-cream p-8 hover:bg-cream-2 transition-colors"
              >
                <div>
                  <BookOpen className="h-6 w-6 text-honey-2 mb-4" />
                  <h2 className="font-display text-xl text-forest-2 group-hover:text-honey-2 transition-colors">
                    {r.name}
                  </h2>
                  <p className="mt-2 text-sm text-ink/60">{r.blurb}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-honey-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mt-10 text-sm text-stone-warm">
            Looking for documents? The Federation&rsquo;s constitution, bylaws and the island&rsquo;s bee legislation
            are all on the{" "}
            <Link href="/downloads" className="u-sweep font-semibold text-forest">
              downloads page
            </Link>
            .
          </p>
        </Reveal>
      </Section>
    </>
  );
}
