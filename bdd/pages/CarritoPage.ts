import { Page, expect } from '@playwright/test';

export class CarritoPage {
    constructor(private page: Page) {}

    private productNameToId(name: string): string {
        return name.toLocaleLowerCase().replace(/\s+/g, '-');
    }

    async login(){
        await this.page.goto('https://www.saucedemo.com/');
        await this.page.fill('#user-name', 'standard_user');
        await this.page.fill('#password', 'secret_sauce');
        await this.page.click('#login-button');
    }

    async addProduct(productName: string){
        const productId = this.productNameToId(productName);
        const item = await this.page.locator(`#add-to-cart-${productId}`);
        await item.click();
    }

    async clickCarrito(){
        await this.page.click('#shopping_cart_container');
    }

    async verifyProduct(productName: string){
        await this.clickCarrito();
        await expect(this.page.locator('[data-test="inventory-item-name"]')).toContainText(productName);
    }

    async removeProduct(productName: string){
        const productId = this.productNameToId(productName);
        await this.page.locator(`#remove-${productId}`).click();
    }

    async verifyEmptyCart(){
        await expect(this.page.locator('.invenorty_item_name:has-text("Sauce Labs Backpack")')).not.toBeVisible();
    }

}