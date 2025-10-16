console.log("Nazaneen Baguaei")
// collect the elements
let myform = document.querySelector(".myform")
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
    usernameValue = usernameInput.value
    usernameValueLength = usernameValue.length
    if (usernameValueLength >=5) {
        username_error_msg.textContent = ""
        btnsubmit.disabled = false
    } else {
        username_error_msg.textContent = "Username must be between 2 and 20 characters"
        btnsubmit.disabled = true
    }
})