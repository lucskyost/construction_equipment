import { MetadataRoute } from "next";

// update site map after 24h
export const revalidate = 86400;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://thietbixaydung.nguyencongho.site",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}
