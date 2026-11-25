import type { MetadataRoute } from "next";
import { EVENTS, POSTS, SITE } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/associations",
    "/getting-started",
    "/courses",
    "/courses/apply",
    "/membership",
    "/swarms",
    "/swarms/identify",
    "/swarms/collectors",
    "/swarms/request",
    "/honey",
    "/legislation",
    "/bee-health",
    "/asian-hornets",
    "/bee-improvement",
    "/resources",
    "/downloads",
    "/news",
    "/events",
    "/contact",
  ].map((path) => ({ url: `${SITE.url}${path}`, lastModified: new Date("2026-11-25") }));

  const posts = POSTS.map((p) => ({ url: `${SITE.url}/news/${p.slug}`, lastModified: new Date(p.date) }));
  const events = EVENTS.map((e) => ({ url: `${SITE.url}/events/${e.slug}`, lastModified: new Date(e.date) }));
  return [...routes, ...posts, ...events];
}
