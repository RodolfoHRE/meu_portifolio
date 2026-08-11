/** @type {import('next').NextConfig} */
import { repo } from './lib/basePath.mjs';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
