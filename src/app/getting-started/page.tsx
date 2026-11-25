import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Users, ShieldAlert, GraduationCap } from "lucide-react";
import { PageHero, Section } from "@/components/page-hero";
import { Reveal, ImageReveal } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Getting Started with Beekeeping",
  description:
    "How to become a beekeeper on the Isle of Man, join your local association, take the winter course, and learn the island's unique rules.",
};

const STEPS = [
  {
    n: "01",
    icon: Users,
    title: "Join your local association",
    body: "Three clubs cover the island, Ramsey & District, Western and Southern District. Membership is the doorway to everything else: meetings, mentoring, apiary visits and the swarm network.",
    href: "/associations",
    cta: "Find your association",
  },
  {
    n: "02",
    icon: GraduationCap,
    title: "Take the winter course",
    body: "The Federation's beginners course runs Wednesday evenings through March and April, seven evenings of BBKA-aligned theory, followed by practical apiary sessions all season.",
    href: "/courses",
    cta: "About the course",
  },
  {
    n: "03",
    icon: ShieldAlert,
    title: "Learn the island rules",
    body: "The Isle of Man is varroa-free and fiercely protected. Importing bees or any used equipment, even a hive tool or a bee suit, is illegal and carries a £10,000 fine. You must also register your apiary with DEFA.",
    href: "/legislation",
    cta: "Read the legislation",
  },
  {
    n: "04",
    icon: BookOpen,
    title: "Get your first colony",
    body: "Because nothing can be imported, new beekeepers obtain bees locally, through swarms, nuclei or splits from established keepers. Your association secretary or the Federation Secretary can help you find a queen or more bees.",
    href: "/contact",
    cta: "Get in touch",
  },
];

export default function GettingStartedPage() {
  return (
    <>
      <PageHero
        eyebrow="Getting started"
        title={
          <>
            Thinking about
            <br />
            keeping <em className="italic font-light text-honey-2">bees?</em>
          </>
        }
        lede="Every spring and summer, watching bees go about their work, people think about taking it up. Here's the honest path from curiosity to your first colony."
      />

      <Section className="pt-0">
        <div className="space-y-6">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <div className="group grid gap-6 md:grid-cols-[auto_1fr_auto] items-start rounded-3xl border border-ink/10 bg-cream-2/50 p-8 md:p-10 card-lift">
                <span className="font-display text-6xl md:text-7xl leading-none text-outline-forest">{s.n}</span>
                <div>
                  <h2 className="display-3 flex items-center gap-4">
                    <s.icon className="h-7 w-7 text-honey-2 shrink-0" strokeWidth={1.5} />
                    {s.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-ink/70 leading-relaxed">{s.body}</p>
                </div>
                <Button asChild variant="outline" size="sm" className="md:self-center shrink-0">
                  <Link href={s.href}>{s.cta}</Link>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="relative overflow-hidden grain">
        <div className="absolute inset-0">
          <ImageReveal src={IMAGES.beekeeper} alt="A beekeeper at work" className="h-full" imgClassName="object-cover" />
          <div className="absolute inset-0 bg-forest-2/75" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32 text-cream">
          <Reveal>
            <p className="eyebrow text-honey mb-5">A word of warning</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display-2 max-w-3xl">
              Beekeeping here is different, and that&rsquo;s{" "}
              <em className="italic font-light text-honey">the point</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="lede mt-8 max-w-2xl text-cream/75">
              With no imports, every colony on the island descends from Manx stock. You&rsquo;re not just keeping bees, you&rsquo;re stewarding a population that exists nowhere else. May and June holidays? Off the agenda until
              you&rsquo;ve made your artificial swarms.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <Button asChild variant="honey" size="lg" className="mt-10">
              <Link href="/courses/apply">
                Apply for the course <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
