// import everything into this file?

import * as cardDeck from  "./deck.js";

import * as pl from "./game.js";

console.log("hello TIME");

console.log(pl.playerOne);
console.log(pl.playerTwo);

// Printing the central deck.
console.log(pl.centralDeck);

console.log(pl.playerOne.playerHand);
console.log(pl.playerTwo.playerHand);
console.log(pl.playerTwo.playerHand.current_cards[0].value);










// call the click buttons here
/*

// Listen for a click on the new game button.
const $newGameButton = document.querySelector(".restart-game");
$newGameButton.addEventListener('click', establishNewGame);
// Go to game module. Run the function Game.newGame()
// Game.newGame() resets the players decks, 
// creates central deck, reshuffles, and distributes the cards to the two players. 



// Listen for a click on the draw button.
const $drawButton = document.querySelector(".draw");
$drawButton.addEventListener('click', gameDrawPlayers);
// When this button is clicked, trigger game.gameDrawPlayers.
// game.gameDrawPlayers looks for the players, looks to the decks they have,
// Draws the first card from each deck.
// Calls the compare cards function. 
// The player that wins the comparison recieves the two cards.
// Now ready to be clicked again!















/*
// This works!
// Not sure if everything should be imported into this new-main file, or if I can reach back.

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


*/
