import * as gamers from "./player.js";
import {Deck} from  "./deck.js";
import { Card } from "./card.js";

//Manually create and play a game. 

// When I try and modify a players deck, the whole program stops working. 
// Calling .drawCard or .splice on a players deck breaks the [0] reference point. It causes it to become undefined. 

// Two players created with initial names and assigned locations. 
// Each player has a name, number of cards, array of cards, and location on the screen.
let playerOne = new gamers.Player({name:'conor', location: 'left'});
let playerTwo = new gamers.Player({name: 'sammy', location: 'right'});

function Game({playersArr = [playerOne , playerTwo], gdeck = new Deck()} = {}){
    this.gdeck = gdeck; //This is an empty deck.
    this.players = playersArr; // Access individual players by this.players[0]
    //this.gameStatus = true; // Should the game keep going?
    //this.winner = ""; // Name of player who reaches zero first;
}

// A new game is created. This will be activated via the click button on the home screen.
let theFinalModule = new Game();


Game.prototype.acquireInitialGameDeck = function() {
    this.gdeck = this.gdeck.getNewFullDeck(); // Does this return a deck or cards?
}

//theFinalModule.deck.createNewDeck(); // Need to rework this.

theFinalModule.acquireInitialGameDeck();


Game.prototype.dealCentralDeck = function(){
    // Use the add card function to add cards to each players deck. 
    for (let i = 0; i < 26; i++){
        
        let temp_card1 = this.gdeck.drawCard(); // This is drawing the card. 
        temp_card1.addCard(this.players[0].playerHand); // This adds that card to the first players hand.
        
        let temp_card2 = this.gdeck.drawCard(); // This is drawing the card. 
        temp_card2.addCard(this.players[1].playerHand); // This adds that card to the first players hand.

    }

}

theFinalModule.dealCentralDeck();

// Show me the two cards to be compared. 




Game.prototype.comparePlayerCards = function() {

    let p1card = this.players[0].playerHand.current_cards[10]['cardValue']; // This statement is reading a card from the players hand.

    let p2card = this.players[1].playerHand.current_cards[0]['cardValue'];

    if (p1card > p2card){
        return 0//this.players[0]; // So if this function returns a single value, it works?
    } else{
        return 1//this.player[1];
    }


}


//theFinalModule.comparePlayerCards(); // This returns a player!

// Take that player, and add the bottom card from player2s deck to the player 1 deck.

// This means the function sees it has a player. Now look for the other player. If I have 0, look for 1. If I have 1, look for 0. 
// Draw from the opposite player. 

Game.prototype.allocateCardsToWinner = function(winplayer){ 
    
    // Take the player.
    // Look at the players deck. 
    // Does the Game know where this player is? 

    // windplayer will be a one or a zero.



    if (winplayer === 0){


        this.players[0].playerHand = this.players[1].playerHand
        
        ;


    } else {
        return "ahaha";
    }
 
    
    //winplayer.playerHand.current_cards; //This reaches into the players Deck.

    // Draw a card from the loser. 

}

theFinalModule.allocateCardsToWinner(theFinalModule.comparePlayerCards());


Game.prototype.playGameOneStep = function(){ 
    
        // Draw a card from the playerHand. Add that card to the this.player[0].playerHand.

        //let test_variable = theFinalModule.players[0].playerHand.current_cards[0].value;

       

        //let card1value = this.players[0].playerHand.drawCard().value;
        //let card2value = this.players[1].playerHand.drawCard().value;

}


//theFinalModule.dealCentralDeck(); 

let test_variable = theFinalModule.players;


// Should probably just pass this in as a this.players reference [0] and this.players[1].
// Each player now has 26 cards in their hands.
// Lets compare their first two cards.
// Below plays a single hand. Only player ONE can win.






/*
if(theFinalModule.players[0].playerHand.drawCard().value >= theFinalModule.players[1].playerHand.drawCard().value){
    //Add two cards to playerOnes deck.
    playerTwo.playerHand.drawCard().addCard(playerOne.playerHand);
    playerTwo.playerHand.drawCard().addCard(playerOne.playerHand);
} else {
    playerOne.playerHand.drawCard().addCard(playerTwo.playerHand);
    playerOne.playerHand.drawCard().addCard(playerTwo.playerHand);
}

// Refreshing the page just recreates the first round. How do I maintain persistence? 



// This is now adding cards correctly and subtracting them from the central deck.











//playerOne.playerHand.addCard(); // the addCard() function adds the CARD.addCard(TO NEW DECK)
// so to add a card to playerOnes DECK. Call the card in the big deck.drawCard(), you now have a card object.
// add this card to playerOnes Deck.
// So within the game.js:
// BigDeck.drawCard().addCard(playerOne.playerHand);

*/

export {playerOne, playerTwo, theFinalModule, Game, test_variable };



/*


function Game({playerCount = 2} = {}){
    this.players = playerCount;
    this.gameStatus = true; // Should the game keep going?
    this.winner = ""; // Name of player who reaches zero first;

}



Game.prototype.compareCards = function(player1, player2){

    // Deck.drawCard() will be called on each Player.deck.
    // This returns two card objects, which will be passed into this function....?
    // Maybe the players are passed into this function. Then the Player1.deck.drawCard() vs Player2.deck.drawCard();
    // We need to know which card belongs to which player. 
    // Which card is higher.
    // The player that has the higher card has their total card count incremented by 1. 
    // The losing player with the lower value card is decremented by 1.


} // Should this be a compound? Should the game take two decks, read the first card from them and compare them all within the function? 
// It seems like the deck should have a Deck.drawCard function. That is scalable, and returns a card.

*/
