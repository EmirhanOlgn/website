import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  allowedDevOrigins: [
    "localhost",
    "127.0.0.1",
    "194.105.5.80",
    "site.emirhan.lol",
  ],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
