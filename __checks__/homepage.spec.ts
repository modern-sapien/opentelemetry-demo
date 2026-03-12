import { test, expect } from '@playwright/test'
import { baseUrl } from './defaults'

test('Homepage loads successfully', async ({ page }) => {
  const response = await page.goto(baseUrl)
  expect(response?.status()).toBeLessThan(400)
  await expect(page.locator('[data-cy="hero-banner"]').or(page.locator('body'))).toBeVisible()
  await page.screenshot({ path: 'homepage.jpg' })
})
