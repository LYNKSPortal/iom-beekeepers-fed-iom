import type { Metadata } from "next";
import { SITE } from "@/lib/data";

export function canonical(path: string): Metadata["alternates"] {
  return { canonical: `${SITE.url}${path === "/" ? "" : path}` };
}

export function ogImage(url: string, alt = SITE.name) {
  return { url, width: 1200, height: 630, alt };
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  alternateName: SITE.shortName,
  url: SITE.url,
  logo: `${SITE.url}/logo/logo-dark.png`,
  email: SITE.email,
  telephone: SITE.phone,
  sameAs: SITE.social.map((s) => s.href),
  address: { "@type": "PostalAddress", addressCountry: "IM", addressRegion: "Isle of Man" },
  contactPoint: {
    "@type": "ContactPoint",
    email: SITE.email,
    telephone: SITE.phone,
    contactType: "customer service",
  },
};

export const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.url,
  publisher: { "@type": "Organization", name: SITE.name },
};

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE.url}${it.path}`,
    })),
  };
}

export function articleLd(post: {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    image: post.image ? `${SITE.url}${post.image}` : undefined,
    author: { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: `${SITE.url}/logo/logo-dark.png` },
    },
    mainEntityOfPage: `${SITE.url}/news/${post.slug}`,
  };
}

export function eventLd(event: {
  slug: string;
  title: string;
  date: string;
  time?: string;
  location?: string;
  excerpt: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.excerpt,
    startDate: event.date,
    location: event.location
      ? { "@type": "Place", name: event.location, address: { "@type": "PostalAddress", addressCountry: "IM" } }
      : undefined,
    organizer: { "@type": "Organization", name: SITE.name, url: SITE.url },
    url: `${SITE.url}/events/${event.slug}`,
  };
}
