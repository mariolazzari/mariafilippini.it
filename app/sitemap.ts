import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = ["/"];

  const data: MetadataRoute.Sitemap = urls.map(url => ({
    url: `https://mariafilippini.it${url}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1,
  }));

  return data;
}
