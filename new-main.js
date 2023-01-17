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

let currentlyOccurringGame = new Game({playersArr: [playerOne , playerTwo]}); // This creates a new game instance with no deck and two players.


function establishNewGame(){

    console.log("NEW GAME");
    currentlyOccurringGame.acquireInitialGameDeck();
    //currentlyOccurringGame.gdeck.shuffle();
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

const $messageBox = document.querySelector(".message");


function playOneStep() {

    numberofDraws = numberofDraws + 1;
    console.log(numberofDraws);

    // Check for the length of the players decks. Do they have cards? 
    // This should probably be checked in the compare cards call. Determine - will someone win the game after this draw.
    // Show the two cards being compared.
    // Possibly just obscure the royals here. If value = 11, set to 'J'.
    // That will reduce any impact on the logic.
    // Maybe set the value of the royals after.


    // Calls the card value and the suit.
    $leftCard.innerHTML = currentlyOccurringGame.players[0].playerHand.current_cards[0]['cardValue'] + " " + currentlyOccurringGame.players[0].playerHand.current_cards[0]['suit'];
    $rightCard.innerHTML = currentlyOccurringGame.players[1].playerHand.current_cards[0]['cardValue'] + " " + currentlyOccurringGame.players[1].playerHand.current_cards[0]['suit'];

    currentlyOccurringGame.comparePlayerCards();

    // Cannot print an undefined.

    console.log(currentlyOccurringGame);

    scoreLeft.innerHTML = currentlyOccurringGame.players[0].playerHand.current_cards.length;
    scoreRight.innerHTML = currentlyOccurringGame.players[1].playerHand.current_cards.length;

    // How do you know who wins the hand? I can create a return text in the .comparePlayerCards();

    // Set message box. 

    $messageBox.innerHTML = "Player ONe has won the hand, gaining the 2 of clubs and etc..."


}



