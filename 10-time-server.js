var net = require('net');

var port = process.argv[2];

var server = net.createServer(function(socket) {
  var data = getTime();
  socket.end(data);
});

server.listen(port);

var getTime = function() {
  var time = new Date();
  var year = time.getFullYear();
  var month = (time.getMonth() + 1).toString();
  var date = time.getDate();
  var hour = time.getHours();
  var minute = time.getMinutes();
  return year + '-' + month + '-' + date + ' ' + hour + ':' + minute;
};
