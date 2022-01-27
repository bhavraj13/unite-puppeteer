const { config } = require('chai');
const puppeteer = require('puppeteer'); 
const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');
//import fullPageScreenshot from 'puppeteer-full-page-screenshot';
//var puppeteerfullPageScreenshot = require ('puppeteer-full-page-screenshot');

describe("Test Suite - Facilities",()=>{
    it.only("Manage Facilities",async()=>{
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
      await recorder.start(`Facilities/Login_${getDateString()}.mp4`);

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
        path: `Facilities/Dashboard_${getDateString()}.png`,
        fullPage: true  
    });
   
    await recorder.stop();

    const page1 = await browser.newPage();
    const recorder1 = new PuppeteerScreenRecorder(page1,config);
    await recorder1.start(`Facilities/Manage_Facilities_${getDateString()}.mp4`);
    await page1.setViewport({width: 1200, height: 720})
   //Navigate to the url
    await page1.goto('http://localhost:4200/facilities', { waitUntil: 'networkidle2',timeout: 50000} );
    console.log("Facilities Page opened Successfully");

    await page1.click('[id=unite_defib]');
    // const [deleteDefib] = await page1.$x("(//button[@id='unite_Deletedefib'])[1]");
    // await deleteDefib.click();

    await page1.click('[id=unite_icu]');
    await page1.click('[id=unite_addIcu]');
    await page1.type('[formcontrolname=name]', 'Test Icu')
    await page1.click('[id=unite_saveIcu]');

    await page1.click('[id=unite_addIcu]');
    await page1.click('[id=unite_closeIcubutton]');

    await page1.click('[id=unite_addIcu]');
    await page1.click('[id=unite_closeIcu]');

    await page1.screenshot({
        path: `Facilities/ICU_List_${getDateString()}.png`,
        fullPage: true  
    });
    const [updateIcu] = await page1.$x("(//button[contains(@class,'btn btn-success')])[6]");
    await updateIcu.click();
    await page1.type('[formcontrolname=newName]', 'Assay ICU')
    await page1.click('[id=unite_updateIcu]');

    const [updateIcu1] = await page1.$x("(//button[contains(@class,'btn btn-success')])[6]");
    await updateIcu1.click();
    await page1.click('[id=unite_closeupdateIcubutton]');

    const [updateIcu2] = await page1.$x("(//button[contains(@class,'btn btn-success')])[6]");
    await updateIcu2.click();
    await page1.click('[id=unite_closeupdateIcu]');

    const [deleteIcu] = await page1.$x("(//button[@class='btn btn-danger'])[6]");
    await deleteIcu.click();

    await page1.click('[id=unite_imaging]');


    await recorder1.stop();
    await page1.close();
    await browser.close();




})
})