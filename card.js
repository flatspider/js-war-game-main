// Card module establishing array for rank and suit.

//const CARD_RANK = ['2','3','4','5','6','7','8','9','10','11','12','13','14'];
//const SUIT_VALUE = ['♣', '♦', '♥', '♠']; // ['clubs', 'diamonds', 'hearts', 'spades']


// Card constructor with Card.value and Card.suit.
function Card({value = 'joker', suit = 'joker'} = {}){
    this.cardValue = value; // Number or symbol. compareCards calls on the present value
    this.suit = suit;   // Suit value - clubs, diamonds, hearts, spades
};


// Export the Card() constructor and rank and value arrays.
export { Card }; 