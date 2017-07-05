var fs = require('fs'),
    colors = require('colors'),
    src = './oldFiles',
    dest = './newFile.txt';

fs.readdir(src, function(err, files) {
    var counter = 0;

    if (err) throw err;
    if (files.length < 1) {
        console.log(('Folder ' + src + ' is empty').red);
        return;    
    }
    
    console.log('Source folder path: '.blue + src.yellow + '\n');
    
    files.forEach(function(nextFile) {
        fs.readFile(src + '\\' + nextFile, 'utf-8', function(err, data) {
            if (err) throw err;
            fs.appendFile(dest, data + '\n', function(err) {
                if (err) throw err;
                console.log('File ' + nextFile.yellow + ' was saved successfully in '.green + dest.yellow);
                counter++;
                if (counter === files.length) {
                    fs.readFile(dest, 'utf-8', function(err, data) {
                        if (err) throw err;
                        console.log('\nSaved file content:\n'.blue);
                        console.log(data.gray);
                    });
                }
            });
        });
    });
});