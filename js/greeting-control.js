'use strict'

/*In greeting-control.js, include the code that receives input from the user and calls the greeting logic to get a random greeting before outputting to the DOM.*/

import * as dice from "./number-utils";

document.querySelector("#rollD20").addEventListener('click', () => {
    document.querySelector("#d20Result").innerHTML = dice.rollD20().toString();
});

