import {Page, expect} from '@playwright/test';

export class HLPOM
{
    readonly page: Page;
    readonly loanAmtInput;
    readonly ROIInput;
    readonly TenureInput;

    readonly FullNameInput;
    readonly EmailSubmitButton;
    
    constructor(page:Page){
        this.page =page;
        this.loanAmtInput = page.locator("input#loanAmountInput");
        this.TenureInput = page.locator("//input[@maxlength='3' and contains(@class,'__phnNoVal')]").nth(1);
        this.ROIInput = page.locator("//input[@maxlength='5' and contains(@class,'__phnNoVal')]").nth(0);

        this.FullNameInput =  page.locator("//div[@class='eoiLyr_inpWrap wid100']/child::input[@maxlength='25']")
        this.EmailSubmitButton =  page.locator("//button[@class ='btnBlue  wid100']");
    }
    async fillInForm(loanAmt:number,ROI:number,Tenure:number)
    {
        await this.loanAmtInput.fill(String(loanAmt));
        await this.ROIInput.fill(String(ROI));
        await this.TenureInput.fill(String(Tenure));
        await this.page.click('body');
    }
    async fillInEmailField(FirstName:string, Email: string, MobNo: number)
    {
        await this.page.locator("//span[text()='HDFC']/parent::div/following-sibling::div/child::div[@class='dealButton']/child::span[text()='Email me']").click();
        await this.FullNameInput.fill(FirstName);
        await this.page.keyboard.press("Tab")
        await this.page.keyboard.type(Email);
        await this.page.keyboard.press("Tab");
        await this.page.keyboard.type(String(MobNo));
        await this.EmailSubmitButton.click();
    }
}