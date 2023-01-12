import { Card, CARD_RANK, SUIT_VALUE } from "./card.js";

// Where are they located? Have a shuffle method to rearrange them. Place shuffle method in the game. 

// The deck contains the 52 objects. 

// Below will not output to the console because it is nested in the structure. 
// Card is imported in here so we can use it to build the deck. 

let rankQ = CARD_RANK[3];

const firstCard = new Card({value: CARD_RANK[0], suit: SUIT_VALUE[3]});
const secondCard = new Card({value: CARD_RANK[4], suit: SUIT_VALUE[2]});

const simpleDeck = new Deck(); // This creates an empty deck.

secondCard.addCard(simpleDeck);
firstCard.addCard(simpleDeck); // This works.


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
function Deck({num = 0, test = []} = {}) {
    this.how_many_cards_in_deck = num;
    this.current_cards = test;
}

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


export {createNewDeck}; // Allows the createNewDeck function to be called in other js files.
export {firstCard, secondCard, simpleDeck};