var handlers = require('./handlers.js');

function routes(request, response) {
  var endpoint = request.url;

  if (endpoint === "/") {
    handlers.index(request, response);
  } else if (endpoint === '/create-post') {
    handlers.createPost(request, response);
  } else if (endpoint === '/posts') {
    handlers.getPosts(request, response);
  } else {
    handlers.getFiles(request, response);
  }
}

module.exports = routes;