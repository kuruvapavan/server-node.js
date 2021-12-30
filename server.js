let fs = require("fs");
let http = require("http");
let server = http.createServer((req, res) => {
    res.end("text from the server: welcome to local server");
});

server.listen(3000, '127.0.0.1', () => {
    console.log('listenting to server');
});