import { Card, CARD_RANK, SUIT_VALUE } from "./card.js";

// The deck contains the 52 card objects. 

function createNewDeck(){ // This should possible be added to the prototype chain as Deck.prototype.newDeck(x number of cards));
    const new_deck = new Deck();

    for (let i = 0; i < CARD_RANK.length; i++){
        for (let j = 0; j < SUIT_VALUE.length; j++){
            let temp_card = new Card({value: CARD_RANK[i], suit: SUIT_VALUE[j]});
                temp_card.addCard(new_deck);
        }
    };
    
return new_deck;
}

// This creates a Deck constructor with the card count and an array of the current cards within the deck.
function Deck({num = 0, cards = []} = {}) {
    this.how_many_cards_in_deck = num;
    this.current_cards = cards;
}


/*
Deck.prototype.createPlayerDeck = function(){
    this.how_many_cards_in_deck = 0;
    this.current_cards = 
}
*/

Deck.prototype.shuffle = function(){
    this.current_cards = fisher_yates(this.current_cards); // Sets the array of card objects to a random order.
}

// Implementing the Fisher Yates shuffle from: https://www.tutorialspoint.com/what-is-fisher-yates-shuffle-in-javascript
function fisher_yates(arr){
    let array = arr; // Will need to pass in the Deck.current_cards, which is an array of objects...
    let i = array.length; // Set counter variable to the length of the array
    while (--i > 0) { // Start off at length of array, decrement by 1 each pass. 
       let temp = Math.floor(Math.random() * (i + 1)); // Set the temp variable to a random number. Do not start with the first element in the array.
       [array[temp], array[i]] = [array[i], array[temp]]; // Swap the variables around.
    }
    return array;
}

// Deck.createPlayerDeck() - no. Just have a Player.buildDeck that adds cards in a loop to their personal deck. 
// Deck.drawCard(num). Num determines how many cards are drawn.... If 1, draw the first card. 
// Check the size of the deck. If less than num, update game status? and end function.
// This should return the card object. Then I can access the values via card.value, card.suit.

Deck.prototype.drawCard = function(){
    
    /* let cards = [];
    for (let i = 0; i < num; i++){
        // Go to the deck. 
        // Pop off the array[0] card.
        // Add it to a comparison array? 
    }
    */

    // This will return the card at the bottom of the stack. But actually delete it, because you are sending it to a player hand.  

    //let array = this.current_cards;
    this.how_many_cards_in_deck = this.how_many_cards_in_deck - 1;
    return this.current_cards.splice(0,1)[0]; // This will return the first card element in the deck. .splice(0,1) returns an array of 1.

}

export {createNewDeck, Deck}; // Allows the createNewDeck function to be called in other js files.
//export {firstCard, secondCard, simpleDeck};