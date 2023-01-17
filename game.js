import { Deck } from  "./deck.js";
import { Card } from "./card.js";
import { Player } from "./player.js";


//Manually create and play a game. 
function Game({gdeck = new Deck()} = {}){
    this.gdeck = gdeck; //This is an empty deck.
    this.player1 = new Player(); // Access individual players by this.player1
    this.player2 = new Player();
    this.pot = []; // This will hold cards that will be distributed to each player
}

Game.prototype.acquireInitialGameDeck = function() {
    // Cycle through and add cards to the deck array. 
    for (let i = 2; i < 15; i++){
        for (let j = 0; j < 4; j++){
            let temp_card = new Card({value: i, suit: j});
                this.gdeck.current_cards.push(temp_card); // Pushes the card objects into the current cards array
        }
    };
}

Game.prototype.dealCentralDeck = function(){
    // Use the add card function to add cards to each players deck. 
    for (let i = 0; i < 26; i++){
        this.player1.playerHand.push(this.gdeck.current_cards.splice(0,1)[0]); //This is a card in the deck at the game.
        this.player2.playerHand.push(this.gdeck.current_cards.splice(0,1)[0]);
    }
}

Game.prototype.drawCard = function() {
    
    // The shift function returns the zero index card in the current player hand. 
    const player1card = this.player1.playerHand.shift();
    const player2card = this.player2.playerHand.shift();

    // The pot is set to the player 1/player 2 cards and added to anything additional in the pot. 
    this.pot = [player1card, player2card, ...this.pot];

    // Now that the pot is full, run compare.
    this.comparePlayerCards();

}

Game.prototype.comparePlayerCards = function() {
    
    // What's in the pot? Each players cards. index[0] in the pot is player 1 card, index[1] in the pot is player 2 card

    // Each time, read the players zero card and add the card to the pot. 
    // After determining who wins, add the pot to their hand of cards. 

    console.log(this.pot);

    let p1card = this.pot[0]['cardValue'];
    let p2card = this.pot[1]['cardValue'];


    let player1cardcount = this.player1.playerHand.length;
    let player2cardcount = this.player2.playerHand.length;

    let war_cycle = 1;

    // Can I run this recursively? Or as a loop? Come back to the start

    if (p1card > p2card){
            // Player Ones card is larger than Player Two's card.
            // Add the two current cards to the end of player Ones deck.
            this.player1.playerHand = [...this.player1.playerHand,...this.pot];
            this.pot = [];
            return "Player One has won the hand";
        } else if (p2card >= p1card) {

            // Player Twos card is larger than Player Ones card. 
            // Add the two cards to Player Two card. 
            this.player2.playerHand = [...this.player2.playerHand,...this.pot];
            this.pot = [];
            return "Player Two has won the hand";
        } else {

        // War!
        // If the values are equal, then check the length of the current cards available.
        // Lets go step by step.

        /*
        if (player1cardcount < (war_cycle * 4) + 1){
            return "Player 1 Loses"
        } else if (player2cardcount < (war_cycle * 4) + 1) {
            return "Player 2 Loses"
        } else {


            war_array1.push(this.players[0].playerHand.current_cards.splice(0,1)[0]);

            // Build the arrays with four cards in them. 

            // Then compare the zero index.

            console.log("WARRRRR");
            return 5;


        }

            */
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
