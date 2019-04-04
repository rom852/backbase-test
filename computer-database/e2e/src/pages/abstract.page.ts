import {browser} from 'protractor';
import {DEFAULT_STEP_TIMEOUT} from '../utils/protractor';

export abstract class AbstractPage {
    abstract expectedRoute: string;

    abstract async assertPageElements(options?: string);

    async navigateTo() {

        await browser.get(this.expectedRoute);
        //   await this.injectGlobalErrorHandling();
    }

    async waitForPage(timeout: number = DEFAULT_STEP_TIMEOUT) {
        await browser.wait(browser.ExpectedConditions.urlContains(this.expectedRoute), timeout);
    }
}
