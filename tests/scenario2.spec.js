const { test, expect } = require("@playwright/test")

test("Scenario 2 Test", async ({ page }) => {

    await page.pause();

    // await page.goto('https://www.saucedemo.com/');
    // await page.locator('[data-test="username"]').click();
    // await page.locator('[data-test="username"]').fill('standard_user');
    // await page.locator('[data-test="password"]').click();
    // await page.locator('[data-test="password"]').fill('secret_sauce');
    // await page.locator('[data-test="login-button"]').click();
    // await page.locator('.inventory_item_description').first().click();
    // await page.getByText('Name (A to Z)Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)').click();
    // await page.locator('[data-test="product_sort_container"]').selectOption('lohi');
    // await page.getByText('$7.99').click();
    // await page.getByText('$49.99').click();

    // // ---------------------
    // await context.close();
    // await browser.close();
})();


});
