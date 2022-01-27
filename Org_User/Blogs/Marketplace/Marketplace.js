const { config } = require('chai');
const puppeteer = require('puppeteer'); 
const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');
describe("Test Suite - Marketplace",()=>{
    it.only("Marketplace - Browse Service & View Organization Details",async()=>{    
       //launching the headless browser
     const browser = await puppeteer.launch({ headless: false , defaultViewport: null, args:['--start-maximized'] });
     //Create instance of the browser
    const page = await browser.newPage();
    const recorder = new PuppeteerScreenRecorder(page,config);
    const fs = require('fs');
    function getDateString() {
        const date = new Date();
        //const timestamp = date.getHours();
        const year = date.getFullYear();
        const month = `${date.getMonth() + 1}`.padStart(2, '0');
        const day =`${date.getDate()}`.padStart(2, '0');
        const hours = `${date.getHours()}`.padStart(2, '0');
        const mins = `${date.getMinutes()}`.padStart(2, '0');
        //const time = `${timestamp}`;
        return `${year}${month}${day}_${hours}${mins}`;
      }
      await recorder.start(`Marketplace/Marketplace_Login_${getDateString()}.mp4`);

       // destination.txt will be created or overwritten by default.
      //  fs.copyFile('Marketplace/Marketplace_Login.mp4', `Marketplace_Login_${getDateString()}.mp4`, (err) => {
      //   if (err) throw err;
      //   console.log('OK! Marketplace_Login File Name generated with Current Date & Time');
      // });
    await page.setViewport({width: 1200, height: 720})
   //Navigate to the url
    await page.goto('http://localhost:4200/', { waitUntil: 'networkidle2',timeout: 50000} );
    //await page.type("//input[@placeholder='Email...']", "hskt@yopmail.com")
    //await page.type('#username', 'hskt@yopmail.com');
    await page.type('[type=email]', 'hskt@yopmail.com')
    await page.type('[type=password]', 'Admin@123');
    //await page.click("//button[normalize-space()='Lets Go']")
    await page.click('[type=submit]');
    await page.waitForNavigation();
    console.log('Logged in Successfully');
    const [selectRole] = await page.$x("//mat-select[@placeholder='Select Role']//div//div//span[contains(text(),'Select Role')]");
    await selectRole.click();
    const [userRole] = await page.$x("//mat-option[@role='option']//span[contains(text(),'Site Admin')]");
    await userRole.click();
    const [button] = await page.$x("//button[text()='Lets Go']");
    await button.click();
    console.log('Role Selected Successfully');
    await page1.waitForTimeout(5000);

    await page1.screenshot({
      path: `Marketplace/Marketplace_Dashboard_${getDateString()}.png`,
      fullPage: true  
  });
  // fs.copyFile('Marketplace/Marketplace_Dashboard.png', `Marketplace/Marketplace_Dashboard_${getDateString()}.png`, (err) => {
  //     if (err) throw err;
  //     console.log('OK! Therapeutics Image File Name generated with Current Date & Time');
  //   });
    await recorder.stop();

    //const [MpMenu] = await page.$x("//ul[li[a[i[contains(text(),'business')]]]]");
    //console.log(MpMenu);
    //const [MpMenu] = await page.$x("//p[contains(text(),'Marketplace')]");
    //console.log(MpMenu);

    const page1 = await browser.newPage();
    const recorder1 = new PuppeteerScreenRecorder(page1,config);
          await recorder1.start(`Marketplace/Marketplace_BrowseService_${getDateString()}.mp4`);
    // fs.copyFile('Marketplace/Marketplace_BrowseService.mp4', `Marketplace_BrowseService_${getDateString()}.mp4`, (err) => {
    //   if (err) throw err;
    //   console.log('OK! Marketplace_Browse Service File Name generated with Current Date & Time');
    // });
    await page1.setViewport({width: 1200, height: 720})
   //Navigate to the url
    await page1.goto('http://localhost:4200/rfps', { waitUntil: 'networkidle2',timeout: 50000} );
    console.log("Marketplace Page opened Successfully");

    //await page.click("#tried-test-cafe", {clickCount:1});

    const [Group] = await page1.$('[data-id=1]');
    await Group.click({clickCount: 1});

    const [Service] = await page1.$('[data-service_id=38]');
    await Service.click({clickCount: 1});

    await page1.type('[data-placeholder=Search Services]', 'Courier');
    const [SearchService] = await page1.$('[data-service_id=40]');
    await SearchService.click({clickCount: 1});

    const [Therapeutic] = await page1.$('[data-therapeutic_id="3"]');
    await Therapeutic.click({clickCount: 1});

    await page1.type('[data-placeholder=Search Therapeutic]', 'Neurology');
    const [SearchTherapeutic] = await page1.$('[data-therapeutic_id=1]');
    await SearchTherapeutic.click({clickCount: 1});

    const [Country] = await page1.$('[data-country_id=31]');
    await Country.click({clickCount: 1});

    await page1.type('[data-placeholder=Search by country]', 'Bangladesh');
    const [SearchCountry] = await page1.$('[data-country_id=19]');
    await SearchCountry.click({clickCount: 1});

    const [State] = await page1.$('[id=mat-checkbox-133]');
    await State.click({clickCount: 1});

    await page1.type('[data-placeholder=Search by State]', 'Bangladesh');
    const [SearchState] = await page1.$('[id=mat-checkbox-135]');
    await SearchState.click({clickCount: 1});

    await page1.type('[id=mat-input-3]', 'Billroth');
    const [SearchOrganization] = await page1.$('[id=mat-checkbox-135]');
    await SearchOrganization.click({clickCount: 1});

    await page1.click('[href=/rfps/rfps-browser-details/76/ec]');
    console.log("Organization Details page opened successfully");
    await page1.screenshot({
      path: `Marketplace/Organization_Details_${getDateString()}.png`,
      fullPage: true  
  });

    await page1.click('[id=mat-tab-label-1-0]');
    await page1.screenshot({
      path: `Marketplace/Organization_About_${getDateString()}.png`,
      fullPage: true  
  });

await page1.click('[id=mat-tab-label-1-1]');
await page1.screenshot({
  path: `Marketplace/Organization_Service_${getDateString()}.png`,
  fullPage: true  
});

await page1.click('[id=mat-tab-label-1-2]');
await page1.screenshot({
  path: `Marketplace/Organization_Therapeutics_${getDateString()}.png`,
  fullPage: true  
});

await page1.click('[id=mat-tab-label-1-3]');
await page1.screenshot({
  path: `Marketplace/Organization_Team_${getDateString()}.png`,
  fullPage: true  
});
await page1.waitForSelector('#button.btn.btn-primary');
await page1.click('#button.btn.btn-primary');
    //await page.click('#button.btn.btn-primary');
    // const [rfp] = await page.$x("//button[@class='btn btn-primary']");
    // await rfp.click();
    await page1.click('[ng-reflect-router-link="/rfps/rfps-list"]');
    
    await recorder1.stop();
await page1.close();
    await browser.close();
})

it.only("Marketplace - Create RFP after selecting Organization",async()=>{   
    //launching the headless browser
  const browser = await puppeteer.launch({ headless: false , defaultViewport: null, args:['--start-maximized'] });
  //Create instance of the browser
 const page = await browser.newPage();
 const recorder = new PuppeteerScreenRecorder(page,config);
 const fs = require('fs');
 function getDateString() {
     const date = new Date();
     //const timestamp = date.getHours();
     const year = date.getFullYear();
     const month = `${date.getMonth() + 1}`.padStart(2, '0');
     const day =`${date.getDate()}`.padStart(2, '0');
     const hours = `${date.getHours()}`.padStart(2, '0');
     const mins = `${date.getMinutes()}`.padStart(2, '0');
     //const time = `${timestamp}`;
     return `${year}${month}${day}_${hours}${mins}`;
   }
   await recorder.start(`Marketplace/Marketplace_Login_${getDateString()}.mp4`);
    // destination.txt will be created or overwritten by default.
  //   fs.copyFile('Marketplace/Marketplace_Login.mp4', `Marketplace_Login_${getDateString()}.mp4`, (err) => {
  //    if (err) throw err;
  //    console.log('OK! Marketplace_Login File Name generated with Current Date & Time');
  //  });
 await page.setViewport({width: 1200, height: 720})
//Navigate to the url
 await page.goto('http://localhost:4200/', { waitUntil: 'networkidle2',timeout: 50000} );
 //await page.type("//input[@placeholder='Email...']", "hskt@yopmail.com")
 //await page.type('#username', 'hskt@yopmail.com');
 await page.type('[type=email]', 'hskt@yopmail.com')
 await page.type('[type=password]', 'Admin@123');
 //await page.click("//button[normalize-space()='Lets Go']")
 await page.click('[type=submit]');
 await page.waitForNavigation();
 console.log('Logged in Successfully');
 const [selectRole] = await page.$x("//mat-select[@placeholder='Select Role']//div//div//span[contains(text(),'Select Role')]");
 await selectRole.click();
 const [userRole] = await page.$x("//mat-option[@role='option']//span[contains(text(),'Site Admin')]");
 await userRole.click();
 const [button] = await page.$x("//button[text()='Lets Go']");
 await button.click();
 console.log('Role Selected Successfully');
 await recorder.stop();

 //const [MpMenu] = await page.$x("//ul[li[a[i[contains(text(),'business')]]]]");
 //console.log(MpMenu);
 //const [MpMenu] = await page.$x("//p[contains(text(),'Marketplace')]");
 //console.log(MpMenu);

 const page1 = await browser.newPage();
 const recorder1 = new PuppeteerScreenRecorder(page1,config);
          await recorder1.start(`Marketplace/CreateRFP(1)_${getDateString()}.mp4`);
       // destination.txt will be created or overwritten by default.
    // fs.copyFile('Storefront/Storefront_CreateRFP(1).mp4', `Storefront_CreateRFP(1)_${getDateString()}.mp4`, (err) => {
    //     if (err) throw err;
    //     console.log('OK! Storefront_CreateRFP File Name generated with Current Date & Time');
    //   });
 await page1.setViewport({width: 1200, height: 720})
//Navigate to the url
 await page1.goto('http://localhost:4200/rfps', { waitUntil: 'networkidle2',timeout: 50000} );
 console.log("Marketplace Page opened Successfully");
 await page1.waitForTimeout(30000);
 const [Org1] = await page1.$('[id=unite_addOrg]');
 await Org1.click();
 const [Org2] = await page1.$('[id=unite_addOrg]');
 await Org2.click();
 const [Org3] = await page1.$('[id=unite_addOrg]');
 await Org3.click();
 console.log('Added three Organizations to create RFP');

await page1.click('[id=unite_removeOrg]');
console.log('Removed one Organization to create RFP');

await page1.click('[id=unite_createRequest]');
console.log('Start a Request Page opened Successfully');

await page1.type('[formcontrolname=requestTitle]', 'Sample Test RFP');
await page1.type('[formcontrolname=internalReference]', 'Sample Test internal Reference');
await page1.type('[formcontrolname=requestDescription]', 'Sponsors that are looking to hire a CRO to provide clinical trial services need to create and issue a request for proposal (RFP) describing the specific project they need to be carried out.');
//await page1.click('[id=unite_rfpUpload]');
const [rfpUpload] = await Promise.all([
  page1.waitForFileChooser(),
  page1.click("[id=rfpUpload]"),
  ]);
await rfpUpload.accept(['C:/Users/hp/Documents/Comparison.docx']);
console.log('Document Uploaded Successfully');

const [rfpUpload1] = await Promise.all([
  page1.waitForFileChooser(),
  page1.click("[id=rfpUpload]"),
  ]);
await rfpUpload1.accept(['C:/Users/hp/Downloads/Get_Started_With_Smallpdf.pdf']);
console.log('Document Uploaded Successfully');

await page1.click('[id=unite_RemoveDoc]');
console.log('One Uploaded Document Removed Successfully');

await page1.screenshot({
  path: `Marketplace/Create_RFP_${getDateString()}.png`,
  fullPage: true  
});

await page1.click('[id=unite_SendRFPbutton]');
console.log('RFP created Successfully');
await page1.waitForTimeout(5000);

// await page1.click('[id=unite_Savebutton]');
// console.log('RFP created Successfully');
// await page1.waitForTimeout(30000);

// await page1.click('[id=unite_Nextbutton]');

await page1.click('[id=unite_rfplistbutton]');
console.log('List of RFps page opened Successfully');
await page1.screenshot({
  path: `Marketplace/RFP_List_${getDateString()}.png`,
  fullPage: true  
});

await page1.click('[id=unite_ReqDetails]');
console.log('Request Overview page opened Successfully');
await page.screenshot({
  path: `Marketplace/Request_Overview_${getDateString()}.png`,
  fullPage: true  
});

await page1.click('[id=unite_addServicebutton]');

const [Org4] = await page1.$('[id=unite_addOrg]');
await Org4.click();

await page1.click('[id=unite_SendRFP]');
console.log('Proposal Sent Successfully');

await page1.click('[href=/rfps/rfps-request-details/557/813/ec/76/discussion]');
await page1.screenshot({
  path: `Marketplace/Request_Discussion_${getDateString()}.png`,
  fullPage: true  
});

await page1.type('[formcontrolname=message]', 'Hello! Accept the Proposal');

const [rfpUpload2] = await Promise.all([
  page1.waitForFileChooser(),
  page1.click("[id=rfpUpload]"),
  ]);
await rfpUpload2.accept(['C:/Users/hp/Downloads/Get_Started_With_Smallpdf.pdf']);
console.log('Document Uploaded Successfully');

await page1.click('[type=submit]');

const [text] = await page1.$('[class=card-title]');
console.log(text);

const [text1] = await page1.$('[class=card-category]');
console.log(text1);

await page1.click('[id=unite_BackReqDiscussion]');

await page1.click('[id=unite_ReqDetails]');
await page1.screenshot({
  path: `Marketplace/Request_Details_${getDateString()}.png`,
  fullPage: true  
});

await page1.waitForSelector('[id=unite_ViewAttachmentbutton]');
if (await page1.$('[id=unite_ViewAttachmentbutton]') !== null) {
  await page1.click('[id=unite_ViewAttachmentbutton]');
}
else {
  console.log('Element not Found');
}

await page1.waitForSelector('[id=unite_Downloadbutton]');
if (await page1.$('[id=unite_Downloadbutton]') !== null) {
  await page1.click('[id=unite_Downloadbutton]');
}
else {
  console.log('Element not Found');
}
await recorder1.stop();
await page1.close();
await browser.close();
})

it.only("Marketplace - Decline Order",async()=>{   
  //launching the headless browser
const browser = await puppeteer.launch({ headless: false , defaultViewport: null, args:['--start-maximized'] });
//Create instance of the browser
const page = await browser.newPage();
const recorder = new PuppeteerScreenRecorder(page,config);
const fs = require('fs');
function getDateString() {
   const date = new Date();
   //const timestamp = date.getHours();
   const year = date.getFullYear();
   const month = `${date.getMonth() + 1}`.padStart(2, '0');
   const day =`${date.getDate()}`.padStart(2, '0');
   const hours = `${date.getHours()}`.padStart(2, '0');
   const mins = `${date.getMinutes()}`.padStart(2, '0');
   //const time = `${timestamp}`;
   return `${year}${month}${day}_${hours}${mins}`;
 }
 await recorder.start(`Marketplace/Marketplace_Login_${getDateString()}.mp4`);

  // destination.txt will be created or overwritten by default.
//   fs.copyFile('Marketplace/Marketplace_Login.mp4', `Marketplace_Login_${getDateString()}.mp4`, (err) => {
//    if (err) throw err;
//    console.log('OK! Marketplace_Login File Name generated with Current Date & Time');
//  });
await page.setViewport({width: 1200, height: 720})
//Navigate to the url
await page.goto('http://localhost:4200/', { waitUntil: 'networkidle2',timeout: 50000} );
//await page.type("//input[@placeholder='Email...']", "hskt@yopmail.com")
//await page.type('#username', 'hskt@yopmail.com');
await page.type('[type=email]', 'hskt@yopmail.com')
await page.type('[type=password]', 'Admin@123');
//await page.click("//button[normalize-space()='Lets Go']")
await page.click('[type=submit]');
await page.waitForNavigation();
console.log('Logged in Successfully');
const [selectRole] = await page.$x("//mat-select[@placeholder='Select Role']//div//div//span[contains(text(),'Select Role')]");
await selectRole.click();
const [userRole] = await page.$x("//mat-option[@role='option']//span[contains(text(),'Site Admin')]");
await userRole.click();
const [button] = await page.$x("//button[text()='Lets Go']");
await button.click();
console.log('Role Selected Successfully');
await recorder.stop();

const page1 = await browser.newPage();
 const recorder1 = new PuppeteerScreenRecorder(page1,config);
          await recorder1.start(`Marketplace/Decline_request_${getDateString()}.mp4`);
       // destination.txt will be created or overwritten by default.
    // fs.copyFile('Storefront/Storefront_CreateRFP(1).mp4', `Storefront_CreateRFP(1)_${getDateString()}.mp4`, (err) => {
    //     if (err) throw err;
    //     console.log('OK! Storefront_CreateRFP File Name generated with Current Date & Time');
    //   });
 await page1.setViewport({width: 1200, height: 720})
//Navigate to the url
 await page1.goto('http://localhost:4200/rfps', { waitUntil: 'networkidle2',timeout: 50000} );
 console.log("Marketplace Page opened Successfully");
 await page1.waitForTimeout(30000);
 await page1.click('[id=unite_rfplistbutton]');

await page1.click('[id=mat-tab-label-0-1]');

await page1.click('[id=unite_OrderDetails]');

const [text2] = await page1.$('[class=card-title]');
console.log(text2);

await page1.type('[formcontrolname=message]', 'Hello! Accepted the Proposal');

const [rfpUpload3] = await Promise.all([
  page1.waitForFileChooser(),
  page1.click("[id=rfpUpload]"),
  ]);
await rfpUpload3.accept(['C:/Users/hp/Downloads/Get_Started_With_Smallpdf.pdf']);
console.log('Document Uploaded Successfully');

await page1.click('[id=unite_PostMsg]');

await page1.click('[id=unite_orderDecline]');

const [text3] = await page1.$('[id=unite_OrderDeclinedBadge]');
console.log(text3);
await page1.click('[href=/rfps/rfps-request-details/557/813/ec/76/discussion]');
await page1.screenshot({
  path: `Marketplace/Order_Declined_${getDateString()}.png`,
  fullPage: true  
});
})
// ************************************************************************************* //
it.only("Marketplace - Create quote",async()=>{   
  //launching the headless browser
const browser = await puppeteer.launch({ headless: false , defaultViewport: null, args:['--start-maximized'] });
//Create instance of the browser
const page = await browser.newPage();
const recorder = new PuppeteerScreenRecorder(page,config);
const fs = require('fs');
function getDateString() {
   const date = new Date();
   //const timestamp = date.getHours();
   const year = date.getFullYear();
   const month = `${date.getMonth() + 1}`.padStart(2, '0');
   const day =`${date.getDate()}`.padStart(2, '0');
   const hours = `${date.getHours()}`.padStart(2, '0');
   const mins = `${date.getMinutes()}`.padStart(2, '0');
   //const time = `${timestamp}`;
   return `${year}${month}${day}_${hours}${mins}`;
 }
 await recorder.start(`Marketplace/Marketplace_Login_${getDateString()}.mp4`);

  // destination.txt will be created or overwritten by default.
//   fs.copyFile('Marketplace/Marketplace_Login.mp4', `Marketplace_Login_${getDateString()}.mp4`, (err) => {
//    if (err) throw err;
//    console.log('OK! Marketplace_Login File Name generated with Current Date & Time');
//  });
await page.setViewport({width: 1200, height: 720})
//Navigate to the url
await page.goto('http://localhost:4200/', { waitUntil: 'networkidle2',timeout: 50000} );
//await page.type("//input[@placeholder='Email...']", "hskt@yopmail.com")
//await page.type('#username', 'hskt@yopmail.com');
await page.type('[type=email]', 'hskt@yopmail.com')
await page.type('[type=password]', 'Admin@123');
//await page.click("//button[normalize-space()='Lets Go']")
await page.click('[type=submit]');
await page.waitForNavigation();
console.log('Logged in Successfully');
const [selectRole] = await page.$x("//mat-select[@placeholder='Select Role']//div//div//span[contains(text(),'Select Role')]");
await selectRole.click();
const [userRole] = await page.$x("//mat-option[@role='option']//span[contains(text(),'Site Admin')]");
await userRole.click();
const [button] = await page.$x("//button[text()='Lets Go']");
await button.click();
console.log('Role Selected Successfully');
await recorder.stop();

const page1 = await browser.newPage();
 const recorder1 = new PuppeteerScreenRecorder(page1,config);
          await recorder1.start(`Marketplace/Create_Quote_${getDateString()}.mp4`);
       // destination.txt will be created or overwritten by default.
    // fs.copyFile('Storefront/Storefront_CreateRFP(1).mp4', `Storefront_CreateRFP(1)_${getDateString()}.mp4`, (err) => {
    //     if (err) throw err;
    //     console.log('OK! Storefront_CreateRFP File Name generated with Current Date & Time');
    //   });
 await page1.setViewport({width: 1200, height: 720})
//Navigate to the url
 await page1.goto('http://localhost:4200/rfps', { waitUntil: 'networkidle2',timeout: 50000} );
 console.log("Marketplace Page opened Successfully");
 await page1.waitForTimeout(30000);
 await page1.click('[id=unite_rfplistbutton]');

await page1.click('[id=mat-tab-label-0-1]');

await page1.click('[id=unite_OrderDetails]');

const [text1] = await page1.$('[class=card-title]');
console.log(text1);

await page1.type('[formcontrolname=message]', 'Hello! Accepted the Proposal');

const [rfpUpload] = await Promise.all([
  page1.waitForFileChooser(),
  page1.click("[id=rfpUpload]"),
  ]);
await rfpUpload.accept(['C:/Users/hp/Downloads/Get_Started_With_Smallpdf.pdf']);
console.log('Document Uploaded Successfully');

await page1.click('[id=unite_PostMsg]');

const [text2] = await page1.$('[class=card-title]');
console.log(text2);

const [text3] = await page1.$('[id=unite_AwaitingQuoteBadge]');
console.log(text3);
await page1.screenshot({
  path: `Marketplace/Awaiting_Quote_${getDateString()}.png`,
  fullPage: true  
});

await page1.click('[id=unite_CreateQuote]');

await page1.waitForSelector('[formcontrolname=item]');
if (await page1.$('[formcontrolname=item]') == null) {
  await page1.type('[formcontrolname=item]', '2');
}
else {
  console.log('Element Not found')
}

await page1.waitForSelector('[formcontrolname=price]');
if (await page1.$('[formcontrolname=price]') == null) {
  await page1.type('[formcontrolname=price]', '1000');
}
else {
  console.log('Element Not found')
}

await page1.waitForSelector('[formcontrolname=quantity]');
if (await page1.$('[formcontrolname=quantity]') == null) {
  await page1.type('[formcontrolname=quantity]', '1');
}
else{
  console.log('Element Not found')

}

await page1.click('[id=unite_deleteLineItem]');
await page1.screenshot({
  path: `Marketplace/Create_Quote(1)_${getDateString()}.png`,
  fullPage: true  
});

await page1.type('[id=projectDeliverables]', 'Sample Content for Creating Quote');

await page1.type('[formcontrolname=orderDuration]', '1');
await page1.click('[formcontrolname=orderDurationType]');
await page1.click('[value=day]');

await page1.click('[formcontrolname=quoteValidity]');
await page1.click('[value=30]');

await page1.screenshot({
  path: `Marketplace/Create_Quote(2)_${getDateString()}.png`,
  fullPage: true  
});

await page1.type('[id=textEditor]', 'Test Content for Creating Quote');

await page1.click('[formcontrolname=accountId]');
await page1.click('[id=mat-option-59]');
await page1.screenshot({
  path: `Marketplace/Create_Quote(3)_${getDateString()}.png`,
  fullPage: true  
});
await page1.click('[id=unite_NextStepbutton]');
console.log('Quote Created Successfully');

const [text1] = await page1.$('[class=card-header card-header-danger]');
console.log(text1);
await page1.screenshot({
  path: `Marketplace/Review_Quote_${getDateString()}.png`,
  fullPage: true  
});
await page1.click('[id=unite_sendQuote]');
})

//**************************************************************************** *//
it.only("Marketplace - Quote Amendments",async()=>{   
  //launching the headless browser
const browser = await puppeteer.launch({ headless: false , defaultViewport: null, args:['--start-maximized'] });
//Create instance of the browser
const page = await browser.newPage();
const recorder = new PuppeteerScreenRecorder(page,config);
const fs = require('fs');
function getDateString() {
   const date = new Date();
   //const timestamp = date.getHours();
   const year = date.getFullYear();
   const month = `${date.getMonth() + 1}`.padStart(2, '0');
   const day =`${date.getDate()}`.padStart(2, '0');
   const hours = `${date.getHours()}`.padStart(2, '0');
   const mins = `${date.getMinutes()}`.padStart(2, '0');
   //const time = `${timestamp}`;
   return `${year}${month}${day}_${hours}${mins}`;
 }
 await recorder.start(`Marketplace/Marketplace_Login_${getDateString()}.mp4`);

  // destination.txt will be created or overwritten by default.
//   fs.copyFile('Marketplace/Marketplace_Login.mp4', `Marketplace_Login_${getDateString()}.mp4`, (err) => {
//    if (err) throw err;
//    console.log('OK! Marketplace_Login File Name generated with Current Date & Time');
//  });
await page.setViewport({width: 1200, height: 720})
//Navigate to the url
await page.goto('http://localhost:4200/', { waitUntil: 'networkidle2',timeout: 50000} );
//await page.type("//input[@placeholder='Email...']", "hskt@yopmail.com")
//await page.type('#username', 'hskt@yopmail.com');
await page.type('[type=email]', 'hskt@yopmail.com')
await page.type('[type=password]', 'Admin@123');
//await page.click("//button[normalize-space()='Lets Go']")
await page.click('[type=submit]');
await page.waitForNavigation();
console.log('Logged in Successfully');
const [selectRole] = await page.$x("//mat-select[@placeholder='Select Role']//div//div//span[contains(text(),'Select Role')]");
await selectRole.click();
const [userRole] = await page.$x("//mat-option[@role='option']//span[contains(text(),'Site Admin')]");
await userRole.click();
const [button] = await page.$x("//button[text()='Lets Go']");
await button.click();
console.log('Role Selected Successfully');
await recorder.stop();

const page1 = await browser.newPage();
 const recorder1 = new PuppeteerScreenRecorder(page1,config);
          await recorder1.start(`Marketplace/Quote_Amendment_${getDateString()}.mp4`);
       // destination.txt will be created or overwritten by default.
    // fs.copyFile('Storefront/Storefront_CreateRFP(1).mp4', `Storefront_CreateRFP(1)_${getDateString()}.mp4`, (err) => {
    //     if (err) throw err;
    //     console.log('OK! Storefront_CreateRFP File Name generated with Current Date & Time');
    //   });
 await page1.setViewport({width: 1200, height: 720})
//Navigate to the url
 await page1.goto('http://localhost:4200/rfps', { waitUntil: 'networkidle2',timeout: 50000} );
 console.log("Marketplace Page opened Successfully");
 await page1.waitForTimeout(30000);
 await page1.click('[id=unite_rfplistbutton]');

 await page1.click('[id=unite_ReqDetails]');
console.log('Request Overview page opened Successfully');

await page1.click('[href=/rfps/rfps-request-details/557/813/ec/76/discussion]');
await page1.screenshot({
  path: `Marketplace/Request_Quote_Details_${getDateString()}.png`,
  fullPage: true  
});

await page1.click('[id=unite_ViewQuote]');
await page1.screenshot({
  path: `Marketplace/View_Quote_${getDateString()}.png`,
  fullPage: true  
});

await page1.click('[printsectionid=contentToConvert]');
await page1.click('[id=unite_closeViewQuote]');

await page1.click('[id=unite_QuoteAmendment]');

await page1.type('[id=amendmentReason]', 'Test Reason for Amendment');

await page1.click('[id=unite_SubmitAmendment]');
await page1.screenshot({
  path: `Marketplace/Amendment_Quote_${getDateString()}.png`,
  fullPage: true  
});
await page1.click('[id=unite_QuoteAmendment]');
await page1.click('[id=unite_CloseAmendment]');
await recorder1.stop();
await page1.close();
await browser.close();
})

//***************************************************************************************** *//
it.only("Marketplace - Edit Quote ",async()=>{   
  //launching the headless browser
const browser = await puppeteer.launch({ headless: false , defaultViewport: null, args:['--start-maximized'] });
//Create instance of the browser
const page = await browser.newPage();
const recorder = new PuppeteerScreenRecorder(page,config);
const fs = require('fs');
function getDateString() {
   const date = new Date();
   //const timestamp = date.getHours();
   const year = date.getFullYear();
   const month = `${date.getMonth() + 1}`.padStart(2, '0');
   const day =`${date.getDate()}`.padStart(2, '0');
   const hours = `${date.getHours()}`.padStart(2, '0');
   const mins = `${date.getMinutes()}`.padStart(2, '0');
   //const time = `${timestamp}`;
   return `${year}${month}${day}_${hours}${mins}`;
 }
 await recorder.start(`Marketplace/Marketplace_Login_${getDateString()}.mp4`);

  // destination.txt will be created or overwritten by default.
//   fs.copyFile('Marketplace/Marketplace_Login.mp4', `Marketplace_Login_${getDateString()}.mp4`, (err) => {
//    if (err) throw err;
//    console.log('OK! Marketplace_Login File Name generated with Current Date & Time');
//  });
await page.setViewport({width: 1200, height: 720})
//Navigate to the url
await page.goto('http://localhost:4200/', { waitUntil: 'networkidle2',timeout: 50000} );
//await page.type("//input[@placeholder='Email...']", "hskt@yopmail.com")
//await page.type('#username', 'hskt@yopmail.com');
await page.type('[type=email]', 'hskt@yopmail.com')
await page.type('[type=password]', 'Admin@123');
//await page.click("//button[normalize-space()='Lets Go']")
await page.click('[type=submit]');
await page.waitForNavigation();
console.log('Logged in Successfully');
const [selectRole] = await page.$x("//mat-select[@placeholder='Select Role']//div//div//span[contains(text(),'Select Role')]");
await selectRole.click();
const [userRole] = await page.$x("//mat-option[@role='option']//span[contains(text(),'Site Admin')]");
await userRole.click();
const [button] = await page.$x("//button[text()='Lets Go']");
await button.click();
console.log('Role Selected Successfully');
await recorder.stop();

const page1 = await browser.newPage();
 const recorder1 = new PuppeteerScreenRecorder(page1,config);
          await recorder1.start(`Marketplace/Edit_Quote_${getDateString()}.mp4`);
       // destination.txt will be created or overwritten by default.
    // fs.copyFile('Storefront/Storefront_CreateRFP(1).mp4', `Storefront_CreateRFP(1)_${getDateString()}.mp4`, (err) => {
    //     if (err) throw err;
    //     console.log('OK! Storefront_CreateRFP File Name generated with Current Date & Time');
    //   });
 await page1.setViewport({width: 1200, height: 720})
//Navigate to the url
 await page1.goto('http://localhost:4200/rfps', { waitUntil: 'networkidle2',timeout: 50000} );
 console.log("Marketplace Page opened Successfully");
 await page1.waitForTimeout(30000);
 await page1.click('[id=unite_rfplistbutton]');

 await page1.click('[id=mat-tab-label-0-1]');

 await page1.click('[id=unite_OrderDetails]');

 await page1.click('[id=unite_EditQuote]');

 await page1.waitForSelector('[formcontrolname=item]');
if (await page1.$('[formcontrolname=item]') !== null) {
  const [item] = await page1.$('[formcontrolname=item]');
  await item.click({clickCount: 1});
  await page1.keyboard.press('Backspace');
  await item.type("6");
}
else {
  console.log('Element Not found')
}

await page1.waitForSelector('[formcontrolname=price]');
if (await page1.$('[formcontrolname=price]') !== null) {
  const [price] = await page1.$('[formcontrolname=price]');
  await price.click({clickCount: 4});
  await page1.keyboard.press('Backspace');
  await price.type("60");}
else {
  console.log('Element Not found')
}

await page1.waitForSelector('[formcontrolname=quantity]');
if (await page1.$('[formcontrolname=quantity]') == null) {
  const [quantity] = await page1.$('[formcontrolname=quantity]');
  await quantity.click({clickCount: 1});
  await page1.keyboard.press('Backspace');
  await quantity.type("6");}
else{
  console.log('Element Not found')

}

await page1.click('[id=unite_deleteLineItem]');
await page1.screenshot({
  path: `Marketplace/Edit_Quote(1)_${getDateString()}.png`,
  fullPage: true  
});

//await page1.type('[id=projectDeliverables]', 'Sample Content for Creating Quote');
await page1.waitForSelector('[id=projectDeliverables]');
if (await page1.$('[id=projectDeliverables]') !== null) {
  await page1.focus('[id=projectDeliverables]');
          await page1.keyboard.down('Control');
          await page1.keyboard.press('A');
          await page1.keyboard.up('Control');
          await page1.keyboard.press('Backspace');
          await page1.keyboard.type('Edit Sample Content for Creating Quote');}
else{
  console.log('Element Not found')

}

//await page1.type('[formcontrolname=orderDuration]', '1');
await page1.waitForSelector('[formcontrolname=orderDuration]');
if (await page1.$('[formcontrolname=orderDuration]') !== null) {
  await page1.focus('[formcontrolname=orderDuration]');
          await page1.keyboard.down('Control');
          await page1.keyboard.press('A');
          await page1.keyboard.up('Control');
          await page1.keyboard.press('Backspace');
          await page1.keyboard.type('2');}
else{
  console.log('Element Not found')

}

await page1.click('[formcontrolname=orderDurationType]');

await page1.click('[value=month]');

await page1.click('[formcontrolname=quoteValidity]');
await page1.click('[value=60]');
await page1.screenshot({
  path: `Marketplace/Edit_Quote(2)_${getDateString()}.png`,
  fullPage: true  
});

//await page1.type('[id=textEditor]', 'Test Content for Creating Quote');
await page1.waitForSelector('[id=textEditor]');
if (await page1.$('[id=textEditor]') !== null) {
  await page1.focus('[id=textEditor]');
          await page1.keyboard.down('Control');
          await page1.keyboard.press('A');
          await page1.keyboard.up('Control');
          await page1.keyboard.press('Backspace');
          await page1.keyboard.type('Edit Test Content for Creating Quote');}
else{
  console.log('Element Not found')
}

await page1.click('[formcontrolname=accountId]');
await page1.click('[id=mat-option-59]');
await page1.screenshot({
  path: `Marketplace/Edit_Quote(3)_${getDateString()}.png`,
  fullPage: true  
});


await page1.click('[id=unite_NextStepbutton]');
console.log('Quote Created Successfully');

const [text1] = await page1.$('[class=card-header card-header-danger]');
console.log(text1);

await page1.click('[id=unite_sendQuote]');
console.log('Quote Sent Successfully');
await recorder1.stop();
await page1.close();
await browser.close();
  })

  it.only("Marketplace - Accept Quote",async()=>{   
    //launching the headless browser
  const browser = await puppeteer.launch({ headless: false , defaultViewport: null, args:['--start-maximized'] });
  //Create instance of the browser
  const page = await browser.newPage();
  const recorder = new PuppeteerScreenRecorder(page,config);
  const fs = require('fs');
  function getDateString() {
     const date = new Date();
     //const timestamp = date.getHours();
     const year = date.getFullYear();
     const month = `${date.getMonth() + 1}`.padStart(2, '0');
     const day =`${date.getDate()}`.padStart(2, '0');
     const hours = `${date.getHours()}`.padStart(2, '0');
     const mins = `${date.getMinutes()}`.padStart(2, '0');
     //const time = `${timestamp}`;
     return `${year}${month}${day}_${hours}${mins}`;
   }
   await recorder.start(`Marketplace/Marketplace_Login_${getDateString()}.mp4`);

    // destination.txt will be created or overwritten by default.
  //   fs.copyFile('Marketplace/Marketplace_Login.mp4', `Marketplace_Login_${getDateString()}.mp4`, (err) => {
  //    if (err) throw err;
  //    console.log('OK! Marketplace_Login File Name generated with Current Date & Time');
  //  });
  await page.setViewport({width: 1200, height: 720})
  //Navigate to the url
  await page.goto('http://localhost:4200/', { waitUntil: 'networkidle2',timeout: 50000} );
  //await page.type("//input[@placeholder='Email...']", "hskt@yopmail.com")
  //await page.type('#username', 'hskt@yopmail.com');
  await page.type('[type=email]', 'hskt@yopmail.com')
  await page.type('[type=password]', 'Admin@123');
  //await page.click("//button[normalize-space()='Lets Go']")
  await page.click('[type=submit]');
  await page.waitForNavigation();
  console.log('Logged in Successfully');
  const [selectRole] = await page.$x("//mat-select[@placeholder='Select Role']//div//div//span[contains(text(),'Select Role')]");
  await selectRole.click();
  const [userRole] = await page.$x("//mat-option[@role='option']//span[contains(text(),'Site Admin')]");
  await userRole.click();
  const [button] = await page.$x("//button[text()='Lets Go']");
  await button.click();
  console.log('Role Selected Successfully');
  await recorder.stop();
  
  const page1 = await browser.newPage();
   const recorder1 = new PuppeteerScreenRecorder(page1,config);
   await recorder1.start(`Marketplace/Accept_Quote_${getDateString()}.mp4`);
   // destination.txt will be created or overwritten by default.
      // fs.copyFile('Storefront/Storefront_CreateRFP(1).mp4', `Storefront_CreateRFP(1)_${getDateString()}.mp4`, (err) => {
      //     if (err) throw err;
      //     console.log('OK! Storefront_CreateRFP File Name generated with Current Date & Time');
      //   });
   await page1.setViewport({width: 1200, height: 720})
  //Navigate to the url
   await page1.goto('http://localhost:4200/rfps', { waitUntil: 'networkidle2',timeout: 50000} );
   console.log("Marketplace Page opened Successfully");
   await page1.waitForTimeout(30000);
   await page1.click('[id=unite_rfplistbutton]');
  
   await page1.click('[id=unite_ReqDetails]');
  console.log('Request Overview page opened Successfully');
  
  await page1.click('[href=/rfps/rfps-request-details/557/813/ec/76/discussion]');
  
  await page1.click('[id=unite_ViewQuote]');
  
  await page1.click('[printsectionid=contentToConvert]');
  await page1.click('[id=unite_closeViewQuote]');
  
  await page1.click('[id=unite_AcceptQuote]');
  await page1.screenshot({
    path: `Marketplace/Accept_Quote_${getDateString()}.png`,
    fullPage: true  
  });
  await recorder1.stop();
await page1.close();
await browser.close();
      })
//***************************************************************** *//
it.only("Marketplace - Create RFP ",async()=>{   
  //launching the headless browser
const browser = await puppeteer.launch({ headless: false , defaultViewport: null, args:['--start-maximized'] });
//Create instance of the browser
const page = await browser.newPage();
const recorder = new PuppeteerScreenRecorder(page,config);
const fs = require('fs');
function getDateString() {
   const date = new Date();
   //const timestamp = date.getHours();
   const year = date.getFullYear();
   const month = `${date.getMonth() + 1}`.padStart(2, '0');
   const day =`${date.getDate()}`.padStart(2, '0');
   const hours = `${date.getHours()}`.padStart(2, '0');
   const mins = `${date.getMinutes()}`.padStart(2, '0');
   //const time = `${timestamp}`;
   return `${year}${month}${day}_${hours}${mins}`;
 }
 await recorder.start(`Marketplace/Marketplace_Login_${getDateString()}.mp4`);

  // destination.txt will be created or overwritten by default.
//   fs.copyFile('Marketplace/Marketplace_Login.mp4', `Marketplace_Login_${getDateString()}.mp4`, (err) => {
//    if (err) throw err;
//    console.log('OK! Marketplace_Login File Name generated with Current Date & Time');
//  });
await page.setViewport({width: 1200, height: 720})
//Navigate to the url
await page.goto('http://localhost:4200/', { waitUntil: 'networkidle2',timeout: 50000} );
//await page.type("//input[@placeholder='Email...']", "hskt@yopmail.com")
//await page.type('#username', 'hskt@yopmail.com');
await page.type('[type=email]', 'hskt@yopmail.com')
await page.type('[type=password]', 'Admin@123');
//await page.click("//button[normalize-space()='Lets Go']")
await page.click('[type=submit]');
await page.waitForNavigation();
console.log('Logged in Successfully');
const [selectRole] = await page.$x("//mat-select[@placeholder='Select Role']//div//div//span[contains(text(),'Select Role')]");
await selectRole.click();
const [userRole] = await page.$x("//mat-option[@role='option']//span[contains(text(),'Site Admin')]");
await userRole.click();
const [button] = await page.$x("//button[text()='Lets Go']");
await button.click();
console.log('Role Selected Successfully');
await recorder.stop();

//const [MpMenu] = await page.$x("//ul[li[a[i[contains(text(),'business')]]]]");
//console.log(MpMenu);
//const [MpMenu] = await page.$x("//p[contains(text(),'Marketplace')]");
//console.log(MpMenu);

const page1 = await browser.newPage();
const recorder1 = new PuppeteerScreenRecorder(page1,config);
        await recorder1.start(`Marketplace/Create_RFP(2)_${getDateString()}.mp4`);
     // destination.txt will be created or overwritten by default.
  // fs.copyFile('Storefront/Storefront_CreateRFP(1).mp4', `Marketplace/Accept_Quote_${getDateString()}.mp4`, (err) => {
  //     if (err) throw err;
  //     console.log('OK! Storefront_CreateRFP File Name generated with Current Date & Time');
  //   });
await page1.setViewport({width: 1200, height: 720})
//Navigate to the url
await page1.goto('http://localhost:4200/rfps', { waitUntil: 'networkidle2',timeout: 50000} );
console.log("Marketplace Page opened Successfully");
await page1.waitForTimeout(30000);

await page1.click('[id=unite_rfplistbutton]');

await page1.click('[id=unite_CreateRFP]');

await page1.type('[formcontrolname=requestTitle]', 'Sample Test RFP');
await page1.type('[formcontrolname=internalReference]', 'Sample Test internal Reference');
await page1.type('[formcontrolname=requestDescription]', 'Sponsors that are looking to hire a CRO to provide clinical trial services need to create and issue a request for proposal (RFP) describing the specific project they need to be carried out.');
//await page1.click('[id=unite_rfpUpload]');
const [rfpUpload] = await Promise.all([
page1.waitForFileChooser(),
page1.click("[id=rfpUpload]"),
]);
await rfpUpload.accept(['C:/Users/hp/Documents/Comparison.docx']);
console.log('Document Uploaded Successfully');

const [rfpUpload1] = await Promise.all([
page1.waitForFileChooser(),
page1.click("[id=rfpUpload]"),
]);
await rfpUpload1.accept(['C:/Users/hp/Downloads/Get_Started_With_Smallpdf.pdf']);
console.log('Document Uploaded Successfully');

await page1.click('[id=unite_RemoveDoc]');
console.log('One Uploaded Document Removed Successfully');

await page1.click('[id=unite_SendRFPbutton]');
console.log('RFP created Successfully');
await page1.waitForTimeout(5000);

await page1.click('[id=unite_Savebutton]');
console.log('RFP created Successfully');
await page1.waitForTimeout(30000);

await page1.click('[id=unite_Nextbutton]');
const [Org1] = await page1.$('[id=unite_addOrg]');
await Org1.click();
const [Org2] = await page1.$('[id=unite_addOrg]');
await Org2.click();
const [Org3] = await page1.$('[id=unite_addOrg]');
await Org3.click();
console.log('Added three Organizations to create RFP');

await page1.click('[id=unite_removeOrg]');
console.log('Removed one Organization to create RFP');

await page1.click('[id=unite_createRequest]');
console.log('Start a Request Page opened Successfully');
await page1.click('[id=unite_rfplistbutton]');
console.log('List of RFps page opened Successfully');

await page1.click('[id=unite_ReqDetails]');
console.log('Request Overview page opened Successfully');

await page1.click('[id=unite_addServicebutton]');

const [Org4] = await page1.$('[id=unite_addOrg]');
await Org4.click();

await page1.click('[id=unite_SendRFP]');
console.log('Proposal Sent Successfully');

await page1.click('[href=/rfps/rfps-request-details/557/813/ec/76/discussion]');

await page1.type('[formcontrolname=message]', 'Hello! Accept the Proposal');

const [rfpUpload2] = await Promise.all([
page1.waitForFileChooser(),
page1.click("[id=rfpUpload]"),
]);
await rfpUpload2.accept(['C:/Users/hp/Downloads/Get_Started_With_Smallpdf.pdf']);
console.log('Document Uploaded Successfully');

await page1.click('[type=submit]');

const [text] = await page1.$('[class=card-title]');
console.log(text);

const [text1] = await page1.$('[class=card-category]');
console.log(text1);

await page1.click('[id=unite_BackReqDiscussion]');

await page1.click('[id=unite_ReqDetails]');

await page1.waitForSelector('[id=unite_ViewAttachmentbutton]');
if (await page1.$('[id=unite_ViewAttachmentbutton]') !== null) {
await page1.click('[id=unite_ViewAttachmentbutton]');
}
else {
console.log('Element not Found');
}

await page1.waitForSelector('[id=unite_Downloadbutton]');
if (await page1.$('[id=unite_Downloadbutton]') !== null) {
await page1.click('[id=unite_Downloadbutton]');
}
else {
console.log('Element not Found');
}
await recorder1.stop();
await page1.close();
await browser.close();
})
//**********************************************************************************//
it.only("Marketplace - Clone RFP ",async()=>{   
  //launching the headless browser
const browser = await puppeteer.launch({ headless: false , defaultViewport: null, args:['--start-maximized'] });
//Create instance of the browser
const page = await browser.newPage();
const recorder = new PuppeteerScreenRecorder(page,config);
const fs = require('fs');
function getDateString() {
   const date = new Date();
   //const timestamp = date.getHours();
   const year = date.getFullYear();
   const month = `${date.getMonth() + 1}`.padStart(2, '0');
   const day =`${date.getDate()}`.padStart(2, '0');
   const hours = `${date.getHours()}`.padStart(2, '0');
   const mins = `${date.getMinutes()}`.padStart(2, '0');
   //const time = `${timestamp}`;
   return `${year}${month}${day}_${hours}${mins}`;
 }
 await recorder.start(`Marketplace/Marketplace_Login_${getDateString()}.mp4`);

  // destination.txt will be created or overwritten by default.
//   fs.copyFile('Marketplace/Marketplace_Login.mp4', `Marketplace_Login_${getDateString()}.mp4`, (err) => {
//    if (err) throw err;
//    console.log('OK! Marketplace_Login File Name generated with Current Date & Time');
//  });
await page.setViewport({width: 1200, height: 720})
//Navigate to the url
await page.goto('http://localhost:4200/', { waitUntil: 'networkidle2',timeout: 50000} );
//await page.type("//input[@placeholder='Email...']", "hskt@yopmail.com")
//await page.type('#username', 'hskt@yopmail.com');
await page.type('[type=email]', 'hskt@yopmail.com')
await page.type('[type=password]', 'Admin@123');
//await page.click("//button[normalize-space()='Lets Go']")
await page.click('[type=submit]');
await page.waitForNavigation();
console.log('Logged in Successfully');
const [selectRole] = await page.$x("//mat-select[@placeholder='Select Role']//div//div//span[contains(text(),'Select Role')]");
await selectRole.click();
const [userRole] = await page.$x("//mat-option[@role='option']//span[contains(text(),'Site Admin')]");
await userRole.click();
const [button] = await page.$x("//button[text()='Lets Go']");
await button.click();
console.log('Role Selected Successfully');
await recorder.stop();

//const [MpMenu] = await page.$x("//ul[li[a[i[contains(text(),'business')]]]]");
//console.log(MpMenu);
//const [MpMenu] = await page.$x("//p[contains(text(),'Marketplace')]");
//console.log(MpMenu);

const page1 = await browser.newPage();
const recorder1 = new PuppeteerScreenRecorder(page1,config);
        await recorder1.start(`Marketplace/Clone_RFP_${getDateString()}.mp4`);
     // destination.txt will be created or overwritten by default.
  // fs.copyFile('Storefront/Storefront_CreateRFP(1).mp4', `Storefront_CreateRFP(1)_${getDateString()}.mp4`, (err) => {
  //     if (err) throw err;
  //     console.log('OK! Storefront_CreateRFP File Name generated with Current Date & Time');
  //   });
await page1.setViewport({width: 1200, height: 720})
//Navigate to the url
await page1.goto('http://localhost:4200/rfps', { waitUntil: 'networkidle2',timeout: 50000} );
console.log("Marketplace Page opened Successfully");
await page1.waitForTimeout(30000);
await page1.click('[id=unite_rfplistbutton]');
await page1.click('[id=unite_CloneRFP]');
await page1.type('[name=requestName]', 'Sample Clone RFP');
await page1.click('[id=unite_SaveClone]');

await page1.click('[id=unite_Savebutton]');
console.log('RFP created Successfully');
await page1.waitForTimeout(30000);

await page1.click('[id=unite_Nextbutton]');
const [Org1] = await page1.$('[id=unite_addOrg]');
await Org1.click();
const [Org2] = await page1.$('[id=unite_addOrg]');
await Org2.click();
const [Org3] = await page1.$('[id=unite_addOrg]');
await Org3.click();
console.log('Added three Organizations to create RFP');

await page1.click('[id=unite_removeOrg]');
console.log('Removed one Organization to create RFP');

await page1.click('[id=unite_createRequest]');
console.log('Start a Request Page opened Successfully');
await page1.click('[id=unite_rfplistbutton]');
console.log('List of RFps page opened Successfully');

await page1.click('[id=unite_ReqDetails]');
console.log('Request Overview page opened Successfully');

await page1.click('[id=unite_addServicebutton]');

const [Org4] = await page1.$('[id=unite_addOrg]');
await Org4.click();

await page1.click('[id=unite_SendRFP]');
console.log('Proposal Sent Successfully');

await page1.click('[href=/rfps/rfps-request-details/557/813/ec/76/discussion]');

await page1.type('[formcontrolname=message]', 'Hello! Accept the Proposal');

const [rfpUpload2] = await Promise.all([
page1.waitForFileChooser(),
page1.click("[id=rfpUpload]"),
]);
await rfpUpload2.accept(['C:/Users/hp/Downloads/Get_Started_With_Smallpdf.pdf']);
console.log('Document Uploaded Successfully');

await page1.click('[type=submit]');

const [text] = await page1.$('[class=card-title]');
console.log(text);

const [text1] = await page1.$('[class=card-category]');
console.log(text1);

await page1.click('[id=unite_BackReqDiscussion]');

await page1.click('[id=unite_ReqDetails]');

await page1.waitForSelector('[id=unite_ViewAttachmentbutton]');
if (await page1.$('[id=unite_ViewAttachmentbutton]') !== null) {
await page1.click('[id=unite_ViewAttachmentbutton]');
}
else {
console.log('Element not Found');
}

await page1.waitForSelector('[id=unite_Downloadbutton]');
if (await page1.$('[id=unite_Downloadbutton]') !== null) {
await page1.click('[id=unite_Downloadbutton]');
}
else {
console.log('Element not Found');
}
await recorder1.stop();
await page1.close();
await browser.close();
})
})