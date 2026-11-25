import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bug, Eye, Ruler, AlertTriangle } from "lucide-react";
import { PageHero, Section, SectionHead } from "@/components/page-hero";
import { Reveal, ImageReveal } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { POSTS, formatDate } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/asian-hornets" },
  title: "Asian Hornets",
  description:
    "Vespa velutina, the yellow-legged hornet. How to identify it, why the Isle of Man must stay vigilant, and the latest updates.",
};

const ID = [
  { icon: Ruler, title: "Size", body: "Slightly smaller than the European hornet, but since that species isn't on the Island, the best comparison is a huge, noisy wasp. Queens reach ~30mm." },
  { icon: Eye, title: "Colour", body: "Orange face; abdomen mostly black except the fourth segment, which carries a yellow band. The legs give it away, distinctly yellow-tipped." },
  { icon: Bug, title: "Behaviour", body: "Hawkers, they hover at hive entrances picking off returning foragers. A hornet 'hawking' a hive through summer is the classic sign." },
];

export default function AsianHornetsPage() {
  const hornetPosts = POSTS.filter((p) => p.category === "Asian Hornets").slice(0, 4);
  return (
    <>
      <PageHero
        eyebrow="Invasive species"
        title={
          <>
            The yellow-legged
            <br />
            <em className="italic font-light text-honey-2">hornet</em>
          </>
        }
        lede="Vespa velutina reached Europe in 2004, has spread to the Channel Islands, and nests have been reported as far north as Hull. The Isle of Man remains free, your eyes keep it that way."
        dark
      />

      <Section>
        <SectionHead eyebrow="Identification" title="Know it when you see it" />
        <div className="grid gap-5 md:grid-cols-3">
          {ID.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="h-full rounded-3xl border border-ink/10 bg-cream-2/50 p-8 card-lift">
                <c.icon className="h-8 w-8 text-honey-2" strokeWidth={1.5} />
                <h2 className="mt-5 font-display text-2xl">{c.title}</h2>
                <p className="mt-3 text-sm text-ink/65 leading-relaxed">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-10 flex items-start gap-4 rounded-3xl border border-honey/50 bg-honey/10 p-7">
            <AlertTriangle className="h-6 w-6 text-honey-2 shrink-0 mt-0.5" />
            <p className="text-ink/75 leading-relaxed">
              It can be mistaken for the harmless woodwasp. If you think you&rsquo;ve seen one, don&rsquo;t approach the
              nest, photograph it if safe, note the location, and report it to DEFA and your association immediately.
            </p>
          </div>
        </Reveal>
      </Section>

      <section className="relative">
        <ImageReveal src="/the-yellow-legged-hornet.jpg" alt="The yellow-legged Asian hornet, Vespa velutina" className="h-[55vh] min-h-[380px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-2/85 via-forest-2/55 to-forest-2/30" />
        <div className="absolute inset-0 z-10 flex items-center px-6">
          <div className="mx-auto max-w-7xl w-full text-cream">
            <Reveal>
              <p className="eyebrow text-honey mb-5">Why it matters here</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-2 max-w-3xl">
                An island is a fortress, <em className="italic font-light text-honey">if we keep watch</em>.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="lede mt-6 max-w-xl text-cream/75">
                Asian hornets devastate pollinator populations and honeybee colonies. Our geography, import controls and
                small, watchful community give the Island a genuine chance of staying free.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Section>
        <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
          <SectionHead eyebrow="Latest updates" title="Hornet watch" className="mb-0" />
          <Reveal>
            <Link href="/news" className="u-sweep text-sm font-semibold uppercase tracking-[0.15em] text-forest">
              All news →
            </Link>
          </Reveal>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {hornetPosts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.07}>
              <Link
                href={`/news/${p.slug}`}
                className="group flex gap-6 rounded-2xl border border-ink/10 p-6 card-lift bg-cream-2/50"
              >
                <div className="shrink-0 text-center border-r border-ink/10 pr-6">
                  <p className="font-display text-3xl text-forest">{new Date(p.date + "T00:00:00").getDate()}</p>
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-stone-warm">
                    {new Date(p.date + "T00:00:00").toLocaleDateString("en-GB", { month: "short", year: "numeric" })}
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl group-hover:text-honey-2 transition-colors leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink/60 line-clamp-2">{p.excerpt}</p>
                  <p className="mt-3 text-xs text-stone-warm">{formatDate(p.date)}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-12 text-center">
            <Button asChild variant="solid" size="lg">
              <Link href="/contact">
                Report a sighting <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
