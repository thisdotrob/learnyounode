var http = require('http');

var urls = process.argv.splice(2);

var responses = [];

var remaining = urls.length;

var getter = function(url, i, callbackMethod) {
  http.get(url, function(response) {
    response.setEncoding('utf8');
    var result = '';
    response.on('data', function(data) {
      result = result + data;
    });
    response.on('end', function() {
      callbackMethod(result, i);
    });
  });
};

var dataStorer = function(data, i) {
  responses[i] = data;
  --remaining;
  if (remaining === 0) {
    printResponses();
  }
};

var printResponses = function() {
  responses.forEach(function(thing) {
    console.log(thing);
  });
};

for(var i = 0; i < urls.length; i++) {
  getter(urls[i], i, dataStorer);
}
