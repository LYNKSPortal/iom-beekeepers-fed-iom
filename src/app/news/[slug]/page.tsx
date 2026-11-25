import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays } from "lucide-react";
import { Reveal } from "@/components/motion";
import { Section } from "@/components/page-hero";
import { POSTS, SITE, formatDate } from "@/lib/data";
import { JsonLd, articleLd, breadcrumbLd } from "@/lib/seo";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  const tags = post.categories.map((c) => c.replace(/^category-/, "").replace(/-/g, " "));
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/news/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${SITE.url}/news/${post.slug}`,
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [SITE.name],
      tags,
      images: post.image ? [{ url: post.image, alt: post.title }] : undefined,
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();
  const idx = POSTS.indexOf(post);
  const next = POSTS[(idx + 1) % POSTS.length];

  return (
    <>
      <JsonLd
        data={[
          articleLd(post),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "News", path: "/news" },
            { name: post.title, path: `/news/${post.slug}` },
          ]),
        ]}
      />
      <section className="bg-forest-2 text-cream grain relative px-6 pt-40 pb-20 md:pt-52 md:pb-28">
        <div className="relative z-10 mx-auto max-w-4xl">
          <Reveal>
            <Link href="/news" className="inline-flex items-center gap-2 text-sm text-cream/60 hover:text-honey transition-colors">
              <ArrowLeft className="h-4 w-4" /> All news
            </Link>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="eyebrow text-honey mt-8">{post.category}</p>
          </Reveal>
          <Reveal delay={0.14}>
            <h1 className="display-2 mt-5">{post.title}</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 flex items-center gap-2 text-sm text-cream/50">
              <CalendarDays className="h-4 w-4" /> {formatDate(post.date)}
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-3xl">
          {post.image && (
            <Reveal>
              <div className="relative mb-12 aspect-[16/9] overflow-hidden rounded-3xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={post.image} alt={post.title} className="absolute inset-0 h-full w-full object-cover" />
              </div>
            </Reveal>
          )}
          <Reveal>
            <div className="article-body" dangerouslySetInnerHTML={{ __html: post.html }} />
          </Reveal>
        </div>
      </Section>

      <Section className="bg-cream-2/60 py-16">
        <Link href={`/news/${next.slug}`} className="group flex items-center justify-between gap-6">
          <div>
            <p className="eyebrow text-honey-2">Next article</p>
            <p className="mt-2 font-display text-2xl md:text-3xl group-hover:text-honey-2 transition-colors">
              {next.title}
            </p>
          </div>
          <ArrowRight className="h-8 w-8 text-honey-2 transition-transform group-hover:translate-x-2" />
        </Link>
      </Section>
    </>
  );
}
