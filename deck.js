import { Card } from "./card.js";


const partOfDeck = new Card();

// Below will not output to the console because it is nested in the structure. 
// Card is imported in here so we can use it to build the deck. 
export {partOfDeck};