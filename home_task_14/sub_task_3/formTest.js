const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');

const siteUrl = 'http://formy-project.herokuapp.com/form';

describe('Form Fill Test', function () {
    let driver;

    before(async function () {
        const options = new chrome.Options();
        options.addArguments('headless');

        driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();
    });

    it('should fill out and submit the form', async function () {
        try {
            await driver.get(siteUrl);
            await driver.findElement(By.id('first-name')).sendKeys('Peter');
            await driver.findElement(By.id('last-name')).sendKeys('Peterson');
            await driver.findElement(By.id('job-title')).sendKeys('tester');
            await driver.findElement(By.id('radio-button-1')).click();
            await driver.findElement(By.css('input[value="checkbox-1"]')).click();
            const experienceDropdown = await driver.findElement(By.id('select-menu'));
            await experienceDropdown.findElement(By.css('option[value="2"]')).click();
            await driver.findElement(By.id('datepicker')).sendKeys('12/12/2020');
            await driver.findElement(By.css('.btn.btn-lg.btn-primary')).click();

            const successMessage = await driver.wait(until.elementLocated(By.css('.alert.alert-success')), 10000);
            const messageText = await successMessage.getText();
            assert.strictEqual(messageText.trim(), 'The form was successfully submitted!', 'Success message text is incorrect');
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
