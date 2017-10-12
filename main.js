/**
 * Created by ryan on 2017/9/21.
 */
import Vue from 'vue';

Vue.config.productionTip = false;

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs/', true, /\.spec$/);
testsContext.keys().forEach(testsContext);

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
// const srcContext = require.context('../../src/spa', true, /^\.\/(?!main(\.js)?$) | ^\.\/(?!index(\.html)?$)/);
// srcContext.keys().forEach(srcContext);


// const srcContext1 = require.context('../../dist/', true,/^\.\/(?!vendors(\.js)?$)/);
// //const srcContext = require.context('./source/', true, /\.js$/);
// srcContext1.keys().forEach(srcContext1);


// //const srcContext = require.context('../../src/js/pages', true, /\.js$/);
// const srcContext = require.context('../../dist/js', true, /\.js$/);
// //const srcContext = require.context('./source/', true, /\.js$/);
// srcContext.keys().forEach(srcContext);

// const srcContext = require.context('../../src/', false, /\a.js$/);
// srcContext.keys().forEach(srcContext);