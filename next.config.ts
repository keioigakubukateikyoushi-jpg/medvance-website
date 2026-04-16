import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000, // 1 year
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.medvance-edu.com" }],
        destination: "https://medvance-edu.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
