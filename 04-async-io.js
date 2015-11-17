var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function doneReading(err, fileContents) {
  var array = fileContents.split('\n');
  var numberOfLines = array.length - 1;
  console.log(numberOfLines);
});
