const { config } = require('chai');
const puppeteer = require('puppeteer'); 
const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');
//import fullPageScreenshot from 'puppeteer-full-page-screenshot';
//var puppeteerfullPageScreenshot = require ('puppeteer-full-page-screenshot');

describe("Test Suite - Tickets",()=>{
    it.only("Support Team",async()=>{
        //launching the headless browser
     const browser = await puppeteer.launch({ headless: false , defaultViewport: null, args:['--start-maximized'] });
     //Create instance of the browser
    const page = await browser.newPage();
    const recorder = new PuppeteerScreenRecorder(page,config);
    const fs = require('fs');
    function getDateString() {
        const date = new Date();
        const year = date.getFullYear();
        const month = `${date.getMonth() + 1}`.padStart(2, '0');
        const day =`${date.getDate()}`.padStart(2, '0');
        const hours = `${date.getHours()}`.padStart(2, '0');
        const mins = `${date.getMinutes()}`.padStart(2, '0');
        return `${year}${month}${day}_${hours}${mins}`;
      }
      await recorder.start(`Tickets/Login_${getDateString()}.mp4`);

    await page.setViewport({width: 1200, height: 720})
   //Navigate to the url
    await page.goto('http://localhost:4200/', { waitUntil: 'networkidle2',timeout: 50000} );

    await page.type('[type=email]', 'sage@assaycr.com')
    await page.type('[type=password]', 'Admin@123');

    await page.click('[type=submit]');
    await page.waitForNavigation();
    console.log('Logged in Successfully');

    const [selectRole] = await page.$('[name=role]');
    await selectRole.click();
    const [userRole] = await page.$x('[role=option]');
    await userRole.click();
    const [button] = await page.$x("//button[text()='Lets Go']");
    await button.click();
    console.log('Role Selected Successfully');
    await page.waitForTimeout(10000);

    await page.screenshot({
        path: `Tickets/Dashboard_${getDateString()}.png`,
        fullPage: true  
    });
   
    await recorder.stop();

    const page1 = await browser.newPage();
    const recorder1 = new PuppeteerScreenRecorder(page1,config);
    await recorder1.start(`Tickets/Manage_Tickets_${getDateString()}.mp4`);
    await page1.setViewport({width: 1200, height: 720})
   //Navigate to the url
    await page1.goto('http://localhost:4200/tickets', { waitUntil: 'networkidle2',timeout: 50000} );
    console.log("List of Tickets Page opened Successfully");

    await page1.click('[id=unite_supportTeam]');
    console.log("List of Support Team Users Page opened Successfully");

    await page1.click('[id=unite_addUser]');
    
    await page1.click('[formcontrolname=title]');
    await page1.click('[ng-reflect-value=Mr]');
    
    await page1.type('[formcontrolname=firstName]', 'Bhavani');
    await page1.type('[formcontrolname=middleName]', 'Raj');
    await page1.type('[formcontrolname=lastName]', 'Rajendran');

    await page1.click('[formcontrolname=profileId]');
    await page1.click('[ng-reflect-value=3]');

    await page1.type('[type=email]', 'br1@gmail.com');
    await page1.type('[formcontrolname=phoneNo]', '9988776655');
    await page1.type('[formcontrolname=address1]', 'No. 37');
    await page1.screenshot({
      path: `Tickets/Create_User(1)_${getDateString()}.png`,
      fullPage: true  
    });
    await page1.click('[id=unite_UserCountry]');
    await page1.click('[ng-reflect-value=19]');

    await page1.click('[id=unite_UserState]');
    await page1.click('[ng-reflect-value=759]');

    await page1.click('[id=unite_UserCity]');
    await page1.click('[ng-reflect-value=8487]');

    await page1.type('[id=pincode]', '600007');
    await page1.screenshot({
      path: `Tickets/Create_User(2)_${getDateString()}.png`,
      fullPage: true  
    });

    await page1.click('[id=unite_submitUser]');

    await page1.click('[id=unite_cancelUser]');

    const [Action] = await page1.$x("(//span[@class='slider round'])[3]");
    await Action.click();  

    await page1.click('[id=unite_backUser]');
    const [assign] = await page1.$x("(//button[contains(@class,'btn btn-success')])[1]");
    await assign.click();  
    await page1.click('[id=unite_assignTicket]');
    await page1.click('[name=firstName]');
    await page1.type('[name=firstName]', 'Test');

    await page1.click('[name=priority]');
    await page1.type('[name=priority]', 'High');

    await page1.click('[id=unite_assignToTicket]');

    await page1.click('[id=unite_assignTicket]');
    await page1.click('[id=unite_closeAssignTicket]');

    const [transfer] = await page1.$x("(//button[contains(@class,'btn btn-success')])[1]");
    await transfer.click();

    await page1.click('[id=unite_transferTicket]');
    await page1.click('[id=unite_closeTransferTicket]');


    await page1.click('[id=unite_transferTicket]');

    await page1.click('[name=userEmail]');
    await page1.type('[name=userEmail]', 'Test');

    await page1.type('[name=comments]', 'Test Comments for the created Ticket');
    await page1.click('[id=unite_submitTransferTicket]');

    await page1.click('[id=unite_completeTicket]');

    await page1.type('[name=comments]', 'Test Comments for the created Ticket');
    await page1.click('[id=unite_submitCompleteTicket]');

    await page1.click('[id=unite_resolveTicket]');
    await page1.type('[name=comments]', 'Test Comments for the created Ticket');
    await page1.click('[id=unite_submitResolveTicket]');


    await recorder1.stop();
    await page1.close();
    await browser.close();
    })
    it.only("Create Tickets",async()=>{
        //launching the headless browser
     const browser = await puppeteer.launch({ headless: false , defaultViewport: null, args:['--start-maximized'] });
     //Create instance of the browser
    const page = await browser.newPage();
    const recorder = new PuppeteerScreenRecorder(page,config);
    const fs = require('fs');
    function getDateString() {
        const date = new Date();
        const year = date.getFullYear();
        const month = `${date.getMonth() + 1}`.padStart(2, '0');
        const day =`${date.getDate()}`.padStart(2, '0');
        const hours = `${date.getHours()}`.padStart(2, '0');
        const mins = `${date.getMinutes()}`.padStart(2, '0');
        return `${year}${month}${day}_${hours}${mins}`;
      }
      await recorder.start(`Tickets/Login_${getDateString()}.mp4`);

    await page.setViewport({width: 1200, height: 720})
   //Navigate to the url
    await page.goto('http://localhost:4200/', { waitUntil: 'networkidle2',timeout: 50000} );

    await page.type('[type=email]', 'sage@assaycr.com')
    await page.type('[type=password]', 'Admin@123');

    await page.click('[type=submit]');
    await page.waitForNavigation();
    console.log('Logged in Successfully');

    const [selectRole] = await page.$('[name=role]');
    await selectRole.click();
    const [userRole] = await page.$x('[role=option]');
    await userRole.click();
    const [button] = await page.$x("//button[text()='Lets Go']");
    await button.click();
    console.log('Role Selected Successfully');
    await page.waitForTimeout(10000);

    await page.screenshot({
        path: `Tickets/Dashboard_${getDateString()}.png`,
        fullPage: true  
    });
   
    await recorder.stop();

    const page1 = await browser.newPage();
    const recorder1 = new PuppeteerScreenRecorder(page1,config);
    await recorder1.start(`Tickets/Manage_Tickets_${getDateString()}.mp4`);
    await page1.setViewport({width: 1200, height: 720})
   //Navigate to the url
    await page1.goto('http://localhost:4200/tickets', { waitUntil: 'networkidle2',timeout: 50000} );
    console.log("List of Tickets Page opened Successfully");

    await page1.click('[id=unite_createTicket]');
    console.log("Create Ticket Page opened Successfully");

    await page1.click('[formcontrolname=type]');
    await page1.click('[ng-reflect-value=Subscription]');

    await page1.click('[formcontrolname=severity]');
    await page1.click('[value=major]');

    await page1.type('[formcontrolname=subject]', 'Test Subject');
    await page1.screenshot({
      path: `Tickets/Create_Ticket(1)_${getDateString()}.png`,
      fullPage: true  
    });
    await page1.type('[formcontrolname=description]', 'Test Description');

    const [DocUpload] = await Promise.all([
        page1.waitForFileChooser(),
        page1.click("[id=DocUpload]"),
        ]);
      await DocUpload.accept(['C:/Users/hp/Downloads/Get_Started_With_Smallpdf.pdf']);
      console.log('Document Uploaded Successfully');
      await page1.screenshot({
        path: `Tickets/Create_Ticket(2)_${getDateString()}.png`,
        fullPage: true  
      });
      await page1.click('[type=submit]');

      await page1.click('[class=btn btn-danger my-4 mx-3]');

      await page1.screenshot({
        path: `Tickets/Tickets_List_${getDateString()}.png`,
        fullPage: true  
      });
       await page1.click('[ng-reflect-router-link=/support/preview/136]');
       await page1.click('[routerlink=/support]');
       await page1.click('[id=unite_deleteticket]');
      await recorder1.stop();
      await page1.close();
      await browser.close();
})
})