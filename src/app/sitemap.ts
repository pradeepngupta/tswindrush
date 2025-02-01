import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
	const urls = [{ loc: '/', priority: 1.0 }]

	return urls.map((url) => ({
		url: baseUrl + url.loc,
		lastModified: new Date(),
		changeFrequency: 'daily',
		priority: url.priority,
	}))
}
