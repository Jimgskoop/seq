/* global define, describe, it, expect */

define(['Step', 'jquery'], function(Step, $) {
  describe('Step', function() {
    var steps;

    beforeEach(function() {
      fixtures.load('steps.html');
      $steps = $(fixtures.window().document.querySelectorAll('.steps'));
    });

    afterEach(function() {
      fixtures.cleanUp();
    });

    it('should exist as Step', function() {
      expect(Step).not.toBeUndefined();
    });

    it('should create a step instance', function() {
      expect(new Step($steps)).toBeDefined();
    });
  });
});