import {test, expect, Page} from '@playwright/test'
import {LoginPOM} from "../pages/login"
import { readExcelFile } from '../utils/excelReader'

interface LoginData
{
    username : string;
    password : string;
    expectedOutput: string;
}

let page:Page;
let loginPage: LoginPOM;
const loginUsers: LoginData[] = readExcelFile('login.xlsx','Sheet1');
test.beforeEach(async ({page}) =>{
    await page.goto("https://saucedemo.com/");
    loginPage = new LoginPOM(page);

});

loginUsers.forEach(data =>{
    test(`To Validate Login with user${data.username}`, async({page}) => {
    
        await loginPage.performLoginAction(data.username, data.password);
        if (data.expectedOutput === "Products")
        {
            let actualvalue = await page.getByText("Product").textContent();
            await expect(actualvalue).toBe(data.expectedOutput)
        }
        else
        {
            let actualvalue = await page.locator("//h3[@data-test='error']");
            await expect(actualvalue).toHaveText(data.expectedOutput)        
        }
        
    });
})