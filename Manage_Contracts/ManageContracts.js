const { config } = require('chai');
const puppeteer = require('puppeteer'); 
const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');
//import fullPageScreenshot from 'puppeteer-full-page-screenshot';
//var puppeteerfullPageScreenshot = require ('puppeteer-full-page-screenshot');

describe("Test Suite - Manage Contracts",()=>{
    it.only("Manage User Contracts",async()=>{
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
      await recorder.start(`Manage_Contracts/Login_${getDateString()}.mp4`);

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
        path: `Manage_Contracts/Dashboard_${getDateString()}.png`,
        fullPage: true  
    });
   
    await recorder.stop();

    const page1 = await browser.newPage();
    const recorder1 = new PuppeteerScreenRecorder(page1,config);
    await recorder1.start(`Manage_Contracts/Manage_User_Contracts_${getDateString()}.mp4`);
    await page1.setViewport({width: 1200, height: 720})
   //Navigate to the url
    await page1.goto('http://localhost:4200/contract-organization', { waitUntil: 'networkidle2',timeout: 50000} );
    console.log("Contract List Page opened Successfully");

    const [viewDoc] = await page1.$x("(//button[contains(@class,'mat-focus-indicator btn')])[1]");
    await viewDoc.click();
    await page.waitForTimeout(10000);

    await page1.keyboard.press('Escape');

    const [viewAssociates] = await page1.$x("(//button[@class='btn btn-primary'])[1]");
    await viewAssociates.click();

    await page1.click('[id=unite_backAssociate]');

    await recorder1.stop();
    await page1.close();
    await browser.close();
})
})