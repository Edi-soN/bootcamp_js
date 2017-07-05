function format (seconds) {
    var formatTime = function (seconds) {
        var skipTimePart = '',
            hours = Math.floor(seconds / 3600) !== 0 ? Math.floor(seconds / 3600) + ' godz. ' : skipTimePart,
            minutes =  Math.floor(seconds % 3600 / 60) !== 0 || hours !== skipTimePart ? Math.floor(seconds % 3600 / 60) + ' min. ' : skipTimePart,
            seconds = Math.floor(seconds % 3600 % 60) + ' sek.';
        
        return (hours + minutes + seconds);
    };

    if (typeof seconds !== 'number' || isNaN(seconds) || seconds < 0) {
        process.stderr.write('Invalid argument\n');
        return 'unknown';
    }

    return formatTime(seconds);
}

exports.format = format;

