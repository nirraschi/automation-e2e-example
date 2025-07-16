import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

let browser: Browser;
let page: Page;
let loginPage: LoginPage;

Given('el usuario navega a la página de login', async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    await loginPage.navigate();
});

When('ingresa el usuario {string} y la contraseña {string}', async (username, password) => {
    await loginPage.login(username, password);
});

Then('debería ver la página de productos', async () => {
    await loginPage.verifyProductsPage();
    await browser.close();
});

Then('debería ver el mensaje de error {string}', async (message: string) => {
    await loginPage.verifyErrorMessage(message);
    await browser.close();  
});
