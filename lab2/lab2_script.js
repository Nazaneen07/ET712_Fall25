
console.log("Lab 2 by Nazaneen baguaei")
console.log("\n----- example 1: array ---------")
// create and initialize an array
let fruits = ["apple", "orange", "grapes", "kiwi", "pinnaple"]
console.log(`the 3rd fruit = ${fruits[2]}`)
console.log(`${fruits.length} fruits in the list`)
// remove the 1st element in array fruits using method 'shift()'

console.log(`remove the 1st element in array fruits = ${fruits.shift()}`)
// add elements to the start(left) of an array
fruits.unshift(25, "mango", true)
console.log(`updated array with three new elements = ${fruits}`)
// add elements to the end(right) of an array
fruits.push('PETER', 100)
console.log(`updated array with two new elements to the right = ${fruits}`)
// find the index of an element
let index_blueberries = fruits.indexOf("blueberries")
console.log(`What is the index of 'blueberries'? ${index_blueberries}`)
// if the return index = -1, then the element doesnt exist in the array
let index_PETER = fruits.indexOf("PETER")
console.log(`what is the index of 'PETER'? ${index_PETER}`)

console.log("\n----- example 2: if statement ---------")
// if statement is used to check if the condition statement is TRUE. If it is TRUE,
// then the program will run the line in between the curly brace
let day = true
let night = false

//check if is day time
if (day == true) {
    console.log('Good Morning')
}
console.log('END')

let n1 = 10     // numerical data type
let n2 = "10"   // string data type

console.log("\n----- example 3: if statement with logical operators---------")
// check if n1 is equal to n2
if (n1 == n2) {
    console.log(`n1 is equal to n2 --> ${n1 == n2}`)
}

console.log("END 2")

//check if n1 is EXACTLY equal to n2
if (n1 === n2) {
    console.log(`n1 is equal to n2 --> ${n1 === n2}`)
}

console.log("End 3")

console.log("\n----- example 4: check if a number is even or odd---------")
// if-else check two conditions
let number = 10

if (number % 2 == 0) {
    console.log(`${number} is EVEN`)
}
else {
    console.log(`${number} is ODD`)
}

console.log("\n----- example 5: check if an input is a string or a number ----------")
let user_input = prompt("enter a username")
let check_username = isNaN(parseFloat(user_input))
console.log(`${user_input} is not a number? ${check_username}`)
if (check_username) {
    console.log(`${user_input} is A STRING`)
} else {
    console.log(`${user_input} is A NUMBER`)
}

console.log("\n----- example 6: multiway conditional statement --------")
let num1 = 9
let num2 = "9"
if (num1 === num2) {
    console.log(`num1 is EXACTLY EQUAL to num2`)
}
else if (num1 > num2) {
    console.log("num1 is GREATER THAN num2")
}
else if (num1 < num2) {
    console.log("num1 is LESS THAN num2")
}
else {
    console.log("ERROR: unable to compare")
}

console.log("\n-------- example 7: switch statement ------------")
let gender = prompt("enter a gender")

switch (gender) {
    case "Female": case "FEMALE": case "f": case "F":
        console.log("selected gender = FEMALE")
        break
    case "Male": case "MALE": case "M": case "m":
        console.log("selected gender = MALE")
        break
    case "other": case "OTHER": case "Other": case "o": case "O":
        console.log("selected gender = OTHER")
        break
    default:
        console.log("ERROR: unable to read the selected gender")
}

console.log("\n-------- EXERCISE 1 --------")

user_input = prompt("enter something")
check_username = isNaN(parseFloat(user_input))

if(check_username){
    console.log(`${user_input} is a STRING`)
}
else{
    let num_input = parseFloat(user_input)
    if(num_input > 0){
        console.log(`${num_input} is a POSITIVE number`)
    }
    else if(num_input < 0){
        console.log(`${num_input} is a NEGATIVE number`)
    }
    else if(num_input === 0){
        console.log(`the number is ZERO`)
    }
    else{
        console.log("ERROR: invalid input")
    }
}

console.log("\n-------- EXERCISE 2 --------")

let colors = ["red", "green", "orange", "olive", "magenta"]
let user_color = prompt("Enter a color").toLowerCase()

switch(user_color){
    case "red":
        console.log("You selected RED color")
        break
    case "green":
        console.log("You selected GREEN color")
        break
    case "orange":
        console.log("You selected ORANGE color")
        break
    case "olive":
        console.log("You selected OLIVE color")
        break
    case "magenta":
        console.log("You selected MAGENTA color")
        break
    default:
        console.log("Color is not in the list!")
}