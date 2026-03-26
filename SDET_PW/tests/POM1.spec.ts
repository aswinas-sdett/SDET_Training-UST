import {test, expect, Page} from "@playwright/test";
import {LoginPOM} from "../pages/login.ts";


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

test("To validate the login functionality with valid credentials", async({page}) => {
    
    
    
    loginPage.performLoginAction("standard_user","secret_sauce");
    let acutalvalue = await page.getByText("Product").textContent();
    await expect(acutalvalue).toBe("Products")
    
});


test.only("To validate the login functionality with invalid credentials", async({page}) => {

    loginPage.performLoginAction("locked_out_user","secret_sauce");
    let acutalvalue = await page.locator("//h3[@data-test='error']");
    await expect(acutalvalue).toHaveText("Epic sadface: Sorry, this user has been locked out.");
    
});

test.skip("test under development",async ({page})=>{
    console.log("tes 3");
});

test("failed test case", async({page})=>{
    test.fail();
});

test.fixme("test that may fail", async ({page})=>{
    console.log("test case 5");
});

test("validate login with glitch user credentials",async({page})=>{
    test.slow(); //trple timeout
    loginPage.performLoginAction("performance_glitch_user", "secret_sauce");
    let acutalvalue = await page.getByText("Product").textContent();
    await expect(acutalvalue).toBe("Products");
    console.log("test case 6")
});


test.afterEach(async({page})=>{
    await page.close();
});

test.afterAll(async({browser})=>{
    console.log("after all executed");
});