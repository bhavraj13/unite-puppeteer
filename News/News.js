describe("Test Suite - News",()=>{
    it.only("Add News",async()=>{
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
      await recorder.start(`News/Login_${getDateString()}.mp4`);

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
        path: `News/Dashboard_${getDateString()}.png`,
        fullPage: true  
    });
   
    await recorder.stop();

    const page1 = await browser.newPage();
    const recorder1 = new PuppeteerScreenRecorder(page1,config);
    await recorder1.start(`News/Manage_News_${getDateString()}.mp4`);
    await page1.setViewport({width: 1200, height: 720})
   //Navigate to the url
    await page1.goto('http://localhost:4200/news', { waitUntil: 'networkidle2',timeout: 50000} );
    console.log("List of News Page opened Successfully");

    await page.screenshot({
        path: `News/List_of_News_${getDateString()}.png`,
        fullPage: true  
    });

    await page1.click('[id=unite_createNews]');

    const [newsImage] = await Promise.all([
        page1.waitForFileChooser('[id=unite_newsSelectImage]'),
        page1.click(),
        ]);
    await newsImage.accept(['C:/Users/hp/Pictures/Images/Jasmine.png']);
    console.log('News Image Uploaded Successfully');

    await page1.click('[id=unite_newsRemoveImage]');

    const [changeNewsImage] = await Promise.all([
        page1.waitForFileChooser('[id=unite_newsChangeImage]'),
        page1.click(),
        ]);
    await changeNewsImage.accept(['C:/Users/hp/Pictures/Images/Sponsor.jpg']);
    console.log('News Image Changed Successfully');

    await page1.type('[formcontrolname=title]', 'Test News Title');

    await page1.type('[formcontrolname=description]', 'Test News Description');

    await page1.click('[type=submit]');

    await page1.click('[id=unite_createNews]');
    await page1.click('[type=reset]');

    await page1.click('[id=unite_backNews]');

    const [viewNews] = await page1.$x("(//button[@id='unite_viewNews'])[5]");
    await viewNews.click(); 

    await page1.click('[routerlink=/news]');

    const [editNews] = await page1.$x("(//button[@id='unite_editNews'])[5]");
    await editNews.click(); 

    const [newsEditImage] = await Promise.all([
        page1.waitForFileChooser('[id=unite_editNewsSelectImage]'),
        page1.click(),
        ]);
    await newsEditImage.accept(['C:/Users/hp/Pictures/Images/Jasmine.png']);
    console.log('News Image Uploaded Successfully');

    await page1.click('[id=unite_newsRemoveImage]');

    const [changeNewsImage] = await Promise.all([
        page1.waitForFileChooser('[id=unite_editNewsChangeImage]'),
        page1.click(),
        ]);
    await changeNewsImage.accept(['C:/Users/hp/Pictures/Images/Sponsor.jpg']);
    console.log('News Image Changed Successfully');

    await page1.focus('[formcontrolname=title]');
    await page1.keyboard.down('Control');
    await page1.keyboard.press('A');
    await page1.keyboard.up('Control');
    await page1.keyboard.press('Backspace');
    await page1.keyboard.type('Edit Test News');

    await page1.focus('[formcontrolname=description]');
    await page1.keyboard.down('Control');
    await page1.keyboard.press('A');
    await page1.keyboard.up('Control');
    await page1.keyboard.press('Backspace');
    await page1.keyboard.type('Edit Test Description');

    await page1.click('[type=submit]');

    const [editNews1] = await page1.$x("(//button[@id='unite_editNews'])[5]");
    await editNews1.click();
    await page1.click('[type=reset]');

    await page1.click('[id=unite_backEditNews]');

    const [deleteNews] = await page1.$x("(//button[@id='unite_deleteNews'])[5]");
    await deleteNews.click();

})
})