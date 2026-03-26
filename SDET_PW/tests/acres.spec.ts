

import { test, expect, chromium, BrowserContext, Page } from "@playwright/test";

test("Check whether correct values give correct borrow amount", async ({page}) => {

 


  await page.goto("https://www.99acres.com/apply-for-home-loan-hlpg");
  
  await page.waitForTimeout(2000);
  await page.locator("//div[@class='eoiLyr_inpWrap wid50']/child::input[@maxlength='2' and contains(@class,'__enableSubmitButton __phnNoVal')]").fill('30');  //age
  await page.waitForTimeout(2000);
  await page.locator("//input[@maxlength='10'and contains(@class,'__enableSubmitButton __phnNoVal pl10')]").fill('1000000'); //net income
  await page.waitForTimeout(2000);
  
  await page.locator("//input[@maxlength='8'and contains(@class,'__enableSubmitButton __phnNoVal pl10')]").fill('10000'); // existing emi
  await page.waitForTimeout(2000);
  await page.locator("//div[@class='eoiLyr_inpWrap wid50']/child::input[@maxlength='5' and contains(@class,'__enableSubmitButton __phnNoVal')]").fill('10');  //ROI 
  await page.waitForTimeout(2000);
  await page.locator("//div[@class='eoiLyr_inpWrap wid50']/child::input[@maxlength='3' and contains(@class,'__enableSubmitButton __phnNoVal')]").fill('20');  //Tenure
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Calculate' }).click();

  let expected_borrow_amt = "₹ 7,15,00,990";
  let borrowamnt = await page.locator('.borrowUptoLegend .emiPrice').textContent();
  
  await page.waitForTimeout(2000);
  console.log(borrowamnt);
  await expect(borrowamnt).toBe(expected_borrow_amt)
  await page.waitForTimeout(2000);

 
});



test("Check whether correct values give emi", async ({page}) => {


 

  await page.goto("https://www.99acres.com/apply-for-home-loan-hlpg");
  await page.waitForTimeout(2000);
  await page.locator("input#loanAmountInput").fill("4500000");
  await page.waitForTimeout(2000);
  await  page.locator("//input[@maxlength='3' and contains(@class,'__phnNoVal')]").nth(1).fill('20');

  await page.waitForTimeout(2000);
  await page.locator("//input[@maxlength='5' and contains(@class,'__phnNoVal')]").nth(0).fill("10");
  
  await page.waitForTimeout(2000);


  let emi = await page.locator('.emiPrice b').nth(0).textContent();
 
  console.log(emi);
  await expect(emi).toBe("₹ 43,430");



});


test("Check whether incorrect values show constraints", async ({page}) => {
  await page.goto("https://www.99acres.com/apply-for-home-loan-hlpg");
  await page.waitForTimeout(2000);

  await page.locator("input#loanAmountInput").fill("4500000000");
  await page.click('body');
  const constraint = await page.locator("//input[@id ='loanAmountInput']/following-sibling::span");
  await expect(constraint).toHaveText("Loan Range: 3 Lacs - 30 Cr");
});


test("Check email validity in request callback form", async ({page}) => {


  let email ="abcd"
  await page.goto("https://www.99acres.com/apply-for-home-loan-hlpg");
  await page.waitForTimeout(2000);
  await page.locator("//div[contains(@class,'eoiLyr_inpWrap ')]//span[text()='Your Email Id']/preceding-sibling::input").fill(email);
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Request Callback' }).click();

  let invalidemail = await page.locator(`//div[contains(@class,'eoiLyr_inpWrap ')]//input[@value='${email}']/following-sibling::span`);
  await expect(invalidemail).toHaveText("Kindly enter valid email ID");

});


test("Check phonenumber validity", async ({page}) => {

 

  let phoneno ="1234"
  await page.goto("https://www.99acres.com/apply-for-home-loan-hlpg");
  await page.waitForTimeout(2000);
  await page.locator("//div[contains(@class,'eoiLyr_inpWrap ')]//span[text()='Mobile Number(OTP verification req)']/preceding-sibling::input").fill(phoneno);
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Request Callback' }).click();

  let invalidemail = await page.locator(`//div[contains(@class,'eoiLyr_inpWrap ')]//input[@value='${phoneno}']/following-sibling::span`);
  await expect(invalidemail).toHaveText("Kindly enter a valid mobile number");

});



test("Check  bank  email notification details visibility", async ({page}) => {

 
  await page.goto("https://www.99acres.com/apply-for-home-loan-hlpg");
  await page.locator("//span[text()='HDFC']/parent::div/following-sibling::div/child::div[@class='dealButton']/child::span[text()='Email me']").click();
  const emailField = await page.locator("//div[@class='modal-window-homeLoan eoiLayerContainer emailDetailsContainer']");
  await expect.soft(emailField).toBeVisible();

  
});


test("Check keyboard typability in email fields", async ({page}) => {

  
  await page.goto("https://www.99acres.com/apply-for-home-loan-hlpg");
  await page.locator("//span[text()='HDFC']/parent::div/following-sibling::div/child::div[@class='dealButton']/child::span[text()='Email me']").click();
  await page.waitForTimeout(2000);
  // await page.locator("//div[@class='icon-cross']").click();
 
  await page.locator("//div[@class='eoiLyr_inpWrap wid100']/child::input[@maxlength='25']").fill("john");

  await page.keyboard.press("ControlOrMeta+A")
  await page.keyboard.press("ControlOrMeta+C")
  await page.keyboard.press("Tab")
  await page.keyboard.press("ControlOrMeta+V")


  await page.keyboard.type("@email.com");
  await page.keyboard.press("Tab");
  await page.keyboard.type("9999999999");
  await page.locator("//button[@class ='btnBlue  wid100']").click();

});


test('Check page redirect', async({ browser}) =>{
    const context:BrowserContext = await browser.newContext();
    const page: Page= await context.newPage();
    await page.goto("https://www.99acres.com/apply-for-home-loan-hlpg");
          await page.locator("#_hdfc_deal").click()

   
   
    const parentPage = page.url;
    console.log(parentPage);
    const [newPage]= await Promise.all([
      context.waitForEvent('page'),


    ]);
    await newPage.waitForLoadState();
    console.log(newPage.url());

});