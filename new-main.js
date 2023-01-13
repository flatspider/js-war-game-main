import { Game, playerOne, playerTwo, theFinalModule } from "./game.js";


// import everything into this file?

//import * as cardDeck from  "./deck.js";

//import * as gm from "./game.js";
//import Game from "./game.js";


console.log("hello TIME");

console.log(playerOne);
console.log(playerTwo);


console.log(playerTwo.revealDeck());

console.log(theFinalModule); // This is printing the game. 

console.log(theFinalModule.gdeck.current_cards);

console.log(theFinalModule.players[0].playerHand); // This adds 52 cards to the players. 

console.log(theFinalModule.players[0].playerHand.current_cards[0]['cardValue']); // This reveals a value.

console.log(theFinalModule.allocateCardsToWinner(theFinalModule.comparePlayerCards()));




/*
console.log(theFinalModule.deck);

console.log(theFinalModule.players);

console.log(theFinalModule.players[0]);

console.log(theFinalModule.players[1].revealDeck().current_cards);

console.log(theFinalModule);

*/


/*



const $drawButton = document.querySelector(".draw");

// When the button is clicked, draw a card from each game instance.
$drawButton.addEventListener('click', callback);





















//console.log(gm.theFinalModule.players[0].playerHand);

// Printing the central deck.
//console.log(gm.centralDeck);

//console.log(gm.playerOne.playerHand);
//console.log(gm.playerTwo.playerHand);
//console.log(gm.playerTwo.playerHand.current_cards[0].value);





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
