import {Deck} from "./deck.js";

// This establishes a default player with name, numberCards, and playerHand deck.
function Player({name = '??', numberCards = 0, playerHand = new Deck(), location = 'middle'} = {}){
    this.name = name; // This is a string name
    this.numberCards = numberCards;   // How many cards does the player have?
    this.playerHand = playerHand; // What are the cards the player has? This is a deck object. What is its name...
    this.location = location; // Will set via number. 0 is left, 1 is middle, 2 is right side of screen.
};

Player.prototype.revealDeck = function() {
    return this.playerHand; // This function can only be called on a player. 
}


export {Player};

