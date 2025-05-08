var http = require('http');

const hostname = '0.0.0.0';
const port = 8000;

var server = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.writeHead('Content-Type', 'text/plain');
    res.end(`Hello from NodeJS in ${process.arch}!\n`);
});

server.listen(port, hostname, function () {
    console.log(`Server runnning at http://${hostname}:${port}/`);
});
