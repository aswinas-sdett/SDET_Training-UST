import {Page, expect} from '@playwright/test'
import { error } from 'console';

export class LoginPOM
{
    readonly page: Page;
    readonly usernameInput;
    readonly passwordInput;
    readonly loginButton;
    readonly pageLogo;



    constructor(page: Page)
    {
        this.page = page;
        this.usernameInput = page.locator("#user-name");
        this.passwordInput = page.locator("#password");
        this.loginButton = page.getByText("Login");
        this.pageLogo = page.locator(".login_logo").textContent();
    }
    
    async enterUsername(uname: string)
    {
        await this.usernameInput.fill(uname);
    }
    async enterPassword(pass:string)
    {
        await this.passwordInput.fill(pass);
    }
    async clickLoginButton()
    {
        await this.loginButton.click();
    }
    async returnInvalidError()
    {
        const errorMessage = this.page.locator("//h3[@data-test ='error']");
        await expect(errorMessage).toHaveText("Epic sadface: Username and password do not match any user in this service")
    }
    async returnLockedError()
    {
        const errorMessage = this.page.locator("//h3[@data-test ='error']");
        await expect(errorMessage).toHaveText("Epic sadface: Sorry, this user has been locked out.")
        
    }
}