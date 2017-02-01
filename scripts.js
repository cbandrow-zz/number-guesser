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
var challenge = document.querySelector("#challenge")

//Get Random Number for Comparison
window.onload = function() {
  randomNumber(ranMin, ranMax);
  minMax();
  disabled();
}
//generate random number
function randomNumber(ranMax, ranMin) {
   ranNum = Math.floor(Math.random() * (ranMax - ranMin + 1) + ranMin);
   console.log(ranNum);
}

// rangeText();
function disabled(){
  document.getElementById("challenge").disabled = true;
  document.getElementById("reset").disabled = true;
  document.getElementById("clear").disabled = true;
};

//print minimum, maximum values
function minMax() {
  document.querySelector("#max").innerText = ranMin;
  document.querySelector("#min").innerText = ranMax;
}

//submit user guess for evaluation
submitGuess.addEventListener("click", function() {
  var userGuess = parseInt(guessInput.value, 10);
  console.log(userGuess);
  document.getElementById("clear").disabled = false;
  document.getElementById("reset").disabled = false;
  if(userGuess == ranNum) {
    results (userGuess, "Boom!");
    document.getElementById("challenge").disabled = false;
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
    notNum("Try entering a number.");
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
//ineligible range input
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
};

//clear button
clearInput.addEventListener("click", function() {
  guessInput.value = null;
  document.getElementById("clear").disabled = true;
});

//reset button
resetAll.addEventListener("click", function() {
  reset();
  disabled();
});

//reset functionality
function reset(){
  guessInput.value = null;
  yourGuess.innerText = "";
  guessNumber.innerText ="";
  guessResponse.innerText = "";
  ranMax = 100;
  ranMin = 1;
  randomNumber(1, 100);
  console.log(ranNum);
  minMax();
}

//reset functionality, add new challenge
function biggerChallenge(){
  challenge.addEventListener("click", function() {
    guessInput.value = null;
    yourGuess.innerText = "";
    guessNumber.innerText ="";
    guessResponse.innerText = "";
    randomNumber(ranMin, ranMax);
    disabled();
    alert("Range is now between " + ranMin + " and " + ranMax)
    minMax();
  })
};
