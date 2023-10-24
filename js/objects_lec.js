// Objects
// An object is a grouping of data and functionality. Data items contained in an object are referred to as properties, and functions on an object are referred to as methods.
//
//     Custom Objects
// JavaScript does not have a concept of classes. Instead, JavaScript uses something called prototypes. Prototypes allow existing objects to be used as templates to create new objects. Let's look at the base object, Object, which is the starting point for developers to make their own custom objects.
//
// New Object Instance
// The code sample below creates a custom object named car.

"use strict";

const car = new Object();

console.log(typeof car);
// "object"
// The use of new Object() calls the Object constructor to build a new instance of Object.
//
//     Object Literal Notation
// An Object instance can also be created by using object literal notation (using curly braces). JavaScript will treat this just as if you had used new Object().

"use strict";

const car = {};

console.log(typeof car);
// "object"
// Setting Properties on a Custom Object
// Once you have created an object, you can assign properties to it. As mentioned earlier, properties are pieces of data that are relevant to the object.
//
//     Properties are assigned to JavaScript objects by either dot notation or array notation.

"use strict";

const car = {};

// use dot notation to assign a "make" property
car.make = "Toyota";

// use array notation to assign a "model" property
car["model"] = "Camry";
// In general, the dot notation is preferred, you should only use the square bracket notation if:
//
// The name of the property is not a valid identifier
// You will not know the name of the property until run-time
// We can also assign properties to an object when we create it:

    const car = {
        make: "Toyota",
        model: "Camry"
    };
// Note that property names can be any valid string, but in general, you should only use valid JavaScript identifiers unless you have a good reason not to.

// DONT DO THIS
    const car = {
    "number of wheels": 4
};
// do this instead
const car = {
    numberOfWheels: 4
};
// DONT DO THIS
car["number of wheels"] = 4;
// do this instead
car.numberOfWheels = 4;
// While this should be avoided when possible, it is important to know because you will eventually encounter code where it is necessary.

    // Object Property Variable Assignment Shorthand
// old way
const name = 'codeup';
const person = {
    name: name,
    age: 4,
};
// new shorthand
const name = 'codeup';
const person = {
    name,
    age: 4,
};
// Accessing Properties on an Object
// Object properties are accessed in the same way they are set, either via dot notation or array notation.

"use strict";

const car = {};
car.make = "Toyota";
car.model = "Camry";

// use array notation to access "make" property
console.log("The car make is: " + car["make"]);

// use dot notation to access "model" property
console.log("The car model is: " + car.model);
// Nested Values
// The value of a property can be any valid value in JavaScript, including arrays, or other objects. This allows us to create complex data structures like the following:

    const cars = [
        {
            make: "Toyota",
            model: "Camry",
            features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
            owner: {
                name: "Jane Doe",
                age: 30
            }      // All one object because it is one car
        },
        {
            make: "Honda",
            model: "Accord",
            features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
            owner: {
                name: "John Doe",
                age: 31
            }
        }
    ];

console.log(`The first car is a ${cars[0].make} ${cars[0].model}.`);
console.log(`The owner of the second car is ${cars[1].owner.name}.`);

console.log("Here are all the features of all the cars:");
cars.forEach( car => {
    car.features.forEach( feature => console.log(feature) );
});
// Objects with many nested values, as well as arrays of objects, are extremely common in JavaScript.
//
//     Object Destructuring
// Shorthand for creating variables from object properties.

    const person = { name: 'codeup', age: 4 };
const { name, age } = person;
console.log(name); // 'codeup'
console.log(age); // 4
function tellMeAbout({ name, age }) {
    console.log(name); // 'codeup'
    console.log(age); // 4
}

const person = { name: 'codeup', age: 4 };
tellMeAbout(person);
// Assigning Functionality to an Object
// Besides having data properties, an object can also have functions, known as object methods. Creating a method on an object is much like creating a property, except the property value is a function.

"use strict";

const car = {};
car.make = "Toyota";
car.model = "Camry";

// create a honk method on the car object
car.honk = function () {
    alert("Honk! Honk!");
};

// honk the horn
car.honk();
// The this Keyword
// The this keyword in JavaScript is a bit more complicated than in other languages. In other languages, like PHP or Java, this is simply a reference to the current object. In JavaScript, this can refer to a different object based on how a function is called. However, the intricacies of this are a more advanced topic.
//
//     If you would like more in depth information on how this works, you can read about it on the MDN.
//
//     Example of using this:

"use strict";

const car = {};
car.make = "Toyota";
car.model = "Camry";

// create a logMakeModel method on the car object
car.logMakeModel = function () {
    console.log(`Car make/model is: ${this.make} ${this.model}`);
};

// log the make/model
car.logMakeModel();