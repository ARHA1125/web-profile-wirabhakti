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
  },
};

export default nextConfig;

