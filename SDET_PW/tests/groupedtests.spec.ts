import {test, expect, Page} from '@playwright/test'
import { LoginPOM } from '../pages/login'

let page: Page;
let loginPage: LoginPOM;

test.beforeAll(async({browser})=>{
    console.log("before all executed");
});

test.beforeEach(async({page})=>{
    console.log("before each executed")
    await page.goto("https://saucedemo.com/");
    loginPage = new LoginPOM(page);
});

test.describe("Login with different ways", ()=>{
    test("To validate the login functionality with valid credentials", async({page}) => {
        loginPage.performLoginAction("standard_user","secret_sauce");
        let acutalvalue = await page.getByText("Product").textContent();
        await expect(acutalvalue).toBe("Products")
        
    });
    
    
    test("To validate the login functionality with invalid credentials", async({page}) => {
        loginPage.performLoginAction("locked_out_user","secret_sauce");
        let acutalvalue = await page.locator("//h3[@data-test='error']");
        await expect(acutalvalue).toHaveText("Epic sadface: Sorry, this user has been locked out.");``
        
    });
    
    
    test("validate login with glitch user credentials",async({page})=>{
        test.slow(); //trple timeout
        loginPage.performLoginAction("performance_glitch_user", "secret_sauce");
        let acutalvalue = await page.getByText("Product").textContent();
        await expect(acutalvalue).toBe("Products");
        console.log("test case 6")
    });
})