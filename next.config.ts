import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,
	allowedDevOrigins: [
		'local-origin.dev',
		'*.local-origin.dev',
		'127.0.0.1:3000',
		'localhost:3000',
		'127.0.0.1',
	],
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
