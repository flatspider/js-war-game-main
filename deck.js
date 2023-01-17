import { Card, CARD_RANK, SUIT_VALUE } from "./card.js";

// The deck contains the 52 card objects. 

Deck.prototype.addCard = function(card_object) {
    this.cardCountofDeck = this.cardCountofDeck + 1;
    this.current_cards.push(card_object); // This should take the card object...and push it to the array [current cards] on the deck object. 
}

Deck.prototype.getNewFullDeck = function (){
    const new_deck = new Deck(); // This is not what needs to happen. But I think it is fine.

    for (let i = 0; i < CARD_RANK.length; i++){
        for (let j = 0; j < SUIT_VALUE.length; j++){
            let temp_card = new Card({value: CARD_RANK[i], suit: SUIT_VALUE[j]});
                this.addCard(temp_card);
        }
    };
    
return new_deck; // This returns an entire deck object, with this.how_many and this.current_cards.
}

// This creates a Deck constructor with the card count and an array of the current cards within the deck.
function Deck({num = 0, cards = []} = {}) {
    this.cardCountofDeck = num;
    this.current_cards = cards; // current_cards is an array of objects
}

Deck.prototype.shuffle = function(){
    this.current_cards = fisher_yates(this.current_cards); // Sets the array of card objects to a random order. Does not screw up the array status.
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

Deck.prototype.drawCard = function(){
    
    // This will return the card at the bottom of the deck. But actually delete it, because you are sending it to a player hand.  

    /*

    const cardToRemove = 0;

    const filteredCards = this.current_cards.filter((item) => item.cardValue !== cardToRemove);

    */


    this.cardCountofDeck = this.cardCountofDeck - 1;
    return this.current_cards.splice(0,1)[0]; 
    // I am 99% sure this is returning a card object. How do I check?
    // This will return the first card element in the deck. .splice(0,1) returns an array of 1.
    // Am I creating an array of arrays...?


    

}



export {Deck}; // Allows the createNewDeck function to be called in other js files.