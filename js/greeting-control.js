'use strict'

/*In greeting-control.js, include the code that receives input from the user and calls the greeting logic to get a random greeting before outputting to the DOM.*/

import returnRandomGreeting from "./greeting-logic.js";

document.querySelector("#greetingForm").addEventListener('submit', (event) => {
    event.preventDefault()
generateGreeting()
});

function generateGreeting() {
    const userName = document.getElementById('userName');
    const greeting = returnRandomGreeting();
    console.log(userName.value)
    console.log(greeting)

    const greetingOutput = document.getElementById('greetingOutput');
    greetingOutput.innerHTML = `<p>${greeting}, ${userName.value}!</p>`;
}



