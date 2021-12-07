const {chromium} = require('playwright');

( async() => {
    const browser = await chromium.launch({headless:false, slowMo: 100});
    const page = await browser.newPage();
    await page.goto('https://the-internet.herokuapp.com/forgot_password');
    const email = await page.$('#email');
    await email.type('hello world', { delay : 50});
    await browser.close();
})();