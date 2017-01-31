// Steps for completing JS.
// 1. Create a function that chooses a random number. Use math.floor and math.random.
// 2. Create a function that inputs users chosen number, then uses a conditional statement to evaluate and compare the results. This function should contain all conditionals:
//   if too high
//   if too low
//   if matching
//   if out of bounds
//   if not a number (NaN)
// This function should also be responsible for displaying the result in the DOM.
// 3. Function to clear data from input box.
// 4. Function to reset everything and load new Random number.
// 5. Function and conditional if matching number is achieved. Adds 10 to the eligible pool of numbers.

//Get a Random Number.
var ranNum;
var guessInput = document.querySelector("#guess");
var submitGuess = document.querySelector("#submit");
var displayGuess = document.querySelector("#display");

// document.addEventListener("DOMContentLoaded", function() {
//   randomNumber();
// });
// function randomNumber() {
//    ranNum = Math.floor((Math.random() * 101) + 1);
// }
// console.log(ranNum);

submitGuess.addEventListener("click", function() {
    var userGuess = guessInput.value;
    displayGuess.innerText = userGuess;
  });
