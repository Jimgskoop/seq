/*global define */

define(function (){
  return function (name) {
    return 'hello ' + (name || 'world');
  };
});


