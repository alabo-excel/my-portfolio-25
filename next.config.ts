import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Static export ships no image optimizer, so next/image serves the files as-is.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
