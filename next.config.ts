import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  // pdfkit loads .afm font metrics from disk; must not be bundled
  serverExternalPackages: ["pdfkit", "fontkit", "linebreak", "png-js"],
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
