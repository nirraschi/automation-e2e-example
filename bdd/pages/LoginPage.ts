import { Page, expect } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) {}

    
    async navigate(){
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username: string, password: string){
        await this.page.fill('input[name="user-name"]', username);
        await this.page.fill('input[name="password"]', password);
        await this.page.click('input[name="login-button"]');
    }

    async verifyProductsPage(){
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
    }

    async verifyErrorMessage(message: string){
        await expect(this.page.locator('.error-message-container')).toContainText(message);
    }
}