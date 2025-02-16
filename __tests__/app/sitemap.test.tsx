import sitemap from '@/app/sitemap';

describe('Sitemap Configuration', () => {
	it('should return an array of sitemap entries', () => {
		const result = sitemap();

		expect(Array.isArray(result)).toBe(true);
		expect(result.length).toBe(1);
	});

	it('should have entries with correct properties', () => {
		const result = sitemap();

		result.forEach((entry) => {
			expect(entry).toHaveProperty('url');
			expect(entry).toHaveProperty('lastModified');
			expect(entry).toHaveProperty('changeFrequency');
			expect(entry).toHaveProperty('priority');
		});
	});

	it('should have valid URLs', () => {
		const result = sitemap();
		const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
		result.forEach((entry) => {
			expect(entry.url).toMatch(baseUrl);
		});
	});

	it('should have valid priorities', () => {
		const result = sitemap();

		result.forEach((entry) => {
			expect(entry.priority).toBeGreaterThanOrEqual(0);
			expect(entry.priority).toBeLessThanOrEqual(1);
		});
	});

	it('should have valid lastModified dates', () => {
		const result = sitemap();

		result.forEach((entry) => {
			expect(entry.lastModified).toBeInstanceOf(Date);
		});
	});
});
