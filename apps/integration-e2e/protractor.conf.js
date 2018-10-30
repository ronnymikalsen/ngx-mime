// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const argv = require('yargs').argv;
const path = require('path');
const remoteBrowsers = require('./remote-browsers');
const browserstack = require('browserstack-local');
const basePath = './apps/integration-e2e/';

const config = {
  allScriptsTimeout: 50000,
  SELENIUM_PROMISE_MANAGER: false,
  directConnect: false,
  localSeleniumStandaloneOpts: {
    jvmArgs: ['-Dwebdriver.gecko.driver=./node_modules/geckodriver/geckodriver']
  },
  specs: getFeatureFiles(),
  unknownFlags: ['cucumberOpts', 'device'],
  multiCapabilities: getMultiCapabilities(),
  baseUrl: 'http://localhost:8080/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: [
      path.resolve(process.cwd(), `${basePath}/helpers/cucumber.config.ts`),
      path.resolve(process.cwd(), `${basePath}/step-definitions/**/*.steps.ts`),
      path.resolve(process.cwd(), `${basePath}./helpers/hooks.ts`)
    ],
    format: 'json:.tmp/results.json',
    tags: getTags()
  },
  plugins: [
    {
      package: require.resolve(
        'protractor-multiple-cucumber-html-reporter-plugin'
      ),
      options: {
        automaticallyGenerateReport: true,
        removeExistingJsonReportFile: true,
        removeOriginalJsonReportFile: true
      }
    }
  ],
  onPrepare: function() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    if (
      !config.multiCapabilities &&
      config.capabilities.platformName !== 'Android' &&
      config.capabilities.platformName !== 'iOS'
    ) {
      const width = 1024;
      const height = 768;
      browser.driver
        .manage()
        .window()
        .setSize(width, height);
    }
  },
  disableChecks: true,
  ignoreUncaughtExceptions: true
};

//if (process.env.TRAVIS) {
if (argv.base === 'SauceLabs') {
  console.log('SauceLabs');
  config.sauceUser = process.env.SAUCE_USERNAME;
  config.sauceKey = process.env.SAUCE_ACCESS_KEY;
}
if (argv.base === 'BrowserStack') {
  console.log('BrowserStack');
  config.browserstackUser = process.env.BROWSERSTACK_USERNAME;
  config.browserstackKey = process.env.BROWSERSTACK_ACCESS_KEY;
  (config.commonCapabilities = {
    project: 'ngx-mime',
    'browserstack.local': true,
    'browserstack.debug': 'true'
  }),
    (config.beforeLaunch = function() {
      return new Promise(function(resolve, reject) {
        exports.bs_local = new browserstack.Local();
        exports.bs_local.start(
          { key: exports.config['browserstackKey'] },
          function(error) {
            if (error) return reject(error);
            console.log('Connected. Now testing...');

            resolve();
          }
        );
      });
    }),
    (config.afterLaunch = function() {
      return new Promise(function(resolve, reject) {
        exports.bs_local.stop(resolve);
      });
    });
}
//}

config.maxSessions = process.env.TRAVIS ? 5 : 10;

function getMultiCapabilities() {
  const multiCapabilities = [];
  let browsers = remoteBrowsers.customDesktopLaunchers
    .concat(remoteBrowsers.androidLaunchers)
    .concat(remoteBrowsers.iphoneLaunchers);
  let capabilities = {
    name: 'Mime E2E Tests',
    shardTestFiles: true
  };

  if (argv.browser) {
    const cap = browsers.find(l => l.browserName === argv.browser);
    capabilities = {
      browserName: cap.browserName,
      version: cap.version,
      platformName: cap.platformName,
      deviceName: cap.deviceName,
      name: 'Mime E2E Tests',
      shardTestFiles: true,
      maxInstances: 10
    };
    if (argv.headless) {
      capabilities.chromeOptions = {
        args: [
          'disable-infobars',
          '--headless',
          '--disable-gpu',
          '--window-size=1024x768'
        ]
      };
    }
    multiCapabilities.push(capabilities);
  } else {
    if (argv.device === 'desktop') {
      browsers = remoteBrowsers.customDesktopLaunchers.filter(
        l => l.base === argv.base
      );
    } else if (argv.device === 'android') {
      browsers = remoteBrowsers.androidLaunchers.filter(
        l => l.base === argv.base
      );
    } else if (argv.device === 'iphone') {
      browsers = remoteBrowsers.iphoneLaunchers.filter(
        l => l.base === argv.base
      );
    }
    for (const cap of browsers) {
      const capability = {
        ...cap,
        name: 'Mime E2E Tests',
        shardTestFiles: true,
        build: process.env.TRAVIS_JOB_NUMBER,
        tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER,
        maxInstances: 5
      };
      multiCapabilities.push(capability);
    }
  }
  return multiCapabilities;
}

function getTags() {
  let tags = ['~@Ignore'];
  let firefoxTags = ['~@Ignore-firefox'];

  if (argv.tags) {
    tags = tags.concat(argv.tags.split(','));
  }
  if (argv.browser === 'firefox') {
    tags = tags.concat(firefoxTags);
  }
  if (argv.headless) {
    tags = tags.concat(`~@Fullscreen`);
  }

  return tags;
}

function getFeatureFiles() {
  if (argv.feature) {
    return argv.feature
      .split(',')
      .map(
        feature => `${process.cwd()}/${basePath}/features/**/${feature}.feature`
      );
  }

  return [`${process.cwd()}/${basePath}/features/**/*.feature`];
}

exports.config = config;

exports.config.multiCapabilities.forEach(function(caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
