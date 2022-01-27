const { config } = require('chai');
const puppeteer = require('puppeteer'); 
const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');
//import fullPageScreenshot from 'puppeteer-full-page-screenshot';
//var puppeteerfullPageScreenshot = require ('puppeteer-full-page-screenshot');

describe("Test Suite - Ethics Committee",()=>{
    it.only("Approve User",async()=>{
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
      await recorder.start(`BD_User/Ethics_Committee/Login_${getDateString()}.mp4`);

       // destination.txt will be created or overwritten by default.
      //  fs.copyFile('Blogs/Login(1).mp4', `Blogs/Login(1)_${getDateString()}.mp4`, (err) => {
      //   if (err) throw err;
      //   console.log('OK! Login File Name generated with Current Date & Time');
      // });
    await page.setViewport({width: 1200, height: 720})
   //Navigate to the url
    await page.goto('http://localhost:4200/', { waitUntil: 'networkidle2',timeout: 50000} );

    await page.type('[type=email]', 'dinesh@yopmail.com')
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
        path: `BD_Users/Ethics_Committee/Dashboard_${getDateString()}.png`,
        fullPage: true  
    });
    // fs.copyFile('Blogs/Dashboard(1).png', `Blogs/Dashboard(1)_${getDateString()}.png`, (err) => {
    //     if (err) throw err;
    //     console.log('OK! Dashboard Image File Name generated with Current Date & Time');
    //   });
    await recorder.stop();

   //await fullPageScreenshot(page,{path: 'Dashboard.png'});

    const page1 = await browser.newPage();
    const recorder1 = new PuppeteerScreenRecorder(page1,config);
    await recorder1.start(`BD_Users/Ethics_Committee/Approve_User_${getDateString()}.mp4`);
    // fs.copyFile('Blogs/Create_Blog.mp4', `Blogs/Create_Blog_${getDateString()}.mp4`, (err) => {
    //     if (err) throw err;
    //     console.log('OK! Create_Blog File Name generated with Current Date & Time');
    //   });
    await page1.setViewport({width: 1200, height: 720})
   //Navigate to the url
    await page1.goto('http://localhost:4200/ethics-committee', { waitUntil: 'networkidle2',timeout: 50000} );
    console.log("Ethics Committee Users List Page opened Successfully");
    await page1.screenshot({
        path: `BD_Users/Ethics_Committee/Ethics_Committee_UserList_${getDateString()}.png`,
        fullPage: true  
    });   
    await page1.click('[id=unite_Verifybutton]');
    await page1.screenshot({
        path: `BD_Users/Ethics_Committee/Ethics_Committee_Details_${getDateString()}.png`,
        fullPage: true  
    }); 
    await page1.click('[id=unite_ECDetails]');

    const [RegNo] = await page1.$x("//dt[normalize-space()='Registration Number:']")
    console.log(RegNo);

    const [SubmitDate] = await page1.$x("//dt[normalize-space()='Submit Date:']")
    console.log(SubmitDate);

    await page1.click('[id=unite_EditECServices]');
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
      await page1.click('[id=unite_EC_Save]');
      console.log('About Updated Successfully');

      await page1.screenshot({
        path: `BD_Users/Ethics_Committee/Ethics_Committee_About_${getDateString()}.png`,
        fullPage: true  
    });   
  
      await page1.click('[id=unite_EditECServices]');
      await page1.click('[id=unite_EC_Cancel]');
      
      const [Logo] = await Promise.all([
        page1.waitForFileChooser(),
        page1.click("[id=unite_EC_UpdateLogo]"),
        ]);
    await Logo.accept(['C:/Users/hp/Pictures/Images/Sponsor.jpg']);
    console.log('Logo Uploaded Successfully');


    const [Banner] = await Promise.all([
        page1.waitForFileChooser(),
        page1.click("[id=unite_EC_UpdateBanner]"),
        ]);
    await Banner.accept(['C:/Users/hp/Pictures/Images/CRO2.jpg']);
    console.log('Banner Uploaded Successfully');

    await page1.screenshot({
        path: `BD_Users/Ethics_Committee/About_${getDateString()}.png`,
        fullPage: true  
    });
    await page1.reload();
    await page1.click('[id=mat-tab-label-0-1]');

    await page1.screenshot({
        path: `BD_Users/Ethics_Committee/Ethics_Committee_Documents_${getDateString()}.png`,
        fullPage: true  
    });   
    
await page1.waitForSelector('[id=unite_ECSOP]');
if (await page1.$('[id=unite_ECSOP]') !== null) {
    await page1.click(id='unite_ECSOP');
  }
  else {
      console.log('Document Not Found')
       }

       await page1.waitForSelector('[id=unite_ECRegCerf]');
if (await page1.$('[id=unite_ECRegCerf]') !== null) {
    await page1.click(id='unite_ECRegCerf');
  }
  else {
      console.log('Document Not Found')
       }

       await page1.waitForSelector('[id=unite_GCPTrainingCerf]');
if (await page1.$('[id=unite_GCPTrainingCerf]') !== null) {
    await page1.click(id='unite_GCPTrainingCerf');
  }
  else {
      console.log('Document Not Found')
       }

       await page1.waitForSelector('[id=unite_ECTrainingCerf]');
       if (await page1.$('[id=unite_ECTrainingCerf]') !== null) {
           await page1.click(id='unite_ECTrainingCerf');
         }
         else {
             console.log('Document Not Found')
              }

              await page1.waitForSelector('[id=unite_AccreditationCerf]');
              if (await page1.$('[id=unite_AccreditationCerf]') !== null) {
                  await page1.click(id='unite_AccreditationCerf');
                }
                else {
                    console.log('Document Not Found')
                     }

                     await page1.waitForSelector('[id=unite_IDDOC]');
                     if (await page1.$('[id=unite_IDDOC]') !== null) {
                         await page1.click(id='unite_IDDOC');
                       }
                       else {
                           console.log('Document Not Found')
                            }

                            await page1.waitForSelector('[id=unite_AddressDOC]');
                     if (await page1.$('[id=unite_AddressDOC]') !== null) {
                         await page1.click(id='unite_AddressDOC');
                       }
                       else {
                           console.log('Document Not Found')
                            }


    await page1.click('[id=mat-tab-label-0-2]');
    console.log('List of Sevices');
    await page1.click('[id=unite_ECaddService]');

    await page1.click('[formcontrolname=serviceId]');
    const [selectService] = await page1.$x("(//mat-option[contains(@class,'mat-option mat-focus-indicator')]//span)[1]");
    await selectService.click();
    await page1.type('[formcontrolname=description]', 'Content writing is the process of planning, writing and editing web content, typically for digital marketing purposes.');
    const [saveService] = await page1.$x("//span[normalize-space()='Save']");
    await saveService.click();
    await page1.screenshot({
        path: `BD_Users/Ethics_Committee/Ethics_Committee_Services_${getDateString()}.png`,
        fullPage: true  
    });   

          await page1.click('[formcontrolname=serviceId]');
          const [selectService1] = await page1.$x("//button[@class='mat-focus-indicator mat-button mat-button-base ng-star-inserted']");
          await selectService1.click();
          await page1.type('[formcontrolname=description]', 'Content writing is the process of planning, writing and editing web content, typically for digital marketing purposes.');
          await page1.click('[type=reset]');
          const [clickCancel] = await page1.$x("//button[@ng-reflect-type='button']");
          await clickCancel.click();

          await page1.click('[id=unite_ECeditService]');
          await page1.focus('[formcontrolname=description]');
          await page1.keyboard.down('Control');
          await page1.keyboard.press('A');
          await page1.keyboard.up('Control');
          await page1.keyboard.press('Backspace');
          await page1.keyboard.type('Edit Description in Ethics Committtee Services');
          await page1.click('[type=submit]');

          await page1.click('[id=unite_ECeditService]');
          await page1.click('[type=reset]');
      
          const [clickClose] = await page1.$x("//button[@aria-label='Close']");
          await clickClose.click();
      
          await page1.click('[id=unite_ECdeleteService]');
          await page1.screenshot({
            path: `BD_Users/Ethics_Committee/Ethics_Committee_DeleteService_${getDateString()}.png`,
            fullPage: true  
        }); 

        await page1.click('[id=mat-tab-label-0-3]');
        await page1.click('[id=unite_ECaddTherapeutics]');

        await page1.click('[aria-label=Select Therapeutic]');
        const [selectTherapeutic] = await page1.$x("//span[normalize-space()='Cardiology']");
        await selectTherapeutic.click();
        await page1.click('[aria-label=Select Indication]');
        const [selectIndication] = await page1.$x("//span[normalize-space()='Hypertension']");
        await selectIndication.click();
        await page1.click('[class=btn btn-primary]');

        await page1.screenshot({
            path: `BD_Users/Ethics_Committee/Ethics_Committee_Therapeutics_${getDateString()}.png`,
            fullPage: true  
        });
    
        await page1.click('[id=unite_ECaddTherapeutics]');
        await page1.click('[aria-label=Close]');

        await page1.click('[id=unite_ECremoveTherapeutics]');

        await page1.click('[id=mat-tab-label-0-4]');
        console.log("List of Team Members has been displayed");

          await page1.screenshot({
            path: `BD_Users/Ethics_Committee/Ethics_Committee_Team_${getDateString()}.png`,
            fullPage: true  
        }); 

        await page1.waitForSelector('[id=unite_ECContractPreview]');
            if (await page1.$('[id=unite_ECContractPreview]') !== null) {
                await page1.click(id='unite_ECContractPreview');
             }
              else {
                await page1.click(id='unite_ECUploadContract');
                await page1.click('formcontrolname=category');
                const [Category] = await page1.$x("mat-option[id='mat-option-4'] span[class='mat-option-text']");
                await Category.click();
                await page1.click('formcontrolname=subCategory');
                const [subCategory] = await page1.$x("mat-option[id='mat-option-74'] span[class='mat-option-text']");
                await subCategory.click();
                const [submit] = await page1.$x("(//button[@type='submit'])[1]");
                await submit.click();
                await page1.type('[formcontrolname=orgName]', 'ABC Pvt Ltd');
                await page1.type('[formcontrolname=address]', 'Anna Nagar, Chennai');

                const [ECName] = await page1.$x("(//input[@formcontrolname='name'])[1]");
                await ECName.type('EC Pvt Ltd');
                await page1.type('[formcontrolname=address]', 'Anna Nagar, Chennai');

                const [ECType] = await page1.$x("//div[@id='mat-select-value-5']//span[1]");
                await ECType.click();
                const [ECTypeOption] = await page1.$x("//span[text()=' Institutional Ethics Committee ']");
                await ECTypeOption.click();
                const [ECaddress] = await page1.$x("(//input[@formcontrolname='address'])[1]");
                await ECaddress.type('Mylapore, Chennai');
                const [ECContactPerson] = await page1.$x("(//input[@formcontrolname='contactName'])[1]");
                await ECContactPerson.type('Bhavani');
                const [ECContactNo] = await page1.$x("(//input[@formcontrolname='contactNumber'])[1]");
                await ECContactNo.type('9988776655');
                const [ECContactEmail] = await page1.$x("(//input[@formcontrolname='contactEmail'])[1]");
                await ECContactEmail.type('br1@gmail.com');
                const [addECDetails] = await page1.$x("(//span[contains(text(),'Add')])[1]");
                await addECDetails.click();

                const [SiteName] = await page1.$x("(//input[@formcontrolname='name'])[2]");
                await SiteName.type('Apollo');
                //await page1.type('[formcontrolname=address]', 'Anna Nagar, Chennai');
                const [SiteType] = await page1.$x("//div[@id='mat-select-value-7']//span[1]");
                await SiteType.click();
                const [SiteTypeOption] = await page1.$x("//span[text()=' Private Institution ']");
                await SiteTypeOption.click();
                const [Siteaddress] = await page1.$x("(//input[@formcontrolname='address'])[2]");
                await Siteaddress.type('Mylapore, Chennai');
                const [SiteContactPerson] = await page1.$x("(//input[@formcontrolname='contactName'])[2]");
                await SiteContactPerson.type('Bhavani');
                const [SiteContactNo] = await page1.$x("(//input[@formcontrolname='contactNumber'])[2]");
                await SiteContactNo.type('9988776655');
                const [SiteContactEmail] = await page1.$x("(//input[@formcontrolname='contactEmail'])[2]");
                await SiteContactEmail.type('br1@gmail.com');
                const [addSiteDetails] = await page1.$x("(//span[contains(text(),'Add')])[2]");
                await addSiteDetails.click();

                const [CROName] = await page1.$x("(//input[@formcontrolname='name'])[3]");
                await CROName.type('CRO 1');
                //await page1.type('[formcontrolname=address]', 'Anna Nagar, Chennai');
                const [CROType] = await page1.$x("//div[@id='mat-select-value-9']//span[1]");
                await CROType.click();
                const [CROTypeOption] = await page1.$x("//span[text()=' Quality Assurance ']");
                await CROTypeOption.click();
                const [CROaddress] = await page1.$x("(//input[@formcontrolname='address'])[3]");
                await CROaddress.type('Mylapore, Chennai');
                const [CROContactPerson] = await page1.$x("(//input[@formcontrolname='contactName'])[3]");
                await CROContactPerson.type('Bhavani');
                const [CROContactNo] = await page1.$x("(//input[@formcontrolname='contactNumber'])[3]");
                await CROContactNo.type('9988776655');
                const [CROContactEmail] = await page1.$x("(//input[@formcontrolname='contactEmail'])[3]");
                await CROContactEmail.type('br1@gmail.com');
                const [addCRODetails] = await page1.$x("(//span[contains(text(),'Add')])[3]");
                await addCRODetails.click();

                const [SponsorName] = await page1.$x("(//input[@formcontrolname='name'])[4]");
                await SponsorName.type('Sponsor 1');
                //await page1.type('[formcontrolname=address]', 'Anna Nagar, Chennai');
                const [SponsorType] = await page1.$x("(//div[@id='mat-select-value-11']//span[1]");
                await SponsorType.click();
                const [SponsorTypeOption] = await page1.$x("//span[text()=' Quality Assurance ']");
                await SponsorTypeOption.click();
                const [Sponsoraddress] = await page1.$x("(//input[@formcontrolname='address'])[4]");
                await Sponsoraddress.type('Mylapore, Chennai');
                const [SponsorContactPerson] = await page1.$x("(//input[@formcontrolname='contactName'])[4]");
                await SponsorContactPerson.type('Bhavani');
                const [SponsorContactNo] = await page1.$x("(//input[@formcontrolname='contactNumber'])[4]");
                await SponsorContactNo.type('9988776655');
                const [SponsorContactEmail] = await page1.$x("(//input[@formcontrolname='contactEmail'])[4]");
                await SponsorContactEmail.type('br1@gmail.com');
                const [addSponsorDetails] = await page1.$x("(//span[contains(text(),'Add')])[4]");
                await addSponsorDetails.click();

                const [VendorName] = await page1.$x("(//input[@formcontrolname='name'])[5]");
                await VendorName.type('XYZ Pvt Ltd');
                //await page1.type('[formcontrolname=address]', 'Anna Nagar, Chennai');
                const [VendorType] = await page1.$x("(//div[@id='mat-select-value-13']//span[1]");
                await VendorType.click();
                const [VendorTypeOption] = await page1.$x("//span[text()=' Subtitling ']");
                await VendorTypeOption.click();
                const [Vendoraddress] = await page1.$x("(//input[@formcontrolname='address'])[5]");
                await Vendoraddress.type('Mylapore, Chennai');
                const [VendorContactPerson] = await page1.$x("(//input[@formcontrolname='contactName'])[5]");
                await VendorContactPerson.type('Bhavani');
                const [VendorContactNo] = await page1.$x("(//input[@formcontrolname='contactNumber'])[5]");
                await VendorContactNo.type('9988776655');
                const [VendorContactEmail] = await page1.$x("(//input[@formcontrolname='contactEmail'])[5]");
                await VendorContactEmail.type('br1@gmail.com');
                const [addVendorDetails] = await page1.$x("(//span[contains(text(),'Add')])[5]");
                await addVendorDetails.click();

                const [Name] = await page1.$x("(//input[@formcontrolname='name'])[6]");
                await Name.type('Bhavani');
                const [designation] = await page1.$x("//input[@formcontrolname='designation']");
                await designation.type('QA');
                const [phone] = await page1.$x("//input[@formcontrolname='phone']");
                await phone.type('9977668800');
                const [place] = await page1.$x("//input[@formcontrolname='place']");
                await place.type('9977668800');
                const [SubmitAssociate] = await page1.$x("//input[@formcontrolname='place']");
                await SubmitAssociate.click();

                const [UploadDoc] = await Promise.all([
                    page1.waitForFileChooser("//span[text()=' Upload Document ']"),
                    page1.click(),
                    ]);
                await UploadDoc.accept(['C:/Users/hp/Pictures/Downloads/Digital_contract_template_EC.pdf']);
                console.log('Contract Document Uploaded Successfully');
            
                const [SubmitDoc] = await page1.$x("//span[text()='Submit']");
                await SubmitDoc.click();
                 }

        await page1.screenshot({
            path: `BD_Users/Ethics_Committee/Ethics_Committee_Contract_${getDateString()}.png`,
            fullPage: true  
        }); 
        await page1.click('[id=unite_ECUserApprove]');
await recorder1.stop();
await page1.close();
await browser.close();
   
})

