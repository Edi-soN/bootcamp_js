var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var fileContent;

app.use(bodyParser.json());

// Version 1
app.get('/getNote', (req, res) => {
    fs.readFile('./test.json', 'utf8', (err, data) => {
        if (err) throw err;
        fileContent = data;
        res.send(data);
    });
});

app.post('/updateNote/:note', (req, res) => {
    fileContent += `\n${req.params.note}`;
    fs.writeFile('./test.json', fileContent, err => {
        if (err) throw err;
        res.send(fileContent); 
    });
});

// Version 2
// app.get('/getNote', (req, res) => {
//     fs.readFile('./test.json', 'utf8', (err, data) => {
//         if (err) throw err;
//         fileContent = JSON.parse(data);
//         res.send(data);
//     });
// });

// app.post('/updateNote', (req, res) => {
//     Object.assign(fileContent, req.body);
//     fs.writeFile('./test.json', fileContent, err => {
//         if (err) throw err;
//         res.send(fileContent); 
//     });
// });

app.listen(3000);