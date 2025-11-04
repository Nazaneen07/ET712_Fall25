// Nazaneen Baguaei - Pre-K Learning Fun!
// This JavaScript makes the website fun and interactive for kids.

/* ---------------- ANIMALS SECTION ---------------- */
// When a user clicks on an animal card, it will show what sound that animal makes.

let animalCards = document.querySelectorAll(".card[data-sound]");
let animalResponse = document.getElementById("animal-response");

// Go through all the animal cards one by one
animalCards.forEach(card => {
    // When the card is clicked
    card.addEventListener("click", () => {
        // Get the name and sound from the card
        let animalName = card.querySelector("p").textContent;
        let sound = card.getAttribute("data-sound");
        // Show the animal sound text on the page
        animalResponse.textContent = `${animalName} says: ${sound}`;
    });
});

/* ---------------- COLOR SECTION ---------------- */
// This function changes the circle to a random color when clicked.

function changeColor() {
    // A list of possible colors
    const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Violet", "Pink", "Teal", "Brown"];
    // Pick one random color from the list
    const random = Math.floor(Math.random() * colors.length);
    const newColor = colors[random];

    // Find the circle on the page and change its color and text
    const circle = document.querySelector(".circle");
    circle.style.backgroundColor = newColor.toLowerCase();
    circle.textContent = newColor;
}

/* ---------------- SHAPE SECTION ---------------- */
// This function changes the shape shown in the math section.

function createShape(shapeClass) {
    // Find the shape box
    let shape = document.querySelector(".shape");

    // Reset the shape before adding the new one
    shape.className = "shape";
    shape.classList.add(shapeClass);

    // Set the color for each shape type
    const colors = {
        triangle: "blue", oval: "green", hexagon: "orange",
        diamond: "yellow", octagon: "purple", square: "pink",
        star: "gold", rectangle: "teal", crescent: "yellow", moon: "gray"
    };
    shape.style.backgroundColor = colors[shapeClass];

    // Set the shape style using clip-path (for shapes like stars and hexagons)
    const clipPaths = {
        hexagon: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        diamond: "polygon(50% 0%, 100% 30%, 80% 90%, 20% 90%, 0% 30%)",
        octagon: "polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)",
        star: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
    };
    // If the shape doesn't need a clip-path, it stays normal
    shape.style.clipPath = clipPaths[shapeClass] || "none";
}

/* ---------------- POPUP MESSAGE ---------------- */
// This shows a small message that fades away after 1.5 seconds.

function showModal(text) {
    // Create a new popup box
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.textContent = text;
    document.body.appendChild(modal);

    // Make it show up on the page
    modal.style.display = "block";

    // Hide it after 1.5 seconds
    setTimeout(() => {
        modal.style.display = "none";
        modal.remove();
    }, 1500);
}

/* ---------------- GO TO TOP BUTTON ---------------- */
// Shows a button when the user scrolls down and scrolls smoothly to the top when clicked.

let topBtn = document.getElementById("topBtn");

// Show or hide the button when scrolling
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

// Scroll smoothly to the top when the button is clicked
topBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

