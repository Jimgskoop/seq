/* global window, Seq, Step, Clock */

window.require(['Clock'], function(Clock){

  window.describe('Clock Test Suite', function () {
    var c;

    window.beforeAll(function () {
      c = new Clock();
    });
    window.afterAll(function () {
      c = null;
    });


    window.it('should create a Clock object', function () {
      window.expect(c).not.toBeUndefined();
    });

  });


});


