import { readFileSync } from 'fs';
import { join } from 'path';

import type { NextConfig } from 'next';

const packageJson = JSON.parse(
  readFileSync(join(process.cwd(), 'package.json'), 'utf-8'),
);

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/agentic-engineering-stack',
  assetPrefix: '/agentic-engineering-stack',
  env: {
    APP_VERSION: packageJson.version,
    BUILD_DATE: new Date().toISOString().split('T')[0],
  },
};

export default nextConfig;
