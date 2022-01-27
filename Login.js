const { config } = require('chai');
const puppeteer = require('puppeteer'); 
const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');
//import fullPageScreenshot from 'puppeteer-full-page-screenshot';
//var puppeteerfullPageScreenshot = require ('puppeteer-full-page-screenshot');

describe("Test Suite - Login",()=>{
    //this.timeout(6000);
    // setTimeout(6000);
    it.only("Testing the Mocha Reporting Feature",async()=>{
        //setTimeout(done, 6000);
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
      await recorder.start(`Login/Login_${getDateString()}.mp4`);

    await page.setViewport({width: 1200, height: 720})
   //Navigate to the url
    await page.goto('http://localhost:4200/', { waitUntil: 'networkidle2',timeout: 50000} );

    await page.type('[type=email]', 'sage@assaycr.com')
    await page.type('[type=password]', 'admin');

    await page.click('[type=submit]');
    await page.waitForNavigation();
    console.log('Logged in Successfully');

    // const [selectRole] = await page.$('[placeholder=Select Role]');
    // await selectRole.click();
    await page.click('[name=role]');

    // const [userRole] = await page.$x('[role=option]');
    // await userRole.click();
    await page.click('[role=option]');
    const [button] = await page.$x("//button[text()='Lets Go']");
    await button.click();
    console.log('Role Selected Successfully');
    await page.waitForTimeout(10000);

    await page.screenshot({
        path: `Login/Dashboard_${getDateString()}.png`,
        fullPage: true  
    });
   
    await recorder.stop();
    await page.close();
    await browser.close();
    })
})