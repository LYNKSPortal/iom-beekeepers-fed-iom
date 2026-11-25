import type { Metadata } from "next";
import { PageHero, Section } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { CollectorDirectory } from "@/components/directory";

export const metadata: Metadata = {
  alternates: { canonical: "/swarms/collectors" },
  title: "Swarm Collectors",
  description:
    "Isle of Man Beekeepers Federation swarm collectors, volunteers covering the North, Central and South areas of the island. Free swarm collection.",
};

export default function CollectorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Swarm collectors · 2026"
        title={
          <>
            The <em className="italic font-light text-honey-2">Swarm Patrol</em>
          </>
        }
        lede="Ring the contact closest to the swarm's location, then the next closest if there's no answer. Be prepared to make a number of calls, collectors are volunteers."
        crumbs={[
          { label: "Swarms", href: "/swarms" },
          { label: "Collectors", href: "/swarms/collectors" },
        ]}
      />
      <Section className="pt-0">
        <Reveal>
          <CollectorDirectory />
        </Reveal>
      </Section>
    </>
  );
}
