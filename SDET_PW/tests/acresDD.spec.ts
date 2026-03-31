import { test, expect, chromium, BrowserContext, Page } from "@playwright/test";
import { readExcelFile } from "../utils/excelReader";
import { HLPOM } from "../pages/acreshome";

interface LoanDataStructure
{
    LoanAmnt: number;
    ROI: number;
    Tenure: number;
    validityOfData:string;
    expectedEMI: string;
}
interface personalInfoStructure
{
    FullName: string;
    Email: string;
    MobNo: number;
    Validity: string;
}
let page:Page;
let HLPage: HLPOM;
const loanData: LoanDataStructure[] = readExcelFile('loan.xlsx','Sheet1');
const personalInfo: personalInfoStructure[]= readExcelFile('loan.xlsx','Sheet2');

test.beforeEach(async({page}) =>
{
    await page.goto("https://www.99acres.com/apply-for-home-loan-hlpg");
    HLPage = new HLPOM(page);

});

// TO VALIDATE FILL LOAN DETAILS TO CALCULATE EMI

// loanData.forEach(data =>{
//     test(`Check with ${data.validityOfData} data`, async ({page}) =>{
//         await HLPage.fillInForm(data.LoanAmnt,data.ROI, data.Tenure);
//         console.log(data.validityOfData);
//         if (data.validityOfData == "valid")
//         {
//             let emi = await page.locator('.emiPrice b').nth(0).textContent();
 
//             console.log(emi);
//             await expect(emi).toBe(data.expectedEMI);
//         }
//         else
//         {
//             const constraint = await page.locator("//input[@id ='loanAmountInput']/following-sibling::span");
//             await expect(constraint).toHaveText("Loan Range: 3 Lacs - 30 Cr");
//         }
//     })
// })


//TO VALIDATE FILLING PERSONAL INFO FOR EMAIL 

personalInfo.forEach(data =>{
    test(`check with ${data.Validity} data[${data.FullName}, ${data.Email}, ${data.MobNo}]`, async ({page})=>{
        
        await HLPage.fillInEmailField(data.FullName,data.Email,data.MobNo);
        
        const FullNameConstraint = await page.locator("//div[@class='eoiLyr_inpWrap wid100']/child::input[@maxlength='25']/following-sibling::span").textContent();
        const EmailConstraint = await page.locator("//div[@class='eoiLyr_inpWrap wid100']/child::input[@maxlength='40']/following-sibling::span").textContent();
        const MobNoConstraint =await page.locator("//div[@class='eoiLyr_inpWrap wid100']/child::input[@maxlength='10']/following-sibling::span").textContent();
        if (data.Validity == "invalid")
        {
            const isAnyConstraintVisible =
                        FullNameConstraint == "Kindly enter valid name" ||
                        EmailConstraint == "Kindly enter valid email ID" ||
                        MobNoConstraint == "Kindly enter a valid mobile number";

            await expect(isAnyConstraintVisible).toBeTruthy();
        }
    })
})