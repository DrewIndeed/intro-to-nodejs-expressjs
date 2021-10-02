const http = require('http');

const server = http.createServer((req, res) => {
    console.log("User sent");
    res.end("Homeeeeee");
});

server.listen(5000);