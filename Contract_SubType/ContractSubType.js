const { config } = require('chai');
const puppeteer = require('puppeteer'); 
const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');
//import fullPageScreenshot from 'puppeteer-full-page-screenshot';
//var puppeteerfullPageScreenshot = require ('puppeteer-full-page-screenshot');

describe("Test Suite - Contract SubType",()=>{
    it.only("Manage Contract SubTypes",async()=>{
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
      await recorder.start(`Contract_SubType/Login_${getDateString()}.mp4`);

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
        path: `Contract_SubType/Dashboard_${getDateString()}.png`,
        fullPage: true  
    });
   
    await recorder.stop();

    const page1 = await browser.newPage();
    const recorder1 = new PuppeteerScreenRecorder(page1,config);
    await recorder1.start(`Contract_SubType/Manage_Contract_SubTypes_${getDateString()}.mp4`);
    await page1.setViewport({width: 1200, height: 720})
   //Navigate to the url
    await page1.goto('http://localhost:4200/contract-organization', { waitUntil: 'networkidle2',timeout: 50000} );
    console.log("Ethics Committee List Page opened Successfully");
    
    await page1.click('[id=unite_addEC]');
    await page1.type('[id=unite_ECname]', 'Sample Ethics Committee')
    await page1.click('[id=unite_submitEC]');

    await page1.click('[id=unite_addEC]');
    await page1.click('[id=unite_closeEC]');

    await page1.screenshot({
        path: `Contract_SubType/EC_Contract_SubType_List_${getDateString()}.png`,
        fullPage: true  
    });   

    //await page1.click('[id=unite_updateEC]');

    const [updateEC] = await page1.$x("(//button[contains(@class,'btn btn-success')])[3]");
    await updateEC.click();
    await page1.type('[id=unite_ECupdatename]', 'Assay Ethics Committee')
    await page1.click('[id=unite_submitupdatedEC]');

    const [updateEC1] = await page1.$x("(//button[contains(@class,'btn btn-success')])[3]");
    await updateEC1.click();
    await page1.click('[id=unite_closeupdatedEC]');

    const [deleteEC] = await page1.$x("(//button[@id='unite_deleteEC'])[3]");
    await deleteEC.click();

    await page1.click('[id=unite_sponsor]');
    await page1.click('[id=unite_addSponsor]');
    await page1.type('[id=unite_Sponsorname]', 'Sample Sponsor')
    await page1.click('[id=unite_submitSponsor]');

    await page1.click('[id=unite_addSponsor]');
    await page1.click('[id=unite_closeSponsor]');

    await page1.screenshot({
        path: `Contract_SubType/Sponsor_Contract_SubType_List_${getDateString()}.png`,
        fullPage: true  
    });

    const [updateSponsor] = await page1.$x("(//button[@id='unite_updateSponsor'])[12]");
    await updateSponsor.click();
    await page1.type('[id=unite_Sponsorupdatename]', 'Assay Sponsor')
    await page1.click('[id=unite_submitupdatedSponsor]');

    const [updateSponsor1] = await page1.$x("(//button[@id='unite_updateSponsor'])[12]");
    await updateSponsor1.click();
    await page1.click('[id=unite_closeupdatedSponsor]');

    const [deleteSponsor] = await page1.$x("(//button[@id='unite_deleteSponsor'])[12]");
    await deleteSponsor.click();

    await page1.click('[id=unite_site]'); 
    await page1.click('[id=unite_addSite]');
    await page1.type('[id=unite_Sitename]', 'Sample Ethics Committee')
    await page1.click('[id=unite_submitSite]');

    await page1.click('[id=unite_addSite]');
    await page1.click('[id=unite_closeSite]');

    await page1.screenshot({
        path: `Contract_SubType/Site_Contract_SubType_List_${getDateString()}.png`,
        fullPage: true  
    });

    const [updateSite] = await page1.$x("(//button[@id='unite_updateSite'])[15]");
    await updateSite.click();
    await page1.type('[id=unite_Siteupdatename]', 'Assay Hospital Site')
    await page1.click('[id=unite_submitupdatedSite]');

    const [updateSite1] = await page1.$x("(//button[@id='unite_updateSite'])[15]");
    await updateSite1.click();
    await page1.click('[id=unite_closeupdatedSite]');

    const [deleteSite] = await page1.$x("(//button[@id='unite_deleteSite'])[15]");
    await deleteSite.click();

    await page1.click('[id=unite_cro]');
    await page1.click('[id=unite_addCRO]');
    await page1.type('[id=unite_CROname]', 'Sample CRO')
    await page1.click('[id=unite_submitCRO]');

    await page1.click('[id=unite_addCRO]');
    await page1.click('[id=unite_closeCRO]');

    await page1.screenshot({
        path: `Contract_SubType/CRO_Contract_SubType_List_${getDateString()}.png`,
        fullPage: true  
    });

    const [updateCRO] = await page1.$x("(//button[@id='unite_updateCRO'])[12]");
    await updateCRO.click();
    await page1.type('[id=unite_CROupdatename]', 'Assay CRO')
    await page1.click('[id=unite_submitupdatedCRO]');

    const [updateCRO1] = await page1.$x("(//button[@id='unite_updateCRO'])[12]");
    await updateCRO1.click();
    await page1.click('[id=unite_closeupdatedCRO]');

    const [deleteCRO] = await page1.$x("(//button[@id='unite_deleteCRO'])[12]");
    await deleteCRO.click();



    await page1.click('[id=unite_vendor]');
    await page1.click('[id=unite_addVendor]');
    await page1.type('[id=unite_Vendorname]', 'Sample Vendor')
    await page1.click('[id=unite_submitVendor]');

    await page1.click('[id=unite_addVendor]');
    await page1.click('[id=unite_closeVendor]');

    await page1.screenshot({
        path: `Contract_SubType/Vendor_Contract_SubType_List_${getDateString()}.png`,
        fullPage: true  
    });

    const [updateVendor] = await page1.$x("(//button[@id='unite_updateVendor'])[12]");
    await updateVendor.click();
    await page1.type('[id=unite_Vendorupdatename]', 'Assay Vendor')
    await page1.click('[id=unite_submitupdatedVendor]');

    const [updateVendor1] = await page1.$x("(//button[@id='unite_updateVendor'])[12]");
    await updateVendor1.click();
    await page1.click('[id=unite_closeupdatedVendor]');

    const [deleteVendor] = await page1.$x("(//button[@id='unite_deleteVendor'])[12]");
    await deleteVendor.click();

    await recorder1.stop();
    await page1.close();
    await browser.close();

})
})