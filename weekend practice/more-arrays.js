let fruits = ["apple", "banana", "cherry", "date"];

console.log(fruits[0]); // Output: "apple"
console.log(fruits[1]); // Output: "banana"

fruits[2] = "grape"; // Change the third element to "grape"
fruits.push("fig");  // Add "fig" to the end of the array

console.log(fruits); // Output: ["apple", "banana", "grape", "date", "fig"]


let fruit = ["apple", "banana", "cherry", "date"];

let removedFruit = fruit.pop();

console.log(removedFruit); // Output: "date"
console.log(fruit); // Output: ["apple", "banana", "cherry"]


function createArray() {
    let myArray = [1, 2, 3, 4, 5];
    return myArray;
}

let result = createArray();
console.log(result); // Output: [1, 2, 3, 4, 5]
// In this example, the function createArray() creates an array called myArray containing the numbers 1 through 5. The function then returns this array.
//
// When you call createArray() and assign the result to the variable result, it will contain the array [1, 2, 3, 4, 5].


function createDynamicArray(length) {
    let dynamicArray = [];

    for (let i = 1; i <= length; i++) {
        dynamicArray.push(i);
    }

    return dynamicArray;
}

let dynamicResult = createDynamicArray(7);
console.log(dynamicResult); // Output: [1, 2, 3, 4, 5, 6, 7]

// In this example, createDynamicArray() takes a parameter length and generates an array containing numbers from 1 to length using a loop. When you call createDynamicArray(7), it will return [1, 2, 3, 4, 5, 6, 7].