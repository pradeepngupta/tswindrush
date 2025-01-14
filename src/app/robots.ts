import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
	const siteMapUrl = baseUrl + '/sitemap.xml';
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: ['/api/', '/private/'],
		},
		sitemap: siteMapUrl,
	};
}
