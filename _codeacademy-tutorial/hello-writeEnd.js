// this whole thing gets blocked.

var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200, {
    'Content-Type': 'text/html'
  });
  response.end("Dog is waiting");
}).listen(8080);

console.log('Listening on port 8080...')
