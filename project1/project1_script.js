// Nazaneen Baguaei - Pre-K Learning Fun!

// Animal click
let animalCards = document.querySelectorAll(".card[data-sound]");
let animalResponse = document.getElementById("animal-response");

animalCards.forEach(card => {
    card.addEventListener("click", () => {
        let animalName = card.querySelector("p").textContent;
        let sound = card.getAttribute("data-sound");
        animalResponse.textContent = `${animalName} says: ${sound}`;
    });
});

// Color changer
function changeColor() {
    const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Violet", "Pink", "Teal", "Brown"];
    const random = Math.floor(Math.random() * colors.length);
    const newColor = colors[random];

    const circle = document.querySelector(".circle");
    circle.style.backgroundColor = newColor.toLowerCase();
    circle.textContent = newColor;
}

// Shape changer (no popup)
function createShape(shapeClass) {
    let shape = document.querySelector(".shape");
    shape.className = "shape";
    shape.classList.add(shapeClass);

    const colors = {
        triangle: "blue", oval: "green", hexagon: "orange",
        diamond: "yellow", octagon: "purple", square: "pink",
        star: "gold", rectangle: "teal", crescent: "yellow", moon: "gray"
    };
    shape.style.backgroundColor = colors[shapeClass];

    const clipPaths = {
        hexagon: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        diamond: "polygon(50% 0%, 100% 30%, 80% 90%, 20% 90%, 0% 30%)",
        octagon: "polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)",
        star: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
    };
    shape.style.clipPath = clipPaths[shapeClass] || "none";

    // No modal popup
}

// Modal popup (simplified)
function showModal(text) {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.textContent = text;
    document.body.appendChild(modal);

    modal.style.display = "block"; // show modal

    // hide after 1.5 seconds
    setTimeout(() => {
        modal.style.display = "none";
        modal.remove();
    }, 1500);
}

// Go to top button
let topBtn = document.getElementById("topBtn");
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};
topBtn.onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};

