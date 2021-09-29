const http = require("http");

const server = http.createServer((request, response) => {
  // jump to different pages on our website
  if (request.url === "/") {
    response.end("Welcome to home page");
  } else if (request.url === "/about") {
    response.end("Welcome to about page");
  } else {
    // default handler to handle error is user trying to access something not exist
    response.end(`
    <h1>404 NOT FOUND!</h1>
    <a href='/'>Back to Home page</a>
    `);
  }
});

server.listen(5000); //localhost:5000
