// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/* problem 1
we work for a company building a smart home thermometer. Our most recent task is:
"given an array of temperatures of one day, calculate the temp amplitude. Keep inmind
that sometimes there may be a sensor error".
*/

//const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//1) understanding the problem
// what is temp amplitude? answer: the difference between the highest and lowest temp in the array
// how to compute the max and min temps?
//what's a sensor error? and what to do? answer: ignore them

//2) breaking into sub problems
// how to ignore errors?
// find max value in temp array(google javascript get max value in array)
//find min value in temp array
// subtract min from max(amplitude) and return it
/*
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue; //ignoring errors

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

// calcTempAmplitude([3, 7, 4, 1, 8]);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

/* problem 2 
function should now recieve 2 arrays of temps
*/

//1)understand the problem
// with 2 arrays should we implement functionality twice? answer: NO just merge 2 arrays

//2) breaking into sub problems
//merge 2 arrays - google javascript merge 2 arrays mdn or stack overflow concat is the answer
/*
const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue; //ignoring errors

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

// calcTempAmplitude([3, 7, 4, 1, 8]);
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
*/

//debugging

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    //fix the bug
    // value: prompt('Degrees celcius:'),
    //value: Number(prompt('Degrees celcius:')),
    value: 10,
  };

  //find the bug
  console.log(measurement);
  //console.log(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
//identify the bug
console.log(measureKelvin());

//debug
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = 0; //introduce bug of starting at 0
  let min = 0; //introduce bug

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue; //ignoring errors

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

// calcTempAmplitude([3, 7, 4, 1, 8]);
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
//identify bug
console.log(amplitudeBug);
