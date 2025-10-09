let displaypexels = document.querySelector(".displaypexels")
//read the pixels from the y axis 
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
