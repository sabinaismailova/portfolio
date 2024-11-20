import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  webpack(config) {
    return config;
  },
  output: 'export',
  distDir: 'src',
};

export default nextConfig;
