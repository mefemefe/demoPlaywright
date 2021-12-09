const { chromium } = require('playwright');
const HomePage = require('../pages/homePage');
const LoginPage = require('../pages/loginPage');

describe('Applitools demo page', () => {
    jest.setTimeout(30000);
    let browser = null;
    let context = null;
    let page = null;
    let homePage = null;
    let loginPage = null;

    beforeAll( async () => {
        browser = await chromium.launch({ headless: false});
        context = await browser.newContext();
        page = await context.newPage();
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        await loginPage.navigate();
    });

    afterAll( async () => {
        await context.close();
        await browser.close();
    });

    it('should login', async() => {
        await loginPage.login('username','password');
        expect(await page.title()).not.toBeNull();
    });

    it('should be logged in', async() => {
        expect(await homePage.getUserName()).toBe('Jack Gomez');
    });

    it('should have a balance of $350', async() => {
        expect(await homePage.getBalance('total')).toBe('$350');
    });

    it('should have a credit of $17800', async() => {
        expect(await homePage.getBalance('credit')).toBe('$17,800');
    });

    it('should have a due of $180', async() => {
        expect(await homePage.getBalance('due')).toBe('$180');
    });
});