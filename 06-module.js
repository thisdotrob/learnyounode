var fs = require('fs');
var path = require('path');

module.exports = function (directoryPath, extensionFilter, callback) {
  fs.readdir(directoryPath, function(err, list) {

    if (err) {
      return callback(err);
    }

    var newList = list.filter(function(file) {
      var extension = path.extname(file).replace(".","");
      extensionFilter = extensionFilter.replace(".","");
      return extension === extensionFilter;
    });
    callback(null, newList);
  });
};
