
/* Establish what the cards can be made of.
let suits = ["clubs","diamonds","hearts","spades"]
let values = [2,3,4,5,6,7,8,9,10];
let royalty = ["J","Q","K","A"];
*/

// export {suits, values, royalty}

//------------------------------------------------Simple War
// Lets imagine a deck of 6 cards. 
// They have the value of 1,2,3,4,5,6.
let simpleCardDeck = [1,2,3,4,5,6];

let simplePlayerOne = [];
let simplePlayerTwo = [];

function simpleDrawDeck(){ // Add randomization.
    const total_cards = simpleCardDeck.length;

    for (i = 0; i < total_cards; i++){
        if(i % 2 === 0){
            //add a card to playerOnes array
            simplePlayerOne.push(simpleCardDeck[i]); //Instead of i, choose a random integer between 1 and 6 (index 0 and 5)
        } else {
            //add a card to playerTwos array
            simplePlayerTwo.push(simpleCardDeck[i]);
        }
    }
}

simpleDrawDeck();

console.log(`Player One has: ${simplePlayerOne}`);
console.log(`Player Two has: ${simplePlayerTwo}`);

function simplePlayATurn(){

    // Take a card from player 1 deck. 
    // Take a card from player 2 deck.

    // If we always take the first one, take the [0] one. 
    // Then we would read the cards value, but we don't have to for the simple version.

    let test = compareCardValue(simplePlayerOne[0], simplePlayerTwo[0]);
    
    //Who wins? 

    // Have to compare the cards. 
    // Then take BOTH cards and add them to the winning players deck at the END of the array/object value.

    if (test){
        simplePlayerOne.unshift(simplePlayerOne.pop());
        simplePlayerOne.push(simplePlayerTwo.splice(0,1));
        
    } else {
        simplePlayerTwo.unshift(simplePlayerTwo.pop());
        simplePlayerTwo.push(simplePlayerOne.splice(0,1));
        
    }



}


function compareCardValue(card1,card2){

    if (card1 > card2){ // No ties allowed. 
        return true;
    } else {
        return false;
    }

}

simplePlayATurn();

console.log(`Player One has: ${simplePlayerOne}`);
console.log(`Player Two has: ${simplePlayerTwo}`);


simplePlayATurn();

console.log(`Player One has: ${simplePlayerOne}`);
console.log(`Player Two has: ${simplePlayerTwo}`);







//--------------------End of Simple War
/*


















//-------------Advanced:
// Identify the scores in the DOM
const $playerOneScore = document.querySelector(".player-one");
const $playerTwoScore = document.querySelector(".player-two");

$playerOneScore.innerHTML = 3;
$playerTwoScore.innerHTML = 8;
// Format the scores to always show two numerals a la js-clock.

const $drawButton = document.querySelector(".draw");

// Listen for a click on the draw button.
$drawButton.addEventListener('click', drawCardBothPlayers);

const universalCardDeck = [];
const player1deck = [];
const player2deck =[];

function buildDeck(){

    let totalCards = 56; // Do not need to call this out. Just actually pluck numbers from the deck array. Or deck constructor.
    // Define that there are 52 combinations of card constructors. 
    // They are not random, but have 13 of each suit. Each must satisfy the requirements.
    // Four 2s, Four 3s, etc. make up a valid card deck. 


}

// When new game button CLICKED, call the new game function. 



// New game function will look at a deck of cards.

// Shuffle the deck. 

// You must have a constructor for Game, Player, Deck, and Card.
// You must attach methods to the prototype chain.

function Game({}){
    this.winnerIs = Player.name; // Set to the player with the highest value. Create function?
    this.onGoing = true; // Should the game keep playing? or does one player deck have zero cards?
};

function Player({}){
    this.name = "sam"; // How is this player referred to? 
    this.location = "left"; //Is the player on the left or the right of the screen?
};

function Deck({}){ // I believe this should be the universal deck? Containing 52 cards? 
    this.count = 5;//Number or symbol
    this.suit = 6;//Suits
    this.playerOwner; // Which player owns this deck? 
    this.cardCount; // How many cards are left in this deck? Increment up or down to account for the end of the draw compete cycle 
};

function Card({}){
    this.value = 5;// Number or symbol. compareCards calls on the present value
    this.suit = 6;// Suits
    this.location; // Where is this card located in the card deck? Is it at the top? Is it ready to be drawn? 
};


let playerONE = new Deck({
    // Pull three cards from the universal deck. 
    // Increase the count for the deck? 
    this.count = 3; // = function (call the build deck?)
}) 




// Randomly assign (or alternately) assign 26 cards. 

// Player 1 will now have 26 cards in their personal deck. 

// Player 2 will now have 26 cards in their personal deck. 

// BEGIN GAME.

// Click the DRAW button. 

function drawCardBothPlayers(){

    // Call the drawCard function for each player. 
    // What are the players? Create a new player. 


}

// Player 1 contributes the first card from their deck. 

// Player 2 contributes the first card from their deck. 

// The computer evaluates player1.deck.card.value to player2.deck.card.value. 

// Look at the symbol. Determine what value each card has. 

// Directly compare the values. The higher value card wins. Aces are the highest card. 

// If player 1 wins, take the two cards currently displayed and place them into Player 1s deck. 

// If player 2 has the higher evaluated card, take the two cards currently evaluated and place them into Player 2 deck. 

// First iteration: If the values are the same, Player 1 wins. 

// This means deck array + current card1 and current card2. 

// The game now stands at Player1 Deck = 28 and Player 2 deck = 24. 

// informs the game status after each draw (e.g. What cards were drawn? Which player won the hand? How many cards does each player have?)

// Click the draw button and restart. 


*/