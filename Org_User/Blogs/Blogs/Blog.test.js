const { config } = require('chai');
const puppeteer = require('puppeteer'); 
const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');
//import fullPageScreenshot from 'puppeteer-full-page-screenshot';
//var puppeteerfullPageScreenshot = require ('puppeteer-full-page-screenshot');

describe("Test Suite - Blog",()=>{
    it.only("Create Blog",async()=>{
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
      await recorder.start(`Blogs/Login(1)_${getDateString()}.mp4`);

       // destination.txt will be created or overwritten by default.
      //  fs.copyFile('Blogs/Login(1).mp4', `Blogs/Login(1)_${getDateString()}.mp4`, (err) => {
      //   if (err) throw err;
      //   console.log('OK! Login File Name generated with Current Date & Time');
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
        path: `Blogs/Dashboard(1)_${getDateString()}.png`,
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
    await recorder1.start(`Blogs/Create_Blog_${getDateString()}.mp4`);
    // fs.copyFile('Blogs/Create_Blog.mp4', `Blogs/Create_Blog_${getDateString()}.mp4`, (err) => {
    //     if (err) throw err;
    //     console.log('OK! Create_Blog File Name generated with Current Date & Time');
    //   });
    await page1.setViewport({width: 1200, height: 720})
   //Navigate to the url
    await page1.goto('http://localhost:4200/blogs', { waitUntil: 'networkidle2',timeout: 50000} );
    console.log("Blog List Page opened Successfully");
    await page1.screenshot({
        path: `Blogs/Blog_List(1)_${getDateString()}.png`,
        fullPage: true  
    });   
    // fs.copyFile('Blogs/Blog_List(1).png', `Blogs/Blog_List(1)_${getDateString()}.png`, (err) => {
    //     if (err) throw err;
    //     console.log('OK! Blog_List File Name generated with Current Date & Time');
    //   });
    //await fullPageScreenshot(page1,{path: 'Bloglist.png'});

   await page1.click("button.btn.btn-primary");
   console.log("New Blog page opened Successfully");

    await page1.type('[formcontrolname=title]', 'Test Blog 1');
    console.log("Title Name as Test Blog has been entered in Title Text field");

    await page1.type('[formcontrolname=summary]', 'Test Summary Blog 1');
    console.log("Summary has been entered in Summary Text field");

    await page1.type("div.ql-editor.ql-blank", 'What is blog content writing? Content writing is the process of planning, writing and editing web content, typically for digital marketing purposes. It can include writing blog posts and articles, scripts for videos and podcasts, as well as content for specific platforms');
     const [fileChooser] = await Promise.all([
        page1.waitForFileChooser(),
        page1.click("[id=blogcoverimage]"),
        ]);
    await fileChooser.accept(['C:/Users/hp/Pictures/Images/CRO2.jpg']);
    console.log("Blog Cover Image has been uploaded Successfully");
    await page1.waitForTimeout(10000);
    //await page1.screenshot({path: 'Bloglist.png'});

    const [blogdoc] = await Promise.all([
      page1.waitForFileChooser(),
      page1.click("[id=blogdocument]"),
      ]);
  await blogdoc.accept(['C:/Users/hp/Downloads/Get_Started_With_Smallpdf.pdf']);
  console.log("Blog pdf Document has been uploaded Successfully");

  await page1.click('[id=newblogpreview]');
  console.log("Preview Page of the Blog opened Successfully");
  await page1.waitForTimeout(5000);
  await page1.screenshot({
    path: `Blogs/Blog_Preview_${getDateString()}.png`,
    fullPage: true  
});
// fs.copyFile('Blogs/Blog_Preview.png', `Blogs/Blog_Preview_${getDateString()}.png`, (err) => {
//     if (err) throw err;
//     console.log('OK! Blog_Preview File Name generated with Current Date & Time');
//   });

  //await fullPageScreenshot(page1,{path: 'Blog_Preview.png'});

  await page1.click('[id=editblog]');
  console.log("Edit Blog Page opened Successfully");
  await page1.waitForTimeout(5000);

  await page1.click('[type=submit]');
  await page1.waitForTimeout(5000);

  await page1.close();
  await recorder1.stop();

  await browser.close();

    })

        // *********Another Test Case**********

    it("Preview & Delete Blog",async()=>{
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
      await recorder.start(`Blogs/Login(2)_${getDateString()}.mp4`);
       // destination.txt will be created or overwritten by default.
      //  fs.copyFile('Blogs/Login(2).mp4', `Blogs/Login(2)_${getDateString()}.mp4`, (err) => {
      //   if (err) throw err;
      //   console.log('OK! Login Video File Name generated with Current Date & Time');
      // });
    //await page.setViewport({width: 1200, height: 720})
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
        path: `Blogs/Dashboard(2)_${getDateString()}.png`,
        fullPage: true  
    });
    // fs.copyFile('Blogs/Dashboard(2).png', `Blogs/Dashboard(2)_${getDateString()}.png`, (err) => {
    //     if (err) throw err;
    //     console.log('OK! Dashboard Image File Name generated with Current Date & Time');
    //   });
    await recorder.stop();
    await page.close();
        //await fullPageScreenshot(page,{path: 'Blogs/Dashboard.png'});

    const page1 = await browser.newPage();
    const recorder1 = new PuppeteerScreenRecorder(page1,config);
    await recorder1.start(`Blogs/Preview_${getDateString()}.mp4`);
    // fs.copyFile('Blogs/Preview.mp4', `Blogs/Preview_${getDateString()}.mp4`, (err) => {
    //     if (err) throw err;
    //     console.log('OK! Preview Video File Name generated with Current Date & Time');
    //   });
    await page1.setViewport({width: 1200, height: 720})
   //Navigate to the url
    await page1.goto('http://localhost:4200/blogs', { waitUntil: 'networkidle2',timeout: 50000} );
    console.log("Blog List Page opened Successfully");
    await page1.waitForTimeout(5000);
    await page1.screenshot({
        path: `Blogs/Blog_List(2)_${getDateString()}.png`,
        fullPage: true  
    });   
    // fs.copyFile('Blogs/Blog_List(2).png', `Blogs/Blog_List(2)_${getDateString()}.png`, (err) => {
    //     if (err) throw err;
    //     console.log('OK! Blog_List Image File Name generated with Current Date & Time');
    //   });
     //await fullPageScreenshot(page1,{path: 'Blogs/Blog_List.png'});

    await page1.click('[id=listpreview]');
    console.log("Preview Page of the Blog opened Successfully");
    await page1.waitForTimeout(10000);
    await page1.screenshot({
        path: `Blogs/Blog_ListPreview_${getDateString()}.png`,
        fullPage: true  
    }); 
    // fs.copyFile('Blogs/Blog_ListPreview.png', `Blogs/Blog_ListPreview_${getDateString()}.png`, (err) => {
    //     if (err) throw err;
    //     console.log('OK! Blog_ListPreview Image File Name generated with Current Date & Time');
    //   });
    // //    await fullPageScreenshot(page1,{path: 'Blogs/Blog_ListPreview.png'});
    // await page1.goBack();

    await page1.close();
    await recorder1.stop();
    //await browser.close();

    const page2 = await browser.newPage();
    const recorder2 = new PuppeteerScreenRecorder(page2,config);
    await recorder2.start(`Blogs/Blog_Delete_${getDateString()}.mp4`);
    // fs.copyFile('Blogs/Blog_Delete.mp4', `Blogs/Blog_Delete_${getDateString()}.mp4`, (err) => {
    //     if (err) throw err;
    //     console.log('OK! Blog_Delete Video File Name generated with Current Date & Time');
    //   });
    await page2.setViewport({width: 1200, height: 720})
   //Navigate to the url
    await page2.goto('http://localhost:4200/blogs', { waitUntil: 'networkidle2',timeout: 50000} );
    console.log("Blog List Page opened Successfully");

    await page2.click('[id=deleteblog]');
    console.log("Blog Deleted Successfully");
    await page2.waitForTimeout(5000);

    await page2.close();
    await recorder2.stop();
    await browser.close();
    })

})
