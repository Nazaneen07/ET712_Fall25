/*
Nazaneen Baguaei
Homework 2 - functions, loops, and conditional statement
*/


// Exercise 1
// function to count how many names have less than 5 letters

function name_counting(arr){
    // start counting at 0
    let count = 0  

    // go through the array one by one
    for(let i = 0; i < arr.length; i++){
        // if the name length is less than 5
        if(arr[i].length < 5){
            count++ // add 1 to count
        }
    }

    // return the total count
    return count
}

// testing Exercise 1
let names = ["Ann","Peter","Patricia","Sam","Katerina"]
console.log("Number of names with less than 5 characters =", name_counting(names))



// Exercise 2
// function to ask user for a number and check if even or odd

function checkNum(){
    let userInput
    let num

    // keep asking until it is a real number
    while(true){
        userInput = prompt("Please enter a number:")
        num = Number(userInput)

        // check if it is not a number (NaN)
        if(!isNaN(num) && userInput !== ""){
            break  // stop asking if it’s valid
        }
        alert("That was not a valid number, try again!") 
    }

    // true if even, false if odd
    if(num % 2 === 0){
        return true
    } else {
        return false
    }
}

// testing Exercise 2
// console.log(checkNum())   // will ask the user for a number
