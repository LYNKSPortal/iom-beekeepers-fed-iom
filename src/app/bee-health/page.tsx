import type { Metadata } from "next";
import { PhoneCall, ShieldAlert, Droplets } from "lucide-react";
import { PageHero, Section, SectionHead } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { REPORTABLE_DISEASES } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/bee-health" },
  title: "Bee Health",
  description:
    "Notifiable bee pests and diseases on the Isle of Man, foulbrood, varroa, tropilaelaps and small hive beetle. Report to DEFA Animal Health on 685844.",
};

export default function BeeHealthPage() {
  return (
    <>
      <PageHero
        eyebrow="Bee health"
        title={
          <>
            Healthy because
            <br />
            we&rsquo;re <em className="italic font-light text-honey-2">watchful</em>
          </>
        }
        lede="As far as we are aware, none of the notifiable pests and diseases below are present on the Island. Let's keep it that way, report anything suspicious to DEFA Animal Health on 685844 without delay."
        dark
      />

      <Section>
        <SectionHead eyebrow="Notifiable" title="Report these without delay" />
        <div className="space-y-5">
          {REPORTABLE_DISEASES.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.05}>
              <div className="grid gap-4 md:grid-cols-[auto_1fr_auto] items-start rounded-3xl border border-ink/10 bg-cream-2/50 p-7 md:p-8 card-lift">
                <span className="font-display text-4xl text-outline-forest leading-none">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h2 className="font-display text-2xl text-forest-2">
                    {d.name} <em className="ml-2 text-sm italic text-stone-warm">{d.latin}</em>
                  </h2>
                  <p className="mt-2 text-ink/70 leading-relaxed max-w-3xl">{d.blurb}</p>
                </div>
                <span className="shrink-0 rounded-full bg-forest-2 px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-honey">
                  {d.severity}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-cream-2/60">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 prose-warm text-ink/75">
            <SectionHead eyebrow="Field notes" title="Reading the brood" className="mb-8" />
            <Reveal>
              <p>
                <strong>Foulbrood</strong> covers two larval diseases. EFB larvae turn yellow, lose segmentation, &ldquo;melt&rdquo;, and dry into dark scales, leaving a patchy brood pattern; shook-swarming onto fresh
                frames can save the colony. AFB is far worse: sunken, greasy cappings, a pepper-pot pattern, and the
                diagnostic brown &ldquo;rope&rdquo; drawn on a matchstick. AFB colonies must be destroyed completely.
              </p>
              <p>
                <strong>Lesser brood problems</strong>, sac brood (gondola-shaped larvae) and chalkbrood (white,
                mummified larvae, often in chilled drone brood), are widespread but not notifiable. Learn to tell them
                from foulbrood.
              </p>
              <p>
                <strong>Monitoring mites</strong>: inspect base debris suspended in meths (debris sinks, mites float),
                or decap drone cells and look for mites against white pupae.
              </p>
              <p>
                <strong>The bee louse</strong>, <em>Braula coeca</em>, is a harmless wingless fly easily confused with
                varroa, distinguish it by its rounder shape and six legs visible on both sides of its body.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <div className="rounded-3xl bg-forest-2 text-cream p-8 grain relative">
                <ShieldAlert className="relative z-10 h-7 w-7 text-honey mb-5" />
                <h3 className="relative z-10 display-3">Good apiary hygiene</h3>
                <ul className="relative z-10 mt-5 space-y-3 text-cream/75 text-sm leading-relaxed">
                  <li>, Sterilise your hive tool when visiting other apiaries</li>
                  <li>, Wear new or sterilised gloves</li>
                  <li>, Dirty bee suits are a no-no</li>
                  <li>, Hive swarms away from your apiary until proven disease-free</li>
                  <li>, Unsure? Call your local association for a second opinion</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <a
                href="tel:+441624685844"
                className="flex items-center justify-between gap-4 rounded-3xl bg-honey p-8 text-forest-2 card-lift"
              >
                <div>
                  <p className="eyebrow">DEFA Animal Health</p>
                  <p className="mt-2 font-display text-3xl">685844</p>
                </div>
                <PhoneCall className="h-8 w-8" />
              </a>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="rounded-3xl border border-ink/10 p-7 flex items-start gap-4">
                <Droplets className="h-6 w-6 text-honey-2 shrink-0 mt-1" />
                <p className="text-sm text-ink/70 leading-relaxed">
                  If varroa ever arrived, treatment would mean acaricides like oxalic acid, unpleasant for bees and
                  humans alike. Prevention is the whole strategy.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
