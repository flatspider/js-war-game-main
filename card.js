function Card({value = 5} = {}){
    this.value = value;// Number or symbol. compareCards calls on the present value
    this.suit = 6;// Suits
    this.location; // Where is this card located in the card deck? Is it at the top? Is it ready to be drawn? 
};

export { Card }; 