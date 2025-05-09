import { test, expect } from '@playwright/test';

test('GET /api/version should return the current version', async ({ request }) => {
	const response = await request.get('/api/version');
	expect(response.ok()).toBeTruthy();
	const responseBody = await response.json();

	expect(responseBody).toHaveProperty('nextjs');
	expect(responseBody.nextjs).toBe('15.3.2');

	expect(responseBody).toHaveProperty('reactjs');
	expect(responseBody.reactjs).toBe('19.1.0');

	expect(responseBody).toHaveProperty('tailwindCSS');
	expect(responseBody.tailwindCSS).toBe('4.1.6');

	expect(responseBody).toHaveProperty('typescript');
	expect(responseBody.typescript).toBe('5.8.3');
});
