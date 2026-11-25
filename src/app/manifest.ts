import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.shortName,
    description:
      "The Isle of Man Beekeepers Federation, protecting one of the last varroa-free honeybee populations in the British Isles.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf6ef",
    theme_color: "#1d3a2a",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: "/logo/logo-dark.png", sizes: "3000x811", type: "image/png" },
    ],
  };
}
