/*global define, window */

define(['underscore', 'lib/audiocontextpatch-0.0.0/AudioContextMonkeyPatch'], function (_, acMonkeyPatch){

  var Clock = function () {
    this.bpm = 120;
    this.running = false;
    this.timer = null;
    this.sync = 'internal';
    this.step = 0;
    this.counter = 16;
  };
  
  Clock.prototype = {
    getTempo: function () {
      // beats/min * 1min/60sec * 1sec/1000msec
      return (this.bpm) * (1/60) * (1/1000);
    },
    run: function () {
      var self = this;
      this.running = true;
      this.timer = window.setTimeout(function() {
        self.run();
      }, this.getTempo());
    },
    start: function () {
      return this.run();
    },
    stop: function () {
      this.running = false;
      window.clearTimeout(this.timer);
      this.timer = null;
    },
    reset: function () {
      this.stop();
      this.step = 0;
    },
    next: function () {
      this.step++;
      if (this.step > this.counter - 1) {
        this.step = 0;
      }
      return this.step;
    }
  };

  return Clock;
});




