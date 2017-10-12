// Karma configuration
// Generated on Thu Sep 21 2017 17:20:48 GMT+0800 (CST)

//var webpackConfig = require('../../build/webpack.prod.conf.js');
var webpackConfig = require('../../build/webpack.unitTest.conf.js');
//var webpackConfig = require('../../build/webpack.dev.conf.js');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        //'specs/**/*.spec.js'
        '../../build/assets/vendors.js',
        //'../../dist/js/manifest.8a3b5353bc22d0d58959.js',
        './main.js'
    ],


    // list of files to exclude
    exclude: [
        '../../node_modules'
    ],

    webpack: webpackConfig,

    webpackMiddleware: {
        noInfo: true
    },

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        './main.js':['webpack','coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    // reporters: ['progress','coverage'],
    // coverageReporter: {
    //     dir: './coverage',
    //     reporters: [
    //         {type: 'lcov', subdir: '.'},
    //         {type: 'text-summary'}
    //     ]
    // },

      reporters: ['progress','coverage-istanbul'],
      coverageIstanbulReporter: {
          dir: __dirname +'/coverage',
          //reports: ['html', 'lcovonly', 'text-summary'],
          reports: ['clover','cobertura','html','json-summary','json','lcov','lcovonly','teamcity','text-lcov','text-summary','text'],
          fixWebpackSourcePaths: true,
          // reporters: [
          //     // reporters not supporting the `file` property
          //     { type: 'html', subdir: 'report-html' },
          //     { type: 'lcov', subdir: 'report-lcov' },
          //     // reporters supporting the `file` property, use `subdir` to directly
          //     // output them in the `dir` directory
          //     { type: 'cobertura', subdir: '.', file: 'cobertura.txt' },
          //     { type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt' },
          //     { type: 'teamcity', subdir: '.', file: 'teamcity.txt' },
          //     { type: 'text', subdir: '.', file: 'text.txt' },
          //     { type: 'text-summary', subdir: '.', file: 'text-summary.txt' },
          // ]
      },


    // web server port
    port: 1597,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],
    //browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,


  })
}
