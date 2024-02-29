// Assignment: 3 Create Individuals
// Test Steps: 
// 1. Login to https://login.salesforce.com
// 2. Click on the toggle menu button from the left corner
// 3. Click View All and click Individuals from App Launcher
// 4. Click on the Dropdown icon in the Individuals tab
// 5. Click on New Individual
// 6. Enter the Last Name
// 7. Click save and verify Individuals Name

import{test,chromium, expect} from '@playwright/test';

test('Create Individuals' , async()=>{

    const browser = await chromium.launch({channel:"chrome"});
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();
    await page.goto(" https://login.salesforce.com"); // Go to Login URL
    await page.fill("#username" , "harrini.rp@yahoo.com");// Input Username value
    await page.fill("#password" , "Shiridi@1288");//Input Password value
    await page.click("#Login"); //Click on Login Button
    await page.waitForTimeout(3000);
    await page.click(".slds-icon-waffle");//Click on Applauncher from the left panel
    await page.waitForTimeout(3000);
    const clickViewAll = page.getByText("View All"); //To click on View All
    await page.waitForSelector('button');
    await clickViewAll.click();
    await page.locator("//p['@classname=slds-truncate'and text()='Individuals']").click();//Click on Individuals
    console.log(await page.title());
    await page.waitForTimeout(3000);
    await page.click("div[title='New']");
    await page.waitForTimeout(3000);
    //await page.locator("//a[@class='select']").click();
    await page.click("//div[@class='uiPopupTrigger'][1]");//To expand the Salutation
    await page.waitForTimeout(3000);
    await page.locator("//a['@classname= select'and text()='Mr.']").click();
    const lastName = "Prakash";
    await page.getByPlaceholder("Last Name").fill(lastName);
    await page.click("//button[@title='Save']//span[contains(@class,'label bBody')][normalize-space()='Save']");
    await page.waitForTimeout(2000);

    





})