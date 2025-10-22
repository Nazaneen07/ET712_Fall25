console.log("HW4 JS By Nazaneen Baguaei")


// Exercise 1: Form Validation

let form = document.querySelector("#registrationForm")
let fullname = document.querySelector("#fullname")
let email = document.querySelector("#email")
let password = document.querySelector("#password")

let nameError = document.querySelector("#nameError")
let emailError = document.querySelector("#emailError")
let passwordError = document.querySelector("#passwordError")
let successMsg = document.querySelector("#successMsg")

form.addEventListener("submit", function(event){
    event.preventDefault()

    let valid = true

    // Name validation
    if(fullname.value.trim() === ""){
        nameError.textContent = "Name cannot be empty"
        valid = false
    } else {
        nameError.textContent = ""
    }

    // Email validation (simple)
    if(email.value.trim() === "" || email.value.indexOf("@") === -1){
        emailError.textContent = "Enter a valid email"
        valid = false
    } else {
        emailError.textContent = ""
    }

    // Password validation (simple)
    let pwd = password.value.trim()
    if(pwd.length < 5 || (pwd.indexOf("#") === -1 && pwd.indexOf("$") === -1 && pwd.indexOf("%") === -1)){
        passwordError.textContent = "Password must be 5+ chars and have #, $, or %"
        valid = false
    } else {
        passwordError.textContent = ""
    }

    if(valid){
        successMsg.textContent = "Form submitted successfully!"
        fullname.value = ""
        email.value = ""
        password.value = ""
    } else {
        successMsg.textContent = ""
    }
})


// Exercise 2: Card Gallery

let leftBtn = document.querySelector("#leftBtn")
let rightBtn = document.querySelector("#rightBtn")
let cardsWrapper = document.querySelector(".cards-wrapper")

let position = 0  // track scroll
let cardWidth = 210  // 200px card + 10px margin
let totalCards = 6
let visibleCards = 3

rightBtn.addEventListener("click", function(){
    position += cardWidth * visibleCards
    let maxScroll = cardWidth * totalCards - cardWidth * visibleCards
    if(position > maxScroll){  // loop back to start
        position = 0
    }
    cardsWrapper.scrollLeft = position
})

leftBtn.addEventListener("click", function(){
    position -= cardWidth * visibleCards
    let maxScroll = cardWidth * totalCards - cardWidth * visibleCards
    if(position < 0){  // loop to last set
        position = maxScroll
    }
    cardsWrapper.scrollLeft = position
})

