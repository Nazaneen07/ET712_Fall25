/*
Homework 1: control flow and loops
Student’s name: Nazaneen Baguaei
*/

console.log("\n------ Program 1: conditional statement -----");

// Program 1: conditional statement
let userInput = prompt("Enter something:");

if (userInput === null) {
    console.log("Null and void!"); // user clicked Cancel
} 
else if (userInput === "") {
    console.log("Your answer was blank!"); // user clicked OK without typing
} 
else {
    let numberInput = parseFloat(userInput); // try to convert to number
    if (!isNaN(numberInput)) { // check if it is a valid number
        if (numberInput > 0) {
            console.log("Think positively!");
        } 
        else if (numberInput < 0) {
            console.log("Never have negative balance!");
        } 
        else {
            console.log("Yin and Yang!");
        }
    } 
    else {
        console.log(`You entered a non-numeric value: ${userInput}`);
    }
}


console.log("\n------ Program 2: for loop and nested conditional statement -----");

// collect 10 numbers from the user
let numbers = [];
for (let i = 0; i < 10; i++) {
    let input = prompt("Enter number " + (i + 1) + " of 10:");
    let num = parseInt(input);

    // simple input validation
    while (isNaN(num)) {
        input = prompt("Invalid input! Enter number " + (i + 1) + " of 10:");
        num = parseInt(input);
    }

    numbers.push(num);
}

// simple counters
let count3 = 0;
let count5 = 0;
let count7 = 0;

// check multiples
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 == 0) {
        count3 = count3 + 1;
    }
    if (numbers[i] % 5 == 0) {
        count5 = count5 + 1;
    }
    if (numbers[i] % 7 == 0) {
        count7 = count7 + 1;
    }
}

// show results
console.log(count3 + " numbers are multiple of 3");
console.log(count5 + " numbers are multiple of 5");
console.log(count7 + " numbers are multiple of 7");
