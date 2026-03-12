import { test, expect } from '@playwright/test'
import { baseUrl } from './defaults'

test('Full checkout flow', async ({ page }) => {
  // Navigate to a product page
  const response = await page.goto(`${baseUrl}/product/OLJCESPC7Z`)
  expect(response?.status()).toBeLessThan(400)

  // Add item to cart
  await page.locator('button', { hasText: /add to cart/i }).click()

  // Go to cart
  await page.goto(`${baseUrl}/cart`)
  await expect(page.locator('body')).toContainText(/cart/i)

  // Form has defaults pre-filled — just click Place Order
  await page.locator('[data-cy="checkout-place-order"]').click()

  // Should land on order confirmation page
  await expect(page).toHaveURL(/checkout/, { timeout: 15000 })
  await expect(page.locator('body')).toContainText(/order/i)
  await page.screenshot({ path: 'checkout-confirmation.jpg' })
})
