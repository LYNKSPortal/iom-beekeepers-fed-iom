"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMobile(false);
    setOpen(null);
  }

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  // Pages whose hero is dark, the unscrolled header uses light text there.
  const DARK_HERO = ["/swarms", "/legislation", "/bee-health", "/asian-hornets", "/news/", "/events/"];
  const darkHero = pathname === "/" || DARK_HERO.some((p) => pathname.startsWith(p));
  const lightText = darkHero && !scrolled;

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50">
        <div
          className={cn(
            "mx-auto flex items-center justify-between gap-4 transition-all duration-500",
            "max-w-none mt-0"
          )}
        >
          <div
            className={cn(
              "flex w-full items-center justify-between gap-3 transition-all duration-500",
              scrolled
                ? "border-b border-ink/10 bg-cream/80 backdrop-blur-xl px-6 sm:px-10 py-2.5"
                : "px-6 sm:px-10 py-4"
            )}
          >
            <Link href="/" className="flex items-center shrink-0 group" aria-label="Isle of Man Beekeepers Federation, home">
              <Image
                src={lightText ? "/logo/logo-light.png" : "/logo/logo-dark.png"}
                alt="Isle of Man Beekeepers Federation"
                width={3000}
                height={811}
                priority
                className="h-auto w-[170px] sm:w-[300px] transition-opacity duration-300 group-hover:opacity-80"
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
              <Link
                href="/"
                data-active={isActive("/")}
                className={cn(
                  "nav-link px-3.5 py-2 text-[0.8rem] font-semibold tracking-wide uppercase transition-colors",
                  isActive("/")
                    ? lightText ? "text-cream" : "text-forest-2"
                    : lightText ? "text-cream/75 hover:text-cream" : "text-ink/70 hover:text-forest-2"
                )}
              >
                Home
              </Link>
              {NAV.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setOpen(item.label)}
                  onMouseLeave={() => setOpen(null)}
                >
                  <Link
                    href={item.href}
                    data-active={isActive(item.href)}
                    className={cn(
                      "nav-link px-3.5 py-2 text-[0.8rem] font-semibold tracking-wide uppercase transition-colors",
                      isActive(item.href)
                        ? lightText ? "text-cream" : "text-forest-2"
                        : lightText ? "text-cream/75 hover:text-cream" : "text-ink/70 hover:text-forest-2"
                    )}
                  >
                    {item.label}
                  </Link>
                  <AnimatePresence>
                    {item.children && open === item.label && (
                      <motion.div
                        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-80"
                      >
                        <div className="rounded-2xl border border-ink/10 bg-cream/95 backdrop-blur-xl p-2 shadow-[0_30px_60px_-20px_rgb(28_26_23/0.35)]">
                          {item.children.map((c) => (
                            <Link
                              key={c.href}
                              href={c.href}
                              className="group flex items-start justify-between gap-3 rounded-xl px-4 py-3 hover:bg-honey/10 transition-colors"
                            >
                              <span>
                                <span className="block text-sm font-semibold text-forest-2">{c.label}</span>
                                <span className="block text-xs text-stone-warm mt-0.5">{c.blurb}</span>
                              </span>
                              <ArrowUpRight className="h-4 w-4 mt-1 text-honey opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-2 shrink-0">
              <Magnetic>
                <Button asChild variant="honey" size="md" className="hidden sm:inline-flex">
                  <Link href="/swarms">Found a Swarm?</Link>
                </Button>
              </Magnetic>
              <Button
                variant="ghost"
                size="icon"
                className={cn("lg:hidden", lightText && "text-cream hover:bg-cream/10")}
                onClick={() => setMobile(true)}
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-forest-2 text-cream flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <Image
                src="/logo/logo-light.png"
                alt="Isle of Man Beekeepers Federation"
                width={3000}
                height={811}
                className="h-auto w-[160px]"
              />
              <Button variant="ghost" size="icon" onClick={() => setMobile(false)} aria-label="Close menu" className="text-cream hover:bg-cream/10">
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="flex-1 overflow-y-auto px-6 pb-10" aria-label="Mobile">
              <motion.div
                initial={reduce ? false : { opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 }}
                className="border-b border-cream/10"
              >
                <Link href="/" className="flex items-baseline justify-between py-4">
                  <span className="font-display text-3xl tracking-tight">Home</span>
                  <ArrowUpRight className="h-5 w-5 text-honey" />
                </Link>
              </motion.div>
              {NAV.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={reduce ? false : { opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="border-b border-cream/10"
                >
                  <Link href={item.href} className="flex items-baseline justify-between py-4">
                    <span className="font-display text-3xl tracking-tight">{item.label}</span>
                    <ArrowUpRight className="h-5 w-5 text-honey" />
                  </Link>
                  {item.children && (
                    <div className="pb-4 flex flex-col gap-2.5">
                      {item.children.map((c) => (
                        <Link key={c.href} href={c.href} className="text-sm text-cream/60 u-sweep w-fit">
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </nav>
            <div className="px-6 pb-8">
              <Button asChild variant="honey" size="lg" className="w-full">
                <Link href="/swarms">Found a Swarm?</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
