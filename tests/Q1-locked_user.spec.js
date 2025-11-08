const { test, expect } = require('@playwright/test');

test('Q1 - Try login with locked_out_user and verify the error message', async ({ page }) => {
  await page.goto('/');
  
  await page.fill('#user-name', 'locked_out_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  const errorMsg = page.locator('[data-test="error"]');
  await expect(errorMsg).toContainText('Sorry, this user has been locked out.');
});
