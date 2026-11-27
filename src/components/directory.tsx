"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Phone, Search } from "lucide-react";
import { SWARM_AREAS, SWARM_COORDINATOR } from "@/lib/data";
import { cn } from "@/lib/utils";

const AREAS = ["All", ...SWARM_AREAS.map((a) => a.area)];

export function CollectorDirectory() {
  const [q, setQ] = useState("");
  const [area, setArea] = useState("All");

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return SWARM_AREAS.filter((a) => area === "All" || a.area === area).map((a) => ({
      ...a,
      collectors: a.collectors.filter(
        (c) => !needle || c.name.toLowerCase().includes(needle) || c.note.toLowerCase().includes(needle)
      ),
    }));
  }, [q, area]);

  return (
    <div>
      <div className="mb-10 flex flex-col md:flex-row gap-4 md:items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-warm" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by name or place…"
            aria-label="Search collectors"
            className="field pl-7"
          />
        </div>
        <div className="flex gap-2 flex-wrap" role="tablist" aria-label="Filter by area">
          {AREAS.map((a) => (
            <button
              key={a}
              role="tab"
              aria-selected={area === a}
              onClick={() => setArea(a)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-semibold transition-all cursor-pointer",
                area === a ? "bg-forest-2 text-cream" : "bg-ink/5 text-ink/60 hover:bg-ink/10"
              )}
            >
              {a}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-14">
        {filtered.map((a) => (
          <section key={a.area}>
            <div className="flex flex-wrap items-baseline justify-between gap-3 border-b-2 border-forest pb-4 mb-6">
              <h2 className="display-3">{a.area}</h2>
              <p className="text-sm text-stone-warm max-w-md">{a.coverage}</p>
            </div>
            {a.collectors.length === 0 ? (
              <p className="text-stone-warm text-sm py-4">No collectors match your search in this area.</p>
            ) : (
              <motion.ul layout className="grid gap-px bg-ink/10 border border-ink/10 sm:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence mode="popLayout">
                  {a.collectors.map((c) => (
                    <motion.li
                      key={c.name}
                      layout
                      initial={false}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.3 }}
                      className="bg-cream p-6 group"
                    >
                      <p className="font-display text-xl text-forest-2">{c.name}</p>
                      <p className="mt-1 text-xs text-stone-warm">{c.note}</p>
                      <a
                        href={`tel:+441624${c.phone}`}
                        className="mt-4 inline-flex items-center gap-2 font-semibold text-honey-2 hover:text-forest transition-colors"
                      >
                        <Phone className="h-4 w-4" /> {c.phone}
                      </a>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </motion.ul>
            )}
          </section>
        ))}
      </div>

      <div className="mt-14 rounded-3xl bg-forest-2 text-cream p-8 md:p-10 grain relative">
        <p className="relative z-10 text-sm text-cream/60 max-w-2xl leading-relaxed">
          Collectors are flexible and can cover beyond their suggested areas. Island Co-ordinator:{" "}
          <strong className="text-cream">{SWARM_COORDINATOR.name}</strong>, {" "}
          <a href={`tel:+441624${SWARM_COORDINATOR.phone}`} className="text-honey u-sweep font-semibold">
            {SWARM_COORDINATOR.phone}
          </a>
          . Deputy: <strong className="text-cream">{SWARM_COORDINATOR.deputy.name}</strong>, {" "}
          <a href={`tel:+441624${SWARM_COORDINATOR.deputy.phone}`} className="text-honey u-sweep font-semibold">
            {SWARM_COORDINATOR.deputy.phone}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
