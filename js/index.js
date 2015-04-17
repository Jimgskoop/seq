// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.

require.config({
  baseUrl: 'src',
  paths: {
    jquery: '../lib/jquery-2.1.3/jquery.min',
    lib: '../lib',
    Seq: 'Seq',
    Step: 'Step',
    Clock: 'Clock',
    spec: '../spec'
  }
});


// Start loading the main app file. Put all of
// your application logic in there.
//erequire(['main']);