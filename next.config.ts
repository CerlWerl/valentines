import type { NextConfig } from "next";

const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true // <--- THIS LINE IS REQUIRED
  },
  output: 'export'
}

export default nextConfig;
