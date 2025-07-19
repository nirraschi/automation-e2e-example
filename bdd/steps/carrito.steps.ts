import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';
import { CarritoPage } from '../pages/CarritoPage';

let browser: Browser;
let page: Page;
let carritoPage: CarritoPage;
// 1er Scenario
Given ('el usuario está logueado en la aplicación', async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    carritoPage = new CarritoPage(page);
    await carritoPage.login();
});

When ('agrega el producto {string} al carrito', async (productName: string) => {
    await carritoPage.addProduct(productName);
});

Then ('debería ver el producto {string} en el carrito', async (productName: string) => {
    await carritoPage.verifyProduct(productName);
    await browser.close();
});

// 2do Scenario
Given ('el usuario tiene el producto {string} en el carrito', async (productName: string) => {
    browser = await chromium.launch();
    page = await browser.newPage();
    carritoPage = new CarritoPage(page);
    
    await carritoPage.login();
    await carritoPage.addProduct(productName);
});

When ('elimina el producto {string}', async (productName: string) => {
    await carritoPage.removeProduct(productName);
});

Then ('el carrito debería estar vacío', async () => {
    await carritoPage.verifyEmptyCart();
    await browser.close();
})
