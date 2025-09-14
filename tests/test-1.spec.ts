import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(
    page.getByRole('link', { name: 'Playwright logo Playwright' }),
  ).toBeVisible();
  await page.getByRole('link', { name: 'Agents' }).click();
});
