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


// Manipulating Arrays

//adding elements to an array using push (adding to the end of an array), and unshift (adding to the front of an array)
// You can push or unshift one or more items, separated by commas, onto an array

const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday"];
//["Monday", "Tuesday", "Wednesday", "Thursday"]
//
// lets add "Sunday to ehe beginning of the week
daysOfTheWeek.unshift("Sunday");

console.log(daysOfTheWeek)
// ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"]

// Let's add "Friday" and "Saturday to the end of the week
daysOfTheWeek.push("Friday", "Saturday");

console.log(daysOfTheWeek);
// ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]



// removing elements to an array using pop (removing from the end of an array), shift (removing from the front of an array)

const todoList = ["Take out the trash", "clean the car", "Pay the bills"];

console.log("My todo list:")
console.log(todoList);
// ["Take out the trash", "clean the car", "Pay the bills"]

console.log("Completing the last item: " + todoList[todoList.length - 1]);
//
// let's remove the last item
const removedItem = todoList.pop();

// log what we did
console.log("Task complete: " + removedItem);
//
console.log(todoList)
// ["Take out the trash", "clean the car"]
console.log('Completing the first item: ' + todoList[0]);

// let's remove the first item
const doneItem = todoList.shift();

// log what we did
console.log('Task complete: ' + doneItem);

console.log(todoList);
// ['Clean the car']


// Locating Array elements
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'red'];

let index = colors.indexOf('green');
console.log(index);
// 3

index = colors.indexOf('red');
console.log(index);
// 0

index = colors.lastIndexOf('red');
console.log(index);
// 7


// Slicing

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let slice = colors.slice(2, 4); // stops at 4 but doesn't count it

console.log(colors); // colors is unchanged
// ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

console.log(slice); // ['yellow', 'green']

slice = colors.slice(3);
console.log(slice); // ['green', 'blue', 'indigo', 'violet']


// Reversing

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

console.log(colors);
// ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

console.log('Reversing the colors array.');

colors.reverse();

console.log(colors);
// ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red']


// Sorting

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

console.log(colors);
// ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

console.log('Sorting the colors array.');

colors.sort();

console.log(colors);
// ['blue', 'green', 'indigo', 'orange', 'red', 'violet', 'yellow']



let numberSort = [5, 4, 7, 8, 1]
numberSort.sort().reverse()
console.log(numberSort)



// CONVERTING between STRINGS and ARRAYS

// Splitting - turns it into an array

let namesString = "Joe,Bob,Sally";

console.log(namesString);
// Joe,Bob,Sally

const namesArray = namesString.split(',');

console.log(namesArray);



// Joining - turns it into a string

const namesArray = ['Joe', 'Bob', 'Sally'];

console.log(namesArray);
// ['Joe', 'Bob', 'Sally']

let namesString = namesArray.join(','); // DELIMITER - research more on later

console.log(namesString);
// Joe,Bob,Sally