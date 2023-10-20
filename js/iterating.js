// (function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
const names = ["joe", "greg", "sarah", "sue"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log("there are " + names.length + " names in the array");

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    for(let i = 0; i < names.length; i++){
        console.log("The name at index " + i + " is: " + names[i]);
    }

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    const iterable = ["joe", "greg", "sarah", "sue"];

    for(let element of iterable){
        console.log(element)
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(name => console.log(`One name is: ${name}.`));
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    // const names = ["joe", "greg", "sarah", "sue"];
    function findName (arg) {
            console.log("The first name is " + names[0]);
        {
        }
    }

findName(names);

function findName2 (arg) {
    console.log("The second name is " + names[1]);
    {
    }
}

findName2(names);



