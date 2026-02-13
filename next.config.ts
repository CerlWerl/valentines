import type { NextConfig } from "next";

const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'], // <--- THIS LINE IS REQUIRED
  },
}

module.exports = nextConfig;
