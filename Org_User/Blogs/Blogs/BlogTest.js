const puppeteer = require('puppeteer'); 
("Verify Blog Menu", async() => {   
     //launching the headless browser
     const browser = await puppeteer.launch({ headless: false , defaultViewport: null, args:['--start-maximized'] });
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
    console.log('Role Selected Successfully');
    //await page.click("//mat-select[@placeholder='Select Role']//div//div//span[contains(text(),'Select Role')]")
    //const [blogMenu] = await page.$x("//p[text()='Blogs']");
   // console.log(blogMenu);
    //await blogMenu.click();
    //const [blogMenu] = await page.$x("//p[normalize-space()='Blogs']");
    //console.log(blogMenu);
    //const [MpMenu] = await page.$x("//ul[li[a[i[contains(text(),'business')]]]]");
    //console.log(MpMenu);

    //const [blogMenu] = await page.$x("//p[contains(normalize-space(),'Blogs')]");
    //console.log(blogMenu);

    //const [blogMenu] = await page.$x("//p[contains(.,'Blogs')]");
    //console.log(blogMenu);
    //await blogMenu.click();
    //await page.click('//a[@class='nav-link']//p)[3]');
    //const text = await page.evaluate(() =>  Array.from(document.querySelectorAll('.material-icons'), element => element.textContent))
    //console.log(text);
     //const text = await page.evaluate(() => {
     //const pg = document.querySelector("(.nav-item.nav-link.material-icons ::p)[3]");
     //console.log(pg);
     //const text = await page.evaluate(() => {
      //const pg = document.querySelector(".nav-item.nav-link.material-icons");
      //return pg.innerHTML;
     //})
     //console.log(text);
    //console.log(text[1]);
    //console.log(text[2]);
    //const [blogMenu] = await page.$x("(//a[@class='nav-link']");
    //console.log(blogMenu);
    //const [blogMenu] = await page.$x("(//i[@class='material-icons']/following-sibling::p)[3]");
    //console.log(blogMenu);
    //console.log('Blog Menu clicked');

    const page1 = await browser.newPage();
    await page1.setViewport({width: 1200, height: 720})
   //Navigate to the url
    await page1.goto('http://localhost:4200/blogs', { waitUntil: 'networkidle2',timeout: 50000} );
    console.log("Blog List Page opened Successfully");
    //const [createBlog] = await page.$x("//button[normalize-space()='+ Create Blog']");
    //await createBlog.click();
    //console.log(createBlog);
    //console.log("New Blog page opened Successfully");

    // const query = "button.btn.btn-primary";
    // const element = await this.page1.$(query);
    // if (element) {
    //  await element.click();
    //   console.log('Element clicked');
    //   }
    //   else {
    //   console.log('Element not found');
    //   }

   await page1.click("button.btn.btn-primary");
   console.log("New Blog page opened Successfully");

    await page1.type('[formcontrolname=title]', 'Test Blog 1');
    console.log("Title Name as Test Blog has been entered in Title Text field");

    await page1.type('[formcontrolname=summary]', 'Test Summary Blog 1');
    console.log("Summary has been entered in Summary Text field");

    //await autoScroll(page1);

    await page1.type("div.ql-editor.ql-blank", 'What is blog content writing? Content writing is the process of planning, writing and editing web content, typically for digital marketing purposes. It can include writing blog posts and articles, scripts for videos and podcasts, as well as content for specific platforms');

  //   const up = await page1.$x("(//span[@class='mat-button-wrapper'])[1]");
  //  await up.accept(['C:/Users/hp/Pictures/Images/CRO2.jpg']);

  //    page1.on("BlogCover", async(BlogCover) => {
  //    await BlogCover.setFiles("C:/Users/hp/Pictures/Images/CRO2.jpg")
  //    })
  //     //await page.click("//span[contains(text(),'Update Logo')]",{force: true})
  // await page1.click("//span[@class='mat-button-wrapper']/button[contains(., ' Blog Cover ')]",{force: true})

//   page1.on("BlogCover", async(BlogCover) => {
//     await BlogCover.setFiles("C:/Users/hp/Pictures/Images/CRO2.jpg")
//     })
//  await page1.click("//span[normalize-space()='Blog Cover']",{force: true})

    // const [Logo] = await page.$x("(//button[@type='button'])[20]",{force: true})
    //  await Logo.click();
  //   const [fileChooser] = await Promise.all([
  //     page1.waitForFileChooser(),
  //     // const [blogCover] = await page.$x("(//span[@class='mat-button-wrapper'])[1]"),
  //     // await blogCover.click(),
  //     page1.click("(//button[contains(@class,'mat-focus-indicator btn')]//span)[1]"),
  //     ]);
  // await fileChooser.accept(['C:/Users/hp/Pictures/Images/CRO2.jpg']);

     const [fileChooser] = await Promise.all([
        page1.waitForFileChooser(),
        // const [blogCover] = await page.$x("(//span[@class='mat-button-wrapper'])[1]"),
        // await blogCover.click(),
        page1.click("[id=blogcoverimage]"),
        ]);
    await fileChooser.accept(['C:/Users/hp/Pictures/Images/CRO2.jpg']);
    console.log("Blog Cover Image has been uploaded Successfully");

    const [blogdoc] = await Promise.all([
      page1.waitForFileChooser(),
      // const [blogCover] = await page.$x("(//span[@class='mat-button-wrapper'])[1]"),
      // await blogCover.click(),
      page1.click("[id=blogdocument]"),
      ]);
  await blogdoc.accept(['C:/Users/hp/Downloads/Get_Started_With_Smallpdf.pdf']);
  console.log("Blog pdf Document has been uploaded Successfully");

  await page1.click('[id=newblogpreview]');
  console.log("Preview Page of the Blog opened Successfully");

  await page1.click('[id=editblog]');
  console.log("Edit Blog Page opened Successfully");

  await page1.click('[type=submit]');

    await browser.close();
 })();