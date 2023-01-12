

const CARD_RANK = ['2','3','4','5','6','7','8','9','J','Q','K','A'];
const SUIT_VALUE = ['clubs', 'diamonds', 'hearts', 'spades'];


function Card({value = 'joker', suit = 'joker'} = {}){
    this.value = value;// Number or symbol. compareCards calls on the present value
    this.suit = suit;// Suits
    //this.location; // Where is this card located in the card deck? Is it at the top? Is it ready to be drawn? 
};

export { Card, CARD_RANK, SUIT_VALUE }; 