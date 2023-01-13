import * as cardDeck from  "./deck.js";

// The player will need access to the deck.

// The big deck of 52 cards exists.
// The deck will be shuffled. 

// Each player will draw one card from the deck in an alternating fashion
// until the central deck has zero cards in it. 

// Each player now has a smaller, 26 card deck. 


function Player({name = '??', numberCards = 0, playerHand = new cardDeck.Deck(), location = 'middle'} = {}){
    this.name = name; // This is a string name
    this.numberCards = numberCards;   // How many cards does the player have?
    this.playerHand = playerHand; // What are the cards the player has? This is a deck object. What is its name...
    this.location = location; // Will set via number. 0 is left, 1 is middle, 2 is right side of screen.
};




// The player needs an empty deck. 

// How do I access the players deck?

// Should the player create a new deck?

// Then, have the player add a card to their personal deck. 

// I do not know how to generate a unique name for the player decks. May need to hard code it in the game? 

export {Player};

