import { test, expect } from '@playwright/test';

test('sitemap.xml should be accessible and well-formed', async ({ request }) => {
	const response = await request.get('/sitemap.xml');
	expect(response.ok()).toBeTruthy();
	const body = await response.text();
	expect(body).toContain('<?xml version="1.0" encoding="UTF-8"?>');
	expect(body).toContain('<urlset');
	// Add more checks as necessary
});
