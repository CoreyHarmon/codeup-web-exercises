// Break and Continue exercise
let userInput = 5

do {
    // userInput = parseInt(prompt("Please enter an odd number between 1 and 50:"));

    if (userInput >= 1 && userInput <= 50 && userInput % 2 !== 0) {
        continue
        break;
    } else {
        alert("Invalid input. Please try again.");
    }
} while (true);

console.log(`You entered a valid odd number: ${userInput}`);

// Other way to do it below

while(true) {
    let userNumber = parseInt(prompt("Please enter an odd number between 1 and 50:"));

    if(userNumber >=1 && userNumber <= 50 && userNumber % 2 === 1) {
        console.log(`Number enter ${userNumber}`);

        for(let i = 1; i <= 50; i +=2) {
            if(i === userNumber) {
                console.log(`Yikes! Skipping number: ${userNumber}`)
                continue;
            }
            console.log(`Here is an odd number: ${i}`)
        }
    }
}