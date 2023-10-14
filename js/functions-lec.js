"use strict"

// Create a function named, sum, that takes in two numbers and returns the sum of the two numbers.

// Function definition
function sum(num1, num2) {
    return num1 + num2;
}
// Calling the function / Execute the function
console.log(sum(5,5));


// Create a function named, fullName that takes in two inputs, a first name and a last name, and returns the first name and last name concatenated together.


function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}

console.log(fullName("Corey", "Harmon"))

// Refactor with Template Literals
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;  // This way so you don't have to use plus signs
}

console.log(fullName("Corey", "Harmon"))


console.log(`Hello ${ fullName("Corey", "Harmon")}, did you know that 5 + 5 = ${sum(5, 5)}`);


// Anonymous Functions

const decrement = function (input) {       //Practice this more. Can use, increment
    return input - 1;
}

console.log(decrement(5));

// Arrow Functions - Mostly used in front end - Helps with React
// function fullName(firstName, lastName) {
//     return firstName + " " + lastName;
// }

// If an arrow function only has 1 parameter, parenthesis are optional!
// const myFullName = nameStr => nameStr;
// console.log(myFullName("Corey Harmon"))

// Shorter arrow function
// The return is implied, if no curly braces are present

const fullNames = (firstName, lastName) => firstName + " " + lastName;

console.log(fullNames("Michael", "Myers"))


// Create a function that takes in a string and transforms the string to lowercase.

let sampleString = "HoW oN eArTh dOeS tHis wOrK"

function lowerCaseString(str){
    sampleString = str.toLowerCase();
}
lowerCaseString(sampleString);

console.log(sampleString);

// Arrow Function

const lowerCaseString = (str) => srt.toLowerCase();

console.log(sampleString)
lowerCaseString(sampleString);
console.log(sampleString);


function greeting(greeting = "Howdy!"){
    return greeting;
}

console.log(greeting())
console.log(greeting("Greetings!:"));


//********* Scope ***********






