import { test, expect } from '@playwright/test';

test.describe('Checkout', () => {

    const productName = 'Sauce Labs Backpack';
    const productIdName = productName.toLocaleLowerCase().replace(/\s+/g, '-');

    test.beforeEach(async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');
        await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
        await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    });


    test('Checkout', async ({ page }) => {
        await page.locator(`#add-to-cart-${productIdName}`).click();
        await page.locator('#shopping_cart_container').click();
        await expect(page.locator('[data-test="inventory-item-name"]')).toContainText(productName);
        await page.locator('[data-test="checkout"]').click();
        await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');

        await page.getByPlaceholder('First Name').fill('John');
        await page.getByPlaceholder('Last Name').fill('Doe');
        await page.getByPlaceholder('Zip/Postal Code').fill('12345');
        await page.getByRole('button', { name: 'Continue' }).click();
        await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
        await page.getByRole('button', { name: 'Finish' }).click();

        await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html')
        await expect(page.locator('.complete-header')).toContainText('Thank you for your order!');

        await page.locator('#back-to-products').click();
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await page.locator('#shopping_cart_container').click();
        await expect(page.locator('[data-test="inventory-item-name"]')).not.toBeVisible();

    })





});