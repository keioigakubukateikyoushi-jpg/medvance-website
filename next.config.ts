import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  // pdfkit loads .afm font metrics from disk; must not be bundled
  serverExternalPackages: ["pdfkit", "fontkit", "linebreak", "png-js"],
  // 大容量 academy media を Serverless 関数バンドルに入れない（static 配信のみ）
  outputFileTracingExcludes: {
    "*": [
      "./public/academy/media/**/*",
    ],
  },
  // Part授業は実行時に正本Markdown/クイズを読む。動画などの大容量配信物は
  // 上の除外を維持しつつ、本文・台本・クイズは授業/API関数に同梱する。
  outputFileTracingIncludes: {
    "/academy/unit/[id]": [
      "./content/academy/**/lessons/**/*",
      "./content/academy/**/storyboard/**/*",
      "./content/academy/**/quiz/**/*",
    ],
    "/api/academy/pdf/[id]": [
      "./content/academy/**/lessons/**/*",
      "./content/academy/**/quiz/**/*",
    ],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000, // 1 year
    deviceSizes: [360, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "medvance.website" }],
        destination: "https://medvance-edu.com/:path*",
        statusCode: 301,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.medvance.website" }],
        destination: "https://medvance-edu.com/:path*",
        statusCode: 301,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.medvance-edu.com" }],
        destination: "https://medvance-edu.com/:path*",
        statusCode: 301,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      ...["/llms.txt", "/llms-full.txt", "/llm.txt"].map((source) => ({
        source,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, stale-while-revalidate=86400",
          },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "X-Robots-Tag", value: "all" },
        ],
      })),
    ];
  },
};

export default nextConfig;
