import { MetadataRoute } from "next";
import { getSitemapConfig } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapConfig = getSitemapConfig();

  return sitemapConfig.pages.map((page) => ({
    url: `${sitemapConfig.baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency as any,
    priority: page.priority,
  }));
}
