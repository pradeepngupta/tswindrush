import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
	// Navigate to home page
	await page.goto('/');

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle('TSWindRush');
});

// test('logo is seen', async ({ page }) => {
// 	// Navigate to home page
// 	await page.goto('/');

// 	await page.getByAltText('TSWindRush logo').click();
// });

test('github repo link is present', async ({ page }) => {
	// Navigate to home page
	await page.goto('/');

	// Click the get started link.
	const link = page.getByText('tswindrush Github Repository');
	expect(link).toBeVisible();

	await page.getByRole('link', { name: 'tswindrush Github Repository' }).click();
});
