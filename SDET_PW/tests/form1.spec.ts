import {test} from "@playwright/test";

test("test register page", async ({page}) => {
    await page.goto("https://demo.automationtesting.in/Register.html");

    await page.getByPlaceholder("First Name").fill("john");
    await page.getByPlaceholder("Last Name").fill("doe");

    await page.locator("textarea[ng-model = 'Adress']").fill("123 kollam");
    await page.locator("input[type='email']").fill("abc@mail.com");
    await page.locator("input[type='tel']").fill("9876543210");

    const totalgenders = await page.locator("input[name= 'radiooptions']");
    console.log("total genders:" + await totalgenders.count());

    for (let i = 0; i< await totalgenders.count(); i++ )
    {
        const rowvalue = totalgenders.nth(i);
        const gendervalue = await rowvalue.getAttribute("value");
        console.log("gendervalue=" + gendervalue);
        if (gendervalue === "Male")
        {
            await rowvalue.check();
            break;
        }
    }
    await page.locator("#msdd").click();
    let languages = ['English', 'Spanish']
    for (const lang of languages)
    {
        await page.locator(".ui-corner-all").locator('a',{hasText:lang}).click();
    }    
    await page.locator("#Skills").selectOption("Java"); // select by value
    // await page.locator("#Skills").selectOption({label: "Java"}); // select by label
    // await page.locator("#Skills").selectOption({index:3}); // select by index
    await page.locator('body').click();

    await page.locator("span[role='combobox']").click();
    const searchbox = page.locator("input[type ='search']");
    searchbox.fill("India");
    await page.locator("li", {hasText:"India"}).click();

    const fileupload = await page.locator("#imagesrc");
    await fileupload.setInputFiles("C:\\Users\\Administrator\\Documents\\trial.txt")

        await page.waitForTimeout(5000);
});
