console.log("Nazaneen Baguaei")
// collect the elements
let myform = document.querySelector("#form1")
let greeting = document.querySelector(".greeting")
let display_username = document.querySelector(".display_username")

// collect data within the form after the submit btn is pressed
myform.addEventListener("submit", function(event){
    // prevent the default form behavior
    event.preventDefault()

    // collect the data 
    let usernameInput = document.querySelector("#username")
    let usernameValue = usernameInput.value 

    if(usernameValue.trim() ===""){
        alert("press a username")
        return;
    }

    // after the validation passes, the data is sent to server
    // in html, after the validation, the greeting message will be display with the username
    greeting.style.display = "block"
    display_username.textContent = usernameValue

    // clear the username text feild
    usernameInput.value = ""

    // submit the form after validation
    myform.submit()
})

let btnsubmit = document.querySelector(".btnsubmit")

window.addEventListener("load", function(){
    btnsubmit.disabled = true 
})

let username_error_msg = document.querySelector(".username_error_msg")
let usernameInput = document.querySelector("#username")
usernameInput.addEventListener("input", function() {
    let usernameValue = usernameInput.value
    let usernameValueLength = usernameValue.length
    if (usernameValueLength >=5 && usernameValueLength<20) {
        username_error_msg.textContent = ""
        btnsubmit.disabled = false
        usernameInput.classList.add("active_input_valid")
        usernameInput.classList.remove("active_input_invalid")
    } 
    else if(usernameValueLength == 20){
        username_error_msg.textContent = "username can't be 20+ characters"
        btnsubmit.disabled = true
        usernameInput.classList.add("active_input_invalid")
        usernameInput.classList.remove("active_input_valid")
    }
    else {
        username_error_msg.textContent = "Username must be between 2 and 20 characters"
        btnsubmit.disabled = true
        usernameInput.classList.remove("active_input_valid")
        usernameInput.classList.add("active_input_invalid")
    }
})

/**
 * Oct 21, 2025
 */
// collect the elements 
const inputpassword = document.querySelector("#password")

// add a focus event to the input 
inputpassword.addEventListener("focus", function(){
    inputpassword.classList.add("active_input_valid")
})
// add a blur to an input
inputpassword.addEventListener("blur", function(){
    inputpassword.classList.remove("active_input_valid")
    inputpassword.classList.add("active_input_invalid")
})

// shuffled word
const originalword = "javascript"

// function to shuffle the original word
function shuffledword(word){
    return word
    .split("")
    .sort(()=> Math.random()-0.5)
    .join("")
}

// show shuffled word
const scrambleword = document.querySelector("#shuffledword")
const guessInput = document.querySelector("#guessInput")
const wordfeedback = document.querySelector('#wordfeedback')

// show shuffled word
const shuffled = shuffledword(originalword)
scrambleword.textContent = shuffled 

// add the input 
guessInput.addEventListener("input", function(){
    // collect characters typed in the input without begin/end space and Lower case 
    const guess = guessInput.value.trim().toLowerCase()

    if(guess === originalword){
        wordfeedback.textContent = "Correct!";
        // turn input green when correct
        guessInput.classList.add("active_input_valid")
        guessInput.classList.remove("active_input_invalid")
        
    }
    else {
        wordfeedback.textContent = "Try Again";
        // turn input red when incorrect
        guessInput.classList.remove("active_input_valid")
        guessInput.classList.add("active_input_invalid")
    }
})