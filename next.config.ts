import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
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
};

export default nextConfig;
