import type { Metadata } from "next";
import { PageHero, Section } from "@/components/page-hero";
import { Field, SubmitForm } from "@/components/form";
import { Reveal, ImageReveal } from "@/components/motion";
import { IMAGES, ASSOCIATIONS } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/courses/apply" },
  title: "Course Application",
  description:
    "Apply for the Isle of Man Beekeepers Federation beginners beekeeping course, sign-ups open in October.",
};

export default function CourseApplyPage() {
  return (
    <>
      <PageHero
        eyebrow="Course application"
        title={
          <>
            Reserve your place at
            <br />
            the <em className="italic font-light text-honey-2">hive</em>
          </>
        }
        lede="Sign-ups open at the beginning of October and stay open until the course is full. Your details are held only for the year of your course, then erased, except with the Association Secretaries."
        crumbs={[
          { label: "Courses", href: "/courses" },
          { label: "Apply", href: "/courses/apply" },
        ]}
      />

      <Section className="pt-0">
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <SubmitForm
              endpoint="/api/enquiry"
              submitLabel="Submit application"
              successTitle="Application received"
              successBody="We'll confirm your place and course details by email. See you in March."
            >
              <input type="hidden" name="type" value="course-application" />
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
                <Field label="Full name" required>
                  <input name="name" required className="field" placeholder="Your name" autoComplete="name" />
                </Field>
                <Field label="Email" required>
                  <input name="email" type="email" required className="field" placeholder="you@example.com" autoComplete="email" />
                </Field>
                <Field label="Phone">
                  <input name="phone" type="tel" className="field" placeholder="Optional" autoComplete="tel" />
                </Field>
                <Field label="Nearest association" hint="Helps us plan practical sessions.">
                  <select name="association" className="field bg-cream">
                    <option value="">Not sure yet</option>
                    {ASSOCIATIONS.map((a) => (
                      <option key={a.short} value={a.name}>
                        {a.name}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>
              <Field label="Anything we should know?" hint="Experience, questions, accessibility needs, optional.">
                <textarea name="message" rows={4} className="field resize-none" placeholder="Tell us a little about yourself" />
              </Field>
            </SubmitForm>
          </Reveal>
          <div className="lg:col-span-5">
            <ImageReveal src={IMAGES.honey} alt="Manx honey" ratio="4/5" className="rounded-3xl" />
          </div>
        </div>
      </Section>
    </>
  );
}
