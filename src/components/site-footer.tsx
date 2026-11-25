import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Phone, Mail } from "lucide-react";
import { SITE } from "@/lib/data";
import { Year } from "@/components/year";

export function SiteFooter() {
  return (
    <footer className="relative bg-forest-2 text-cream grain">
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-20 pb-10">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex">
              <Image
                src="/logo/logo-light.png"
                alt="Isle of Man Beekeepers Federation"
                width={3000}
                height={811}
                className="h-auto w-[220px] sm:w-[300px]"
              />
            </Link>
            <p className="mt-6 max-w-sm text-cream/60 leading-relaxed">
              Protecting and promoting beekeeping on the Isle of Man, home to one of the last varroa-free honeybee
              populations in the British Isles.
            </p>
            <div className="mt-8 flex flex-col gap-2 text-sm">
              <a href={`tel:+447624328032`} className="inline-flex items-center gap-2 text-cream/80 hover:text-honey transition-colors">
                <Phone className="h-4 w-4 text-honey" /> {SITE.phone} <span className="text-cream/40">({SITE.phoneNote})</span>
              </a>
              <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 text-cream/80 hover:text-honey transition-colors">
                <Mail className="h-4 w-4 text-honey" /> {SITE.email}
              </a>
            </div>
            <div className="mt-6 flex gap-5 text-sm">
              {SITE.social.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="u-sweep text-cream/60 hover:text-honey">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="eyebrow text-honey mb-6">Explore</h3>
            <ul className="space-y-3 text-sm">
              {[
                ["About the Federation", "/about"],
                ["Getting Started", "/getting-started"],
                ["Courses", "/courses"],
                ["Membership", "/membership"],
                ["Local Honey", "/honey"],
                ["News", "/news"],
                ["Events", "/events"],
              ].map(([l, h]) => (
                <li key={h}>
                  <Link href={h} className="group inline-flex items-center gap-1.5 text-cream/70 hover:text-cream transition-colors">
                    {l}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-honey" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-honey mb-6">Beekeeping</h3>
            <ul className="space-y-3 text-sm">
              {[
                ["Found a Swarm?", "/swarms"],
                ["Swarm Collectors", "/swarms/collectors"],
                ["Legislation", "/legislation"],
                ["Bee Health", "/bee-health"],
                ["Asian Hornets", "/asian-hornets"],
                ["Bee Improvement", "/bee-improvement"],
                ["Resources & Downloads", "/resources"],
                ["Contact", "/contact"],
              ].map(([l, h]) => (
                <li key={l}>
                  <Link href={h} className="group inline-flex items-center gap-1.5 text-cream/70 hover:text-cream transition-colors">
                    {l}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-honey" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-cream/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-cream/40">
          <p>© <Year /> Isle of Man Beekeepers Federation. Affiliated to the BBKA.</p>
          <p>Importing bees or used beekeeping equipment is prohibited by law, fine £10,000.</p>
        </div>
      </div>
    </footer>
  );
}
