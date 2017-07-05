var os = require('os'),
    tf = require('./TimeFormat'),
    colors = require('colors');

function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:'.bgWhite.black, type);
    console.log('Release:'.rainbow, release);
    console.log('CPU model:'.bgBlue.yellow, cpu);
    console.log('Uptime: ~'.america, tf.format(uptime));
    console.log('User name:'.bgCyan.red, userInfo.username);
    console.log('Home dir:'.underline.magenta, userInfo.homedir);
}

exports.print = getOSinfo;