'use strict';

// Zadanie 1
{
    var hello = 'Hello';
    var world = 'World';
    var sayHello = function sayHello(arg1, arg2) {
        return arg1 + ' ' + arg2;
    };
    document.write(sayHello(hello, world) + '<br/><br/>');
}

// Zadanie 2
{
    var multiply = function multiply() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        return x * y;
    };
    document.write('2 * 3 = ' + multiply(2, 3) + '<br/>');
    document.write('2 * _ = ' + multiply(2) + '<br/>');
    document.write('_ * 3 = ' + multiply(undefined, 3) + '<br/></br>');
}

// Zadanie 3 i 4
{
    var average = function average() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return args.reduce(function (a, b) {
            return a + b;
        }) / args.length;
    };
    document.write(' Average of [1, 2, 3, 4, 5, 6] equals ' + average(1, 2, 3, 4, 5, 6) + '<br/><br/>');

    var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
    document.write('Average of [' + grades + '] equals ' + average.apply(undefined, grades) + '<br/><br/>');
}

// Zadanie 5
{
    var _ref = [1, 4, 'Iwona', false, 'Nowak'],
        firstName = _ref[2],
        lastName = _ref[4];

    document.write(firstName + ' ' + lastName + '<br/><br/>');
}
