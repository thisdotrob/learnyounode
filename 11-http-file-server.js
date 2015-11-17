var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' });
  var source = fs.createReadStream(process.argv[3]);
  source.pipe(res);
});

server.listen(process.argv[2]);
