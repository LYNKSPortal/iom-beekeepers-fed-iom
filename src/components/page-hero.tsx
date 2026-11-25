import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  lede,
  dark = false,
  children,
  crumbs,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  dark?: boolean;
  children?: ReactNode;
  crumbs?: { label: string; href: string }[];
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative pt-40 pb-16 md:pt-48 md:pb-24 px-6 overflow-hidden",
        dark ? "bg-forest-2 text-cream grain" : "bg-cream text-ink",
        className
      )}
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-stone-warm">
            {crumbs.map((c, i) => (
              <span key={c.href} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="h-3 w-3" />}
                <Link href={c.href} className="hover:text-honey transition-colors">
                  {c.label}
                </Link>
              </span>
            ))}
          </nav>
        )}
        <Reveal>
          <p className={cn("eyebrow mb-5", dark ? "text-honey" : "text-honey-2")}>{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="display-1 max-w-5xl">{title}</h1>
        </Reveal>
        {lede && (
          <Reveal delay={0.16}>
            <p className={cn("lede mt-8 max-w-2xl", dark ? "text-cream/70" : "text-ink/70")}>{lede}</p>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}

export function Section({
  children,
  className,
  dark = false,
  id,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={cn("relative px-6 py-20 md:py-28", dark && "bg-forest-2 text-cream grain", className)}>
      <div className="relative z-10 mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  dark = false,
  className,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  dark?: boolean;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("mb-12 md:mb-16", align === "center" && "text-center", className)}>
      <Reveal>
        <p className={cn("eyebrow mb-4", dark ? "text-honey" : "text-honey-2")}>{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className={cn("display-2", align === "center" && "mx-auto max-w-3xl")}>{title}</h2>
      </Reveal>
    </div>
  );
}
