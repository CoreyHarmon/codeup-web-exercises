// Corey Harmon
// Daily Warm-ups
// let name = "corey harmon"
// let year = 2011
// console.log('My name is' + name + 'and I graduated high school in' + year)

// const str = "hello world";
//
// // capitalize the first letter
// let result = str.charAt(0).toUpperCase() + str.slice(1);
//
// // print the result
// console.log(result); // "Hello world"
//
//
//
//
// const string = "codeup";
//
// // capitalize the first letter
// let answer = string.charAt(0).toUpperCase() + string.slice(0);
//
// // print the result
// console.log(answer); // "Codeup"


// // How to use slice and array to capatilize first letter of a word
// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }
//
// console.log(capitalizeFirstLetter("codeup"))
//
// // use indexOf to find where a letter is if line is very long
//
// const capFirstLetter = (str) => {
//     console.log(str);
//     // console.log(str.substring(0, 1)); - just to check as we go
//
//     let firstLetter = str.substring(0, 1);
//     let capitalizedFirstLetter = firstLetter.toUpperCase();
//     let restOfWord = (str.substring(1))
//
//     return capitalizedFirstLetter + restOfWord;
// }
// console.log(capFirstLetter("testString"))
//
//
//
//
//
//
//
// // Create a function named, "largestNum" that takes in three numbers as input and returns the largest of the three.
// // example - largestNum(5, 10, 15 // returns 15
// //           largestNum(3, 2, 1) // returns 3
//
// function largestNum (input1, input2, input3){
//     return Math.max(input1, input2, input3)
// }
//
// console.log(largestNum(7, 4, 98))
//
// // conditional
//
// const largestNum = (input1, input2,input3)=> {
//     if (input1 >= input2 && input1>= input3) {
//     return input1 + " is the greatest number";
//     } else if (input2 >= input1 && input2 >= input3){
//     return input2 + " is the greatest number";
//     } else if (input3 >= input1 && input3 >= input2){
//     return input3 + " is the greatest number";
//     }
// }
// console.log(largestNum(7,8,9))

// Thursday, October 19 warm up
//
// let num = 100
//
// while(num >= 5) {
//     num  -=5  // decrement by 5
//
// // don't need curly brackets to start "if" statement
//
// if (num % 2 === 0) {
//     console.log(num + " Number is even");
// }else {
//     console.log(num)
// }
//
// }

// need to put increment OUTSIDE of if loop so that it increments or decrements or else it will get stuck at 100 being even

// Warmup October 20
// Create a function that uses a for loop that returns between 1 and 100. Console log your function.
function isEven () {
    for (let i = 1; i <= 100; i++) {
       if(i % 2 === 0) {
           console.log(i);
       }
    }
}

isEven() // you need ( ) inside or else it will only call the definition of the function, not the answer



