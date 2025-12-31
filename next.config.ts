import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/agentic-engineering-stack',
  assetPrefix: '/agentic-engineering-stack',
};

export default nextConfig;
