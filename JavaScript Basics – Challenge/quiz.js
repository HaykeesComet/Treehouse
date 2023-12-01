/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let correctAnswers = 0;

// 2. Store the rank of a player
let playerRank;

// 3. Select the <main> HTML element
const main = document.querySelector('main');

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
const answer1 = prompt("4 + 4?");
const answer2 = prompt("5 x 2?");
const answer3 = prompt("16 / 8?");
const answer4 = prompt("10 - 3?");
const answer5 = prompt("100 / 10?");

if (+answer1 === 8) {
	correctAnswers++;
}
if (+answer2 === 10) {
	correctAnswers++;
}
if (+answer3 === 2) {
	correctAnswers++;
}
if (+answer4 === 7) {
	correctAnswers++;
}
if (+answer5 === 10) {
	correctAnswers++;
}

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/
if (correctAnswers === 5) {
	playerRank = "Gold";
}
else if (correctAnswers < 5 && correctAnswers > 2) {
	playerRank = "Silver";
}
else if (correctAnswers < 3 && correctAnswers >= 1) {
	playerRank = "Bronze";
}
else {
	playerRank = "No crown";
}
console.log(correctAnswers);
console.log(playerRank);

// 6. Output results to the <main> element
let finalResult = `<h2>Correct Answers: ${correctAnswers}</h2><h3>Player Rank: ${playerRank}.</h3>`;
main.innerHTML = finalResult;