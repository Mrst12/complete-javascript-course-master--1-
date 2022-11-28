'use strict';
/*
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
*/
/*
//function declarations vs expressions
//declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

//expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age2);
*/

//arrow functions
//single line
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

//multiple lines
// const yearsUntilRetirement = birthYear => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }

// console.log(yearsUntilRetirement(1991));
/*
//multiple parameters
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'Lisa'));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/

//functions calling other functions
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));
*/
/*
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return retirement;
    } else {
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Lisa'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

/* coding challenge 1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores
*/
//my way
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;


function checkWinner(avgDolhins, avgKoalas) {
    if (avgDolhins >= (2 * avgKoalas))
        console.log(`Dolphins wins (${avgDolhins} vs. ${avgKoalas})`);
    else if (avgKoalas >= (2 * avgDolhins))
        console.log(`Koalas wins (${avgKoalas} vs. ${avgDolhins})`);
    else
        console.log(`No Team Wins(Dolphins[${avgDolhins}], Koalas[${avgKoalas}])`);
}

checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));
*/
//course way
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));
// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111);
// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/
/*
//Introduction to arrays
const friends1 = 'Michael';
const friends2 = 'Steven';
const friends3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

//array as a function
const y = new Array(1991, 1984, 2008, 2020);

//to get the first element
console.log(friends[0]);

//to find how many elements in an array
console.log(friends.length);

//to get last element in an array
console.log(friends[friends.length - 1]);

// to change/mutate an array
friends[2] = 'Jay';
console.log(friends);

//arrays can have any types
// const lisa = ['Lisa', 'Tinmurth', 2022 - 1978];
// console.log(lisa);

// const firstName = 'Lisa';
// const lisa = [firstName, 'Tinmurth', 2022 - 1978];
// console.log(lisa);
/*
//arrays inside
const firstName = 'Lisa';
const lisa = [firstName, 'Tinmurth', 2022 - 1978, 'student', friends];
console.log(lisa);

//exercise

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];
// calculate ages of 1st 2nd and last element
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

//basic array operations(methods)
/*
// add element to end of array use push()
const friends = ['Michael', 'Steven', 'Peter'];
//friends.push('Jay');

const newLength = friends.push('Jay');
console.log(newLength);
console.log(friends);

//add elements to the beginning using unshift
friends.unshift('John'); console.log(friends);

//remove last element
friends.pop();
console.log(friends);

//remove first element using shift
friends.shift();
console.log(friends);

//to find the index of an element using indexOf
console.log(friends.indexOf('Steven'));

//includes returns true if in and false if not
console.log(friends.includes('Steven'));

//can use it in a conditional
if (friends.includes('Steven')) {
    console.log('you have a friend called Steven')
}
*/

/*coding challenge 2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array)
*/
/*
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);
*/

//intro to objects
//array eg
/*
const lisaArray = [
    'Lisa',
    'Tinmurth',
    2022 - 1978,
    'student',
    ['Michael', 'Peter', 'Steven']
];
*/

//same in an object
/*
const lisa = {
    firstName: 'Lisa',
    lastName: 'Tinmurth',
    age: 2022 - 1978,
    job: 'student',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(lisa);

//getting a property with dot notation
console.log(lisa.lastName);

//with brackets
console.log(lisa['lastName']);

const nameKey = 'Name';
console.log(lisa['first' + nameKey]);
console.log(lisa['last' + nameKey]);

//example of [] notation
// const interestedIn = prompt('What do you want to know about Lisa? choose between firstName, lastName, age, job and friends');

// if (lisa[interestedIn]) {
//     console.log(lisa[interestedIn]);
// } else {
//     console.log(`wrong request, choose between firstName, lastName, age, job and friends`)
// }

//adding using dot
lisa.location = 'England';

//using []
lisa['email'] = 'LisaTinmurth@hotmail.com';
console.log(lisa);

//challenge write out lisa has 3 friends and her best friend is Michael.

console.log(`${lisa.firstName} has ${lisa.friends.length} friends, her best friend is ${lisa.friends[0]}`);
*/

//object methods
// const lisa = {
//     firstName: 'Lisa',
//     lastName: 'Tinmurth',
//     birthYear: 1978,
//     job: 'student',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,
// calcAge: function (birthYear) {
//     return 2037 - birthYear;
// }

// calcAge: function () {
//     console.log(this);
//     return 2037 - this.birthYear;
// }

//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     }
// };

// to access the function
//console.log(lisa.calcAge());
//console.log(lisa['calcAge'](1978));
//console.log(lisa.age);

//challenge to write Lisa is a 44 year old student and she has a/ no drivers license.
/*
const lisa = {
    firstName: 'Lisa',
    lastName: 'Tinmurth',
    birthYear: 1978,
    job: 'student',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job} and she has ${this.hasDriversLicense ? 'a drivers licence' : 'no drivers licence'}`;
    }
}

console.log(lisa.getSummary());
*/

/*coding challenge 3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
*/
/*
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;

    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;

    }
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
} else {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI(${mark.bmi})`);
};
*/

//iteration the for loop
/*
for (let rep = 1; rep <= 10; rep++) {
    console.log(`lifting weights repetition ${rep}`);
}
*/

//looping arrays, breaking and continuing
/*
const jonas = [
    'jonas',
    'schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];

for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);

    //types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}
console.log(types);

// another eg like the tip bill

const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

//continue and break
//log only strings

// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== 'string') continue;
//     console.log(jonas[i], typeof jonas[i]);
// }

//break after finding a number

for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;
    console.log(jonas[i], typeof jonas[i]);
}
*/

// looping backwards and loops in loops
/*
const jonas = [
    'jonas',
    'schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-----Starting exercise ${exercise}`)

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`)
    }
};
*/

// the while loop

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`lifting weights repetition ${rep}`);
// }
/*
let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`loop is about to end...`);
}
*/
