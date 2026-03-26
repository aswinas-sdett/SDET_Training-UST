import {test, expect} from "@playwright/test";

test("To validate the login functionality with valid credentials", async({page}) => {
    await page.goto("https://saucedemo.com/");

    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", {name:"Login"}).click();

    let acutalvalue = await page.getByText("Products").textContent();
    await expect.soft(page.url()).toBe("https://www.saucedemo.com/inventory.html");
    await expect.soft(acutalvalue).toBe("Products")
});


/*
test("to validate login functionality wth invalid credentials", async({page}) => {
    await page.locator("#user-name").fill("locked_out_user");
    await page.locator("input[data-test='password']").fill("secret_sauce");
    await page.locator(".submit-button").click();

    await expect(page.locator("h3[data-test = 'error']"))
    .toHaveText("Epic sadface: Sorry, this user has been locked out.");
});
*/