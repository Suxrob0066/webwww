import type { MetadataRoute } from "next";
import { directions, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ["", "/xizmatlar", "/galereya", "/gosht-mahsulotlari", ...directions.map((d) => `/${d.slug}`)];
  return pages.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}
