import { Deck } from "./deck.js";
import { Player } from "./player.js";

// Used to indicate what the war condition is
let warNote = false;

function Game({} = {}) {
  this.deck = new Deck(); //This is an empty deck.
  this.player1 = new Player({ name: "Conor" }); // Access individual players by this.player1
  this.player2 = new Player({ name: "Brendan" });
  this.pot = []; // This will hold cards that will be distributed to each player
  this.turnInformation = [""];
}

Game.prototype.dealCentralDeck = function () {
  // Use the add card function to add cards to each players deck.
  for (let i = 0; i < 26; i++) {
    this.player1.playerHand.push(this.deck.current_cards.splice(0, 1)[0]); //This is a card in the deck at the game.
    this.player2.playerHand.push(this.deck.current_cards.splice(0, 1)[0]);
  }
  this.turnInformation = "Deck has been dealt to both players.";
};

Game.prototype.drawCard = function () {
  // The shift function returns the zero index card in the current player hand.
  const player1card = this.player1.playerHand.shift();
  const player2card = this.player2.playerHand.shift();

  // The pot is set to the player 1/player 2 cards and added to anything additional in the pot.
  this.pot = [player1card, player2card, ...this.pot];

  // Now that the pot is full, run compare.
  this.comparePlayerCards();
};

Game.prototype.comparePlayerCards = function () {
  // What's in the pot? Each players cards. index[0] in the pot is player 1 card, index[1] in the pot is player 2 card

  // Each time, read the players zero card and add the card to the pot.
  // After determining who wins, add the pot to their hand of cards.

  let p1card = this.pot[0]["cardValue"];
  let p2card = this.pot[1]["cardValue"];

  // Can I run this recursively? Or as a loop? Come back to the start

  if (p1card > p2card) {
    // Player Ones card is larger than Player Two's card.
    // Add the two current cards to the end of player Ones deck.
    this.player1.playerHand = [...this.player1.playerHand, ...this.pot];

    if (warNote === true) {
      this.turnInformation =
        this.player1.name +
        " has won the War turn, earning " +
        this.pot.length +
        " cards.";
      warNote = false;
    } else {
      this.turnInformation = this.player1.name + " has won the turn.";
    }

    this.pot = [];
  } else if (p2card > p1card) {
    // Player Twos card is larger than Player Ones card.
    // Add the two cards to Player Two card.
    this.player2.playerHand = [...this.player2.playerHand, ...this.pot];

    if (warNote === true) {
      this.turnInformation =
        this.player2.name +
        " has won the War turn, earning " +
        this.pot.length +
        " cards.";
      warNote = false;
    } else {
      this.turnInformation = this.player2.name + " has won the turn.";
    }

    this.pot = [];
  } else {
    // Adds three cards from each players hand to the pot.
    this.pot = [
      ...this.player1.playerHand.splice(0, 3),
      ...this.player2.playerHand.splice(0, 3),
      ...this.pot,
    ];
    warNote = true;
    this.comparePlayerCards(); // Recursively call the function to compare the card values.
  }
};

export { Game };
