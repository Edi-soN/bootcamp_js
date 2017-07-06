var fs = require('fs');
var formidable = require('formidable');

exports.welcome = function(request, response) {
    console.log("Rozpoczynam obsługę żądania welcome.");
    fs.readFile('templates/start.html', function(err, html) {
        response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        response.write(html);
        response.end();
    });
}

exports.upload = function(request, response) {
    var form = new formidable.IncomingForm();
    console.log("Rozpoczynam obsługę żądania upload.");
    form.parse(request, function(error, fields, files) {
        fs.renameSync(files.upload.path, "test.png");
        fs.readFile('templates/upload.html', function(err, html) {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(html);
            response.end();
        });
    });
}

exports.show = function(request, response) {
    fs.readFile("test.png", "binary", function(error, file) {
        response.writeHead(200, {"Content-Type": "image/png"});
        response.write(file, "binary");
        response.end();
    });
}

exports.error = function(request, response) {
    console.log("Nie wiem co robić.");
    fs.readFile('404.png', function(err, data) {
            if (err) throw err;
            response.writeHead(404, {'Content-Type': 'text/html'});
            response.write('<html><style>img {position: absolute;top: 50%;left: 50%;margin-top: -250px;margin-left: -250px;}</style>');
            response.write('<body><img src="data:image/png;base64,');
            response.write(new Buffer(data).toString('base64'));
            response.write('"/></body></html>');
            response.end();
    });
}