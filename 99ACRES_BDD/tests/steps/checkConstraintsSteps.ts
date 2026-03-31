import { test, expect, BrowserContext, Page } from '@playwright/test';
import { createBdd} from 'playwright-bdd';

const {Given,When,Then} = createBdd();


When('User fills in  LoanAmount as {string}', async ({ page }, loanAmnt: string) => {
    await page.locator("//div[@class='_99HomeLoanBordrBox _99HomeLoanForm']/child::form/child::div/child::input[@maxlength='12']").fill(loanAmnt);

});

When('User fills in Tenure as {string}', async ({ page }, Tenure: string) => {
    await  page.locator("//div[@class='_99HomeLoanBordrBox _99HomeLoanForm']/child::form/child::div/child::input[@maxlength='3']").fill(Tenure);
});

When('User fills in ROI as {string}', async ({ page }, roi: string) => {
    await page.locator("//div[@class='_99HomeLoanBordrBox _99HomeLoanForm']/child::form/child::div/child::input[@maxlength='5']").fill(roi);
  });

Then('MonthlyEMI is {string}', async ({ page }, arg: string) => {
    let emi = await page.locator('.emiPrice b').nth(0).textContent();
    const expectedEMI = "₹ 43,430";
    console.log(emi);
    await expect(emi).toBe(expectedEMI);
});

//FOR INVALID VALUES FRO EMI CALCUALTION

Then('LoanAmount constraint appears', async ({ page }) => {
    await page.click("body");
    const LoanConstraint = await page.locator("//div[@class='_99HomeLoanBordrBox _99HomeLoanForm']/child::form/child::div/child::input[@maxlength='12']/following-sibling::span");
    await expect(LoanConstraint).toHaveText("Loan Range: 3 Lacs - 30 Cr");
});

Then('Tenure constraint appears', async ({ page }) => {
    const tenureConstraint = await page.locator("//div[@class='_99HomeLoanBordrBox _99HomeLoanForm']/child::form/child::div/child::input[@maxlength='3']/following-sibling::span");
    await expect(tenureConstraint).toHaveText("Tenure: 2-30 Years")
});

Then('ROI constraint appears', async ({ page }) => {
    await page.click("body");
    const ROIConstraint = await page.locator("//div[@class='_99HomeLoanBordrBox _99HomeLoanForm']/child::form/child::div/child::input[@maxlength='5']/following-sibling::span[@class='slidingInputLabel']")
    await expect(ROIConstraint).toHaveText("ROI Range: 1.00% - 99.99%");
});