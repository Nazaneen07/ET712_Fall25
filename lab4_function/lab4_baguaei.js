/**
 * Nazaneen Baguaei 
 * Lab 4, functions
 * sep 9, 2025
 */

console.log("Nazaneen Baguaei")
// define a function to print a message 
function msg(){
    console.log("------ Example 1 ------")
    console.log("Hello World")
}

// define a function to print from 3 to 1
function printCount(){
        console.log("------ Example 2 ------")
    for(let n =3; n>0; n--){
        console.log(n)
    }
}

// define a function that passed a username
function greeting(username){
            console.log("------ Example 3 ------")

    console.log(`welcome to JS ${username}`)
}

// define a function passes a username and print it in uppercase
function upperMessage(message) {
    console.log("------ Example 4 ------");
    let changeUpper = message.toUpperCase();
    console.log(changeUpper);
}

// define a function to stimulate a snake eyes game.
// pass two numbers to the function, and check if both numbers are '1'
function isSnakeEyes(dice1, dice2){
    console.log("------ Example 5 ------");
    if(dice1===1 && dice2 === 1){
        console.log("snake eyes!")
    }
    else{
        console.log("Not Snake eyes!")
    }
}

// define a function that returns the area of a rectangle
function areaRectangle(length, width) {
    console.log("------ Example 6 ------");
    return length * width;
}

// define a function to check a temperture. if the temp is 
// greater than 75, returns 'true', otherwisw it will return 'false'
function checkTemperture(temperture){
    console.log("------ Example 7 ------");
    if (temperture>=75){
        return true
    }
    else{
        return false
    }
}

//EXCERCISE 

function checkName() {
    console.log("------ Exercise ------");
    let name = prompt("Enter your name:");

    while (name === null || name === "" || !isNaN(name)) {
        if (name === null || name === "") {
            name = prompt("You forgot to enter a name. Enter a name again:");
        } 
        else if (!isNaN(name)) {
            name = prompt(name + " is invalid! Enter a name again:");
        }
    }

    console.log("Welcome " + name.toUpperCase() + " to the class!");
}







