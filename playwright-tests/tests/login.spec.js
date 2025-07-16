import { test, expect } from '@playwright/test';

test.describe('Login en SauceDemo', () => {

    test('login exitoso con usuario válido', async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');
        await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
        await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
        await page.getByRole('button', { name: 'Login' }).click();
        
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    });
    
    test('login fallido con usuario inválido', async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');
        await page.getByRole('textbox', { name: 'Username' }).fill('locked_out_user');
        await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
        await page.getByRole('button', { name: 'Login' }).click();
        
        await expect(page.locator('.error-message-container')).toContainText('Epic sadface: Sorry, this user has been locked out');
    });


});