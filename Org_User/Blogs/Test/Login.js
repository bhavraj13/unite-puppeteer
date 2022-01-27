const puppeteer = require('puppeteer'); 
("Login with Valid Credentials", async() => {    //launching the headless browser
    const browser = await puppeteer.launch({ headless: false });
   //Create instance of the browser
    const page = await browser.newPage();
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
    //await page.click("//mat-select[@placeholder='Select Role']//div//div//span[contains(text(),'Select Role')]")
    await browser.close();
 })();