var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
    if (request.method === 'GET' && request.url === '/') {  
        fs.readFile('./index.html', 'utf-8', function(err, data) {
            if (err) throw err;
            response.setHeader('Content-Type', 'text/html; charset=utf-8');
            response.statusCode = 200;
            response.write(data);
            response.end();
        })
    } else {
        fs.readFile('./404.png', function(err, data) {
            if (err) throw err;
            
            // First solution using Data URI scheme to embed the image in a page in <img>
            response.setHeader('Content-Type', 'text/html');
            response.statusCode = 404;
            response.write('<html><style>img {position: absolute;top: 50%;left: 50%;margin-top: -250px;margin-left: -250px;}</style>');
            response.write('<body><img src="data:image/png;base64,');
            response.write(new Buffer(data).toString('base64'));
            response.write('"/></body></html>');
            response.end();
            
            /* Second solution using proper content type and sending entire image directly 
            response.setHeader("Content-Type", "image/png");
            response.statusCode = 404;
            response.end(data);
            */
        })
    }
});

server.listen(8080);