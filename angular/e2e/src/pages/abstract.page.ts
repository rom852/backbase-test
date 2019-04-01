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
    //
    // /**
    //  * @summary Injected once on page load
    //  */
    // private async injectGlobalErrorHandling() {
    //     await browser.executeScript(this.errorHandler);
    // }
    //
    // private errorHandler() {
    //     if ((window as any).logEvents) {
    //         return;
    //     }
    //
    //     function captureUnhandled(errorMsg, url, lineNumber, column, errorObj) {
    //         const logMessage = new Date() + ' unhandled - ' + errorMsg + ', ' + errorObj.stack;
    //         (window as any).logEvents.push(logMessage);
    //     }
    //
    //     function capture(level) {
    //         // tslint:disable-next-line:only-arrow-functions
    //         return function() {
    //             const args = Array.prototype.slice.call(arguments, 0);
    //             let logMessage = new Date() + ' ' + level + ' - ';
    //             // tslint:disable-next-line
    //             for (let i = 0; i < args.length; i++) {
    //                 if (args[i] instanceof Error) {
    //                     logMessage += args[i].message + ', ' + args[i].stack;
    //                 } else {
    //                     logMessage += args[i];
    //                 }
    //             }
    //             (window as any).logEvents.push(logMessage);
    //         };
    //     }
    //     // tslint:disable-next-line
    //     console = console || ({} as any);
    //     console.warn = capture('warn');
    //     console.error = capture('error');
    //     window.onerror = captureUnhandled;
    //     (window as any).logEvents = [];
    // }
}
