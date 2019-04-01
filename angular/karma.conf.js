module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-firefox-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('@angular-devkit/build-angular/plugins/karma'),
            require('karma-spec-reporter'),
            require('karma-htmlfile-reporter')
        ],

        customLaunchers: {
            ChromeHeadlessCI: {
                base: 'ChromeHeadless',
                flags: ['--no-sandbox']
            }
        },
        client: {
            clearContext: false,
            captureConsole: true
        },
        coverageIstanbulReporter: {
            reports: ['html', 'lcovonly'],
            fixWebpackSourcePaths: true
        },
        angularCli: {
            environment: 'dev'
        },
        htmlReporter: {
            outputFile: './karma-report.html',
            pageTitle: 'User Portal Report'
        },
        reporters: ['progress', 'kjhtml', 'spec', 'html'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['ChromeHeadless'],
        singleRun: true,
        client: {
            useIframe: true
        },
        concurrency: 1,
        maximumSpecCallbackDepth: 100,
        browserDisconnectTolerance: 1000000,
        browserNoActivityTimeout: 1000000
    });
};
