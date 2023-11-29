"use strict"
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


// // How to use slice and array to capatilize first letter of a word
// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }
//
// console.log(capitalizeFirstLetter("codeup"))
//
// // use indexOf to find where a letter is if line is very long
//
// const capFirstLetter = (str) => {
//     console.log(str);
//     // console.log(str.substring(0, 1)); - just to check as we go
//
//     let firstLetter = str.substring(0, 1);
//     let capitalizedFirstLetter = firstLetter.toUpperCase();
//     let restOfWord = (str.substring(1))
//
//     return capitalizedFirstLetter + restOfWord;
// }
// console.log(capFirstLetter("testString"))
//
//
//
//
//
//
//
// // Create a function named, "largestNum" that takes in three numbers as input and returns the largest of the three.
// // example - largestNum(5, 10, 15 // returns 15
// //           largestNum(3, 2, 1) // returns 3
//
// function largestNum (input1, input2, input3){
//     return Math.max(input1, input2, input3)
// }
//
// console.log(largestNum(7, 4, 98))
//
// // conditional
//
// const largestNum = (input1, input2,input3)=> {
//     if (input1 >= input2 && input1>= input3) {
//     return input1 + " is the greatest number";
//     } else if (input2 >= input1 && input2 >= input3){
//     return input2 + " is the greatest number";
//     } else if (input3 >= input1 && input3 >= input2){
//     return input3 + " is the greatest number";
//     }
// }
// console.log(largestNum(7,8,9))

// Thursday, October 19 warm up
//
// let num = 100
//
// while(num >= 5) {
//     num  -=5  // decrement by 5
//
// // don't need curly brackets to start "if" statement
//
// if (num % 2 === 0) {
//     console.log(num + " Number is even");
// }else {
//     console.log(num)
// }
//
// }

// need to put increment OUTSIDE of if loop so that it increments or decrements or else it will get stuck at 100 being even

// Warmup October 20
// Create a function that uses a for loop that returns between 1 and 100. Console log your function.
function isEven () {
    for (let i = 1; i <= 100; i++) {
       if(i % 2 === 0) {
           console.log(i);
       }
    }
}

isEven() // you need ( ) inside or else it will only call the definition of the function, not the answer


// Warmup October 23
// Create an array of at least 5 of your favorite movies. Create a for each (or a for of loop) to console log all of your movies in alphabetical order

const favoriteMovies = ["Star Wars", "Harry Potter", "Loki", "Avengers", "Ahsoka"]
favoriteMovies.sort()

favoriteMovies.forEach (movies =>  {
    console.log(movies)
})

// Warmup October 24
// Create an array of car objects. Each object should have 3 properties: make, model, and color. Write a for each or for of loop to log each car's make, model, and color

const cars = [
    {
        make: "Dodge",
        model: "Ram",
        color: "White"
    },
    {
        make: "Chevrolet",
        model: "Silverado",
        color: "Red"
    }
];
cars.forEach(car => console.log(`${car.make} ${car.model} ${car.color}`));

// example of a for of loop

// for(let car of cars){
//     console.log((`Here is an awesome ${car.make} ${car.model} ${car.color}`))
// }


// Warmup November 1, 2023
// Objective: Create a function that takes in an array and returns an array of the names of people who know JavaScript.
let developers = [
    {
        name: "Jonathan",
        languages: {
            frontend: ["HTML", "JavaScript", "CSS"],
            backend: ["Java"]
        }
    },
    {
        name: "Bonnie",
        languages: {
            frontend: ["JavaScript"],
            backend: []
        }
    },
    {
        name: "Raj",
        languages: {
            frontend: [],
            backend: ["C#", "Java", "Python"]
        }
    },
    {
        name: "Carmen",
        languages: {
            frontend: ["JavaScript", "HTML", "CSS", "React"],
            backend: ["C#", "Java", "Python", "TypeScript"]
        }
    },
]

function knowsJavaScript(developers) {
    let javascriptDevelopers=[];
    for(let i= 0; i < developers.length; i++) {
        if(developers[i].languages.frontend.includes("Javascript")) {
            javascriptDevelopers.push(developers[i].name);
        }
    }
    return javascriptDevelopers;
}

console.log(knowsJavaScript(developers))

// Warmup November 2, 2023
//Create a function that accepts three arguments (arrOfElements, bgColor, textColor), and returns the array of objects with their corresponding properties changed to the inputted values of bgColor and textColor.

    let elements = [
    {
        el: "button",
        style: {
            backgroundColor: "white",
            color: "black"
        },
        content: "Submit"
    },
    {
        el: "p",
        style: {
            backgroundColor: "white",
            color: "black"
        },
        content: "Our company is better at doing company things than your company."
    },
    {
        el: "h2",
        style: {
            backgroundColor: "white",
            color: "black"
        },
        content: "Welcome Back!"
    }
];


function findProperties(arrOfElements, bgColor, textColor) {
    for(let i= 0; i < arrOfElements.length; i++)
        {
           arrOfElements[i].style.backgroundColor = bgColor;
           arrOfElements[i].style.color = textColor;
}
    return arrOfElements;
}

console.log(findProperties(elements, "purple", "gold"))





// <!--Javascript for To-Do function-->
document.addEventListener('DOMContentLoaded', function () {
    // Function to add a new to-do
    function addTodo() {
        let todoText = document.getElementById('to-do').value.trim();
        let todoList = document.getElementById('to-do-list');
        // Check if there are already 10 to-dos
        if (todoList.children.length >= 10) {
            alert("You have reached the maximum limit of 10 to-dos. Complete one or more to-dos before adding new ones.");
            return;
        }
        if (todoText !== "") {
            let listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.appendChild(document.createTextNode(todoText));

            document.getElementById('to-do-list').appendChild(listItem);
            document.getElementById('to-do').value = ""; // Clear the input field after adding a to-do
        } else {
            alert("To-Do's text cannot be blank!");
        }
    }

    // Event listener for the add button
    document.querySelector('.add').addEventListener('click', function (e) {
        e.preventDefault();
        addTodo();
    });

    // Event listener for the Enter key in the text input
    document.getElementById('to-do').addEventListener('keypress', function (e) {
        if (e.which === 13) { // 13 is the Enter key code
            e.preventDefault();
            addTodo();
        }
    });
});

// warmup - Use the Pokemon API to add an img of your favorite pokemon to your warmup.html
const imageTag = document.querySelector("#snorlax")
fetch("https://pokeapi.co/api/v2/pokemon/snorlax")
    .then(response => response.json())
    .then(data => imageTag.src = data.sprites.front_default)
    .catch(error => console.log("Error" + error))




// warmup - November 29 - fetching toDo.json info into HTML

fetch("../data/toDo.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(toDoPost => {
            const insertToDiv = document.createElement("div");
            const mainDiv = document.querySelector(".toDo")
            insertToDiv.innerHTML =
                `<h2>${toDoPost.title}</h2>
                <p>${toDoPost.content}</p>
                <p>${toDoPost.categories}</p>`

           mainDiv.appendChild(insertToDiv)
        })
    })










