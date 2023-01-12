// Card module establishing array for rank and suit.

const CARD_RANK = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
const SUIT_VALUE = ['clubs', 'diamonds', 'hearts', 'spades'];

// Card constructor with Card.value and Card.suit.
function Card({value = 'joker', suit = 'joker'} = {}){
    this.value = value; // Number or symbol. compareCards calls on the present value
    this.suit = suit;   // Suits
};

Card.prototype.addCard = function(deck) {
    deck.how_many_cards_in_deck = deck.how_many_cards_in_deck + 1;
    deck.current_cards.push(this); // It is pushing the default card. Not the correct card. 
}

// Export the Card() constructor and rank and value arrays.
export { Card, CARD_RANK, SUIT_VALUE }; 