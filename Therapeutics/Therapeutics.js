const { config } = require('chai');
const puppeteer = require('puppeteer'); 
const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');
//import fullPageScreenshot from 'puppeteer-full-page-screenshot';
//var puppeteerfullPageScreenshot = require ('puppeteer-full-page-screenshot');

describe("Test Suite - Therapeutics",()=>{
    it.only("Add Therapeutics",async()=>{
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
      await recorder.start(`Therapeutics/Login_${getDateString()}.mp4`);

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
        path: `Therapeutics/Dashboard_${getDateString()}.png`,
        fullPage: true  
    });
   
    await recorder.stop();

    const page1 = await browser.newPage();
    const recorder1 = new PuppeteerScreenRecorder(page1,config);
    await recorder1.start(`Therapeutics/Manage_Therapeutics_${getDateString()}.mp4`);
    await page1.setViewport({width: 1200, height: 720})
   //Navigate to the url
    await page1.goto('http://localhost:4200/therapeutic', { waitUntil: 'networkidle2',timeout: 50000} );
    console.log("List of Therapeutics Area Page opened Successfully");

    await page1.click('[id=unite_addTherapeutic]');

    await page1.type('[formcontrolname=taName]', 'Test Therapeutic')

    await page1.click('[id=unite_saveTherapeutic]');

    await page.screenshot({
        path: `Therapeutics/List_of_Therapeutics_${getDateString()}.png`,
        fullPage: true  
    });

    await page1.click('[id=unite_addTherapeutic]');
    await page1.click('[id=unite_closeTherapeuticbutton]');

    await page1.click('[id=unite_addTherapeutic]');
    await page1.click('[id=unite_closeTherapeutic]');

    const [deleteTherapeutic] = await page1.$x("(//button[@id='unite_deleteTherapeutic'])[25]");
    await deleteTherapeutic.click();
    await recorder1.stop();
    await page1.close();
    await browser.close();
    })

    it.only("Add Indications",async()=>{
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
      await recorder.start(`Therapeutics/Login_${getDateString()}.mp4`);

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
        path: `Therapeutics/Dashboard_${getDateString()}.png`,
        fullPage: true  
    });
   
    await recorder.stop();

    const page1 = await browser.newPage();
    const recorder1 = new PuppeteerScreenRecorder(page1,config);
    await recorder1.start(`Therapeutics/Manage_Therapeutics_${getDateString()}.mp4`);
    await page1.setViewport({width: 1200, height: 720})
   //Navigate to the url
    await page1.goto('http://localhost:4200/therapeutic', { waitUntil: 'networkidle2',timeout: 50000} );
    console.log("List of Therapeutics Area Page opened Successfully");

    const [viewTherapeutic] = await page1.$x("(//button[@id='unite_viewIndication'])[25]");
    await viewTherapeutic.click();
    console.log("List of Indications of the Therapeutics Page opened Successfully");

    await page1.click('[id=unite_addIndications]');

    await page1.type('[formcontrolname=indName]', 'Test Indications')

    await page1.click('[id=unite_saveIndication]');

    await page.screenshot({
        path: `Therapeutics/List_of_Indications_${getDateString()}.png`,
        fullPage: true  
    });

    await page1.click('[id=unite_addIndications]');
    await page1.click('[id=unite_closeIndicationbutton]');

    await page1.click('[id=unite_addIndications]');
    await page1.click('[id=unite_closeIndication]');
    
    const [deleteIndication] = await page1.$x("(//button[@id='unite_deleteIndication'])[1]");
    await deleteIndication.click();

    await page1.click('[id=unite_backIndication]');
    await recorder1.stop();
    await page1.close();
    await browser.close();

    })
    })