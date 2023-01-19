import { Game, turnInformation } from "./game.js";
import { Player } from "./player.js";

let scoreLeft = document.querySelector(".player-one");
let scoreRight = document.querySelector(".player-two");

const $leftCard = document.querySelector(".card1");
const $rightCard = document.querySelector(".card2");

const $messageBox = document.querySelector(".message");

// Button activates a play step.
const $drawButton = document.querySelector(".draw");
$drawButton.addEventListener("click", playOneStep);

scoreLeft.innerHTML = 0;
scoreRight.innerHTML = 0;

// Two players created with initial names and assigned locations.
// The names for these can be established with a pop up.
let playerOne = new Player({ name: "Conor", location: "left" });
let playerTwo = new Player({ name: "Brendan", location: "right" });

let clickStop = false;

// Listen for a click on the new game button.
const $newGameButton = document.querySelector(".restart-game");

$newGameButton.addEventListener("click", establishNewGame);

let currentlyOccurringGame = new Game();
currentlyOccurringGame.player1 = playerOne;
currentlyOccurringGame.player2 = playerTwo;

function establishNewGame() {
  console.log("NEW GAME");

  if (clickStop === false) {
    currentlyOccurringGame.acquireInitialGameDeck();
    currentlyOccurringGame.gdeck.shuffle();
    console.log(currentlyOccurringGame);
    currentlyOccurringGame.dealCentralDeck();

    clickStop = true;
  }

  scoreLeft.innerHTML = currentlyOccurringGame.player1.playerHand.length;
  scoreRight.innerHTML = currentlyOccurringGame.player2.playerHand.length;

  $messageBox.innerHTML = turnInformation;

  $newGameButton.classList.remove("restart-game");
  $drawButton.classList.add("restart-game");

  $leftCard.innerHTML = currentlyOccurringGame.player1.name;
  $rightCard.innerHTML = currentlyOccurringGame.player2.name;
}

console.log("hello TIME");
console.log(currentlyOccurringGame);

//console.log(theFinalModule.allocateCardsToWinner(theFinalModule.comparePlayerCards()));
let numberofDraws = 0;

// Need to query selector the two playing cards.

function playOneStep() {
  numberofDraws = numberofDraws + 1;
  console.log(numberofDraws);

  // Calls the card value and the suit.

  let p1card = currentlyOccurringGame.player1.playerHand[0]["cardValue"];
  let p1suit = currentlyOccurringGame.player1.playerHand[0]["suit"];

  let p2card = currentlyOccurringGame.player2.playerHand[0]["cardValue"];
  let p2suit = currentlyOccurringGame.player2.playerHand[0]["suit"];

  $leftCard.innerHTML = convertCard(p1card) + " " + convertSuit(p1suit);
  $rightCard.innerHTML = convertCard(p2card) + " " + convertSuit(p2suit);

  currentlyOccurringGame.drawCard();
  console.log(currentlyOccurringGame);

  scoreLeft.innerHTML = currentlyOccurringGame.player1.playerHand.length;
  scoreRight.innerHTML = currentlyOccurringGame.player2.playerHand.length;

  // How do you know who wins the hand? I can create a return text in the .comparePlayerCards();

  // Set message box.

  $messageBox.innerHTML = turnInformation;
}

function convertCard(value) {
  if (value < 11) {
    return value;
  } else if (value === 11) {
    return "J";
  } else if (value === 12) {
    return "Q";
  } else if (value === 13) {
    return "K";
  } else if (value === 14) {
    return "A";
  }
}

function convertSuit(value) {
  if (value === 0) {
    return "♣";
  } else if (value === 1) {
    return "♦";
  } else if (value === 2) {
    return "♥";
  } else if (value === 3) {
    return "♠";
  }
}
