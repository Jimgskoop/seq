// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.

require.config({
  paths: {
    jquery: '../lib/jquery-2.1.3/jquery.min',
    Seq: './Seq',
    Step: './Step',
  }
});


// Start loading the main app file. Put all of
// your application logic in there.
require(['main']);