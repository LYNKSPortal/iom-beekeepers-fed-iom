import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Dna, Sprout, HandHeart } from "lucide-react";
import { PageHero, Section, SectionHead } from "@/components/page-hero";
import { Reveal, ImageReveal } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { IMAGES, POSTS, formatDate } from "@/lib/data";

export const metadata: Metadata = {
  title: "Bee Improvement",
  description:
    "The Manx Bee Improvement Group, breeding calmly from the Island's own stock, generation by generation.",
};

export default function BeeImprovementPage() {
  const posts = POSTS.filter((p) => p.category === "Manx Bee Improvement Group").slice(0, 2);
  return (
    <>
      <PageHero
        eyebrow="Manx Bee Improvement Group"
        title={
          <>
            Better bees,
            <br />
            bred <em className="italic font-light text-honey-2">here</em>
          </>
        }
        lede="With no imports possible, every colony on the island descends from Manx stock. The Improvement Group works with what we have, selecting from our best bees and improving them generation by generation."
      />

      <Section className="pt-0">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
            <ImageReveal src={IMAGES.bees} alt="Bees at the hive entrance" ratio="4/5" className="rounded-3xl" />
          </div>
          <div className="lg:col-span-7 space-y-5">
            {[
              {
                icon: Dna,
                title: "A closed gene pool",
                body: "The import ban makes the Isle of Man unique in the British Isles, a population of bees shaped by island conditions and nothing else. That's not a limitation; it's a conservation asset.",
              },
              {
                icon: Sprout,
                title: "Select for what matters",
                body: "Docility, over-wintering, honey production and swarm tendency, the group helps beekeepers assess colonies honestly and raise queens from the best of them.",
              },
              {
                icon: HandHeart,
                title: "Improvement for all",
                body: "Aligned with BIBBA's approach, including talks from Jo Widdicombe, the group shows that bee improvement isn't only for queen breeders. Every keeper can select, a little, every year.",
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="flex gap-6 rounded-3xl border border-ink/10 bg-cream-2/50 p-8 card-lift">
                  <c.icon className="h-8 w-8 shrink-0 text-honey-2" strokeWidth={1.5} />
                  <div>
                    <h2 className="font-display text-2xl">{c.title}</h2>
                    <p className="mt-3 text-ink/65 leading-relaxed">{c.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <SectionHead eyebrow="Queen rearing" title="Raising Manx queens" dark className="mb-6" />
            <Reveal delay={0.1}>
              <p className="lede text-cream/65">
                Because losses can&rsquo;t be replaced from off-island, queen rearing and artificial swarming aren&rsquo;t
                advanced topics here, they&rsquo;re essential practice. The group shares techniques for nucleus
                colonies, swarm control and raising queens locally.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <Button asChild variant="cream" size="lg" className="mt-8">
                <Link href="/contact">
                  Join the group <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
          <div className="space-y-5">
            {posts.map((p) => (
              <Reveal key={p.slug}>
                <Link
                  href={`/news/${p.slug}`}
                  className="group block rounded-2xl border border-cream/15 p-7 hover:bg-cream/5 transition-colors"
                >
                  <p className="eyebrow text-honey">{p.category}</p>
                  <h3 className="mt-3 font-display text-xl group-hover:text-honey transition-colors">{p.title}</h3>
                  <p className="mt-2 text-sm text-cream/50">{formatDate(p.date)}</p>
                </Link>
              </Reveal>
            ))}
            <Reveal delay={0.1}>
              <a
                href="https://bibba.com/"
                target="_blank"
                rel="noreferrer"
                className="group block rounded-2xl border border-honey/40 bg-honey/10 p-7 hover:bg-honey/15 transition-colors"
              >
                <p className="eyebrow text-honey">External</p>
                <h3 className="mt-3 font-display text-xl">BIBBA, Bee Improvement & Bee Breeders Association</h3>
                <p className="mt-2 text-sm text-cream/50">The national body for conserving and improving native bees.</p>
              </a>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
