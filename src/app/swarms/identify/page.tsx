import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";
import { PageHero, Section } from "@/components/page-hero";
import { Reveal, ImageReveal } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/swarms/identify" },
  title: "Swarm Identification",
  description:
    "Is it a honeybee swarm, a wasp nest or a bumblebee colony? Identify what you're seeing before calling a collector.",
};

const LOOKUP = [
  {
    name: "Honeybee swarm",
    verdict: "We can help",
    good: true,
    signs: [
      "A dense, rugby-ball-sized cluster hanging outdoors",
      "Bees clinging to each other in a single mass",
      "Loud but calm, resting, not defending",
      "Appears between mid-April and end of July",
    ],
  },
  {
    name: "Wasp nest",
    verdict: "Call DEFA, 685894",
    good: false,
    signs: [
      "A papery, grey ball, often in sheds, lofts or eaves",
      "Wasps fly in and out of a single entrance hole",
      "Smooth, shiny bodies; aggressive if approached",
      "Active well into autumn",
    ],
  },
  {
    name: "Bumblebee / solitary bees",
    verdict: "Leave them be",
    good: false,
    signs: [
      "Round, fuzzy bees, often one or two at a time",
      "Small nests in grass tussocks, walls or bird boxes",
      "Gentle, short-lived colonies that die off in autumn",
      "Best left alone, they're pollinators too",
    ],
  },
];

export default function IdentifyPage() {
  return (
    <>
      <PageHero
        eyebrow="Swarm identification"
        title={
          <>
            Bee, wasp or
            <br />
            <em className="italic font-light text-honey-2">bumble?</em>
          </>
        }
        lede="Before calling out the Swarm Patrol, take a moment to confirm you're looking at a honeybee swarm. If you're still unsure, check the BBKA's swarm advice."
        crumbs={[
          { label: "Swarms", href: "/swarms" },
          { label: "Identify", href: "/swarms/identify" },
        ]}
      />

      <Section className="pt-0">
        <div className="grid gap-6 lg:grid-cols-3">
          {LOOKUP.map((l, i) => (
            <Reveal key={l.name} delay={i * 0.09}>
              <div
                className={`h-full rounded-3xl border p-8 flex flex-col ${
                  l.good ? "border-honey bg-honey/10" : "border-ink/10 bg-cream-2/50"
                }`}
              >
                <span
                  className={`inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] ${
                    l.good ? "bg-honey text-forest-2" : "bg-ink/10 text-ink/60"
                  }`}
                >
                  {l.good ? <Check className="h-3.5 w-3.5" /> : <X className="h-3.5 w-3.5" />}
                  {l.verdict}
                </span>
                <h2 className="mt-5 font-display text-2xl">{l.name}</h2>
                <ul className="mt-5 space-y-3 flex-1">
                  {l.signs.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-sm text-ink/70">
                      <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${l.good ? "bg-honey-2" : "bg-ink/30"}`} />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-forest-2 text-cream p-8 md:p-10 grain relative">
            <p className="relative z-10 font-display text-xl md:text-2xl max-w-xl">
              Still unsure? The BBKA has a full visual guide to telling swarms apart.
            </p>
            <div className="relative z-10 flex gap-4">
              <Button asChild variant="honey" size="md">
                <a href="https://www.bbka.org.uk/swarm" target="_blank" rel="noreferrer">
                  BBKA swarm guide <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>

      <section className="relative">
        <ImageReveal src={IMAGES.hero} alt="A honeybee on a flower" className="h-[55vh] min-h-[380px]" />
        <div className="absolute inset-0 bg-forest-2/60" />
        <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center text-cream">
          <div>
            <Reveal>
              <h2 className="display-2 mx-auto max-w-2xl">Confirmed it&rsquo;s a honeybee swarm?</h2>
            </Reveal>
            <Reveal delay={0.12}>
              <Button asChild variant="honey" size="lg" className="mt-8">
                <Link href="/swarms/collectors">Find your nearest collector</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
