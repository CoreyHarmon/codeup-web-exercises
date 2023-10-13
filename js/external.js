"use strict";

console.log("Hello from external change");

alert("Welcome to my Website!");

let color = prompt("What is your favorite color?");

alert(`Great ${color} is my favorite color too!`);


//************* Movie Rentals ************

let rentalMermaid = parseInt(prompt("How many days do you want to rent The little mermaid?"));

alert(`You have selected ${rentalMermaid}`);

let rentalHercules = parseInt(prompt("How many days do you want to rent Hercules?"));

alert(`You have selected ${rentalHercules}`);

let rentalBear = parseInt(prompt("How many days do you want to rent Brother Bear?"));

alert(`You have selected ${rentalBear}`);

//********* Total ***************

let total = (rentalMermaid + rentalHercules + rentalBear) * 3;

alert(`Your total is: $${ total.toFixed(2)}`)


//************* Facebook, Amazon, Google ************

let googlePayment = parseInt(prompt("How much does Google pay you per hour?"));

alert(`You have selected ${googlePayment}`);

let amazonPayment = parseInt(prompt("How much does Amazon pay you per hour?"));

alert(`You have selected ${amazonPayment}`);

let facebookPayment = parseInt(prompt("How much does Facebook pay you per hour?"));

alert(`You have selected ${facebookPayment}`);

let googleHours = parseInt(prompt("How many hours did you work for Google this week?"));

let amazonHours = parseInt(prompt("How many hours did you work for Amazon this week?"));

let facebookHours = parseInt(prompt("How many hours did you work for Facebook this week?"));

//*********** Totals *****************

let totalPay = (googlePayment * googleHours) + (amazonPayment * amazonHours) + (facebookPayment * facebookHours);

alert(`Your total pay is ${totalPay.toFixed(2)}`)


