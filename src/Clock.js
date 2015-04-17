/* global define */

define(function () {

  var Clock = function () {
    this.bpm = 120;
    this.isRunning = false;
    this.timer = null;
    this.sync = 'internal';
  };
  
  Clock.prototype = {
    run: function () {},
    stop: function () {},
    reset: function () {}
  };

  return Clock;
});