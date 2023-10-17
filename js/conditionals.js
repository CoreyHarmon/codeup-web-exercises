"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor(color) {
//     if (color === "red") {
//         return "Strawberries are red";
//     } else if (color === "blue") {
//         return ("blue is the color of the sky")
//     } else {
//         return ("I dont know anything about cyan")
//     }
// }
// console.log(analyzeColor("red"))
// console.log(analyzeColor("blue"))
// console.log(analyzeColor("cyan"))


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// const randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// console.log(analyzeColor(randomColor))
// console.log(randomColor)
// console.log(colors)

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
let analyzeColor = colors;

switch(colors) {
    case "red" :
    case "orange" :
    case "yellow" :
    case "green" :
    case "blue" :
    case "indigo" :
    case "violet" :
        console.log("What a great color choice");
        break;
    default:
        console.log("red");
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

let userColor = prompt("Enter color choice here")
alert(analyzeColor(userColor))


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, total) {
    if(luckyNumber === 0) {
        return total;
    }else if(luckyNumber === 1) {
        return total - (0.10 * total)
    }else if(luckyNumber === 2){
        return total - (0.25 * total)
    }else if(luckyNumber === 3){
        return total - (0.35 * total)
    }else if(luckyNumber === 4){
        return total - (0.50 * total)
    }else if(luckyNumber === 5){
        return "Everything is free!"
    }
}

console.log(calculateTotal(3, 100))



/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
const luckyNumber = Math.floor(Math.random() * 6);
// calculateTotal(3, 100)

// let billTotal= prompt("What is your bill total?")

let userBill = prompt("What was your total amount")

alert("Your lucky number is: " + luckyNumber
    + "Your total before discount $"
    + userBill, + "Your total after the discount $"
    + calculateTotal(luckyNumber, userBill))


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

// Ask the user if they want to enter a number
let wantToEnterNumber = confirm("Would you like to enter a number?");

// If the user clicks "OK", proceed to ask for a number
if (wantToEnterNumber) {
    // Prompt the user for a number
    let userNumber = prompt("Enter a number:");

    // Check if the input is a valid number
    if (!isNaN(userNumber)) {
        // Convert the input to a number
        userNumber = parseFloat(userNumber)

        // Check if the number is even or odd and display the result
        let evenOrOdd = userNumber % 2 === 0 ? "even" : "odd";
        alert("The number is " + evenOrOdd + ".");

        // Calculate the number plus 100 and display the result
        let numberPlus100 = userNumber + 100;
        alert("The number plus 100 is: " + numberPlus100);

        // Check if the number is positive or negative and display the result
        let positiveOrNegative = userNumber >= 0 ? "positive" : "negative";
        alert("The number is " + positiveOrNegative + ".");
    }else {
        // Display an alert if the input is not a valid number
        alert("Invalid input. Please enter a valid number.");
    }else {
        // Display a message if the user clicks "Cancel"
        alert("You chose not to enter a number. Goodbye!");

    }
}

// Call the function to start the analysis
analyzeColor()

