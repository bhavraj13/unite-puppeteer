const puppeteer = require('puppeteer'); 
("Verify Blog List Page", async() => {   
     //launching the headless browser
     const browser = await puppeteer.launch({ headless: false , defaultViewport: null, args:['--start-maximized'] });
     //Create instance of the browser
    const page = await browser.newPage();
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

    const page1 = await browser.newPage();
    await page1.setViewport({width: 1200, height: 720})
   //Navigate to the url
    await page1.goto('http://localhost:4200/blogs', { waitUntil: 'networkidle2',timeout: 50000} );
    console.log("Blog List Page opened Successfully");

    // await page1.click('[id=listpreview]');
    // console.log("Preview Page of the Blog opened Successfully");

    //await page1.click('[id=backarrow]');

    await page1.click('[id=deleteblog]');

    await browser.close();

})();