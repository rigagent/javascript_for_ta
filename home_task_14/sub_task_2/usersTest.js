const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');

const siteUrl = 'http://the-internet.herokuapp.com/hovers';

describe('Hover Test', function () {
    let driver;

    before(async function () {
        const options = new chrome.Options();
        options.addArguments('headless');

        driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();
        });

    it('should verify hover text for all user avatars', async function () {
        try {
            await driver.get(siteUrl);
            const userAvatars = await driver.findElements(By.className('figure'));
  
            for (let i = 0; i < userAvatars.length; i++) {
                await driver.actions({ bridge: true }).move({ origin: userAvatars[i] }).perform();
                const hoverText = await driver.findElement(By.css(`.figure:nth-of-type(${i + 1}) .figcaption h5`));
                const text = await hoverText.getText();
                assert.strictEqual(text.trim(), `name: user${i + 1}`, `Hover text for avatar ${i + 1} does not match expected value`);
            }
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
