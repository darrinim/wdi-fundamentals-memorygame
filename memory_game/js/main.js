// const cards = [
// {
// 	rank: "queen",
// 	suit: "hearts",
// 	cardImage: "images/queen-of-hearts.png"
// },
// {
// 	rank: "queen",
// 	suit: "diamonds",
// 	cardImage: "images/queen-of-diamonds.png"
// },
// {
// 	rank: "king",
// 	suit: "hearts",
// 	cardImage: "images/king-of-hearts.png"
// },
// {
// 	rank: "king",
// 	suit: "diamonds",
// 	cardImage: "images/king-of-diamonds.png"
// }
// ]




// var cardsInPlay = [];



// function checkForMatch() {
// 	if (cardsInPlay[0] === cardsInPlay[1]) {
//   console.log("You found a match!");
// } else {
//   console.log("Sorry, try again.");
// }
// };

// function flipCard (cardId) {
// 	checkForMatch();
// 	if (cardsInPlay[0] === cardsInPlay[1]) {
// 	alert('You found a match!');
// }	else {
// 	alert('Sorry, try again.')
// }
// 	cardsInPlay.push(cards[cardId].rank);
// 	console.log("User flipped " + cards[cardId].rank);
// 	console.log(cards[cardId].cardImage);
// 	console.log(cards[cardId].suit);
// };

// flipCard(3);




// cardsInPlay.push(cards[cardId].rank);






var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne)

var cardTwo = cards[2];
cardsInPlay.push(cardTwo)
console.log("User flipped " + cardTwo);


console.log(cardsInPlay);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert
		("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
} 


