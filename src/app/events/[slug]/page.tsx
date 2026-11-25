import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Clock, MapPin } from "lucide-react";
import { Reveal } from "@/components/motion";
import { Section } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { EVENTS, formatDate } from "@/lib/data";

export function generateStaticParams() {
  return EVENTS.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const e = EVENTS.find((e) => e.slug === slug);
  return e ? { title: e.title, description: e.excerpt } : {};
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = EVENTS.find((e) => e.slug === slug);
  if (!event) notFound();
  const d = new Date(event.date + "T00:00:00");

  return (
    <>
      <section className="bg-forest-2 text-cream grain relative px-6 pt-40 pb-20 md:pt-52 md:pb-28">
        <div className="relative z-10 mx-auto max-w-5xl">
          <Reveal>
            <Link href="/events" className="inline-flex items-center gap-2 text-sm text-cream/60 hover:text-honey transition-colors">
              <ArrowLeft className="h-4 w-4" /> All events
            </Link>
          </Reveal>
          <div className="mt-10 grid gap-10 md:grid-cols-[auto_1fr] items-start">
            <Reveal delay={0.08}>
              <div className="hex-clip bg-honey px-8 py-10 text-center text-forest-2">
                <p className="font-display text-6xl leading-none">{d.getDate()}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.25em]">
                  {d.toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
                </p>
              </div>
            </Reveal>
            <div>
              <Reveal delay={0.12}>
                <p className="eyebrow text-honey">{event.category}</p>
                <h1 className="display-2 mt-4">{event.title}</h1>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-cream/70">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-honey" /> {formatDate(event.date)}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock className="h-4 w-4 text-honey" /> {event.time}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-honey" /> {event.location}
                  </span>
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="prose-warm text-lg text-ink/80">
              {event.body.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-wrap gap-4">
              <Button asChild variant="honey" size="lg">
                <Link href="/contact">
                  Ask about this event <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/events">All events</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
