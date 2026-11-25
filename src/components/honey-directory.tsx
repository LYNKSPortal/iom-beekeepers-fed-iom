"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MapPin, Phone, Search } from "lucide-react";
import { HONEY_PRODUCERS, HONEY_PRODUCTS } from "@/lib/data";
import { cn } from "@/lib/utils";

const FILTERS = ["All", ...HONEY_PRODUCTS];

export function HoneyDirectory() {
  const [q, setQ] = useState("");
  const [product, setProduct] = useState("All");

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return HONEY_PRODUCERS.filter(
      (p) =>
        (product === "All" || p.products.includes(product)) &&
        (!needle ||
          p.name.toLowerCase().includes(needle) ||
          p.location.toLowerCase().includes(needle) ||
          p.area.toLowerCase().includes(needle))
    );
  }, [q, product]);

  return (
    <div>
      <div className="mb-10 flex flex-col lg:flex-row gap-4 lg:items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-warm" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by name, place or area…"
            aria-label="Search honey producers"
            className="field pl-7"
          />
        </div>
        <div className="flex gap-2 flex-wrap" role="tablist" aria-label="Filter by product">
          {FILTERS.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={product === f}
              onClick={() => setProduct(f)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition-all cursor-pointer",
                product === f ? "bg-honey text-forest-2" : "bg-ink/5 text-ink/60 hover:bg-ink/10"
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <motion.ul layout className="grid gap-px bg-ink/10 border border-ink/10 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.li
              key={p.name}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3 }}
              className="bg-cream p-6 flex flex-col"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="font-display text-xl text-forest-2">{p.name}</p>
                <span className="shrink-0 rounded-full bg-forest/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-forest">
                  {p.area}
                </span>
              </div>
              <p className="mt-2 flex items-start gap-1.5 text-xs text-stone-warm">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" /> {p.location}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5 flex-1">
                {p.products.map((prod) => (
                  <span key={prod} className="rounded-full border border-honey/50 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-honey-2">
                    {prod}
                  </span>
                ))}
              </div>
              <a
                href={`tel:+441624${p.phone.replace(/[^\d]/g, "").slice(0, 6)}`}
                className="mt-4 inline-flex items-center gap-2 font-semibold text-honey-2 hover:text-forest transition-colors"
              >
                <Phone className="h-4 w-4" /> {p.phone}
              </a>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
      {filtered.length === 0 && (
        <p className="py-10 text-center text-stone-warm">No producers match, try widening your search.</p>
      )}
      <p className="mt-8 text-sm text-stone-warm">
        Listed north to south. Availability varies by season, call ahead. Ethan Grubb also offers candles, canvas wax,
        leather balm, propolis and pollen; Gwen Kelly offers furniture cream and polish.
      </p>
    </div>
  );
}
