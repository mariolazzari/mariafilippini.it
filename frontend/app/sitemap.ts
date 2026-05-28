import type { MetadataRoute } from "next";
import { routes } from "@/lib/links";

export default function sitemap(): MetadataRoute.Sitemap {
  const data: MetadataRoute.Sitemap = routes.map(url => ({
    url: `https://mariafilippini.it${url}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1,
  }));

  return data;
}
