import * as gamers from "./player.js";
import * as cardDeck from  "./deck.js";
//import * as cardT from "./card.js";


//Manually create and play a game. 


// Two players created with initial names and assigned locations. 
// Each player has a name, number of cards, array of cards, and location on the screen.
let playerOne = new gamers.Player({name:'conor', location: 'left'});
let playerTwo = new gamers.Player({name: 'sammy', location: 'right'});

// Now create a new card deck.


// Now we need to add cards to the players hands.

// The 26 needs to be a constant variable that is half the size of the initial card count.


// Now create the structure of the game. Currently feeding in the pre-built players.
// Features a brand new central deck. The game status will be turned false when a player has zero cards.
// Maybe this.winner is set to the name of the winning player.
function Game({playersArr = [playerOne,playerTwo], deck = new cardDeck.createNewDeck()} = {}){
    this.deck = deck;
    this.gameStatus = true; // Should the game keep going?
    this.winner = ""; // Name of player who reaches zero first;
    this.players = playersArr;
}

// A new game is created. This will be activated via the click button on the home screen.
let theFinalModule = new Game();

theFinalModule.deck.drawCard();





Game.prototype.dealCentralDeck = function(){
    // Use the add card function to add cards to each players deck. 
    for (let i = 0; i < 26; i++){
        // Draw a card from the Game.deck. Add that card to the this.player[0].playerHand.

        



        //this.players[0].playerHand.drawCard().addCard(t.playerHand);
        //this.players[1].drawCard().addCard(player2.playerHand);
    }

}

theFinalModule.dealCentralDeck(); // Should probably just pass this in as a this.players reference [0] and this.players[1].
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

export {playerOne, playerTwo, theFinalModule, Game};






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
