### Quick introduction for e2e with Protractor&Cucumber
This is introduction for current e2e implementation. It contains explanation for:
- how to run
- folder structure
- how DI works
- feature-steps connection
- assertions
- running/debugging application 
- package.json scripts
- dictionary

### How to run
To run e2e test you would need to `npm install` and `npm run e2e`. There are additional configurations how to run tests, described in **package.json** section

###Project structure(elements to mention)
```$xslt
e2e:
 - features: "self-explanatory"
 - results: should be created so cucumber could save json reports 
 - src:
   - ...
   - assertions: _core.ts - main point of setup of Chai and Mixins for Assertable Components
   - core:
     - cucumber: utils + Global hooks
     - dependency-injection: for DI setup
     - env: location for env files with 2 predefined
   - objects: some common page objects that could be part of page
   - pages: whole pages with routes
   - ...
 - step_definitions: "self-explanatory"
```

### DI 
For DI i have used 'inversify.js'. Follow their documentation for more information.

### Steps and Features
They are entry points of application.

### Assertions
Such as Cucumber doesn't has own assert Api AND protractor's assertions were powered by Jasmine - i use Chai. 

### Run/Debug
- follow **package.json** scripts
- setup Cucumber.js plugins for your IDE(v4 is broken in Intellij IDEA so far)
- Protractor configuration(currently in IDE without arguments(like @Test1), so not possible specify single cases(check out **package.json** for example of single test))

### package.json
```json
{
    "pree2e": "to create e2e/results && driver update",
    "e2e": "run e2e",
    "e2e:develop": "run e2e as DEVELOPMENT",
    "e2e:env:custom": "custom local env",
    "e2e:env:dev": "run over dev environment",
    "e2e:example": "example how to run single feature/tags"
}
```

### Dictionary
 Name          | Definition
| :------------|:------------- |
| Feature      | Business feature to be tested / covered by .feature
| Scenario     | single point Feature
| Step         | scenarios are created from steps
| Object       | classes with elements that are part of pages(for ex. forms)
| Page         | classes with elements we should work with
| Repository   | connection to our API/DB
| Service      | layer to work with repositories; perform some logic for application
| injectable   | how to connect class to DI
| lazyInject   | how to inject from DI lazy way(omitting circular di)

### FLOW FOR FEATURE CREATION
> Create feature file and scenario to work with. All existing scenarios should be highlighted(cucumber plugin) 

> Create step_definitions file or insert missing steps.

> Create Page or Object

> Run your code

> If you some need pre-conditions - use/create Services and Repos(example: create User by code, not interface, if main point of test is not registration)


### Running tests in parallel
In `protractor.conf.js` there is setup for multiple capabilities - we could shard tests files, but for this we need to move Setup login from `onPrepare` to `beforeLaunch`(check protractor docs).
Because currently POST requests for setup in parallel are impossible due to token problems. The right solution - run setup only once. 