it.only("Reject User",async()=>{
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
  await recorder.start(`BD_User/Ethics_Committee/Login_${getDateString()}.mp4`);

   // destination.txt will be created or overwritten by default.
  //  fs.copyFile('Blogs/Login(1).mp4', `Blogs/Login(1)_${getDateString()}.mp4`, (err) => {
  //   if (err) throw err;
  //   console.log('OK! Login File Name generated with Current Date & Time');
  // });
await page.setViewport({width: 1200, height: 720})
//Navigate to the url
await page.goto('http://localhost:4200/', { waitUntil: 'networkidle2',timeout: 50000} );

await page.type('[type=email]', 'dinesh@yopmail.com')
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
    path: `BD_Users/Ethics_Committee/Dashboard_${getDateString()}.png`,
    fullPage: true  
});
await recorder.stop();

   //await fullPageScreenshot(page,{path: 'Dashboard.png'});

    const page1 = await browser.newPage();
    const recorder1 = new PuppeteerScreenRecorder(page1,config);
    await recorder1.start(`BD_Users/Ethics_Committee/Reject_User_${getDateString()}.mp4`);
    // fs.copyFile('Blogs/Create_Blog.mp4', `Blogs/Create_Blog_${getDateString()}.mp4`, (err) => {
    //     if (err) throw err;
    //     console.log('OK! Create_Blog File Name generated with Current Date & Time');
    //   });
    await page1.setViewport({width: 1200, height: 720})
   //Navigate to the url
    await page1.goto('http://localhost:4200/ethics-committee', { waitUntil: 'networkidle2',timeout: 50000} );
    console.log("Ethics Committee Users List Page opened Successfully");
    await page1.screenshot({
        path: `BD_Users/Ethics_Committee/Ethics_Committee_UserList_${getDateString()}.png`,
        fullPage: true  
    });   
    await page1.click('[id=unite_Verifybutton]');
    await page1.screenshot({
        path: `BD_Users/Ethics_Committee/Ethics_Committee_Details_${getDateString()}.png`,
        fullPage: true  
    }); 
    await page1.click('[id=unite_ECDetails]');
    await page1.click('[id=unite_ECUserReject]');
    await page1.click('[type=reset]');

    await page1.click('[id=unite_ECUserReject]');
    await page1.type('[formcontrolname=reason]', 'Test Reject User Reason');
    
    const [RejectUser] = await page1.$x("//button[@type='submit']//span[@class='mat-button-wrapper'][normalize-space()='Reject']");
    await RejectUser.click();
