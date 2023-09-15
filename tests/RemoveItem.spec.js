const { test, expect } = require("@playwright/test")

test("Add and Remove items from cart", async ({ page }) => {


    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="product_sort_container"]').selectOption('lohi');
    await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();
    //check that 3 items have been added to cart
    await expect(page.locator('a').filter({ hasText: '3' })).toHaveText("3");
    await page.pause();

    await page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]').click();
    //check that the number of items in cart =2
    await expect(page.locator('a').filter({ hasText: '2' })).toHaveText("2");
    await page.close()
    // ---------------------

});
