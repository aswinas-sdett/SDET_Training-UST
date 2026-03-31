import { test, expect, Page } from '@playwright/test';
import { createBdd} from 'playwright-bdd';
import { LoginPOM } from '../pages/loginPOM.ts';

const {Given,When,Then,Before} = createBdd();

let page: Page
let loginPage:LoginPOM

Before(async function ({page}) {
    loginPage = new LoginPOM(page);

})

Given('User is on login page', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
});

When('User enters username', async ({ page }) => {
    await loginPage.enterUsername("standard_user");
});

When('User enters password', async ({ page }) => {
    await loginPage.enterPassword("secret_sauce");
});

When('User clicks Login button', async ({ page }) => {
    await loginPage.clickLoginButton();
});

Then('User is logged in successfully', async ({ page }) => {
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});

Then('User is able to navigate to product page', async ({ page }) => {
    let acutalvalue = await page.getByText("Product").textContent();
    await expect(acutalvalue).toBe("Products")
});


//FOR LOCKED OUT USER
When('User enters locked out username', async ({ page }) => {
    await loginPage.enterUsername("locked_out_user");
});

Then('User gets error message', async ({ page }) => {
    loginPage.returnLockedError();
});

Then('User is still on login page', async ({ page }) => {
    await expect(page).toHaveURL("https://www.saucedemo.com/");
});


// FOR INVALID USER
When('User enters invalid username', async ({ page }) => {
    await loginPage.enterUsername("no_user");
  
})

Then('User gets invalid username error message', async ({}) => {
       loginPage.returnInvalidError();
});

//FOR PROBLEM USER

When('User enters problem username', async ({ page }) => {
    await loginPage.enterUsername("problem_user");});

Then('The image of product is an image of a dog', async ({ page}) => {
const imagedog = page.locator('.inventory_item_img img').nth(0);
 await expect(await imagedog.getAttribute('src')).toBe('/static/media/sl-404.168b1cce10384b857a6f.jpg')
});

