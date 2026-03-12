import { test, expect } from '@playwright/test'
import { baseUrl } from './defaults'

test('Add to cart and view cart', async ({ page }) => {
  // Navigate to a product page
  const response = await page.goto(`${baseUrl}/product/OLJCESPC7Z`)
  expect(response?.status()).toBeLessThan(400)

  // Add item to cart
  const addToCartButton = page.locator('button', { hasText: /add to cart/i })
  await addToCartButton.click()

  // Navigate to cart
  await page.goto(`${baseUrl}/cart`)
  await expect(page.locator('body')).toContainText(/cart/i)
  await page.screenshot({ path: 'cart.jpg' })
})
