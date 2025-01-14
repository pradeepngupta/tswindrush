import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,
	// Warning: This allows production builds to successfully complete even if
	// your project has ESLint errors.
	eslint: {
		ignoreDuringBuilds: true,
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
