const { test, expect } = require("@playwright/test")

test("InvalidLogin Test", async ({ page }) => {


    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('locked_out_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    // Check that the error message is visible
    await expect(page.locator('[data-test="error"]')).toBeVisible()
    //check that the page url does not change
    await expect(page).toHaveURL("https://www.saucedemo.com/")
});
