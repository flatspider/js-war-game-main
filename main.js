import { Game } from "./game.js";

// Access scores
let scoreLeft = document.querySelector(".player-one");
let scoreRight = document.querySelector(".player-two");

// Initializes point values to 0
scoreLeft.innerHTML = 0;
scoreRight.innerHTML = 0;

// Access playing cards
const $leftCard = document.querySelector(".card1");
const $rightCard = document.querySelector(".card2");

// Access message box
const $messageBox = document.querySelector(".message");

// Button activates a play step
const $drawButton = document.querySelector(".draw");
$drawButton.addEventListener("click", playOneStep);

// Establishes a new game
const game = new Game();

// Listen for a click on the new game button.
const $newGameButton = document.querySelector(".restart-game");
$newGameButton.addEventListener("click", establishNewGame);

function establishNewGame() {
  if (game.firstPlay === true) {
    game.shuffle();
    game.dealCentralDeck();
    // Only allows for one click to occur.
    game.firstPlay = false;
  }

  scoreLeft.innerHTML = game.player1.playerHand.length;
  scoreRight.innerHTML = game.player2.playerHand.length;

  $messageBox.innerHTML = game.turnInformation;

  $newGameButton.classList.remove("restart-game");
  $drawButton.classList.add("restart-game");

  $leftCard.innerHTML = game.player1.name;
  $rightCard.innerHTML = game.player2.name;
}

function playOneStep() {
  // Accesses the card value and the suit.
  let p1card = game.player1.playerHand[0]["cardValue"];
  let p1suit = game.player1.playerHand[0]["suit"];

  let p2card = game.player2.playerHand[0]["cardValue"];
  let p2suit = game.player2.playerHand[0]["suit"];

  $leftCard.innerHTML = convertCard(p1card) + " " + convertSuit(p1suit);
  $rightCard.innerHTML = convertCard(p2card) + " " + convertSuit(p2suit);

  game.drawCard();

  scoreLeft.innerHTML = game.player1.playerHand.length;
  scoreRight.innerHTML = game.player2.playerHand.length;

  // Set message box.
  $messageBox.innerHTML = game.turnInformation;

  // Determine which card wins.
  if (p1card > p2card) {
    $leftCard.classList.add("riseCard");
  } else if (p2card > p1card) {
    $rightCard.classList.add("riseCard");
  } else {
    $leftCard.classList.add("riseCard");
    $rightCard.classList.add("riseCard");
  }
  setTimeout(clearCardClass, 1100);
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
