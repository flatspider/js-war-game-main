// import everything into this file

import * as cardDeck from  "./deck.js";



// call the click buttons here


// This works!
// Not sure if everything should be imported into this new-main file, or if I can reach back.
console.log("hello TIME");
//cardDeck.newDeck.value = 3; //This updates the value of the card.
//console.log(cardDeck.createNewDeck()); // No parenthesis. Have to put parenthesis to call the function. 
console.log(cardDeck.firstCard);
console.log(cardDeck.secondCard);
console.log(cardDeck.simpleDeck.current_cards);
let printDeck = cardDeck.createNewDeck();
let printDeck1 = cardDeck.createNewDeck();
console.log(printDeck.current_cards);
//setTimeout(printDeck.shuffle(), 5000); // Calling this function scrambles the deck being printed. This is a strange order of operations.
//console.log(printDeck);




