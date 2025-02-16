import robots from '@/app/robots';

describe('Robots Configuration', () => {
	it('should return the correct robots configuration', () => {
		const result = robots();
		const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
		const siteMapUrl = baseUrl + '/sitemap.xml';
		expect(result).toEqual({
			rules: {
				userAgent: '*',
				allow: '/',
				disallow: ['/api/', '/private/'],
			},
			sitemap: siteMapUrl,
		});
	});

	it('should have the correct structure', () => {
		const result = robots();

		expect(result).toHaveProperty('rules');
		expect(result.rules).toHaveProperty('userAgent');
		expect(result.rules).toHaveProperty('allow');
		expect(result.rules).toHaveProperty('disallow');
		expect(result).toHaveProperty('sitemap');
	});

	//   it('should have an array of disallowed paths', () => {
	//     const result = robots();

	//     expect(Array.isArray(result.rules.disallow)).toBe(true);
	//     expect(result.rules.disallow).toContain('/private/');
	//     expect(result.rules.disallow).toContain('/api/');
	//   });
});
