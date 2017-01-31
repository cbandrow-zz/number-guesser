// Steps for completing JS.
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
// var ranMin = 1;
// var ranMax = 100;
// var newMin;
// var newMax;
var guessInput = document.querySelector("#guess");
var submitGuess = document.querySelector("#submit");
var yourGuess = document.querySelector("#your-guess");
var guessNumber = document.querySelector("#guess-number");
var guessResponse = document.querySelector("#guess-response");
var clearInput = document.querySelector("#clear");
var resetAll = document.querySelector("#reset");

function randomNumber() {
   ranNum = Math.floor((Math.random() * 101) + 1);
}
randomNumber();
console.log(ranNum);


submitGuess.addEventListener("click", function() {
  var userGuess = parseInt(guessInput.value, 10);
  console.log(userGuess);
  if (userGuess == ranNum) {
    yourGuess.innerText = "Your last guess:";
    guessNumber.innerText = userGuess;
    guessResponse.innerText = "Boom!";
    changeMinMax();
  } else if (userGuess > ranNum) {
    yourGuess.innerText = "Your last guess:";
    guessNumber.innerText = userGuess;
    guessResponse.innerText = "was too high!";
  } else if (userGuess < ranNum) {
    yourGuess.innerText = "Your last guess:";
    guessNumber.innerText = userGuess;
    guessResponse.innerText = "was too low!";
  } else if (isNaN(guessInput) == true) {
    yourGuess.innerText = "";
    guessNumber.innerText ="";
    guessResponse.innerText = "This isn't a number.";
  }
});

clearInput.addEventListener("click", function() {

});

// function changeMinMax() {
//   newMin = ranMin - 10;
//   newMax = ranMax + 10;
//   document.querySelector("#guess").min(newMin);
//   document.querySelector("#guess").max(newMax);
// }
