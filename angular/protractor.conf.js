// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const report = require('multiple-cucumber-html-reporter');
const urlParse = require('url-parse');
const os = require('os');
const protractor = require('protractor');

process.env.DEFAULT_SCRIPTS_TIMEOUT = 100 * 1000;
const DEFAULT_SCRIPTS_TIMEOUT = parseInt(process.env.DEFAULT_SCRIPTS_TIMEOUT, 10);
process.env.DEBUG = 'axios';

let mainHost = process.env.MAIN_HOST || 'http://computer-database.herokuapp.com';

const baseAppConfig = {
    mainHost: mainHost,
    mainHostParsed: urlParse(mainHost),
    development: process.env.DEVELOPMENT === 'true',
    seleniumHubHost: process.env.SELENIUM_HOST || 'http://localhost:4444/wd/hub'
};

const browserArguments = {
    chrome: [
        '--disable-dev-shm-usage',
        '--disable-infobars',
        '--start-maximized',
        '--ignore-certificate-errors',
        `--unsafely-treat-insecure-origin-as-secure=${baseAppConfig.mainHost}`,
        '--use-fake-ui-for-media-stream',
        '--allow-file-access-from-files',
        '--use-fake-device-for-media-stream',
        '--allow-running-insecure-content',
        '--disable-web-security',
        '--window-size=1920,1080'
    ]
};

let capabilities = {
    enableVNC: true,
    browserName: 'chrome',
    shardTestFiles: false,
    maxInstances: 1,
    chromeOptions: {
        args: browserArguments.chrome
    }
};

//  if DEVELOPMENT=true, tests will run directly, without selenoid
if (baseAppConfig.development) {
    capabilities.maxInstances = 1;
    capabilities.shardTestFiles = false;
    capabilities.enableVNC = false;
    mainHost = 'http://computer-database.herokuapp.com';
}

let config = {
    directConnect: true,
    SELENIUM_PROMISE_MANAGER: false,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    useAllAngular2AppRoots: true,
    cucumberOpts: {
        require: [
            './e2e/src/core/cucumber/hooks.ts', // to initialize global cucumber hooks
            './e2e/src/services/setup.service.ts', // to run initial setup
            './e2e/step_definitions/**/*.ts'
        ],
        tags: ['@Working'],
        strict: true,
        format: ['./node_modules/cucumber-pretty', 'json:e2e/results/results.json'],
        dryRun: false
    },
    specs: ['./e2e/features/**/*.feature'],
    exclude: [],
    baseUrl: baseAppConfig.mainHost,
    capabilities: capabilities,
    restartBrowserBetweenTests: true,
    allScriptsTimeout: DEFAULT_SCRIPTS_TIMEOUT,
    onPrepare() {
        require('ts-node').register({
            project: 'e2e/tsconfig.e2e.json'
        });
        protractor.browser.waitForAngularEnabled(false);
        const diModule = require('./e2e/src/core/dependency-injection/di.config');
        const typesModule = require('./e2e/src/core/dependency-injection/types');
        const setupService = diModule.DIContainer.get(typesModule.TYPES.Service.Setup);

        return setupService.setup().then(() => {
            console.log('...ended from protractor.conf.js');
        });
    },
    onComplete() {
        protractor.browser.getCapabilities().then(caps => {
            report.generate({
                displayDuration: true,
                jsonDir: './e2e/results',
                reportPath: './e2e/results',
                metadata: {
                    browser: {
                        name: caps.get('browserName'),
                        version: caps.get('version')
                    },
                    device:  caps.get('platform'),
                    platform: {
                        name: os.platform(),
                        version: os.release()
                    }
                }
            });
        });
    }
};

//  if DEVELOPMENT=true, tests will run directly, without selenoid
if (baseAppConfig.development) {
    config.directConnect = true;
    config.seleniumAddress = null;
}

exports.config = config;
