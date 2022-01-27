const { config } = require('chai');
const puppeteer = require('puppeteer'); 
const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');
describe("Test Suite - Settings",()=>{
    it.only("Settings - Create User",async()=>{     //launching the headless browser
     const browser = await puppeteer.launch({ headless: false , defaultViewport: null, args:['--start-maximized'] });
     //Create instance of the browser
    const page = await browser.newPage();
    const recorder = new PuppeteerScreenRecorder(page,config);
    await recorder.start('Marketplace/Marketplace_Login.mp4');
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
       // destination.txt will be created or overwritten by default.
       fs.copyFile('Settings/Settings_Login.mp4', `Settings_Login_${getDateString()}.mp4`, (err) => {
        if (err) throw err;
        console.log('OK! Settings_Login File Name generated with Current Date & Time');
      });
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
    await page1.setViewport({width: 1200, height: 720})
   //Navigate to the url
    await page1.goto('http://localhost:4200/settings', { waitUntil: 'networkidle2',timeout: 50000} );
    console.log("List of Tickets Page opened Successfully");
    await page1.click('[id=unite_createUser]');

    await page1.click('[formcontrolname=title]');
    await page1.click('[ng-reflect-value=Mr]');
    
    await page1.type('[formcontrolname=firstName]', 'Bhavani');
    await page1.type('[formcontrolname=middleName]', 'Raj');
    await page1.type('[formcontrolname=lastName]', 'Rajendran');

    await page1.click('[formcontrolname=profileId]');
    await page1.click('[ng-reflect-value=3]');

    await page1.type('[id=unite_Email]', 'br1@gmail.com');
    await page1.type('[formcontrolname=phoneNo]', '9988776655');
    await page1.type('[formcontrolname=address1]', 'No. 37');

    await page1.click('[id=unite_UserCountry]');
    await page1.click('[ng-reflect-value=19]');

    await page1.click('[id=unite_UserState]');
    await page1.click('[ng-reflect-value=759]');

    await page1.click('[id=unite_UserCity]');
    await page1.click('[ng-reflect-value=8487]');

    await page1.type('[id=pincode]', '600007');

    await page1.click('[id=unite_submitUser]');

    await page1.click('[id=unite_cancelUser]');
    })

    it.only("Settings - Payment Destinations",async()=>{     //launching the headless browser
        const browser = await puppeteer.launch({ headless: false , defaultViewport: null, args:['--start-maximized'] });
        //Create instance of the browser
       const page = await browser.newPage();
       const recorder = new PuppeteerScreenRecorder(page,config);
       await recorder.start('Marketplace/Marketplace_Login.mp4');
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
          // destination.txt will be created or overwritten by default.
          fs.copyFile('Settings/Settings_Login.mp4', `Settings_Login_${getDateString()}.mp4`, (err) => {
           if (err) throw err;
           console.log('OK! Settings_Login File Name generated with Current Date & Time');
         });
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
       await page1.setViewport({width: 1200, height: 720})
      //Navigate to the url
       await page1.goto('http://localhost:4200/settings', { waitUntil: 'networkidle2',timeout: 50000} );
       console.log("List of Tickets Page opened Successfully");
       await page1.click('[href=#payment]');
       await page1.click('[id=unite_addPaymentDest]');
       await page1.type('[formcontrolname=name]', 'Bhavani');
       await page1.click('[formcontrolname=paymentType]');
       await page1.click('[value=Electronic]');

       await page1.type('[formcontrolname=accountNumber]', '14000488493');
       await page1.type('[formcontrolname=bankName]', 'HDFC');
       await page1.type('[formcontrolname=ifscCode]', 'HDFC0000323');
       await page1.type('[formcontrolname=micrNo]', 'HDFC0000323');

       await page1.type('[formcontrolname=company]', 'ABC Pvt Ltd');
       await page1.type('[formcontrolname=contactName]', 'Bhavani');
       await page1.type('[formcontrolname=phoneNumber]', '9988550089');
       await page1.type('[formcontrolname=email]', 'ab@gmail.com');
       await page1.type('[formcontrolname=address]', 'No. 34');
       await page1.type('[formcontrolname=address2]', 'PJN Street');

    await page1.click('[id=unite_PayeeCountry]');
    await page1.click('[ng-reflect-value=19]');

    await page1.click('[id=unite_PayeeState]');
    await page1.click('[ng-reflect-value=759]');

    await page1.click('[id=unite_PayeeCity]');
    await page1.click('[ng-reflect-value=8487]');

    await page1.type('[id=unite_PayeePincode]', '600007');

    await page1.click('[id=unite_SubmitPaymentDetails]');
    await page1.click('[id=unite_CancelPaymentDetails]');
        })
        it.only("Settings - Shipping Address",async()=>{     //launching the headless browser
            const browser = await puppeteer.launch({ headless: false , defaultViewport: null, args:['--start-maximized'] });
            //Create instance of the browser
           const page = await browser.newPage();
           const recorder = new PuppeteerScreenRecorder(page,config);
           await recorder.start('Marketplace/Marketplace_Login.mp4');
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
              // destination.txt will be created or overwritten by default.
              fs.copyFile('Settings/Settings_Login.mp4', `Settings_Login_${getDateString()}.mp4`, (err) => {
               if (err) throw err;
               console.log('OK! Settings_Login File Name generated with Current Date & Time');
             });
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
           await page1.setViewport({width: 1200, height: 720})
          //Navigate to the url
           await page1.goto('http://localhost:4200/settings', { waitUntil: 'networkidle2',timeout: 50000} );
           console.log("List of Tickets Page opened Successfully");
           await page1.click('[href=#address]');
           await page1.click('[id=unite_addShippingAddress]');

           await page1.type('[id=unite_CompanyName]', 'ABC Pvt Ltd');
           await page1.type('[formcontrolname=contact]', 'Bhavani');
           await page1.type('[formcontrolname=phone]', '8877665500');

           await page1.type('[formcontrolname=streetAddress]', 'No. 34');
           await page1.type('[formcontrolname=addressDetails]', 'PJN Street');
    
        await page1.click('[id=unite_CompanyCountry]');
        await page1.click('[ng-reflect-value=19]');
    
        await page1.click('[id=unite_CompanyState]');
        await page1.click('[ng-reflect-value=759]');
    
        await page1.click('[id=unite_CompanyCity]');
        await page1.click('[ng-reflect-value=8487]');
    
        await page1.type('[id=unite_CompanyPincode]', '600007');
    
        await page1.click('[id=unite_SubmitShippingAddress]');
        await page1.click('[id=unite_CancelShippingAddress]');

            })  
})