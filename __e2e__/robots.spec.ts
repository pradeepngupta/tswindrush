import { test, expect } from '@playwright/test';

test('robots.txt should have correct directives', async ({ request }) => {
	const response = await request.get('/robots.txt');
	expect(response.ok()).toBeTruthy();
	const body = await response.text();
	expect(body).toContain('User-Agent: *');
	expect(body).toContain('Allow: /');
	expect(body).toContain('Disallow: /api/');
	expect(body).toContain('Disallow: /private/');
	expect(body).toContain('Sitemap: http://localhost:3000/sitemap.xml');
});
