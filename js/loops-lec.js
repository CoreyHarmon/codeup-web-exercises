// While loop example
// let i= 0;
//
// while(i <= 10) {
//     console.log(i);
//     i++
// }

// Do While loop
// let i = 0;
// do {
//     console.log(i);d
//     i++
// } while (i < 10)


// ************* Mini Exercise *****************
// Create a variable called num that is equal to 0;
// Write a while loop that increment "num" by 5 so long as num is less than 100
// Do the same thing with a do-while

// let i = 0;
// while(i < 100) {
//     console.log(i += 5); // same thing as putting i equals i plus 5 ( += ) or (num = num + 5)
// }

// do {
//     console.log(i)
//     i += 5
// } while(i < 100)

// ************* Mini Game *****************

const secretNumber = 7;
let guess;
let attempt = 0;

// do-while loop

do {
    guess = parseInt(prompt("Guess the secret number (1-10):"));
    attempt++
    if(guess === secretNumber) {
        console.log("You have guessed the lucky number")
    } else {
        if(guess < secretNumber){
            console.log("Try a higher number")
        }else {
            console.log("Try a lower number")
        }
        console.log("Incorrect guess" + attempt + " total attempts")
    }

}while (guess !== secretNumber)

