var http = require('http');
var url = process.argv[2];
var result = "";
var callback = function(response){
  response.setEncoding('utf8');
  response.on("data",function(data){
    result = result + data;
  });
  response.on("end",function(){
    console.log(result.length);
    console.log(result);
  });
};

http.get(url, callback);
