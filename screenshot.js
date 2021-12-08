const {chromium} = require('playwright');

( async() => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://applitools.com/');
    // window
    await page.screenshot({path: 'screenshot.png'});
    // element
    const logo = await page.$('.logo');
    await logo.screenshot({path: 'logo.png'});
    // whole page
    await page.screenshot({path: 'whole.png', fullPage: true});

    await browser.close();
})();