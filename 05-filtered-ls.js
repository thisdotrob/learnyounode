var fs = require('fs');
var path = require('path');
var dirName = process.argv[2];
var extension = '.' + process.argv[3];

fs.readdir(dirName, function(err, list){
  list.forEach(function(fileName){
    if(path.extname(fileName) === extension){
      console.log(fileName);
    }
  });
});
