import {test, expect} from '@playwright/test'
import { createBdd, DataTable } from 'playwright-bdd'
const {Given,When,Then} = createBdd();

const productName = "Sauce Labs Backpack";

When('User enters username', async ({ page }) => {
  await page.locator("#user-name").fill('standard_user');
});

When('User enters password', async ({ page }) => {
  await page.locator("#password").fill('secret_sauce');
});


When('User clicks on product', async ({ page }) => {
  await page.getByText(productName).click();
});

Then('the product description is available', async ({ page }) => {
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory-item.html?id=4");
  const actualProductName = await page.getByText(productName).textContent();
  await expect(actualProductName).toBe(productName);
});

When('User clicks on Add to cart button', async ({ page }) => {
  await page.locator("#add-to-cart").click();
});

Then('the product is added to cart', async ({ page }) => {
 const actualCartValue = await page.locator("//span[@data-test ='shopping-cart-badge']").textContent();
 await expect(actualCartValue).toBe("1");
});

When('user clicks on cart menu', async ({ page }) => {
  await page.locator("//a[@data-test='shopping-cart-link']").click();
});

Then('the cart is opened', async ({ page }) => {
  const actualValue = await page.getByText('Your Cart').textContent();
  await expect(actualValue).toBe("Your Cart");
});

Then('user is able to view the added product', async ({ page }) => {
  const actualProduct = await page.getByText(productName).textContent();
});

Then('User is able to see the entire product description', async ({ page }) => {
  const description = await page.locator("//div[@data-test ='inventory-item-desc']");
  await expect(description).toBeVisible();
});