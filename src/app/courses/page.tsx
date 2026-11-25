import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, CalendarDays, Flower2 } from "lucide-react";
import { PageHero, Section, SectionHead } from "@/components/page-hero";
import { Reveal, ImageReveal } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { COURSE_TOPICS, IMAGES, PRACTICAL_TOPICS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Beekeeping Courses",
  description:
    "The Isle of Man Beekeepers Federation beginners course, seven Wednesday evenings of theory through March and April, plus practical apiary sessions all season.",
};

export default function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Learn beekeeping"
        title={
          <>
            Seven evenings.
            <br />A lifetime of <em className="italic font-light text-honey-2">bees</em>.
          </>
        }
        lede="Set up around fifteen years ago on BBKA guidelines, our beginners course combines a winter of theory with a full season of hands-on apiary practice, run entirely by dedicated unpaid volunteers."
      >
        <Reveal delay={0.25}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild variant="honey" size="lg">
              <Link href="/courses/apply">
                Apply now <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <p className="text-sm text-stone-warm flex items-center gap-2">
              <CalendarDays className="h-4 w-4" /> Wednesdays, March &amp; April · Cost TBA
            </p>
          </div>
        </Reveal>
      </PageHero>

      <Section className="pt-0">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-7">
            <SectionHead eyebrow="The theory" title="What you'll learn" className="mb-10" />
            <ul className="space-y-0">
              {COURSE_TOPICS.map((t, i) => (
                <Reveal key={t} delay={i * 0.04}>
                  <li className="flex items-start gap-4 border-t border-ink/10 py-5">
                    <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-honey/15">
                      <Check className="h-3.5 w-3.5 text-honey-2" />
                    </span>
                    <span className="text-lg text-ink/80">{t}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <ImageReveal src={IMAGES.flowers} alt="Wildflowers" ratio="4/5" className="rounded-3xl" />
            <Reveal delay={0.1}>
              <div className="mt-6 rounded-2xl bg-forest-2 text-cream p-7 grain relative">
                <Flower2 className="h-6 w-6 text-honey mb-4 relative z-10" />
                <p className="relative z-10 font-display text-xl leading-snug">
                  Sign-ups open in October and stay open until the course is full.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section dark>
        <SectionHead eyebrow="The practice" title="Then, into the apiary" dark />
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
            <ImageReveal src={IMAGES.bees} alt="Bees at the hive entrance" ratio="4/5" className="rounded-3xl" />
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <p className="lede text-cream/70 mb-8">
                After the theory evenings, your local association invites you to practical sessions and apiary visits.
                Bee suits can usually be provided, check with your association secretary to avoid disappointment (and
                stings). There is always an experienced beekeeper on hand.
              </p>
            </Reveal>
            <ul className="space-y-0">
              {PRACTICAL_TOPICS.map((t, i) => (
                <Reveal key={t} delay={i * 0.05}>
                  <li className="flex items-start gap-4 border-t border-cream/15 py-5 text-cream/80">
                    <span className="mt-1 font-display text-honey text-lg">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-lg">{t}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-12 items-center">
          <div className="lg:col-span-8">
            <SectionHead eyebrow="Before you apply" title="The golden rule" className="mb-6" />
            <Reveal delay={0.1}>
              <p className="prose-warm lede text-ink/75 max-w-2xl">
                It is <strong>illegal to import bees and used equipment to the Island</strong>. Your details are held
                only for the year of your course and on the course mailing list, then erased, except with the
                Association Secretaries.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Button asChild variant="solid" size="lg">
              <Link href="/courses/apply">
                Course application <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
