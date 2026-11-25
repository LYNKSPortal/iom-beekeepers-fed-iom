import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";
import { PageHero, Section } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { NewsArchive } from "@/components/news-archive";
import { POSTS, formatDate } from "@/lib/data";

export const metadata: Metadata = {
  title: "News",
  description: "The full archive of news and articles from the Isle of Man Beekeepers Federation.",
};

export default function NewsPage() {
  const [featured, ...rest] = POSTS;
  return (
    <>
      <PageHero
        eyebrow="News & archive"
        title={
          <>
            From the
            <br />
            <em className="italic font-light text-honey-2">apiaries</em>
          </>
        }
        lede={`The Federation's journal, ${POSTS.length} articles spanning ${new Date(POSTS[POSTS.length - 1].date + "T00:00:00").getFullYear()} to today.`}
      />
      <Section className="pt-0">
        <Reveal>
          <Link
            href={`/news/${featured.slug}`}
            className="group grid gap-8 lg:grid-cols-12 items-end rounded-3xl bg-forest-2 text-cream p-8 md:p-12 grain relative overflow-hidden card-lift"
          >
            <div className="relative z-10 lg:col-span-8">
              <p className="eyebrow text-honey">{featured.category}</p>
              <h2 className="display-3 mt-4 group-hover:text-honey transition-colors">{featured.title}</h2>
              <p className="mt-4 text-cream/70 max-w-2xl line-clamp-2">{featured.excerpt}</p>
            </div>
            <div className="relative z-10 lg:col-span-4 lg:text-right">
              <p className="text-sm text-cream/50 flex items-center gap-2 lg:justify-end">
                <CalendarDays className="h-4 w-4" /> {formatDate(featured.date)}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 font-semibold text-honey u-sweep">
                Read <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        </Reveal>

        <div className="mt-16">
          <Suspense fallback={<div className="h-64 animate-pulse rounded-3xl bg-ink/5" />}>
            <NewsArchive posts={rest} />
          </Suspense>
        </div>
      </Section>
    </>
  );
}
