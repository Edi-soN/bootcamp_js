var OSinfo = require('./modules/OSInfo'),
    user = process.env['USERNAME'] || 'stranger';

process.stdout.write('Hello ' + user + '! Type \'/help\' to see list of all supported commands.\n');;

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/exit': 
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/version':
                process.stdout.write('Node version: ' + process.version + '\n');
                break;
            case '/language': 
                process.stdout.write('System language: ' + process.env['LANG'] + '\n');
                break;
            case '/getOSinfo':
                OSinfo.print();
                break;
            case '/help':
                process.stdout.write('/exit - quit the app\n/version - get node version\n/language - get system language\n');
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        }
    }
});