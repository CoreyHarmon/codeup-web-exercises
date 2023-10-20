"use strict"

const shapes = ["square", "rectangle", "circle", "triangle"];
// square is the first element starting at array [0]


// counting element of an array using  .length

console.log(shapes.length); // 4

// accessing array element values using the index number

const numbers = [1, 2, 3, 4];
console.log(numbers[0]); // 1
console.log(numbers[1]); // 2
console.log(numbers[2]); // 3
console.log(numbers[3]); // 4

console.log("there are " + shapes.length + " shapes in the array");
// there are 4 shapes in the array

console.log("the first element is: " + shapes[0]);
// the first element is: square


// using for loops to iterate through an array

for(let i = 0; i < shapes.length; i++){
    console.log("The shape at index " + i + " is: " + shapes[i]);
}
// the shape at index 0 is: square
// the shape at index 1 is: rectangle
// the shape at index 2 is: circle
// the shape at index 3 is: triangle


// using a FOR OF LOOP to iterate through an array
const iterable = [1, 2, 3, 4, 5];

for(let element of iterable){ // for each element of that "iterable" array we are going to return back that element. or you could name iterable, "numbers" and say, let num = numbers.
    console.log(element)
}

// FOR OF LOOP example 2

for(let num of numbers){ // "of" just lists everything in the array. FAST WAY from the top of notes!!
    console.log(num)
}

// FOR EACH LOOP

shapes.forEach(shape => console.log(`Here is a lovely shape: ${shape}.`));

// SPREAD operator (...)
// using spread operator to add element of one array to another array

const arr = [3, 5, 7];

function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min); // remember to capitalize "M" in Math
}

const newArr = [...arr, randomNumber(23, 42)];

console.log(newArr)

// answer [3, 5, 7, 29] // 29 is random number between 23 and 42


// using spread to multiply a bunch of numbers in an array instead of typing all of them out
const someNums = [5, 41];

function multiply(num1, num2){
    return num1 * num2;
}

console.log(multiply(...someNums));


// using spread to begin a function

function add (...args) {  // passing ...args as a parameter to use the spread for whatever argument we h ave in the future
    let total = 0
    for(let i = 0; i < args.length; i++){ // using this to cycle through as many numbers in the array that there will be.
        total += args[i]
    }
    return total;
}

// Passing a various number of arguments of a function
const randNumArr1 = [55, 1, 58, 66, 65, 65, 92, 6, 87, 71, 48, 36, 96];
console.log(add(...randNumArr1))

const randNumArr2 = [72, 5, 90, 11, 43, 22, 100, 21];
console.log(add(...randNumArr2))