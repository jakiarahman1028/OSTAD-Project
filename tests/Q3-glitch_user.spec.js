const { test, expect } = require('@playwright/test');

test('Q3 - performance_glitch_user flow', async ({ page }) => {
  // Login - performance_glitch_user - secret_sauce
  await page.goto('/');
  await page.fill('#user-name', 'performance_glitch_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Reset App State
  await page.click('#react-burger-menu-btn');
  await page.click('#reset_sidebar_link');
  await page.click('#react-burger-cross-btn');

  // Filter by name (Z to A)
  await page.selectOption('.product_sort_container', 'za');

  // Add first product
  await page.locator('.btn_inventory').first().click();

  // Go to cart
  await page.click('.shopping_cart_link');
  await page.click('#checkout');

  // Fill info
  await page.fill('#first-name', 'Jakia');
  await page.fill('#last-name', 'Rahman');
  await page.fill('#postal-code', '1229');
  await page.click('#continue');

  // Verify product name and total
  const names = await page.$$eval('.inventory_item_name', els => els.map(e => e.textContent));
  console.log('Product Names:', names);
  const totalPrice = await page.locator('.summary_total_label').textContent();
  console.log('Total Price:', totalPrice);

  await expect(page.locator('.summary_total_label')).toContainText('Total');

  // Finish
  await page.click('#finish');
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');

  // Reset and logout
  await page.click('#react-burger-menu-btn');
  await page.click('#reset_sidebar_link');
  await page.click('#logout_sidebar_link');
});
