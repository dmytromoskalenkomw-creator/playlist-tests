import { test, expect } from '@playwright/test';

test('Verify Total Duration of the Playlist in Seconds', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', { name: '+' }).first().click();
  await expect(page.locator('#playlist').getByText('Summer Breeze')).toBeVisible();
  await page.getByRole('button', { name: '+' }).nth(1).click();
  await expect(page.locator('#playlist').getByText('Autumn Leaves')).toBeVisible();
  await page.getByRole('button', { name: '+' }).nth(2).click();
  await expect(page.locator('#playlist').getByText('Winter Winds')).toBeVisible();
  await page.getByRole('button', { name: '+' }).nth(3).click();
  await expect(page.locator('#playlist').getByText('Spring Dance')).toBeVisible();
  await page.getByRole('button', { name: '+' }).nth(4).click();
  await expect(page.locator('#playlist').getByText('Rainy Mood')).toBeVisible();

  const tracks = page.locator('#playlist .css-adtkzx');

  const count = await tracks.count();
  let totalSeconds = 0;

  for (let i = 0; i < count; i++) {
    const track = tracks.nth(i);

    const durationText = await track.locator('div.MuiGrid-grid-xs-2 p').textContent();
    const [minutes, seconds] = durationText.split(':').map(Number);

    totalSeconds += minutes * 60 + seconds;
  }

  const displayedText = await page.locator('#playlist-duration').textContent();
  const displayedSeconds = Number(displayedText.match(/\d+/)[0]);

  expect(displayedSeconds).toBe(totalSeconds);
});