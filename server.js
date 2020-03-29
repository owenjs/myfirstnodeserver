var http = require('http');
var routes = require('./src/routes.js');

var server = http.createServer(routes);

server.listen(3000, function () {

  console.log("Server is listening on port 3000.  Ready to accept requests!");

});