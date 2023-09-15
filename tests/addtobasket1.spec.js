const { test, expect } = require("@playwright/test")

test("Transreport Assessment Test", async ({ page }) => {

    await page.pause();

    await page.goto('https://www.saucedemo.com/');
    await page.pause();
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="product_sort_container"]').selectOption('lohi');
    await page.pause();
    // await expect(page.locator('.inventory_item_description').first()).toHaveCount("6")
    // await page.pause();
    await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();
    await page.locator('a').filter({ hasText: '3' }).click();

    //await expect(page.locator('a').filter({ hasText: '3' })).toHaveText("3");

    // ---------------------
    await context.close();
    await browser.close();
});
