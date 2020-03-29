var fs = require('fs');
var querystring = require('querystring');

function handler(request, response) {
  var endpoint = request.url;
  var method = request.method;

  if (endpoint === "/") {
    response.writeHead(200, { "Content-Type": "text/html" });

    fs.readFile(__dirname + '/../public/index.html', function (error, file) {
      if (error) {
        console.log(error);
        return;
      }

      response.end(file);
    });
  } else if (endpoint === '/create-post') {
    // Form Submissions

    var allTheData = '';
    request.on('data', function (chunkOfData) {
      allTheData += chunkOfData;
    });
  
    request.on('end', function () {

      var convertedData = querystring.parse(allTheData);
      console.log(convertedData);
      response.writeHead(303, {"Location": "/"});
      response.end();
    });

  } else {
    // Any other Requests

    fs.readFile(__dirname + '/../public' + endpoint, function (error, file) {
      if (error) {
        console.log(error);
        return;
      }

      // We've found the File, find the file extension
      // to use in the response header
      var fileExtension = new RegExp('^.*\\.(.+)$', 'g').exec(endpoint)[1];

      response.writeHead(200, { "Content-Type": `text/${fileExtension}` });

      response.end(file);
    });

  }

}

module.exports = handler;