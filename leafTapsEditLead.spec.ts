// Assignment: 2 Edit Lead
// http://leaftaps.com/opentaps/control/main			
// 1. Launch the browser
// 2. Enter the username
// 3. Enter the password
// 4. Click Login
// 5. Click CRM/SFA link
// 6. Click Leads link
// 7. Click on Create Lead
// 8. Enter company name
// 9. Enter first name
// 10.Enter last name
// 11.Click on Create Lead button  
// 12.Click Edit
// 13.Change the company name
// 14.Click Update
import{test, chromium} from '@playwright/test'

test('Edit Lead - Leaf Taps', async()=> {

const browser = await chromium.launch({channel:"chrome"});
const browserContext = await browser.newContext();
const page = await browserContext.newPage();
await page.goto ("http://leaftaps.com/opentaps/control/main");//To load the URL
await page.fill("#username", "demoSalesManager");//To enter the Login value
await page.fill("#password", "crmsfa");   //To enter the Password value 
await page.click(".decorativeSubmit");//To click on Login button
await page.click("//a[contains(text(),'CRM/SFA')]");//To click on CRM/SFA
await page.waitForTimeout (3000);
await page.click("//a[contains(text(),'Create Lead')]");//To click on Lead
await page.fill("#createLeadForm_companyName","XYZ Pvt Ltd");//To input Company Name
await page.fill("#createLeadForm_firstName", "James");//To input First Name
await page.fill("#createLeadForm_lastName", "Potter");//To input Last Name
await page.click(".smallSubmit");//Click on create lead button
await page.waitForTimeout(3000);
await page.locator("//a['@classname=subMenuButton' and text()='Edit']").click();
await page.locator("#updateLeadForm_companyName").clear();
await page.waitForTimeout(3000);
await page.locator("#updateLeadForm_companyName").fill("IBM");
await page.waitForTimeout(3000);
await page.click(".smallSubmit");
}
)
