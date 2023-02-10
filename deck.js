import { Card } from "./card.js";

// The deck contains the 52 card objects.

// This creates a Deck constructor with the card count and an array of the current cards within the deck.
function Deck({ num = 0, cards = [] } = {}) {
  this.cardCountofDeck = num;
  this.current_cards = this.acquireInitialGameDeck(); // current_cards is an array of objects
}

// Call this within the deck prototype chain.
Deck.prototype.acquireInitialGameDeck = function () {
  // Cycle through and add cards to the deck array.
  let card_array = [];
  for (let i = 2; i < 15; i++) {
    for (let j = 0; j < 4; j++) {
      let temp_card = new Card({ value: i, suit: j });
      card_array.push(temp_card); // Pushes the card objects into the current cards array
    }
  }
  return card_array;
};

Deck.prototype.shuffle = function () {
  this.current_cards = fisher_yates(this.current_cards); // Sets the array of card objects to a random order. Does not screw up the array status.
};

// Implementing the Fisher Yates shuffle from: https://www.tutorialspoint.com/what-is-fisher-yates-shuffle-in-javascript
function fisher_yates(arr) {
  let array = arr; // Will need to pass in the Deck.current_cards, which is an array of objects...
  let i = array.length; // Set counter variable to the length of the array
  while (--i > 0) {
    // Start off at length of array, decrement by 1 each pass.
    let temp = Math.floor(Math.random() * (i + 1)); // Set the temp variable to a random number. Do not start with the first element in the array.
    [array[temp], array[i]] = [array[i], array[temp]]; // Swap the variables around.
  }
  return array;
}

export { Deck }; // Allows the createNewDeck function to be called in other js files.
