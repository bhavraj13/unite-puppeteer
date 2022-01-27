describe("Test Suite - Contract Templates",()=>{
    it.only("Manage Contract Templates",async()=>{
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
      await recorder.start(`Contract_Templates/Login_${getDateString()}.mp4`);

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
        path: `Contract_Templates/Dashboard_${getDateString()}.png`,
        fullPage: true  
    });
   
    await recorder.stop();

    const page1 = await browser.newPage();
    const recorder1 = new PuppeteerScreenRecorder(page1,config);
    await recorder1.start(`Contract_Templates/Manage_Contract_Templates_${getDateString()}.mp4`);
    await page1.setViewport({width: 1200, height: 720})
   //Navigate to the url
    await page1.goto('http://localhost:4200/contract', { waitUntil: 'networkidle2',timeout: 50000} );
    console.log("List of Groups Page opened Successfully");

    await page.screenshot({
        path: `Contract_Templates/List_of_Groups_${getDateString()}.png`,
        fullPage: true  
    });

    //await page1.click('[id=unite_viewCategory]');

    const [viewCategory] = await page1.$x("(//button[@id='unite_viewCategory'])[1]");
    await viewCategory.click();

    const [agreement] = await page1.$x("(//button[@id='unite_agreement'])[1]");
    await agreement.click();

    await page1.waitForSelector('[id=unite_createAgreement]');
    if (await page1.$('[formcontrolname=quantity]') !== null) {
        await page1.click('[id=unite_createAgreement]');
        await page1.click('[id=unite_backAgreement]');

        await page1.click('[id=unite_createAgreement]');
        await page1.type('[formcontrolname=templateName]', 'Test Agreement');

        const [uploadAgreement] = await Promise.all([
            page1.waitForFileChooser('[id=unite_uploadAgreement]'),
            page1.click(),
            ]);
        await uploadAgreement.accept(['C:/Users/hp/Download/Digital_contract_template_EC (1).pdf']);
        console.log('Agreement Uploaded Successfully');

        await page1.click('[id=unite_publishAgreement]');

}
    else{
        await page1.click('[id=unite_viewAgreement]');

        await page1.click('[id=unite_downloadPreviewAgreement]');

        await page1.click('[id=unite_backPreviewAgreement]');

        await page1.click('[id=unite_updateAgreement]');

        const [uploadAgreement1] = await Promise.all([
            page1.waitForFileChooser('[id=unite_uploadAgreement]'),
            page1.click(),
            ]);
        await uploadAgreement1.accept(['C:/Users/hp/Download/Digital_contract_template_EC (1).pdf']);
        console.log('Agreement Uploaded Successfully');

        await page1.click('[id=unite_updatePublishAgreement]');
    
    }

    const [Template] = await page1.$x("(//button[@id='unite_Template'])[1]");
    await Template.click();

    await page1.waitForSelector('[id=unite_createTemplate]');
    if (await page1.$('[formcontrolname=quantity]') !== null) {
        await page1.click('[id=unite_createTemplate]');
        await page1.click('[id=unite_backTemplate]');

        await page1.click('[id=unite_createTemplate]');
        await page1.type('[formcontrolname=templateName]', 'Test Template');

        const [uploadTemplate] = await Promise.all([
            page1.waitForFileChooser('[id=unite_uploadTemplate]'),
            page1.click(),
            ]);
        await uploadTemplate.accept(['C:/Users/hp/Download/Digital_contract_template_EC (1).pdf']);
        console.log('Template Uploaded Successfully');

        await page1.click('[id=unite_publishTemplate]');

}
    else{
        await page1.click('[id=unite_viewTemplate]');

        await page1.click('[id=unite_downloadPreviewTemplate]');

        await page1.click('[id=unite_backPreviewTemplate]');

        await page1.click('[id=unite_updateTemplate]');

        const [uploadTemplate1] = await Promise.all([
            page1.waitForFileChooser('[id=unite_uploadTemplate]'),
            page1.click(),
            ]);
        await uploadTemplate1.accept(['C:/Users/hp/Download/Digital_contract_template_EC (1).pdf']);
        console.log('Template Uploaded Successfully');

        await page1.click('[id=unite_updatePublishTemplate]');
    
    }

    await recorder1.stop();
    await page1.close();
    await browser.close();

})
})