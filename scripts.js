// Steps for completing JS.
//1. get a random number x
// 2. Create a function that inputs users chosen number, then uses a conditional statement to evaluate and compare the results. This function should contain all conditionals:
//   if too high x
//   if too low x
//   if matching x
//   if out of bounds
//   if not a number (NaN) x
// This function should also be responsible for displaying the result in the DOM.
// 3. Function to clear data from input box.
// 4. Function to reset everything and load new Random number.
// 5. Function and conditional if matching number is achieved. Adds 10 to the eligible pool of numbers.

//variables
var ranNum;
var ranMin = 1;
var ranMax = 100;
var guessInput = document.querySelector("#guess");
var submitGuess = document.querySelector("#submit");
var yourGuess = document.querySelector("#your-guess");
var guessNumber = document.querySelector("#guess-number");
var guessResponse = document.querySelector("#guess-response");
var clearInput = document.querySelector("#clear");
var resetAll = document.querySelector("#reset");

//Get Random Number for Comparison
function randomNumber(ranMax, ranMin) {
   ranNum = Math.floor(Math.random() * (ranMax - ranMin + 1) + ranMin);
   document.querySelector("#range").innerText = "Choose a number from " +  ranMax + " to " + ranMin ;
}
randomNumber(ranMin, ranMax);
console.log(ranNum);

//submit user guess for evaluation
submitGuess.addEventListener("click", function() {
  var userGuess = parseInt(guessInput.value, 10);
  console.log(userGuess);
  document.querySelector("#range").innerText = "Choose a number from " +  ranMin + " to " + ranMax ;
  document.getElementById("range").innerText = " ";
  if(userGuess == ranNum) {
    results (userGuess, "Boom!");
    win();
  } else if (userGuess > ranMax) {
    outsideRange(userGuess, "Outside of range of numbers")
  } else if (userGuess < ranMin) {
    outsideRange(userGuess, "Outside of range of numbers")
  } else if (userGuess > ranNum) {
    results(userGuess, "was too high!");
  } else if (userGuess < ranNum) {
    results(userGuess, "was too low!");
  } else if (isNaN(guessInput) == true) {
    notNum("This is not a number.");

  }
});
//win state
function win(){
  ranMin -= 10;
  ranMax += 10;
  console.log(ranMin, ranMax)
  biggerChallenge();

}
//NaN state
function notNum(msg){
  yourGuess.innerText = "";
  guessNumber.innerText ="";
  guessResponse.innerText = msg;
}

function outsideRange(guess,msg){
  yourGuess.innerText = "";
  guessNumber.innerText = guess;
  guessResponse.innerText = msg;
}
//Overall results
function results(guess, msg) {
  yourGuess.innerText = "Your last guess:";
  guessNumber.innerText = guess;
  guessResponse.innerText = msg;
}
//clear button
clearInput.addEventListener("click", function() {
  guessInput.value = null;
});
//reset button
resetAll.addEventListener("click", function() {
  reset();
});
//reset functionality
function reset(){
  guessInput.value = null;
  yourGuess.innerText = "";
  guessNumber.innerText ="";
  guessResponse.innerText = "";
  randomNumber(0, 100);
  console.log(ranNum);
}

function biggerChallenge(){
  resetAll.innerText ="New Challenge";
  resetAll.addEventListener("click", function() {
    yourGuess.innerText = "";
    guessNumber.innerText ="";
    guessResponse.innerText = "";
    randomNumber(ranMin, ranMax);
    resetAll.innerText ="Reset";
  })
};

// if (yourGuess == null){
//   document.querySelector("#clear").disabled = true;
//   document.querySelector("#reset").disabled = true;
// } else {
//   document.querySelector("#clear").disabled = false;
//   document.querySelector("#reset").disabled = false;
// }

// submitGuess.addEventListener("click", function() {
//   document.querySelector("#clear").disabled = false;
//   document.querySelector("#reset").disabled = false;
// })
