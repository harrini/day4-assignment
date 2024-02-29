/*Test Steps:
Assignment: 1 Create Lead
1. Login to https://login.salesforce.com
2. Click on toggle menu button from the left corner
3. Click view All and click Sales from App Launcher
4. Click on Leads tab 
5. Click on New button
6. Select Salutation dropdown
7. Enter the Last Name
8. Enter the CompanyName 
9. Click Save and Verify Leads name created;*/

import{test, chromium}from "@playwright/test";

test("Create Lead", async({page})=> {

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
await page.locator("//p['@classname=slds-truncate'and text()='Sales']").click();//Click on Sales
console.log(await page.title());
await page.waitForTimeout(3000);
await page.getByRole('button' , { name : 'Leads'}).click();//To click on leads menu
await page.waitForTimeout(3000);
const clickNewLead = page.locator("//span['@classname=slds-truncate' and text()='New Lead']");
await clickNewLead.click();
await page.waitForTimeout(3000);    
await page.getByRole('combobox', {name:"salutation"}).click(); // To expand the salutation field  
await page.locator("//span[text()='Mr.']").click(); //To select the salutation
await page.getByPlaceholder('Last Name').fill("Saranya"); //To input Last Name
await page.locator("//label['@classname=slds-required'and text()='Company']").fill("XYZ Ltd");//To input Company Name
await page.locator("//button[@name='SaveEdit']").click();// To click on Save on Lead Creation.
console.log(await page.title());

}
)



