const { test, expect } = require('@playwright/test');

test('Q2 - Standard User Purchase Journey', async ({ page }) => {
  // Login with - standard_user - secret_sauce
  await page.goto('/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Reset App State
  await page.click('#react-burger-menu-btn');
  await page.click('#reset_sidebar_link');
  await page.click('#react-burger-cross-btn');

  // Add 3 items in the cart
  const addButtons = await page.$$('.btn_inventory');
  for (let i = 0; i < 3; i++) {
    await addButtons[i].click();
  }

  // Go to cart
  await page.click('.shopping_cart_link');
  await page.click('#checkout');

  // Fill user info
  await page.fill('#first-name', 'Jakia');
  await page.fill('#last-name', 'Rahman');
  await page.fill('#postal-code', '1229');
  await page.click('#continue');

  // Verify product names and total
  const items = await page.$$eval('.inventory_item_name', els => els.map(e => e.textContent));
  console.log('Items:', items);

  const total = await page.locator('.summary_total_label').textContent();
  console.log('Total:', total);

  await expect(page.locator('.summary_total_label')).toContainText('Total');

  // Finish purchase
  await page.click('#finish');
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');

  // Reset App State and logout
  await page.click('#react-burger-menu-btn');
  await page.click('#reset_sidebar_link');
  await page.click('#logout_sidebar_link');
});
