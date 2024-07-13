const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');

const siteUrl = 'http://the-internet.herokuapp.com/tables';

describe('Table Sorting Test', function () {
    let driver;

    function arrayIsSorted(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                return false;
            }
        }
        return true;
    }

    before(async function () {
        const options = new chrome.Options();
        options.addArguments('headless');

        driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();
    });

    it('should sort the "Due" column in ascending order', async function () {
        try {
            await driver.get(siteUrl);
            const table = await driver.findElement(By.id('table2'));
            const dueHeader = await table.findElement(By.css('thead th:nth-of-type(4)'));
            await dueHeader.click();
            await driver.sleep(2000);
            const rows = await table.findElements(By.css('tbody tr'));

            let dueColumnValues = [];
            for (let i = 0; i < rows.length; i++) {
                const cells = await rows[i].findElements(By.css('td'));
                const dueValue = await cells[3].getText();
                dueColumnValues.push(dueValue.trim());
            }

            const dueColumnNumbers = dueColumnValues.map(value => parseFloat(value.replace(/[^\d.-]/g, '')));
            const isSorted = arrayIsSorted(dueColumnNumbers);
            assert.strictEqual(isSorted, true, 'Values in the "Due" column are not sorted in ascending order');

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
