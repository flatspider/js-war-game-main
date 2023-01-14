import { Game, theFinalModule, testModule} from "./game.js";
import { Player } from "./player.js";
import { Deck } from "./deck.js";


// Two players created with initial names and assigned locations. 
// The names for these can be established with a pop up.
let playerOne = new Player({name:'conor', location: 'left'});
let playerTwo = new Player({name: 'sammy', location: 'right'});

// Listen for a click on the new game button.
const $newGameButton = document.querySelector(".restart-game");

$newGameButton.addEventListener('click', establishNewGame);


let currentlyOccurringGame = new Game({playersArr: [playerOne,playerTwo]}); // This creates a new game instance with no deck and two players.


function establishNewGame(){

    console.log("NEW GAME");
    //currentlyOccurringGame.gdeck.getNewFullDeck(); // This is not quite doing what I expected. 
    currentlyOccurringGame.acquireInitialGameDeck();
    console.log(currentlyOccurringGame);

}


console.log("hello TIME");

console.log(currentlyOccurringGame);




const $drawButton = document.querySelector(".draw");
$drawButton.addEventListener('click', playOneStep); // This is calling the function, but the method call is being hidden. 


// The function is being called over here. 


//console.log(theFinalModule.allocateCardsToWinner(theFinalModule.comparePlayerCards()));

function playOneStep() {

    currentlyOccurringGame.comparePlayerCards();


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
