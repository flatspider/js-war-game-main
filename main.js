import { Game, turnInformation } from "./game.js";
import { Player } from "./player.js";

// Access scores
let scoreLeft = document.querySelector(".player-one");
let scoreRight = document.querySelector(".player-two");
//Initializes point values to 0.
scoreLeft.innerHTML = 0;
scoreRight.innerHTML = 0;
// Access playing cards
const $leftCard = document.querySelector(".card1");
const $rightCard = document.querySelector(".card2");
// Access message box
const $messageBox = document.querySelector(".message");

// Button activates a play step.
const $drawButton = document.querySelector(".draw");
$drawButton.addEventListener("click", playOneStep);

// Two players created with initial names and assigned locations.
// The names for these can be established with a pop up.

let clickStop = false;

// Listen for a click on the new game button.
const $newGameButton = document.querySelector(".restart-game");

$newGameButton.addEventListener("click", establishNewGame);

let currentlyOccurringGame = new Game();

function establishNewGame() {
  console.log("NEW GAME");

  if (clickStop === false) {
    currentlyOccurringGame.deck.shuffle();
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

//console.log(theFinalModule.allocateCardsToWinner(theFinalModule.comparePlayerCards()));
let numberofDraws = 0;

// Need to query selector the two playing cards.

function playOneStep() {
  numberofDraws = numberofDraws + 1;
  //console.log(numberofDraws);

  // Calls the card value and the suit.

  let p1card = currentlyOccurringGame.player1.playerHand[0]["cardValue"];
  let p1suit = currentlyOccurringGame.player1.playerHand[0]["suit"];

  let p2card = currentlyOccurringGame.player2.playerHand[0]["cardValue"];
  let p2suit = currentlyOccurringGame.player2.playerHand[0]["suit"];

  $leftCard.innerHTML = convertCard(p1card) + " " + convertSuit(p1suit);
  $rightCard.innerHTML = convertCard(p2card) + " " + convertSuit(p2suit);

  currentlyOccurringGame.drawCard();
  //console.log(currentlyOccurringGame);

  scoreLeft.innerHTML = currentlyOccurringGame.player1.playerHand.length;
  scoreRight.innerHTML = currentlyOccurringGame.player2.playerHand.length;

  // Set message box.

  $messageBox.innerHTML = turnInformation;

  // How do I read which card is winning? I can see the p2card value.
  // This animation functions as long as the winners alternate.

  console.log($leftCard.classList);
  console.log($rightCard.classList);

  if (p1card > p2card) {
    $leftCard.classList.add("riseCard");
  } else if (p2card > p1card) {
    $rightCard.classList.add("riseCard");
  } else {
    $leftCard.classList.add("riseCard");
    $rightCard.classList.add("riseCard");
  }

  const myTimeout = setTimeout(clearCardClass, 1100);

  // It is executing this immediately, before the animation can take place.
}

function clearCardClass() {
  $leftCard.classList.remove("riseCard");
  $rightCard.classList.remove("riseCard");
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
