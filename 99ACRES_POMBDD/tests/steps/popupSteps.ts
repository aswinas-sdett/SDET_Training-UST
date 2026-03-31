import { test, expect, BrowserContext, Page } from '@playwright/test';
import { createBdd} from 'playwright-bdd';
import { HLPOM } from '../pages/99Acres_HLPage.ts'

const {Given,When,Then, Before} = createBdd();

let page: Page
let HLpage:HLPOM

Before(async function ({page}) {
    HLpage = new HLPOM(page);
})


When('User fills in Age as {string}', async ({page}, age: string) => {
  await HLpage.fillAgeInput(age);
});

When('User presses Let\'s get started button', async ({page}) => {
  await HLpage.clickLetsStartButton();
});

Then('A popup for more details pops up', async ({ page}) => {
  await HLpage.VisiblePopup();
});


//FOR CLOSING POPUP
When('User clicks on the X button on the popup', async ({page}) => {
  await HLpage.clickXButton();
});

Then('The popup should close', async ({page}) => {
    await HLpage.HiddenPopup();
  
});