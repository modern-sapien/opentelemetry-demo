import { test, expect } from '@playwright/test'
import { baseUrl } from './defaults'

test('Product page loads successfully', async ({ page }) => {
  const response = await page.goto(`${baseUrl}/product/OLJCESPC7Z`)
  expect(response?.status()).toBeLessThan(400)
  await expect(page.locator('body')).toContainText(/add to cart/i)
  await page.screenshot({ path: 'product-page.jpg' })
})
