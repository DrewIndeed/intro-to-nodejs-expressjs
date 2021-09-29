const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request);
    response.write('Welcome back my dear friend');
    response.end();
});

server.listen(5000); //localhost:5000