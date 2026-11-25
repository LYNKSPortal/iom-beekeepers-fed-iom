import type { Metadata } from "next";
import { PageHero, Section } from "@/components/page-hero";
import { Reveal, ImageReveal } from "@/components/motion";
import { HoneyDirectory } from "@/components/honey-directory";
import { IMAGES } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/honey" },
  title: "Local Manx Honey",
  description:
    "Buy local Manx honey, cut comb, beeswax and hive products direct from Isle of Man beekeepers, the island list, north to south.",
};

export default function HoneyPage() {
  return (
    <>
      <PageHero
        eyebrow="Local honey"
        title={
          <>
            Honey that could only
            <br />
            come from <em className="italic font-light text-honey-2">here</em>
          </>
        }
        lede="Varroa-free bees, no routine chemical treatments, and forage from heather moor to hedgerow, Manx honey is unlike anywhere else. Below, the beekeepers who may have honey and hive products for sale."
      />

      <section className="px-6 pb-4">
        <div className="mx-auto max-w-7xl">
          <ImageReveal src={IMAGES.honey} alt="Golden honey poured into a jar" ratio="21/9" className="rounded-3xl h-64 md:h-96" />
        </div>
      </section>

      <Section>
        <Reveal>
          <HoneyDirectory />
        </Reveal>
      </Section>
    </>
  );
}
