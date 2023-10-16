// Corey Harmon
// Daily Warm-ups
// let name = "corey harmon"
// let year = 2011
// console.log('My name is' + name + 'and I graduated high school in' + year)

// const str = "hello world";
//
// // capitalize the first letter
// let result = str.charAt(0).toUpperCase() + str.slice(1);
//
// // print the result
// console.log(result); // "Hello world"
//
//
//
//
// const string = "codeup";
//
// // capitalize the first letter
// let answer = string.charAt(0).toUpperCase() + string.slice(0);
//
// // print the result
// console.log(answer); // "Codeup"


// How to use slice and array to capatilize first letter of a word
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(capitalizeFirstLetter("codeup"))