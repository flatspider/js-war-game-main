import { Game } from "./game.js";
import { Player } from "./player.js";

// Two players created with initial names and assigned locations. 
// The names for these can be established with a pop up.
let playerOne = new Player({name:'conor', location: 'left'});
let playerTwo = new Player({name: 'sammy', location: 'right'});

let scoreLeft = document.querySelector(".player-one");
let scoreRight = document.querySelector(".player-two");

scoreLeft.innerHTML = 0;
scoreRight.innerHTML = 0;

let clickStop = false;

// Listen for a click on the new game button.
const $newGameButton = document.querySelector(".restart-game");

$newGameButton.addEventListener('click', establishNewGame);

let currentlyOccurringGame = new Game();
currentlyOccurringGame.player1 = playerOne;
currentlyOccurringGame.player2 = playerTwo;


function establishNewGame(){

    console.log("NEW GAME");

    if (clickStop === false){

        currentlyOccurringGame.acquireInitialGameDeck();
        currentlyOccurringGame.gdeck.shuffle();
        console.log(currentlyOccurringGame);
        currentlyOccurringGame.dealCentralDeck(); 

        clickStop = true;

    }
    
    scoreLeft.innerHTML = currentlyOccurringGame.player1.playerHand.length;
    scoreRight.innerHTML = currentlyOccurringGame.player2.playerHand.length;

}

console.log("hello TIME");
console.log(currentlyOccurringGame);

// Button activates a play step.
const $drawButton = document.querySelector(".draw");
$drawButton.addEventListener('click', playOneStep);

//console.log(theFinalModule.allocateCardsToWinner(theFinalModule.comparePlayerCards()));
let numberofDraws = 0;

// Need to query selector the two playing cards.
const $leftCard = document.querySelector(".card1");
const $rightCard = document.querySelector(".card2");

const $messageBox = document.querySelector(".message");


function playOneStep() {

    numberofDraws = numberofDraws + 1;
    console.log(numberofDraws);

    // Calls the card value and the suit.
    $leftCard.innerHTML = currentlyOccurringGame.player1.playerHand[0]['cardValue'] + " " + currentlyOccurringGame.player1.playerHand[0]['suit'];
    $rightCard.innerHTML = currentlyOccurringGame.player2.playerHand[0]['cardValue'] + " " + currentlyOccurringGame.player2.playerHand[0]['suit'];

    currentlyOccurringGame.drawCard();

    console.log(currentlyOccurringGame);

    scoreLeft.innerHTML = currentlyOccurringGame.player1.playerHand.length;
    scoreRight.innerHTML = currentlyOccurringGame.player2.playerHand.length;


    // How do you know who wins the hand? I can create a return text in the .comparePlayerCards();

    // Set message box. 

    $messageBox.innerHTML = "Player ONe has won the hand, gaining the 2 of clubs and etc..."

}



