/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

let firstName = "Lisa";
console.log(firstName);

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);

javascriptIsFun = 'yes!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);*/

//strings and template literals
/*const firstName = 'Lisa';
const job = 'student';
const birthYear = 1978;
const year = 2022;

const lisa = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(lisa);

const lisaNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(lisaNew);

//old way of multiline
console.log('string with \n\
multiple \n\
lines');

//template literal multiline
console.log(`string
multiple
lines`);*/

// decisions: if/else statements
/*const age = 15;

if (age >= 18) {
    console.log(`sarah can start driving 😊`);
} else {
    const yearsLeft = 18 - age;
    console.log(`sarah is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);*/

//type conversion 
//string to number
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

//number to string
console.log(String(23));

//type coercion
/*
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '2');

let n = '1' + 1; //'11'
n = n - 1;
console.log(n);
*/

//Truthy and falsy values
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Lisa'));
console.log(Boolean({}));

const money = 0;
if (money) {
    console.log("don't spend it all");
} else {
    console.log("get a job!");
}

let height;
if (height) {
    console.log('Yay height is defined');
} else {
    console.log('height is not defined yet');
}
*/

// equality operators == vs ===
/*
const age = 18;
if (age === 18) console.log('You are an adult');

const favourite = Number(prompt("Whats your favourite number?"));
console.log(favourite);

// if (favourite == 23) {//23 is a string will do type coercion
//     console.log('Cool 23 is an amazing number');
// };

if (favourite === 23) { //strictly equal will not change from string to number
    console.log('Cool 23 is an amazing number');
} else if (favourite === 7) {
    console.log('7 is also a cool number!');
} else {
    console.log('number is not 23 or 7');
}

if (favourite !== 23) console.log('Why not 23?');
*/

// Boolean logic
/*
const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense && hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (hasDriversLicense && hasGoodVision) {
//     console.log(`Sarah is able to drive`);
// } else {
//     console.log(`someone else should drive..`);
// }

const isTired = false;
if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log(`Sarah is able to drive`);
} else {
    console.log(`someone else should drive..`);
}
*/

// switch statements

//const day = 'wednesday';

// switch (day) {
//     case 'monday': //day === 'monday'
//         console.log('plan course structure');
//         console.log('go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('write code examples');
//         break;
//     case 'friday':
//         console.log('record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('enjoy the weekend');
//         break;
//     default:
//         console.log('Not a valid day!');
// }

// same code as an if/else statement
/*
const day = 'thursday';

if (day === 'monday') {
    console.log('plan course structure');
    console.log('go to coding meetup');
} else if (day === 'tuesday') {
    console.log('prepare theory videos');
} else if (day === 'wednesday' || 'thursday') {
    console.log('write code examples');
} else if (day === 'friday') {
    console.log('record videos');
} else if (day === 'saturday' || 'sunday') {
    console.log('enjoy the weekend');
} else {
    console.log('Not a valid day!');
}
*/
/*
//statements and expressions
//expressions
3 + 4
1991
true && false && !false
//statements
if (23 > 5) {
    const str = '23 is bigger'; //the string is an expression but the whole thing is a statement
}
*/

//the conditional ternary operator
/*
const age = 15;
//age >= 18 ? console.log(`i like to drink wine`) : console.log(`i like to drink water`);

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

//same using if/else
let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

*/