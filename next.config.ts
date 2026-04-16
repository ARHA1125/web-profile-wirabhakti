import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3005",
        pathname: "/img/**",
      },
      {
        protocol: "https",
        hostname: "api.wirabhakti.my.id",
        pathname: "/img/**",
      },
    ],
    // Images are served same-origin via nginx /img proxy, but the Next.js
    // standalone server inside Docker can't reach that proxy internally,
    // so we skip the /_next/image optimizer and let the browser fetch directly.
    unoptimized: true,
  },
};

export default nextConfig;

