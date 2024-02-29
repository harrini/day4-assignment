/*Assignment: 4 Edit Individuals
Test Steps:
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher 
4. Click on the Individuals tab 
5. Search the Individuals last name
6. Click on the Dropdown icon and Select Edit
7. Select Salutation as 'Mr'
8. Now enter the first name
9. Click on Save and Verify the first name 
*/
import{test,chromium} from '@playwright/test';

test('Edit Individuals' , async()=>{

    const browser = await chromium.launch({channel : "chrome"});
    const browserContext = await browser.newContext();
    const page = await browser.newPage();

    await page.goto("https://login.salesforce.com") //Go to Login URL
    await page.fill("#username" , "harrini.rp@yahoo.com");
    await page.fill("#password" , "Shiridi@1288");
    await page.click("#Login");
    await page.waitForTimeout(3000);
    await page.click(".slds-icon-waffle");//Click on Applauncher from the left panel
    await page.waitForTimeout(3000);
    const clickViewAll = page.getByText("View All"); //To click on View All
    await page.waitForSelector('button');
    await clickViewAll.click();
    await page.waitForTimeout(3000);
    await page.click("//p[text()='Individuals']");//Click on Individuals
    await page.waitForTimeout(3000);
    const search = await page.getByPlaceholder("Search this list...");//To Search the value in the list
    await search.fill("Nicholas");
    await search.press('Enter');
    await page.waitForTimeout(3000);
    await page.click("//a[contains(@class,'slds-truncate outputLookupLink')]"); //To click on the created individual
    await page.click("//a[@title='Edit']"); // To click on the Edit button
    await page.click("//a[@class='select']");//To expand the Salutation
    await page.locator("//a['@classname= select'and text()='Mr.']").click();
    await page.getByPlaceholder("First Name").fill("Mathew");
    await page.click("//button[@title='Save']//span[contains(@class,'label bBody')][normalize-space()='Save']");
    await page.waitForTimeout(2000);

}
)