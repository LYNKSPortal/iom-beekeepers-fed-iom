import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { PageHero, Section, SectionHead } from "@/components/page-hero";
import { Reveal, ImageReveal } from "@/components/motion";
import { IMAGES, OFFICERS } from "@/lib/data";

export const metadata: Metadata = {
  title: "About the Federation",
  description:
    "The Isle of Man Beekeepers Federation, affiliated to the BBKA, uniting three local associations and 200 registered beekeepers.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            An island <em className="italic font-light text-honey-2">sheltered</em> for bees
          </>
        }
        lede="The Isle of Man Beekeepers Federation is affiliated to the BBKA and comprises three local associations, Southern District, Western, and Ramsey & District."
      />

      <Section className="pt-0">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-7 prose-warm text-ink/75 text-[1.05rem]">
            <Reveal>
              <p>
                There are some <strong>200 registered beekeepers</strong> on the island, which is blessed with a mild, if breezy, climate and varied terrain. Each of the clubs holds several meetings through the year,
                sometimes at members&rsquo; apiaries.
              </p>
              <p>
                The Federation stages an annual <strong>Honey Show and Convention</strong>, usually in November. It
                always attracts sufficient entries to qualify for the BBKA Blue Riband Prize, awarded for the Best
                Exhibit in Show.
              </p>
              <p>
                Many local beekeepers are happy to sell their honey, find a producer near you on our{" "}
                <Link href="/honey" className="u-sweep font-semibold text-forest">
                  Honey List
                </Link>
                .
              </p>
              <p>
                The Federation also runs a popular{" "}
                <Link href="/courses" className="u-sweep font-semibold text-forest">
                  winter course for beginners
                </Link>
                .
              </p>
              <p>
                The Isle of Man&rsquo;s official <strong>Bee Inspector</strong>, who also advises on bees and
                beekeeping generally, is <strong>Harry Owens</strong>, contactable on{" "}
                <a href="tel:+441624494246" className="u-sweep font-semibold text-forest">
                  07624 494246
                </a>
                .
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <ImageReveal src={IMAGES.beekeeper} alt="A beekeeper inspecting hives" ratio="4/5" className="rounded-3xl" />
            <Reveal delay={0.1}>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-stone-warm">At the apiary</p>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section dark>
        <SectionHead eyebrow="The officers" title="The people behind the federation" dark />
        <div className="grid gap-px bg-cream/10 border border-cream/10 sm:grid-cols-2 lg:grid-cols-3">
          {OFFICERS.map((o, i) => (
            <Reveal key={o.role} delay={i * 0.06} className="bg-forest-2">
              <div className="p-8">
                <p className="eyebrow text-honey mb-3">{o.role}</p>
                <p className="font-display text-2xl">{o.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <ImageReveal src={IMAGES.glen} alt="The Manx landscape" ratio="4/3" className="rounded-3xl" />
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <SectionHead eyebrow="Governance" title="Founded on a promise to the bees" className="mb-6" />
            <Reveal delay={0.1}>
              <p className="prose-warm text-ink/70">
                Earlier generations of island beekeepers fought hard to protect our colonies from the threats arriving
                on adjacent islands. The Federation&rsquo;s constitution and bylaws formalise that stewardship.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  ["Federation Constitution (2026)", "/media/uploads/2026/06/IOMBK-Fed-Constitution-version-2026-04-25.pdf"],
                  ["Federation Bylaws (2026)", "/media/uploads/2026/06/IOMBK-Fed-Bylaws-Version-2026-04-25.pdf"],
                  ["Privacy Policy", "/legislation"],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("/media") ? "_blank" : href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold hover:border-honey hover:text-honey-2 transition-colors"
                  >
                    <FileText className="h-4 w-4" /> {label}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section className="bg-cream-2/60">
        <div className="flex flex-wrap items-center justify-between gap-8">
          <div>
            <p className="eyebrow text-honey-2 mb-4">Next</p>
            <h2 className="display-3">Meet the three associations</h2>
          </div>
          <Link
            href="/associations"
            className="group inline-flex items-center gap-3 font-display text-xl text-forest u-sweep"
          >
            Ramsey, Western &amp; Southern
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1.5" />
          </Link>
        </div>
      </Section>
    </>
  );
}
