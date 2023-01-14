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


    let war_array1 = []; // This array will be full of card objects. 
    let war_array2 = []; // This array will be full of card objects. 

    let war_cycle = 1;


    // Can I run this recursively? Or as a loop? Come back to the start

    if (p1card > p2card){
        // Player Ones card is larger than Player Two's card.
        // Add the two cards to the end of player Ones deck.
        this.players[0].playerHand.current_cards.push(this.players[0].playerHand.current_cards.splice(0,1)[0]);
        this.players[0].playerHand.current_cards.push(this.players[1].playerHand.current_cards.splice(0,1)[0]);
    } else if (p2card > p1card) {

        // Player Twos card is larger than Player Ones card. 
        // Add the two cards to Player Two card. 

        this.players[1].playerHand.current_cards.push(this.players[0].playerHand.current_cards.splice(0,1)[0]);
        this.players[1].playerHand.current_cards.push(this.players[1].playerHand.current_cards.splice(0,1)[0]);
    } else {

    // War!
    // If the values are equal, then check the length of the current cards available.
    // Lets go step by step.

    if ( this.players[0].playerHand.current_cards.length >= (war_cycle * 4) + 1 && this.players[1].playerHand.current_cards.length >= (war_cycle * 4) + 1 ) {
        
        
        console.log("WARRRRR");
        return 5;

    }

    // In the first instance of war, check that each player has a playerHand.current_cards.length >= 5. Their original card has not been spliced.

    // If one player fails this test, the other player wins automatically. 

    // If both pass this test, then draw three cards. Splice three times. 

    // Where should these cards be stored...? In their own little array? 

    // Always drawing from zero. So both have cards that remain on their deck, checked as p1card and p2card. 

    // Splice out index[1],index[2],index[3] simultaneously. So maybe a start to end. 

    // Return index[4] as the next comparison card. 

    // Compare these two index[4]s to each other. 



    
    






    // Then skip 3 cards and call compare on the fourth index. If a tie again, check that length is available, then skip 3 , etc...








    }

    // War!
    // If the values are equal, then check the length of the current cards available. 
    // Then skip 3 cards and call compare on the fourth index. If a tie again, check that length is available, then skip 3 , etc...

}


// Take that player, and add the bottom card from player2s deck to the player 1 deck.

// This means the function sees it has a player. Now look for the other player. If I have 0, look for 1. If I have 1, look for 0. 
// Draw from the opposite player. 

//Lets go step by step and try to very simply modify a players deck. 

// The players deck is located in Game->players->[array of players]->playerHand Deck() object. 
// We need to modify that Deck() object's this.current_cards




//playerOne.playerHand.addCard(); // the addCard() function adds the CARD.addCard(TO NEW DECK)
// so to add a card to playerOnes DECK. Call the card in the big deck.drawCard(), you now have a card object.
// add this card to playerOnes Deck.
// So within the game.js:
// BigDeck.drawCard().addCard(playerOne.playerHand);


export { Game };
