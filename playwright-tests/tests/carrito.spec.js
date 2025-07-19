import { test, expect } from '@playwright/test';

test.describe('Carrito de compras', () => {

    const itemName = 'Sauce Labs Backpack';
    const itemIdName = itemName.toLocaleLowerCase().replace(/\s+/g, '-');
    console.log(itemIdName);


    test.beforeEach(async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');
        await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
        await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    });

    test("Agregar un producto y verificar el contenido del carrito", async ({ page }) => {

        await page.locator(`#add-to-cart-${itemIdName}`).click();
        await expect(page.locator(`[name="remove-${itemIdName}"]`)).toBeVisible();

        await page.locator('#shopping_cart_container').click();
        await expect(page.locator('[data-test="inventory-item-name"]')).toBeVisible();
        await expect(page.locator('[data-test="inventory-item-name"]')).toContainText(itemName);

    })

    test("Agregar un producto, eliminar del carrito y verificar el contenido", async ({ page }) => {

        await page.locator(`#add-to-cart-${itemIdName}`).click();
        await expect(page.locator(`[name="remove-${itemIdName}"]`)).toBeVisible();

        await page.locator('#shopping_cart_container').click();
        await expect(page.locator('[data-test="inventory-item-name"]')).toBeVisible();
        await expect(page.locator('[data-test="inventory-item-name"]')).toContainText(itemName);

        await expect(page.locator(`[name="remove-${itemIdName}"]`)).toBeVisible();
        await page.locator(`[name="remove-${itemIdName}"]`).click();
        await expect(page.locator('.inventory_item_name', {hasText: itemName})).not.toBeVisible();

    })


})

