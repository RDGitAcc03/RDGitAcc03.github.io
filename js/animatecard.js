
let cardElement = document.getElementById('card'); // Grabbing card DOM element

function hinge(){
    cardElement.classList.add('animate__animated', 'animate__hinge'); // Adding classes found in node_modules > animate.css
    console.log(cardElement.contains('animate__animated')); // Testing if class added exists
}
// Show animation hinge() upon clicking event of card
cardElement.addEventListener('click', hinge);