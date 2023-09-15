import { test, expect } from "@playwright/test"

test("This test is to validate that users with valid login details can log into the website", async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    //Check that the login was successful
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
    await page.close()

});

test("This test is to validate that users with invalid login details cannot log into the website", async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('locked_out_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    // Check that the error message is visible
    await expect(page.locator('[data-test="error"]')).toBeVisible()
    //check that the page url does not change
    await expect(page).toHaveURL("https://www.saucedemo.com/")


});
