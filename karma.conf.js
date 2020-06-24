module.exports = function (config) {
  config.set({
    frameworks: ['mocha', 'chai'],
    files: ['test/**/*.js'],
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
