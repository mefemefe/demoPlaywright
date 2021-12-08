const { chromium } = require('playwright');

describe('UI test for bookstore using playwright', () => {
    
    let browser = null;
    let page = null;
    let context = null;
    let firstRowCells = null;

    beforeAll(async() => {
        browser = await chromium.launch({headless: false});
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://demoqa.com/books');

    });

    afterAll(async() => {
        await browser.close();
    });

    test('should load page', async() => {
        expect(page).not.toBeNull();
        expect(await page.title()).not.toBeNull();
    });

    test('should be able to search', async() => {
        await page.fill('#searchBox','eloquent');
    });

    test('should check if book image is okay', async() =>{
        firstRowCells = await page.$$('.ReactTable .rt-tr-group:nth-child(1) .rt-td');
        let imgUrl = await firstRowCells[0].$('img');
        expect(await imgUrl.getAttribute('src')).not.toBeNull();
    });

    test('should check if title is okay', async() => {
        expect(await firstRowCells[1].innerText()).toBe('Eloquent JavaScript, Second Edition');
    });

    test('should check if author is okay', async() => {
        expect(await firstRowCells[2].innerText()).toBe('Marijn Haverbeke');
    });

    test('should check if publisher is okay', async() => {
        expect(await firstRowCells[3].innerText()).toBe('No Starch Press');
    });
    

});