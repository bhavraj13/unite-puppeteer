const { config } = require('chai');
const puppeteer = require('puppeteer'); 
const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');
//import fullPageScreenshot from 'puppeteer-full-page-screenshot';
//var puppeteerfullPageScreenshot = require ('puppeteer-full-page-screenshot');

describe("Test Suite - Services",()=>{
    it.only("Add Services",async()=>{
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
      await recorder.start(`Services/Login_${getDateString()}.mp4`);

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
        path: `Services/Dashboard_${getDateString()}.png`,
        fullPage: true  
    });
   
    await recorder.stop();

    const page1 = await browser.newPage();
    const recorder1 = new PuppeteerScreenRecorder(page1,config);
    await recorder1.start(`Services/Manage_Services_${getDateString()}.mp4`);
    await page1.setViewport({width: 1200, height: 720})
   //Navigate to the url
    await page1.goto('http://localhost:4200/services', { waitUntil: 'networkidle2',timeout: 50000} );
    console.log("List of Services Page opened Successfully");

    await page1.click('[id=unite_addServices]');

    await page1.type('[formcontrolname=name]', 'Test Services')

    await page1.click('[id=unite_saveService]');

    await page.screenshot({
        path: `Service/List_of_Services_${getDateString()}.png`,
        fullPage: true  
    });

    await page1.click('[id=unite_addServices]');
    await page1.click('[id=unite_closeService]');

    await page1.click('[id=unite_addServices]');
    await page1.click('[id=unite_resetService]');

    const [updateService] = await page1.$x("(//button[@id='unite_updateService'])[45]");
    await updateService.click();
    await page1.click('[id=unite_updateServices]');
    await page1.focus('[formcontrolname=name]');
          await page1.keyboard.down('Control');
          await page1.keyboard.press('A');
          await page1.keyboard.up('Control');
          await page1.keyboard.press('Backspace');
          await page1.keyboard.type('Edit Test Services');
    await page1.click('[id=unite_saveService]');

    const [deleteService] = await page1.$x("(//button[@id='unite_deleteService'])[45]");
    await deleteService.click();  
    await recorder1.stop();
    await page1.close();
    await browser.close(); 

})
})