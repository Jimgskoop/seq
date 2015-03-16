define(['jquery'],function () {

  var Step = function (el) {
    this.$el = $(el);
  };

  Step.prototype = {
    getNoteState: function () {
      return this.$el.find('input[type="checkbox"]').prop('checked');
    },
    getNoteNum: function () {
      return this.$el.find('input[type="range"]').val();
    },
    setNoteState: function (state) {
      this.$el.find('input[type="checkbox"]').prop('checked', state);
    },
    toggleNoteState: function () {
      this.setNoteState(!this.getNoteState());
    }
  };

  //Return the module value
  return Step;
});
