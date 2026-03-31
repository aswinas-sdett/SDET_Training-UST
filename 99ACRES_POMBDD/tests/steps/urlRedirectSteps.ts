import { test, expect, Page, BrowserContext } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

// A variable to store the newly opened page
let newPage: Page;

Given('User is on Homeloan page', async ({ page }) => {
  await page.goto("https://www.99acres.com/apply-for-home-loan-hlpg");
});

When('User clicks Know More button of HDFC', async ({ page, context }) => {
  // Capture the new page that opens after clicking
  [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.locator("#_hdfc_deal").click(), 
  ]);

  await newPage.waitForLoadState('load');
});

Then('User is redirected to HDFC Policy page', async () => {
  console.log('Redirected URL:', newPage.url());
  await expect(newPage).toHaveURL(
    "https://www.hdfc.bank.in/important-messages/product-features-and-policy"
  );
});