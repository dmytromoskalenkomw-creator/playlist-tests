import { test, expect } from '@playwright/test';

const searchData = ['Rainy Mood', 'rainy mood', 'rainy', 'mood', 'rainy ', ' mood', 'ood', 'rai'];

for (const term of searchData) {
  test(`Search filters tracks correctly for "${term}"`, async ({ page }) => {
    await page.goto('/');

    await page.getByRole('textbox', { name: 'Search' }).fill(term);

    const trackContainers = page.locator('div.MuiGrid-container').filter({ hasText: term });
    
    await expect(trackContainers).toHaveCount(1);

    await expect(trackContainers).toContainText(new RegExp(term.trim(), 'i'));
  });
}