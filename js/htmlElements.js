"use strict"

function heading (str){
    let heading1 = "<h1>";
    heading1 += str + "</h1>";
    return heading1
}

console.log(heading("Title")) // useful for lists or tables to pull info from databases, where you don't know how much is there


function unorderedList (input1, input2, input3){
    let list = "<ul>"
    list += `\n <li> ${input1} </li> \n <li> ${input2} </li> \n <li> ${input3} </li> \n</ul>`
    return list
}

console.log(unorderedList("stuff", "stuff two", "stuff three"))