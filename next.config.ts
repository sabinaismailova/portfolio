import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // images: {
  //   unoptimized: true, // Disable default image optimization
  // },
  // assetPrefix: '/portfolio/',
  // basePath: '/portfolio',
  // output: 'export',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  webpack(config) {
    return config;
  },
};

export default nextConfig;
