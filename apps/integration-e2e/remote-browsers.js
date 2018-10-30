exports.customDesktopLaunchers = [
  {
    base: 'SauceLabs',
    browserName: 'chrome',
    version: 'latest'
  },
  {
    base: 'SauceLabs',
    browserName: 'firefox',
    version: 'latest'
  },
  {
    base: 'SauceLabs',
    browserName: 'safari',
    platform: 'OS X 10.12',
    version: '10.0'
  },
  {
    base: 'BrowserStack',
    browserName: 'Edge',
    browser_version: '17.0',
    os: 'Windows',
    os_version: '10'
  },
  {
    base: 'BrowserStack',
    browserName: 'IE',
    browser_version: '11.0',
    os: 'Windows',
    os_version: '10'
  }
];
exports.androidLaunchers = [
  {
    base: 'BrowserStack',
    browserName: 'chrome',
    device: 'Google Pixel 2',
    real_mobile: 'true',
    os_version: '9.0'
  }
];
exports.iphoneLaunchers = [
  {
    base: 'BrowserStack',
    browserName: 'safari',
    device: 'iPhone 8',
    os: 'ios',
    os_version: '11.0',
    real_mobile: 'true'
  }
];
