define(['jquery', 'Step'], function(Step) {

  var Seq = function (el) {
    this.$el = $(el);
    this.numSteps = this.$el.find('li');
    this.steps = this.initSteps();

  };

  Seq.prototype = {
    initSteps: function () {
      var i,
        steps = [];
      
      for(i=0; i < this.numSteps; i++) {
        steps.push(new Step(this.findStep(i)));
      }

      return steps;

    },
    findStep: function (i) {
      return this.$el.find('li').eq(i-1);
    }
  };

  //Return the module value
  return Seq;
});


