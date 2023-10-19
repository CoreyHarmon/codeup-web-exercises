// Exercise 1 and 2
function showMultiplicationTable (num) {
   for(i = 1; i <= 10; i++) {
       console.log(`${num} x ${i} = ${num * i}`) // console.log(num * i)
   }

}
showMultiplicationTable(7);

// start with incrementing the numbers you want to multiply by, then in the console.log

// Exercise 3

for (let i = 0; i < 10; i++) {
    let number = Math.floor(Math.random() * (200 - 20 + 1) + 20);

    if (number % 2 === 0) {
        console.log(`${number} is even`);
    } else {
        console.log(`${number} is odd`);
    }
}

// Exercise 4

for (let i = 1; i < 10; i++) {
    console.log(i.toString().repeat(i)) // console.log("3" + "3") turns to 33 in the terminal, the repeat, repeats i to the next one, like 444
}

// Exercise 5

for (num = 100; num > 0; num-=5) {
    console.log(num)
}




