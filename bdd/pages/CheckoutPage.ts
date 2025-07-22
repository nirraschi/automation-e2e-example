import { Page, expect } from '@playwright/test';


export class CheckoutPage {
    constructor(private page: Page) {}

    async navigate(){
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(){
        await this.page.fill('input[name="user-name"]', 'standard_user');
        await this.page.fill('input[name="password"]', 'secret_sauce');
        await this.page.click('input[name="login-button"]');
    }

    async addProduct(productName: string){
        const producto = await this.page.locator(`#add-to-cart-${productName.toLocaleLowerCase().replace(/\s+/g, '-')}`).click();
        
    }

    async cartNavigate(){
        await this.page.locator('#shopping_cart_container').click();
    }
    
    async verifyProductInCart(productName: string){
        await expect(this.page.locator('[data-test="inventory-item-name"]')).toContainText(productName);
    }

    async verifyCheckoutButton(){
        await expect(this.page.locator('[data-test="checkout"]')).toBeVisible();
        await this.page.locator('[data-test="checkout"]').click();
    }

    async finishingCheckout(firstName: string, lastName: string, zipCode: string){
        await this.page.locator('#first-name').fill(firstName);
        await this.page.locator('#last-name').fill(lastName);
        await this.page.locator('#postal-code').fill(zipCode);

        await this.page.locator('#continue').click();

        await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
        await this.page.locator('#finish').click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
        await expect(this.page.locator('.complete-header')).toContainText('Thank you for your order!');

        await this.page.locator('#back-to-products').click();
    }

    async verifyEmptyCart(){
        await this.page.locator('#shopping_cart_container').click();
        await expect(this.page.locator('.cart_item')).not.toBeVisible();
    }





}