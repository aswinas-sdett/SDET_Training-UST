import { test, expect, chromium } from "@playwright/test";

test("Check EMI calculation", async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
    extraHTTPHeaders: {
      'Accept-Language': 'en-US,en;q=0.9',
      'Referer': 'https://www.99acres.com/'
    }
  });

  const page = await context.newPage();

  // Hide automation flag
  await page.evaluateOnNewDocument(() => {
    Object.defineProperty(navigator, 'webdriver', { get: () => false });
  });

  await page.goto("https://www.99acres.com/apply-for-home-loan-hlpg");

  await page.getByRole('textbox').nth(3).fill('4500000'); // remove commas
  await page.getByRole('textbox').nth(4).fill('20');
  await page.getByRole('textbox').nth(5).fill('10');

  await page.getByRole('button', { name: 'Calculate' }).click();

  await page.waitForTimeout(3000);

  const emi = await page.locator('.emiPrice b').textContent();
  console.log('EMI:', emi);

  // Optional: validate EMI
  // await expect(emi).toBe("₹ 71,71,060");

  await browser.close();
});