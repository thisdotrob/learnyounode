var http = require('http');
var bl = require('bl');
var results = [];
var count = 0;

var urls = process.argv.splice(2);

var myGetter = function(index) {
  http.get(urls[index], function(response) {
    response.pipe(bl(function(err, data) {

      if(err) {
        return console.error(err);
      }

      results[index] = data.toString();

      count++;

      if(count === urls.length) {
        results.forEach(function(result) {
          console.log(result);
        });
      }

    }));
  });
};

for(var i = 0; i < urls.length; i++) {
  myGetter(i);
}
