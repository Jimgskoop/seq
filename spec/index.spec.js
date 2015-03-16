/* global window, Seq, Step */

window.describe('Step Test Suite', function () {
  var s;

  window.beforeAll(function () {
    s = new Step($('.steps li:first'));
  });
  window.afterAll(function () {
    s = null;
  });


  window.it('should create a Step object', function () {
    window.expect(s).not.toBeUndefined();
  });

  window.it('the note should be unchecked', function () {
    window.expect(s.getNoteState()).toEqual(false);
  });

  window.it('the note number should be 64', function () {
    window.expect(s.getNoteNum()).toEqual('64');
  });
});


window.describe('Sequencer Test Suite', function() {
  var seq;
  
  window.beforeAll(function () {
    seq = new Seq($('.steps'));
  });
  window.afterAll(function () {
    seq = null;
  });

  window.it('should count 16 steps', function() {
    window.expect(seq.getNumSteps()).toBe(16);
  });
});
