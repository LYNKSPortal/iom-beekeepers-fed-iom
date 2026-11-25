import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, MapPin, CalendarDays, Hexagon } from "lucide-react";
import { Reveal, SplitLines, Magnetic, Counter } from "@/components/motion";
import { Section, SectionHead } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { ASSOCIATIONS, EVENTS, IMAGES, POSTS, formatDate } from "@/lib/data";
import { HeroVideo } from "@/components/hero-video";

const MUX_PLAYBACK_ID = "RngMMxWgGFOInlnJCRMac9XCUERNRdTFrHhwLHg6eS8";

const TICKER = [
  "Varroa-free since records began",
  "Est. 200+ registered beekeepers",
  "Three local associations",
  "Import ban since 1988",
  "Native Manx honeybee",
];

export default function Home() {
  const latestPosts = POSTS.slice(0, 3);
  const upcoming = EVENTS.slice(0, 2);

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative min-h-svh flex flex-col justify-end overflow-hidden bg-forest-2 text-cream grain">
        <div className="absolute inset-0">
          <HeroVideo playbackId={MUX_PLAYBACK_ID} />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-2 via-forest-2/40 to-forest-2/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-2/60 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 md:pb-20 landscape:pb-8">
          <Reveal>
            <p className="eyebrow text-honey mb-6 landscape:mb-3 flex items-center gap-3">
              <span className="inline-block h-px w-10 bg-honey" />
              Isle of Man Beekeepers Federation
            </p>
          </Reveal>
          <h1 className="display-1 max-w-6xl">
            <SplitLines text="An island of bees," />
            <br />
            <span className="italic font-light text-honey">
              <SplitLines text="kept wild at heart." />
            </span>
          </h1>
          <Reveal delay={0.5}>
            <p className="lede mt-8 landscape:mt-4 max-w-xl text-cream/75">
              Guardians of the last varroa-free honeybee population in the British Isles, three associations, one
              federation, and two hundred keepers protecting a living island heritage.
            </p>
          </Reveal>
          <Reveal delay={0.65}>
            <div className="mt-10 landscape:mt-5 flex flex-wrap items-center gap-4">
              <Magnetic>
                <Button asChild variant="honey" size="lg">
                  <Link href="/getting-started">
                    Start beekeeping <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </Magnetic>
              <Magnetic>
                <Button asChild variant="outline" size="lg" className="text-cream border-cream/40 hover:bg-cream hover:text-forest-2 hover:border-cream">
                  <Link href="/swarms">Found a swarm?</Link>
                </Button>
              </Magnetic>
            </div>
          </Reveal>
        </div>

        {/* ticker */}
        <div className="relative z-10 border-t border-cream/15 bg-forest-2/60 backdrop-blur-sm overflow-hidden">
          <div className="animate-marquee flex w-max items-center gap-0 py-3.5" aria-hidden="true">
            {[...TICKER, ...TICKER].map((t, i) => (
              <span key={i} className="flex items-center gap-6 px-6 text-xs uppercase tracking-[0.25em] text-cream/60 whitespace-nowrap">
                {t}
                <Hexagon className="h-3 w-3 text-honey fill-honey/30" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- MANIFESTO / STATS ---------------- */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-12 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow text-honey-2 mb-6">The Federation</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-2">
                Three associations.
                <br />
                One island-wide <em className="text-honey-2 not-italic font-light italic">purpose</em>.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 prose-warm text-ink/70">
            <Reveal delay={0.15}>
              <p>
                Affiliated to the BBKA, the Federation unites the Southern District, Western and Ramsey &amp; District
                associations. Some 200 registered beekeepers keep bees across a mild, breezy island of varied terrain.
              </p>
              <p>
                We stage the annual Honey Show and Convention, run a celebrated winter beginners course, and operate a
                volunteer swarm rescue service each spring and summer.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border border-ink/10">
          {[
            { v: 200, s: "+", l: "Registered beekeepers" },
            { v: 3, s: "", l: "Local associations" },
            { v: 0, s: "", l: "Varroa mites on the island" },
            { v: 38, s: "", l: "Years of import protection" },
          ].map((st, i) => (
            <div key={st.l} className="bg-cream p-8 md:p-10">
              <Reveal delay={i * 0.08}>
                <p className="display-3 text-forest">
                  <Counter to={st.v} suffix={st.s} />
                </p>
                <p className="mt-3 text-sm text-stone-warm">{st.l}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------------- SWARM BAND ---------------- */}
      <section className="relative overflow-hidden bg-honey text-forest-2 grain">
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-20 grid gap-10 lg:grid-cols-[1.5fr_1fr] items-center">
          <div>
            <Reveal>
              <h2 className="display-2">Seen a cluster of bees? Don&rsquo;t spray, call.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lede mt-6 max-w-xl text-forest-2/80">
                Swarming bees are generally calm. Our volunteer collectors cover the whole island, north to south, free of charge, as they have since time immemorial.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="lg:justify-self-end">
            <Magnetic>
              <Button asChild size="lg" className="bg-forest-2 text-cream hover:bg-ink">
                <Link href="/swarms">
                  Report a swarm <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </Magnetic>
          </Reveal>
        </div>
      </section>

      {/* ---------------- BENTO PILLARS ---------------- */}
      <Section>
        <SectionHead eyebrow="What we do" title="Four threads of island beekeeping" />
        <div className="grid gap-5 md:grid-cols-6 auto-rows-[minmax(190px,auto)]">
          {/* Learn, tall */}
          <Link
            href="/courses"
            className="group card-lift relative md:col-span-2 md:row-span-2 overflow-hidden rounded-3xl bg-forest-2 text-cream img-zoom min-h-[320px]"
          >
            <Image src={IMAGES.beekeeper} alt="Beekeeper at the apiary" fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-2 via-forest-2/30 to-transparent" />
            <div className="relative z-10 flex h-full flex-col justify-end p-7">
              <p className="eyebrow text-honey mb-3">Learn</p>
              <h3 className="display-3">The winter course</h3>
              <p className="mt-3 text-sm text-cream/70 max-w-xs">
                Seven evenings of theory, a season of apiary practice, our 15-year-old beginners course.
              </p>
              <ArrowUpRight className="mt-5 h-5 w-5 text-honey transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </Link>

          {/* Conservation, wide */}
          <Link
            href="/legislation"
            className="group card-lift relative md:col-span-4 overflow-hidden rounded-3xl bg-forest text-cream img-zoom min-h-[240px]"
          >
            <Image src={IMAGES.glen} alt="Manx glen landscape" fill sizes="(max-width:768px) 100vw, 66vw" className="object-cover opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-r from-forest-2/80 via-forest-2/30 to-transparent" />
            <div className="relative z-10 flex h-full flex-col justify-end p-7">
              <p className="eyebrow text-honey mb-3">Conservation</p>
              <h3 className="display-3 max-w-md">Varroa-free. Protected by law since 1988.</h3>
              <p className="mt-3 text-sm text-cream/70 max-w-sm">
                Importing bees or used equipment carries a £10,000 fine, the wall that keeps our bees clean.
              </p>
            </div>
          </Link>

          {/* Honey */}
          <Link
            href="/honey"
            className="group card-lift relative md:col-span-2 overflow-hidden rounded-3xl img-zoom min-h-[240px]"
          >
            <Image src={IMAGES.honey} alt="Jar of Manx honey" fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
            <div className="relative z-10 flex h-full flex-col justify-end p-7 text-cream">
              <p className="eyebrow text-honey mb-3">Local Honey</p>
              <h3 className="font-display text-2xl">Meet the producers</h3>
            </div>
          </Link>

          {/* Asian hornet */}
          <Link
            href="/asian-hornets"
            className="group card-lift relative md:col-span-2 overflow-hidden rounded-3xl bg-charcoal text-cream p-7 min-h-[240px] flex flex-col justify-between"
          >
            <div>
              <p className="eyebrow text-honey mb-3">Vigilance</p>
              <h3 className="font-display text-2xl leading-tight">The Asian hornet is getting closer.</h3>
              <p className="mt-3 text-sm text-cream/60">
                Nests reported as far north as Hull. Learn the signs, your eyes are our best defence.
              </p>
            </div>
            <ArrowUpRight className="h-5 w-5 text-honey transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </Section>

      {/* ---------------- ASSOCIATIONS ---------------- */}
      <Section dark>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHead eyebrow="Local associations" title="Three clubs, one island" dark className="mb-8" />
            <Reveal delay={0.1}>
              <p className="lede text-cream/60 max-w-md">
                Each association holds meetings through the year, often at members&rsquo; apiaries. Find your nearest
                and come along.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <Button asChild variant="cream" size="md" className="mt-8">
                <Link href="/associations">
                  All associations <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
          <div className="lg:col-span-7 space-y-px">
            {ASSOCIATIONS.map((a, i) => (
              <Reveal key={a.short} delay={i * 0.1}>
                <Link
                  href="/associations"
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 border-t border-cream/15 py-7 px-2 hover:bg-cream/5 transition-colors"
                >
                  <span className="font-display text-5xl md:text-6xl text-outline group-hover:text-honey group-hover:[-webkit-text-stroke:0] transition-all">
                    0{i + 1}
                  </span>
                  <span>
                    <span className="block font-display text-xl md:text-2xl">{a.name}</span>
                    <span className="mt-1 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cream/40">
                      <MapPin className="h-3.5 w-3.5" /> {a.region}
                    </span>
                  </span>
                  <ArrowUpRight className="h-6 w-6 text-cream/30 group-hover:text-honey transition-colors" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ---------------- NEWS + EVENTS ---------------- */}
      <Section>
        <div className="flex items-end justify-between gap-6 mb-12 md:mb-16 flex-wrap">
          <SectionHead eyebrow="Journal" title="From the apiaries" className="mb-0" />
          <Reveal>
            <Link href="/news" className="u-sweep text-sm font-semibold uppercase tracking-[0.15em] text-forest">
              All news →
            </Link>
          </Reveal>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {latestPosts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1}>
              <Link href={`/news/${p.slug}`} className="group block">
                {p.image && (
                  <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-2xl img-zoom">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                  </div>
                )}
                <p className="text-xs uppercase tracking-[0.2em] text-honey-2 font-semibold">{p.category}</p>
                <h3 className="mt-3 font-display text-2xl leading-snug group-hover:text-honey-2 transition-colors">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-ink/60 leading-relaxed line-clamp-3">{p.excerpt}</p>
                <p className="mt-4 text-xs text-stone-warm flex items-center gap-2">
                  <CalendarDays className="h-3.5 w-3.5" /> {formatDate(p.date)}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-2">
          {upcoming.map((e) => (
            <Reveal key={e.slug}>
              <Link
                href={`/events/${e.slug}`}
                className="group card-lift flex gap-6 rounded-2xl border border-ink/10 bg-cream-2/60 p-6 md:p-8"
              >
                <div className="shrink-0 text-center">
                  <p className="font-display text-4xl text-forest">{new Date(e.date + "T00:00:00").getDate()}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-warm">
                    {new Date(e.date + "T00:00:00").toLocaleDateString("en-GB", { month: "short" })}
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl group-hover:text-honey-2 transition-colors">{e.title}</h3>
                  <p className="mt-1.5 text-sm text-ink/60">
                    {e.time} · {e.location}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------------- CLOSING CTA ---------------- */}
      <section className="relative overflow-hidden grain">
        <div className="absolute inset-0 img-zoom">
          <Image src={IMAGES.field} alt="Golden evening over Manx farmland" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-forest-2/70" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:py-40 text-center text-cream">
          <Reveal>
            <p className="eyebrow text-honey mb-6">Join the federation</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display-2 mx-auto max-w-3xl">Keep bees. Keep the island&rsquo;s bees.</h2>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Magnetic>
                <Button asChild variant="honey" size="lg">
                  <Link href="/membership">Become a member</Link>
                </Button>
              </Magnetic>
              <Magnetic>
                <Button asChild variant="outline" size="lg" className="text-cream border-cream/40 hover:bg-cream hover:text-forest-2 hover:border-cream">
                  <Link href="/courses">Explore the course</Link>
                </Button>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
