var directoryPath = process.argv[2];
var extensionFilter = '.' + process.argv[3];
var filterFn = require('./6-module');

filterFn(directoryPath, extensionFilter, function(err, list) {
  if (err) {
    return console.error('There was an error:', err);
  }
  list.forEach(function(file){
    console.log(file);
  });
});
