import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Netlify handles Next.js via @netlify/plugin-nextjs no standalone output needed */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
