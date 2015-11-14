require(['js/Sequencer', 'marionette', 'backbone', 'underscore', 'text!templates/step.tmpl'], 
  function(Sequencer, Marionette, Backbone, _, step) {


  Sequencer.on('start', function () {
    console.log('Sequencer has started!');
  });

  Sequencer.StepModel = Backbone.Model.extend({
    defaults: {
      stepNum: 0,
      noteVal: 64
    }
  });

  Sequencer.StepView = Marionette.ItemView.extend({
    template: _.template(step),
    className: 'step',
    tagName: 'li',
    events: {
      'click': 'alertNoteNumber'
    },
    alertNoteNumber: function () {
      alert(this.model.escape('noteVal'));
    }
  });


  Sequencer.StepsView = Marionette.CollectionView.extend({
    tagName: 'ol',
    childView: Sequencer.StepView
  });

  Sequencer.StepsCollection = Backbone.Collection.extend({
    model: Sequencer.StepModel
  });


  var RegionContainer = Marionette.LayoutView.extend({
    el: '#app-container',
    regions: {
      main: '#main-region'
    }
  });

  Sequencer.on('before:start', function () {
    // Question: why does this have to be instantiated at before:start,
    // vs. just in the normal program flow?
    Sequencer.regions = new RegionContainer();
  });

  Sequencer.on('start', function () {
    var newSteps = [];

    for (var i = 0; i < Sequencer.totalSteps; i++) {
      newSteps.push({
        stepNum: Sequencer.stepsCount++
      });
    }

    var steps = new Sequencer.StepsCollection(newSteps);

    var stepsListView = new Sequencer.StepsView({
      collection: steps
    });

    Sequencer.regions.main.show(stepsListView);
  });

  Sequencer.start();

});