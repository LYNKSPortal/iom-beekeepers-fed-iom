import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/page-hero";
import { Field, SubmitForm } from "@/components/form";
import { Reveal } from "@/components/motion";
import { PhoneCall } from "lucide-react";
import { ASSOCIATIONS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Request Swarm Collection",
  description:
    "Report a settled honeybee swarm on the Isle of Man. For the fastest response, call your nearest collector directly.",
};

export default function SwarmRequestPage() {
  return (
    <>
      <PageHero
        eyebrow="Request collection"
        title={
          <>
            Report a <em className="italic font-light text-honey-2">settled swarm</em>
          </>
        }
        lede="Time is of the essence, scout bees are house-hunting. For the fastest response, phone your nearest collector directly; use this form if you can't get through."
        crumbs={[
          { label: "Swarms", href: "/swarms" },
          { label: "Request collection", href: "/swarms/request" },
        ]}
      />

      <Section className="pt-0">
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <SubmitForm
              endpoint="/api/enquiry"
              submitLabel="Send request"
              successTitle="Request sent"
              successBody="Your report has been logged. If it's urgent, please still ring a collector, scouts don't wait."
            >
              <input type="hidden" name="type" value="swarm-request" />
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
                <Field label="Your name" required>
                  <input name="name" required className="field" placeholder="Your name" autoComplete="name" />
                </Field>
                <Field label="Email" required>
                  <input name="email" type="email" required className="field" placeholder="you@example.com" autoComplete="email" />
                </Field>
                <Field label="Phone" required hint="So the collector can call you back.">
                  <input name="phone" type="tel" required className="field" placeholder="07624 …" autoComplete="tel" />
                </Field>
                <Field label="Swarm location" required hint="Address, landmark or what3words.">
                  <input name="location" required className="field" placeholder="e.g. garden in Ballasalla, on a fence post" />
                </Field>
              </div>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
                <Field label="Has it clustered?" required hint="A dense hanging ball, not bees flying about.">
                  <select name="clustered" required className="field bg-cream" defaultValue="">
                    <option value="" disabled>Select…</option>
                    <option value="yes">Yes, settled in a cluster</option>
                    <option value="no">No, still flying</option>
                    <option value="unsure">Not sure</option>
                  </select>
                </Field>
                <Field label="How high / accessible?" hint="Ladder needed? Inside a structure?">
                  <input name="access" className="field" placeholder="e.g. head height on a branch" />
                </Field>
              </div>
              <Field label="Anything else?">
                <textarea name="message" rows={3} className="field resize-none" placeholder="How long it's been there, photos taken, gate access…" />
              </Field>
            </SubmitForm>
          </Reveal>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="rounded-3xl bg-forest-2 text-cream p-8 md:p-10 grain relative sticky top-28">
                <PhoneCall className="relative z-10 h-7 w-7 text-honey mb-5" />
                <h2 className="relative z-10 display-3">Faster by phone</h2>
                <p className="relative z-10 mt-4 text-cream/70 leading-relaxed">
                  A form is the backup, a phone call is the frontline. Ring the collector nearest the swarm, then the
                  next closest if no answer.
                </p>
                <Link
                  href="/swarms/collectors"
                  className="relative z-10 mt-6 inline-flex items-center gap-2 font-semibold text-honey u-sweep"
                >
                  Open the collector directory
                </Link>
                <p className="relative z-10 mt-8 border-t border-cream/15 pt-6 text-sm text-cream/60">
                  During working hours, DEFA Pest Control will refer callers to this page, and only call a beekeeper if
                  the caller has no internet access.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-honey mb-5">For beekeepers</p>
              <h2 className="display-2">Want to give a swarm a home?</h2>
              <p className="lede mt-6 text-cream/65">
                Join the swarms-wanted list. Register your name, contact details and address, you must already have a
                hive ready to receive bees and feel confident to look after them. The list goes to our swarm collectors;
                it is never made public.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-7 dark-form">
            <SubmitForm
              endpoint="/api/enquiry"
              submitLabel="Join the list"
              successTitle="You're on the list"
              successBody="We'll pass your details to the swarm collectors for the coming season."
            >
              <input type="hidden" name="type" value="swarms-wanted" />
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
                <Field label="Name" required>
                  <input name="name" required className="field" placeholder="Your name" autoComplete="name" />
                </Field>
                <Field label="Email" required>
                  <input name="email" type="email" required className="field" placeholder="you@example.com" autoComplete="email" />
                </Field>
                <Field label="Mobile number" required>
                  <input name="phone" type="tel" required className="field" placeholder="Mobile only, please" autoComplete="tel" />
                </Field>
                <Field label="Address" required hint="Where the bees would be housed.">
                  <input name="address" required className="field" placeholder="House, street, town, postcode" />
                </Field>
              </div>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
                <Field label="Association" required>
                  <select name="association" required className="field bg-forest-2 text-cream" defaultValue="">
                    <option value="" disabled>Select…</option>
                    {ASSOCIATIONS.map((a) => (
                      <option key={a.short} value={a.name}>
                        {a.name}
                      </option>
                    ))}
                    <option value="none">Not yet a member</option>
                  </select>
                </Field>
                <Field label="Confirm" required>
                  <select name="confirm" required className="field bg-forest-2 text-cream" defaultValue="">
                    <option value="" disabled>Select…</option>
                    <option value="ready">I have a hive ready and feel confident to keep bees</option>
                    <option value="received">I have received a swarm, remove me from the list</option>
                  </select>
                </Field>
              </div>
            </SubmitForm>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
