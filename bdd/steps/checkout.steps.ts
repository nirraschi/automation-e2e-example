import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';
import { CheckoutPage } from '../pages/CheckoutPage';

let browser: Browser;
let page: Page;
let checkoutPage: CheckoutPage;

Given('el usuario logueado tiene el producto {string} en el carrito', { timeout: 15000 }, async (productName: string) => {
    browser = await chromium.launch();
    page = await browser.newPage();

    checkoutPage = new CheckoutPage(page);
    await checkoutPage.navigate();
    await checkoutPage.login();
    await checkoutPage.addProduct(productName);
    await checkoutPage.cartNavigate();
    await checkoutPage.verifyProductInCart(productName);
    await checkoutPage.verifyCheckoutButton();
});

When('el usuario hace el checkout con First Name {string}, Last Name {string} y Zip Code {string}', async (firstName: string, lastName: string, zipCode: string) => {
    await checkoutPage.finishingCheckout(firstName, lastName, zipCode);
});

Then('el producto no se debería encontrar en el carrito', async () => {
    await checkoutPage.verifyEmptyCart();
    await browser.close();
});