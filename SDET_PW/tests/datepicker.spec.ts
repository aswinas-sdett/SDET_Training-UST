import {test, expect } from "@playwright/test"

test("Test datepicker", async ({page}) =>{
    await page.goto("https://demo.automationtesting.in/Datepicker.html");
    // await page.locator("#datepicker2").fi(ll("12/12/2024");
    await page.locator("#datepicker2").click();
    await page.locator("//select[@title = 'Change the year']").selectOption('2023');
    await page.locator("//select[@title = 'Change the month']").selectOption('March');
    await page.locator("a", {hasText: "18"}).click();

    await page.waitForTimeout(3000);
})