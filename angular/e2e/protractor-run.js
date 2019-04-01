const protractorFlake = require('protractor-flake');

protractorFlake(
    {
        protractorPath: './node_modules/protractor/bin/protractor',
        maxAttempts: 3,
        parser: 'cucumber',
        // expects node to be in path
        // set this to wherever the node bin is located
        nodeBin: 'node',
        // set color to one of the colors available at 'chalk' - https://github.com/chalk/ansi-styles#colors
        color: 'magenta',
        protractorArgs: ['protractor.conf.js', '--stackTrace', '--logLevel=DEBUG']
        // specify a different protractor config to apply after the first execution attempt
        // either specify a config file, or cli args (ex. --capabilities.browser=chrome)
        //protractorRetryConfig: 'path/to/<protractor-retry-config>.js'
    },
    function(status, output) {
        process.exit(status);
    }
);
