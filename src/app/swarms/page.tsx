import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, PhoneCall, AlertTriangle, Search, Ban } from "lucide-react";
import { PageHero, Section, SectionHead } from "@/components/page-hero";
import { Reveal, ImageReveal } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Found a Swarm?",
  description:
    "What to do if you see a swarm of honeybees on the Isle of Man, free volunteer collection, April to July.",
};

export default function SwarmsPage() {
  return (
    <>
      <PageHero
        eyebrow="Swarms"
        title={
          <>
            A cloud of bees,
            <br />
            <em className="italic font-light text-honey-2">on holiday</em>
          </>
        }
        lede="Honey bees swarm from mid-April to the end of July, it's how colonies reproduce. Swarming bees think they're on holiday and are generally not aggressive. Stay back, don't spray, and call a collector."
        dark
      >
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild variant="honey" size="lg">
              <Link href="/swarms/collectors">
                Find a collector <PhoneCall className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-cream border-cream/40 hover:bg-cream hover:text-forest-2 hover:border-cream">
              <Link href="/swarms/identify">Is it actually a swarm?</Link>
            </Button>
          </div>
        </Reveal>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-7 prose-warm text-ink/75 text-[1.05rem]">
            <Reveal>
              <p>
                <strong>Wait for the swarm to settle.</strong> The queen flies off with half the workers; the swarm
                clusters nearby while scout bees hunt for a new home. Please don&rsquo;t report lots of bees flying
                about, wait until they&rsquo;ve clustered.
              </p>
              <p>
                <strong>Never spray them.</strong> Under no circumstances should a resting swarm be sprayed with
                anything. Keep a respectful distance until a collector arrives.
              </p>
              <p>
                <strong>Time matters.</strong> Scout bees are hunting hard, delay and the bees may set up home in a
                chimney pot or cellar, which causes far worse problems later.
              </p>
              <p>
                <strong>Collectors are volunteers.</strong> Some work during the day, so be patient and be prepared to
                make several phone calls. Have ready: confirmation the swarm has clustered, the location, accessibility,
                and your name and contact number.
              </p>
              <p>
                <strong>It&rsquo;s free.</strong> Since it&rsquo;s illegal to import bees to the Island, these swarms are
                valuable additions to local apiaries, and since time immemorial, no fee is charged for a swarm of bees.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5 space-y-6">
            <ImageReveal src={IMAGES.beekeeper} alt="A beekeeper" ratio="4/3" className="rounded-3xl" />
            <Reveal delay={0.1}>
              <div className="rounded-3xl bg-honey/15 border border-honey/40 p-7">
                <AlertTriangle className="h-6 w-6 text-honey-2 mb-4" />
                <p className="font-display text-xl leading-snug text-forest-2">
                  Bees inside buildings, chimneys or cavity walls are different.
                </p>
                <p className="mt-3 text-sm text-ink/70 leading-relaxed">
                  Beekeepers cannot remove established colonies from buildings, that needs specialist work. Bee Manx
                  offers an expert, fully insured removal service: call Callum McKinlay on{" "}
                  <a href="tel:+441624400704" className="font-semibold u-sweep">400704</a>.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section className="bg-cream-2/60">
        <SectionHead eyebrow="What we can't help with" title="Not our bees" />
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              icon: Ban,
              title: "Bumblebee & solitary bee nests",
              body: "Local beekeepers cannot deal with bumblebee nests, villages of solitary bees, or any other flying creature causing concern.",
            },
            {
              icon: Ban,
              title: "Wasp nests",
              body: "Wasps are not bees. For wasp nests and other pest concerns, contact DEFA Pest Control on 685894.",
            },
            {
              icon: Ban,
              title: "Established colonies in buildings",
              body: "Once bees are inside a structure, removal usually needs dismantling, a specialist, insured job. Call Bee Manx on 400704.",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="h-full rounded-3xl border border-ink/10 bg-cream p-8">
                <c.icon className="h-7 w-7 text-stone-warm" strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-xl">{c.title}</h3>
                <p className="mt-3 text-sm text-ink/60 leading-relaxed">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mt-8 text-sm text-stone-warm">
            Unsure what you&rsquo;re seeing?{" "}
            <Link href="/swarms/identify" className="u-sweep font-semibold text-forest inline-flex items-center gap-1">
              <Search className="h-3.5 w-3.5" /> Check the identification guide
            </Link>{" "}
            before calling out the Swarm Patrol.
          </p>
        </Reveal>
      </Section>

      <Section dark>
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h2 className="display-2">Ready to report?</h2>
            <p className="lede mt-6 text-cream/60 max-w-md">
              Ring the collector closest to the swarm, and be ready with location, access and your contact details.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="honey" size="lg">
                <Link href="/swarms/collectors">Collector directory</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-cream border-cream/40 hover:bg-cream hover:text-forest-2 hover:border-cream">
                <Link href="/swarms/request">
                  Request collection <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <ImageReveal src={IMAGES.tree} alt="Sunlight through a great tree" ratio="4/3" className="rounded-3xl" />
        </div>
      </Section>
    </>
  );
}
