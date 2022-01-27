const { config } = require('chai');
const puppeteer = require('puppeteer'); 
const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');

describe("Test Suite - Storefront",()=>{
    it.only("Storefront - About",async()=>{
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
      await recorder.start(`Storefront/Storefront_Login_${getDateString()}.mp4`);

       // destination.txt will be created or overwritten by default.
      //  fs.copyFile('Storefront/Storefront_Login.mp4', `Storefront_Login_${getDateString()}.mp4`, (err) => {
      //   if (err) throw err;
      //   console.log('OK! Login_Storefront File Name generated with Current Date & Time');
      // });
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
        path: `Storefront/Storefront_Dashboard_${getDateString()}.png`,
        fullPage: true  
    });
    // fs.copyFile('Storefront/Storefront_Dashboard.png', `Storefront/Storefront_Dashboard_${getDateString()}.png`, (err) => {
    //     if (err) throw err;
    //     console.log('OK! Dashboard Image File Name generated with Current Date & Time');
    //   });
    await recorder.stop();

    const page1 = await browser.newPage();
    const recorder1 = new PuppeteerScreenRecorder(page1,config);
    await recorder1.start(`Storefront/Storefront_About_${getDateString()}.mp4`);
       // destination.txt will be created or overwritten by default.
      //  fs.copyFile('Storefront/Storefront_About.mp4', `Storefront_About_${getDateString()}.mp4`, (err) => {
      //   if (err) throw err;
      //   console.log('OK! Login_Storefront File Name generated with Current Date & Time');
      // });
    await page1.setViewport({width: 1200, height: 720})
   //Navigate to the url
    await page1.goto('http://localhost:4200/storefront', { waitUntil: 'networkidle2',timeout: 50000} );
    console.log("Storefront Page opened Successfully");
    await page1.click('[id=editabout]');
    await page1.focus('[id=textEditor]');
    //await page1.waitForSelector('[id=unite_ViewAttachmentbutton]');
    if (await page1.$('[id=textEditor]') == null) {
      await page1.keyboard.type('What is blog content writing? Content writing is the process of planning, writing and editing web content, typically for digital marketing purposes. It can include writing blog posts and articles, scripts for videos and podcasts, as well as content for specific platforms');
    }
    else {
      await page1.focus('[id=textEditor]');
      await page1.keyboard.down('Control');
      await page1.keyboard.press('A');
      await page1.keyboard.down('Control');
      await page1.keyboard.press('Backspace');
      await page1.keyboard.type('What is blog content writing? Content writing is the process of planning, writing and editing web content, typically for digital marketing purposes.');  
      }

    // await page1.focus('[id=textEditor]');
    // await page1.keyboard.down('Control');
    // await page1.keyboard.press('A');
    // await page1.keyboard.down('Control');
    // await page1.keyboard.press('Backspace');
    // await page1.keyboard.type('What is blog content writing? Content writing is the process of planning, writing and editing web content, typically for digital marketing purposes. It can include writing blog posts and articles, scripts for videos and podcasts, as well as content for specific platforms');
    await page1.click('[id=saveabout]');
    console.log('About Updated Successfully');

    await page1.click('[id=editabout]');
    await page1.click('[id=cancelabout]');

    const [Logo] = await Promise.all([
        page1.waitForFileChooser(),
        page1.click("[id=uploadlogo]"),
        ]);
    await Logo.accept(['C:/Users/hp/Pictures/Images/Sponsor.jpg']);
    console.log('Logo Uploaded Successfully');


    const [Banner] = await Promise.all([
        page1.waitForFileChooser(),
        page1.click("[id=uploadbanner]"),
        ]);
    await Banner.accept(['C:/Users/hp/Pictures/Images/CRO2.jpg']);
    console.log('Banner Uploaded Successfully');

    await page1.screenshot({
        path: `Storefront/About_${getDateString()}.png`,
        fullPage: true  
    });
    // fs.copyFile('Storefront/About.png', `Storefront/About_${getDateString()}.png`, (err) => {
    //     if (err) throw err;
    //     console.log('OK! About Image File Name generated with Current Date & Time');
    //   });
    await recorder1.stop();
    await page1.close();

    })

    it("Storefront - Services",async()=>{
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
      await recorder.start(`Storefront/Storefront_Login_${getDateString()}.mp4`);

       // destination.txt will be created or overwritten by default.
      //  fs.copyFile('Storefront/Storefront_Login.mp4', `Storefront_Login_${getDateString()}.mp4`, (err) => {
      //   if (err) throw err;
      //   console.log('OK! Login_Storefront File Name generated with Current Date & Time');
      // });
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
          await recorder.stop();
          
          const page1 = await browser.newPage();
          const recorder1 = new PuppeteerScreenRecorder(page1,config);
          await recorder1.start(`Storefront/Storefront_Services_${getDateString()}.mp4`);
       // destination.txt will be created or overwritten by default.
      //  fs.copyFile('Storefront/Storefront_Services.mp4', `Storefront_Services_${getDateString()}.mp4`, (err) => {
      //   if (err) throw err;
      //   console.log('OK! Storefront_Services File Name generated with Current Date & Time');
      // });
          await page1.setViewport({width: 1200, height: 720})
         //Navigate to the url
          await page1.goto('http://localhost:4200/storefront', { waitUntil: 'networkidle2',timeout: 50000} );
          console.log("Storefront Page opened Successfully");
          await page1.waitForTimeout(30000);
          await page1.click('[id=mat-tab-label-0-1]');
          console.log('List of Sevices');
          await page1.click('[id=addservice]');
          //const service = await page1.$('[formcontrolname=serviceId]');
          //const [selectService] = await page.$x("//mat-select[@placeholder='Select Role']//div//div//span[contains(text(),'Select Role')]");
          await page1.click('[formcontrolname=serviceId]');
          const [selectService] = await page1.$x("(//mat-option[contains(@class,'mat-option mat-focus-indicator')]//span)[1]");
          await selectService.click();
          await page1.type('[formcontrolname=description]', 'Content writing is the process of planning, writing and editing web content, typically for digital marketing purposes.');
          const [saveService] = await page1.$x("//span[normalize-space()='Save']");
          await saveService.click();
      
          await page1.click('[formcontrolname=serviceId]');
          const [selectService1] = await page1.$x("//button[@class='mat-focus-indicator mat-button mat-button-base ng-star-inserted']");
          await selectService1.click();
          await page1.type('[formcontrolname=description]', 'Content writing is the process of planning, writing and editing web content, typically for digital marketing purposes.');
          await page1.click('[type=reset]');
          const [clickCancel] = await page1.$x("//button[@ng-reflect-type='button']");
          await clickCancel.click();
      
          await page1.click('[id=editservice]');
          await page1.focus('[formcontrolname=description]');
          await page1.keyboard.down('Control');
          await page1.keyboard.press('A');
          await page1.keyboard.up('Control');
          await page1.keyboard.press('Backspace');
          await page1.keyboard.type('Edit Description');
          await page1.click('[type=submit]');
      
          await page1.click('[id=editservice]');
          await page1.click('[type=reset]');
      
          const [clickClose] = await page1.$x("//button[@aria-label='Close']");
          await clickClose.click();
      
          await page1.click('[id=deleteservice]');
          await page1.screenshot({
            path: `Storefront/Services_${getDateString()}.png`,
            fullPage: true  
        });
        // fs.copyFile('Storefront/Services.png', `Storefront/Services_${getDateString()}.png`, (err) => {
        //     if (err) throw err;
        //     console.log('OK! Services Image File Name generated with Current Date & Time');
        //   });
        await recorder1.stop();
          await page1.close();
          

    })

    it("Storefront - Facilities",async()=>{
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
      await recorder.start(`Storefront/Storefront_Login_${getDateString()}.mp4`);

       // destination.txt will be created or overwritten by default.
      //  fs.copyFile('Storefront/Storefront_Login.mp4', `Storefront_Login_${getDateString()}.mp4`, (err) => {
      //   if (err) throw err;
      //   console.log('OK! Login_Storefront File Name generated with Current Date & Time');
      // });
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
            path: `Storefront/Dashboard_${getDateString()}.png`,
            fullPage: true  
        });
          await recorder.stop();

          const page1 = await browser.newPage();
          const recorder1 = new PuppeteerScreenRecorder(page1,config);
          await recorder1.start(`Storefront/Storefront_Facilities_${getDateString()}.mp4`);
       // destination.txt will be created or overwritten by default.
      //  fs.copyFile('Storefront/Storefront_Facilities.mp4', `Storefront_Facilities_${getDateString()}.mp4`, (err) => {
      //   if (err) throw err;
      //   console.log('OK! Storefront_Facilities File Name generated with Current Date & Time');
      // });
          await page1.setViewport({width: 1200, height: 720})
         //Navigate to the url
          await page1.goto('http://localhost:4200/storefront', { waitUntil: 'networkidle2',timeout: 50000} );
          console.log("Storefront Page opened Successfully");
          await page1.waitForTimeout(30000);
          await page1.click('[id=mat-tab-label-0-2]');
          await page1.click('[id=unite_updateDefibrillators]');
          await page1.click('[id=defibrillators]');
          await page1.reload({waitUntil: ["networkidle0", "domcontentloaded"]});

          await page1.click('[id=unite_updateIcu]');
          const [icu] = await page1.$('[id=icu]');
          await icu.click({clickCount: 1});
          await page1.keyboard.press('Backspace');
          await icu.type("5");

          const [ccu] = await page1.$('[id=ccu]');
          await ccu.click({clickCount: 1});
          await page1.keyboard.press('Backspace');
          await ccu.type("6");

          const [picu] = await page1.$('[id=picu]');
          await picu.click({clickCount: 1});
          await page1.keyboard.press('Backspace');
          await picu.type("7");

          const [nicu] = await page1.$('[id=nicu]');
          await nicu.click({clickCount: 1});
          await page1.keyboard.press('Backspace');
          await nicu.type("8");

          await page1.click('[type=submit]');

          await page1.click('[id=unite_updateIcu]');
          await page1.click('[id=unite_closeUpdatebeds]');

          await page1.click('[id=unite_updateImaging]');
          await page1.click('[role=combobox]');
          const [selectImaging] = await page1.$x("(//div[@role='option'])[2]");
          await selectImaging.click();
          const [selectImaging1] = await page1.$x("(//div[@role='option'])[3]");
          await selectImaging1.click();
          await page1.click('[type=submit]');

          await page1.click('[id=unite_updateImaging]');
          await page1.click('[id=unite_closeImaging]');

          await page1.click('[id=unite_updateImaging]');
          await page1.click('[id=unite_closeImagingbutton]');

          await page1.click('[id=unite_updateLaboratory]');
          await page1.click('[role=combobox]');
          const [selectLab] = await page1.$x("(//div[@role='option'])[2]");
          await selectLab.click();
          const [selectLab1] = await page1.$x("(//div[@role='option'])[3]");
          await selectLab1.click();
          const [selectLab2] = await page1.$x("(//div[@role='option'])[10]");
          await selectLab2.click();
          const [selectLab3] = await page1.$x("(//div[@role='option'])[35]");
          await selectLab3.click();
          await page1.click('[type=submit]');

          await page1.click('[id=unite_updateImaging]');
          await page1.click('[id=unite_closeLab]');

          await page1.click('[id=unite_updateImaging]');
          await page1.click('[id=unite_closeLabbutton]');
          await page1.click('[id=deleteservice]');

          await page1.screenshot({
            path: `Storefront/Facilities_${getDateString()}.png`,
            fullPage: true  
        });
        // fs.copyFile('Storefront/Facilities.png', `Storefront/Facilities_${getDateString()}.png`, (err) => {
        //     if (err) throw err;
        //     console.log('OK! Facilities Image File Name generated with Current Date & Time');
        //   });
        await recorder1.stop();
          await page1.close();  
    })
    it("Storefront - Therapeutics & Team",async()=>{
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
      await recorder.start(`Storefront/Storefront_Login_${getDateString()}.mp4`);

       // destination.txt will be created or overwritten by default.
      //  fs.copyFile('Storefront/Storefront_Login.mp4', `Storefront_Login_${getDateString()}.mp4`, (err) => {
      //   if (err) throw err;
      //   console.log('OK! Login_Storefront File Name generated with Current Date & Time');
      // });
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
          await recorder.stop();

          const page1 = await browser.newPage();
          const recorder1 = new PuppeteerScreenRecorder(page1,config);
          await recorder1.start(`Storefront_Therapeutics_${getDateString()}.mp4`);
       // destination.txt will be created or overwritten by default.
      //  fs.copyFile('Storefront/Storefront_Therapeutics.mp4', `Storefront_Therapeutics_${getDateString()}.mp4`, (err) => {
      //   if (err) throw err;
      //   console.log('OK! Storefront_Therapeutics File Name generated with Current Date & Time');
      // });
          await page1.setViewport({width: 1200, height: 720})
         //Navigate to the url
          await page1.goto('http://localhost:4200/storefront', { waitUntil: 'networkidle2',timeout: 50000} );
          console.log("Storefront Page opened Successfully");
          await page1.waitForTimeout(30000);

          await page1.click('[id=mat-tab-label-0-3]');
          await page1.click('[id=unite_addTherapeutic]');

          await page1.click('[aria-label=Select Therapeutic]');
          const [selectTherapeutic] = await page1.$x("//span[normalize-space()='Cardiology']");
          await selectTherapeutic.click();
          await page1.click('[aria-label=Select Indication]');
          const [selectIndication] = await page1.$x("//span[normalize-space()='Hypertension']");
          await selectIndication.click();
          await page1.click('[class=btn btn-primary]');

          await page1.click('[id=unite_addTherapeutic]');
          await page1.click('[aria-label=Close]');

          await page1.click('[id=unite_removeTherapeutic]');

          await page1.click('[id=mat-tab-label-0-4]');
          console.log("List of Team Members has been displayed");

          await page1.screenshot({
            path: `Storefront/Therapeutics_${getDateString()}.png`,
            fullPage: true  
        });
        // fs.copyFile('Storefront/Therapeutics.png', `Storefront/Therapeutics_${getDateString()}.png`, (err) => {
        //     if (err) throw err;
        //     console.log('OK! Therapeutics Image File Name generated with Current Date & Time');
        //   });
        await recorder1.stop();
          await page1.close(); 
await browser.close();
    })

})
        