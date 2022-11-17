'use strict';

function logger() {
    console.log('My name is Lisa');
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

fruitProcessor(5, 0);
// to get the string above we have to store result in a variable
const appleJuice = fruitProcessor(5, 0);//function captured into a variable
console.log(appleJuice);
console.log(fruitProcessor(5, 0));//result of running the function

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);