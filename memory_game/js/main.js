console.log("Up and running!");


const cards = ["queen", "queen", "king", "king"];

// var cardOne = cards[0];
// var cardTwo = cards[2];

// cardsInPlay.push(cardOne);
// cardsInPlay.push(cardTwo);


// console.log(cardsInPlay);


cardsInPlay = [];

// cardsInPlay.push(cards[cardId]);

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
};

function flipCard (cardId) {
	checkForMatch();
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert('You found a match!');
}	else {
	alert('Sorry, try again.')
}
	console.log("User flipped " + cards[cardId]);
};

flipCard(2);




cardsInPlay.push(cards[cardId]);

// if (cardsInPlay[0] === cardsInPlay[1]) {
// 	alert('You found a match!');
// }	else {
// 	alert('Sorry, try again.')
// }