import { test, expect, BrowserContext, Page } from '@playwright/test';
import { createBdd} from 'playwright-bdd';
import { HLPOM } from '../pages/99Acres_HLPage.ts'

const {Given,When,Then, Before} = createBdd();

let page: Page
let HLpage:HLPOM

Before(async function ({page}) {
    HLpage = new HLPOM(page);
})


When('User fills in  LoanAmount as {string}', async ({ page }, loanAmnt: string) => {
    await HLpage.fillInLoan(loanAmnt);
});

When('User fills in Tenure as {string}', async ({ page }, Tenure: string) => {
    await HLpage.fillInTenure(Tenure);
});

When('User fills in ROI as {string}', async ({ page }, roi: string) => {
    await HLpage.fillInROI(roi);
});

Then('MonthlyEMI is {string}', async ({ page }, emiValue: string) => {
    await HLpage.checkEMIValue(emiValue);
});

//FOR INVALID VALUES FRO EMI CALCUALTION

Then('LoanAmount constraint appears', async ({ page }) => {
    await HLpage.checkLoanConstraint();
});

Then('Tenure constraint appears', async ({ page }) => {
    await HLpage.checkTenureConstraint();
});

Then('ROI constraint appears', async ({ page }) => {
    await HLpage.checkROIConstraint();
});