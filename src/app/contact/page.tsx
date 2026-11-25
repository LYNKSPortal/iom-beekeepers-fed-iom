import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, Hexagon } from "lucide-react";
import { PageHero, Section } from "@/components/page-hero";
import { Field, SubmitForm } from "@/components/form";
import { Reveal } from "@/components/motion";
import { ASSOCIATIONS, OFFICERS, SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the Isle of Man Beekeepers Federation, officers, association secretaries, phone and email. For swarms, please use the swarm pages.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Say hello to the
            <br />
            <em className="italic font-light text-honey-2">federation</em>
          </>
        }
        lede="For anything other than swarms, use the form below or the direct contacts. For swarms, please go straight to the collector directory."
      >
        <Reveal delay={0.25}>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <a href={`tel:+447624328032`} className="inline-flex items-center gap-2 font-semibold text-forest u-sweep">
              <Phone className="h-4 w-4 text-honey-2" /> {SITE.phone} <span className="font-normal text-stone-warm">({SITE.phoneNote})</span>
            </a>
            <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 font-semibold text-forest u-sweep">
              <Mail className="h-4 w-4 text-honey-2" /> {SITE.email}
            </a>
          </div>
        </Reveal>
      </PageHero>

      <Section className="pt-0">
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h2 className="display-3 mb-10">Send a message</h2>
            <SubmitForm endpoint="/api/enquiry" submitLabel="Send message">
              <input type="hidden" name="type" value="contact" />
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
                <Field label="Your name" required>
                  <input name="name" required className="field" placeholder="Your name" autoComplete="name" />
                </Field>
                <Field label="Your email" required>
                  <input name="email" type="email" required className="field" placeholder="you@example.com" autoComplete="email" />
                </Field>
              </div>
              <Field label="Subject">
                <input name="subject" className="field" placeholder="What's this about?" />
              </Field>
              <Field label="Your message" required>
                <textarea name="message" required rows={5} className="field resize-none" placeholder="Write your message…" />
              </Field>
            </SubmitForm>
          </Reveal>

          <div className="lg:col-span-5 space-y-10">
            <Reveal delay={0.1}>
              <div>
                <h3 className="eyebrow text-honey-2 mb-5 flex items-center gap-2">
                  <Hexagon className="h-4 w-4" /> Federation officers
                </h3>
                <dl className="divide-y divide-ink/10 border-y border-ink/10">
                  {OFFICERS.map((o) => (
                    <div key={o.role} className="flex items-baseline justify-between py-3">
                      <dt className="text-sm text-stone-warm">{o.role}</dt>
                      <dd className="font-display text-lg">{o.name}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div>
                <h3 className="eyebrow text-honey-2 mb-5">Association contacts</h3>
                <dl className="divide-y divide-ink/10 border-y border-ink/10">
                  {ASSOCIATIONS.map((a) => (
                    <div key={a.short} className="py-3">
                      <dt className="font-display text-lg">{a.name}</dt>
                      <dd className="text-sm text-stone-warm mt-0.5">
                        Chairman {a.chair} · Secretary {a.secretary}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="rounded-3xl bg-forest-2 text-cream p-8 grain relative">
                <p className="relative z-10 eyebrow text-honey mb-4">Found a swarm instead?</p>
                <p className="relative z-10 text-cream/75 text-sm leading-relaxed">
                  Don&rsquo;t use this form for swarm reports, phone the collector nearest the swarm for the fastest
                  response.
                </p>
                <Link href="/swarms/collectors" className="relative z-10 mt-5 inline-flex items-center gap-2 font-semibold text-honey u-sweep text-sm">
                  Swarm collector directory
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
