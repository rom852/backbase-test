import {After, Before, HookScenarioResult, Status, setDefaultTimeout} from 'cucumber';
import {browser} from 'protractor';
import {SCENARIO_TAGS, tagExistsByName} from './cucumber-utils';
import {JSDOM} from 'jsdom';
import {SetupService} from '../../services/setup.service';
import {DIContainer} from '../dependency-injection/di.config';
import {TYPES} from '../dependency-injection/types';

export const DEFAULT_SCRIPTS_TIMEOUT = parseInt(process.env.DEFAULT_SCRIPTS_TIMEOUT, 10);
setDefaultTimeout(DEFAULT_SCRIPTS_TIMEOUT);

const setupService: SetupService = DIContainer.get(TYPES.Service.Setup);

let timer: number = null;

// tslint:disable-next-line
Before(async function(scenario: HookScenarioResult) {

    timer = Date.now();
    console.log('Scenario started: ', timer);

    if (tagExistsByName(scenario, SCENARIO_TAGS.FORCE_SETUP)) {
        console.log('setup from abstract steps');
        await setupService.setup();
    }
});

// tslint:disable-next-line
After(async function(scenario: HookScenarioResult) {
    const endedTime = Date.now();
    console.log(`Scenario finished: ${endedTime} (time spent: ${endedTime - timer}ms)`);
    timer = null;

    if (scenario.result.status === Status.FAILED) {
        // Log the spec to the console for protractor-flake to be able to rerun the failed specs
        console.log('Specs:', scenario.sourceLocation.uri);

        const base64png = await browser.takeScreenshot();
        this.attach(base64png, 'image/png');
        console.log('screenshot attached: ', Date.now());

        const htmlString = await browser.getPageSource();
        const htmlDOM = new JSDOM(htmlString).window.document;
        this.attach(htmlDOM.body.outerHTML, 'text/plain');
        console.log('DOM attached: ', Date.now());

        await browser.switchTo().defaultContent();

        /**
         * @see injectGlobalErrorHandling
         */
        const logEvents = await browser.executeScript('return typeof logEvents !== "undefined" && logEvents');
        if (logEvents) {
            console.log('Global error logs: ', logEvents);
        }
    }
});
