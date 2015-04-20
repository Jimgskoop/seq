/*global define */

require.config({
  baseUrl: '/js',
  paths: {
    jquery: '../lib/jquery-2.1.3/jquery.min',
    testem: '/testem',
    mocha: '../node_modules/mocha/mocha',
    chai: '../node_modules/chai/chai',
    spec: '../test/specs'
  }
});
