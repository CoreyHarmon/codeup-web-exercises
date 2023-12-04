'use strict'

/*In number-utils.js, include a function to generate a random number. Make sure you export it.*/

export default function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

