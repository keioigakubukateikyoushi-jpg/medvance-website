import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/search?"],
      },
    ],
    host: "https://medvance-edu.com",
    sitemap: "https://medvance-edu.com/sitemap.xml",
  };
}
