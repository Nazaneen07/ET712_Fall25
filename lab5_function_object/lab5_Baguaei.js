/**
 * Nazaneen Baguaei
 * Lab 5, more about fucntions, object
 * sep 11, 2025
 */
console.log("Nazaneen Baguaei")

// EXAMPLE 1
// anonymous function in a variable 
let greet = function(username){
    console.log(`Welcome to function ${username}`)
}
// arrow function
let greeting = (username)=>{
    console.log(`Good afternoon ${username}`)
}
// EXAMPLE 2: default parameters 
// randomly generated a number between 1 and 9 
// function will pass the amount of time that the number will be generated
function rand_number(x){
    for(let n = 1; n <= x; n++){
        return Math.ceil(Math.random()*9)
        console.log(`${num}`)
    }
}

// EXAMPLE 3: spread syntax ... 
numbers = [2, 0, -10, 5, 8, -9]
let max_number = Math.max(...numbers)
console.log(`\n---- Example 3: spread ----`)
console.log(`The maximim number is = ${max_number}`)

// create an object 'car'
const car ={
    // properties
    type: "Fiat",
    model: "500",
    color: "white",

    // method
    car_description : function(){
        return `Car type = ${this.type}, ${this.model}, car color = ${this.color}`
    }
}

// EXAMPLE 5
// create an object "myMath" that will calculate the perimeter of the area of a rectangle
const myMath = {
    // methods
    perimeter : function(w=0,l=0){ return (2*w)+(2*1) }, 
    area :function(w=0,l=0){return w*l}
}

// EXAMPLE 6
const cat = { 
    //properties
    name: "mickey",
    color: "Black with white spots",
    breed: "unknown",

    //method
    meow: ()=>{console.log("MEOW MEOW MEOW")}
}

// EXAMPLE 7
const hen = {
    // properties
    name : "Helen",
    eggCount : 0,

    //method
     layAnEgg(){
        this.eggCount++
        return `${this.name} lays an egg`
    },
    resetEggCount(){
        this.eggCount = 0
        return `${this.name} egg count = ${this.eggCount}`
    }
}

// EXAMPLE 8 
function yell(message = ""){
    try {
        console.log(message.toUpperCase().repeat(3))
    }
    catch(error){
        console.log(error)
        console.log('Please pass a string next time!')
    }
}

// ----------------------
// LAB EXERCISE 1
// making an object called myCalculator
const myCalculator = {
    // this is just a sentence
    message: "This is my calculator object",
    // this is the number we will use
    side: 2,

    // this finds the area of a square
    area_square: function(){
        return Math.pow(this.side, 2) // side * side
    },

    // this finds the volume of a cube
    volume_cube: function(){
        return Math.pow(this.side, 3) // side * side * side
    }
}

// trying out Lab 1
console.log("---- Lab Exercise 1 ----")
console.log(myCalculator.message) 
console.log("Area of square =", myCalculator.area_square()) 
console.log("Volume of cube =", myCalculator.volume_cube())

// ----------------------
// LAB EXERCISE 2
// function to look for a property
function readProperty(obj, prop){
    try {
        // try to get the thing
        return obj[prop]
    }
    catch (error){
        // if it breaks, say error
        return "Error accessing property"
    }
}

// trying out Lab 2
console.log("---- Lab Exercise 2 ----")
console.log(readProperty({name:"Nazaneen"}, "name")) // should work
console.log(readProperty(null, "name")) // should say error

