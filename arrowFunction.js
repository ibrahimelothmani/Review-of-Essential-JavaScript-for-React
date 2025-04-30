// Arrow function to calculate the square of a number
const square = (number) => number * number;
console.log(square(5));
// Arrow function to calculate the sum of two numbers
const sum = (a, b) => a + b;
console.log(sum(10, 20));
// Arrow function to calculate the sum of an array of numbers
const sumArray = (array) => array.reduce((acc, curr) => acc + curr, 0);
sumArray([1, 2, 3, 4, 5]);
// Arrow function to calculate the average of an array of numbers
const average = (array) => sumArray(array) / array.length;
average ([1, 2, 3, 4, 5]);
// Arrow function to filter even numbers from an array
const filterEvenNumbers = (array) => array.filter((number) => number % 2 === 0);
filterEvenNumbers ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// Arrow function to filter odd numbers from an array
const filterOddNumbers = (array) => array.filter((number) => number % 2 !== 0);
filterOddNumbers ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// Arrow function to find the maximum number in an array
const findMax = (array) => array.reduce((max, curr) => (curr > max ? curr : max), array[0]);
findMax ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// Arrow function to find the minimum number in an array
const findMin = (array) => array.reduce((min, curr) => (curr < min ? curr : min), array[0]);
findMin ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// Arrow function to find the index of a number in an array
const findIndex = (array, number) => array.indexOf(number);
findIndex ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5);
