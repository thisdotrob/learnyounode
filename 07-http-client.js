var http = require('http');

var url = process.argv[2];

var callback = function(response) {
  response.setEncoding('utf8');
  response.on('data', console.log);
  response.on('error', console.error);
};


http.get(url, callback);

//   Response will be a Node Stream object. You can treat Node
//   Streams as objects that emit events. The three events that are of most
//   interest are: "data", "error" and "end".
