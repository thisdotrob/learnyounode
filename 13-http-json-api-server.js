var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response) {
  if(request.method !== 'GET') {
    return response.end('Not a GET request');
  }
  response.writeHead(200, { 'Content-Type': 'application/json' });
  var parsedUrl = url.parse(request.url, true);

  var path = parsedUrl.pathname;

  var isoTimeString = parsedUrl.query.iso;
  var time = new Date(isoTimeString);

  if(path === '/api/parsetime') {
    var timeObj = {   hour: time.getHours(),
                      minute: time.getMinutes(),
                      second: time.getSeconds() };
    var json = JSON.stringify(timeObj);
    response.end(json);
  }

  if(path === '/api/unixtime') {
    var unixTimeObj = { unixtime: time.getTime() };
    var unixJson = JSON.stringify(unixTimeObj);
    response.end(unixJson);
  }

});

server.listen(Number(process.argv[2]));
