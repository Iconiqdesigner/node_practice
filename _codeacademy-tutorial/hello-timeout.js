// this whole thing gets blocked.

var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200);
  response.write("Hooman throws ball");
  response.write("Dog runs after ball...");
  setTimeout(function() {
    response.write("Dog found ball!");
    response.write("Dog brings ball to Hooman");
    response.end();
  }, 5000);
}).listen(8080);

console.log('Listening on port 8080...')
