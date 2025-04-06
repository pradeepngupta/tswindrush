import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,
	// Warning: This allows production builds to successfully complete even if
	// your project has ESLint errors.
	eslint: {
		ignoreDuringBuilds: true,
	},
	experimental: {
		allowedDevOrigins: ['http://127.0.0.1:3000'],
	},
	images: { unoptimized: true },
	async rewrites() {
		return [
			{
				source: '/robots.txt',
				destination: '/api/robots',
			},
			{
				source: '/sitemap.xml',
				destination: '/api/sitemap',
			},
		];
	},
};

export default nextConfig;
