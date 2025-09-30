
/**
 * Nazaneen Baguaei
 * Lab 7 - Intro to DOM
 */
console.log("Nazaneen Baguaei")
// access(select) elements by class name
let titlenode = document.querySelector("#title")
console.log(titlenode)
// access(select) elements by class Name
let desc = document.querySelector(".description")
console.log(desc) 
// access(select) element by tag name 
let heading1 = document.querySelector("h1")
console.log(heading1)

// access(select) all elements by class Name
let description_all = document.querySelectorAll(".description")
console.log(description_all)
console.log("Loop through each element in the node list")
for(let index = 0; index<description_all.length; index++){
    console.log(`${description_all[index].textContent}`)
}

// collect(select) the elements 
let shape = document.querySelector(".shapeDivision")
let btn_square = document.querySelector(".btn_square")
let btn_circle = document.querySelector(".btn_circle")
let btn_rectangle = document.querySelector(".btn_rectangle")

// add an event to each button
btn_square.addEventListener("click", function(){
    shape.className = "square"
    shape.textContent = "square".toUpperCase()
    shape.style.backgroundColor = "gold";
    shape.style.fontsize = "3rem"

})

btn_circle.addEventListener("click", function(){
    shape.className = "circle"
    shape.textContent = "CIRCLE"
    shape.style.fontsize = "1rem"
        shape.style.backgroundColor = "hotpink";
})

btn_rectangle.addEventListener("click", function(){
    shape.className = "rectangle"
    shape.textContent = "RECTANGLE"
    shape.style.backgroundColor = "gray";
    shape.style.fontsize = "2rem"

})

// SEP 30 
// event handler
let btnpress = document.querySelector(".btnpress")
btnpress.onclick= function(){alert(`${new Date()}`)}

//mouse events
let x = document.querySelector(".x")
let circle_paragraph = document.querySelector(".circle_paragraph")
x.onmouseover = function(){circle_paragraph.textContent += ' - CIRCLE -'}

// Event listener
let box_color = document.querySelector(".box_color")

const randomRGB = function() {
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    return `rgb(${red}, ${green}, ${blue})`
}

box_color.addEventListener("mouseout",function(){
    box_color.style.backgroundColor = randomRGB()
})

// Key event
// collect the elements
let inputttext = document.querySelector(".inputttext")
let username_paragraph = document.querySelector(".username_paragraph")
inputttext.addEventListener("keydown", function(){
    username_paragraph.textContent = "username MUST have 3+ characters"
})

// LAB EXCERCISE 
// collect elements: search for the first p with class ps1
let p1 = document.querySelector(".ps1")
// add a mouseout event to change the text content to "STUDENT'S FULL NAME"
p1.addEventListener("mouseout", function(){
    p1.textContent = "Nazaneen Baguaei"
})

// search for the second p with class ps2
let p2 = document.querySelector(".ps2")
// add a click event to the ps2 to change the font-size to 25px and color to olive when is clicked
p2.addEventListener("click", function(){
    p2.style.fontSize = "25px"
    p2.style.color = "olive"
})

// search for the first div with class divs2
let d1 = document.querySelector(".divs2")
// add a click event to change the background color to indigo
d1.addEventListener("click", function(){
    d1.style.backgroundColor = "indigo"
})

// search for the second div with class divs3
let d2 = document.querySelector(".divs3")
// add a keydown event to change the width of divs3 to 300px
document.addEventListener("keydown", function(){
    d2.style.width = "300px"
})

