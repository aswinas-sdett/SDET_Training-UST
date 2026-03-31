import { test, expect, BrowserContext, Page } from '@playwright/test';
import { createBdd} from 'playwright-bdd';

const {Given,When,Then} = createBdd();

When('User fills in Age as {string}', async ({page}, arg: string) => {
  await page.locator("//button[text()=concat('Let', \"'\", 's get started')]/preceding-sibling::div/descendant::span[text()='Your Age']/preceding-sibling::input").fill(arg);
});

When('User presses Let\'s get started button', async ({page}) => {
    await page.locator("//button[text()=concat('Let', \"'\", 's get started')]").click();
});

Then('A popup for more details pops up', async ({ page}) => {
  await expect(page.locator(".hocLayer")).toBeVisible();
});


//FOR CLOSING POPUP
When('User clicks on the X button on the popup', async ({page}) => {
  await page.locator(".cross-2").click();
});

Then('The popup should close', async ({page}) => {
    await expect(page.locator(".hocLayer")).toBeHidden();
  
});