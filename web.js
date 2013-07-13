var express = require('express');
var fs = require('fs');
var buffer = new Buffer(200);


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    buffer = readFileSync('index.html');    
    response.send(buffer.toString());

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
