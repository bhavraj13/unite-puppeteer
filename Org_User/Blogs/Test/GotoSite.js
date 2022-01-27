const { config } = require('chai');
const { timeStamp } = require('console');
const puppeteer = require('puppeteer'); 
const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');
// (async () => {
//     //launching the headless browser
//     const browser = await puppeteer.launch({ headless: false });
//    //Create instance of the browser
//     const page = await browser.newPage();
//     //await page.setViewport({width: 1200, height: 720})
//    //Navigate to the url
//     await page.goto('http://localhost:4200/', { waitUntil: 'networkidle2',timeout: 50000} );
//     //await page.goto('http://localhost:4200/'+tableCell04Val, {  waitUntil: 'networkidle2',timeout: 50000});
//     //await browser.waitForTarget(()=> false);
//     await browser.close();
//  })();

 describe("Test Suite - Test",()=>{
    it.only("Create Blog",async()=>{
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
        //const time = `${timestamp}`;
        const hours = `${date.getHours()}`.padStart(2, '0');
        const mins = `${date.getMinutes()}`.padStart(2, '0'); 
        return `${year}${month}${day}_${hours}${mins}`;
      }

    //   function getTimeString(){
    //       const time = new timeStamp();
    //       const hours = `${time.getHours()}`.padStart(2, '0');
    //       const mins = `${time.getMinutes()}`.padStart(2, '0'); 
    //       return `${hours}${mins}`;
    //   }
       // destination.txt will be created or overwritten by default.
      //  fs.copyFile('Blogs/Login(1).mp4', `Blogs/Login(1)_${getDateString()}.mp4`, (err) => {
      //   if (err) throw err;
      //   console.log('OK! Video File Name generated with Current Date & Time');
      // });
      await recorder.start(`Screenshots/Login(1)_${getDateString()}.mp4`);
    await page.setViewport({width: 1200, height: 720})
   //Navigate to the url
    await page.goto('http://localhost:4200/', { waitUntil: 'networkidle2',timeout: 50000} );

    await page.type('[type=email]', 'hskt@yopmail.com')
    await page.type('[type=password]', 'Admin@123');

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
    await page.waitForTimeout(10000);
    await page.screenshot({
          path: `Screenshots/Dashboard_${getDateString()}.png`,
          fullPage: true  
      });
        // destination.txt will be created or overwritten by default.
      //   fs.copyFile('Blogs/Dashboard.png', `Blogs/Dashboard_${getDateString()}.png`, (err) => {
      //     if (err) throw err;
      //     console.log('OK! Image File Name generated with Current Date & Time');
      //   });
      await recorder.stop();
      await page.close();
      await browser.close();
      })
   })
    
//     const page1 = await browser.newPage();
//     await page1.setViewport({width: 1200, height: 720})
//    //Navigate to the url
//     await page1.goto('http://localhost:4200/storefront', { waitUntil: 'networkidle2',timeout: 50000} );
//     console.log("Storefront Page opened Successfully");
//     await page1.waitForTimeout(30000);
//     await page1.click('[id=mat-tab-label-0-1]');
//     console.log('List of Sevices');
//     await page1.click('[id=addservice]');
//     //const service = await page1.$('[formcontrolname=serviceId]');
//     //const [selectService] = await page.$x("//mat-select[@placeholder='Select Role']//div//div//span[contains(text(),'Select Role')]");
//     await page1.click('[formcontrolname=serviceId]');
//     const [selectService] = await page1.$x("(//mat-option[contains(@class,'mat-option mat-focus-indicator')]//span)[1]");
//     await selectService.click();
//     await page1.type('[formcontrolname=description]', 'Content writing is the process of planning, writing and editing web content, typically for digital marketing purposes.');
//     const [saveService] = await page1.$x("//span[normalize-space()='Save']");
//     await saveService.click();

//     await page1.click('[formcontrolname=serviceId]');
//     const [selectService1] = await page1.$x("//button[@class='mat-focus-indicator mat-button mat-button-base ng-star-inserted']");
//     await selectService1.click();
//     await page1.type('[formcontrolname=description]', 'Content writing is the process of planning, writing and editing web content, typically for digital marketing purposes.');
//     await page1.click('[type=reset]');
//     const [clickCancel] = await page1.$x("//button[@ng-reflect-type='button']");
//     await clickCancel.click();

//     await page1.click('[id=editservice]');
//     await page.focus('[formcontrolname=description]');
//     await page.keyboard.down('Control');
//     await page.keyboard.press('A');
//     await page.keyboard.up('Control');
//     await page.keyboard.press('Backspace');
//     await page.keyboard.type('Edit Description');
//     await page1.click('[type=submit]');

//     await page1.click('[id=editservice]');
//     await page1.click('[type=reset]');

//     const [clickClose] = await page1.$x("//button[@aria-label='Close']");
//     await clickClose.click();

     
//     await page1.click('[id=deleteservice]');
    




//     //select option by select method
     
//     //await service.select(" Central Lab Service ");

//     // await page.screenshot({
//     //     path: 'Blogs/Dashboard.png',
//     //     fullPage: true  
//     // });
//     //   // destination.txt will be created or overwritten by default.
//     //   fs.copyFile('Blogs/Dashboard.png', `Blogs/Dashboard_${getDateString()}.png`, (err) => {
//     //     if (err) throw err;
//     //     console.log('OK! Image File Name generated with Current Date & Time');
//     //   });

//     //await recorder.stop();
//     await page.close();
//     await browser.close();

//     })
// })