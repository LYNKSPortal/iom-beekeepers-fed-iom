import type { Metadata } from "next";
import { ArrowUpRight, FileText, Gavel, ShieldCheck, ClipboardList } from "lucide-react";
import { PageHero, Section, SectionHead } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { DOWNLOADS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Beekeeping Legislation",
  description:
    "Your legal responsibilities as an Isle of Man beekeeper, the import ban, apiary registration, and the laws protecting our varroa-free bees.",
};

const DUTIES = [
  { icon: ClipboardList, title: "Register your holding", body: "All apiaries must be registered with DEFA, owner contact details, exact mapped location and hive count. You get a holding number (UK 019 / …) to quote when bees or nuclei leave it." },
  { icon: ShieldCheck, title: "Keep records & inspect", body: "Maintain your records, inspect hives regularly for pests and disease, and report anything suspicious to DEFA Animal Health (685844) without delay." },
  { icon: Gavel, title: "Never import", body: "No bees, and no equipment previously used with bees or in honey production, including clothing and hive tools. From anywhere, including the UK. Fine: £10,000." },
];

export default function LegislationPage() {
  return (
    <>
      <PageHero
        eyebrow="Legislation"
        title={
          <>
            Hard-won laws,
            <br />
            <em className="italic font-light text-honey-2">worth keeping</em>
          </>
        }
        lede="The Bees Act 1989, the Bee Diseases and Pest Control Order 2008, and EU Council Decision 2015/266, which accepts the Isle of Man as varroa-free, together let us prohibit all bee imports."
        dark
      >
        <Reveal delay={0.3}>
          <div className="mt-12 inline-flex items-center gap-4 rounded-2xl border border-honey/50 bg-honey/10 px-7 py-5">
            <Gavel className="h-8 w-8 text-honey shrink-0" />
            <p className="font-display text-xl md:text-2xl leading-snug">
              Importing bees or second-hand equipment, including clothing, carries a{" "}
              <span className="text-honey">£10,000 fine</span>.
            </p>
          </div>
        </Reveal>
      </PageHero>

      <Section>
        <SectionHead eyebrow="Your duties" title="As an island beekeeper, you must…" />
        <div className="grid gap-5 md:grid-cols-3">
          {DUTIES.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.08}>
              <div className="h-full rounded-3xl border border-ink/10 bg-cream-2/50 p-8 card-lift">
                <d.icon className="h-8 w-8 text-honey-2" strokeWidth={1.5} />
                <h2 className="mt-5 font-display text-2xl">{d.title}</h2>
                <p className="mt-3 text-sm text-ink/65 leading-relaxed">{d.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mt-10 prose-warm text-ink/70 max-w-3xl">
            Go to <a href="https://www.gov.im" target="_blank" rel="noreferrer" className="u-sweep font-semibold text-forest">gov.im</a> and
            search &lsquo;bees&rsquo; for the registration form. Registration ensures colonies can be inspected without
            delay, holding details are not public. DEFA must be told if you keep bees at a new location.
          </p>
        </Reveal>
      </Section>

      <Section className="bg-cream-2/60">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHead eyebrow="Why it matters" title="If varroa arrives, we all have it within a year" className="mb-6" />
            <Reveal delay={0.1}>
              <div className="prose-warm text-ink/70">
                <p>
                  Since we cannot import bees to make up losses, swarm control and our collection service are vital, there should be no need to even think about importing.
                </p>
                <p>
                  Visiting UK experts have noted island beekeepers can grow blasé about pests they&rsquo;ve never seen.
                  Stay aware. And keep an ear out for incoming illicit colonies, the biggest risk is beekeepers
                  relocating here without realising the law is different.
                </p>
                <p className="font-semibold text-forest-2">
                  Do not feed ANY honey to bees, 49% of imported honey contains disease spores.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <div className="rounded-3xl border border-ink/10 bg-cream overflow-hidden">
                <div className="border-b border-ink/10 px-8 py-5 flex items-center gap-3">
                  <FileText className="h-5 w-5 text-honey-2" />
                  <h3 className="font-display text-xl">The statute book</h3>
                </div>
                <ul className="divide-y divide-ink/10">
                  {DOWNLOADS.slice(2).map((d) => (
                    <li key={d.name}>
                      <a
                        href={d.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center justify-between gap-4 px-8 py-5 hover:bg-honey/10 transition-colors"
                      >
                        <span className="font-semibold text-forest-2">{d.name}</span>
                        <ArrowUpRight className="h-4 w-4 text-honey-2 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="https://www.gov.im/categories/business-and-industries/agriculture/bees/"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between gap-4 px-8 py-5 hover:bg-honey/10 transition-colors"
                    >
                      <span className="font-semibold text-forest-2">Register your bee holding (gov.im)</span>
                      <ArrowUpRight className="h-4 w-4 text-honey-2 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.bbka.org.uk/beekeeping-legislation"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between gap-4 px-8 py-5 hover:bg-honey/10 transition-colors"
                    >
                      <span className="font-semibold text-forest-2">BBKA beekeeping legislation, honey & labelling rules</span>
                      <ArrowUpRight className="h-4 w-4 text-honey-2 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
