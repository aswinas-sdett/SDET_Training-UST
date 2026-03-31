import { test, expect, BrowserContext, Page } from '@playwright/test';
import { createBdd} from 'playwright-bdd';
import { HLPOM } from '../pages/99Acres_HLPage.ts'

const {Given,When,Then, Before} = createBdd();

let page: Page
let HLpage:HLPOM

Before(async function ({page}) {
    HLpage = new HLPOM(page);
})

Then('the value of Interest Amount is {string}', async ({page }, Interest: string) => {
  await HLpage.checkPieLI(Interest)
});

Then('the value of Principal Amount is {string}', async ({}, PA: string) => {
  await HLpage.checkPiePA(PA);
});