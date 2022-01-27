describe("Test Suite - Events",()=>{
    it.only("Add Events",async()=>{
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
      await recorder.start(`Events/Login_${getDateString()}.mp4`);

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
        path: `Events/Dashboard_${getDateString()}.png`,
        fullPage: true  
    });
   
    await recorder.stop();

    const page1 = await browser.newPage();
    const recorder1 = new PuppeteerScreenRecorder(page1,config);
    await recorder1.start(`Events/Manage_Events_${getDateString()}.mp4`);
    await page1.setViewport({width: 1200, height: 720})
   //Navigate to the url
    await page1.goto('http://localhost:4200/events', { waitUntil: 'networkidle2',timeout: 50000} );
    console.log("List of Events Page opened Successfully");

    await page.screenshot({
        path: `Events/List_of_Events_${getDateString()}.png`,
        fullPage: true  
    });

    await page1.click('[id=unite_createEvents]');

    const [EventsImage] = await Promise.all([
        page1.waitForFileChooser('[id=unite_EventsSelectImage]'),
        page1.click(),
        ]);
    await EventsImage.accept(['C:/Users/hp/Pictures/Images/Jasmine.png']);
    console.log('Events Image Uploaded Successfully');

    await page1.click('[id=unite_EventsRemoveImage]');

    const [changeEventsImage] = await Promise.all([
        page1.waitForFileChooser('[id=unite_EventsChangeImage]'),
        page1.click(),
        ]);
    await changeEventsImage.accept(['C:/Users/hp/Pictures/Images/Sponsor.jpg']);
    console.log('Events Image Changed Successfully');

    await page1.type('[formcontrolname=title]', 'Test Events Title');

    await page1.type('[formcontrolname=description]', 'Test Events Description');

    await page1.click('[type=submit]');

    await page1.click('[id=unite_createEvents]');
    await page1.click('[type=reset]');

    await page1.click('[id=unite_backEvents]');

    const [viewEvents] = await page1.$x("(//button[@id='unite_viewEvents'])[5]");
    await viewEvents.click(); 

    await page1.click('[routerlink=/Events]');

    const [editEvents] = await page1.$x("(//button[@id='unite_editEvents'])[5]");
    await editEvents.click(); 

    const [EventsEditImage] = await Promise.all([
        page1.waitForFileChooser('[id=unite_editEventsSelectImage]'),
        page1.click(),
        ]);
    await EventsEditImage.accept(['C:/Users/hp/Pictures/Images/Jasmine.png']);
    console.log('Events Image Uploaded Successfully');

    await page1.click('[id=unite_EventsRemoveImage]');

    const [changeEventsImage] = await Promise.all([
        page1.waitForFileChooser('[id=unite_editEventsChangeImage]'),
        page1.click(),
        ]);
    await changeEventsImage.accept(['C:/Users/hp/Pictures/Images/Sponsor.jpg']);
    console.log('Events Image Changed Successfully');

    await page1.focus('[formcontrolname=title]');
    await page1.keyboard.down('Control');
    await page1.keyboard.press('A');
    await page1.keyboard.up('Control');
    await page1.keyboard.press('Backspace');
    await page1.keyboard.type('Edit Test Events');

    await page1.focus('[formcontrolname=description]');
    await page1.keyboard.down('Control');
    await page1.keyboard.press('A');
    await page1.keyboard.up('Control');
    await page1.keyboard.press('Backspace');
    await page1.keyboard.type('Edit Test Description');

    await page1.click('[type=submit]');

    const [editEvents1] = await page1.$x("(//button[@id='unite_editEvents'])[5]");
    await editEvents1.click();
    await page1.click('[type=reset]');

    await page1.click('[id=unite_backEditEvents]');

    const [deleteEvents] = await page1.$x("(//button[@id='unite_deleteEvents'])[5]");
    await deleteEvents.click();

})
})

