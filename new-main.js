import { Game } from "./game.js";
import { Player } from "./player.js";
//import { Deck } from "./deck.js";


// Two players created with initial names and assigned locations. 
// The names for these can be established with a pop up.
let playerOne = new Player({name:'conor', location: 'left'});
let playerTwo = new Player({name: 'sammy', location: 'right'});

let scoreLeft = document.querySelector(".player-one");
let scoreRight = document.querySelector(".player-two");

scoreLeft.innerHTML = 0;
scoreRight.innerHTML = 0;

// Listen for a click on the new game button.
const $newGameButton = document.querySelector(".restart-game");
$newGameButton.addEventListener('click', establishNewGame);

let currentlyOccurringGame = new Game({playersArr: [playerOne,playerTwo]}); // This creates a new game instance with no deck and two players.



function establishNewGame(){

    console.log("NEW GAME");
    currentlyOccurringGame.acquireInitialGameDeck();
    console.log(currentlyOccurringGame);
    currentlyOccurringGame.dealCentralDeck(); 
    //Successfully dealing deck to each player. Each playerHand is a Deck object.
    // Clicking this button more than once just keeps creating a new deck of cards and dealing them to the players.
    // Must have a button to deal a card to the players?

    scoreLeft.innerHTML = currentlyOccurringGame.players[0].playerHand.current_cards.length;
    scoreRight.innerHTML = currentlyOccurringGame.players[1].playerHand.current_cards.length;
}

console.log("hello TIME");
console.log(currentlyOccurringGame);

const $drawButton = document.querySelector(".draw");
$drawButton.addEventListener('click', playOneStep); // This is calling the function, but the method call is being hidden. 

//console.log(theFinalModule.allocateCardsToWinner(theFinalModule.comparePlayerCards()));
let numberofDraws = 0;

// Need to query selector the two playing cards.
const $leftCard = document.querySelector(".card1");
const $rightCard = document.querySelector(".card2");


function playOneStep() {

    numberofDraws = numberofDraws + 1;

    console.log(numberofDraws);

    // Check for the lenght of the players decks. Do they have cards? 

    // This should probably be checked in the compare cards call. Determine - will someone win the game after this draw.

    // Show the two cards being compared.

    $leftCard.innerHTML = currentlyOccurringGame.players[0].playerHand.current_cards[0]['cardValue'] + " " + currentlyOccurringGame.players[0].playerHand.current_cards[0]['suit'];
    $rightCard.innerHTML = currentlyOccurringGame.players[1].playerHand.current_cards[0]['cardValue'] + " " + currentlyOccurringGame.players[1].playerHand.current_cards[0]['suit'];


    currentlyOccurringGame.comparePlayerCards();

    // Cannot print an undefined.

    console.log(currentlyOccurringGame);

    scoreLeft.innerHTML = currentlyOccurringGame.players[0].playerHand.current_cards.length;
    scoreRight.innerHTML = currentlyOccurringGame.players[1].playerHand.current_cards.length;






}











/*





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

console.log(printDeck.current_cards);
//setTimeout(printDeck.shuffle(), 5000); // Calling this function scrambles the deck being printed. This is a strange order of operations.
//console.log(printDeck);


*/
