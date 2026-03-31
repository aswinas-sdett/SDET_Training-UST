import {Page, expect} from '@playwright/test';

export class HLPOM
{
    readonly page: Page;
    readonly loanAmtInput;
    readonly ROIInput;
    readonly TenureInput;
    readonly EMIField;

    readonly loanConstraint;
    readonly tenureConstraint;
    readonly ROIConstraint;

    readonly ageInput;
    readonly letStartButton;
    readonly popup;
    readonly Xbutton;

    readonly pieLoanInt;
    readonly piePA;

    readonly FullNameInput;
    readonly EmailSubmitButton;
    
    constructor(page:Page){
        this.page =page;
        this.loanAmtInput = page.locator("//div[@class='_99HomeLoanBordrBox _99HomeLoanForm']/child::form/child::div/child::input[@maxlength='12']");
        this.TenureInput = page.locator("//div[@class='_99HomeLoanBordrBox _99HomeLoanForm']/child::form/child::div/child::input[@maxlength='3']");
        this.ROIInput = page.locator("//div[@class='_99HomeLoanBordrBox _99HomeLoanForm']/child::form/child::div/child::input[@maxlength='5']");
        this.EMIField = page.locator("//div[@class='_99HomeLoanEmiChart']/child::div/following-sibling::div/child::div/following-sibling::div[@class='emiPrice']/child::b")

        this.loanConstraint = page.locator("//div[@class='_99HomeLoanBordrBox _99HomeLoanForm']/child::form/child::div/child::input[@maxlength='12']/following-sibling::span")
        this.tenureConstraint = page.locator("//div[@class='_99HomeLoanBordrBox _99HomeLoanForm']/child::form/child::div/child::input[@maxlength='3']/following-sibling::span")
        this.ROIConstraint = page.locator("//div[@class='_99HomeLoanBordrBox _99HomeLoanForm']/child::form/child::div/child::input[@maxlength='5']/following-sibling::span[@class='slidingInputLabel']")

        this.ageInput = page.locator("//button[text()=concat('Let', \"'\", 's get started')]/preceding-sibling::div/descendant::span[text()='Your Age']/preceding-sibling::input")
        this.letStartButton = page.locator("//button[text()=concat('Let', \"'\", 's get started')]")
        this.popup = page.locator(".hocLayer");
        this.Xbutton = page.locator(".cross-2");

        this.pieLoanInt = page.locator("//*[local-name()='g' and  @class ='highcharts-label highcharts-data-label highcharts-data-label-color-0 noTextOutline']/*[text()]");
        this.piePA = page.locator("//*[local-name()='g' and  @class ='highcharts-label highcharts-data-label highcharts-data-label-color-1 noTextOutline']/*[text()]");

        this.FullNameInput =  page.locator("//div[@class='eoiLyr_inpWrap wid100']/child::input[@maxlength='25']")
        this.EmailSubmitButton =  page.locator("//button[@class ='btnBlue  wid100']");
    }

    //CHECK CONSTRAINTSSTEP
    async fillInLoan(loanAmt:string)
    {
        await this.loanAmtInput.fill(loanAmt);
    }
    async fillInTenure(Tenure:string)
    {
        await this.TenureInput.fill(Tenure);
    }
    async fillInROI(ROI:string)
    {
        await this.ROIInput.fill(ROI);
    }

    async checkEMIValue(expectedEMI:string)
    {
        
        await expect(this.EMIField).toHaveText(expectedEMI)
    
    }

    async checkLoanConstraint()
    {
        await expect(this.loanConstraint).toHaveText("Loan Range: 3 Lacs - 30 Cr"); 
    }

    async checkTenureConstraint()
    {
        await expect(this.tenureConstraint).toHaveText("Tenure: 2-30 Years")
    }
    async checkROIConstraint()
    {
        await this.page.click("body");
        await expect(this.ROIConstraint).toHaveText("ROI Range: 1.00% - 99.99%");
    }
    //FOR POPUP STEPS

    async fillAgeInput(age:string)
    {
        await this.ageInput.fill(age);
    }

    async clickLetsStartButton()
    {
        await this.letStartButton.click();
    }

    async VisiblePopup()
    {
        await expect(this.popup).toBeVisible();
    }

    async clickXButton()
    {
        await this.Xbutton.click();
    }
    async HiddenPopup()
    {
        await expect(this.popup).toBeHidden();
    }
    //FOR PIECHARTSTEPS
    async checkPiePA( PAValue:string)
    {
        let pa = `${PAValue}${PAValue}`
        await expect(this.piePA).toHaveText(pa);
        
    }
    async checkPieLI(LIValue:string)
    {
        let li = `${LIValue}${LIValue}`
        await expect(this.pieLoanInt).toHaveText(li);
    }


    //
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