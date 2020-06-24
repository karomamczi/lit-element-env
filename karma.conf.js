const webpackConfig = require('./webpack.config');

module.exports = (config) => {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon'],
    files: [{ pattern: 'api/**/*.spec.js', type: 'module' }],
    preprocessors: {
      'api/**/*.js': ['webpack'],
    },
    webpack: {
      module: webpackConfig.module,
      resolve: webpackConfig.resolve,
      mode: webpackConfig.mode,
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['ChromeHeadless'],
    autoWatch: false,
    singleRun: true,
    concurrency: Infinity,
    plugins: ['karma-*'],
  });
};
