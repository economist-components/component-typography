const packageJson = require('./package.json');
const path = require('path');
const browserifyIstanbul = require('browserify-istanbul');
const isparta = require('isparta');
const oneSecondInMilliseconds = 1000;
const oneMinuteInSeconds = 60;
const twoMinutesInMilliseconds = oneSecondInMilliseconds * oneMinuteInSeconds * 2;
function configureBuildValue() {
  if (process.env.GO_PIPELINE_NAME && process.env.GO_PIPELINE_LABEL) {
    return `${ process.env.GO_PIPELINE_NAME }-${ process.env.GO_PIPELINE_LABEL }`;
  }
  return `localbuild-${ new Date().toJSON() }`;
}
module.exports = function configureKarma(config) {
  const localBrowsers = [
    'PhantomJS',
  ];
  const sauceLabsBrowsers = {
    SauceChromeLatest: {
      base: 'SauceLabs',
      browserName: 'Chrome',
    },
    SauceFirefoxLatest: {
      base: 'SauceLabs',
      browserName: 'Firefox',
    },
    SauceSafariLatest: {
      base: 'SauceLabs',
      browserName: 'Safari',
      platform: 'macOS 10.13',
    },
    SauceInternetExplorerLatest: {
      base: 'SauceLabs',
      browserName: 'Internet Explorer',
    },
    SauceEdgeLatest: {
      base: 'SauceLabs',
      browserName: 'MicrosoftEdge',
    },
    SauceAndroidLatest: {
      base: 'SauceLabs',
      browserName: 'Android',
    },
  };
  config.set({
    basePath: '',
    browsers: localBrowsers,
    logLevel: config.LOG_INFO,
    frameworks: [ 'browserify', 'mocha' ],
    files: [
      path.join(packageJson.directories.test, '*.js'),
    ],
    exclude: [],
    preprocessors: {
      [path.join(packageJson.directories.test, '*.js')]: [ 'browserify' ],
    },
    reporters: [ 'mocha', 'coverage' ],
    port: 9876,
    colors: true,
    concurrency: 3,
    autoWatch: false,
    captureTimeout: twoMinutesInMilliseconds,
    browserDisconnectTimeout: twoMinutesInMilliseconds,
    browserNoActivityTimeout: twoMinutesInMilliseconds,
    singleRun: true,
    browserify: {
      transform: [
        browserifyIstanbul({
          instrumenter: isparta,
          ignore: [ '**/node_modules/**', '**/test/**' ],
        }),
        'babelify',
      ],
      configure: (bundle) => {
        bundle.on('prebundle', () => {
          bundle.external('react/addons');
          bundle.external('react/lib/ReactContext');
          bundle.external('react/lib/ExecutionEnvironment');
        });
      },
    },
    coverageReporter: {
      type: 'lcov',
      dir: 'coverage',
    },
  });

  if (process.env.SAUCE_ACCESS_KEY && process.env.SAUCE_USERNAME) {
    config.reporters.push('saucelabs');
    config.set({
      customLaunchers: sauceLabsBrowsers,
      browsers: Object.keys(sauceLabsBrowsers),
      sauceLabs: {
        testName: packageJson.name,
        recordVideo: true,
        startConnect: true,
        build: configureBuildValue(),
      },
    });
  }
};
