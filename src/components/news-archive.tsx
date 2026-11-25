"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { CalendarDays, Search, ChevronDown } from "lucide-react";
import type { Post } from "@/lib/posts-data";
import { POST_CATEGORIES } from "@/lib/posts-data";
import { formatDate } from "@/lib/data";


const PAGE = 12;

export function NewsArchive({ posts }: { posts: Post[] }) {
  const params = useSearchParams();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState(params.get("cat") ?? "All");
  const [shown, setShown] = useState(PAGE);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return posts.filter(
      (p) =>
        (cat === "All" || p.category === cat) &&
        (!needle || p.title.toLowerCase().includes(needle) || p.excerpt.toLowerCase().includes(needle))
    );
  }, [posts, q, cat]);

  return (
    <div>
      <div className="mb-12 flex flex-col lg:flex-row gap-4 lg:items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-warm" />
          <input
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setShown(PAGE);
            }}
            placeholder="Search articles…"
            aria-label="Search articles"
            className="field pl-7"
          />
        </div>
        <div className="relative">
          <select
            value={cat}
            onChange={(e) => {
              setCat(e.target.value);
              setShown(PAGE);
            }}
            aria-label="Filter by category"
            className="field appearance-none pr-8 cursor-pointer font-semibold text-forest-2"
          >
            <option value="All">All categories</option>
            {POST_CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-warm" />
        </div>
        <p className="text-sm text-stone-warm lg:ml-auto">
          {filtered.length} article{filtered.length === 1 ? "" : "s"}
        </p>
      </div>

      <motion.ul layout className="grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.slice(0, shown).map((p) => (
            <motion.li
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <Link href={`/news/${p.slug}`} className="group block">
                {p.image ? (
                  <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-2xl img-zoom">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="mb-5 h-px bg-forest" />
                )}
                <p className="text-xs uppercase tracking-[0.2em] text-honey-2 font-semibold">{p.category}</p>
                <h3 className="mt-3 font-display text-2xl leading-snug group-hover:text-honey-2 transition-colors">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-ink/60 leading-relaxed line-clamp-3">{p.excerpt}</p>
                <p className="mt-4 text-xs text-stone-warm flex items-center gap-2">
                  <CalendarDays className="h-3.5 w-3.5" /> {formatDate(p.date)}
                </p>
              </Link>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-stone-warm">Nothing matches, try a different search.</p>
      )}

      {shown < filtered.length && (
        <div className="mt-16 text-center">
          <button
            onClick={() => setShown((s) => s + PAGE)}
            className="rounded-full border border-ink/20 px-8 py-3 text-sm font-semibold uppercase tracking-[0.15em] hover:border-honey hover:text-honey-2 transition-colors cursor-pointer"
          >
            Show more ({filtered.length - shown} remaining)
          </button>
        </div>
      )}
    </div>
  );
}
