// This establishes a default player with name, numberCards, and playerHand deck.
function Player({ name, numberCards = 0 } = {}) {
  this.name = name; // This is a string name
  this.numberCards = numberCards; // How many cards does the player have?
  this.playerHand = []; // What are the cards the player has?
}

export { Player };
