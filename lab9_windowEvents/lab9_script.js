let displaypexels = document.querySelector(".displaypexels")

// read the pixels from the y axis
window.addEventListener("scroll", function(){
    let y_pixels = window.scrollY
    displaypexels.innerHTML = `${y_pixels} px away from the top`
})

// to the top
const totop = document.querySelector(".totop")
window.addEventListener("scroll", function() {
    let y_pixels = window.scrollY
    if (y_pixels > 600) {
        totop.style.display = "block"
    } else {
        totop.style.display = "none"
    }
})

// resize event: change background color if the window is resized
window.addEventListener("resize", function() {
    displaypexels.style.backgroundColor = "crimson"
})

// load event: when the page finishes loading, open an alert dialog
window.addEventListener("load", function(){
    this.alert("page fully loaded!")
})

// MODAL WINDOW
const openmodal1 = document.querySelector(".openmodal")
const modalOverlay = document.querySelector("#modalOverlay")
const close_btn = document.querySelector("#closeBtn")

openmodal1.addEventListener("click", function(){
    modalOverlay.style.display = "block"
})
close_btn.addEventListener("click", function(){
    modalOverlay.style.display = "none"
})

/* LAB EXERCISE */
// Scroll Event: Change header background when scrolling
const labHeader = document.querySelector(".labexercise_header")

window.addEventListener("scroll", function(){
    let y = window.scrollY
    if (y > 100) {
        labHeader.style.backgroundColor = "lightgreen"
    } else {
        labHeader.style.backgroundColor = "lightblue"
    }
})

// Resize Event: Change header text color depending on width
window.addEventListener("resize", function(){
    let width = window.innerWidth

    if (width > 1000) {
        labHeader.style.color = "blue"
    } else if (width > 700) {
        labHeader.style.color = "green"
    } else if (width > 300) {
        labHeader.style.color = "orange"
    } else {
        labHeader.style.color = "black"
    }
})
