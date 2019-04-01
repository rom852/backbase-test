import {browser, element, ElementFinder, by, $} from 'protractor';

export const randomString = (length, chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') => {
    let result = '';
    for (let i = length; i > 0; --i) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
};

const getMeta = elementItem => {
    const locator = elementItem && elementItem.elementArrayFinder_ && elementItem.elementArrayFinder_.locator_;
    return {
        using: locator && locator.using,
        value: locator && locator.value
    };
};

export const DEFAULT_STEP_TIMEOUT = 15000;
export const LONG_STEP_TIMEOUT = 60000;
export const SIMPLE_STEP_TIMEOUT = 9000;

const DEFAULT_POLLING = 2000;

const waitFor = async (
    _element: ElementFinder,
    conditionHandler: (_element: ElementFinder) => any,
    timeout: number
) => {
    const {using, value} = getMeta(_element);
    const started = Date.now();
    console.log(`Waiting for presence of '${value}' by using '${using}'`);

    return browser
        .wait(
            conditionHandler(_element),
            timeout,
            `Element '${value}' (with using of '${using}') taking too long to appear in the DOM(max === ${DEFAULT_STEP_TIMEOUT}ms)`
        )
        .catch(async e => {
            await logBrowserErrors();
            throw new Error(e);
        })
        .then(result => {
            console.log(`Time spent: ${Date.now() - started}ms`);
            return Promise.resolve(result);
        });
};

export const waitForPresenceOf = async (
    _element: ElementFinder,
    timeout = DEFAULT_STEP_TIMEOUT
): Promise<ElementFinder> => waitFor(_element, browser.ExpectedConditions.presenceOf, timeout);

export const waitForAbsence = async (el: ElementFinder, timeout = SIMPLE_STEP_TIMEOUT): Promise<ElementFinder> =>
    browser.wait(browser.ExpectedConditions.stalenessOf(el), timeout);

export const waitForVisibilityOf = async (
    _element: ElementFinder,
    timeout = DEFAULT_STEP_TIMEOUT
): Promise<ElementFinder> => waitFor(_element, browser.ExpectedConditions.visibilityOf, timeout);

export const waitForInvisibilityOf = async (
    _element: ElementFinder,
    timeout = DEFAULT_STEP_TIMEOUT
): Promise<ElementFinder> => waitFor(_element, browser.ExpectedConditions.invisibilityOf, timeout);

export const elementIsPresent = (selector: string) => {
    const started = Date.now();
    console.log(`Waiting for presence of `, selector);

    return element(by.css(selector))
        .isPresent()
        .catch(async e => {
            await logBrowserErrors();
            throw new Error(e);
        })
        .then(result => {
            if (result) {
                console.log(`Time spent: ${Date.now() - started}ms`);
                return Promise.resolve(result);
            } else {
                throw new Error(`Element ${selector} not Present`);
            }
        });
};

export const clickSubmitAfterValidation = async (el: ElementFinder) => {
    await el.isDisplayed();
    await waitForPresenceOf($('form.ng-valid'));
    await el.click();
};

export const reveal = async _element => {
    return await browser
        .actions()
        .mouseMove(_element, {x: 0, y: 0})
        .perform();
};

export const revealAndClick = async _element => {
    return await browser
        .actions()
        .mouseMove(_element, {x: 0, y: 0})
        .click()
        .perform();
};

export const logBrowserErrors = async () => {
    const browserLogs = await browser
        .manage()
        .logs()
        .get('browser');
    console.log('Error logs from browser: ', browserLogs);
};

export const acceptAlert = async () => {
    try {
        await browser
            .switchTo()
            .alert()
            .accept();
    } catch (e) {
        console.log('No alerts');
    }
};
