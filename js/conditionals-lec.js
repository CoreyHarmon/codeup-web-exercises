// console.log("hello world")

// let age = 13;
//
// if(age >= 16) {
//     console.log("You're eligible drive")
// }
//
// if(age < 16) {
//     console.log("You can't drive yet")
// }
//
// // using if else conditional below
//
// if(age >= 16) {
//     console.log("You can drive")
// } else {
//     console.log("You cannot drive")
// }
//
// let currentDay = prompt("What is the day today?").toLowerCase()
//
// if(currentDay === "monday" ||
//     currentDay === "tuesday" ||
//     currentDay === "wednesday") {
//     console.log("I love" + " " + currentDay)
// } else{
//     console.log(currentDay + " " + "is not a valid day")
// }

// asking for a confirmation, yes or no

let letsPlay = confirm("Do you want to play");

if(letsPlay) {
    console.log("Great lets play")
} else {
    console.log("Maybe next time")
}

// prompt the user to enter a username and a password

const username = "user";
const password = "password";

const inputedUsername = prompt("Enter a username")
const inputedPassword = prompt("Enter a password")

// Next i want to console.log("You are logged in") if username, userUserName && password, userPassword

if(username === inputedUsername && password === inputedPassword) {
    console.log("You are logged in")
} else if(username !== inputedPassword && password !== inputedPassword) {
    console.log("Incorrect username and password")
} else if(username !== inputedUsername) {
    console.log("Incorrect username")
} else if(password !== inputedPassword) {
    console.log("Incorrect password")
} else {
    console.log("Unexpected error")
}

// Nested conditional example

if(username === inputedUsername) {
    if(password === inputedPassword) {
        console.log("Logged in")
    } else {
        console.log("Incorrect password")
    }
} else {
    console.log("Invalid username")
}

// Ternary Operator

let name = "Bob";
let greeting = (name === "Bob") ? ("Hello, " + name) : ("Hello stranger");
// if Bob is true (?) then put, "Hello, Bob."
// if Bob is not true (:) then put, "Hello stranger."

console.log(greeting);

// Switch statement example

let daysOfWeek = "Saturday";

switch(daysOfWeek) {
    case "Monday" :
    case "Tuesday" :
    case "Wednesday" :
    case "Thursday" :
    case "Friday" :
        console.log("It is a weekday");
        break;
    case "Saturday" :
    case "Sunday" :
        console.log("It is the weekend");
        break;
    default:
        console.log("Invalid day of the week, or misspelled, please check again");
}

// using function and if/else

function sayHello(name) {
    if(name.length <= 20) {
        return `Hello, ${name}`
    }else {
        return "That is way too long of a name."
    }
}

console.log(sayHello(name "Lasso"));