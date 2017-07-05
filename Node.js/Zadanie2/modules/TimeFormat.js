function format (seconds) {
    var formatTime = function (seconds) {
        var zero = 0,
            skipTimePart = '',
            HH = Math.floor(seconds / 3600) !== zero ? Math.floor(seconds / 3600) + ' godz. ' : skipTimePart,
            mm =  Math.floor(seconds % 3600 / 60) !== zero || HH !== skipTimePart ? Math.floor(seconds % 3600 / 60) + ' min. ' : skipTimePart,
            ss = Math.floor(seconds % 3600 % 60) + ' sek.';
        
        return (HH + mm + ss);
    };

    if (typeof seconds !== 'number' || isNaN(seconds) || seconds < 0) {
        process.stderr.write('Invalid argument\n');
        return 'unknown';
    }

    return formatTime(seconds);
}

exports.format = format;

