const { config } = require('chai');
const puppeteer = require('puppeteer'); 
const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');
describe("Test Suite - IT Helpdesk",()=>{
    it.only("IT Helpdesk - Create Tickets",async()=>{     //launching the headless browser
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
      await recorder.start(`IT_Helpdesk/IT_Helpdesk_Login_${getDateString()}.mp4`);
       // destination.txt will be created or overwritten by default.
      //  fs.copyFile('IT_Helpdesk/IT_Helpdesk_Login.mp4', `IT_Helpdesk_Login_${getDateString()}.mp4`, (err) => {
      //   if (err) throw err;
      //   console.log('OK! IT_Helpdesk_Login File Name generated with Current Date & Time');
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
    await recorder.stop();

    //const [MpMenu] = await page.$x("//ul[li[a[i[contains(text(),'business')]]]]");
    //console.log(MpMenu);
    //const [MpMenu] = await page.$x("//p[contains(text(),'Marketplace')]");
    //console.log(MpMenu);

    const page1 = await browser.newPage();
    const recorder1 = new PuppeteerScreenRecorder(page1,config);
        await recorder1.start(`IT_Helpdesk/Create_Ticket_${getDateString()}.mp4`);
    await page1.setViewport({width: 1200, height: 720})
   //Navigate to the url
    await page1.goto('http://localhost:4200/support', { waitUntil: 'networkidle2',timeout: 50000} );
    console.log("List of Tickets Page opened Successfully");
    await page1.click('[routerlink=create-ticket]');
    await page1.click('[formcontrolname=type]');
    await page1.click('[ng-reflect-value=Subscription]');

    await page1.click('[formcontrolname=severity]');
    await page1.click('[value=major]');

    await page1.type('[formcontrolname=subject]', 'Test Subject');
    await page1.screenshot({
      path: `IT_Helpdesk/Create_Ticket(1)_${getDateString()}.png`,
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
        path: `IT_Helpdesk/Create_Ticket(2)_${getDateString()}.png`,
        fullPage: true  
      });
      await page1.click('[type=submit]');

      await page1.click('[class=btn btn-danger my-4 mx-3]');
      await recorder1.stop();
      await page1.close();
      await browser.close();
    })
    it.only("IT Helpdesk - List of Tickets",async()=>{     //launching the headless browser
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
         await recorder.start(`IT_Helpdesk/IT_Helpdesk_Login_${getDateString()}.mp4`);

          // destination.txt will be created or overwritten by default.
        //   fs.copyFile('IT_Helpdesk/IT_Helpdesk_Login.mp4', `IT_Helpdesk_Login_${getDateString()}.mp4`, (err) => {
        //    if (err) throw err;
        //    console.log('OK! IT_Helpdesk_Login File Name generated with Current Date & Time');
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
        await recorder1.start(`IT_Helpdesk/Tickets_List_${getDateString()}.mp4`);
       await page1.setViewport({width: 1200, height: 720})
      //Navigate to the url
       await page1.goto('http://localhost:4200/support', { waitUntil: 'networkidle2',timeout: 50000} );
       console.log("List of Tickets Page opened Successfully");
       await page1.screenshot({
        path: `IT_Helpdesk/Tickets_List_${getDateString()}.png`,
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