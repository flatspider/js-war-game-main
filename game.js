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

Game.prototype.acquireInitialGameDeck = function() {
    this.gdeck.getNewFullDeck(); // Does this return a deck or cards? It returns a deck object. 
}

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

Game.prototype.comparePlayerCards = function() {

    // Ensure that the players have cards.
    if (this.players[0].playerHand.current_cards.length === 0 || this.players[1].playerHand.current_cards.length === 0) {
        return ("DEAL CARDS");
    }

    let p1card = this.players[0].playerHand.current_cards[0]['cardValue']; // This statement is reading a card from the players hand.
    let p2card = this.players[1].playerHand.current_cards[0]['cardValue']; // Reads the value from player 2. 

    let player1cardcount = this.players[0].playerHand.current_cards.length;
    let player2cardcount = this.players[1].playerHand.current_cards.length;

    let war_array1 = []; // This array will be full of card objects. 
    let war_array2 = []; // This array will be full of card objects. 

    let war_cycle = 1;

    // Can I run this recursively? Or as a loop? Come back to the start

    if (p1card > p2card){
            // Player Ones card is larger than Player Two's card.
            // Add the two current cards to the end of player Ones deck.
            this.players[0].playerHand.current_cards.push(this.players[0].playerHand.current_cards.splice(0,1)[0]);
            this.players[0].playerHand.current_cards.push(this.players[1].playerHand.current_cards.splice(0,1)[0]);
            return "Player One has won the hand";
        } else if (p2card > p1card) {

        // Player Twos card is larger than Player Ones card. 
        // Add the two cards to Player Two card. 

            this.players[1].playerHand.current_cards.push(this.players[0].playerHand.current_cards.splice(0,1)[0]);
            this.players[1].playerHand.current_cards.push(this.players[1].playerHand.current_cards.splice(0,1)[0]);
            return "Player Two has won the hand";
        } else {

    // War!
    // If the values are equal, then check the length of the current cards available.
    // Lets go step by step.


        if (player1cardcount < (war_cycle * 4) + 1){
            return "Player 1 Loses"
        } else if (player2cardcount < (war_cycle * 4) + 1) {
            return "Player 2 Loses"
        } else {

            war_array1.push(this.players[0].playerHand.current_cards.splice(0,1)[0]);

            console.log("WARRRRR");
            return 5;


        }


        // If one player fails this test, the other player wins automatically. 

        // Draw three cards from each player. 

        // Push each card to the war_array.

        // Cannot call the compare cards function because it does not return true or false. 

        // The winner with the higher card needs to recieve all 10 cards. 

        // Two arrays are full of 3 cards each. Still need to capture the initial card. Where is that stored? Still at index zero. 

        // Splice 0 to 3 and add to array. 

        // Then determine a winner and add both arrays to the winner current_cards. 

        // Additionally, splice the zero index of both players and .push() to winners hand

        // NO TIES allowed. However, in case of war tie, start comparing the zero indexes of the war arrays. 

    

    }

}




export { Game };
