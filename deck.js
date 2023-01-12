import { Card, CARD_RANK, SUIT_VALUE } from "./card.js";


const newDeck = new Card();



// Create 52 cards.
// Add them to your deck. 
// Where are they located? Have a shuffle method to rearrange them. Place shuffle method in the gaem. 

// The deck contains the 52 objects. 

// Below will not output to the console because it is nested in the structure. 
// Card is imported in here so we can use it to build the deck. 


function createNewDeck(){

    const new_deck = new Deck();

    for(let i = 0; i < SUIT_VALUE; i++) {
        for(let j = 0; j < CARD_RANK; j++){
            
            let temp_card = new Card(SUIT_VALUE[i],CARD_RANK[j]);
            new_deck.how_many_cards_in_deck = new_deck.how_many_cards_in_deck + 1; //Increment the value
            new_deck.current_cards.push(temp_card); // This should be a method attached to the Deck prototype chain.


        }

    }
return new_deck;
}

function Deck({num = 0, test = {}} = {}) {
    this.how_many_cards_in_deck = num;
    this.current_cards = {};
}








export {createNewDeck};
export {newDeck};