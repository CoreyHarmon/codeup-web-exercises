function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}

let value = toCelsius(23);




// Instead of using a variable to store the return value of a function:

let x = toCelsius(77);
let text = "The temperature is " + x + " Celsius";

// You can use the function directly, as a variable value:

let text = "The temperature is " + toCelsius(77) + " Celsius";

