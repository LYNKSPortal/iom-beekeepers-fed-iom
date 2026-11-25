import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, User, ArrowRight } from "lucide-react";
import { PageHero, Section, SectionHead } from "@/components/page-hero";
import { Reveal, ImageReveal } from "@/components/motion";
import { ASSOCIATIONS, IMAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Local Associations",
  description:
    "Three local beekeeping associations cover the Isle of Man: Ramsey & District in the north, Western in the centre and west, and Southern District in the south.",
};

const IMGS = [IMAGES.hills, IMAGES.forest, IMAGES.poppies];

export default function AssociationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Local associations"
        title={
          <>
            Wherever you keep,
            <br />
            there&rsquo;s a club <em className="italic font-light text-honey-2">nearby</em>
          </>
        }
        lede="Three associations divide the island between them, north, west & central, and south. Every member of the Federation belongs to their local club."
      />

      <Section className="pt-0">
        <div className="space-y-24">
          {ASSOCIATIONS.map((a, i) => (
            <div key={a.short} className="grid gap-10 lg:grid-cols-12 items-center">
              <div className={`lg:col-span-5 ${i % 2 ? "lg:order-2" : ""}`}>
                <ImageReveal src={IMGS[i]} alt={`${a.name} area`} ratio="4/3" className="rounded-3xl" />
              </div>
              <div className={`lg:col-span-7 ${i % 2 ? "lg:order-1" : ""}`}>
                <Reveal>
                  <div className="flex items-baseline gap-5">
                    <span className="font-display text-7xl md:text-8xl leading-none text-outline-forest">0{i + 1}</span>
                    <div>
                      <p className="eyebrow text-honey-2 flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5" /> {a.region}
                      </p>
                      <h2 className="display-3 mt-2">{a.name}</h2>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="lede mt-6 max-w-xl text-ink/70">{a.blurb}</p>
                </Reveal>
                <Reveal delay={0.18}>
                  <dl className="mt-8 grid sm:grid-cols-2 gap-5 max-w-xl">
                    <div className="border-l-2 border-honey pl-4">
                      <dt className="text-xs uppercase tracking-[0.2em] text-stone-warm flex items-center gap-1.5">
                        <User className="h-3.5 w-3.5" /> Chairman
                      </dt>
                      <dd className="mt-1 font-display text-xl">{a.chair}</dd>
                    </div>
                    <div className="border-l-2 border-honey pl-4">
                      <dt className="text-xs uppercase tracking-[0.2em] text-stone-warm flex items-center gap-1.5">
                        <User className="h-3.5 w-3.5" /> Secretary
                      </dt>
                      <dd className="mt-1 font-display text-xl">{a.secretary}</dd>
                    </div>
                  </dl>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <SectionHead eyebrow="Not a member yet?" title="Your local club is the door in" dark className="mb-6" />
            <Reveal delay={0.1}>
              <p className="lede text-cream/60">
                Membership of the Federation runs through your local association, meetings, apiary visits, swarm
                support and the winter course all flow through the clubs.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <Link
                href="/membership"
                className="group mt-8 inline-flex items-center gap-3 font-display text-xl text-honey u-sweep"
              >
                About membership
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1.5" />
              </Link>
            </Reveal>
          </div>
          <ImageReveal src={IMAGES.bees} alt="Honeybees returning to the hive" ratio="16/10" className="rounded-3xl" />
        </div>
      </Section>
    </>
  );
}
