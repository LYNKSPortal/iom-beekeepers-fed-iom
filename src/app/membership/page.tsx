import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users, ShieldCheck, Award, Network } from "lucide-react";
import { PageHero, Section, SectionHead } from "@/components/page-hero";
import { Reveal, ImageReveal } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { IMAGES, ASSOCIATIONS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Join the Isle of Man Beekeepers Federation through your local association, meetings, apiary visits, the swarm network and the annual Honey Show.",
};

const BENEFITS = [
  {
    icon: Users,
    title: "A community of 200",
    body: "Meetings through the year, often hosted at members' apiaries, see inside real hives, not just diagrams.",
  },
  {
    icon: Network,
    title: "The swarm network",
    body: "Free swarm collection if your bees escape, and a route to obtaining bees without importing anything.",
  },
  {
    icon: Award,
    title: "Shows & conventions",
    body: "The annual Honey Show and Convention, enter honey, wax, mead, baking and photography for the BBKA Blue Riband.",
  },
  {
    icon: ShieldCheck,
    title: "Collective protection",
    body: "A registered, inspected, varroa-free beekeeping community, the strength behind the island's clean-bee status.",
  },
];

export default function MembershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title={
          <>
            Belong to the
            <br />
            <em className="italic font-light text-honey-2">island&rsquo;s</em> beekeepers
          </>
        }
        lede="Membership of the Federation runs through your local association, one join, three clubs' worth of meetings, mentoring and apiary visits."
      />

      <Section className="pt-0">
        <div className="grid gap-5 md:grid-cols-2">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.07}>
              <div className="card-lift h-full rounded-3xl border border-ink/10 bg-cream-2/50 p-8">
                <b.icon className="h-8 w-8 text-honey-2" strokeWidth={1.5} />
                <h2 className="mt-5 font-display text-2xl">{b.title}</h2>
                <p className="mt-3 text-ink/65 leading-relaxed">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section dark>
        <SectionHead eyebrow="How to join" title="Pick your association" dark />
        <div className="grid gap-5 md:grid-cols-3">
          {ASSOCIATIONS.map((a, i) => (
            <Reveal key={a.short} delay={i * 0.08}>
              <div className="rounded-3xl border border-cream/15 p-8 h-full flex flex-col">
                <p className="eyebrow text-honey">{a.region}</p>
                <h3 className="mt-3 font-display text-2xl">{a.name}</h3>
                <dl className="mt-6 space-y-3 text-sm text-cream/70 flex-1">
                  <div>
                    <dt className="text-cream/40 text-xs uppercase tracking-[0.2em]">Chairman</dt>
                    <dd>{a.chair}</dd>
                  </div>
                  <div>
                    <dt className="text-cream/40 text-xs uppercase tracking-[0.2em]">Secretary</dt>
                    <dd>{a.secretary}</dd>
                  </div>
                </dl>
                <Link
                  href="/contact"
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-honey u-sweep"
                >
                  Contact us to join
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mt-10 text-sm text-cream/50 max-w-2xl">
            To join, contact the Federation on{" "}
            <a href="tel:+447624328032" className="text-honey u-sweep">07624 328032</a> (texts preferred) or{" "}
            <a href="mailto:iombeekeepers@gmail.com" className="text-honey u-sweep">iombeekeepers@gmail.com</a>, we&rsquo;ll
            point you to the right association secretary.
          </p>
        </Reveal>
      </Section>

      <section className="relative">
        <ImageReveal src={IMAGES.wisteria} alt="A flowering garden path" className="h-[60vh] min-h-[420px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent" />
        <div className="absolute bottom-0 inset-x-0 px-6 pb-14">
          <div className="mx-auto max-w-7xl flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <h2 className="display-3 max-w-lg">Already keep bees? Register your holding.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Button asChild variant="solid" size="lg">
                <Link href="/legislation">
                  Your legal duties <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
