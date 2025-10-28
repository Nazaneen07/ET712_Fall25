/**
 * Nazaneen Baguaei
 * Project 1 - Pre-K Learning Fun 
 */

window.addEventListener("DOMContentLoaded", function() {
    let cards = document.querySelectorAll(".card");

    // Add a simple click animation
    cards.forEach(function(card) {
        card.addEventListener("click", function() {
            card.style.transform = "scale(1.2)";
            setTimeout(function() {
                card.style.transform = "scale(1)";
            }, 400);
        });
    });
});


