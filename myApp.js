var http = require('http');

var server = http.createServer((req, res) => {
    // console.log("Joined!");
    res.setHeader('Content-Type', 'text/html');
    res.write('<p>test content</p>');
    res.end();
})

server.listen(3001);