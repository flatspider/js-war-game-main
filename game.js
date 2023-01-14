import {Player} from "./player.js";
import {Deck} from  "./deck.js";
import { Card } from "./card.js";

//Manually create and play a game. 


function Game({playersArr, gdeck = new Deck()} = {}){
    this.gdeck = gdeck; //This is an empty deck.
    this.players = playersArr; // Access individual players by this.players[0]
    //this.gameStatus = true; // Should the game keep going?
    //this.winner = ""; // Name of player who reaches zero first;
}

// A new game is created. This will be activated via the click button on the home screen.
let theFinalModule = new Game();
let testModule = new Game();

Game.prototype.acquireInitialGameDeck = function() {
    this.gdeck.getNewFullDeck(); // Does this return a deck or cards? It returns a deck object. 
}

theFinalModule.acquireInitialGameDeck(); // No problems.


Game.prototype.dealCentralDeck = function(){
    // Use the add card function to add cards to each players deck. 
    for (let i = 0; i < 26; i++){


        // Below line properly pushes a copy of the card and keeps the deck intact. 
        // Below line slices a card item from the game deck and pushes it to the game.players[].playerHand.current_cards value.
        this.players[0].playerHand.current_cards.push(this.gdeck.current_cards.splice(0,1)[0]); //This is a card in the deck at the game.
        this.players[1].playerHand.current_cards.push(this.gdeck.current_cards.splice(0,1)[0]);

        // There are 52 cards that need to be distributed.
    }
}

//theFinalModule.gdeck.shuffle(); //This shuffles the cards within the game deck. 
//theFinalModule.dealCentralDeck(); // this distributes every other card from the zero index.


Game.prototype.comparePlayerCards = function() {

    let p1card = this.players[0].playerHand.current_cards[0]['cardValue']; // This statement is reading a card from the players hand.

    let p2card = this.players[1].playerHand.current_cards[0]['cardValue']; // Reads the value from player 2. 


    if (p1card > p2card){
        this.players[0].playerHand.current_cards.push(this.players[0].playerHand.current_cards.splice(0,1)[0]);
        this.players[0].playerHand.current_cards.push(this.players[1].playerHand.current_cards.splice(0,1)[0]);
    } else{
        this.players[1].playerHand.current_cards.push(this.players[0].playerHand.current_cards.splice(0,1)[0]);
        this.players[1].playerHand.current_cards.push(this.players[1].playerHand.current_cards.splice(0,1)[0]);

    }

    // War!
    // If the values are equal, then check the length of the current cards available. 
    // Then skip 3 cards and call compare on the fourth index. If a tie again, check that length is available, then skip 3 , etc...

}


function moveGameForward() {

    theFinalModule.comparePlayerCards(); // Could be a scope issue. 
    console.log("3");

}


// Take that player, and add the bottom card from player2s deck to the player 1 deck.

// This means the function sees it has a player. Now look for the other player. If I have 0, look for 1. If I have 1, look for 0. 
// Draw from the opposite player. 

//Lets go step by step and try to very simply modify a players deck. 

// The players deck is located in Game->players->[array of players]->playerHand Deck() object. 
// We need to modify that Deck() object's this.current_cards


let test_variable = theFinalModule.players;



//playerOne.playerHand.addCard(); // the addCard() function adds the CARD.addCard(TO NEW DECK)
// so to add a card to playerOnes DECK. Call the card in the big deck.drawCard(), you now have a card object.
// add this card to playerOnes Deck.
// So within the game.js:
// BigDeck.drawCard().addCard(playerOne.playerHand);


export { theFinalModule, Game, testModule};
