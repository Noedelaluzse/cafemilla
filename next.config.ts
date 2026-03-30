import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // next.config.ts
  images: {
    remotePatterns: [{ hostname: 'res.cloudinary.com' }]
  }
};

export default nextConfig;
