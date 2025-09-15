import { test, expect } from '@playwright/test';

test.describe('тесты главной страницы', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/');
  });

  test('Проверка отображени] элементов навигаци хедера', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Docs' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'API' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Node.js' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Agents' })).toBeVisible();
    await page.getByRole('link', { name: 'Community' }).click();
    await expect(
      page.getByRole('link', { name: 'Community', exact: true }),
    ).toBeVisible();
    await expect(
      page.getByRole('link', { name: 'GitHub repository' }),
    ).toBeVisible();
    await expect(
      page.getByRole('link', { name: 'Discord server', exact: true }),
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Switch between dark and light' }),
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Search (Command+K)' }),
    ).toBeVisible();
  });

  test('Проверка правильного отображения текста', async ({ page }) => {
    await expect(
      page.getByRole('link', { name: 'Playwright logo Playwright' }),
    ).toContainText('Playwright');
  });

  test('Проверка переключения light mode', async ({ page }) => {
    await page
      .getByRole('button', { name: 'Switch between dark and light' })
      .click();
    await page
      .getByRole('button', { name: 'Switch between dark and light' })
      .click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  });

  test('Проверка text', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Playwright enables reliable' }),
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { name: 'Playwright enables reliable' }),
    ).toContainText(
      'Playwright enables reliable end-to-end testing for modern web apps.',
    );
  });

  test('Проверка перехода по кнопке get started', async ({ page }) => {
    await expect
      .soft(page.getByRole('link', { name: 'Get started' }))
      .toBeVisible();
    await expect
      .soft(page.getByRole('link', { name: 'Get started' }))
      .toContainText('Get started');
    await expect
      .soft(page.getByRole('link', { name: 'Get started' }))
      .toHaveAttribute('href', '/docs/intro');
  });
});
