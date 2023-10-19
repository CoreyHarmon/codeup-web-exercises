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

// ******************* For Loop ******************
// 3 stages - 1. initialize variable 2. condition 3. increment
// Example - for (let i = 0; i < 10; i++) {
//    console.log('for loop iteration #' + i);
// }

for(let i = 10; i < 20; i++) { // makes 20 exclusive, but you can use <= to make it inclusive
    console.log(i)
}

// How to start at 0, increment by 5 up to 95 example
for(let i = 0; i < 100; i+= 5) { // i += 5 is shorthand for num = num +5
    console.log(i)
}

// Use a string
let hello = "hello";
for (i = 0; i <= hello.length; i++) {
    console.log(hello[i]) // use [] arrays to place each letter in, "hello" into its own index
}

// 2 initializers, and 2 conditions

for(let i = 0, j= 9; i < 10; i++, j--) { // start i at 0, start j at 9, then increment i by 1 and decrement j by 1
    console.log("for loop iteration #" + i + ", j = " + j);
}

// CONDITION is just telling you when to stop the loop


// Break
for(let i = 0; i < 100; i += 5) {
    console.log(i)
    break; // when you comment this out, it will work because it doesnt stop at 0 anymore on the loop
    console.log("Snippet never reached");
}
// Next example

for(let i = 0; i < 100; i += 5) {
    console.log(i)
    if(i === 50) {
        break;  // break after you hit 50 and going up by 5 from 0
    }
}
console.log("Trying to break out of loop")  // You won't see this because of the break


// Continue

for(i = 1; i <= 5; i++) {
    if(i === 3) {
        continue;   // skips 3 (continues over) and goes 1, 2, 4, 5, etc
    }
    console.log(i)
}

// continue statement

for(let i = 1; i < 100; i++){  // I am starting at 1, as long as it doesn't go over 100, increment by 1
    if(i % 2 === 0) {  // if i is divisible by 2, it is even
        continue;
    }
    console.log(("Here is a lovely even number" + i));
}

