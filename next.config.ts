import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,
	output: 'export',
	// Warning: This allows production builds to successfully complete even if
	// your project has ESLint errors.
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: { unoptimized: true },
};

export default nextConfig;
