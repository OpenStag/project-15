import type { NextConfig } from "next";

// Added images remotePatterns so next/image allows Unsplash assets used in vehicle cards.
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ]
  }
};

export default nextConfig;
