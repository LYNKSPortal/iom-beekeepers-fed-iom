import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { SITE } from "@/lib/data";
import { JsonLd, organizationLd, websiteLd } from "@/lib/seo";

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
  keywords: [
    "Isle of Man beekeepers",
    "beekeeping Isle of Man",
    "Manx honeybees",
    "varroa-free bees",
    "Manx honey",
    "swarm collection Isle of Man",
    "beekeeping courses",
    "Asian hornet Isle of Man",
    "BBKA",
  ],
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "Beekeeping",
  alternates: { canonical: "/" },
  openGraph: {
    siteName: SITE.name,
    type: "website",
    locale: "en_GB",
    url: SITE.url,
    title: SITE.name,
    description:
      "Protecting one of the last varroa-free honeybee populations in the British Isles. Courses, swarms, local honey and conservation.",
    images: [{ url: "/images/bee-flower.jpg", width: 1200, height: 630, alt: "A Manx honeybee foraging" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description:
      "Protecting one of the last varroa-free honeybee populations in the British Isles.",
    images: ["/images/bee-flower.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  formatDetection: { telephone: true, email: true },
};

export const viewport: Viewport = {
  themeColor: "#1d3a2a",
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
        <JsonLd data={[organizationLd, websiteLd]} />
        <SiteNav />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
