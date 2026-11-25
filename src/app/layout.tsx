import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { SITE } from "@/lib/data";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Isle of Man Beekeepers Federation",
    template: "%s, Isle of Man Beekeepers Federation",
  },
  description:
    "The Isle of Man Beekeepers Federation, protecting one of the last varroa-free honeybee populations in the British Isles. Courses, swarms, local honey and conservation.",
  openGraph: {
    siteName: SITE.name,
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body className={`${fraunces.variable} ${inter.variable} antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-honey focus:text-forest-2 focus:px-4 focus:py-2 focus:rounded-full focus:text-sm focus:font-semibold"
        >
          Skip to content
        </a>
        <SiteNav />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
