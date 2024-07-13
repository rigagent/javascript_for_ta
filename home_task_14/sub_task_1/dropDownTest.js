const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');

const siteUrl = 'http://the-internet.herokuapp.com/dropdown';

describe('Dropdown State Test', function () {
    let driver;

    before(async function () {
        const options = new chrome.Options();
        options.addArguments('headless');

        driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();
    });

    it('should check dropdown state', async function () {
        try {
            await driver.get(siteUrl);
            const dropdown = await driver.findElement(By.id('dropdown'));
            const firstOption = await dropdown.findElement(By.css('option:nth-of-type(1)'));
            const isFirstOptionEnabled = await firstOption.isEnabled();
            console.log('1st Element:', isFirstOptionEnabled ? 'Active' : 'Inactive');
            assert.strictEqual(isFirstOptionEnabled, false, '1st option should be inactive');

            const secondOption = await dropdown.findElement(By.css('option:nth-of-type(2)'));
            const isSecondOptionEnabled = await secondOption.isEnabled();            
            console.log('2nd Element:', isSecondOptionEnabled ? 'Active' : 'Inactive');
            assert.strictEqual(isSecondOptionEnabled, true, '2nd option should be active');

        } catch (error) {
            console.error('Error during test:', error);
            throw error;
        }
    });

    after(async function () {
        if (driver) {
            await driver.quit();
        }
    });
});
