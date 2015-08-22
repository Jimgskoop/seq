define('RegionContainer', ['marionette'], function (Marionette){

  var RegionContainer = Marionette.LayoutView.extend({
    el: '#app-container',
    regions: {
      main: '#main-region'
    }
  });

  return RegionContainer;

});

