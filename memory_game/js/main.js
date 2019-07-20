console.log("Up and running!");
cardsInPlay = [];

const cards = ["queen", "queen", "king", "king"];

var cardOne = cards[0];
var cardTwo = cards[2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);


console.log(cardsInPlay);


cardsInPlay = [];

if (cardsInPlay[0] === cardsInPlay[1]) {
	alert('You found a match!');
}	else {
	alert('Sorry, try again.')
}



console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
