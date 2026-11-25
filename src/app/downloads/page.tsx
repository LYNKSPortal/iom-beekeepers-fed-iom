import type { Metadata } from "next";
import { ArrowUpRight, FileText } from "lucide-react";
import { PageHero, Section } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { DOWNLOADS } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/downloads" },
  title: "Downloads",
  description: "Federation documents and Isle of Man beekeeping legislation, constitution, bylaws and the statute book.",
};

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        eyebrow="Downloads"
        title={
          <>
            Documents &amp;
            <br />
            <em className="italic font-light text-honey-2">the law</em>
          </>
        }
        lede="The Federation's governing documents and every piece of legislation protecting the Island's bees, in one place."
      />
      <Section className="pt-0">
        <ul className="divide-y divide-ink/10 border-y border-ink/10">
          {DOWNLOADS.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.04}>
              <li>
                <a
                  href={d.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid grid-cols-[auto_1fr_auto_auto] items-center gap-5 py-6 px-2 hover:bg-honey/5 transition-colors"
                >
                  <span className="grid h-11 w-11 place-items-center hex-clip bg-honey/15">
                    <FileText className="h-5 w-5 text-honey-2" />
                  </span>
                  <span className="font-display text-lg md:text-xl text-forest-2 group-hover:text-honey-2 transition-colors">
                    {d.name}
                  </span>
                  <span className="hidden sm:block text-xs font-bold uppercase tracking-[0.2em] text-stone-warm">
                    {d.type}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-honey-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}
