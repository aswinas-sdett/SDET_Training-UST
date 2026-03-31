import { test, expect } from '@playwright/test';
import { createBdd} from 'playwright-bdd';

const {Given,When,Then} = createBdd();

/*
    Created by : Aswin
    Reviewed by : Test Manager

*/



/*
 DESCRIPTION: Steps for Scenario: Log in with valid credentials

Given('User is on login page', async ({page}) => {

    await page.goto("https://www.saucedemo.com/")
});

When('User enters username', async ({page}) => {

  await page.locator("#user-name").fill("standard_user");
});

When('User enters password', async ({page}) => {
  
  await page.locator("#password").fill("secret_sauce");
});

When('User clicks Login button', async ({page}) => {

  await page.locator("#login-button").click();
});

Then('User is logged in successfully', async ({page}) => {

   await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

});

Then('User is able to navigate to product page', async ({page}) => {    
 
  await expect(page.locator(("span.title"))).toHaveText("Products");
});
*/



/*
DESCRIPTION: Steps for Scenario: Log in with locked out user credentials

When('User enters locked out username', async ({ page }) => {
    await page.locator("#user-name").fill("locked_out_user");
});

Then('User gets error message', async ({ page }) => {
  await expect(page.locator("//h3[@data-test ='error']")).toHaveText("Epic sadface: Sorry, this user has been locked out.")
});

Then('User is still on login page', async ({ page}) => {
  await expect(page).toHaveURL("https://www.saucedemo.com");
});

*/


/*
DESCRIPTION: Steps for Scenario: Log in with problem user credentials
When('User enters problem username', async ({ page }) => {
    await page.locator("#user-name").fill("problem_user");
});

Then('The image of product is an image of a dog', async ({ page }) => {
 const imagedog = page.locator('.inventory_item_img img').nth(0);
 await expect(await imagedog.getAttribute('src')).toBe('/static/media/sl-404.168b1cce10384b857a6f.jpg')

});
*/


//  --------------------------------------------------------------------------------------
  // OPTIMISING CODE BY ACCOMODATING VALUES INTO MINIMAL CODE
//  --------------------------------------------------------------------------------------




// Given('User is on login page', async ({ page }) => {
//   await page.goto("https://www.saucedemo.com/")
// });


// When('User enters username as {string}', async ({ page }, username) => {
//   await page.locator("#user-name").fill(username);
// });

// When('User enters password as {string}', async ({ page }, password) => {
//   await page.locator("#password").fill(password);
// });

// When('User clicks Login button', async ({ page }) => {
//   await page.locator("#login-button").click();
// });

// Then('User is logged in successfully', async ({ page }) => {
//   await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
// });


// //checks the page header to match "Products"
// Then('User is able to navigate to product page', async ({ page }) => {
//   await expect(page.locator(("span.title"))).toHaveText("Products");
// });

// // For problem_user 
// //  the thumbnail of all product is replaced by image of a dog
// Then('The image of product is an image of a dog', async ({ page }) => {
//  const imagedog = page.locator('.inventory_item_img img').nth(0);
//  await expect(await imagedog.getAttribute('src')).toBe('/static/media/sl-404.168b1cce10384b857a6f.jpg')

// });


// --------------------------------------------------------------------------------------
// OPTIMISING CODE BY UNIFYING SIMILAR SCENARIOS FOR DYNAMIC VALUES USING EXAMPLES
// --------------------------------------------------------------------------------------


Given('User is on login page', async ({ page }) => {
  await page.goto("https://www.saucedemo.com/")
});

When('User enters username as {string}', async ({ page }, username) => {
  await page.locator("#user-name").fill(username);
});

When('User enters password as {string}', async ({ page }, password) => {
  await page.locator("#password").fill(password);
});

When('User clicks Login button', async ({ page }) => {
  await page.locator("#login-button").click();
});

Then('User is logged in successfully', async ({ page }) => {
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});

Then('User is able to navigate to product page', async ({page}) => {    
  await expect(page.locator(("span.title"))).toHaveText("Products");
});


// USING DATATABLES INSTEAD OF EXAMPLES
import { DataTable } from 'playwright-bdd';

When('User enters username as <username> and enter <password>', async ({ page }, dataTable: DataTable) => {
  const userLogin = dataTable.hashes();
  const username = userLogin[0].username;
  const password = userLogin[0].password;

  await page.locator("#user-name").fill(username);
  await page.waitForTimeout(1000);
  await page.locator("#password").fill(password);
  await page.waitForTimeout(1000);
});