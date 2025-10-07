/**
 * Nazaneen Baguaei
 * lab 8, Events
 * oct 7, 2025
 */
console.log("Nazaneen Baguaei")
let btnpressme = document.querySelector(".btnpressme")
btnpressme.addEventListener("click", function(e){
    if(e.target.textContent == "PRESS ME!"){
        e.target.textContent = "key was pressed"
    }
    else{
        e.target.textContent = "PRESS ME!"
    }

    // toggle between classes and css
    e.target.classList.toggle("btnactive")
})

/**event delegation */
let list = document.querySelector("#list")

list.addEventListener("click", function(event) {
    // check if the clicked element is a <li> element
    if (event.target.tagName.toLowerCase() === "li") {
        // remove the clicked element
        event.target.remove();
    }
});

/**prevent deault */
const qcclink = document.querySelector(".qcclink")
qcclink.addEventListener("click", function(e){
    e.preventDefault()
    alert("QCC website is under maintenance")
})

/** WINDOW EVENT */
let btnscrollby = document.querySelector(".btnscrollby")
let content = document.querySelector("#content")
btnscrollby.addEventListener("click", function(){
    window.scrollBy(200,0)
})

/** photo gallery scrolling */

const btnright = document.querySelector(".btnright");
const btnleft = document.querySelector(".btnleft");

// define
function scrollGallery(pixels) {
  document.querySelector("div.gallery-container").scrollBy({
    left: pixels,
    behavior: "smooth"
  });
}

// add
btnright.addEventListener("click", function() {
  scrollGallery(500);
});
btnleft.addEventListener("click", function() {
  scrollGallery(-500);
});

