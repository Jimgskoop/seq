/* global define, describe, it, expect */

define(['Clock'], function(Clock) {
  describe('Clock', function() {
    it('should exist as Clock', function() {
      expect(Clock).not.toBeUndefined();
    });

    it('should create a clock instance', function() {
      expect(new Clock()).toBeDefined();
    });
  });
});