await recorder1.stop();
await page1.close();
await browser.close();
})

it.only("View Approved User",async()=>{
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
  await recorder.start(`BD_User/Ethics_Committee/Login_${getDateString()}.mp4`);

   // destination.txt will be created or overwritten by default.
  //  fs.copyFile('Blogs/Login(1).mp4', `Blogs/Login(1)_${getDateString()}.mp4`, (err) => {
  //   if (err) throw err;
  //   console.log('OK! Login File Name generated with Current Date & Time');
  // });
await page.setViewport({width: 1200, height: 720})
//Navigate to the url
await page.goto('http://localhost:4200/', { waitUntil: 'networkidle2',timeout: 50000} );

await page.type('[type=email]', 'dinesh@yopmail.com')
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
    path: `BD_Users/Ethics_Committee/Dashboard_${getDateString()}.png`,
    fullPage: true  
});
await recorder.stop();

   //await fullPageScreenshot(page,{path: 'Dashboard.png'});

    const page1 = await browser.newPage();
    const recorder1 = new PuppeteerScreenRecorder(page1,config);
    await recorder1.start(`BD_Users/Ethics_Committee/Reject_User_${getDateString()}.mp4`);
    // fs.copyFile('Blogs/Create_Blog.mp4', `Blogs/Create_Blog_${getDateString()}.mp4`, (err) => {
    //     if (err) throw err;
    //     console.log('OK! Create_Blog File Name generated with Current Date & Time');
    //   });
    await page1.setViewport({width: 1200, height: 720})
   //Navigate to the url
    await page1.goto('http://localhost:4200/ethics-committee', { waitUntil: 'networkidle2',timeout: 50000} );
    console.log("Ethics Committee Users List Page opened Successfully");
    await page1.screenshot({
        path: `BD_Users/Ethics_Committee/Ethics_Committee_UserList_${getDateString()}.png`,
        fullPage: true  
    });   
    await page1.click('[id=unite_Viewbutton]');
    await page.screenshot({
        path: `BD_Users/Ethics_Committee/View_ECOrg_${getDateString()}.png`,
        fullPage: true  
    });

    await page1.click('[id=mat-tab-label-0-0]');
    await page1.screenshot({
      path: `BD_Users/Ethics_Committee/EC_About_${getDateString()}.png`,
      fullPage: true  
  });

  await page1.click('[id=mat-tab-label-0-1]');
    await page1.screenshot({
      path: `BD_Users/Ethics_Committee/EC_Documents_${getDateString()}.png`,
      fullPage: true  
  });

await page1.click('[id=mat-tab-label-0-2]');
await page1.screenshot({
  path: `BD_Users/Ethics_Committee/EC_Service_${getDateString()}.png`,
  fullPage: true  
});

await page1.click('[id=mat-tab-label-0-3]');
await page1.screenshot({
  path: `BD_Users/Ethics_Committee/EC_Therapeutics_${getDateString()}.png`,
  fullPage: true  
});

await page1.click('[id=mat-tab-label-0-4]');
await page1.screenshot({
  path: `BD_Users/Ethics_Committee/EC_Team_${getDateString()}.png`,
  fullPage: true  
});
const [Backbutton] = await page1.$x("//button[contains(@class,'btn btn-primary')]");
    await Backbutton.click();
    
})
})