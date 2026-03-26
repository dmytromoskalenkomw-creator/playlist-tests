import { test, expect } from '@playwright/test';


  test(`Add track`, async ({ page }) => {
    await page.goto('/');

    await page.getByRole('button', { name: '+' }).first().click();

    await expect(page.locator('#playlist').getByText('Summer Breeze')).toBeVisible();
  });
