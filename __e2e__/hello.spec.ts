import { test, expect } from '@playwright/test';

test('GET /api/hello should return application name', async ({ request }) => {
	const response = await request.get('/api/hello');
	expect(response.ok()).toBeTruthy();
	const responseBody = await response.json();
	expect(responseBody).toEqual({ name: 'TSWindRush' }); // Adjust based on actual response
});
