// Zadanie 1
{
    const hello = 'Hello';
    const world = 'World';
    const sayHello = (arg1, arg2) => { return `${arg1} ${arg2}`};
    document.write(`${sayHello(hello, world)}<br/><br/>`);
}

// Zadanie 2
{
    const multiply = (x = 1, y = 1) => {return x * y};
    document.write(`2 * 3 = ${multiply(2, 3)}<br/>`);
    document.write(`2 * _ = ${multiply(2)}<br/>`);
    document.write(`_ * 3 = ${multiply(undefined, 3)}<br/></br>`);
}

// Zadanie 3 i 4
{
    const average = (...args) => { return args.reduce((a, b) => { return a + b }) / args.length};
    document.write(` Average of [1, 2, 3, 4, 5, 6] equals ${average(1,2,3,4,5,6)}<br/><br/>`);

    const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
    document.write(`Average of [${grades}] equals ${average(...grades)}<br/><br/>`)
}

// Zadanie 5
{
    const [, , firstName, , lastName] = [1, 4, 'Iwona', false, 'Nowak']
    document.write(`${firstName} ${lastName}<br/><br/>`);
}