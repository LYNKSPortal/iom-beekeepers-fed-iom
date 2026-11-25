import type { Metadata } from "next";
import Link from "next/link";
import { Clock, MapPin } from "lucide-react";
import { PageHero, Section } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { EVENTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Events",
  description: "Federation Council meetings, the annual Honey Show & Convention, and association events across the Isle of Man.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title={
          <>
            The beekeepers&rsquo;
            <br />
            <em className="italic font-light text-honey-2">calendar</em>
          </>
        }
        lede="Council meetings at St John's Methodist Church, the annual Honey Show & Convention each November, and association apiary visits through the season."
      />
      <Section className="pt-0">
        <div className="space-y-px">
          {EVENTS.map((e, i) => {
            const d = new Date(e.date + "T00:00:00");
            return (
              <Reveal key={e.slug} delay={i * 0.06}>
                <Link
                  href={`/events/${e.slug}`}
                  className="group grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_auto] items-center gap-6 md:gap-10 border-t border-ink/10 py-8 px-2 hover:bg-honey/5 transition-colors"
                >
                  <div className="text-center w-20">
                    <p className="font-display text-5xl md:text-6xl leading-none text-forest group-hover:text-honey-2 transition-colors">
                      {d.getDate()}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.25em] text-stone-warm">
                      {d.toLocaleDateString("en-GB", { month: "short" })}
                    </p>
                  </div>
                  <div>
                    <p className="eyebrow text-honey-2">{e.category}</p>
                    <h2 className="mt-2 font-display text-2xl md:text-3xl">{e.title}</h2>
                    <p className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-ink/60">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-4 w-4" /> {e.time}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" /> {e.location}
                      </span>
                    </p>
                  </div>
                  <p className="hidden md:block max-w-xs text-sm text-stone-warm">{e.excerpt}</p>
                </Link>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={0.15}>
          <p className="mt-10 text-sm text-stone-warm">
            Council meetings are open to all members. Association events are arranged locally, check with your
            association secretary.
          </p>
        </Reveal>
      </Section>
    </>
  );
}
