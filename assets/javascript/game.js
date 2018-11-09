/*Variables*/
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var guesses = document.getElementById("guesses");
var user = document.getElementById("user-input");
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "o", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessedLetters = [];

var winScore = 0;
var lossesScore = 0;
var guessCount = 9;

var letterPress = function (letter) {
    guessedLetters.push(letter);
    var overide = "";
    for (i = 0; i < guessedLetters.length; i++) {
        overide += guessedLetters[i];
       
    }
    console.log(overide);
    user.innerHTML = overide;

}



/* Player types keys */
document.onkeyup = function (e) {
    var userInput = e.key;

    letterPress(userInput);


    var randomChoice = Math.floor(Math.random() * 26);
    var aiChoice = alphabet[randomChoice];


    var resetGuess = function () {
        guessCount = 10;
    }

    if (userInput === aiChoice) {
        winScore++;
        wins.textContent = winScore;
        guessCount === 9;
        resetGuess();
        alert("You Win!");

    }

    else {
        losses.textContent = lossesScore;
        /*How do i stop it at 0*/
        guessCount--;
        guesses.textContent = guessCount;
        if (guessCount === 1) {
            lossesScore++;
            resetGuess();
        }

    }

}