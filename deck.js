import { Card, CARD_RANK, SUIT_VALUE } from "./card.js";



// Create 52 cards.
// Add them to your deck. 
// Where are they located? Have a shuffle method to rearrange them. Place shuffle method in the game. 

// The deck contains the 52 objects. 

// Below will not output to the console because it is nested in the structure. 
// Card is imported in here so we can use it to build the deck. 

let rankQ = CARD_RANK[3];


const firstCard = new Card({value: CARD_RANK[0], suit: SUIT_VALUE[3]});
const secondCard = new Card({value: CARD_RANK[4], suit: SUIT_VALUE[2]});

const simpleDeck = new Deck(); // This creates an empty deck.




Card.prototype.addCard = function(deck) {
    deck.how_many_cards_in_deck = deck.how_many_cards_in_deck + 1;
    deck.current_cards.push(this); // It is pushing the default card. Not the correct card. 
}

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




function Deck({num = 0, test = []} = {}) {
    this.how_many_cards_in_deck = num;
    this.current_cards = test;
}



export {createNewDeck};
export {firstCard, secondCard, simpleDeck};