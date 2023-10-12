// ************ Question 1 ************
// Link for exercise
// https://codeup-curriculum.web.app/curriculum/java/3.0.1/javascript-1/data-types-operators-variables

let a = 1
console.log(a)
let b = a++
console.log(b)
let c = ++a
console.log(c)
// a = 1 b = 1 c = 3

let d = "hello";
let e = false;
console.log(d++)
console.log(e++)
// d++ = NaN e++ = 0


// Let perplexed; // perplexed is undefined (no value is assigned)
// console.log(perplexed + 2)
// undefined

let price = 2.7;
price.toFixed(2);
// 2.70


// let price = "2.7";
// price.toFixed(2);
// undefined


console.log(isNaN(0) ) // false

console.log(isNaN(1)) // false

console.log(isNaN("")) // false

console.log(isNaN("string")) // true

console.log(isNaN("0")) // false

console.log(isNaN("1")) // false

console.log(isNaN("3.145")) // false

console.log(isNaN(Number.MAX_VALUE)) // true

console.log(isNaN(Infinity)) // false

console.log(isNaN("true")) // true

console.log(isNaN(true)) // false

console.log(isNaN("false")) // true

console.log(isNaN(false)) // false

// to illustrate why the isNaN() function is needed:
// NaN == NaN


console.log(!true)
// false

console.log(!false)
// true

console.log(!!true)
// true

console.log(!!false)
// false

console.log(!!0)
// false

console.log(!!-0)
// false

console.log(!!1)
// true

console.log(!!-1)
// true

console.log(!!0.1)
// true

console.log(!!"hello")
// true

console.log(!!"")
// false

console.log(!!"")
// false

console.log(!!"false")
// true

console.log(!!"0")
// true

// ************ Question 2 ************


let sample = "Hello Codeup";
console.log(sample.length)
// 12

console.log(sample.toUpperCase)


sample += " Students"
console.log(sample)
// shortcut with x += 2; instead of x = x + 2

let myVariable= "Hello Codeup Students"
console.log(myVariable.replace ("Students" , "Class"))


console.log(sample.indexOf("c"))
// -1 (H in "Hello" starts at 0 "zero" and then 1)

console.log(sample.indexOf("C"))
// 6

console.log(sample.substring(sample.indexOf("C"), 12))
// console.log(sample.substring(6, 12))


// ************ Question 3 ************

let mermaid = 3
let bear = 5
let hercules = 1
let cost = 3

console.log((mermaid + bear + hercules) * (cost))
// 27



let google = 400
let amazon = 380
let facebook = 350
// Don't need the above

let googlePayment = 400 * 6
let facebookPayment = 350 * 10
let amazonPayment = 380 * 4

console.log('total payment ' + (googlePayment + facebookPayment + amazonPayment))

// ************ Question 4 ************


let username = 'codeup';
let password = 'notastrongpassword';

let passLength = password.length > 4
console.log(passLength)

// only solution
let notInclude2 = !password.includes(username)
console.log(notInclude2)

// check if 20 characters
let characterCheck = username.length < 21
console.log(characterCheck)

let whiteSpace = (username.trim() == username) && (password.trim() == password)
console.log(whiteSpace)