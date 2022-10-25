// var http = require('http');

// var server = http.createServer((req, res) => {
//     const url = req.url;
// if (url == '/profile') {
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<p> profile page test </p>');
//     return res.end();

// }
// else if (url == '/') {
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<p> main page test </p>')
//     return res.end();
// }

//     res.setHeader('Content-Type', 'text/html');
//     res.write('<p>No Page</p>');
//     res.end();
// })

// server.listen(3001);

const http = require('http');
const displayContent = require('./routes');

const server = http.createServer(displayContent);

server.listen(3001)
